window.addEventListener("load",initcalc);

var textBox;
var span;
var operators;
var buttonDiv;
var equal;
var clear;
var dot;
var lastelementoftextbox;
var back1;

function initcalc(){

    textBox=document.getElementById("operations");
    span=document.getElementById("expression");
    equal=document.getElementById("equals");
    buttonDiv=document.getElementById("buttons");
    clear=document.getElementById("clear");
    dot=document.getElementById("dot");
    back1=document.getElementById("back");
    lastelementoftextbox=textBox.value.charAt(textBox.value.length-1);

            for(var i=0;i<=9;i++){

                var numberbtn=document.createElement("button");
                numberbtn.innerHTML=i;
                numberbtn.className ='numberbtn';
                buttonDiv.appendChild(numberbtn);
                numberbtn.addEventListener("click",appendValue);
            }
    


    operators=document.getElementsByClassName("opr");

            for(var i=0;i<4;i++){

                        for(var i = 0; i < operators.length; i++)
                        
                        {
                            operators[i].addEventListener("click", toEvalute);

                        }
            }

    equal.addEventListener("click",answer);
    clear.addEventListener("click",clear1);
    dot.addEventListener("click",dot);   
    back1.addEventListener("click", back);


} 
 




    function appendValue(){

    var value = event.srcElement.innerHTML;
    textBox.value+=value;
     
        }
 

        

   function toEvalute(){

    var operation = event.srcElement.innerHTML;

      
    var comparetextbox=(lastelementoftextbox=="+"||lastelementoftextbox=="+"||lastelementoftextbox=="/"||lastelementoftextbox=="*"||lastelementoftextbox=="-");
  
    //  var  lastelementofspan=span.value.charAt(span.value.length-1);
    //  var comparetexbox=(lastelementofspan=="+"||lastelementofspan=="+"||lastelementofspan=="/"||lastelementofspan=="*"||lastelementofspan=="-");
  
    
    for(var i=0;i<4;i++)
    {
       if(comparetextbox)
       {break;}
    
       else{
           
        textBox.value+=operation;
 
        break; }}
    
    }
            

    function answer(){
  
        span.innerHTML=textBox.value;
        var ans=eval(span.innerHTML+"+"+"0");

        textBox.value=ans;

    }
 

 
    function clear1(){

            textBox.value="";
            span.innerHTML="";

    }
    function dot(){

            textBox.value="";
            span.innerHTML="";

    }


    function back(){
 
var res = textBox.value.slice(0,textBox.value.length-1);
 
textBox.value=res;
    }