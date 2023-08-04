---
title: 用户定义字面量
create: 2023-07-01
desc: C++，User-defined literals（这是一篇旧文章，日期是后来的）
---

在[nlohmann/json](https://github.com/nlohmann/json)中，只需在字符串后写上`_json`即可自动转为json类型的变量。

这是什么操作？！一脸懵逼。。。于是翻了下其源代码：

```cpp
JSON_HEDLEY_NON_NULL(1)
inline nlohmann::json operator "" _json(const char* s, std::size_t n)
{
    return nlohmann::json::parse(s, s + n);
}
```

哦豁，咋跟重载操作符似的。。。  
我没见过啊！还好有注释：

> This operator implements a user-defined string literal for JSON objects. It can be used by adding `"_json"` to a string literal and returns a JSON object if no parse error occurred.
>
> 这个运算符实现了对于JSON对象的“自定义的字符串字面量”。在字符串字面量后加上`"_json"`就能用，如果解析没错，就返回一个JSON对象。

好！根据`user-defined string literal`顺藤摸瓜找到了文档。  
链接：<https://zh.cppreference.com/w/cpp/language/user_literal>

----

这东西叫做用户定义字面量，User-defined literals。

大概就是在一些值后边加上自定义的标识，就能被你的函数解析啦~~~  
函数类似重载运算符，大致是`operator "" 标识符`。

支持的类型文档有列出，包括具体用法、具体限制之类的，自己去看看吧~~~  
下面示范性地写一小段，在字符串后加入`_upper`即可全部大写：

```cpp
#include <iostream>
using namespace std;

string operator "" _upper (const char* a, size_t n) {
	string s(a);
	for(char &c : s) {
		if(c >= 'a' && c <= 'z')
			c += 'A' - 'a';
	}
	return s;
}

int main() {
	cout << "abcDEF"_upper; //ABCDEF
}
```