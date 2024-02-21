const input = document.querySelector("input");
const result = document.getElementById("result");
const dropdown = document.getElementById("currency");

function submitHandler(event) {
  event.preventDefault();
  let amount = +input.value;
  const currency = dropdown.value;
  switch (currency) {
    case "INR":
      reformatINR(amount);
      break;
    case "USD":
      reformatUSD(amount);
      break;
    case "EUR":
      reformatEUR(amount);
      break;
    default:
      alert("Choose a currency.");
      break;
  }
}

/**
 * @param {number} amount
 */
function reformatINR(amount) {
  const options = { style: "currency", currency: "INR" };
  const res = amount.toLocaleString("en-IN", options);
  result.innerText = res;
}

/**
 * @param {number} amount
 */
function reformatUSD(amount) {
  const options = { style: "currency", currency: "USD" };
  const res = amount.toLocaleString("en-US", options);
  result.innerText = res;
}

/**
 * @param {number} amount
 */
function reformatEUR(amount) {
  const options = { style: "currency", currency: "EUR" };
  const res = amount.toLocaleString("en-GB", options);
  result.innerText = res;
}
