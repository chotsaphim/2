let sharesInput;
let paymentInput;
let calculateButton;
let resultP;
let errorP;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#f0f0f0');

  // Create input fields and button with enhanced styling
  sharesInput = createInput('');
  sharesInput.position(windowWidth / 2 - 100, windowHeight / 2 - 60);
  sharesInput.style('padding', '10px');
  sharesInput.style('border-radius', '5px');
  sharesInput.style('border', '1px solid #ccc');

  paymentInput = createInput('');
  paymentInput.position(windowWidth / 2 - 100, windowHeight / 2);
  paymentInput.style('padding', '10px');
  paymentInput.style('border-radius', '5px');
  paymentInput.style('border', '1px solid #ccc');
  
  calculateButton = createButton('Calculate Payment');
  calculateButton.position(windowWidth / 2 - 100, windowHeight / 2 + 60);
  calculateButton.style('padding', '10px');
  calculateButton.style('border-radius', '5px');
  calculateButton.style('border', 'none');
  calculateButton.style('background-color', '#4CAF50');
  calculateButton.style('color', '#fff');
  calculateButton.style('cursor', 'pointer');
  calculateButton.mousePressed(calculatePayment);
  calculateButton.mouseOver(() => calculateButton.style('background-color', '#45a049'));
  calculateButton.mouseOut(() => calculateButton.style('background-color', '#4CAF50'));

  // Create paragraph to display result and error with enhanced styling
  resultP = createP('Result: ');
  resultP.position(windowWidth / 2 - 100, windowHeight / 2 + 120);
  resultP.style('font-size', '16px');
  resultP.style('background-color', '#e0ffe0');
  resultP.style('padding', '10px');
  resultP.style('border-radius', '5px');
  
  errorP = createP('');
  errorP.position(windowWidth / 2 - 100, windowHeight / 2 + 160);
  errorP.style('color', 'red');

  // Create labels with enhanced styling
  let sharesLabel = createP('Number of shares:');
  sharesLabel.position(windowWidth / 2 - 230, windowHeight / 2 - 90);
  sharesLabel.style('font-size', '16px');
  
  let paymentLabel = createP('Payment per share:');
  paymentLabel.position(windowWidth / 2 - 230, windowHeight / 2 - 20);
  paymentLabel.style('font-size', '16px');
}

function calculatePayment() {
  // Reset error message
  errorP.html('');

  // Get the values from the input fields
  let shares = parseFloat(sharesInput.value());
  let paymentPerShare = parseFloat(paymentInput.value());

  // Validate inputs and calculate the total payment
  if (isNaN(shares) || isNaN(paymentPerShare)) {
    errorP.html('Please enter valid numbers.');
  } else {
    let totalPayment = shares * paymentPerShare;
    
    // Display the result in THB currency
    resultP.html('Result: ฿' + totalPayment.toFixed(2));
  }
}
