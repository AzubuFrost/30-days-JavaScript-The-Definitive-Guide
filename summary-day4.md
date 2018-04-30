## CHAPTER6

1. 原型
    * null 没有原型， Object.prototype也没有原型，不继承任何属性。
    * Object.create()方法创建一个新对象，第一个参数是对象的原型，可以通过传入参数null来创建一个没有原型的新对象。创建普通空对象，需要传入object.prototype。

2. 通过原型继承创建一个新对象
    ```
        //inherit 返回了一个继承自原型对象p的属性的新对象
        //这里使用ECMAScript 5中的Object.create()函数
        //如果不存在Object.create(),则退化使用其他方法
        function inherit(p){
            if( p == null ) throw TypeError();  //p是一个对象，但不能是null
            if( Object.create )   
                return Object.create(p);
            var t = typeof p;
            if( t !== "object" && t !== "function") 
            throw TypeError();
            function f(){};     //定义一个空构造函数
            f.prototype = p;    //将原型属性设置为p
            return new f();     //使用f()创建p的继承对象
        }    
    ```

3. JS中的继承
    * 原型链上的属性可以继承。
    * 属性赋值操作首先检查原型链，以此判定是否允许赋值操作。例如，如果o继承自一个只读属性x，那么赋值操作是不允许的。如果允许属性赋值，他也总是在原始对象上创建属性或对已有的属性赋值，而不会去修改原型链。在JS中，只有在查询属性是才体会到继承的存在，而设置属性则和继承无关，这可以使程序员可以有选择的覆盖继承的属性
    * hasOwnPropterty()方法用来检测给定的名字是否是对象的**自有属性**。
    ```
        var o = { x : 1 }
        o.hasOwnProperty("x") //true
        o.hasOwnProperty("y") //false
        o.hasOwnProperty("toString") //false 继承属性
    ```
    * propertyIsEnumerable用来检测是自有属性并且属性是可枚举的。某些内置属性是不可枚举的
    ```
        o.propertyIsEnumerable("x") //true
        Object.prototype.propertyIsEnumerable("toString") //不可枚举
    ```
    * 判断属性是否是undefined可以用！==，但是有一种场景：当属性被显式的赋值为undefined的时候，只能用in运算符而不能用！==。in可以区分开不存在的属性和存在但值为undefined的属性
    ```
        var o = { x: undefined }
        o.x !== undefined //false 属性存在，但值为undefined
        o.y !== undefined //false 属性不存在
        "x" in o //true
        "y" in o //false
    ```