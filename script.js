  const result=document.querySelector("#result")
  const button=document.querySelector("button")
  const bmi_form=document.querySelector("#bmi_form")
const bmiType=document.querySelector(".bmiType")

bmi_form.addEventListener("submit", function (e) {
    e.preventDefault()  // protect from refreshing ... 
  // 1. Sirf HTML Element ko select karke save kara (taaki baad mein clear kar sake)
const weightInput = document.querySelector("#weight"); 
const heightInput = document.querySelector("#height");

// 2. Button click hone par us element ke andar ki value nikal li 
const wt = parseInt(weightInput.value);
const ht = parseInt(heightInput.value);
   
    // chkcing the input 
    if(isNaN(ht) || isNaN(wt) || ht<=0 || wt<=0){
        result.innerText="Please write positive no !"
        button.innerText="Calculate BMI"
        return // end the code 
    }
   
    // input correct cleaning button 
       button.innerText="Loading..."
           result.innerText=""


   
    // result.innerText(BMI) wrong 

    // providing ans
    setTimeout(() => {
        const BMI= ((wt*10000)/(ht*ht)).toFixed(2)
        result.innerText=`BMI is ${BMI}`

        if(BMI<18.5){ 
            bmiType.innerHTML="Under Weight"
         }
          else if(BMI>18.5&& BMI<24.9){ 
            bmiType.innerHTML="Healthy Weight"
         }
          else if(BMI>25 && BMI<29.9){ 
            bmiType.innerHTML="Over weight"
         }
          else if(BMI>30){ 
            bmiType.innerHTML="Obesity"
         }
      weightInput.value="";
      heightInput.value="";
      

        button.innerHTML="Calculate BMI"
   }, 1200);


})



