````javascript
//简型promise
    function Promise(fn){
        var state = "pending";
        var value = null;
        var callbacks = [];

        this.then = function(onFullfilled){
            return new Promise(function(reslove){
                 if(state === "pending"){
                    callbacks.push(onFullfilled);
                    return this;
            }) 
          
            // }
            // onFullfilled(value);
            // return this;
        }

        function reslove(newValue){
            value = newValue;
            state = "fullfilled";
            setTimeout(function(){
                callbacks.forEach(function(callback){
                    callback(value);
                })
            },0);
        }
        fn(reslove);
    }
````