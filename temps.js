function Temperature() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputScale = document.getElementById('inputScale').value;

    if (isNaN(inputValue)) {
        alert("Please enter a valid number");
        return;
    }

    let celsius, fahrenheit, kelvin;

    switch (inputScale) {
        case 'Celsius':
            celsius = inputValue;
            fahrenheit = (celsius * 9/5) + 32;
            kelvin = celsius + 273.15;
            break;
        case 'Fahrenheit':
            fahrenheit = inputValue;
            celsius = (fahrenheit - 32) * 5/9;
            kelvin = celsius + 273.15;
            break;
        case 'Kelvin':
            kelvin = inputValue;
            celsius = kelvin - 273.15;
            fahrenheit = (celsius * 9/5) + 32;
            break;
    }

    document.getElementById('outputCelsius').innerText = `Celsius: ${celsius.toFixed(2)}`;
    document.getElementById('outputFahrenheit').innerText = `Fahrenheit: ${fahrenheit.toFixed(2)}`;
    document.getElementById('outputKelvin').innerText = `Kelvin: ${kelvin.toFixed(2)}`;
}
