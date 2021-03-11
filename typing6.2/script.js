const textp = document.querySelector("#textplace");
const commonWords = document.querySelector("#common-words");
//const testKeyy = document.querySelector("#test-key");
//const divInput = document.querySelector("#div-input");
const beginbotn = document.querySelector("#begin-game");
const clearbotn = document.querySelector("#clear-game");
const megDiv = document.querySelector("#show-meg");
const megContent = document.querySelector("#meg-box");
const advancebotn = document.querySelector("#advance-game");
let basicWordWidth = getRndInteger(3,20);
let advanceWordWidth = getRndInteger(4,5);
let subBtb = document.getElementById("Submitt");
var usersList = document.getElementById("users-list");
let inputt = document.getElementById("usr");
let userName;
showExistingUsers();
addOptionSelectAtrribute();
console.log(usersList);

//var txt = "";
//for (x in local_data) {
  //  txt += local_data.key;
//}
//console.log(txt);
const keyNumber1 = [["[","]","{","}","<",">","=","-"],["!","@","#","$","%","^"],["[","]","{","}","<",">","=","-"],["&","*","(",")","_","+"],["!","@","#","$","%","^"],["[","]","{","}","<",">","=","-"],
["1","2","3",'4',"5","6"],["7","8","9","0"],["1","2","3",'4',"5","6","7","8","9","0"],
["a","s","d","f"," "],["j","k","l",";"," "],["q","w","e","r"," "],["z","x","c","v"," "],["u","i","o","p"," "],["m",",",".","/"," ","'"],["t","y","g","h","b","n"," "],
["a","s","d","f","g","h","j","k","l",";"," ","'"],[";",":","'",'"',",",".","?","!"],[";",":","'",'"',",",".","?","!"],[" "," "," "," "," "," "," ", " ", " ", " ","a","s","d","f","j","t","b"," ","L","l","q","w","e","r","z","x","c","v","Q","W","E","R","T","Y","A","S","D","F","G","Z","X","C","V","B","K"],
[" "," "," "," "," "," "," "," "," "," ","Y","y","y","y","y","U","u","u","u","u"," ","i","i","i","i","O","o","o","o","o","P","p","p","p","p","H","h","h","h","h","J","j","j","j","j","k","k","k","k","L","l","l","l","l","N","n","n","n","n","Z","X","m","m","m"],
[" "," "," "," "," "," "," "," "," "," ","A","a","a","a","a","S","s","s","s","s","D","d","d","d","d","F","f","f","f","f","G","g","g","g","g","Q","q","q","q","q","W","w","w","w","w","K","k","k","k","E","e","e","e","e","R","r","r","r","r","Z","X","C","V","B"],
[";",":","'",'"',",",".","?","!"],[";",":","'",'"',",",".","?","!"],["1","2","3",'4',"5","6"],["7","8","9","0"],["1","2","3",'4',"5","6"],["7","8","9","0"],
["1","2","3",'4',"5","6","7","8","9","0"]
];
//"a","g","l","m","o","e","z",
//const keyNumber2 = [["a","s","d","f","j","k","l",";","q","w","e","r","z","x","c","v","u","i","o","p","m",",",".","/","t","y","g","h","b","n"
//,"a","s","d","f","g","h","j","k","l",";"," "]];
//["1","2","3",'4',"5","6","7","8","9","0"],["1","2","3",'4',"5","6","7","8","9","0"],
let wordList2 = [["a","s","d","f",],["j","k","l" ],["q","w","e","r",],["z","x","c"],
["v","b","n","h"],["t","y","n","m"],["i","o","p","m"]];


const keyNumber3 = [];

let accurCheck = [];
let num = 0;
let  Hel = "";
let indexx = 0;
let accuracyy = 0;
var myVar;
let listItem = 0;
let myNum = 0;
let inputVal = 0;
let idn = 1;
let messageString;
//commonWordList(wordList1,wordList2);
//randomWordListFormer();



beginbotn.addEventListener("click", function() {
  gettKeyss(keyNumber1,basicWordWidth);
});

beginbotn.addEventListener("click",disableAdvanceButton);
//beginbotn.addEventListener("click",disableCommonWordButton);

advancebotn.addEventListener("click", function() {
	randomWordListFormer2();
  gettKeyss(keyNumber3,advanceWordWidth);
});


