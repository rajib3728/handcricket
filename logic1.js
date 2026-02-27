function humanandhumanplay()
{
 window.location.href="humanandhuman.html";
} 
function humanandrobotplay()
{
    window.location.href="humanandrobot.html";
}

    var x1=document.getElementById("song1");
    
     let isplay=false;
    function fun2()
    {
       x1.play();
       isplay=true;
        
    }
    function fun3()
    {
        isplay=false;
       x1.pause();
       
       
    }
    function fun1()
    {
        if(isplay)
        {
            fun3();
        }
       else{
           fun2();
       }
    }
    