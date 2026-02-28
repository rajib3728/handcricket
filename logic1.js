

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
l1=[]
function dobat()
{
     var num2 = Math.floor(Math.random() *7);
     document.getElementById("res1").innerHTML="Bat: "+num2
}
  
function doball()
{
    var num3 = Math.floor(Math.random() *7);
    document.getElementById("res2").innerHTML="Ball: "+num3
    
}
function check()
{
  var a=document.getElementById("res1").innerHTML.split(" ")[1];
  var b=document.getElementById("res2").innerHTML.split(" ")[1];
  if (a==b)
  {
    document.getElementById("res3").innerHTML="You are out"

      s1=0
            for (var i=0;i<l1.length;i++)
                        {
                            
                            s1=s1+l1[i]
                        }
                               document.getElementById("res4").innerHTML="Target: "+s1

                                document.getElementById("bat").disabled=true;
                                document.getElementById("bat").style.cursor="not-allowed";
                                document.getElementById("bat").style.backgroundColor="grey";
                                document.getElementById("ball").disabled=true;
                                document.getElementById("ball").style.cursor="not-allowed";
                                document.getElementById("ball").style.backgroundColor="grey";
                                document.getElementById("check").disabled=true;
                                document.getElementById("check").style.cursor="not-allowed";
                                document.getElementById("check").style.backgroundColor="grey";
                                 document.getElementById("show").style.display="block"; 


                                  document.getElementById("ball1").style.display="block"; 
          document.getElementById("bat1").style.display="block";  
           document.getElementById("check1").style.display="block"; 
  }
  else{
    l1.push(parseInt(document.getElementById("res1").innerHTML.split(" ")[1]));
    document.getElementById("res3").innerHTML="continue"
  }

}

function show(){

 
    document.getElementById("res5").innerHTML="All Run: "+l1;
}

l2=[]
function dobat1()
{
     var num2 = Math.floor(Math.random() *7);
     document.getElementById("res6").innerHTML="Bat: "+num2
}
function doball1()
{
    
     var num2 = Math.floor(Math.random() *7);
     document.getElementById("res7").innerHTML="Bat: "+num2

}
function check1()
{
      var a=document.getElementById("res6").innerHTML.split(" ")[1];
  var b=document.getElementById("res7").innerHTML.split(" ")[1];
if (a==b)
  {
    document.getElementById("res8").innerHTML="Computer is out"
  

    s1=0
            for (var i=1;i<l2.length;i++)
                        {
                            
                            s1=s1+l2[i]
                        }


                                document.getElementById("bat1").disabled=true;
                                document.getElementById("bat1").style.cursor="not-allowed";
                                document.getElementById("bat1").style.backgroundColor="grey";
                                document.getElementById("ball1").disabled=true;
                                document.getElementById("ball1").style.cursor="not-allowed";
                                document.getElementById("ball1").style.backgroundColor="grey";
                                document.getElementById("check1").disabled=true;
                                document.getElementById("check1").style.cursor="not-allowed";
                                document.getElementById("check1").style.backgroundColor="grey";
                                 document.getElementById("show1").style.display="block"; 
                          document.getElementById("result").style.display="block"; 
                          document.getElementById("res9").innerHTML="Score: "+s1


                    }
                    else{
                        document.getElementById("res8").innerHTML="Continue"
                        l2.push(parseInt(document.getElementById("res6").innerHTML.split(" ")[1]));

                    }

}

function show1(){

 
    document.getElementById("res10").innerHTML="All Run: "+l2;
}

function result()
{
      var firstbatter = document.getElementById("res11").innerHTML=document.getElementById("res4").innerText;
 
   var secondbatter= document.getElementById("res12").innerHTML=document.getElementById("res9").innerText;

   var firstbatter1=document.getElementById("res4").innerText;
    var secondbatter1=document.getElementById("res9").innerText;
   
   if (firstbatter1.split(" ")[1]>secondbatter1.split(" ")[1])
   {
           document.getElementById("res13").innerHTML="You are winner"
   }
   else if (firstbatter1.split(" ")[1]==secondbatter1.split(" ")[1])
   {
          document.getElementById("res13").innerHTML="Match Draw"
   }
   else
   {
    document.getElementById("res13").innerHTML="Computer is winner"
   }
}