advancebotn.addEventListener("click",disableBeginButton);
//advancebotn.addEventListener("click",disableCommonWordButton);


clearbotn.addEventListener("click",clearScreen);
//textp.addEventListener("keyup", myFunction);
//document.addEventListener('keyup', function(event) {
  //console.log(event.keyCode);
//});

//"keydown"
/*textp.addEventListener('keyup', function(event) {
	console.log(event.keyCode)
if (event.keyCode != 20 && (!(event.shiftKey && (!isNaN(event.keyCode))))) {
     myFunction();
  }

});
*/
//"keydown"
textp.addEventListener("keyup", function(event) {
	//console.log(event.keyCode)
if (event.keyCode == 20 || event.keyCode == 16) {
     return;
}else{
	 myFunction();  
	}
});


//gets the users name when the slect list option element is clicked
//uses the name to call a function that retrieves the users state
usersList.addEventListener("click",function ( e ) {
    if ( e.target.tagName.toLowerCase() === 'option' ) {
       var target = event.target || event.srcElement;
       conTinuity( target.innerHTML);
    //alert ( target.innerHTML ); 
    }
});


subBtb.addEventListener("click",addUserToUsersList);
//ki
hidMessage();


//commonWords.addEventListener("click", function() {,
  //gettKeyss(keyNumber3,advanceWordWidth);
//});
/*let Hel = "";
let indexx = 0;
let accuracyy = 0;
var myVar;
let listItem = 0;
let myNum = 0;
let inputVal = 0;
let idn = 1;*/
console.log(beginbotn.disabled );
function gettKeyss(keyNumber,wordWidth=10) {
	if (myNum < keyNumber.length){
	
	preserveUserStates(keyNumber,wordWidth,myNum);
	
	myVar = setInterval(myTimer, 1000);
	
	Hel = "";
	let letterr;
	//console.log(myNum);
	for (let i =0; i< wordWidth; i++) {
		
		let random = Math.floor(Math.random()*keyNumber[myNum].length);
		letterr = keyNumber[myNum][random];
		
		
		
		//to stop more than one space character from being together inside a word
		if (Hel.endsWith(' ') && letterr=== " "){
			//letterr = "";
			console.log("trimyou");
			Hel = Hel.trim();
		}
		Hel += letterr;
		
	}
  
  //remove whiteSpace from begining and end of word
  if (Hel.endsWith(' ') || Hel.startsWith(" ")){
	  Hel = Hel.trim();
  }
   
  
   textp.textContent = Hel+"\n\n";
  para = document.createElement("span");
   textp.appendChild(para);
   para.removeAttribute("id")
  para.setAttribute("id", "idd"+idn);
  //var element = document.getElementById("idd"+idn);
   para.classList.remove("clearThem");
   //para.setAttribute("class", "clearThem");
   para.classList.add("clearThem");
   setEndOfContenteditable(textp);
 
 
	
	}else{
		alert('game over');
		myNum = 0;
	}
}


function clearScreen () {
	
	textp.innerHTML= "";

   
}
//function clearScreen2 () {
	//let divInput = document.querySelector("#div-input");
	//divInput.innerHTML= "";

   
//}



