
var button = document.getElementById("btn");
var enteredNumber = document.getElementById("user-number");

var cur1 = document.querySelector(".cur1");
var next1 = document.querySelector(".next1");

var cur2 = document.querySelector(".cur2");
var next2 = document.querySelector(".next2");

var cur3 = document.querySelector(".cur3");
var next3 = document.querySelector(".next3");

var cur4 = document.querySelector(".cur4");
var next4 = document.querySelector(".next4");

var final=1, interval;



function reset(){
    for (var i=1; i<5; i++){
    	var next=document.querySelector(".next"+i); 
    	var current=document.querySelector(".cur"+i);      
        current.innerText=0;
        next.innerText=1;
    } }



function startCounter(e){

	var count = enteredNumber.value;

	if(!count){
	alert("Enter number!");
	return;
	}

	if(isNaN(count)){
		alert("Enter a valid Number!");
		enteredNumber.value = '';
		return;
	}

	enteredNumber.value = '';

	interval = setInterval(function(){

		if (count<=final-1){
            clearInterval(interval);
            final=1;
            return;
        }
        animate(next1, cur1);
 	}, 1000);

}


 function animate(next, current){
     
   next.classList.add("animate");

   setTimeout(function(){
        
        current.innerText=next.innerText%10;
        if (final%10==9){
            setTimeout(animate,500, next2, cur2);
            next.innerText=-1;
        }
        next.innerText=parseInt(next.innerText)+1;
    
        if (final%100==99){
            setTimeout(animate, 100, next3, cur3);
        	next2.innerText=0;
        }
        if (final%1000==999){
            setTimeout(animate, 100, next4, cur4);
        	next3.innerText=0;
        }
       
        next.classList.remove("animate");
        
        if (next==next1){
            final++;
        }       
    }, 500)
}



button.addEventListener("click", function(){
    reset();
    clearInterval(interval);
    startCounter();
    final=1;
});
