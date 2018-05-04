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
    ```
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

var q = inherit(p);
q.x = 1, q.y = 1;
console.log(q.r);
console.log(q.theta);
    ```

