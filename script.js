// Function to count the total number of elements on the page
function countElements() {
    const elements = document.getElementsByTagName('p').length;
    document.getElementById('result1').innerText = `There are  ${elements} p elements on the page`;
}

// Function to count the number of elements inside the first ID
function countFirstDivElements() {
    const firstDivElements = document.getElementById('firstDiv').getElementsByTagName('*').length;
    document.getElementById('result2').innerText = `There are ${firstDivElements} elements in First Div`;
}

// Function to count the number of elements inside the second ID
function countSecondDivElements() {
    const secondDivElements = document.getElementById('secondDiv').getElementsByTagName('*').length;
    document.getElementById('result3').innerText = `There are ${secondDivElements} elements in Second Div`;
}