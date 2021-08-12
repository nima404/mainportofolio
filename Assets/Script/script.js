$('document').ready(function(){
            $("#maharat-btn").click(function(){
                $([document.documentElement, document.body]).animate({
                    scrollTop: $("#skils").offset().top - 80
                }, 2000);
            })
        })

        $('document').ready(function(){
            $("#info-btn").click(function(){
                $([document.documentElement, document.body]).animate({
                    scrollTop: $("#info-skroll").offset().top - 80
                }, 2000);
            })
        })

        $('document').ready(function(){
            $("#project-btn").click(function(){
                $([document.documentElement, document.body]).animate({
                    scrollTop: $(".project-scroll").offset().top - 80
                }, 2000);
            })
        })

        $('document').ready(function(){
            $("#call-btn").click(function(){
                $([document.documentElement, document.body]).animate({
                    scrollTop: $("#call-skroll").offset().top - 80
                }, 2000);
            })
        })

        $('document').ready(function(){
            $("#skroll-top").click(function(){
                $([document.documentElement, document.body]).animate({
                    scrollTop: $("nav").offset().top - 80
                }, 2000);
            })
        })
