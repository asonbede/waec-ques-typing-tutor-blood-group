let bloodGroup = {"A": ["antigen-a","antibody-b"], "B": ["antigen-b","antibody-a"],
                  "AB": ["antigen-ab","antibody-O"], "O": ["antigen-O","antibody-ab"]}

let bloodGroupRhesus = {"+": ["antigen-d","antibody-o"], "-": ["antigen-o","antibody-d"]}

let aboCompatibility =
              //donor-recipient  
                  {"A A": ["Compatible"],
                 "A B": ["Not Compatible"],
                  "A AB": ["Compatible"],
                 "A O": ["Not Compatible"],
                 //---------------------------
                  "B A": ["Not Compatible"],
                 "B B": ["Compatible"],
                  "B AB": ["Compatible"],
                 "B O": ["Not Compatible"],
                 //---------------------------
                  "AB A": ["Not Compatible"],
                 "AB B": ["Not Compatible"],
                  "AB AB":["Compatible"],
                 "AB O": ["Not Compatible"],
                 //---------------------------
                  "O A": ["Compatible"],
                 "O B": ["Compatible"],
                  "O AB": ["Compatible"],
                 "O O": ["Compatible"]}

                
let rhesusCompatibility = "";

let CompatibilitySummary =
          //recipient-donor  
                  {"O- O-": ["Compatible"],
                 "O- O+": ["Not Compatible"],
                  "O- A-": ["Not Compatible"],
                 "O- A+": ["Not Compatible"],
                  "O- B-": ["Not Compatible"],
                 "O- B+": ["Not Compatible"],
                  "O- AB-": ["Not Compatible"],
                 "O- AB+": ["Not Compatible"],
                 //---------------------------------     
                  "O+ O-": ["Compatible"],
                 "O+ O+": ["Compatible"],
                  "O+ A-": ["Not Compatible"],
                 "O+ A+": ["Not Compatible"],
                  "O+ B-": ["Not Compatible"],
                 "O+ B+": ["Not Compatible"],
                  "O+ AB-": ["Not Compatible"],
                 "O+ AB+": ["Not Compatible"],
                 //-------------------------------------
                  "A- O-": ["Compatible"],
                 "A- O+": ["Not Compatible"],
                  "A- A-": ["Compatible"],
                 "A- A+": ["Not Compatible"],
                  "A- B-": ["Not Compatible"],
                 "A+ B+": ["Not Compatible"],
                  "A- AB-": ["Not Compatible"],
                 "A- AB+": ["Not Compatible"],
                 //-----------------------------------
                  "A+ O-": ["Compatible"],
                 "A+ O+": ["Compatible"],
                  "A+ A-": ["Compatible"],
                 "A+ A+": ["Compatible"],
                  "A+ B-": ["Not Compatible"],
                 "A+ B+": ["Not Compatible"],
                  "A+ AB-": ["Not Compatible"],
                 "A+ AB+": ["Not Compatible"],
                 //----------------------------------
                  "B- O-": ["Compatible"],
                 "B- O+": ["Not Compatible"],
                  "B- A-": ["Not Compatible"],
                 "B- A+": ["Not Compatible"],
                  "B- B-": ["Not Compatible"],
                 "B- B+": ["Not Compatible"],
                  "B- AB-": ["Not Compatible"],
                 "B- AB+": ["Not Compatible"],
                //--------------------------------
                "B+ O-": ["Compatible"],
                 "B+ O+": ["Compatible"],
                  "B+ A-": ["Not Compatible"],
                 "B+ A+": ["Not Compatible"],
                  "B+ B-": ["Compatible"],
                 "B+ B+": ["Compatible"],
                  "B+ AB-": ["Not Compatible"],
                 "B+ AB+": ["Not Compatible"],
                //--------------------------------
                "AB- O-": ["Compatible"],
                 "AB- O+": ["Not Compatible"],
                 "AB- A-": ["Compatible"],
                 "AB- A+": ["Not Compatible"],
                  "AB- B-": ["Compatible"],
                 "AB- B+": ["Not Compatible"],
                  "AB- AB-": ["Compatible"],
                 "AB- AB+": ["Not Compatible"],
                //--------------------------------
                "AB+ O-": ["Compatible"],
                 "AB+ O+": ["Compatible"],
                 "AB+ A-": ["Compatible"],
                 "AB+ A+": ["Compatible"],
                  "AB+ B-": ["Compatible"],
                 "AB+ B+": ["Compatible"],
                  "AB+ AB-": ["Compatible"],
                 "AB+ AB+": ["Compatible"]}
                //--------------------------------


                

 //get elements
const donorinput = document.getElementById("messageIn");
const recipientinput = document.getElementById("messageIn2");
const sendbut = document.getElementById("sendBtn");
const messout = document.getElementById("messageOut");


 const donorBloodgroupTable = document.getElementById("donor-bloodgroup");
 const donorAntigenTable= document.getElementById("donor-antigen");
 const donorAntibodyTable =  document.getElementById("donor-antibody");
 const compatibilityTable =  document.getElementById("compatibility") ;
 const recipientsBloodgroupTable =  document.getElementById("recipients-bloodgroup");
 const recipientsAntigenTable = document.getElementById("recipients-antigen");
 const recipientsAntibodyTable = document.getElementById("recipients-antibody");
 const bloodtableTable =  document.getElementById("bloodtable");
 const explanationTable =  document.getElementById("explanation");


