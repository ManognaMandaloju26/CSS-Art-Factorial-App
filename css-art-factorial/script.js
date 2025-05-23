function validateInput(value) {
  const num = parseInt(value);
  if (isNaN(num) || num < 0) {
    alert("Please enter a valid non-negative integer.");
    return null;
  }
  return num;
}

function calculateIterative() {
  const input = document.getElementById("numberInput").value;
  const num = validateInput(input);
  if (num === null) return;

  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  document.getElementById("result").innerText = `Iterative Result: ${result}`;
}

function calculateRecursive() {
  const input = document.getElementById("numberInput").value;
  const num = validateInput(input);
  if (num === null) return;

  function recursive(n) {
    if (n <= 1) return 1;
    return n * recursive(n - 1);
  }

  const result = recursive(num);
  document.getElementById("result").innerText = `Recursive Result: ${result}`;
}
