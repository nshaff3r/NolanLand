$(window).scroll(function()
{
    screen_size();
    var arcade = document.getElementById("arcade");
    var titleHeight = $("#title2").position().top;
    var width = window.innerWidth;
    document.getElementById("title1").innerHTML = width;
    var scrolling = $(this).scrollTop();
    if (titleHeight - document.getElementById("title1").offsetTop + 84 <= scrolling)
    {
        $("#title1").css("visibility", "hidden");
        $("#title2").css("visibility", "visible");
        var arcadeWidth = scrolling - (titleHeight - document.getElementById("title1").offsetTop) + 5;
        var k = 1.1 // speed of zoom
        if (k * arcadeWidth > 100)
        {
            arcade.style.width = k * arcadeWidth + "px";
        }
    }
    else
    {
        $("#title1").css("visibility", "visible");
        $("#title2").css("visibility", "hidden");
    }
    if (scrolling >= width)
    {
        $("#scrollbox").css("display", "block"); // Show about me text
        document.getElementById("arcade").src = "media/arcade.png"; // Switch to blank arcade
        $("#text1").css("opacity", `${100 - (0.1 * (scrolling - width))}%`); // Reduce opacity
        if (scrolling >= 2 * width)
        {   
            $("#text2").css("opacity", `${0.1 * (scrolling - 2 * width)}%`); // Increase second about me opacity
            
            if (scrolling >= 4 * width)
            {   
                $("#text2").css("opacity", `${100 - (0.1 * (scrolling - 4 * width))}%`); // Reduce text two opacity
                if (scrolling >= 5 * width)
                {
                    $("#text3").css("opacity", `${0.1 * (scrolling - 5 * width)}%`); // Increase third about me opacity
                    
                    if (scrolling >= 6 * width)
                    {
                        $("#text3").css("opacity", `${100 - (0.1 * (scrolling - 6 * width))}%`); // Reduce text three opacity
                        if (scrolling >= 7 * width)
                        {
                            $("#text4").css("opacity", `${0.1 * (scrolling - 7 * width)}%`); // Increase fourth about me opacity
                        }
                        else
                        {
                            $("#text4").css("opacity", 0);
                        }
                    }
                }
                else
                {
                    $("#text3").css("opacity", 0);
                }
            }
        }
        else
        {
            $("#text2").css("opacity", 0);
        }
    }
    else
    {
        document.getElementById("arcade").src = "media/arcade1.png";
        $("#text1").css("opacity", 0);
    }
});


$(window).resize(screen_size);

function screen_size()
{
    var arcade = document.getElementById("arcade");
    if (window.innerWidth <= 1050 || screen.width <= 1050)
    {
        $("#navigation").css("visibility", "hidden");
        $("#coaster").css("top", "100px");
        $("#sidebar").css("width", "100%");
        $(".menutext").css("font-size", "400%");
        $(".menutext").css("margin-top", "3vw");
        $("#home").css("margin-top", "150px");
        if (window.innerWidth <= 686 || screen.width <= 686)
        {
            if (screen.width <= 415 && window.innerWidth < window.innerHeight)
            {
                $("#arcade").css("max-width", "65vw");
                $("#scrollbox").css("width", "46vw");
                $("#scrollbox").css("height", "25vw");
                $("#scrollbox").css("left", "27%");
                $("#scrollbox").css("margin-top", "12vw");
                $(".aboutme").css("font-size", "2.25vw");
                $(".aboutme").css("margin-top", "1vw");
                $("#arcade").css("top", `${(window.innerHeight - arcade.offsetHeight) / 2}px`);
                $("#scrollbox").css("top", `${(window.innerHeight - arcade.offsetHeight) / 2 + 190}px`);
            }
            else
            {
                $("#arcade").css("max-width", "40vw");
                $("#arcade").css("backround-color", "white");
                $("#scrollbox").css("width", "30vw");
                $("#scrollbox").css("height", "16vw");
                $("#scrollbox").css("left", "34.5%");
                $("#scrollbox").css("top", "20vw");
            }
        }
        else
        {
            $("#arcade").css("max-width", "40vw");
            $("#arcade").css("top", "-1px");
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
        $("#arcade").css("top", "-1px");        
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