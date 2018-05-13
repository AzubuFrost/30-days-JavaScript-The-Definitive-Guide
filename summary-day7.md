 ## CHAPTER 8 

1. JS函数调用不检查传入形参的个数。

2. 函数中的arguments并不是真正的数组，是一个类数组对象。

3. callee指代当前正在执行的函数。caller指代调用当前正在执行的函数的函数

4. javascript中的函数并不是原始值，而是一种特殊的对象，也就是说函数可万一拥有属性。当函数需要一个静态变量来再调用是保持某个值不变，最方便的方式就是给函数定义属性，而不是定义全局变量.
```javascript
    //计算阶乘，并将结果缓存至函数的属性中
    function factorial(n){
        if(isFinite(n) && n>0 && n == Math.round(n)){
            if(!(n in factorial)){
                factorial[n] = n* factorial(n-1);
            }
            return factorial[n];
        }
        else return NaN;
    }
    factorial[1] = 1;
    //初始化缓存以保存这种基本情况，利用递归
```

5. **闭包** 简而言之，闭包可以捕捉到局部变量和参数，并一直保存下来。用法：函数柯里化和模块化
```javascript
//该函数作用是将counter计数器‘封装’到模块中去，外部不可以改变计数器
    var uniqueInteger = (function(){
                            var counter = 0;
                            return function(){ return counter++;}
    }());
```
```javascript
    /*这个函数给对象o增加了属性存取方法，方法名称为get<name>,set<name>，如果提供了一个判定函数，setter方法就会检查合法性；这个函数有一个非同寻常指出，就是getter和setter，所操作的属性值并没有存储在对象o中，相反，这个值仅仅是保存在函数中的局部变量，geetersetter同样是局部函数，因此可以访问这个局部变量，也就是说对与两个存取器方法来说这个变量是私有的，没有办法绕过存取器方法来设置或修改这个值*/
    function addPrivateProperty(o,name,predicate){
        var value;
        //getter 方法简单地将其返回
        o['get'+name] = function（） { return value;}
        //setter方法首先检查值是否合法，若不合法就抛出异常，否则就将其储存起来
        o['set' + name] = function(v) {
            if(predicate && !predicate(v))
                throw Error("set" + name + ": invalid value " + v);
            else 
                value = v;
        };
    }
```