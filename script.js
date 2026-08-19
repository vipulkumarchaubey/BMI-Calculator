  const result=document.querySelector("#result")
  const button=document.querySelector("button")
  const bmi_form=document.querySelector("#bmi_form")

bmi_form.addEventListener("submit", function (e) {
    e.preventDefault()  // protect from refreshing ... 
    const ht = parseInt(document.querySelector("#height").value)
    const wt = parseInt(document.querySelector("#weight").value)
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
        button.innerHTML="Calculate BMI"
   }, 1200);


})


