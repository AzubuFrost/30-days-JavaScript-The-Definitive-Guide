if(!Function.prototype.bind){
    Function.prototype.bind = function(o,/*arguments*/){
        var self = this, boundArgs = arguments;
        return function(){
            var args = [],i;
            for(i =1 ; i< boundArgs.length;i++) args.push(boundArgs[i]);
            for(i = 0; i< arguments.length; i++) args.push(arguments[i]);
            return self.apply(o. args);
        }
    }
}