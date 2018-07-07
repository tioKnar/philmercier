

// MANAGE STYLE CHANGING
$(function() {


      // BUTTON BOOTSTRAP STYLE DEPENDING ON BACKGROUND COLOR
    function buttonStyle() {
      var windowsize = $(window).width();
      var testnow = $('#pagestyle').attr('href') == 'css/css/style_now.css';
      var pageName = $('.active').attr('pageName');
      
        if (testnow == true) {
            if (windowsize > 575 && pageName == 'landing' || pageName == 'skills' ) {
                $('.swap-style').children().removeClass().attr('class', 'btn btn-danger');
            }
            else if ((windowsize < 575) || (windowsize < 575 && pageName == 'portfolio' || pageName == 'contact')) {
                $('.swap-style').children().removeClass().attr('class', 'btn btn-light');
            }
            else {
              $('swap-style').children().removeClass();
            }        
        }
    };

    buttonStyle();

    // on window resize
    $(window).resize( function() {
      buttonStyle();
    });



        // NOW NAVBAR + FOOTER STYLE ON WIDTH
    function checkWidth() {
        var windowsize = $(window).width();
        var testnow = $('#pagestyle').hasClass('test-now');
        var navstyle = $('.navbar').css('display');

        if (testnow == true && windowsize < 1200 && navstyle == 'flex') {
            $('.navbar').removeClass('fixed-top');
            $('.swap-style').addClass('swap-style-nav-on');
            $('body').css('overflow', 'visible');
            $('.footer-now').removeClass('fixed-bottom').css('position', 'relative');
            $('.cv-btn').attr('data-toggle', 'modal').attr('data-target', '#cvModal');


        }
        else {
          $('.navbar').addClass('fixed-top');
          $('.swap-style').removeClass('swap-style-nav-on');
          $('body').css('overflow', 'scroll');
          $('.footer-now').addClass('fixed-bottom').css('position', 'fixed');
          $('.cv-btn').attr('data-toggle', '').attr('data-target', '');
        }

    };
    
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);


    // THEN SWAP STYE LAYOUT

    function thenSwapStylePosition() {
        var windowsize = $(window).width();
        var testthen = $('#pagestyle').hasClass('test-then');
        var navstyle = $('.navbar').css('display');

        if (testthen == true && windowsize < 800) {
          $('.footer-now').css('display', 'none');
          $('.swap-click-800').css('display', 'block');
        }
        else {
          $('.footer-now').css('display', 'block');
          $('.swap-click-800').css('display', 'none');

        }
    };
    // Execute on load
    thenSwapStylePosition();
    // Bind event listener
    $(window).resize(thenSwapStylePosition);



    // WHAT HAPPENS WHEN THEN OR NOW IS CLICKED
    function changeSiteStyle() {
      $('.then_button').click(function() {
          $('#pagestyle').attr('href', 'css/css/style_then.css').attr('class', 'test-then');
          $('form').show();
          $('.swap-style').children().removeClass();

          buttonStyle();
      })
      $('.now_button').click(function() {
          $('#pagestyle').attr('href', 'css/css/style_now.css').removeClass().attr('class', 'test-now');
          $('.footer-now').css('display', 'flex');
          $('.swap-click-800').css('display', 'none');  

         buttonStyle();
         checkWidth();

      });
    };

    changeSiteStyle();

      // PAGE SLIDE UP / DOWN
    function nowPageAnimation() {
      $('.menu-link').click(function() {

        var pageName = $('.active').attr('pageName');
        var linkName = $(this).attr('linkName');

        if (linkName !== pageName) {
          $('.active').slideUp().removeClass('active').addClass('inactive');
          $('.'+linkName+'-bg').slideDown().removeClass('inactive').addClass('active');

          buttonStyle();        

        };
      });
    };

    nowPageAnimation();
  

});


