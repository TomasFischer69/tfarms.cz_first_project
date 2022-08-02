  
      //back to top
            
        var backToTop = $('<a>', {
                                     href: '#domu',
                                     class: 'back-to-top',
                                     html: '<i class="fa fa-caret-up fa-5x"></i>'
        });
        
        backToTop
             .hide()
             .appendTo('body')
             .on('click', function() {
                    $('body').animate({ scrollTop: 0 }, 1500);
             });

              var win = $(window);
            win.on('scroll', function(){
                    if (win.scrollTop() >= 500 ) backToTop.fadeIn();
                else backToTop.hide();

            });



      //animace na objednej a vyzvedni


              var vydej = $('#vydej_id');


              vydej.on('click', function(event){

             $('body').animate({scrollTop: 1212}, 2000);
               event.preventDefault();
          
         });

          //    o nás

          var nas = $('#o_nas');

          nas.on('click', function(event){

            $('body').animate({scrollTop: 280}, 2000);
            event.preventDefault();

          });

            

        //--------------------------------------------------------
        //Cookies
        //--------------------------------------------------------
          //nefunguje
        Cookies.set('ieat', 'true', { expires: 2 });

        var myCookie = Cookies.get('ieat');
        var title = document.querySelector('testovaci');

        if (myCookie) {
          title.classList.add('cookie');
        }
        if (myCookie == "false") {
          title.classList.remove('cookie');
        }