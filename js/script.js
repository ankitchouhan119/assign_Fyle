function showImage(imageId) {
    // Hide all images
    $('.project-img1 img').css('opacity', '0');
    
    // Show the hovered image
    $('#' + imageId).css('opacity', '1');
  }
  
  function showModal() {
    $('.modal').css('display', 'block');
  }
  
  function hideModal() {
    $('.modal').css('display', 'none');
  }
  
  // Close the modal when clicking outside of the modal content
  $(window).on('click', function(event) {
    if ($(event.target).hasClass('modal')) {
      hideModal();
    }
  });
  
  $(document).ready(function () {
    var splide = new Splide('#card-carousel', {
      perPage: 4,
      perMove: 1, // Move one slide at a time
      breakpoints: {
        640: {
          perPage: 1,
        },
        1024: {
          perPage: 2,
        },
        1400: {
          perPage: 3,
        }
      },
      type: 'loop',
      pagination: false,
      arrows: false,
      autoplay: true,
      interval: 3000,
    }).mount();
  
    var dots = $('.carousel-dot');
  
    // Add event listener for when the slide changes
    splide.on('move', function (newIndex) {
      dots.each(function (index, dot) {
        $(dot).removeClass('active');
        // Change the image source back to red dot
        $(dot).attr('src', './img/3@2x.png');
      });
      var currentIndex = newIndex % dots.length;
      $(dots[currentIndex]).addClass('active');
      // Change the image source to black dot
      $(dots[currentIndex]).attr('src', './img/Red-Dot-Transparent.png');
    });
  
    // Initial active dot
    $(dots[0]).addClass('active');
    // Initial active dot image source change
    $(dots[0]).attr('src', './img/Red-Dot-Transparent.png');
  });
  