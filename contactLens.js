// CALC 1

function limitScroll(event) {
  event.stopPropagation();
}

function validateInput(inputId) {
  const input = document.getElementById(inputId);
  let value = parseFloat(input.value);

  if (inputId === 'vertexDistance' && (isNaN(value) || value < 0 || value > 20)) {
    alert("Enter vertex distance within (0mm - 20mm).");
    input.value = '';
  } else if (inputId === 'vertexDistance' && value > 20) {
    alert("Vertex distance should not exceed 20mm.");
    input.value = '';
  }
}

function filterOptions(inputId, datalistId) {
  const input = document.getElementById(inputId);
  const datalist = document.getElementById(datalistId);
  const filter = input.value.toUpperCase();
  const options = datalist.querySelectorAll('option');

  options.forEach(option => {
    const textValue = option.textContent || option.innerText;
    if (textValue.toUpperCase().indexOf(filter) > -1) {
      option.style.display = "";
    } else {
      option.style.display = "none";
    }
  });
}

function calculatePrescription1() {
const sphereInput = document.getElementById('sphereInput').value.trim();
const cylinderInput = document.getElementById('cylinderInput').value.trim();

if (sphereInput && !/^[\+\-]/.test(sphereInput)) {
    alert("Please include a sign (+ or -) for the sphere value.");
    return;
}
// Check if the cylinder input lacks a sign (+ or -)
if (cylinderInput && !/^[\+\-]/.test(cylinderInput)) {
    alert("Please include a sign (+ or -) for the cylinder value.");
    return;
}

// Check if the cylinder value is within the valid range
const cylinderValue = parseFloat(cylinderInput);
const sphereValue = parseFloat(sphereInput);
if (!isNaN(cylinderValue) && (cylinderValue < -30 || cylinderValue > 30)) {
    alert("Cylinder value should be in the range of -30 to +30.");
    return;
}
if (!isNaN(sphereValue) && (sphereValue < -30 || sphereValue > 30)) {
    alert("sphere value should be in the range of -30 to +30.");
    return;
}

const axisInput = parseFloat(document.getElementById('axisInput').value);
const vertexDistanceInput = parseFloat(document.getElementById('vertexDistance').value);

// Check if sphere is provided without vertex distance
if (!isNaN(sphereValue) && isNaN(vertexDistanceInput)) {
    alert("Please make sure Vertex distance (mm) is provided.");
    return;
}

// Check if all other inputs except for sphere are empty
if (isNaN(sphereValue) && isNaN(cylinderValue) && isNaN(axisInput) && isNaN(vertexDistanceInput)) {
    alert("Please provide at least one input value.");
    return;
}

// Only check if axis and vertex distance inputs are invalid if they're provided
if (!isNaN(axisInput) && !isNaN(vertexDistanceInput)) {
    if (axisInput < 1 || axisInput > 180 || vertexDistanceInput < 0 || vertexDistanceInput > 20) {
        alert("Please ensure that axis is within 0 to 180 and vertex distance is within 1mm to 20mm.");
        return;
    }
}

const vertexDistance = vertexDistanceInput / 1000;

let correctedPower1, correctedPower2, correctedCylinder = 0; // Initialize correctedCylinder

let prescriptionType;
const selection = document.querySelector('input[name="conversion"]:checked').value;
if (selection === 'specsToCL') {
    correctedPower1 = 1 / (1 / sphereValue - vertexDistance);
    if (!isNaN(cylinderValue) && cylinderValue !== 0) {
        correctedPower2 = 1 / (1 / (sphereValue + cylinderValue) - vertexDistance);
        correctedCylinder = correctedPower2 - correctedPower1;
    }
    prescriptionType = 'Specs to CL';
} else {
    correctedPower1 = 1 / (1 / sphereValue + vertexDistance);
    if (!isNaN(cylinderValue) && cylinderValue !== 0) {
        correctedPower2 = 1 / (1 / (sphereValue + cylinderValue) + vertexDistance);
        correctedCylinder = correctedPower2 - correctedPower1;
    }
    prescriptionType = 'CL to Specs';
}

const sphereDecimals = getDecimalCount(correctedPower1);
const cylinderDecimals = getDecimalCount(correctedCylinder);

let message = '';

if (sphereDecimals !== 2) {
    message +=  'Round up or round down the power, ';
}
if (cylinderDecimals !== 2) {
    message += 'as you require. ';
}

if (sphereValue >= -4 && sphereValue <= 4) {
    message += 'Effective power calculation not necessary for less than or equal to 4.00 DS. ';
}

document.getElementById('message1').innerText = message;

const correctedSphereSign = correctedPower1 >= 0 ? '+' : '';
const correctedCylinderSign = correctedCylinder >= 0 ? '+' : '';

let resultText = `Corrected Prescription for ${prescriptionType}: ${correctedSphereSign}${correctedPower1.toFixed(2)} DS`;

if (!isNaN(cylinderValue) && cylinderValue !== 0) {
    resultText += ` / ${correctedCylinderSign}${correctedCylinder.toFixed(2)} DC x ${axisInput}`;
}

document.getElementById('result1').innerText = resultText;
if (isNaN(cylinderValue) || isNaN(axisInput)) {
    document.getElementById('result1').innerText = resultText.split(" /")[0];
}
}