function myFunction() {
  basicWordWidth = getRndInteger(3,20);
  advanceWordWidth = getRndInteger(4,6);
  
  let wordPerMinute = "";
  
  let percentageAccuracy = '';
  
  let  testKey = Hel.charAt(indexx);
  indexx = indexx + 1;
  inputVal = inputVal + 1;

  let textlen = (textp.textContent.length - 1);
  let inputKeys = textp.textContent.charAt(textlen);
 //------------------------------------------ 
 

 //setEndOfContenteditable(textp);
 let spanElem = document.getElementById("idd"+idn);
 spanElem.innerHTML=inputKeys;
 //console.log(spanElem);
 let oneCharr = spanElem.previousSibling;
if (oneCharr.nodeName =='#text'){
	//console.log("nodeee");
	oneCharr.textContent = oneCharr.textContent.slice(0,oneCharr.textContent.length-1);
}else{
	
	oneCharr.textContent=oneCharr.textContent.charAt(0);
	//console.log(oneCharr.getAttribute("class"));
}

 //console.log(oneCharr);
 setEndOfContenteditable(textp);
 
  if (testKey === inputKeys){
	  //console.log("am green");
	  accuracyy = accuracyy + 1;
	  spanElem.style.color = "green";
}else{
	spanElem.style.color = "red";
	//console.log("am red");
}
 idn = idn + 1;
 let para = document.createElement("span");
 para.removeAttribute("id")
 para.setAttribute("id", "idd"+idn);

para.classList.remove("clearThem");
para.setAttribute("class","clearThem");

textp.appendChild(para);

//check whether all the letters have been typed 
  if (Hel.length === inputVal){
	  //setTimeout(clearScreen, 4000);
	  clearScreen ();
	  let minutess = num/60;
	  wordPerMinute =(Hel.length)/minutess;
	  clearInterval(myVar);
	   num= 0;
	   indexx=0;
     inputVal=0;
	 //console.log(textp);
	 //let zk = 1;
	 const clerThen = document.getElementsByClassName("clearThem");
	 const spanLength = (clerThen.length);
	//alert(spanLength+"====");
	 for (let i =1; i<= idn; i++) {
		 //v
		 let spanId = document.getElementById('idd'+i);
		 if (spanId){
			 //console.log(spanId.innerHTML);
		textp.removeChild( spanId );
		 }
		//zk = zk + 1;
		}
	 //alert(zk+"+++++");
	 setEndOfContenteditable(textp)
	 idn = 1;
	 //textp.textContent = "";
	 //console.log(textp);
	  percentageAccuracy = (accuracyy/Hel.length)*100;
	  accuracyy= 0;
	  
	messageString = "Accuracy: "+ (Math.round(percentageAccuracy))+ "%"+ ",  wordPerMinute: "+ Math.round(wordPerMinute);
	 displayMessage(messageString,"alert-success",10000);
		//edited	
	  if (percentageAccuracy > 96){
		  accurCheck.push(percentageAccuracy);
	  }
	  //edited
	  if (accurCheck.length > 1){
		  if (beginbotn.disabled === false){
		  gettKeyss (keyNumber1,basicWordWidth);
		  }else{
			gettKeyss (keyNumber3,advanceWordWidth);  
		  }
		  console.log('you1');
		  accurCheck = [];
		  myNum = myNum +  1;
	  }else{
		  if (beginbotn.disabled === false){
			gettKeyss (keyNumber1,basicWordWidth);
		       
		  }else{
			 gettKeyss (keyNumber3,advanceWordWidth); 
		  }
		 console.log('you2'); 
	  }
}
}


function myTimer() {
  num = num + 1;
  
}

function hidMessage(){
megDiv.style.visibility = "hidden"	
}


function disableBeginButton(){
beginbotn.disabled = true;	
}



function disableAdvanceButton(){
advancebotn.disabled = true;	
}



//produces a random number between two number min and max both included
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}



//shift the cursor to the end of editable div-input
function setEndOfContenteditable(contentEditableElement)
{
    var range,selection;
    if(document.createRange)//Firefox, Chrome, Opera, Safari, IE 9+
    {
        range = document.createRange();//Create a range (a range is a like the selection but invisible)
        range.selectNodeContents(contentEditableElement);//Select the entire contents of the element with the range
        range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
        selection = window.getSelection();//get the selection object (allows you to change selection)
        selection.removeAllRanges();//remove any selections already made
        selection.addRange(range);//make the range you have just created the visible selection
    }
    else if(document.selection)//IE 8 and lower
    { 
        range = document.body.createTextRange();//Create a range (a range is a like the selection but invisible)
        range.moveToElementText(contentEditableElement);//Select the entire contents of the element with the range
        range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
        range.select();//Select the range (make it the visible selection
    }
}


