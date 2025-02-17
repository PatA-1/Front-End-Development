$(document).ready(function() {
  $('.menu-toggle').click(function() {
    console.log('Hamburger Menu Clicked');
    $('.NavMenu').toggleClass('Show');
  });

  $('.PostWrap').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: $('.Next'),
    prevArrow: $('.Previous'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }); 
});
$(document).ready(function() {
  $('#SignUp-Form').on('submit', function(event) {
   event.preventDefault();

  let Email = $('#email').val().trim();
  let ExistingEmails = JSON.parse(localStorage.getItem('SubscribedEmails')) || [];
  //Email validation
  let EmailVal = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!EmailVal.test(Email)) {
      alert('Input a valid email address.');
      return;
  }
  //Message outputted if the email is already in use
  if(ExistingEmails.includes(Email)) {
      alert('This Email has already been subscribed.');
      return;
  }
  //Adds email to LocalStorage
  ExistingEmails.push(Email);
  localStorage.setItem('SubscribedEmails', JSON.stringify(ExistingEmails));
  //Display the success modal
  $('#SignUpModal').modal('show');
  //Clears both input boxes
  $('#name').val('');
  $('#email').val('');
  });
});
