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

2. 