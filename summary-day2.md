## CHAPTER3

1. == 在判断是会做类型转换, ===就不会做类型转换.
        undefined == false //false
        null == false //false
        undefined == null //true

2. 空数组会被转换成数字0 => 对象到数字的转换过程中，JS会首先尝试调用valueof()，但其返回一个对象，而不是原始值，所以JS会尝试调用toString方法,空数组会被转换成空字符串=>0
        [] == 0 //true
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
        //NaN

3. 不像其他面向对象语句，使用var重复声明变量是合法的，即使在严格模式下
        'use strict'	
        var a = 9; 
        var a = 8; //legal

4. 函数体内，局部变量的优先级高于同名的全部变量

5. 当你声明了一个JS的全局变量, 实际上是定义了全局对象的一个属性. 当 使用var 声明，属性是不可配置的 **JS中全局变量是全局对象的属性，而局部变量当作跟函数调用相关的某个对象的属性，其对象ES3中叫做call  oject， ES5中叫做声明上下文对象**
        var truevar = 1; // 不可删除
        fakevar = 2; //可删除
        delete truevar //false 
        delete fakevar //true 

6. 作用域链

## CHAPTER4

1. 