//select random words from list of words
//the words are slected alphabetically and randomly in groups of 14
//some of the words are capitalize bases on length
function randomWordListFormer2() {
	var local_data = data;
   let wordList1 = Object.keys(local_data)
   console.log( wordList1.length);
   console.log(typeof wordList1);
	
	let listWorldHolder = [];
	let wordListLength1 = wordList1.length;
	//let wordListLength2 = wordList2.length;
let listPre = ['a','b','c','d','e','f','d','h','i','j','k','l','m'
,'n','o','p','q','r','s','t','u','v','w','z','y','z'];

let puntuationList = [".",".",".",".",",",",",",",",",";",":","'",'"',"?","!","!","!","!","!","!"];
let listPreLength = listPre.length;
let numList = ["1","2","3","4","5","6","7","8","9","0"];   
let numListLength = numList.length;
let symboList = ["[","]","{","}","<",">","=","-","!","@","#","$","%","^","[","]","{","}","<",">","=","-","&","*","(",")","_","+","!","@","#","$","%","^","[","]","{","}","<",">","=","-"];
let sysboLength = symboList.length;	
 for (let i =0; i< listPreLength ; i++) {
	 while(listWorldHolder.length < 14){
	 let random = Math.floor(Math.random()*wordListLength1);
	 let theWord =  wordList1[random];
let punInt = getRndInteger(0, puntuationList.length-1);
let numInt = getRndInteger(0, numListLength-1);
let sysboInt = getRndInteger(0, sysboLength-1);	 
   if (theWord.length > 7 && theWord.startsWith(listPre[i])){
	    theWord = capitalizeFirstLetter(theWord);
		listWorldHolder.push(theWord +symboList[sysboInt]+ numList[numInt]+ puntuationList[punInt]+" "); 
	}else if (theWord.startsWith(listPre[i])){
		listWorldHolder.push(theWord+symboList[sysboInt]+numList[numInt]+puntuationList[punInt]+" "); 
	} 
 }
 
shuffle(listWorldHolder);
//console.log(listWorldHolder);
keyNumber3.push(listWorldHolder);

 listWorldHolder=[];
 }
 return keyNumber3;
 }






  	   
	
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}




//capitalize the first letter of a string
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
} 



//Enbles new users to register,gets users input, check whether valid input is entered,
//alerts the user if input is invalid
//checks whether users name already exist in localStorage
//alerts the user if it exist or adds it if it does not exits
// does not bother to check empty localStorage just adds the user
function addUserToUsersList(){
	lernersStorageList = [];
	userName =  getsAndChecksUsersInput(inputt);
	 if (userName === false){
		messageString = "Please Enter Your Name Before Clicking The Add Button";
	    displayMessage(messageString,"alert-danger",10000);
		 return; 
	 }
	
	 vals = localStorage.getItem('lerners');
	 if (vals){
		 
		let lernersList = JSON.parse(vals);
		if (lernersList.includes(userName)){
			messageString = "Sorry a user with the name: "+ userName + " exist please choose another name";
			displayMessage(messageString,"alert-danger",10000);
			return;
		
		}else{
			 lernersList.push(userName);
			 localStorage.setItem('lerners', JSON.stringify(lernersList));
			 removeOptionSelectAtrribute();
			 createEleWithTextAndClass("option",userName,"user-group");
			 inputt.value = "";
			  messageString = "Congratulation "+userName + " Your registration was successfull";
			  displayMessage(messageString,"alert-success",10000);
			  //console.log(x.hasAttribute("target"));
			  addOptionSelectAtrribute();
			  
			}
	 }else{
		 lernersStorageList.push(userName);
         localStorage.setItem('lerners', JSON.stringify(lernersStorageList));
		 //removeOptionSelectAtrribute();
		 createEleWithTextAndClass("option",userName,"user-group");
		 inputt.value = "";
		  //console.log('doing');
		  messageString = "Congratulation " + userName + " Your registration was successfull";
		 displayMessage(messageString,"alert-success",10000);
		 //console.log(selectLastOption());
		 addOptionSelectAtrribute();
	}
}



//retrieves registered users from local storage and displsays them in option elements
//contained in select list elenment
//the users are stored in an array save under the key lerners in the localstorage
function showExistingUsers(){
	vals = localStorage.getItem('lerners');
	if (vals){
		let lernersList = JSON.parse(vals);
		let lernersListLen = lernersList.length;
		for (let i =0; i< lernersListLen; i++) {
		createEleWithTextAndClass("option",lernersList[i],"user-group");
		
		 console.log('doing');
		}
	}
}

//collects the current state of the users variable and saves them in localStorage
function preserveUserStates(listVar,num1,num2){
var storeList = [];
var selectedUser = usersList.options[ usersList.selectedIndex];
	if (selectedUser){
console.log(selectedUser.text +'==--');
storeList.push(listVar);
storeList.push(num1);
storeList.push(num2);
storeList.push(beginbotn.disabled);
localStorage.setItem(selectedUser.text, JSON.stringify(storeList));
}
return localStorage;
}

