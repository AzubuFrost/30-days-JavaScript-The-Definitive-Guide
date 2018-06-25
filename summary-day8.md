## PROFESSIONAL JAVASCRIPT FPR WEB DEVELOPER 

1. JS中没有重载，通常情况下后一个函数会覆盖掉前一个函数，原因是因为JS中函数也是一种特殊对象，引出猜想如下：
````javascript 
    function a(num){
        return num;
    }
    function a(num,num1){
        return num+num1;
    }
    console.log(a(1,2)); //结果3
    console.log(a(1)); //结果NaN
````
得出结论没有重载

2. 对象的创建
````javascript
    //工厂模式
    function createPerson(name,age){
        var o = new Object();
        o.name = name;
        o.age = age;
        o.sayName = function (){
            alert(name);
        }
        return o;
    }
    var person1 = createPerson("name","age");
    //构造函数模式
    function Person(name, age){
        this.name = name;
        this.age = age;
        this.sayName = function(){
            alert(this.name);
        }
    }
    var person1 = new Person("name","age");
    //原型模式
    function Person(){};

    Person.prototype.name = "name";
    Person.prototype.age = "age";
    Person.prototype.sayName = function(){ alert(this.name); };

    var person1 = new Person();
    person1.sayName();
    //原型模式的缺点
    function Person(){};

    Person.prototype.name = "name";
    Person.prototype.age = "age";
    Person.prototype.friends = ["a","b","c"];

    var person1 = new Person();
    var person2 = new Person();

    person1.friends.push("c");
    //person1.friends = ["a","b","c"]; this one might not see the hazard part of using prototype because the person1 create a friends that shield the prototype one behind  
    console.log(person2.friends); //a,b,c
    //组合模式
    function Person(name,age){
        this.name = name;
        this.age = age;
        this.friends = ["a","b"];       
    }
    Person.prototype.sayName = function(){
        alert(this.name);
    }
    var person1 = new Person("name","age");
    //寄生模式
    function Person(name,age){
        var o = new Object();
        o.name = name;
        o.age = age;
        o.sayName = function(){alert(this.name)};

        return o;
    }
    var person1 = new Person("name","age");//例如需要创建一个具有额外方法的特殊数组，由于不能改变Array的构造函数，所以必须用这个
    //动态原型模式
    function Person(name,age){
        this.name = name; 
        this.age = age;
        if(typeof this.sayName !== 'function'){
            Person.prototype.sayName = function(){
                alert(this.name);
            };
        }
    }
    var friend =new  Person("a","b");
    
````
3. 继承
````javascript
    //原型链继承
    function Person(name){
        this.name = name || "";
    }

    function Man(age){
        this.age = age || 0;
    }

    Man.prototype = new Person();
    //借用构造函数继承  
    function Person(name){
        this.name = name;
    }
    function Man(age){
        Person.call(this,"");
        this.age = age;
    }
    //组合继承
    function Person(name){
        this.name = name;
    }
    Person.prototype.sayName = function(){console.log(this.name)};
    function Man(age ){
        Person.call(this,"");
        this.age = age;
    }
    Man.prototype = new Person("");
    Man.prototype.sayAge = function (){console.log(this.age)};
    var jack = new Man(16);
    //寄生式组合继承
    function Person(name){
        this.name = name;
    }
    Person.prototype.sayName = function (){console.log(this.name)};
    function Man(age){
        Person.call(this,"");
        this.age = age;
    }
    (inheritPrototype(Man,Person){
        var prototype = Object.create(Person.prototype);
        prototype.constructor = Man;
        Man.prototype = prototype;

    })(Man,Person);
    Man.prototype.sayAge = function(){console.log(this.age);}
````