
// Basic function Layout
  // - Get Function
  // - Logic Function
  // - Display Function


// Get the values from the Page
// Starts or controller function
function getValues()
{
  // - get value from page
  let startValue = document.getElementById("startValue").value;
  let endValue = document.getElementById("endValue").value;

  // parse into int
  startValue = parseInt(startValue);
  endValue = parseInt(endValue);

  if(Number.isInteger(startValue) && Number.isInteger(endValue)) 
  {
    
    // - call generateNumbers
    let numbers = generateNumbers(startValue, endValue);
  
  }
  else
  {
    alert("You must enter integers");
  }

}


// generate numbers from startValue and endValue
// logic function(s)
function generateNumbers(sValue, eValue){
  
  let numbers = [];

  for (let i = sValue; i <= eValue; i++){
    
    numbers.push(i);
    
  }

  return numbers;
  
}


// display the numbers and mark the even number bold
// display or view functions
function displayNumbers(){

}