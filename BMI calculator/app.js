// Listening to the calculate button 

document.querySelector('#bmi-form').addEventListener('submit', function(e){
  // Not displaying the results yet
  document.getElementById('result').style.display="none";

  // Dislayin the loapding image
  document.getElementById('loading').style.display="block";

  setTimeout(calulating, 1500)

  e.preventDefault();
})

// Making the calculate func

function calulating(){
  // Ui variables
  const UiHeight = document.querySelector('#height');
  const UiWeight = document.querySelector('#weight');
  const UiResult = document.querySelector('#results');

  //getting the values
  const valHeight = parseFloat(UiHeight.value);
  const valWeight = parseFloat(UiWeight.value);

  // Calculate
  const bmi = (valWeight) / (valHeight*valHeight);
  
  // getting the result
  if(isFinite(bmi)){
    UiResult.value = bmi.toFixed(2);
    // Show results
    document.getElementById('result').style.display = 'block';
    // hiding the loading screen
    document.getElementById('loading').style.display = "none";

  } else{
    showError('Check the numbers');
  }
}

function showError(error){
   // hiding the loading screen
   document.getElementById('loading').style.display="none";
  //hiding  the result
  document.getElementById('result').style.display="none";
  
  // Creating the div
  const newDiv = document.createElement('div');

  // getting the elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  // Add class
  newDiv.className = 'alert alert-danger';

  // creating the text node
  newDiv.appendChild(document.createTextNode(error));

  // placing the error mssg
  card.insertBefore(newDiv, heading);

  setTimeout(clearError, 2000);
}


function clearError(){
  document.querySelector('.alert').remove();
}