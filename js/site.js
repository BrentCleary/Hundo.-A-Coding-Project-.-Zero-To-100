
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
  let numbers = [];

  if(Number.isInteger(startValue) && Number.isInteger(endValue)) 
  {
    
    // - call generateNumbers
    numbers = generateNumbers(startValue, endValue);
    // We call displayNumbers
    displayNumbers(numbers);

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
function displayNumbers(numbers){

  let className = "even";
  let templateRows = "";

  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];

    if(number %  2 === 0)
    {
      className = "even";
    }
    else
    {
      className = "odd";
    }
    
    templateRows += `<tr><td class="${className}" >${number}</td></tr>`
  }

  document.getElementById("results").innerHTML = templateRows;

}