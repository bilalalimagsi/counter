let counter='0'
let element=document.getElementById('printtable');
let element1=document.getElementById('add');
let element2=document.getElementById('odd&even');

function abc() {
    element.innerHTML=counter=' '
     for (let index = 1; index <11; index++) {
        element.innerHTML+="2  x" + index + "=" + 2*index + "<br>" }
        
    
}
function abcd() {
        element.innerHTML=counter=' '
         for (let index = 1; index <11; index++) {
            element.innerHTML+=  "3  x" + index + "=" + 3*index + "<br>" }
         }    
         
function asd() {
        element.innerHTML=counter=' '
         for (let index = 1; index <11; index++) {
            element.innerHTML+=  "4  x" + index + "=" + 4*index + "<br>" }}

function add() {
         counter++
         element.innerHTML=counter}
         
function subtraction() {
        counter--
         element.innerHTML=counter
}
function square() {
        element.innerHTML=counter=' '
        for (let index = 2; index <6; index++) {
                element.innerHTML+= index + " x" + index + "=" + index*index + "<br>"}} 
               
function oddeven() {
add()
if(counter%2==0){
        element2.innerHTML="even";}
        else {element2.innerHTML="odd"}
}


