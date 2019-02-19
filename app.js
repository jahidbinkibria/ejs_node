let time = 0; 
let timer = setInterval(() =>{
    console.log(time++);
    if(time>5) clearInterval(timer);
}, 1000);

