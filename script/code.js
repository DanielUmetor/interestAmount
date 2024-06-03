function calculateInterest() {
    let principal = parseFloat(document.getElementById('principal').value);
    let rate = parseFloat(document.getElementById('rate').value);
    let time = parseFloat(document.getElementById('time').value);
  
    let interest = (principal * rate * time) / 100;
  
    document.getElementById('result').innerText = `Interest Amount: R${interest.toFixed(2)}`;
  }
  