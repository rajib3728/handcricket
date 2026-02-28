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
  


l=[];

function continu()
{
    var total=parseInt(document.getElementById("res5").innerHTML.split(" ")[2]);
   
    l.push(total);
      var num1 = Math.floor(Math.random() * 7);
     document.getElementById("res4").innerHTML="Computer: "+num1+" runs";


}

  function humanbowling()
            {
                var num2 = Math.floor(Math.random() *7);
                document.getElementById("res6").innerHTML="You: "+num2+" runs";
            }


 function check()
           {
               var humanrun = document.getElementById("res6").innerHTML.split(" ")[1]; 
               var num1 = document.getElementById("res4").innerHTML.split(" ")[1];


               
                    if(humanrun === num1)
                    {   
                        var s=0;
                        document.getElementById("res5").innerHTML="You are out!";
                        for (var i=0;i<l.length;i++)
                        {
                            s=s+l[i];
                        }
                        document.getElementById("res7").innerHTML="Your total score is "+s+" runs";
                        document.getElementById("continue").style.display="none";
                        document.getElementById("res6").style.display="none";
                        document.getElementById("res4").style.display="none";
                        document.getElementById("startbowling").style.display="none";
                        document.getElementById("res8").style.display="block";
                        document.getElementById("res9").style.display="block";
                        document.getElementById("res10").style.display="block";
                        document.getElementById("humaninput").style.display="none";

                    }
                    else
                    {
                        document.getElementById("res5").innerHTML="You scored "+humanrun+" runs";
                        document.getElementById("continue").style.display="block";

                    }
                
              }
   
            

function toss()
{
    var x1 =Math.random() < 0.5 ? 'H' : 'T';
    var x2=document.getElementById("calltoss").value;
    if (x2 == 'H'|| x2 == 'T') {
        if((x2===x1))
        {
           document.getElementById("res2").innerHTML="Computer choose: "+x1+"<br>"+"You win the toss";
           document.getElementById("tossbtn").disabled=true;
           document.getElementById("tossbtn").style.cursor="not-allowed";
           document.getElementById("tossbtn").style.backgroundColor="grey";
           document.getElementById("ball").style.display="block"; 
          document.getElementById("bat").style.display="block";
          window.open("humanandrobot2.html")
          window.close("humanandrobot.html")
           
        }
        else
        {
            document.getElementById("res2").innerHTML="Computer choose: "+x1+"<br>"+"Computer win the toss";
            document.getElementById("tossbtn").disabled=true;
             document.getElementById("tossbtn").style.cursor="not-allowed";
           document.getElementById("tossbtn").style.backgroundColor="grey";
           document.getElementById("res3").innerHTML="Computer choose to ball first";
              document.getElementById("humaninput").style.display="block";
              


              var num1 = Math.floor(Math.random() * 7);
           document.getElementById("res4").innerHTML="Computer: "+num1+" runs";



           document.getElementById("startbowling").style.display="block";


        


           function check()
           {
               var humanrun = parseInt(document.getElementById("humaninput").value);    
                if(humanrun<0 || humanrun>6)
                {   
                    alert("Please enter a valid run between 0 and 6");
                }
                else
                {
                    if(humanrun === num1)
                    {
                        document.getElementById("res5").innerHTML="You are out!";

                    }
                    else
                    {
                        document.getElementById("res5").innerHTML="You scored "+humanrun+" runs";
                    }
                }
              }

        }
    }
    else
    {
        alert("Please enter H or T only");
    }

}

l1=[]
function continu2()
{
  var total=parseInt(document.getElementById("res13").innerHTML.split(" ")[1]);
   console.log(total);
    l1.push(total);
      var num31 = Math.floor(Math.random() * 7);
     document.getElementById("res12").innerHTML="Computer: "+num31+" runs";
     document.getElementById("res13").innerHTML="Computer: "+num31+" runs";
}
function humanbat()
{
    var num32 = Math.floor(Math.random() *7);
    document.getElementById("res11").innerHTML="You: "+num32+" runs";
   

}
function check2()
{
    var computerrun = document.getElementById("res12").innerHTML.split(" ")[1]; 
    var num3 = document.getElementById("res11").innerHTML.split(" ")[1];
            var total=parseInt(document.getElementById("res7").innerHTML.split(" ")[4]);
            if(num3<0 || num3>6)
            {

                alert("Please enter a valid run between 0 and 6");
            }
            else
            {
                if(num3 === computerrun)
                {   
                    var s=0;
                    document.getElementById("res13").innerHTML="Computer is out!";
                    for (var i=1;i<l1.length;i++)
                    {
                        s=s +l1[i];
                    }
                    console.log(l1);
                    document.getElementById("res13").innerHTML="Computer total score is "+s+" runs";
                    document.getElementById("res12").style.display="none";
                    document.getElementById("res11").style.display="none";
                    document.getElementById("res8").style.display="none";
                    document.getElementById("res9").style.display="none";
                    document.getElementById("res10").style.display="none"; 
                    document.getElementById("result").style.display="block"; 
                }
                else
                {
                    document.getElementById("res13").innerHTML="Computer: "+computerrun+" runs";
                }
            }
}

function result()
{
    var humanscore=parseInt(document.getElementById("res7").innerHTML.split(" ")[4]);
    var computerscore=parseInt(document.getElementById("res13").innerHTML.split(" ")[4]);
    if(humanscore>computerscore)
    {
        document.getElementById("res14").innerHTML="You win the match!";
    }
    else if(computerscore>humanscore)
    {
        document.getElementById("res14").innerHTML="Computer wins the match!";
    }
    else
    {
        document.getElementById("res14").innerHTML="The match is a tie!";
    }
}