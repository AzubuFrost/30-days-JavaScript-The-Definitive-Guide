1. MEMORIZATION 
    记忆函数以牺牲空间复杂度的方法，利用闭包将需要重复计算的数据存储在闭包中，以便提高代码效率。减少不必要的重复计算
````javascript
//递归模式记忆函数
var memorize = function(memo,formula){
    var recur = function(n){
        var result = memo[n];
        if(typeof result != "number"){
            memo[n] = formula(recur,n);
            result = memo[n];
        }
        return result;
        }
        return recur;
}
var fibonacci = memorize([0,1],function(recur,n){return recur(n-1)+recur(n-2)});

var factorial = memorize([1],function(recur,n){
    return n*recur(n-1)
});

````
2. Currying 
    柯里化函数本质目的是收集参数并且计算，其主要用途是提高代码模块化，还可以使函数延迟计算。
````javascript
function curry(fn){
  var arr = arguments[1] || [];
  var len = fn.length;
  return function(){
    var innerArgs = Array.prototype.slice.call(arguments);
    return function(arg){
      if(arg.length === len){
        return fn.apply(null,arg);
      }
      else {
        return curry(fn,arg);
      }
    }(arr.concat(innerArgs))
  }
}
````