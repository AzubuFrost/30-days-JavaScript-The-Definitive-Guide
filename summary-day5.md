## CHAPTER6
1. getter setter：由getter 和 setter定义的属性乘坐存储器属性，不同于数据属性，数据属性只有一个简单的值；## 存储器属性不具有可写性。
    ```
        //定义存取器属性简单方法
        var o = {
            //数据属性
            data_prop:value,
            //存取器属性
            get accessor_prop() {},
            set accessor_prop(value) {}
        }

    ```
2. 存取器属性是可以继承的：
    ```javascript
    var p = {
    x : 1.0,
    y : 2.0,

    get r() { return Math.sqrt(this.x * this.x + this.y * this.y )},
    set r(value) {
        var oldvalue = Math.sqrt(this.x * this.x + this.y * this.y );
        var ratio = value/oldvalue;
        this.x *= ratio;
        this.y *= ratio;
    },
    get theta() {return Math.atan2(this.y, this.x);}
    }

    function inherit(p){
    if( p == null ) throw TypeError();  /*p是一个对象，但不能是null*/
        if( Object.create )   
            return Object.create(p);
        var t = typeof p;
        if( t !== "object" && t !== "function") 
        throw TypeError();
        function f(){};     /*定义一个空构造函数 */
        f.prototype = p;    /*将原型属性设置为p*/
        return new f();     /*使用f()创建p的继承对象*/
    }    

    var q = inherit(p);
    q.x = 1, q.y = 1;
    console.log(q.r);
    console.log(q.theta);
    ```

3. 数据属性的4个特性分别是它的值，可写性，可枚举型和可配置型。存取器属性不具有值特性和可写性。

4. 获得某个对象的**自有**特定属性 `Object.getOwnPropertyDescriptor()`;获得继承属性的特性，需要遍历原型链Object.getPropertyOf()

5. 想要设置属性的特性，需要调用Object.definedProperty(需该对象，属性，属性描述对象)

6. * 如果对象是不可扩展的，则可以编辑已有的自由属性，但不能添加新属性。
    * 如果的属性是不可配置的，则不能修改他的可可配置性和可枚举性；不能修改getter setter方法，也不能转换为数据属性或者存取器属性；不能将他的可写性从false=> true，但是可以从true到false。
    * 如果数据属性是不可配置且不可写的，则不能修改它的值。然而可配置但不可写属性的值是可以修改的（标记可写=> 修改，最后转换为不可写）

7. 函数把一个对象的属性复制到另一个对象中
    ```javascript
        Object.defineProperty(Object.prototype,"extend",
        {
            writable:true,
            configurable:true,
            enumerable:false,
            value: function(o){
                var names = Object.getOwnPropertyNames(o);
                for(var i = 0; i < names.length; i++ ){
                    if(names[i] in this) continue;
                    var desc = Object.getOwnPropertyDescriptor(o,names[i]);
                    Object.defineProperty(this, names[i], desc);
                }
            }
        });
    ```