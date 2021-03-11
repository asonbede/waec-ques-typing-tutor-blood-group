var bloodGroup = {"A": ["antigen-a","antibody-b"], "B": ["antigen-b","antibody-a"],
                  "AB": ["antigen-ab","antibody-O"], "O": ["antigen-O","antibody-ab"]}


 //get elements
const donorinput = document.getElementById("messageIn");
const recipientinput = document.getElementById("messageIn2");
const sendbut = document.getElementById("sendBtn");
const messout = document.getElementById("messageOut");

//add eventlistener to check compatibility button
sendbut.addEventListener("click",getBloodGroup);
function getBloodGroup(argument) {
 let bloodContainer = ["A","B","AB","O"];

 //get value(the user's blood group ) from inputt
 let donorBloodGroup = donorinput.value.toUpperCase(); 
 let recipientBloodGroup = recipientinput.value.toUpperCase();

  //hidd explanation table and notes
  document.getElementById("bloodtable").style.visibility="hidden";
  document.getElementById("explanation").style.visibility="hidden";
 
  
  // check whether the inputted blood group is valid or whether empty input was submitted
  if (donorBloodGroup ===""){
  	alert("Donors Blood Group is Empty");
  	return;
  }

  if ( recipientBloodGroup===""){
  	alert("Recipient Blood Group is Empty");
  	return;
  }

  

  if (!bloodContainer.includes(donorBloodGroup)){
  	alert(donorinput.value + " is an invalid blood group");
  	return;
  }
 
   if (!bloodContainer.includes(recipientBloodGroup)){
  	alert(recipientinput.value + " is an invalid blood group");
  	return;
  }

  

   //get the antigens and antibodies in the donor and recipient blood
   let donorsAntigen = bloodGroup[donorBloodGroup][0];
   
   let donorsAntibody = bloodGroup[donorBloodGroup][1];
   let recipientAntigen = bloodGroup[recipientBloodGroup][0];
   let recipientAntibody = bloodGroup[recipientBloodGroup][1];
  
   const allnum = ["a","b"];
   const donorsAntigenArray = [];
   const recipienAntibodyArray = [];
   const dal = donorsAntigen.substr(-1);
    const dasl = donorsAntigen.substr(-2,1);
    const rantibol = recipientAntibody.substr(-1);
    const rantibosl = recipientAntibody.substr(-2,1);
    donorsAntigenArray.push(dal);
      //console.log(allnum .includes(dasl));
    if (allnum .includes(dasl)) {
    	donorsAntigenArray.push(dasl);
    }
    
    recipienAntibodyArray.push(rantibol);
    if (allnum. includes(rantibosl)) {
    	recipienAntibodyArray.push(rantibosl);
    }
  console.log(donorsAntigenArray);
  console.log(recipienAntibodyArray);

  //check ABO antigen/antibody compatibility
  if (donorBloodGroup == "O" || recipientBloodGroup=="AB") {
    messout.innerHTML = "Compatible";
  
  }else if (donorBloodGroup == "AB" && recipientBloodGroup!="AB") {
  	        messout.innerHTML = "Not Compatible";
          }
    else if (donorBloodGroup != "O" && recipientBloodGroup==="O") {
  	        messout.innerHTML = "Not Compatible";
          }      

  else if (donorsAntigenArray.length ===1 && recipienAntibodyArray.length===1) {
  	 if (recipienAntibodyArray[0]===donorsAntigenArray[0]) {
         messout.innerHTML = "Not Compatible";
  	 }else{
  	     messout.innerHTML = "Compatible";
          }
    
  }else if (donorsAntigenArray.length ===2 && recipienAntibodyArray.length===1) {
  	    if (recipienAntibodyArray[0] === donorsAntigenArray[0]|| recipienAntibodyArray[0]=== donorsAntigenArray[1]) {
  	    	 messout.innerHTML = "Not Compatible";
  	    }else{
              messout.innerHTML = "Compatible";
  	    	}
  }else if (donorsAntigenArray.length ===1 && recipienAntibodyArray.length===2) {
  	    if (recipienAntibodyArray[0] === donorsAntigenArray[0]|| recipienAntibodyArray[1]=== donorsAntigenArray[0]) {
  	    	 messout.innerHTML = "Not Compatible";
  	    }else{
              messout.innerHTML = "Compatible";
  	    	}
  }else if (donorsAntigenArray.length ===2 && recipienAntibodyArray.length===2) {
        if(recipienAntibodyArray.includes( donorsAntigenArray[0])|| recipienAntibodyArray.includes( donorsAntigenArray[1])) {
  	    	 messout.innerHTML = "Not Compatible";
  	    }else{
              messout.innerHTML = "Compatible";
  	    	}
  }

 //style element color based on the compatibility result.
  if (messout.innerHTML==="Compatible") {
  	messout.style.color= "green";
  	document.getElementById("compatibility").style.color="green";
  }else{
  	messout.style.color= "red";
  	document.getElementById("compatibility").style.color="red";
  }

    //fill up the explanation table
	document.getElementById("donor-bloodgroup").innerHTML= "Donor"+"("+donorBloodGroup+")";
	document.getElementById("donor-antigen").innerHTML = donorsAntigen;
	document.getElementById("donor-antibody").innerHTML = donorsAntibody;
	document.getElementById("compatibility").innerHTML=  messout.innerHTML ;
	document.getElementById("recipients-bloodgroup").innerHTML= "Recipient"+"("+ recipientBloodGroup +")";
	document.getElementById("recipients-antigen").innerHTML=recipientAntigen;
	document.getElementById("recipients-antibody").innerHTML= recipientAntibody ;
	document.getElementById("bloodtable").style.visibility="visible";
	document.getElementById("explanation").style.visibility="visible";
	
   
   //attach notes below table
   let explain = `Note: Only the donor's antigen and the recipient's antibody
    is important in determing compatibility. If the donor's antigen(${donorsAntigen}) is <strong>similar</strong> 
    to the recipient's antibody(${recipientAntibody}) the two blood types are <strong>not compatible.</strong> 
    If they are <strong>different </strong>the two blood types are <strong>compatible.</strong>`;
   document.getElementById("explanation").innerHTML= explain;
	
 }

       
