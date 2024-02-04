function sendData() {
    // Get the input value from the HTML form
    var inputData = document.getElementById('data.link').value;

    // Call a function from the JavaScript file to handle the data
    handleData(inputData);
}

// Function to handle the received data
function handleData(data) {
    alert('Received data in JS file: ' + data);

    // You can perform additional actions with the data here
}
