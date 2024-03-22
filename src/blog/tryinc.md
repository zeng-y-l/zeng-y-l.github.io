---
title: C 实现 try
create: 2024-03-23
desc: longjmp 实现异常处理
---

# C 实现 try

随手用 C 写了个异常处理的小玩意儿。使用 `setjmp` `longjmp`， 支持嵌套 try、重复抛出。

`exn.h`：

```c
#ifndef EXN_H
#define EXN_H

#include <setjmp.h>
#include <stdbool.h>

typedef struct {
  unsigned int id;
  const char *name;
} exn_t;

typedef struct {
  bool limited;
  union {
    jmp_buf *buf;
    exn_t exn;
  } data;
} exn_state;

extern exn_state exn_state_global;

void throw(exn_t exn);

#define TRY                                                                    \
  {                                                                            \
    exn_state exn_state_local = exn_state_global;                              \
    exn_state_global.limited = true;                                           \
    jmp_buf this_jmp_buf;                                                      \
    if (!setjmp(this_jmp_buf)) {                                               \
      exn_state_global.data.buf = &this_jmp_buf;

#define CATCH(e)                                                               \
      exn_state_global = exn_state_local;                                      \
    } else {                                                                   \
      exn_t e = exn_state_global.data.exn;                                     \
      exn_state_global = exn_state_local;

#define END_TRY                                                                \
    }                                                                          \
  }

#endif
```

`exn.c`：

```c
#include "exn.h"
#include <setjmp.h>
#include <stdlib.h>

exn_state exn_state_global = {
    .limited = false,
};

void throw(exn_t exn) {
  if (!exn_state_global.limited) {
    exit(1);
  }
  jmp_buf *buf = exn_state_global.data.buf;
  exn_state_global.data.exn = exn;
  longjmp(*buf, 1);
}
```

使用很简单：

```c
#include "exn.h"
#include <stdio.h>

int divide(int num, int den) {
  if (den == 0) {
    throw((exn_t){.id = 1, .name = "Divide by zero"});
  }
  return num / den;
}

int main() {
  TRY {
    printf("%d / %d = %d\n", 3, 1, divide(3, 1));
    printf("%d / %d = %d\n", 2, 0, divide(2, 0));
    printf("%d / %d = %d\n", 1, 1, divide(1, 1));
  }
  CATCH(e) {
    printf("Error %d: %s\n", e.id, e.name);
  }
  END_TRY;
}
```