function getDecimalCount(number) {
  if (Math.floor(number) === number) return 0;
  return number.toString().split(".")[1].length || 0;
}

function displayTooltip(event, message) {
  const tooltip = document.getElementById('tooltip');
  tooltip.innerHTML = message;
  tooltip.style.display = 'block';
  tooltip.style.top = (event.clientY + 10) + 'px';
  tooltip.style.left = (event.clientX + 10) + 'px';
}

function hideTooltip() {
  const tooltip = document.getElementById('tooltip');
  tooltip.style.display = 'none';
}


// CALC 2

function calculate2() {
  var powerInput = document.getElementById("powerInput");
  var resultElement = document.getElementById("result2");

  var power = parseFloat(powerInput.value);

  if (!isNaN(power) && power >= 30 && power <= 61) {
      var baseCurve = 337.5 / power;
      resultElement.textContent = "Base Curve: " + baseCurve.toFixed(2) + " mm ";
  } else {
      // Show alert message
      alert("Please enter Corneal Curve between 30D - 61D.");
  }
}

function filterOptions(inputId, listId) {
  const input = document.getElementById(inputId);
  const datalist = document.getElementById(listId);
  const options = datalist.getElementsByTagName('option');
  const inputValue = input.value.toLowerCase();

  for (let i = 0; i < options.length; i++) {
      const optionValue = options[i].value.toLowerCase();
      if (optionValue.startsWith(inputValue)) {
          options[i].style.display = '';
      } else {
          options[i].style.display = 'none';
      }
  }
}

function displayTooltip2(event, message) {
  const tooltip = document.getElementById('tooltip2');
  tooltip.innerHTML = message;
  tooltip.style.display = 'block';
  tooltip.style.top = (event.clientY + 10) + 'px';
  tooltip.style.left = (event.clientX + 10) + 'px';
}

function hideTooltip2() {
  const tooltip = document.getElementById('tooltip2');
  tooltip.style.display = 'none';
}



// CALC 3

function drawCanvas(canvasId, angle, number) {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext('2d');
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = 80;

  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw circle
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  ctx.stroke();

  // Convert angle to radians
  const radians = (0 - angle) * Math.PI / 180;

  // Calculate line endpoint on circumference of the circle
  const x1 = centerX + radius * Math.cos(radians);
  const y1 = centerY + radius * Math.sin(radians);
  const x2 = centerX - radius * Math.cos(radians);
  const y2 = centerY - radius * Math.sin(radians);

  // Draw line
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();

  // Draw number
  ctx.fillText(number, centerX - 5, centerY + 5);
}

// Function to update canvas based on input value
function updateCanvas(canvasId, value) {
  drawCanvas(canvasId, value, value); // Draw number based on input value
}

function calculateLars() {
  const initialAxis = parseFloat(document.getElementById('axis').value);
  const axisAfterBlink = parseFloat(document.getElementById('rotationAmount').value);
  let finalAxis;

  // Check if inputs are in the range of 0 to 180
  if (initialAxis < 0 || initialAxis > 180 || axisAfterBlink < 0 || axisAfterBlink > 180) {
      document.getElementById('alertMessage').style.display = "block"; // Display alert message
      setTimeout(function(){ document.getElementById('alertMessage').style.display = "none"; }, 5000); // Hide alert message after 5 seconds
      return; // Exit the function if inputs are not in the range
  }

  // Determine the larger axis
  if (initialAxis > axisAfterBlink) {
      // Calculate the difference between the two axes
      const difference = Math.abs(initialAxis - axisAfterBlink);
      // Adjust the final axis based on the LARS rule
      finalAxis = initialAxis + difference;
  } else {
      // Calculate the difference between the two axes
      const difference = Math.abs(axisAfterBlink - initialAxis);
      // Adjust the final axis based on the LARS rule
      finalAxis = initialAxis - difference;
  }

  // Ensure the final axis remains within the range of 0 to 360 degrees
  finalAxis = (finalAxis + 360) % 360;

  // If final axis is more than 180, reduce by 180
  if (finalAxis > 180) {
      finalAxis -= 180;
  }

  // If final axis is 0, display as 180
  if (finalAxis === 0) {
      finalAxis = 180;
  }

  // Display the result as a prescription without the sign
  const prescriptionResult = `Try the Axis: ${finalAxis.toFixed(0)}`;

  document.getElementById('resultPrescription').innerText = prescriptionResult;

  // Draw the output angle
  drawCanvas('outputCanvas', finalAxis, finalAxis, finalAxis);
}

// Function to handle input changes for the prescription fields
function calculatePrescription() {
  calculateLars();  // Call the LARS calculation function
}

// Initial drawing of canvas
drawCanvas('axisCanvas', parseFloat(document.getElementById('axis').value), parseFloat(document.getElementById('axis').value));
drawCanvas('rotationCanvas', parseFloat(document.getElementById('rotationAmount').value), parseFloat(document.getElementById('rotationAmount').value));








   // DROPDOWN INITIALIZATION

   document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems);
  });

// CHANGE CONTENT

  $(document).ready(function(){
    changeContent('opt1');
  });
  function changeContent(option) {
    // Close the side navigation
    // $('.sidenav').sidenav('close');
    // Hide all calculator sections
    $('div[id^="calculator-"]').hide();

    // Show the selected calculator section
    $('#calculator-' + option).show();
}