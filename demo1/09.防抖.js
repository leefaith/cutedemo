function debounce(func,wait){
let timeout;
return function(){
    let args=arguments;
    let content=this;
    if(timeout)clearTimeout(timeout);
    timeout = setTimeout(()=>{
        func.apply(content,args)
    },wait)
}    
}

function throttle(func,wait){
    let content, args;
    let old=0;
    return function(){
        content=this;
        args=arguments;
        let now = new Date().valueOf();
        if(now-old>wait){
            func.apply(content,args)
            old= now
        }
    }
}
