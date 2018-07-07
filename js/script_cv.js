
//NOW CV 
$(function() {
        

        //CV DISPLAY
        function cvDisplay() {
          $('.cv-btn').click(function() {
              var windowsize = $(window).width();
              var testnow = $('#pagestyle').hasClass('test-now');
              var navstyle = $('.navbar').css('display');

              // CHECKING WINDOW'S WIDTH

              if (testnow == true && windowsize > 575 && navstyle == 'flex') {

                // ADDS 'CV-ON' TO SELECTED CLASS NAME
                function addCvOn(e) {
                  var className = $(e).attr('class');
                  return className + '-cv-on';
                }

                addCvOn();

                  // ADDS CLASS CV-ON
                $('.main-now').addClass(addCvOn('.main-now'));
                $('.swap-style').addClass(addCvOn('.swap-style'));
                $('.landing-link').addClass(addCvOn('.landing-link'));
                $('.legend').addClass(addCvOn('.legend'));


                // CHANGE MAIN LAYOUT ON CV DISPLAY

                  

                    // DISPLAYS CV WITH STYLE
                  $('.cv').css('display', 'block');
                    setTimeout(function() {
                        $('.cv').css('left', '35%');
                      }, 200); 
                    setTimeout(function() {
                        $('.close-btn').css('opacity', '1');
                      }, 1500);

                    // HIDES NAV & SWAP STYLE
                  $('nav').css('opacity', '0');
                  $('.swap-style').css('opacity', '0');
                    setTimeout(function() {
                        $('nav').css('display', 'none');
                        $('.swap-style').css('display', 'none');;
                      }, 1500);

                   // PORTFOLIO's SITE-THUMBNAILS LAYOUT
                   setTimeout(function() { 
                      $('.site-thumbnail').removeClass('col-lg-4 col-md-6');
                    }, 800);
              }
         });
        }

        cvDisplay();


        //CV CLOSE 

        function cvClose() {

          $(".close-btn").click(function () {

                // DELETES CV-ON  CLASS
              $( "[class*='cv-on']" ).each(function() {

                $(this).removeClass(function (index, classNames) {
                  var current_classes = classNames.split(" "), // change the list into an array
                      classes_to_remove = []; // array of classes which are to be removed

                  $.each(current_classes, function (index, class_name) {
                    // if the classname contains cv-on add it to the classes_to_remove array
                    if (/cv-on.*/.test(class_name)) {
                      classes_to_remove.push(class_name);
                    }
                  });
                  // turn the array back into a string
                  return classes_to_remove.join(" ");
                });
               });

                //HIDES CLOSE BUTTON 
              $('.close-btn').css('opacity', '0');

                // HIDES CV
              $('.cv').css('left', '200%');
                  setTimeout(function() {
                  $('.cv').css('display', 'none');
                }, 500); 

                 //SHOWS NAV
              $('nav').css('display', 'flex');
              $('.swap-style').css('display', 'block');
                setTimeout(function() {
                    $('nav').css('opacity', '1');
                    $('.swap-style').css('opacity', '1');
                }, 500);

               //ORIGINAL PORTFOLIO LAYOUT
              setTimeout(function() { 
                $('.site-thumbnail').addClass('col-lg-4 col-md-6');
              }, 200);

          });
        };

        cvClose();

});