//called when a user clicks on his name on the select list option element.
//Gets what is stored for a user and displays it.
function conTinuity(aUser){
vals = localStorage.getItem(aUser);
	 if (vals){
	let lernersList = JSON.parse(vals); 
		//console.log('three==--'); 
		myNum = lernersList[2];
		if (lernersList[3] === false){ 
		disableAdvanceButton();
		}else{
			disableBeginButton();
		}
      //console.log(myNum);
      //console.log(lernersList[0]);	  
	gettKeyss(lernersList[0],lernersList[1]);
}
}


//displays a message,the parameters controls the message content,appearance and duration
function displayMessage(messageStr,appearance,duration){
	megDiv.style.visibility = "visible";
	megDiv.classList.remove("alert-info","alert-danger","alert-success",
	  "alert-warning","alert-primary","alert-secondary","alert-light","alert-dark");
    //para.setAttribute("class", "user-group");
     megDiv.classList.add(appearance);
	 megContent.innerHTML = messageStr;
	 setTimeout(hidMessage, duration);
	
}


	 
//gets input from user and return the input if it is valid
function getsAndChecksUsersInput(usrInput){
     userName = usrInput.value;
	  if(userName===""){
	    return false;
	 }else{
		userName= userName.toLowerCase();
		userName = capitalizeFirstLetter(userName);
		 return userName;
	 }
	 	
}

//create element with having innerHTML text and also class
function createEleWithTextAndClass(eleString,textString,clasString){
 para = document.createElement(eleString);
 var node = document.createTextNode(textString);
 para.appendChild(node);
 usersList.appendChild(para);
 para.classList.remove(clasString);
 //para.setAttribute("class", "user-group");
 para.classList.add(clasString);
}


function removeOptionSelectAtrribute(){
//var lastValue = $('#idOfSelect option:last-child').val();
//With plain Javascript it's not much worse:

var lastValue = usersList.options[usersList.options.length - 1];
lastValue.removeAttribute("selected");
//return typeof lastValue;
}

function addOptionSelectAtrribute(){
//var lastValue = $('#idOfSelect option:last-child').val();
//With plain Javascript it's not much worse:

var lastValue = usersList.options[usersList.options.length - 1];
lastValue.setAttribute("selected", "selected");
}


 /*
function commonWordList(wordList1,wordList2) {
	
	
	let listWorldHolder = [];
	let wordListLength1 = wordList1.length;
	let wordListLength2 = wordList2.length;

for (let v =0; v< wordListLength2 ; v++) {
   let countt2 = wordList2[v]; 
	
 for (let i =0; i< wordListLength1 ; i++) {
	 let theWord =  wordList1[i];
	 let theWord2 = theWord.split("");
	 if (countt2.every(val => theWord2.includes(val))){
		listWorldHolder.push(theWord+" "); 
	} 
 }
shuffle(listWorldHolder)
if (listWorldHolder.length > 11){
let listWorldHolder22 = listWorldHolder.slice(0, 11);
keyNumber3.push(listWorldHolder22);	
}else{
	keyNumber3.push(listWorldHolder);
}
 listWorldHolder=[];
 }
 return keyNumber3;
 }	
  */ 




/*function randomWordListFormer() {
	var local_data = data;
   let wordList1 = Object.keys(local_data)
   console.log( wordList1.length);
   console.log(typeof wordList1);
	
	let listWorldHolder = [];
	let wordListLength1 = wordList1.length;
	//let wordListLength2 = wordList2.length;

for (let v =0; v< 5 ; v++) {
   
	
 for (let i =0; i< 10 ; i++) {
	 let random = Math.floor(Math.random()*wordListLength1);
	 let theWord =  wordList1[random];
   if (theWord.length > 7 ){
	    theWord = capitalizeFirstLetter(theWord);
		listWorldHolder.push(theWord+" "); 
	}else{
		listWorldHolder.push(theWord+" "); 
	} 
 }
 
shuffle(listWorldHolder);
//console.log(listWorldHolder);
keyNumber3.push(listWorldHolder);

 listWorldHolder=[];
 }
 return keyNumber3;
 }
//console.log(keyNumber3);
*/

  