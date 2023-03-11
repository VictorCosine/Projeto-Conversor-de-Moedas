const button = document.getElementById("convert-button")
const select = document.getElementById("currency-select")
const dolar = 5.21
const euro = 5.56
const bitcoin = 105751.66

const convertValues = () => {
  const input = document.getElementById("input-real").value
  const realValueText = document.getElementById("real-value-text")
  const convertValueText = document.getElementById("convert-value-text")

  realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(input)

  if (select.value === "US$ Dólar Americano") {
    convertValueText.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(input / dolar)
  }

  if (select.value === "€ Euro") {
    convertValueText.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(input / euro)
  }

  if(select.value === "Bitcoin") {
    convertValueText.innerHTML =(input / bitcoin)

  }

}

changeCurrency = () => {
  const currencyName = document.getElementById("currency-name")
  const currencyImage = document.getElementById("currency-image")

  if (select.value === "US$ Dólar Americano") {
    currencyName.innerHTML = "Dólar Americano"
    currencyImage.src = "./assets/EUA.png"
  }

  if (select.value === "€ Euro") {
    currencyName.innerHTML = "Euro"
    currencyImage.src = "./assets/EURO.png"
  }

  if (select.value === "Bitcoin") {
    currencyName.innerHTML = "Bitcoin"
    currencyImage.src = "./assets/BIT.png" }

  convertValues()

}

button.addEventListener("click", convertValues)
select.addEventListener("change", changeCurrency)
