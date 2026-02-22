function toss()
{
     var x1 =Math.random() < 0.5 ? 'H' : 'T';
    var x2=document.getElementById("calltoss").value;


    if (x2 == 'H'|| x2 == 'T') {
        if((x2===x1))
        {
           document.getElementById("res2").innerHTML="Who choose: "+x1+"<br>"+" win the toss";
           document.getElementById("tossbtn").disabled=true;
           document.getElementById("tossbtn").style.cursor="not-allowed";
           document.getElementById("tossbtn").style.backgroundColor="grey";
           document.getElementById("ball").style.display="block"; 
          document.getElementById("bat").style.display="block";  
           document.getElementById("check").style.display="block"; 
        }
       else
       {
           
           document.getElementById("res2").innerHTML="Who choose: "+x1+"<br>"+" win the toss";
           document.getElementById("tossbtn").disabled=true;
           document.getElementById("tossbtn").style.cursor="not-allowed";
           document.getElementById("tossbtn").style.backgroundColor="grey";
        
           document.getElementById("ball").style.display="block"; 
          document.getElementById("bat").style.display="block";  
           document.getElementById("check").style.display="block"; 
        
       }

}
}
l1=[]
l2=[]
function dobat()
{
     var num2 = Math.floor(Math.random() *7);
     l1.push(num2)
}
function doball()
{
    var num2 = Math.floor(Math.random() *7);
    l2.push(num2);
}
function check()
{
    if(l1.length==0 && l2.length==0)
    {
        document.getElementById("res3").innerHTML="Your Bucket is empty"
    }
    else
    {
        if(l1[l1.length-1]==l2[l2.length-1])
        {
        s1=0
            for (var i=0;i<l1.length;i++)
                        {
                            
                            s1=s1+l1[i]
                        }
                               document.getElementById("res3").innerHTML="Target is: "+s1

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
        else
        {
             document.getElementById("res3").innerHTML="Bat: "+l1[l1.length-1]+" Ball: "+l2[l2.length-1]
        }
    }
}

function show(){

 
    document.getElementById("res4").innerHTML="All Run: "+l1;
}




l3=[]
l4=[]
function dobat1()
{
     var num2 = Math.floor(Math.random() *7);
     l3.push(num2)
}
function doball1()
{
    var num2 = Math.floor(Math.random() *7);
    l4.push(num2);
}
function check1()
{

   if(l3.length==0 && l4.length==0)
    {
        document.getElementById("res5").innerHTML="Your Bucket is empty"
    }
    else
    {
      if(l3[l3.length-1]==l4[l4.length-1])
        {
        s2=0
            for (var i=0;i<l3.length;i++)
                        {
                            
                            s2=s2+l3[i]
                        }


                                document.getElementById("res5").innerHTML="Score is: "+s2
                                document.getElementById("bat1").disabled=true;
                                document.getElementById("bat1").style.cursor="not-allowed";
                                document.getElementById("bat1").style.backgroundColor="grey";
                                document.getElementById("ball1").disabled=true;
                                document.getElementById("ball1").style.cursor="not-allowed";
                                document.getElementById("ball1").style.backgroundColor="grey";
                                document.getElementById("check1").disabled=true;
                                document.getElementById("check1").style.cursor="not-allowed";
                                document.getElementById("check1").style.backgroundColor="grey";
                                 document.getElementById("result").style.display="block"; 
                                   document.getElementById("show1").style.display="block"; 
    }

     else
        {
             document.getElementById("res5").innerHTML="Bat: "+l3[l3.length-1]+" Ball: "+l4[l4.length-1]
        }

}


}


function show1(){

 
    document.getElementById("res5").innerHTML="All Run: "+l3;
}


function result()
{
   var firstbatter = document.getElementById("res7").innerHTML=document.getElementById("res3").innerText;
 
   var secondbatter= document.getElementById("res8").innerHTML=document.getElementById("res5").innerText;
   
   if (firstbatter.split(" ")[2]>secondbatter.split(" ")[2])
   {
           document.getElementById("res9").innerHTML="First Batter is winner"
   }
   else if (firstbatter.split(" ")[2]==secondbatter.split(" ")[2])
   {
          document.getElementById("res9").innerHTML="Match Draw"
   }
   else
   {
    document.getElementById("res9").innerHTML="Second Batter is winner"
   }
}