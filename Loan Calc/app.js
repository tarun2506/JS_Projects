// Listening to the submit button

document.querySelector('#loan-form').addEventListener('submit', function(e){
  // Hide results
  document.getElementById('results').style.display = 'none';  
  
  // Show loader 
  document.getElementById('loading').style.display = 'block';

  setTimeout(calculateResults, 1500);

  

  e.preventDefault();
});


// Calculate Result
function calculateResults(){
  console.log('Calculating....');
  // UI Variables
  const UiAmount = document.getElementById('amount');
  const UiInterest = document.getElementById('interest');
  const UiYear = document.getElementById('years');
  const UiMonthlyPayment = document.getElementById('monthly-payment');
  const UiTotalPayment = document.getElementById('total-payment');
  const UiTotalInterest = document.getElementById('total-interest');
  
  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(UiInterest.value) / 100 / 12;
  const calculatedPayments = parseFloat(UiYear.value) * 12;

  // COmputing mOnthly pAyments;
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal*x*calculatedInterest) / (x-1);

  if(isFinite(monthly)){
    UiMonthlyPayment.value = monthly.toFixed(2);
    UiTotalPayment.value = (monthly*calculatedPayments).toFixed(2);
    UiTotalInterest.value = ((monthly*calculatedPayments) -  principal).toFixed(2);
    // Show results
    document.getElementById('results').style.display = 'block';
    // hide loader
    document.getElementById('loading').style.display = 'none';
  }else{
    showError('Please Check Your Numbers');
  }
  
}


// Show Error
function showError(error){

   // hide loader
   document.getElementById('loading').style.display = 'none';

   // hide Results
   document.getElementById('results').style.display = 'none';  

  // Ccreate a div
  const errorDiv = document.createElement('div');

  // get Elemts
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  // Add class
  errorDiv.className = 'alert alert-danger';

  // create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  // Insert error above heading
  card.insertBefore(errorDiv, heading);

  // Clear error after 3 sec
  setTimeout(clearError, 3000);

 

}

// Making the fuction clear

function clearError(){
  document.querySelector('.alert').remove();
}


