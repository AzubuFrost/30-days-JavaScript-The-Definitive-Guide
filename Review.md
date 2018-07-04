## JAVASCRIPT 

1.  Duplicate
````javascript
    Array.prototype.RemoveDuplicate = function(){
        return [...new Set(this)];
    }
    //-----------------
    Array.prototype.RemoveDuplicate = function(){
        var agent = [];
        this.forEach(function(element,index){
            if(this.indexOf(element) === index){
                agent.push(element);
            }
        });
        return agent;
    }
````
2. 查找共同的最近父节点
````javascript
    function FindParentNode(node1,node2){
        if(node1.contains(node2))
        return node1;
        else if (node2.contains(node1))
        return node2;
        else return FindParentNode(node1.parentNode,node2);
    }
````
3. 获取URL的参数
````javascript
    function getUrlParam(url,value){
        var param = url.split("?")[1];
        var result = [];
        if(value){
            var p = param.split("&");
            p.forEach(function(element,index){
                if(element.startWith(value))
                    result.push(element.split("=")[1]);
            })
            return result.length == 0 ? "" : result;
        }
        else  
    }

````
4.改变this的指向
````javascript
    function bindthis(func,object){
       return function (){
           var param = Array.from(arguments);
           return func.apply(object,param);
       }
    }
````

5. 根据包名，在指定空间中创建对象
````javascript
    function namespace(space,package){
        var pack = package.split(".");
        var parent = oNamespace ;
        for(var i = 0; i < package.length;i++){
            var property = package[i];
            if(typeof parent[property] !== "object")
            parent[property] = {};

            parent = parent[property];
        }
        return 
    }
````
6. 斐波那契
````javascript
    function fi(n,first = 1, second =1){
        if(n<=2) return second;
        return fi(n-1,second,first+second);
    }
````

7. 找出数组中出现次数最多的一项并统计
    ````javascript
        function FrequencyofArray(arr){
           var obj = {};
           var sum = 0;
           for(var i = 0;i<arr.length;i++){
               if(obj[arr[i]])
                obj[arr[i]] +=1;
                else obj[arr[i]] = 1;
           }
           for(var count in obj){
               if(obj[count]> sum)
               sum = obj[count];
               a = k;s
           }
            
        }

    class EventEmitter {
        constructor(){
            this.messageBox = {};
        }
        on(event,func){
            const callbacks= this.messageBox[event] || [];
            callbacks.push(func);
            this.messageBox[eventName] = callbacks;
        }
        emit(event,...args){
            const callbacks = this.messageBox[event];
            callbacks.forEach(function(callback){
                callback(...args);
            })
        }
        off(eventName, func) {
            const callbacks = this.messageBox[eventName];
            const index = callbacks.indexOf(func);
        if (index !== -1) {
            callbacks.splice(index, 1);
        }
    }
    }
    ````