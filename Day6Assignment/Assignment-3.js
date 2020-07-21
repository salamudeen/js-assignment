    let name = prompt('Enter Your Name','Anonymous');
    document.getElementById('heading').innerText +=` , ${name}`;
    const clocktime = document.getElementById('clocktime');
    const button = document.getElementById('btn');
    const backgrnd = document.getElementById('bg');    
    const txt = document.getElementById('txt');
    function clock()
    {
        let date = new Date();
        let time = date.toLocaleTimeString();
        clocktime.innerText = time;
    }
    setInterval(clock,1000);        
    button.onclick = ()=>{
    if(backgrnd.className == 'show'){
        backgrnd.className = '';
        button.innerText = "Dark Mode"; 
        txt.innerText = 'You Are Using Normal Mode';
    }
    else{
        backgrnd.className = 'show';
        button.innerText = "Normal Mode";           
        txt.innerText = 'You Are Using Dark Mode'; 
    }
     }