//THEN NAVIGATION
$(function() {

     // AJAX PAGE LOADS ON MENU CLICK
    $('.menu_then li').click(function() {

       // MARK LAST CLICKED ELEMENT
         $('.clicked').removeClass('clicked');
         $(this).addClass('clicked');

         var menuData = $(this).attr('pageName');

         // THEN AJAX LOAD
         $(function ajaxLoad() {
            $.ajax({url: 'pages_then/' + menuData + "_then.html",
                    success: function(result){
                            $(".then_ajax").html(result);
                            }
                    });
         });


       // LOADS SAME NOW PAGE AS CURRENT THEN PAGE
       $('.now_button').click(function() {
        var thenPage = $('.clicked').attr('pageName');
        // console.log('NOW : last menu clicked is ' + thenPage)
        var nowPage = $('.active').attr('pageName');
        // console.log('NOW : now page that has active is ' + nowPage)
          if (thenPage != nowPage) {
            $('.active').slideUp().removeClass('active').addClass('inactive');
            $('#now div[pageName=' + thenPage + ']').slideDown().removeClass('inactive').addClass('active');
            };
          });        
    });




    // LOADS SAME THEN PAGE AS CURRENT NOW PAGE
  $('.then_button').click(function() {
  var menuData = $('.active').attr('pageName');
    $(function ajaxLoad() {
      $.ajax({url: 'pages_then/' + menuData + "_then.html",
              success: function(result){
                      $(".then_ajax").html(result);
                      $('.swap-style').children().removeClass();
                      }
              });

    });
  });

});









// THEN POINTER
// $(function() {
    

//       (function emojiCursor() {
        
//         var possibleEmoji = ["*"]
//         var width = $(window).width();
//         var height = screen.height;
//         var cursor = {x: width/1, y: height/1};
//         var particles = [];
        
//         function init() {
//           bindEvents();
//           loop();
//         }
        
//         // Bind events that are needed
//         function bindEvents() {
//           document.getElementById('then').addEventListener('mousemove', onMouseMove);
//           document.getElementById('then').addEventListener('touchmove', onTouchMove);
//           document.getElementById('then').addEventListener('touchstart', onTouchMove);
          
//           window.addEventListener('resize', onWindowResize);
//         }
        
//         function onWindowResize(e) {
//           width = window.innerWidth;
//           height = window.innerHeight;
//         }
        
//         function onTouchMove(e) {
//           if( e.touches.length > 0 ) {
//             for( var i = 0; i < e.touches.length; i++ ) {
//               addParticle( e.touches[i].clientX, e.touches[i].clientY, possibleEmoji);
//             }
//           }
//         }
        
//         function onMouseMove(e) {    
//           cursor.x = e.clientX;
//           cursor.y = e.clientY;
          
//           addParticle( cursor.x, cursor.y, possibleEmoji);
//         }
        
//         function addParticle(x, y, character) {
//           var particle = new Particle();
//           particle.init(x, y, character);
//           particles.push(particle);
//         }
        
//         function updateParticles() {
          
//           // Updated
//           for( var i = 0; i < particles.length; i++ ) {
//             particles[i].update();
//           }
          
//           // Remove dead particles
//           for( var i = particles.length -1; i >= 0; i-- ) {
//             if( particles[i].lifeSpan < 0 ) {
//               particles[i].die();
//               particles.splice(i, 1);
//             }
//           }
          
//         }
        
//         function loop() {
//           requestAnimationFrame(loop);
//           updateParticles();
//         }
        
//         /**
//          * Particles
//          */
        
//         function Particle() {

//           this.lifeSpan = 120; //ms
//           this.initialStyles ={
//             "position": "absolute",
//             "display": "block",
//             "pointerEvents": "none",
//             "z-index": "10000000",
//             "fontSize": "19px",
//             "will-change": "transform"
//           };

//           // Init, and set properties
//           this.init = function(x, y, character) {

//             this.velocity = {
//               x:  (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 2),
//               y: 1
//             };
            
//             this.position = {x: x - 1, y: y - 2};

//             this.element = document.createElement('span');
//             this.element.innerHTML = character;
//             applyProperties(this.element, this.initialStyles);
//             this.update();
            
//             document.body.appendChild(this.element);
//           };
          
//           this.update = function() {
//             this.position.x += this.velocity.x;
//             this.position.y += this.velocity.y;
//             this.lifeSpan--;
            
//             this.element.style.transform = "translate3d(" + this.position.x + "px," + this.position.y + "px,0) scale(" + (this.lifeSpan / 120) + ")";
//           }
          
//           this.die = function() {
//             this.element.parentNode.removeChild(this.element);
//           }
          
//         }
        
//         /**
//          * Utils
//          */
        
//         // Applies css `properties` to an element.
//         function applyProperties( target, properties ) {
//           for( var key in properties ) {
//             target.style[ key ] = properties[ key ];
//           }
//         }
        
//         init();
//       })();

// });