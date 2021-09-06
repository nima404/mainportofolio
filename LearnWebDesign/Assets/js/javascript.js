$(document).ready(function(){
  $("#btn-log").click(function(){
    $(".tog-btn").toggle(1000);
  });
});
$(document).ready(function(){
    $("#btn-log-2").click(function(){
      $(".tog-btn").toggle(1000);
    });
  });
     $('document').ready(function(){
            $("#btn-log").click(function(){
                $([document.documentElement, document.body]).animate({
                    scrollTop: $(".tog-btn").offset().top - 80
                }, 1000);
            })

        })
          function myFunction() {
            debugger
              let nameValue = document.getElementById("name-input").value;
              let lnameValue = document.getElementById("lname-input").value;
              document.getElementById("name-value-input").innerHTML = nameValue+lnameValue ;
          }
          $("document").ready(function(){
            $("#acsept-profile").click(function(){
                $("#btn-log").css({"display" : "none"});
                $("#name-value-input").css({"display" : "inline-block"});
                $(".tog-btn").css({"display" : "none"});
                $(".value-i").css({"display" : "inline-block"});
                event.preventDefault()
            })
          })
          AOS.init();
    $(".card-gold , .card-org").click(function(){
      alert("دوره ای وجود ندارد")
    })