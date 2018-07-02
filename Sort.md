````javascript
    //冒泡排序
    function bubblesort(arr){
        for(var i = 0;i<arr.length && flag ;i++)
            var judge = false;
            for(var j = 0; j<arr.length-i-1;j++){
                if(arr[j]>arr[j+1]){
                    var temp = arr[j+1];
                    arr[j+1] = a[j];
                    a[j] = temp;
                    flag =true; 
                }
            }
    }
    //插入排序
    function insertionsort(arr){
        var length = arr.length;
        for(var i = 0; i<length;i++){
            for(var m = length-i; m>0;m--){
                if(arr[m]<arr[m-1]){
                    var temp = a[m-1];
                    arr[m-1] = a[m];
                    a[m] = a[m-1];
                }
            }
        }
    }
    //快速排序
    function rapidsort(arr){
        if(arr.length<=1) return arr;
        var pivotIndex = Math.floor(arr.length/2);
        var pivot = arr.splice(pivotIndex,1)[0];
        var left = [];
        var right = [];
        for(var i = 0;i<arr.length;i++){
            if(arr[i]<pivot)
                left.push(arr[i]);
            else right.push(arr[i]);
        }
        return rapidsort(left).concat([pivot],rapidsort(right));
    }
````