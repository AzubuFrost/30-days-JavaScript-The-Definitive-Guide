CHAPTER 1
1. Javascript is case-sensitive while HTML is not(exception for XHTML).
2. Javascript compiler ignores space(空格) and shift(换行) 
3. Identifier(标识符) must start with letters, underscore or dollar sign, must not be numbers in case compiler distinguish between numbers and identifier.
   in addtition, all symbols in the set of unicode can be used as identifier such as PI(3.1415926).
4. The usage of semicolon: 
    1. `var a 
        a
        =
        3
        console.log(a) => var a ; a = 3; console.log(a);`
    2. `var y = x + f
        (a+b).toString()` => var y = x + f(a+b).toString();
    3. `return 
        true;` => return; true;
    4. `x
        ++
        y` => x; ++y; 
CHAPTER 2
1. `NaN === NaN` //false
    `Nan !== Nan` // true
2. Javascript use EEE Standard for Floating-Point Arithmetic => 无法精确表示1/10, 但可以精确表示1/2 => 0.3-0.2 === 0.0999999998
    0.1+0.2 === 0.3000000004
3. String can be used as Array after ECMAScript5
4. typeof(null) => "object" typeof(undefined) => "undefined"
    null == undefined //true
5. 字符串的包装对象： 引用字符串属性的时候，会通过调用new String(s)的方式转换成对象，对象继承了字符串的方法，属性引用结束之后，会直接销毁其对象。
    `var s = 'test';
    s.len = 4;
    var t = s.len` //undefined
6.1