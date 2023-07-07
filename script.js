$(window).scroll(function(){
    screen_size()
    var height = $("#title2").position().top;
    var scrolling = $(this).scrollTop();
    if (height - document.getElementById("title1").offsetTop + 84 <= scrolling)
    {
        var arcade = document.getElementById("arcade");
        console.log((window.innerHeight - arcade.offsetHeight) / 2);
        $("#title1").css("visibility", "hidden");
        $("#title2").css("visibility", "visible");
        var arcadeWidth = scrolling - (height - document.getElementById("title1").offsetTop) + 5;
        arcade.style.width = 1.1 * arcadeWidth + "px";
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
    if (window.innerWidth <= 1050 || screen.width <= 1050)
    {
        console.log(window.innerWidth);
        $("#navigation").css("visibility", "hidden");
        $("#coaster").css("top", "80px");
        $("#sidebar").css("width", "100%");
        $(".menutext").css("font-size", "400%");
        $(".menutext").css("margin-top", "3vw");
        $("#home").css("margin-top", "150px");
        var arcade = document.getElementById("arcade");
        if (window.innerWidth <= 686 || screen.width <= 686)
        {
            if (window.innerWidth <= 415 || screen.width <= 415)
            {
                $("#arcade").css("max-width", "65vw");
            }
            else
            {
                $("#arcade").css("max-width", "40vw");
            }
            $("#arcade").css("top", `${(window.innerHeight - arcade.offsetHeight) / 2}px`);
        }
        else
        {
            $("#arcade").css("top", "0%");
        }
    }
    else
    {
        $("#navigation").css("visibility", "visible");
        $("#coaster").css("top", "0px");
        $("#sidebar").css("width", "25vw");
        $(".menutext").css("font-size", "3.7vw");
        $(".menutext").css("margin-top", "1vw");
        $("#home").css("margin-top", "100px");
        $("#arcade").css("top", "0%");        
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