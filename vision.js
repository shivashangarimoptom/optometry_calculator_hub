// CALC 1

function calculateACARatio() {
    // Get input values
    const ipd = parseFloat(document.getElementById('ipd').value);
    const nfd = parseFloat(document.getElementById('nfd').value);
    const hnInput = document.getElementById('hn').value.trim();
    const hdInput = document.getElementById('hd').value.trim();

    // Check if any input is missing
    if (isNaN(ipd)) {
      alert("Please fill in the Inter Pupillary Distance (mm) field.");
      return; // Stop further execution if the IPD input is missing
    }
    if (isNaN(nfd)) {
      alert("Please fill in the Near Fixation Distance (cm) field.");
      return; // Stop further execution if the NFD input is missing
    }
    if (!hnInput || !hdInput) {
      alert("Please fill in both Heterophoria with sign Eso(+) or Exo(-).");
      return; // Stop further execution if either Heterophoria input or sign is missing
    }

    // Extracting heterophoria values and signs
    const hnSign = hnInput.slice(0, 1); // First character denotes the sign
    const hdSign = hdInput.slice(0, 1);

    const hn = parseFloat(hnInput.slice(1)); // Remove the first character (sign)
    const hd = parseFloat(hdInput.slice(1));

    // Check if signs are provided
    if (hnSign !== '+' && hnSign !== '-' || hdSign !== '+' && hdSign !== '-') {
      alert("Please provide the sign Eso(+) or Exo(-) for Heterophoria inputs.");
      return;
    }

    // Check range for each input
    if (ipd < 40 || ipd > 80) {
      alert("Inter Pupillary Distance should be (40 - 80)mm.");
      return;
    }
    if (nfd < 5 || nfd > 100) {
      alert("Near Fixation Distance should be between (5 - 100)cm.");
      return;
    }
    if (hn < -20 || hn > 20) {
      alert("Heterophoria at Near should be between -20 and +20 prism diopters.");
      return;
    }
    if (hd < -20 || hd > 20) {
      alert("Heterophoria at Distance should be between -20 and +20 prism diopters.");
      return;
    }

    // Perform calculation
    const acaratio = ipd / 10 + ((hnSign === '-' ? -1 : 1) * hn - (hdSign === '-' ? -1 : 1) * hd) * nfd / 100;
    // Display result
    if (acaratio <= 0) {
      document.getElementById('result1').innerText = "Accommodative convergence is zero or negative.";
    } else {
      const acConvergence = acaratio;
      document.getElementById('result1').innerHTML = `AC/A Ratio: ${acaratio.toFixed(1)}:1<br>Accommodative Convergence is ${acConvergence.toFixed(1)} Prism for 1 diopter of accommodation.`;
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
            const tooltip = document.getElementById('tooltip1');
            tooltip.innerHTML = message;
            tooltip.style.display = 'block';
            tooltip.style.top = (event.clientY + 10) + 'px';
            tooltip.style.left = (event.clientX + 10) + 'px';
        }

        function hideTooltip1() {
            const tooltip = document.getElementById('tooltip1');
            tooltip.style.display = 'none';
        }


// CALC2 
function calculateACARatio2() {
    // Get input values
    var deviationWithoutLenses = parseFloat(document.getElementById('deviationWithoutLenses').value);
    var deviationWithLenses = parseFloat(document.getElementById('deviationWithLenses').value);
    var lensPower = parseFloat(document.getElementById('lensPower').value);

    // Check for missing or invalid inputs
    if (isNaN(deviationWithoutLenses)) {
        alert("Please select a valid numeric value for Original Deviation (without lenses).");
        return;
    }

    if (isNaN(deviationWithLenses)) {
        alert("Please select a valid numeric value for Deviation with Lenses.");
        return;
    } 

    // Perform calculation with the formula
    var acARatio = Math.abs((deviationWithoutLenses - deviationWithLenses) / lensPower);

    // Display result in the format "x:1" with two decimal places
    var ratioFormat = acARatio.toFixed(2) + ":1";
    document.getElementById('acARatioResult2').innerHTML = 'AC/A Ratio: ' + ratioFormat;
    document.getElementById('acConvergence2').innerHTML = 'The Accommodative convergence is ' + acARatio.toFixed(2) + ' prism (D) for 1 (D) of accommodation.';
}

// CALC3

function calculatePrism3() {
    var phoria = parseFloat(document.getElementById('phoria').value) || 0;
    var compensatingVergence = parseFloat(document.getElementById('compensatingVergence').value) || 0;

    var prism = (2/3) * phoria - (1/3) * compensatingVergence;

    var outputElement = document.getElementById('output3');
    if (prism <= 0) {
        outputElement.innerText = "No Prism Required";
    } else {
        if (prism % 1 != 0) {
            outputElement.innerHTML = "Output Prism: " + prism.toFixed(2) + " (PD)<br>(Round up or down the prism diopter, based on your requirement.)";
        } else {
            outputElement.innerText = "Output Prism: " + prism + " (PD)";
        }
    }
}




// CALC 4

function calculatePrism4() {
    // Get values of G and L from dropdown menus
    var G = parseFloat(document.getElementById('inputG').value) || 0;
    var L = parseFloat(document.getElementById('inputL').value) || 0;

    // Calculate the result using the Percival criterion formula
    var P = (1/3) * G - (2/3) * L;

    // Display the result with two decimal places
    var outputMessage = document.getElementById('outputMessage4');
    var resultDisplay = document.getElementById('result4');

    if (P <= 0) {
        outputMessage.innerHTML = "Prism Not Required";
    } else {
        outputMessage.innerHTML = "Prism: " + P.toFixed(2) + " (PD) BASE OUT for Eso,<br>" 
                            + P.toFixed(2) + " (PD) BASE IN for Exo.";
    }
    // Clear the result display
    resultDisplay.textContent = '';
}


// CALC 5

function submitTest5() {

    const primaryPosition = document.getElementById("primaryPosition").value;

    const gazeDirection = document.getElementById("gazeDirection").value;

    const headTilt = document.getElementById("headTilt").value;



    const result = determineMuscleResults(primaryPosition, gazeDirection, headTilt);



    document.getElementById("result5").innerHTML = `<p>Affected Muscle: ${result}</p>`;

}

function determineMuscleResults(primaryPosition, gazeDirection, headTilt) {

    if (primaryPosition === 'right' && gazeDirection === 'left' && headTilt === 'left') {

        return 'Left Superior Rectus ';

    } else if (primaryPosition === 'right' && gazeDirection === 'right' && headTilt === 'right') {

        return 'Left Inferior Oblique';

    } else if (primaryPosition === 'right' && gazeDirection === 'left' && headTilt === 'right') {

        return 'Right Superior Oblique';

    } else if (primaryPosition === 'right' && gazeDirection === 'right' && headTilt === 'left') {

        return 'Right Inferior Rectus ';

    } else if (primaryPosition === 'left' && gazeDirection === 'left' && headTilt === 'left') {

        return 'Right Inferior Oblique ';

    } else if (primaryPosition === 'left' && gazeDirection === 'right' && headTilt === 'right') {

        return 'Right Superior Rectus ';

    } else if (primaryPosition === 'left' && gazeDirection === 'left' && headTilt === 'right') {

        return 'Left Inferior Rectus';

    } else if (primaryPosition === 'left' && gazeDirection === 'right' && headTilt === 'left') {

        return 'Left Superior Oblique ';

    } else {

        return 'Muscle results not determined';

    }

}




// CALC 6

function calculate6() {
    var nearPointInput = document.getElementById("NearPointInput");
    var amplitudeInput = document.getElementById("AmplitudeInput");
    var message = document.getElementById("message6");
    console.log("inside");
    var nearPoint = parseFloat(nearPointInput.value);
    var amplitude = parseFloat(amplitudeInput.value);

    if (!isNaN(nearPoint) && nearPoint >= 5 && nearPoint <= 100) {
        var calculatedAmplitude = 100 / nearPoint;
        amplitudeInput.value = calculatedAmplitude.toFixed(2);
        setMessage(isRoundingValid(calculatedAmplitude));
    } else if (!isNaN(amplitude) && amplitude >= 1 && amplitude <= 20) {
        var calculatedNearPoint = 100 / amplitude;
        nearPointInput.value = calculatedNearPoint.toFixed(2);
        setMessage(isRoundingValid(calculatedNearPoint));
    } else {
        message.textContent = "Please enter Near Point of Accommodation (5 - 100)mm or Amplitude of Accommodation (1 - 20)D.";
    }
}

function isRoundingValid(value) {
    var remainder = value % 0.25;
    return remainder === 0 || remainder === 0.25 || remainder === 0.50 || remainder === 0.75;
}

function setMessage(valid) {
    var message = document.getElementById("message6");
    if (!valid) {
        message.textContent = "Round the power as required.";
    } else {
        message.textContent = "";
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

function displayTooltip6(event, message) {
    const tooltip = document.getElementById('tooltip6');
    tooltip.innerHTML = message;
    tooltip.style.display = 'block';
    tooltip.style.top = (event.clientY + 10) + 'px';
    tooltip.style.left = (event.clientX + 10) + 'px';
}

function hideTooltip6() {
    const tooltip = document.getElementById('tooltip6');
    tooltip.style.display = 'none';
}


// CALC 7

function calculateAmplitudes7() {
    var ageInput = document.getElementById('age');
    var age = parseFloat(ageInput.value);

    // Check if age input is empty
    if (ageInput.value.trim() === "") {
        alert("Please provide (type) the age.");
        return;
    }

    // Check if age is zero or negative
    if (age <= 0 || age > 63 || isNaN(age)) {
        alert("Amplitude of accommodation is Zero for the given age.");
        ageInput.value = "";  // Clear the invalid input
        document.getElementById('resultMinimum7').textContent = '';
        document.getElementById('resultMean7').textContent = '';
        document.getElementById('resultMaximum7').textContent = '';
        return;
    }

    calculateAmplitude('minimum', age);
    calculateAmplitude('mean', age);
    calculateAmplitude('maximum', age);
}

function calculateAmplitude(type, age) {
    var resultOutput = document.getElementById(type === 'minimum' ? 'resultMinimum7' : (type === 'mean' ? 'resultMean7' : 'resultMaximum7'));

    var result;
    if (type === 'minimum') {
        result = Math.max(0, 15.0 - 0.25 * age); // Ensure result is not negative
    } else if (type === 'mean') {
        result = Math.max(0, 18.5 - 0.30 * age); // Ensure result is not negative
    } else { // Maximum
        result = Math.max(0, 25.0 - 0.40 * age); // Ensure result is not negative
    }

    // Convert from diopters to centimeters
    var resultInCm = 100 / result;

    if (result === 0) {
        resultOutput.textContent = (type === 'minimum' ? 'Expected Minimum : ' : (type === 'mean' ? 'Expected Average: ' : 'Expected Maximum : ')) + '0 (D) & NPA - 0 (cm)';
    } else {
        resultOutput.textContent = (type === 'minimum' ? 'Expected Minimum : ' : (type === 'mean' ? 'Expected Average: ' : 'Expected Maximum : ')) + result.toFixed(2) + ' (D) & NPA - ' + resultInCm.toFixed(2) + ' (cm)';
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

function displayTooltip7(event, message) {
    const tooltip = document.getElementById('tooltip7');
    tooltip.innerHTML = message;
    tooltip.style.display = 'block';
    tooltip.style.top = (event.clientY + 10) + 'px';
    tooltip.style.left = (event.clientX + 10) + 'px';
}

function hideTooltip7() {
    const tooltip = document.getElementById('tooltip7');
    tooltip.style.display = 'none';
}

// CALC 8

        // Function to display tooltip
        function displayTooltip8(message, event) {
            const tooltip = document.getElementById('tooltip8');
            tooltip.innerHTML = message;
            tooltip.style.display = 'block';
            tooltip.style.left = (event.clientX + 10) + 'px';
            tooltip.style.top = (event.clientY + 10) + 'px';
        }

        // Function to hide tooltip
        function hideTooltip8() {
            const tooltip = document.getElementById('tooltip8');
            tooltip.style.display = 'none';
        }

        function calculate8() {
            const readingDistanceInput = parseFloat(document.getElementById('readingDistance').value).toFixed(2);
            const nearPointInput = parseFloat(document.getElementById('nearPoint').value).toFixed(2);

            // Check for NaN values
            if (isNaN(readingDistanceInput) || isNaN(nearPointInput)) {
                alert("Please enter valid numeric values for Reading Distance and Near Point of Accommodation.");
                clearInvalidInput(isNaN(readingDistanceInput) ? 'readingDistance' : 'nearPoint');
                return;
            }

            // Check for out-of-range inputs
            if (readingDistanceInput < 5 || readingDistanceInput > 100) {
                alert("Reading distance is out of range (5 to 100).");
                clearInvalidInput('readingDistance');
                return;
            }

            const resultHalfAmplitude = calculateNearAddition(0.5);
            document.getElementById('resultHalfAmplitude').innerText = `NEAR ADD: ${resultHalfAmplitude}`;
            document.getElementById('resultHalfAmplitude').style.display = 'block';

            if (!resultHalfAmplitude.includes('DS')) {
                document.getElementById('resultHalfAmplitudeMessage').style.display = 'block';
            } else {
                document.getElementById('resultHalfAmplitudeMessage').style.display = 'none';
            }

            const resultThirdAmplitude = calculateNearAddition(2 / 3);
            document.getElementById('resultThirdAmplitude').innerText = `NEAR ADD: ${resultThirdAmplitude}`;
            document.getElementById('resultThirdAmplitude').style.display = 'block';

            if (!resultThirdAmplitude.includes('DS')) {
                document.getElementById('resultThirdAmplitudeMessage').style.display = 'block';
            } else {
                document.getElementById('resultThirdAmplitudeMessage').style.display = 'none';
            }
        }

        function calculateNearAddition(amplitudeFactor) {
            const readingDistance = parseFloat(document.getElementById('readingDistance').value);
            const nearPoint = parseFloat(document.getElementById('nearPoint').value);

            let nearAddition = (100 / readingDistance) - (amplitudeFactor * (100 / nearPoint));

            // Check if near addition is not required
            if (nearAddition <= 0) {
                const readingDistanceValue = document.getElementById('readingDistance').value;
                const nearPointValue = document.getElementById('nearPoint').value;
                const resultMessage = `Near addition is not required for the given Reading Distance (${readingDistanceValue} cm) and Near Point of Accommodation (${nearPointValue} cm).`;
                return resultMessage;
            }

            return formatNearAddition(nearAddition.toFixed(2));
        }

        function formatNearAddition(nearAddition) {
            if (nearAddition % 1 === 0) {
                return `${nearAddition >= 0 ? '+' : ''}${nearAddition}DS`;
            } else {
                return `${nearAddition >= 0 ? '+' : ''}${nearAddition}D S`;
            }
        }

        function filterOptions(inputId, dataListId) {
            const input = document.getElementById(inputId);
            const dataList = document.getElementById(dataListId);

            const inputValue = input.value.toLowerCase();
            const options = dataList.querySelectorAll('option');

            options.forEach(option => {
                const optionValue = option.value.toLowerCase();
                if (optionValue.includes(inputValue)) {
                    option.style.display = "block";
                } else {
                    option.style.display = "none";
                }
            });
        }

        function clearInvalidInput(inputId) {
            document.getElementById(inputId).value = '';
        }






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

// DROPDOWN INITIALIZATION

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems);
  });