// CALC 1

function calculateMagnification1() {
  var presentAcuitySelect = document.getElementById("presentAcuity");
  var requiredAcuitySelect = document.getElementById("requiredAcuity");

  var presentAcuity = presentAcuitySelect.value;
  var requiredAcuity = requiredAcuitySelect.value;

  var presentAcuityFraction = presentAcuity.split('/');
  var requiredAcuityFraction = requiredAcuity.split('/');

  var presentNumerator = parseInt(presentAcuityFraction[0]);
  var presentDenominator = parseInt(presentAcuityFraction[1]);

  var requiredNumerator = parseInt(requiredAcuityFraction[0]);
  var requiredDenominator = parseInt(requiredAcuityFraction[1]);

  if (presentDenominator === 0 || requiredDenominator === 0) {
    document.getElementById("output1").innerHTML = "Cannot calculate. Division by zero error.";
  } else {
    var magnification = (requiredNumerator * presentDenominator) / (presentNumerator * requiredDenominator);
    document.getElementById("output1").innerHTML = "Required Magnification: " + magnification.toFixed(2) + "X";
  }
}


// calc 2

function calculateMagnification2() {
  const presentAcuity = document.getElementById("presentAcuity2").value;
  const requiredAcuity = document.getElementById("requiredAcuity2").value;

  const presentValue = parseInt(presentAcuity.substring(1));
  const requiredValue = parseInt(requiredAcuity.substring(1));

  const magnification = (presentValue / requiredValue).toFixed(2);
  document.getElementById("output2").innerHTML = "Magnification: " + magnification + "X";
}

// calc 3

function calculateADD3() {
  var visualAcuity = document.getElementById("visualAcuity3").value;
  var splitAcuity = visualAcuity.split("/");
  var reciprocalVisualAcuity = 1 / (splitAcuity[0] / splitAcuity[1]);
  var roundedReciprocalVisualAcuity = reciprocalVisualAcuity.toFixed(2);
  
  var decimalPart = roundedReciprocalVisualAcuity.split('.')[1];
  var nearestPowerSentence = '';
  
  if(decimalPart !== '00' && decimalPart !== '25' && decimalPart !== '50' && decimalPart !== '75') {
      nearestPowerSentence = ' (Choose nearest power as you require.)';
  }

  var result = "ADD for Initial Trial : +" + (roundedReciprocalVisualAcuity >= 0 ? roundedReciprocalVisualAcuity : "") + "DS" + nearestPowerSentence;
  document.getElementById("result3").textContent = result;

}



















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