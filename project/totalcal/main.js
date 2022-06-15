
// DOM selection

const inw = document.querySelector('#w');
const inp = document.querySelector('#p');
const btn = document.querySelector('#btn');
const res = document.querySelector('#res');
const resm = document.querySelector('#resm');
const dat = document.querySelector('#dat');
const his = document.querySelector('#his');
const col = document.querySelector('#clo');
const dahis = document.querySelector('#dahis');
const tt = document.querySelector('#tt');

// storeg variavl 

  var m = 0; 
  var kg = 0;
  const data = [];
  var j = 0;
 var n=0;
 
 
/*
 * var cities = ["Madrid", "Berlin", "Tokyo"];
      cities.push("Rio", "Denver", "Moscow");
      document.getElementById("demo").innerHTML = cities;
*/

 // result show btn click function
 
 btn.addEventListener('click',function(){
  sum();
 });
 
 // result function
 
  function sum(){
   const vw = parseFloat(inw.value);
   const vp = parseFloat(inp.value);
  
   let s = kg+vw;
 
   kg = s;
 
   var v = vw * vp;
  
   m = m + v;
   resm.innerHTML=(m+' tk '+kg+'kg');
   
   res.innerHTML= (v+' tk');
   
   dahis.innerHTML=("");
   data.push(vw);
   console.log(data);
   for(var i=0; i < data.length; i++) {
     
         dahis.innerHTML +="<div id='tt'> <span id='tt'>"+(i+1)+"</span>"+ data[i] + " kg </div>";
      console.log(n);
   }
   n++;
 };
 
 // clear btn click function call
 
 document.querySelector('#cl').addEventListener    ('click',function(){
    inw.value=(0);
    inp.value=(0);
    m=0;
    kg = 0;
    
      while (data.length > j) {
       data.pop();
       }
    sum();
    dahis.innerHTML= ("");
    n=1;
 });
 
// history fild show

his.addEventListener('click',function(){
 
 dat.style.display = "block";
 
});

// history fild hide

col.addEventListener('click',function(){
 dat.style.display = "none";
})

// enter result function call

inw.addEventListener('keyup',function(e){
  
  
  if (e.keyCode == 13) {
    sum();
  }
  
})
