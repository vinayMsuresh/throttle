const btn = document.getElementById('btn1');

const fun = function(args){
    console.log('Expensive');
}

const throttle = function(func, limit){
    let flag = true;
    
    return function(){        
        let context = this;
        let args = arguments;
        if(flag){
            func.apply(context, args);
            flag = false;
            setTimeout(() => {
                flag = true
            }, limit);
        }
    }
}

const better = throttle(fun, 2000);

btn.addEventListener('click',better);