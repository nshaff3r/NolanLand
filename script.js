$(window).scroll(function(){
    var height = $("#title2").position().top;
    var scrolling = $(this).scrollTop();
    if (height - document.getElementById("title1").offsetTop + 84 <= scrolling)
    {
      $("#title1").css("visibility", "hidden");
      $("#title2").css("visibility", "visible");
    }
    else
    {
      $("#title1").css("visibility", "visible");
      $("#title2").css("visibility", "hidden");
    }
  });
  
  $(window).resize(screen_size);

  function screen_size()
  {
    if (window.innerWidth <= 1000 || screen.width <= 1000)
    {
        console.log(window.innerWidth);
        $("#navigation").css("visibility", "hidden");
        $("#coaster").css("top", "80px");
        $("#sidebar").css("width", "100%");
        $(".menutext").css("font-size", "400%");
        $(".menutext").css("margin-top", "3vw");
        $("#home").css("margin-top", "150px");
    }
    else
    {
        $("#navigation").css("visibility", "visible");
        $("#coaster").css("top", "0px");
        $("#sidebar").css("width", "25vw");
        $(".menutext").css("font-size", "3.7vw");
        $(".menutext").css("margin-top", "1vw");
        $("#home").css("margin-top", "100px");
    }
  }

  document.addEventListener("DOMContentLoaded", function()
  {
    screen_size();
    var menu = document.getElementById("menubutton");
    menu.addEventListener("click", function()
    {
        menu.classList.toggle("change");
        if (window.getComputedStyle(document.body).overflowY == "visible" )
        {
            $("body").css("overflow-y", "hidden");
        }
        else
        {
            $("body").css("overflow-y", "visible");
        }
    })
  });