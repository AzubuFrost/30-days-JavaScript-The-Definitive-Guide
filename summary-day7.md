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