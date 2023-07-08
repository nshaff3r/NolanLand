$(window).scroll(function(){
    screen_size()
    var height = $("#title2").position().top;
    var scrolling = $(this).scrollTop();
    if (height - document.getElementById("title1").offsetTop + 84 <= scrolling)
    {
        var arcade = document.getElementById("arcade");
        // console.log((window.innerHeight - arcade.offsetHeight) / 2);
        $("#title1").css("visibility", "hidden");
        $("#title2").css("visibility", "visible");
        var arcadeWidth = scrolling - (height - document.getElementById("title1").offsetTop) + 5;
        arcade.style.width = 1.1 * arcadeWidth + "px";
        if(1.1 * arcadeWidth >= (window.innerWidth * Number(arcade.style.maxWidth.slice(0,2)) / 100))
        {
            // $("#scrollbox").css("visibility", "visible");
        }
        else
        {
            // $("#scrollbox").css("visibility", "hidden");
        }
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
                $("#scrollbox").css("width", "46vw");
                $("#scrollbox").css("height", "25vw");
                $("#scrollbox").css("left", "27%");
                $("#scrollbox").css("margin-top", "12vw");
            }
            else
            {
                $("#arcade").css("max-width", "40vw");
                $("#scrollbox").css("width", "30vw");
                $("#scrollbox").css("height", "16vw");
                $("#scrollbox").css("left", "34.5%");
                $("#scrollbox").css("margin-top", "0");
            }
            $("#arcade").css("top", `${(window.innerHeight - arcade.offsetHeight) / 2}px`);
            $("#scrollbox").css("top", `${(window.innerHeight - arcade.offsetHeight) / 2 + 190}px`);
        }
        else
        {
            $("#arcade").css("max-width", "40vw");
            $("#arcade").css("top", "0%");
            $("#scrollbox").css("top", "20vw");
        }
    }
    else
    {
        $("#arcade").css("max-width", "40vw");
        $("#scrollbox").css("top", "20vw");
        $("#navigation").css("visibility", "visible");
        $("#coaster").css("top", "0px");
        $("#sidebar").css("width", "25vw");
        $(".menutext").css("font-size", "3.7vw");
        $(".menutext").css("margin-top", "1vw");
        $("#home").css("margin-top", "100px");
        $("#arcade").css("top", "0%");        
    }
  }

    document.addEventListener('click', printMousePos, true);
    function printMousePos(e){
        
            let cursorX = e.pageX;
            let cursorY= e.pageY;
            console.log( "pageX: " + cursorX +",pageY: " + cursorY );
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