// CALC 1
function calculatePower() {
  const inputElement = document.getElementById('workingDistance');
  const inputValue = inputElement.value;

  // Check if the input is empty
  if (!inputValue) {
    alert("Please enter your working distance.");
    return;
  }

  const workingDistanceInput = parseFloat(inputValue); // Parse input as float

  // Check if the working distance input is within the desired range
  if (workingDistanceInput < 5 || workingDistanceInput > 100) {
    alert("Working distance should be between 5cm and 100cm.");
    return; // Exit the function
  }

  const workingDistancePower = (100 / workingDistanceInput).toFixed(2);

  const resultElement = document.getElementById('result');

  if (workingDistanceInput >= 100) {
    resultElement.innerText = `Power for Your Working Distance: +${workingDistancePower} diopter. But your Working Distance is too high`;
  } else {
    const roundedPower = parseFloat(workingDistancePower);
    if (![0, 0.25, 0.50, 0.75].includes(roundedPower % 1)) {
      resultElement.innerText = `Compensating lens for Your Working Distance: +${workingDistancePower} (D). Please round the power as you required.`;
    } else {
      resultElement.innerText = `Compensating lens for Your Working Distance: +${workingDistancePower} (D)`;
    }
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

function displayTooltip1(event, message) {
  console.log("hello");
  const tooltip = document.getElementById('tooltip1');
  console.log(tooltip);
  tooltip.innerHTML = message;
  tooltip.style.display = 'block';
  tooltip.style.top = (event.clientY + 10) + 'px';
  tooltip.style.left = (event.clientX + 10) + 'px';
}

function hideTooltip1() {
  const tooltip = document.getElementById('tooltip1');
  tooltip.style.display = 'none';
}



// CALC 2

function updateDropdowns(index) {
  console.log(index);
  var selectedIndex = document.getElementById('dropdowns' + index).selectedIndex;
      console.log(selectedIndex);
  for (var i = 1; i <= 6; i++) {
      var dropdown = document.getElementById('dropdowns' + i); // Corrected line
      dropdown.selectedIndex = selectedIndex;
      // console.log(selectedIndex);
  }
}



//  CALC 3

function transpose3() {
  const sphereInput = document.getElementById('sphere3').value;
  const cylinderInput = document.getElementById('cyl3').value.trim();
  const axisInput = parseFloat(document.getElementById('axis3').value);

  // Check if any input is missing or invalid
          if (sphereInput === '' || cylinderInput === '' || isNaN(axisInput) || axisInput < 1 || axisInput > 180) {
              alert("Please provide valid numeric values for Sphere, Cylinder, and Axis (between 1 and 180).");
              return;
          }

          // Check if the inputs are within the range of -30 to +30
          if (parseFloat(sphereInput) < -30 || parseFloat(sphereInput) > 30 || parseFloat(cylinderInput) < -30 || parseFloat(cylinderInput) > 30) {
              alert("Please provide values for Sphere and Cylinder within the range of -30 to +30 Diopters.");
              return;
          }
  if (sphereInput === '' || cylinderInput === '' || isNaN(axisInput) || axisInput < 1 || axisInput > 180) {
      alert("Please provide valid numeric values for Sphere, Cylinder, and Axis (between 1 and 180).");
      return;
  }
  console.log(sphereInput);
  // Check if the sphere input contains a sign
  if (!sphereInput.startsWith('+') && !sphereInput.startsWith('-')) {
      alert("Please include a positive (+) or negative (-) sign for the Sphere input.");
      return;
  }

  // Check if the cylinder input contains a sign
  if (!cylinderInput.startsWith('+') && !cylinderInput.startsWith('-')) {
      alert("Please include a positive (+) or negative (-) sign for the Cylinder input.");
      return;
  }

  const sphere = parseFloat(sphereInput);
  const cylinder = parseFloat(cylinderInput);

  // Simple transposition
  const transposedSphere = (sphere + cylinder).toFixed(2); // Round to two decimals
  const transposedCylinder = (-cylinder).toFixed(2); // Round to two decimals
  const transposedAxis = (axisInput <= 90) ? (axisInput + 90) : (axisInput - 90);

  // Round the transposed axis to the nearest integer
  const roundedAxis = Math.round(transposedAxis);

  // Display transposed prescription with "+" sign
  const transposedPrescription = (transposedSphere >= 0 ? '+' : '') + transposedSphere + ' DS / ' + (transposedCylinder >= 0 ? '+' : '') + transposedCylinder + ' DC  x ' + roundedAxis;
  document.getElementById('transposedResult3').innerText = 'Transposed Prescription: ' + transposedPrescription;

  // Determine type of astigmatism
  let astigmatismType = '';
  if (sphere > 0 && cylinder > 0) {
      astigmatismType = 'Compound Hypermetropic Astigmatism';
  } else if (sphere < 0 && cylinder < 0) {
      astigmatismType = 'Compound Myopic Astigmatism';
  } else if (sphere > 0 && cylinder < 0) {
      if (sphere === Math.abs(cylinder)) {
          astigmatismType = 'Simple Hypermetropic Astigmatism';
      } else if (sphere > Math.abs(cylinder)) {
          astigmatismType = 'Compound Hypermetropic Astigmatism';
      } else {
          astigmatismType = 'Simple Myopic Astigmatism';
      }
  } else if (sphere < 0 && cylinder > 0) {
      if (Math.abs(sphere) === cylinder) {
          astigmatismType = 'Simple Myopic Astigmatism';
      } else if (Math.abs(sphere) > cylinder) {
          astigmatismType = 'Compound Myopic Astigmatism';
      } else {
          astigmatismType = 'Simple Myopic Astigmatism';
      }
  } else if (sphere === 0 && cylinder > 0) {
      astigmatismType = 'Simple Hypermetropic Astigmatism';
  } else if (sphere === 0 && cylinder < 0) {
      astigmatismType = 'Simple Myopic Astigmatism';
  } else if (sphere === 0 && cylinder === 0) {
      astigmatismType = 'No Astigmatism';
  }

  document.getElementById('astigmatismType').innerText = 'Type of Astigmatism: ' + astigmatismType;
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

function displayTooltip3(event, message) {
  const tooltip = document.getElementById('tooltip3');
  tooltip.innerHTML = message;
  tooltip.style.display = 'block';
  tooltip.style.top = (event.clientY + 10) + 'px';
  tooltip.style.left = (event.clientX + 10) + 'px';
}

function hideTooltip3() {
  const tooltip = document.getElementById('tooltip3');
  tooltip.style.display = 'none';
}





// CALC 4

function calculate4() {
  var meters = parseFloat(document.getElementById("meters").value);
  var line = document.getElementById("line").value;
  var sizes = {
      '6/6': 8.7,
      '6/9': 13.05,
      '6/12': 17.4,
      '6/18': 26.1,
      '6/24': 34.8,
      '6/36': 52.2,
      '6/60': 87
  };
  var size = sizes[line] / 6 * meters;
  var thickness = size / 5;
  document.getElementById("result4").innerHTML = "Letter height & width for " + line + " (line) at " + meters + " (m): " + size.toFixed(2) +" (mm)<br>" +
                                                 "Thickness (single constituent) "+ line +" (line) at " + meters + " (m): " + thickness.toFixed(2) + " (mm)";
}



// CALC 5

function filterOptions(inputId, dataListId) {
  // Function for filtering options if necessary
}

function validateInput(inputId) {
  const input = document.getElementById(inputId);
  let value = parseFloat(input.value);

  if (input.value.trim() !== '' && (isNaN(value) || value < -30 || value > 30)) {
      alert("Please enter a valid number between -30 and 30.");
      input.focus(); // Put focus back on the input field
  }
}

function calculateSphericalEquivalent() {
  var sphereInput = document.getElementById("sphere5");
  var cylinderInput = document.getElementById("cyl5");
  var sphere = sphereInput.value.trim(); // Get the trimmed input value
  var cylinder = cylinderInput.value.trim(); // Get the trimmed input value
  var sphereValidation = document.getElementById("sphereValidation5");
  var cylinderValidation = document.getElementById("cylinderValidation5");
  var outputDiv = document.getElementById("output5");

  // Check if the input values contain a sign (+ or -)
  if (!(/^[+-]/.test(sphere)) || !(/^[+-]/.test(cylinder))) {
      var errorMessage = "";
      if (!(/^[+-]/.test(sphere))) {
          errorMessage += "Sphere value must include a positive (+) or negative (-) sign.\n";
      }
      if (!(/^[+-]/.test(cylinder))) {
          errorMessage += "Cylinder value must include a positive (+) or negative (-) sign.\n";
      }
      alert(errorMessage);
      return; // Exit the function if signs are missing
  }

  // Parse the input values to floats
  sphere = parseFloat(sphere) || 0;
  cylinder = parseFloat(cylinder) || 0;

  // Validate input values
  if (isNaN(sphere) || sphere === 0 || isNaN(cylinder) || cylinder === 0 || sphere < -30 || sphere > 30 || cylinder < -30 || cylinder > 30) {
      outputDiv.innerHTML = "";
      displayErrorMessage("Please provide valid non-zero values for both Sphere and Cylinder within the range of -30 to +30 to calculate the Spherical Equivalent.");
      return; // Exit the function early if inputs are not valid
  }

  // Calculate the spherical equivalent
  if (Math.abs(cylinder) > Math.abs(sphere) / 4) {
      var sphericalEquivalent = sphere + (cylinder / 2); 
      var formattedResult = sphericalEquivalent >= 0 ? '+' + sphericalEquivalent.toFixed(2) : sphericalEquivalent.toFixed(2);
      outputDiv.innerHTML = "<span style='color:brown;' class='output-span'>Spherical Equivalent (DS): " + formattedResult + " </span>";
      displayErrorMessage("The cylinder is more than one fourth of the sphere (May be beyond the tolerance).");
  } else {
      var sphericalEquivalent = sphere + (cylinder / 2); 
      var formattedResult = sphericalEquivalent >= 0 ? '+' + sphericalEquivalent.toFixed(2) : sphericalEquivalent.toFixed(2);
      outputDiv.innerHTML = "<span style='color:brown;' class='output-span'>Spherical Equivalent (DS): " + formattedResult + "</span>";
  }
}

function displayErrorMessage(message) {

  var errorMessageElement = document.getElementById("error");
  // console.log(errorMessageElement);
  errorMessageElement.innerText = message;
  errorMessageElement.className = "error-message";
  // document.body.appendChild(errorMessageElement);
  setTimeout(function () {
      errorMessageElement.innnerHTML="";
  }, 50000);
}

function displayTooltip(event, message) {
  const tooltip = document.getElementById('tooltip5');
  tooltip.innerHTML = message;
  tooltip.style.display = 'block';
  tooltip.style.top = (event.clientY + 10) + 'px';
  tooltip.style.left = (event.clientX + 10) + 'px';
}

function hideTooltip() {
  const tooltip = document.getElementById('tooltip5');
  tooltip.style.display = 'none';
}


// CALC 6

function convertPrescription() {
  const method = document.querySelector('input[name="method"]:checked').value;
  let output = '';

  if (method === '1') {
      const sphereInput = document.getElementById('sphereInput').value.trim();
      const cylinderInput = document.getElementById('cylinderInput').value.trim();
      const axisInput = document.getElementById('axisInput').value.trim();
      const wdCompensation = document.querySelector('input[name="wdCompensation"]:checked').value;

      const sphere = parseFloat(sphereInput);
      const cylinder = parseFloat(cylinderInput);
      const axis = axisInput === "" ? "(Give Axis)" : parseInt(axisInput);

      const signSphere = sphere >= 0 ? '+' : '-';
      const signCylinder = cylinder >= 0 ? '+' : '-';

      if (wdCompensation === 'Yes') {
          output += `Prescription(Net Retinoscopy): ${signSphere}${Math.abs(sphere).toFixed(2)} DS${!isNaN(cylinder) ? ' /' + signCylinder + Math.abs(cylinder).toFixed(2) + ' DC x ' + axis : ''}<br>`;
      } else {
          const signGross100cm = sphere < 1.00 ? '-' : '+';
          const signGross80cm = sphere < 1.25 ? '-' : '+';
          const signGross67cm = sphere < 1.50 ? '-' : '+';
          const signGross57cm = sphere < 1.75 ? '-' : '+';
          const signGross50cm = sphere < 2.00 ? '-' : '+';
          const signGross44cm = sphere < 2.25 ? '-' : '+';
          const signGross40cm = sphere < 2.50 ? '-' : '+';
          const signGross36cm = sphere < 2.75 ? '-' : '+';
          const signGross33cm = sphere < 3.00 ? '-' : '+';
          const signGross30cm = sphere < 3.25 ? '-' : '+';
          const signGross28cm = sphere < 3.50 ? '-' : '+';
          const signGross26cm = sphere < 3.75 ? '-' : '+';
          const signGross25cm = sphere < 4.00 ? '-' : '+';
          const signGross23cm = sphere < 4.25 ? '-' : '+';
          const signGross22cm = sphere < 4.50 ? '-' : '+';
          const signGross21cm = sphere < 4.75 ? '-' : '+';
          const signGross20cm = sphere < 5.00 ? '-' : '+';
          const signGross19cm = sphere < 5.25 ? '-' : '+';
          const signGross18cm = sphere < 5.50 ? '-' : '+';
          const signGross17cm = sphere < 5.75 ? '-' : '+';
          const signGross16cm = sphere < 6.00 ? '-' : '+';
          const signGross15cm = sphere < 6.25 ? '-' : '+';
          const signGross153cm = sphere < 6.50 ? '-' : '+';
          const signGross14cm = sphere < 6.75 ? '-' : '+';
          const signGross142cm = sphere < 7.00 ? '-' : '+';
          const signGross138cm = sphere < 7.25 ? '-' : '+';
          const signGross132cm = sphere < 7.50 ? '-' : '+';
          const signGross129cm = sphere < 7.75 ? '-' : '+';
          const signGross125cm = sphere < 8.00 ? '-' : '+';
          const signGross121cm = sphere < 8.25 ? '-' : '+';
          const signGross117cm = sphere < 8.50 ? '-' : '+';
          const signGross114cm = sphere < 8.75 ? '-' : '+';
          const signGross111cm = sphere < 9.00 ? '-' : '+';
          const signGross108cm = sphere < 9.25 ? '-' : '+';
          const signGross106cm = sphere < 9.50 ? '-' : '+';
          const signGross102cm = sphere < 9.75 ? '-' : '+';
          const signGross10cm = sphere < 10.00 ? '-' : '+';
          output += `Net prescription for(WD-100cm): ${!isNaN(sphere) ? signGross100cm + Math.abs(sphere - 1.00).toFixed(2) + ' DS' : ''}${!isNaN(cylinder) ? ' /' + signCylinder + Math.abs(cylinder).toFixed(2) + ' DC x ' + axis : ''}<br>`;
          output += `Net prescription for(WD-80cm): ${!isNaN(sphere) ? signGross80cm + Math.abs(sphere - 1.25).toFixed(2) + ' DS' : ''}${!isNaN(cylinder) ? ' /' + signCylinder + Math.abs(cylinder).toFixed(2) + ' DC x ' + axis : ''}<br>`;
          output += `Net prescription for(WD-67cm): ${!isNaN(sphere) ? signGross67cm + Math.abs(sphere - 1.50).toFixed(2) + ' DS' : ''}${!isNaN(cylinder) ? ' /' + signCylinder + Math.abs(cylinder).toFixed(2) + ' DC x ' + axis : ''}<br>`;
          output += `Net prescription for(WD-57cm): ${!isNaN(sphere) ? signGross57cm + Math.abs(sphere - 1.75).toFixed(2) + ' DS' : ''}${!isNaN(cylinder) ? ' /' + signCylinder + Math.abs(cylinder).toFixed(2) + ' DC x ' + axis : ''}<br>`;
          output += `Net prescription for(WD-50cm): ${!isNaN(sphere) ? signGross50cm + Math.abs(sphere - 2.00).toFixed(2) + ' DS' : ''}${!isNaN(cylinder) ? ' /' + signCylinder + Math.abs(cylinder).toFixed(2) + ' DC x ' + axis : ''}<br>`;
          output += `Net prescription for(WD-44.5cm): ${!isNaN(sphere) ? signGross44cm + Math.abs(sphere - 2.25).toFixed(2) + ' DS' : ''}${!isNaN(cylinder) ? ' /' + signCylinder + Math.abs(cylinder).toFixed(2) + ' DC x ' + axis : ''}<br>`;
          output += `Net prescription for(WD-40cm): ${!isNaN(sphere) ? signGross40cm + Math.abs(sphere - 2.50).toFixed(2) + ' DS' : ''}${!isNaN(cylinder) ? ' /' + signCylinder + Math.abs(cylinder).toFixed(2) + ' DC x ' + axis : ''}<br>`;
          output += `Net prescription for(WD-36.6cm): ${!isNaN(sphere) ? signGross36cm + Math.abs(sphere - 2.75).toFixed(2) + ' DS' : ''}${!isNaN(cylinder) ? ' /' + signCylinder + Math.abs(cylinder).toFixed(2) + ' DC x ' + axis :''}<br>`;
          output += `Net prescription for(WD-33.3cm): ${!isNaN(sphere) ? signGross33cm + Math.abs(sphere - 3.00).toFixed(2) + ' DS' : ''}${!isNaN(cylinder) ? ' /' + signCylinder + Math.abs(cylinder).toFixed(2) + ' DC x ' + axis :''}<br>`;
          output += `Net prescription for(WD-30.8cm): ${!isNaN(sphere) ? signGross30cm + Math.abs(sphere - 3.25).toFixed(2) + ' DS' : ''}${!isNaN(cylinder) ? ' /' + signCylinder + Math.abs(cylinder).toFixed(2) + ' DC x ' + axis :''}<br>`;
          output += `Net prescription for(WD-28cm): ${!isNaN(sphere) ? signGross28cm + Math.abs(sphere - 3.50).toFixed(2) + ' DS' : ''}${!isNaN(cylinder) ? ' /' + signCylinder + Math.abs(cylinder).toFixed(2) + ' DC x ' + axis :''}<br>`;
          output += `Net prescription for(WD-26cm): ${!isNaN(sphere) ? signGross36cm + Math.abs(sphere - 3.75).toFixed(2) + ' DS' : ''}${!isNaN(cylinder) ? ' /' + signCylinder + Math.abs(cylinder).toFixed(2) + ' DC x ' + axis :''}<br>`;
          output += `Net prescription for(WD-25cm): ${!isNaN(sphere) ? signGross25cm + Math.abs(sphere - 4.00).toFixed(2) + ' DS' : ''}${!isNaN(cylinder) ? ' /' + signCylinder + Math.abs(cylinder).toFixed(2) + ' DC x ' + axis :''}<br>`;
          output += `Net prescription for(WD-23.5cm): ${!isNaN(sphere) ? signGross23cm + Math.abs(sphere - 4.25).toFixed(2) + ' DS' : ''}${!isNaN(cylinder) ? ' /' + signCylinder + Math.abs(cylinder).toFixed(2) + ' DC x ' + axis : ''}<br>`;
          output += `Net prescription for(WD-22.2cm): ${!isNaN(sphere) ? signGross22cm + Math.abs(sphere - 4.50).toFixed(2) + ' DS' : ''}${!isNaN(cylinder) ? ' /' + signCylinder + Math.abs(cylinder).toFixed(2) + ' DC x ' + axis : ''}<br>`;
          output += `Net prescription for(WD-21.05cm): ${!isNaN(sphere) ? signGross21cm + Math.abs(sphere - 4.75).toFixed(2) + ' DS' : ''}${!isNaN(cylinder) ? ' /' + signCylinder + Math.abs(cylinder).toFixed(2) + ' DC x ' + axis : ''}<br>`;
          output += `Net prescription for(WD-20cm): ${!isNaN(sphere) ? signGross20cm + Math.abs(sphere - 5.00).toFixed(2) + ' DS' : ''}${!isNaN(cylinder) ? ' /' + signCylinder + Math.abs(cylinder).toFixed(2) + ' DC x ' + axis : ''}<br>`;
          output += `Net prescription for(WD-19.05cm): ${!isNaN(sphere) ? signGross19cm + Math.abs(sphere - 5.25).toFixed(2) + ' DS' : ''}${!isNaN(cylinder) ? ' /' + signCylinder + Math.abs(cylinder).toFixed(2) + ' DC x ' + axis : ''}<br>`;
          output += `Net prescription for(WD-18.17cm): ${!isNaN(sphere) ? signGross18cm + Math.abs(sphere - 5.50).toFixed(2) + ' DS' : ''}${!isNaN(cylinder) ? ' /' + signCylinder + Math.abs(cylinder).toFixed(2) + ' DC x ' + axis : ''}<br>`;
          output += `Net prescription for(WD-17cm): ${!isNaN(sphere) ? signGross17cm + Math.abs(sphere - 5.75).toFixed(2) + ' DS' : ''}${!isNaN(cylinder) ? ' /' + signCylinder + Math.abs(cylinder).toFixed(2) + ' DC x ' + axis : ''}<br>`;
          output += `Net prescription for(WD-16.66cm): ${!isNaN(sphere) ? signGross16cm + Math.abs(sphere - 6.00).toFixed(2) + ' DS' : ''}${!isNaN(cylinder) ? ' /' + signCylinder + Math.abs(cylinder).toFixed(2) + ' DC x ' + axis : ''}<br>`;
          output += `Net prescription for(WD-15.99cm): ${!isNaN(sphere) ? signGross15cm + Math.abs(sphere - 6.25).toFixed(2) + ' DS' : ''}${!isNaN(cylinder) ? ' /' + signCylinder + Math.abs(cylinder).toFixed(2) + ' DC x ' + axis : ''}<br>`;
          output += `Net prescription for(WD-15.38cm): ${!isNaN(sphere) ? signGross153cm + Math.abs(sphere - 6.50).toFixed(2) + ' DS' : ''}${!isNaN(cylinder) ? ' /' + signCylinder + Math.abs(cylinder).toFixed(2) + ' DC x ' + axis : ''}<br>`;
          output += `Net prescription for(WD-14.81cm): ${!isNaN(sphere) ? signGross14cm + Math.abs(sphere - 6.75).toFixed(2) + ' DS' : ''}${!isNaN(cylinder) ? ' /' + signCylinder + Math.abs(cylinder).toFixed(2) + ' DC x ' + axis : ''}<br>`;
          output += `Net prescription for(WD-14.28cm): ${!isNaN(sphere) ? signGross142cm + Math.abs(sphere - 7.00).toFixed(2) + ' DS' : ''}${!isNaN(cylinder) ? ' /' + signCylinder + Math.abs(cylinder).toFixed(2) + ' DC x ' + axis : ''}<br>`;
           output += `Net prescription for(WD-13.8cm): ${!isNaN(sphere) ? signGross138cm + Math.abs(sphere - 7.25).toFixed(2) + ' DS' : ''}${!isNaN(cylinder) ? ' /' + signCylinder + Math.abs(cylinder).toFixed(2) + ' DC x ' + axis : ''}<br>`;
          output += `Net prescription for(WD-13.33cm): ${!isNaN(sphere) ? signGross132cm + Math.abs(sphere - 7.50).toFixed(2) + ' DS' : ''}${!isNaN(cylinder) ? ' /' + signCylinder + Math.abs(cylinder).toFixed(2) + ' DC x ' + axis : ''}<br>`;
          output += `Net prescription for(WD-12.9cm): ${!isNaN(sphere) ? signGross129cm + Math.abs(sphere - 7.75).toFixed(2) + ' DS' : ''}${!isNaN(cylinder) ? ' /' + signCylinder + Math.abs(cylinder).toFixed(2) + ' DC x ' + axis : ''}<br>`;
          output += `Net prescription for(WD-12.5cm): ${!isNaN(sphere) ? signGross125cm + Math.abs(sphere - 8.00).toFixed(2) + ' DS' : ''}${!isNaN(cylinder) ? ' /' + signCylinder + Math.abs(cylinder).toFixed(2) + ' DC x ' + axis : ''}<br>`;
          output += `Net prescription for(WD-12.12cm): ${!isNaN(sphere) ? signGross121cm + Math.abs(sphere - 8.25).toFixed(2) + ' DS' : ''}${!isNaN(cylinder) ? ' /' + signCylinder + Math.abs(cylinder).toFixed(2) + ' DC x ' + axis : ''}<br>`;
          output += `Net prescription for(WD-11.76cm): ${!isNaN(sphere) ? signGross117cm + Math.abs(sphere - 8.50).toFixed(2) + ' DS' : ''}${!isNaN(cylinder) ? ' /' + signCylinder + Math.abs(cylinder).toFixed(2) + ' DC x ' + axis : ''}<br>`;
          output += `Net prescription for(WD-11.43cm): ${!isNaN(sphere) ? signGross114cm + Math.abs(sphere - 8.75).toFixed(2) + ' DS' : ''}${!isNaN(cylinder) ? ' /' + signCylinder + Math.abs(cylinder).toFixed(2) + ' DC x ' + axis : ''}<br>`;
          output += `Net prescription for(WD-11.11cm): ${!isNaN(sphere) ? signGross111cm + Math.abs(sphere - 9.00).toFixed(2) + ' DS' : ''}${!isNaN(cylinder) ? ' /' + signCylinder + Math.abs(cylinder).toFixed(2) + ' DC x ' + axis : ''}<br>`;
          output += `Net prescription for(WD-10.81cm): ${!isNaN(sphere) ? signGross108cm + Math.abs(sphere - 9.25).toFixed(2) + ' DS' : ''}${!isNaN(cylinder) ? ' /' + signCylinder + Math.abs(cylinder).toFixed(2) + ' DC x ' + axis : ''}<br>`;
          output += `Net prescription for(WD-10.53cm): ${!isNaN(sphere) ? signGross106cm + Math.abs(sphere - 9.50).toFixed(2) + ' DS' : ''}${!isNaN(cylinder) ? ' /' + signCylinder + Math.abs(cylinder).toFixed(2) + ' DC x ' + axis : ''}<br>`;
          output += `Net prescription for(WD-10.26cm): ${!isNaN(sphere) ? signGross102cm + Math.abs(sphere - 9.75).toFixed(2) + ' DS' : ''}${!isNaN(cylinder) ? ' /' + signCylinder + Math.abs(cylinder).toFixed(2) + ' DC x ' + axis : ''}<br>`;
          output += `Net prescription for(WD-10cm): ${!isNaN(sphere) ? signGross10cm + Math.abs(sphere - 10.00).toFixed(2) + ' DS' : ''}${!isNaN(cylinder) ? ' /' + signCylinder + Math.abs(cylinder).toFixed(2) + ' DC x ' + axis : ''}`;
      }
      
  } else if (method === '2') {
      const sphere1Input = document.getElementById('sphere1Input').value.trim();
      const sphere2Input = document.getElementById('sphere2Input').value.trim();
      const axis2Input = document.getElementById('axis2Input').value.trim();
      const wdCompensation = document.querySelector('input[name="wdCompensation"]:checked').value;

      const sphere1 = parseFloat(sphere1Input);
      const sphere2 = parseFloat(sphere2Input);
      const axis2 = axis2Input === "" ? "(Give Axis)" : parseInt(axis2Input);

      const signSphere1 = sphere1 >= 0 ? '+' : '-';
      const signSphere2 = sphere2 >= 0 ? '+' : '-';

      const signDifference = (sphere2 - sphere1) >= 0 ? '+' : '-';
      const sphereDifference = Math.abs(sphere2 - sphere1).toFixed(2);

      if (wdCompensation === 'Yes') {
          output += `Prescription(Net Retinoscopy): ${signSphere1}${Math.abs(sphere1).toFixed(2)} DS${!isNaN(sphereDifference) ? ' /' + signDifference + sphereDifference + ' DC x ' + axis2 : ''}<br>`;
      } else {
          const signGross100cm = sphere1 < 1.00 ? '-' : '+';
const signGross80cm = sphere1 < 1.25 ? '-' : '+';
const signGross67cm = sphere1 < 1.50 ? '-' : '+';
const signGross57cm = sphere1 < 1.75 ? '-' : '+';
const signGross50cm = sphere1 < 2.00 ? '-' : '+';
const signGross44cm = sphere1 < 2.25 ? '-' : '+';
const signGross40cm = sphere1 < 2.50 ? '-' : '+';
const signGross36cm = sphere1 < 2.75 ? '-' : '+';
const signGross33cm = sphere1 < 3.00 ? '-' : '+';
const signGross30cm = sphere1 < 3.25 ? '-' : '+';
const signGross28cm = sphere1 < 3.50 ? '-' : '+';
const signGross26cm = sphere1 < 3.75 ? '-' : '+';
const signGross25cm = sphere1 < 4.00 ? '-' : '+';
const signGross23cm = sphere1 < 4.25 ? '-' : '+';
const signGross22cm = sphere1 < 4.50 ? '-' : '+';
const signGross21cm = sphere1 < 4.75 ? '-' : '+';
const signGross20cm = sphere1 < 5.00 ? '-' : '+';
const signGross19cm = sphere1 < 5.25 ? '-' : '+';
const signGross18cm = sphere1 < 5.50 ? '-' : '+';
const signGross17cm = sphere1 < 5.75 ? '-' : '+';
const signGross16cm = sphere1 < 6.00 ? '-' : '+';
const signGross15cm = sphere1 < 6.25 ? '-' : '+';
const signGross153cm = sphere1 < 6.50 ? '-' : '+';
const signGross14cm = sphere1 < 6.75 ? '-' : '+';
const signGross142cm = sphere1 < 7.00 ? '-' : '+';
const signGross138cm = sphere1 < 7.25 ? '-' : '+';
const signGross132cm = sphere1 < 7.50 ? '-' : '+';
const signGross129cm = sphere1 < 7.75 ? '-' : '+';
const signGross125cm = sphere1 < 8.00 ? '-' : '+';
const signGross121cm = sphere1 < 8.25 ? '-' : '+';
const signGross117cm = sphere1 < 8.50 ? '-' : '+';
const signGross114cm = sphere1 < 8.75 ? '-' : '+';
const signGross111cm = sphere1 < 9.00 ? '-' : '+';
const signGross108cm = sphere1 < 9.25 ? '-' : '+';
const signGross106cm = sphere1 < 9.50 ? '-' : '+';
const signGross102cm = sphere1 < 9.75 ? '-' : '+';
const signGross10cm = sphere1 < 10.00 ? '-' : '+';

output += `Net prescription for(WD-100cm): ${!isNaN(sphere1) ? signGross100cm + Math.abs(sphere1 - 1.00).toFixed(2) + ' DS' : ''}${!isNaN(sphereDifference) ? ' /' + signDifference + sphereDifference + ' DC x ' + axis2 : ''}<br>`;
output += `Net prescription for(WD-80cm): ${!isNaN(sphere1) ? signGross80cm + Math.abs(sphere1 - 1.25).toFixed(2) + ' DS' : ''}${!isNaN(sphereDifference) ? ' /' + signDifference + sphereDifference + ' DC x ' + axis2 : ''}<br>`;
output += `Net prescription for(WD-67cm): ${!isNaN(sphere1) ? signGross67cm + Math.abs(sphere1 - 1.50).toFixed(2) + ' DS' : ''}${!isNaN(sphereDifference) ? ' /' + signDifference + sphereDifference + ' DC x ' + axis2 : ''}<br>`;
output += `Net prescription for(WD-57cm): ${!isNaN(sphere1) ? signGross57cm + Math.abs(sphere1 - 1.75).toFixed(2) + ' DS' : ''}${!isNaN(sphereDifference) ? ' /' + signDifference + sphereDifference + ' DC x ' + axis2 : ''}<br>`;
output += `Net prescription for(WD-50cm): ${!isNaN(sphere1) ? signGross50cm + Math.abs(sphere1 - 2.00).toFixed(2) + ' DS' : ''}${!isNaN(sphereDifference) ? ' /' + signDifference + sphereDifference + ' DC x ' + axis2 : ''}<br>`;
output += `Net prescription for(WD-44.5cm): ${!isNaN(sphere1) ? signGross44cm + Math.abs(sphere1 - 2.25).toFixed(2) + ' DS' : ''}${!isNaN(sphereDifference) ? ' /' + signDifference + sphereDifference + ' DC x ' + axis2 : ''}<br>`;
output += `Net prescription for(WD-40cm): ${!isNaN(sphere1) ? signGross40cm + Math.abs(sphere1 - 2.50).toFixed(2) + ' DS' : ''}${!isNaN(sphereDifference) ? ' /' + signDifference + sphereDifference + ' DC x ' + axis2 : ''}<br>`;
output += `Net prescription for(WD-36.6cm): ${!isNaN(sphere1) ? signGross36cm + Math.abs(sphere1 - 2.75).toFixed(2) + ' DS' : ''}${!isNaN(sphereDifference) ? ' /' + signDifference + sphereDifference + ' DC x ' + axis2 : ''}<br>`;
output += `Net prescription for(WD-33.3cm): ${!isNaN(sphere1) ? signGross33cm + Math.abs(sphere1 - 3.00).toFixed(2) + ' DS' : ''}${!isNaN(sphereDifference) ? ' /' + signDifference + sphereDifference + ' DC x ' + axis2 : ''}<br>`;
output += `Net prescription for(WD-30.8cm): ${!isNaN(sphere1) ? signGross30cm + Math.abs(sphere1 - 3.25).toFixed(2) + ' DS' : ''}${!isNaN(sphereDifference) ? ' /' + signDifference + sphereDifference + ' DC x ' + axis2 : ''}<br>`;
output += `Net prescription for(WD-28cm): ${!isNaN(sphere1) ? signGross28cm + Math.abs(sphere1 - 3.50).toFixed(2) + ' DS' : ''}${!isNaN(sphereDifference) ? ' /' + signDifference + sphereDifference + ' DC x ' + axis2 : ''}<br>`;
output += `Net prescription for(WD-26cm): ${!isNaN(sphere1) ? signGross36cm + Math.abs(sphere1 - 3.75).toFixed(2) + ' DS' : ''}${!isNaN(sphereDifference) ? ' /' + signDifference + sphereDifference + ' DC x ' + axis2 : ''}<br>`;
output += `Net prescription for(WD-25cm): ${!isNaN(sphere1) ? signGross25cm + Math.abs(sphere1 - 4.00).toFixed(2) + ' DS' : ''}${!isNaN(sphereDifference) ? ' /' + signDifference + sphereDifference + ' DC x ' + axis2 : ''}<br>`;
output += `Net prescription for(WD-23.5cm): ${!isNaN(sphere1) ? signGross23cm + Math.abs(sphere1 - 4.25).toFixed(2) + ' DS' : ''}${!isNaN(sphereDifference) ? ' /' + signDifference + sphereDifference + ' DC x ' + axis2 : ''}<br>`;
output += `Net prescription for(WD-22.2cm): ${!isNaN(sphere1) ? signGross22cm + Math.abs(sphere1 - 4.50).toFixed(2) + ' DS' : ''}${!isNaN(sphereDifference) ? ' /' + signDifference + sphereDifference + ' DC x ' + axis2 : ''}<br>`;
output += `Net prescription for(WD-21.05cm): ${!isNaN(sphere1) ? signGross21cm + Math.abs(sphere1 - 4.75).toFixed(2) + ' DS' : ''}${!isNaN(sphereDifference) ? ' /' + signDifference + sphereDifference + ' DC x ' + axis2 : ''}<br>`;
output += `Net prescription for(WD-20cm): ${!isNaN(sphere1) ? signGross20cm + Math.abs(sphere1 - 5.00).toFixed(2) + ' DS' : ''}${!isNaN(sphereDifference) ? ' /' + signDifference + sphereDifference + ' DC x ' + axis2 : ''}<br>`;
output += `Net prescription for(WD-19.05cm): ${!isNaN(sphere1) ? signGross19cm + Math.abs(sphere1 - 5.25).toFixed(2) + ' DS' : ''}${!isNaN(sphereDifference) ? ' /' + signDifference + sphereDifference + ' DC x ' + axis2 : ''}<br>`;
output += `Net prescription for(WD-18.17cm): ${!isNaN(sphere1) ? signGross18cm + Math.abs(sphere1 - 5.50).toFixed(2) + ' DS' : ''}${!isNaN(sphereDifference) ? ' /' + signDifference + sphereDifference + ' DC x ' + axis2 : ''}<br>`;
output += `Net prescription for(WD-17cm): ${!isNaN(sphere1) ? signGross17cm + Math.abs(sphere1 - 5.75).toFixed(2) + ' DS' : ''}${!isNaN(sphereDifference) ? ' /' + signDifference + sphereDifference + ' DC x ' + axis2 : ''}<br>`;
output += `Net prescription for(WD-16.66cm): ${!isNaN(sphere1) ? signGross16cm + Math.abs(sphere1 - 6.00).toFixed(2) + ' DS' : ''}${!isNaN(sphereDifference) ? ' /' + signDifference + sphereDifference + ' DC x ' + axis2 : ''}<br>`;
output += `Net prescription for(WD-15.99cm): ${!isNaN(sphere1) ? signGross15cm + Math.abs(sphere1 - 6.25).toFixed(2) + ' DS' : ''}${!isNaN(sphereDifference) ? ' /' + signDifference + sphereDifference + ' DC x ' + axis2 : ''}<br>`;
output += `Net prescription for(WD-15.38cm): ${!isNaN(sphere1) ? signGross153cm + Math.abs(sphere1 - 6.50).toFixed(2) + ' DS' : ''}${!isNaN(sphereDifference) ? ' /' + signDifference + sphereDifference + ' DC x ' + axis2 : ''}<br>`;
output += `Net prescription for(WD-14.81cm): ${!isNaN(sphere1) ? signGross14cm + Math.abs(sphere1 - 6.75).toFixed(2) + ' DS' : ''}${!isNaN(sphereDifference) ? ' /' + signDifference + sphereDifference + ' DC x ' + axis2 : ''}<br>`;
output += `Net prescription for(WD-14.28cm): ${!isNaN(sphere1) ? signGross142cm + Math.abs(sphere1 - 7.00).toFixed(2) + ' DS' : ''}${!isNaN(sphereDifference) ? ' /' + signDifference + sphereDifference + ' DC x ' + axis2 : ''}<br>`;
output += `Net prescription for(WD-13.8cm): ${!isNaN(sphere1) ? signGross138cm + Math.abs(sphere1 - 7.25).toFixed(2) + ' DS' : ''}${!isNaN(sphereDifference) ? ' /' + signDifference + sphereDifference + ' DC x ' + axis2 : ''}<br>`;
output += `Net prescription for(WD-13.33cm): ${!isNaN(sphere1) ? signGross132cm + Math.abs(sphere1 - 7.50).toFixed(2) + ' DS' : ''}${!isNaN(sphereDifference) ? ' /' + signDifference + sphereDifference + ' DC x ' + axis2 : ''}<br>`;
output += `Net prescription for(WD-12.9cm): ${!isNaN(sphere1) ? signGross129cm + Math.abs(sphere1 - 7.75).toFixed(2) + ' DS' : ''}${!isNaN(sphereDifference) ? ' /' + signDifference + sphereDifference + ' DC x ' + axis2 : ''}<br>`;
output += `Net prescription for(WD-12.5cm): ${!isNaN(sphere1) ? signGross125cm + Math.abs(sphere1 - 8.00).toFixed(2) + ' DS' : ''}${!isNaN(sphereDifference) ? ' /' + signDifference + sphereDifference + ' DC x ' + axis2 : ''}<br>`;
output += `Net prescription for(WD-12.12cm): ${!isNaN(sphere1) ? signGross121cm + Math.abs(sphere1 - 8.25).toFixed(2) + ' DS' : ''}${!isNaN(sphereDifference) ? ' /' + signDifference + sphereDifference + ' DC x ' + axis2 : ''}<br>`;
output += `Net prescription for(WD-11.76cm): ${!isNaN(sphere1) ? signGross117cm + Math.abs(sphere1 - 8.50).toFixed(2) + ' DS' : ''}${!isNaN(sphereDifference) ? ' /' + signDifference + sphereDifference + ' DC x ' + axis2 : ''}<br>`;
output += `Net prescription for(WD-11.43cm): ${!isNaN(sphere1) ? signGross114cm + Math.abs(sphere1 - 8.75).toFixed(2) + ' DS' : ''}${!isNaN(sphereDifference) ? ' /' + signDifference + sphereDifference + ' DC x ' + axis2 : ''}<br>`;
output += `Net prescription for(WD-11.11cm): ${!isNaN(sphere1) ? signGross111cm + Math.abs(sphere1 - 9.00).toFixed(2) + ' DS' : ''}${!isNaN(sphereDifference) ? ' /' + signDifference + sphereDifference + ' DC x ' + axis2 : ''}<br>`;
output += `Net prescription for(WD-10.81cm): ${!isNaN(sphere1) ? signGross108cm + Math.abs(sphere1 - 9.25).toFixed(2) + ' DS' : ''}${!isNaN(sphereDifference) ? ' /' + signDifference + sphereDifference + ' DC x ' + axis2 : ''}<br>`;
output += `Net prescription for(WD-10.53cm): ${!isNaN(sphere1) ? signGross106cm + Math.abs(sphere1 - 9.50).toFixed(2) + ' DS' : ''}${!isNaN(sphereDifference) ? ' /' + signDifference + sphereDifference + ' DC x ' + axis2 : ''}<br>`;
output += `Net prescription for(WD-10.26cm): ${!isNaN(sphere1) ? signGross102cm + Math.abs(sphere1 - 9.75).toFixed(2) + ' DS' : ''}${!isNaN(sphereDifference) ? ' /' + signDifference + sphereDifference + ' DC x ' + axis2 : ''}<br>`;
output += `Net prescription for(WD-10cm): ${!isNaN(sphere1) ? signGross10cm + Math.abs(sphere1 - 10.00).toFixed(2) + ' DS' : ''}${!isNaN(sphereDifference) ? ' /' + signDifference + sphereDifference + ' DC x ' + axis2 : ''}`;

      }
  } else if (method === '3') {
      const cylinder1Input = document.getElementById('cylinder1Input').value.trim();
      const cylinder2Input = document.getElementById('cylinder2Input').value.trim();
      const axis3Input = document.getElementById('axis3Input').value.trim();
      const wdCompensation = document.querySelector('input[name="wdCompensation"]:checked').value;

      const cylinder1 = parseFloat(cylinder1Input);
      const cylinder2 = parseFloat(cylinder2Input);
      const axis3 = axis3Input === "" ? "(Give Axis)" : parseInt(axis3Input);

      const signCylinder1 = cylinder1 >= 0 ? '+' : '-';
      const signCylinder2 = cylinder2 >= 0 ? '+' : '-';

      const signDifference = (cylinder2 - cylinder1) >= 0 ? '+' : '-';
      const cylinderDifference = Math.abs(cylinder2 - cylinder1).toFixed(2);

      if (wdCompensation === 'Yes') {
          output += `Prescription(Net Retinoscopy): ${signCylinder1}${Math.abs(cylinder1).toFixed(2)} DS${!isNaN(cylinderDifference) ? ' /' + signDifference + cylinderDifference + ' DC x ' + axis3 : ''}<br>`;
      } else {
          const signGross100cm = cylinder1 < 1.00 ? '-' : '+';
const signGross80cm = cylinder1 < 1.25 ? '-' : '+';
const signGross67cm = cylinder1 < 1.50 ? '-' : '+';
const signGross57cm = cylinder1 < 1.75 ? '-' : '+';
const signGross50cm = cylinder1 < 2.00 ? '-' : '+';
const signGross44cm = cylinder1 < 2.25 ? '-' : '+';
const signGross40cm = cylinder1 < 2.50 ? '-' : '+';
const signGross36cm = cylinder1 < 2.75 ? '-' : '+';
const signGross33cm = cylinder1 < 3.00 ? '-' : '+';
const signGross30cm = cylinder1 < 3.25 ? '-' : '+';
const signGross28cm = cylinder1 < 3.50 ? '-' : '+';
const signGross26cm = cylinder1 < 3.75 ? '-' : '+';
const signGross25cm = cylinder1 < 4.00 ? '-' : '+';
const signGross23cm = cylinder1 < 4.25 ? '-' : '+';
const signGross22cm = cylinder1 < 4.50 ? '-' : '+';
const signGross21cm = cylinder1 < 4.75 ? '-' : '+';
const signGross20cm = cylinder1 < 5.00 ? '-' : '+';
const signGross19cm = cylinder1 < 5.25 ? '-' : '+';
const signGross18cm = cylinder1 < 5.50 ? '-' : '+';
const signGross17cm = cylinder1 < 5.75 ? '-' : '+';
const signGross16cm = cylinder1 < 6.00 ? '-' : '+';
const signGross15cm = cylinder1 < 6.25 ? '-' : '+';
const signGross153cm = cylinder1 < 6.50 ? '-' : '+';
const signGross14cm = cylinder1 < 6.75 ? '-' : '+';
const signGross142cm = cylinder1 < 7.00 ? '-' : '+';
const signGross138cm = cylinder1 < 7.25 ? '-' : '+';
const signGross132cm = cylinder1 < 7.50 ? '-' : '+';
const signGross129cm = cylinder1 < 7.75 ? '-' : '+';
const signGross125cm = cylinder1 < 8.00 ? '-' : '+';
const signGross121cm = cylinder1 < 8.25 ? '-' : '+';
const signGross117cm = cylinder1 < 8.50 ? '-' : '+';
const signGross114cm = cylinder1 < 8.75 ? '-' : '+';
const signGross111cm = cylinder1 < 9.00 ? '-' : '+';
const signGross108cm = cylinder1 < 9.25 ? '-' : '+';
const signGross106cm = cylinder1 < 9.50 ? '-' : '+';
const signGross102cm = cylinder1 < 9.75 ? '-' : '+';
const signGross10cm = cylinder1 < 10.00 ? '-' : '+'; 
          output += `Net prescription for(WD-100cm): ${!isNaN(cylinder1) ? signGross100cm + Math.abs(cylinder1 - 1.00).toFixed(2) + ' DS' : ''}${!isNaN(cylinderDifference) ? ' /' + signDifference + cylinderDifference + ' DC x ' + axis3 : ''}<br>`;
output += `Net prescription for(WD-80cm): ${!isNaN(cylinder1) ? signGross80cm + Math.abs(cylinder1 - 1.25).toFixed(2) + ' DS' : ''}${!isNaN(cylinderDifference) ? ' /' + signDifference + cylinderDifference + ' DC x ' + axis3 : ''}<br>`;
output += `Net prescription for(WD-67cm): ${!isNaN(cylinder1) ? signGross67cm + Math.abs(cylinder1 - 1.50).toFixed(2) + ' DS' : ''}${!isNaN(cylinderDifference) ? ' /' + signDifference + cylinderDifference + ' DC x ' + axis3 : ''}<br>`;
output += `Net prescription for(WD-57cm): ${!isNaN(cylinder1) ? signGross57cm + Math.abs(cylinder1 - 1.75).toFixed(2) + ' DS' : ''}${!isNaN(cylinderDifference) ? ' /' + signDifference + cylinderDifference + ' DC x ' + axis3 : ''}<br>`;
output += `Net prescription for(WD-50cm): ${!isNaN(cylinder1) ? signGross50cm + Math.abs(cylinder1 - 2.00).toFixed(2) + ' DS' : ''}${!isNaN(cylinderDifference) ? ' /' + signDifference + cylinderDifference + ' DC x ' + axis3 : ''}<br>`;
output += `Net prescription for(WD-44.5cm): ${!isNaN(cylinder1) ? signGross44cm + Math.abs(cylinder1 - 2.25).toFixed(2) + ' DS' : ''}${!isNaN(cylinderDifference) ? ' /' + signDifference + cylinderDifference + ' DC x ' + axis3 : ''}<br>`;
output += `Net prescription for(WD-40cm): ${!isNaN(cylinder1) ? signGross40cm + Math.abs(cylinder1 - 2.50).toFixed(2) + ' DS' : ''}${!isNaN(cylinderDifference) ? ' /' + signDifference + cylinderDifference + ' DC x ' + axis3 : ''}<br>`;
output += `Net prescription for(WD-36.6cm): ${!isNaN(cylinder1) ? signGross36cm + Math.abs(cylinder1 - 2.75).toFixed(2) + ' DS' : ''}${!isNaN(cylinderDifference) ? ' /' + signDifference + cylinderDifference + ' DC x ' + axis3 : ''}<br>`;
output += `Net prescription for(WD-33.3cm): ${!isNaN(cylinder1) ? signGross33cm + Math.abs(cylinder1 - 3.00).toFixed(2) + ' DS' : ''}${!isNaN(cylinderDifference) ? ' /' + signDifference + cylinderDifference + ' DC x ' + axis3 : ''}<br>`;
output += `Net prescription for(WD-30.8cm): ${!isNaN(cylinder1) ? signGross30cm + Math.abs(cylinder1 - 3.25).toFixed(2) + ' DS' : ''}${!isNaN(cylinderDifference) ? ' /' + signDifference + cylinderDifference + ' DC x ' + axis3 : ''}<br>`;
output += `Net prescription for(WD-28cm): ${!isNaN(cylinder1) ? signGross28cm + Math.abs(cylinder1 - 3.50).toFixed(2) + ' DS' : ''}${!isNaN(cylinderDifference) ? ' /' + signDifference + cylinderDifference + ' DC x ' + axis3 : ''}<br>`;
output += `Net prescription for(WD-26cm): ${!isNaN(cylinder1) ? signGross36cm + Math.abs(cylinder1 - 3.75).toFixed(2) + ' DS' : ''}${!isNaN(cylinderDifference) ? ' /' + signDifference + cylinderDifference + ' DC x ' + axis3 : ''}<br>`;
output += `Net prescription for(WD-25cm): ${!isNaN(cylinder1) ? signGross25cm + Math.abs(cylinder1 - 4.00).toFixed(2) + ' DS' : ''}${!isNaN(cylinderDifference) ? ' /' + signDifference + cylinderDifference + ' DC x ' + axis3 : ''}<br>`;
output += `Net prescription for(WD-23.5cm): ${!isNaN(cylinder1) ? signGross23cm + Math.abs(cylinder1 - 4.25).toFixed(2) + ' DS' : ''}${!isNaN(cylinderDifference) ? ' /' + signDifference + cylinderDifference + ' DC x ' + axis3 : ''}<br>`;
output += `Net prescription for(WD-22.2cm): ${!isNaN(cylinder1) ? signGross22cm + Math.abs(cylinder1 - 4.50).toFixed(2) + ' DS' : ''}${!isNaN(cylinderDifference) ? ' /' + signDifference + cylinderDifference + ' DC x ' + axis3 : ''}<br>`;
output += `Net prescription for(WD-21.05cm): ${!isNaN(cylinder1) ? signGross21cm + Math.abs(cylinder1 - 4.75).toFixed(2) + ' DS' : ''}${!isNaN(cylinderDifference) ? ' /' + signDifference + cylinderDifference + ' DC x ' + axis3 : ''}<br>`;
output += `Net prescription for(WD-20cm): ${!isNaN(cylinder1) ? signGross20cm + Math.abs(cylinder1 - 5.00).toFixed(2) + ' DS' : ''}${!isNaN(cylinderDifference) ? ' /' + signDifference + cylinderDifference + ' DC x ' + axis3 : ''}<br>`;
output += `Net prescription for(WD-19.05cm): ${!isNaN(cylinder1) ? signGross19cm + Math.abs(cylinder1 - 5.25).toFixed(2) + ' DS' : ''}${!isNaN(cylinderDifference) ? ' /' + signDifference + cylinderDifference + ' DC x ' + axis3 : ''}<br>`;
output += `Net prescription for(WD-18.17cm): ${!isNaN(cylinder1) ? signGross18cm + Math.abs(cylinder1 - 5.50).toFixed(2) + ' DS' : ''}${!isNaN(cylinderDifference) ? ' /' + signDifference + cylinderDifference + ' DC x ' + axis3 : ''}<br>`;
output += `Net prescription for(WD-17cm): ${!isNaN(cylinder1) ? signGross17cm + Math.abs(cylinder1 - 5.75).toFixed(2) + ' DS' : ''}${!isNaN(cylinderDifference) ? ' /' + signDifference + cylinderDifference + ' DC x ' + axis3 : ''}<br>`;
output += `Net prescription for(WD-16.66cm): ${!isNaN(cylinder1) ? signGross16cm + Math.abs(cylinder1 - 6.00).toFixed(2) + ' DS' : ''}${!isNaN(cylinderDifference) ? ' /' + signDifference + cylinderDifference + ' DC x ' + axis3 : ''}<br>`;
output += `Net prescription for(WD-15.99cm): ${!isNaN(cylinder1) ? signGross15cm + Math.abs(cylinder1 - 6.25).toFixed(2) + ' DS' : ''}${!isNaN(cylinderDifference) ? ' /' + signDifference + cylinderDifference + ' DC x ' + axis3 : ''}<br>`;
output += `Net prescription for(WD-15.38cm): ${!isNaN(cylinder1) ? signGross153cm + Math.abs(cylinder1 - 6.50).toFixed(2) + ' DS' : ''}${!isNaN(cylinderDifference) ? ' /' + signDifference + cylinderDifference + ' DC x ' + axis3 : ''}<br>`;
output += `Net prescription for(WD-14.81cm): ${!isNaN(cylinder1) ? signGross14cm + Math.abs(cylinder1 - 6.75).toFixed(2) + ' DS' : ''}${!isNaN(cylinderDifference) ? ' /' + signDifference + cylinderDifference + ' DC x ' + axis3 : ''}<br>`;
output += `Net prescription for(WD-14.28cm): ${!isNaN(cylinder1) ? signGross142cm + Math.abs(cylinder1 - 7.00).toFixed(2) + ' DS' : ''}${!isNaN(cylinderDifference) ? ' /' + signDifference + cylinderDifference + ' DC x ' + axis3 : ''}<br>`;
output += `Net prescription for(WD-13.8cm): ${!isNaN(cylinder1) ? signGross138cm + Math.abs(cylinder1 - 7.25).toFixed(2) + ' DS' : ''}${!isNaN(cylinderDifference) ? ' /' + signDifference + cylinderDifference + ' DC x ' + axis3 : ''}<br>`;
output += `Net prescription for(WD-13.33cm): ${!isNaN(cylinder1) ? signGross132cm + Math.abs(cylinder1 - 7.50).toFixed(2) + ' DS' : ''}${!isNaN(cylinderDifference) ? ' /' + signDifference + cylinderDifference + ' DC x ' + axis3 : ''}<br>`;
output += `Net prescription for(WD-12.9cm): ${!isNaN(cylinder1) ? signGross129cm + Math.abs(cylinder1 - 7.75).toFixed(2) + ' DS' : ''}${!isNaN(cylinderDifference) ? ' /' + signDifference + cylinderDifference + ' DC x ' + axis3 : ''}<br>`;
output += `Net prescription for(WD-12.5cm): ${!isNaN(cylinder1) ? signGross125cm + Math.abs(cylinder1 - 8.00).toFixed(2) + ' DS' : ''}${!isNaN(cylinderDifference) ? ' /' + signDifference + cylinderDifference + ' DC x ' + axis3 : ''}<br>`;
output += `Net prescription for(WD-12.12cm): ${!isNaN(cylinder1) ? signGross121cm + Math.abs(cylinder1 - 8.25).toFixed(2) + ' DS' : ''}${!isNaN(cylinderDifference) ? ' /' + signDifference + cylinderDifference + ' DC x ' + axis3 : ''}<br>`;
output += `Net prescription for(WD-11.76cm): ${!isNaN(cylinder1) ? signGross117cm + Math.abs(cylinder1 - 8.50).toFixed(2) + ' DS' : ''}${!isNaN(cylinderDifference) ? ' /' + signDifference + cylinderDifference + ' DC x ' + axis3 : ''}<br>`;
output += `Net prescription for(WD-11.43cm): ${!isNaN(cylinder1) ? signGross114cm + Math.abs(cylinder1 - 8.75).toFixed(2) + ' DS' : ''}${!isNaN(cylinderDifference) ? ' /' + signDifference + cylinderDifference + ' DC x ' + axis3 : ''}<br>`;
output += `Net prescription for(WD-11.11cm): ${!isNaN(cylinder1) ? signGross111cm + Math.abs(cylinder1 - 9.00).toFixed(2) + ' DS' : ''}${!isNaN(cylinderDifference) ? ' /' + signDifference + cylinderDifference + ' DC x ' + axis3 : ''}<br>`;
output += `Net prescription for(WD-10.81cm): ${!isNaN(cylinder1) ? signGross108cm + Math.abs(cylinder1 - 9.25).toFixed(2) + ' DS' : ''}${!isNaN(cylinderDifference) ? ' /' + signDifference + cylinderDifference + ' DC x ' + axis3 : ''}<br>`;
output += `Net prescription for(WD-10.53cm): ${!isNaN(cylinder1) ? signGross106cm + Math.abs(cylinder1 - 9.50).toFixed(2) + ' DS' : ''}${!isNaN(cylinderDifference) ? ' /' + signDifference + cylinderDifference + ' DC x ' + axis3 : ''}<br>`;
output += `Net prescription for(WD-10.26cm): ${!isNaN(cylinder1) ? signGross102cm + Math.abs(cylinder1 - 9.75).toFixed(2) + ' DS' : ''}${!isNaN(cylinderDifference) ? ' /' + signDifference + cylinderDifference + ' DC x ' + axis3 : ''}<br>`;
output += `Net prescription for(WD-10cm): ${!isNaN(cylinder1) ? signGross10cm + Math.abs(cylinder1 - 10.00).toFixed(2) + ' DS' : ''}${!isNaN(cylinderDifference) ? ' /' + signDifference + cylinderDifference + ' DC x ' + axis3 : ''}`;

      }
  }

  document.getElementById('output6').innerHTML = output;
}

function showInputFields(method) {
  const inputFields = document.getElementById('inputFields');
  inputFields.innerHTML = '';

  if (method === '1') {
      inputFields.innerHTML = `
          <div class="input-group">
              <label for="sphereInput">Sphere (DS)(IF NO MENTION '0'):</label>
              <input type="text" id="sphereInput" name="sphereInput" placeholder="Range(-30 - +30)DS">
          </div>
          <div class="input-group">
              <label for="cylinderInput">Cylinder (DC):</label>
              <input type="text" id="cylinderInput" name="cylinderInput" placeholder="Range(-30 - +30)DC">
          </div>
          <div class="input-group">
              <label for="axisInput">Cylinder Axis:</label>
              <input type="text" id="axisInput" name="axisInput" placeholder="Range(1 - 180)">
          </div>
      `;
  } else if (method === '2') {
      inputFields.innerHTML = `
          <div class="input-group">
              <label for="sphere1Input">Sphere 1 (DS)(IF NO MENTION '0'):</label>
              <input type="text" id="sphere1Input" name="sphere1Input" placeholder="Range(-30 - +30)DS">
          </div>
          <div class="input-group">
              <label for="sphere2Input">Sphere 2 (DS):</label>
              <input type="text" id="sphere2Input" name="sphere2Input" placeholder="Range(-30 - +30)DS">
          </div>
          <div class="input-group">
              <label for="axis2Input">Strek Axis(Sphere2):</label>
              <input type="text" id="axis2Input" name="axis2Input" placeholder="Range(1 - 180)">
          </div>
      `;
  } else if (method === '3') {
      inputFields.innerHTML = `
          <div class="input-group">
              <label for="cylinder1Input">Cylinder 1(DC)(IF NO MENTION '0'):</label>
              <input type="text" id="cylinder1Input" name="cylinder1Input" placeholder="Range(-30 - +30)DC">
          </div>
          <div class="input-group">
              <label for="cylinder2Input">Cylinder 2(DC):</label>
              <input type="text" id="cylinder2Input" name="cylinder2Input" placeholder="Range(-30 - +30)DC">
          </div>
          <div class="input-group">
              <label for="axis3Input">Axis of (Cylinder 2):</label>
              <input type="text" id="axis3Input" name="axis3Input" placeholder="Range(1 - 180)">
          </div>
      `;
  }
}









// CALC 7

const tableData = [
  ['20 / 630' , '6 / 190', '0.032', '4 / 125' , '+1.5'],
  ['20 / 500' , '6 / 150', '0.04' , '4 / 100' , '+1.4'],
  ['20 / 400' , '6 / 120', '0.05' , '4 / 80'  , '+1.3'],
  ['20 / 320' , '6 / 95' , '0.06' , '4 / 63'  , '+1.2'],
  ['20 / 250' , '6 / 75' , '0.08' , '4 / 50'  , '+1.1'],
  ['20 / 200' , '6 / 60' , '0.1'  , '4 / 40'  , '+1.0'],
  ['20 / 160' , '6 / 48' , '0.125', '4 / 32'  , '+0.9'],
  ['20 / 125' , '6 / 38' , '0.16' , '4 / 25'  , '+0.8'],
  ['20 / 100' , '6 / 30' , '0.2'  , '4 / 20'  , '+0.7'],
  ['20 / 80'  , '6 / 24' , '0.25' , '4 / 16'  , '+0.6'],
  ['20 / 63'  , '6 / 19' , '0.32' , '4 / 12.5', '+0.5'],
  ['20 / 50'  , '6 / 15' , '0.4'  , '4 / 10'  , '+0.4'],
  ['20 / 40'  , '6 / 12' , '0.5'  , '4 / 8'   , '+0.3'],
  ['20 / 32'  , '6 / 9.5', '0.63' , '4 / 6.3' , '+0.2'],
  ['20 / 25'  , '6 / 7.5', '0.8'  , '4 / 5'   , '+0.1'],
  ['20 / 20'  , '6 / 6'  , '1.0'  , '4 / 4'   , '0'],
  ['20 / 16'  , '6 / 4.8', '1.25' , '4 / 3.2' , '-0.1'],
  ['20 / 12.5', '6 / 3.8', '1.6'  , '4 / 2.5' , '-0.2'],
  ['20 / 10'  , '6 / 3'  , '2.0'  , '4 / 2'   , '-0.3'],
];

function populateSixMOptions() {
  const sixMSelect = document.getElementById('sixM');
  sixMSelect.innerHTML = "";

  const sixMIndex = tableData[0].indexOf('6 / 190');
  const values = Array.from(new Set(tableData.map(row => row[sixMIndex])));

  for (const value of values) {
      if (value) {
          sixMSelect.innerHTML += `<option value='${value}'>${value}</option>`;
      }
  }
}

function updateValues7() {
  const sixMValue = document.getElementById('sixM').value;
  const resultBox = document.getElementById('result7');
  resultBox.innerHTML = '';

  if (sixMValue) {
      const sixMIndex = tableData[0].indexOf('6 / 190');
      const matchingRows = tableData.filter(row => row[sixMIndex] === sixMValue);

      if (matchingRows.length > 0) {
          resultBox.innerHTML = '<div><strong>Matching Result:</strong></div>';
          resultBox.innerHTML += `<div>20 meter | 6 meter | Decimal | 4 meter | LogMAR</div>`;

          for (const row of matchingRows) {
              resultBox.innerHTML += `<div>${row.join('|')}</div>`;
          }
      } else {
          resultBox.textContent = 'No matching rows found.';
      }
  }
}

populateSixMOptions();





// SIDENAVE INITIALIZATION

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });


// INITIALIZE AOS

document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
      useClassNames: true,
      initClassName: false,
      animatedClassName: 'animate__animated',
    });
  });


  window.onscroll = function() {myFunction()};

  function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("determinate").style.width = scrolled + "%";
  }
  
  // FLOATING ACTION BUTTON
  
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems);
  });
  
  topbtn = document.getElementById('top-btn')
  
  window.addEventListener('scroll', function() 
  {  
    if (window.scrollY > 300) {
      topbtn.classList.add('show');
    } else {
      topbtn.classList.remove('show');
    }
  });
  
  
  topbtn.addEventListener('click',function(e)
  {
    e.preventDefault();
    document.querySelector('html, body').scrollTo({
      top: 0,
      behavior: 'smooth',
      duration: 300
    });
    
  })

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