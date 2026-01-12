const amountInput = document.getElementById("amount");
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const convertBtn = document.getElementById("convertBtn");
const resultDiv = document.getElementById("result");

// 🗝️ Replace with your actual API key
const API_KEY = "YOUR_API_KEY_HERE";

convertBtn.addEventListener("click", () => {
  let amount = parseFloat(amountInput.value);
  let from = fromCurrency.value;
  let to = toCurrency.value;

  if (isNaN(amount) || amount <= 0) {
    resultDiv.textContent = "Please enter a valid amount.";
    return;
  }

  fetchExchangeRate(from, to, amount);
});

async function fetchExchangeRate(from, to, amount) {
  const url = `https://api.freecurrencyapi.com/v1/latest?apikey=${API_KEY}&base_currency=${from}`;

  try {
    let response = await fetch(url);
    let data = await response.json();

    // Check if API returned rates
    if (!data || !data.data || !data.data[to]) {
      resultDiv.textContent = "Error getting conversion rate.";
      return;
    }

    let rate = data.data[to];
    let converted = (rate * amount).toFixed(4);

    resultDiv.textContent = `${amount} ${from} = ${converted} ${to}`;
  } catch (error) {
    resultDiv.textContent = "Failed to fetch data. Try again later.";
    console.error(error);
  }
}