//add eventlistener to check compatibility button
sendbut.addEventListener("click",getBloodGroup);
function getBloodGroup(argument) {
 //let bloodContainer = ["A+","A-","B+","B-","AB+","AB-","O+","O-"];

 //get donor and recipient blood type  from inputt
  let funValue = getUserInput(donorinput,recipientinput);
  let donorBloodGroup = funValue[0];
  let recipientBloodGroup = funValue[1];
  

  //hidd explanation table and notes
  document.getElementById("bloodtable").style.visibility="hidden";
  document.getElementById("explanation").style.visibility="hidden";
 
  
  // check whether the inputted blood group is valid or whether empty input was submitted
  if ( validateInput(donorBloodGroup,recipientBloodGroup )) {
    return;
  }
  
 

  

   //get ABO and Rhesus blood groups of both the donor and recipient 
   let donorsABO = donorBloodGroup.slice(0,-1);
   let donorsRhesus = donorBloodGroup.slice(-1);
   let recipientABO = recipientBloodGroup.slice(0,-1);
   let recipientRhesus = recipientBloodGroup.slice(-1);
   
  //ABO antigen and antibodies of both donor and recipient
   let donorsAntigen = bloodGroup[donorsABO][0];
   let donorsAntibody = bloodGroup[donorsABO][1];
   let recipientAntigen = bloodGroup[recipientABO][0];
   let recipientAntibody = bloodGroup[recipientABO][1];
  
  //Rhesus antigen and antibodies of both donor and recipient
   let donorsAntigen2 = bloodGroupRhesus[donorsRhesus][0];
   let donorsAntibody2 = bloodGroupRhesus[donorsRhesus][1];
   let recipientAntigen2 = bloodGroupRhesus[recipientRhesus][0];
   let recipientAntibody2 = bloodGroupRhesus[recipientRhesus][1];
  

   //Check compatibility of donor and recipient blood
   let compatibilityValue = CompatibilitySummary[recipientBloodGroup+" "+donorBloodGroup];
    messout.innerHTML = compatibilityValue[0];
  
    rhesusCompatibility = rhesusCompatibilityChecker(donorsRhesus,recipientRhesus);
    aboCompatibilitty = aboCompatibility[donorsABO+" "+recipientABO];
 
 //style element color based on the compatibility result.
  if (compatibilityValue[0]==="Compatible") {
  	messout.style.color= "green";
  	compatibilityTable.style.color="green";
     bloodtableTable.style.visibility="hidden";
    
     
    

  }else{
  	messout.style.color= "red";
  	compatibilityTable.style.color="red";
  }

    //fill up the explanation table
	donorBloodgroupTable.innerHTML= "Donors"+"("+ donorBloodGroup +")";
 donorAntigenTable.innerHTML = donorsAntigen;
 donorAntibodyTable.innerHTML = donorsAntibody;
 compatibilityTable.innerHTML=  messout.innerHTML ;
  recipientsBloodgroupTable.innerHTML= "Recipient"+"("+ recipientBloodGroup +")";
 recipientsAntigenTable.innerHTML= recipientAntigen; recipientAntibody ;
 recipientsAntibodyTable.innerHTML=recipientAntibody ;
 bloodtableTable.style.visibility="visible";
 explanationTable.style.visibility="visible";

   
   //attach notes below table
   let explain = `<em>Note: Only the donor's antigen and the recipient's antibody
    is important in determing compatibility. If the donor's antigen(${donorsAntigen}) is <strong>similar</strong> 
    to the recipient's antibody(${recipientAntibody}) the two blood types are <strong>not compatible.</strong> 
    If they are <strong>different </strong>the two blood types are <strong>compatible.</strong> </em>`;
   document.getElementById("explanation").innerHTML= explain;

   console.log("overallcompatibility: "+compatibilityValue[0]);
   console.log("rhesusCompatibility: "+rhesusCompatibility);
   console.log("ABOcompatibility: "+aboCompatibilitty);
	
 }


 //define getUserInput function
 function getUserInput(input1,input2) {
    let donorBloodGroup = input1.value.toUpperCase(); 
    let recipientBloodGroup = input2.value.toUpperCase();
    return [donorBloodGroup,recipientBloodGroup];
 }


//define validateInput input function 
function validateInput(value1,value2) {
  let bloodContainer = ["A+","A-","B+","B-","AB+","AB-","O+","O-"];
     if (value1 ===""){
    alert("Donors Blood Group is Empty");
    return true;
  }

  if ( value2===""){
    alert("Recipient Blood Group is Empty");
    return true;
  }

  

  if (!bloodContainer.includes(value1)){
    alert(donorinput.value + " is an invalid blood group");
    return true;
  }
 
   if (!bloodContainer.includes(value2)){
    alert(recipientinput.value + " is an invalid blood group");
    return true;
  }

  
   }

//Rhesus compatibility check
function rhesusCompatibilityChecker(value1,value2) {
    if ( value2 ==="+") {
       rhesusCompatibility = "Compatible";
    }else if(value2 ==="-" && value1==="+"){  
         rhesusCompatibility = "Not Compatible";
      
    }else if(value2 ==="-" && value1==="-"){  
         rhesusCompatibility = "Compatible";
      
     }
    return rhesusCompatibility;
  }
