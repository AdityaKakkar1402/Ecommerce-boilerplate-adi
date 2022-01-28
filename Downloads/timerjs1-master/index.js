// const birthDay="14 Feb 2022";

 daysid=document.getElementById('days');
 hoursid=document.getElementById('hours');
 minid=document.getElementById('min');
 secid=document.getElementById('sec');
 givenDate=document.getElementById("dateInput");
 buttonDate=document.getElementById("buttonInput");



function countDown(){
    var dateVal=new Date(givenDate.value);
    dateVal.setHours(0,0,0,0);
    dateVal.setFullYear(2022);
    

    
    // const birth= new Date(birthDay);
    const curDate= new Date();
    const sec=(dateVal-curDate)/1000;
    const days=Math.floor(sec/(3600*24));
    const hours=Math.floor(sec/3600)%24;
    const mins=Math.floor(sec/60)%60;
    const secs=Math.floor(sec)%60
    
    
    daysid.innerHTML=days;
    hoursid.innerHTML=hours;
    minid.innerHTML=mins;
    secid.innerHTML=secs;

    console.log(dateVal);
    console.log(curDate);
    // console.log(birth);


   
}

buttonDate.addEventListener("click",function(){
    setInterval(countDown,1000);
});

