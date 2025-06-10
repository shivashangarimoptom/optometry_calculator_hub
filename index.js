  // Materialize init for navbar
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);

    var navLinks = document.querySelectorAll('#mobile-demo li a');
  navLinks.forEach(function(link)
   {
    link.addEventListener('click', function()
    {
      console.log("working");
      var instance = M.Sidenav.getInstance(elems[0]);
      instance.close();
    });
  });

  });

// INITIALIZE AOS

document.addEventListener('DOMContentLoaded', function() {
  AOS.init({
    useClassNames: true,
    initClassName: false,
    animatedClassName: 'animate__animated',
  });
});

// INITIALIZE TABS
document.addEventListener('DOMContentLoaded', function() {
  var tabs = document.querySelectorAll('.tabs');
  M.Tabs.init(tabs);
});



// INITIALIZE CAROUSEL

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var options=
  {
    padding:200,
    indicators:false,
  }
  var instances = M.Carousel.init(elems,options);
  // instances.next()
  autoplay();

  function autoplay()
  {
    instances[0].next()
    setTimeout(autoplay,4500)
  }
  var carouselItems=document.querySelectorAll('.carousel-item');

  carouselItems.forEach((item)=>{
    item.addEventListener('click',(e)=>{
      e.preventDefault();
    })
  })

});


// INITIALIZE COLLAPSIBLE

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems);
});



document.addEventListener('DOMContentLoaded', function() {
  // Initialize the side nav
  var sideNavElem = document.querySelectorAll('.sidenav');
  var sideNavInstances = M.Sidenav.init(sideNavElem);

  // Add event listener to close side nav on link click
  
});

// INITIALIZE MODAL

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);
});

// SCROLL SPY

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.scrollspy');
  var options=
  {
    scrollOffset: 50,
  }
  var instances = M.ScrollSpy.init(elems,options);
});


// SCROLL PROGRESS BAR

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

// USER COUNT
let count=localStorage.getItem('userCount')||20;

function userCount()
{
  console.log(count);
  count++;
  localStorage.setItem('userCount',count);
}



document.addEventListener('DOMContentLoaded',()=>{
  document.getElementById('user').innerText=count;
})

  
// EMAIL JS

function sendemail()
{
  var params={
    fromName:document.getElementById('email').value,
     message:document.getElementById('requirement').value,
     email:document.getElementById('email').value
  }
  console.log("working");
  return emailjs.send("service_7u9spah","template_4hvqwb9",params)
}