// demo01

var fn;
function foo() {
    var a = 2;
    function baz() {
        console.log( a );
    }
    fn = baz;
}
function bar() {
    fn();
}

foo();
bar(); // 2


//getter and setter 
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

//存取器属性，智能检测属性的写入值以及在每次属性读取时返回不同值
var serialnum = {
    $n: 0,
    // 返回当前值，然后自增
    get next() {return this.$n++;},
    set next(n) {
        if(n >= this.$n) this.$n = n;
        else throw "序列号的值不能比当前值小";
    }
}
// 对于this的理解
var o = {
    x:1,
    a: function(){

            function b(){
                function c(){
                    console.log(this.x);
            }
           c();
        }
        b();
    }
}

o.a();


var scope= 'global scope';
function checkscope(){
    var scope = 'local scope';
    function f(){return this.scope;}
    return f;
}
checkscope()();