const monthsInput = document.getElementById('months');
const priceOutput = document.getElementById('price');
const monthsForTextOutput = document.getElementById('monthsForText');
const pricePerMonthOutput = document.getElementById('pricePerMonth');
const errorMessage = document.getElementById('error');

function calculatePrice() {
    const months = parseInt(monthsInput.value);
    const pricing = 800;
    const discount = 50;
    const discountChanging = 20;


    if (isNaN(months) || months <= 0) {
        errorMessage.textContent = "Будь ласка, введіть правильну кількість місяців";
        priceOutput.textContent = "";
        pricePerMonthOutput.textContent = "";
        monthsForTextOutput.textContent = "-";
        return;
    }

    if (months > 24) {
        errorMessage.textContent = "Максимальна кількість місяців - 24";
        priceOutput.textContent = "";
        pricePerMonthOutput.textContent = "";
        monthsForTextOutput.textContent = "-";
        return;
    }

    errorMessage.textContent = "";

    let price;
    let pricePerMonth;

    if (months === 1) {
        price = pricing;
        pricePerMonth = pricing;
    } else {
        price = (months * pricing) - ((2 * discount + discountChanging * (months - 1))/2) * months;
        pricePerMonth = price / months;
    }

    priceOutput.textContent = price.toString();
    pricePerMonthOutput.textContent = pricePerMonth.toFixed(1);
    monthsForTextOutput.textContent = months.toString();
}

monthsInput.addEventListener('input', calculatePrice);
