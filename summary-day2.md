## CHAPTER3

1. == 在判断是会做类型转换, ===就不会做类型转换.
        `undefined == false //false
        null == false //false
        undefined == null //true`

2. 空数组会被转换成数字0 => 对象到数字的转换过程中，JS会首先尝试调用valueof()，但其返回一个对象，而不是原始值，所以JS会尝试调用toString方法,空数组会被转换成空字符串=>0
        `[] == 0 //true
        {a:9} + 6
        //6
        {a:9} + 6
        //6
        {a:9} + {}
        //"[object Object][object Object]"
        {a:9} + []
        //0
        [1,2] + []
        //"1,2"
        {a:9} + [1,2]
        //NaN`

3. 不像其他面向对象语句，使用var重复声明变量是合法的，即使在严格模式下
        `'use strict'	
        var a = 9; 
        var a = 8; //legal`

4. 函数体内，局部变量的优先级高于同名的全部变量

5. 当你声明了一个JS的全局变量, 实际上是定义了全局对象的一个属性. 当 使用var 声明，属性是不可配置的 **JS中全局变量是全局对象的属性，而局部变量当作跟函数调用相关的某个对象的属性，其对象ES3中叫做call  oject， ES5中叫做声明上下文对象**
        `var truevar = 1; // 不可删除
        fakevar = 2; //可删除
        delete truevar //false 
        delete fakevar //true`

6. 作用域链

## CHAPTER4

1. 在方法调用中，执行函数体的时候，作为属性访问主题的对象和数组便是其调用方法内this的指向

2. `var a = 1    
   b = (a++)+a //b = 3 a = 2`
   计算顺序：计算b；计算a++; 计算a；计算a++ +a;赋值 

3. 求余数运算符在js中也可用于浮点数

4. 加号运算符的特殊性：如果其中一个操作数是字符串或者转换为字符串的对象，另外一个操作数将会转换为字符串，将进行字符串的链接操作，如果不是将进行算术加法运算。

5. /+ 也可以是一元运算符，主要用来把操作数转换为数字，并返回转换后的数字 例如 +{} 返回 NaN

6. JS中对象的类是通过初始化他们的构造函数来定义的. 
    表达式 o instanceof f => JS首先计算f.prototype,然后再原型链中查找o，如果找到，那么o是f的一个实例

7. 短路: false && XXXX 而 || 常用于提供默认值 p = p || {}


