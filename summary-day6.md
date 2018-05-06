## CHAPTER7

1. 数组可以使用负数非整数甚至字符来索引数组，但是这种情况下，其只能当作常规的对象属性，而非数组索引
    ```javascript
        var a = [1,2,3];
        /*a.length = 3*/
        a["a"] = 4;
        console.log(a); /*[1,2,3,a:4]*/
        /*a.length = 3*/

    ```

2. 稀疏数组：挡在数组直接量中省略值时不会创建稀疏数组，其值是undefined，可用in操作符检测出来 0 in a1 

3. 数组长度的特殊性为，当设置length属性为一个小于当前长度的非负整数n时，当前数组中那些索引值大于或者等于n的元素从中删除
    ```javascript
        a = [1,2,3,4,5]
        a.length = 0 
        //删除所有元素
    ```
4. 数组的遍历
```javascript
    var keys = Object.keys(o);
    var values = [];
    for(var i =0, len = keys.length;i < len; i++){
        var key = keys[i];
        values[i] = o[key];
    }
    //从o对象转化为数组
```
```javascript
    var a = [];
    if(!a[i]) continue;/*跳过数组中null，undefined和不存在的元素*/
    if(a[i] === undefined)continue;/*跳过数组中undefined和不存在的元素*/
    if(!(i in a)) continue;/*跳过不存在的元素*/
    if(!a.hasOwnProperty(i)) continue;/*此句适用于for in 中用于跳过继承的属性*/
```
    由于for/in循环可以以不同的循序遍历对象的属性，而且如果数组同时拥有对象属性和数组元素，返回的属性名很可能是按照创建的顺序而非数值的大小顺序。所以最好不要使用for/in

5. 