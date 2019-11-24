// JavaScript Document
        $('#hamb-nav').click(function() {
            $('header nav').toggleClass('display');

            if( $(this).text() == 'Hide' ) {

                $(this).text('Show');

            } else {
                $(this).text('Hide');

            }
        });