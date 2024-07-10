/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

function handleSubmitClick() {
    alert("Response has been sent!");
}

function copyEmail() {
    var email = "ryan.m.tapp@gmail.com"; 
    navigator.clipboard.writeText(email);
    alert(email + " was copied to clipboard");
}

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


  document.addEventListener('DOMContentLoaded', function() {
    var clickableDiv = document.querySelector('.clickable-interstellar');
    clickableDiv.addEventListener('click', function() {
    //   window.location.href = 'index.html';
    });
  });


  function handleSubmitClick() {
    const formData = new FormData(document.getElementById('responseForm'));
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'send_email.php', true);
    xhr.send(formData); // Send the form data
    location.reload();
    alert("Response has been sent!");
}