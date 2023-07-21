var m = 100; // scroll buffer
var maxWidth = 40;
var boxHeight = 16;
var arcadeEnd = 10;

$(window).scroll(function()
{
    screen_size();
    var arcade = document.getElementById("arcade");
    var titleHeight = $("#title2").position().top;
    var width = window.innerWidth;
    var scrolling = $(this).scrollTop();
    if (scrolling >= titleHeight - document.getElementById("title1").offsetTop + 187)
    {
        $("#title1").css("visibility", "hidden");
        $("#title2").css("visibility", "visible");
        if (scrolling >= titleHeight - document.getElementById("title1").offsetTop + 325)
        {
            arcade.style.width = maxWidth + "vw";
            $("#scrollbox").css("height", `${boxHeight}vw`); // Show about me text
            $("#text1").css("visibility", "visible");
            $("#text2").css("visibility", "hidden")
            $("#text3").css("visibility", "hidden")
            $("#text4").css("visibility", "hidden")
        }
        else
        {
            arcade.style.width = 10 + "vw";
            $("#scrollbox").css("height", 0); // Hide about me text
        }
    }
    else
    {
        $("#title1").css("visibility", "visible");
        $("#title2").css("visibility", "hidden");
    }
    if (scrolling >= width + m)
    {   
        document.getElementById("arcade").src = "media/arcade.png"; // Switch to blank arcade
        $("#text1").css("opacity", `${100 - (0.1 * (scrolling - width - m))}%`); // Reduce opacity
        if (scrolling >= 2 * width + m)
        {   
            $("#text1").css("visibility", "hidden");
            $("#text2").css("visibility", "visible")
            $("#text2").css("opacity", `${0.1 * (scrolling - 2 * width - m)}%`); // Increase second about me opacity
            
            if (scrolling >= 4 * width + m)
            {   
                $("#text2").css("opacity", `${100 - (0.1 * (scrolling - 4 * width - m))}%`); // Reduce text two opacity
                if (scrolling >= 5 * width + m)
                {
                    $("#text2").css("visibility", "hidden");
                    $("#text3").css("visibility", "visible")
                    $("#text3").css("opacity", `${0.1 * (scrolling - 5 * width - m)}%`); // Increase third about me opacity
                    
                    if (scrolling >= 6 * width + m)
                    {
                        $("#text3").css("opacity", `${100 - (0.1 * (scrolling - 6 * width - m))}%`); // Reduce text three opacity
                        if (scrolling >= 7 * width + m)
                        {
                            $("#text3").css("visibility", "hidden");
                            $("#text4").css("visibility", "visible")
                            $("#text4").css("opacity", `${0.1 * (scrolling - 7 * width - m)}%`); // Increase fourth about me opacity
                            if (scrolling >= 8 * width + m)
                            {
                                $("#text4").css("visibility", "hidden");
                                arcade.src = "media/arcade2.png";
                                arcade.style.width = "100px"
                                $("#scrollbox").css("height", 0); // Hide about me text
                                if (scrolling >= 8.5 * width + m)
                                {
                                    $("#arcadeContainer").css("transform", `translate(0, ${arcadeEnd}vw)`);
                                }
                                else
                                {
                                    $("#arcadeContainer").css("transform", "translate(0, 0)");
                                }
                            }
                        }
                        else
                        {
                            $("#text4").css("visibility", "hidden")
                        }
                    }
                }
                else
                {
                    $("#text3").css("visibility", "hidden")
                }
            }
        }
        else
        {
            $("#text2").css("visibility", "hidden")
        }
    }
    else
    {
        document.getElementById("arcade").src = "media/arcade1.png";
        $("#text1").css("visibility", "hidden")
    }
});


$(window).resize(screen_size);

function screen_size()
{
    var arcade = document.getElementById("arcade");
    if (window.innerWidth <= 1050 || screen.width <= 1050)
    {
        $("#navigation").css("visibility", "hidden");
        $("#coaster").css("top", "150px");
        $("#sidebar").css("width", "100%");
        $(".menutext").css("font-size", "400%");
        $(".menutext").css("margin-top", "3vw");
        $("#home").css("margin-top", "150px");
        if (window.innerWidth <= 686 || screen.width <= 686)
        {
            if (screen.width <= 415 && window.innerWidth < window.innerHeight)
            {
                $("#scrollbox").css("width", "74vw");
                $("#scrollbox").css("left", "12%");
                $("#scrollbox").css("margin-top", "50vw");
                $(".aboutme").css("font-size", "3.7vw");
                $("#coaster").css("transform", "translate(0, -230px)");
                $("#title1").css("margin-top", "550px");
                document.getElementById("title1").classList.add("mobile");
                document.getElementById("title2").classList.add("mobile");
                $("#subheading").css("margin-top", "700px");
                $("#subheading").css("left", "40%");
                m = 1500;
                maxWidth = 100;
                boxHeight = 40;
                arcadeEnd = 150;
            }
            else
            {
                $("#arcade").css("backround-color", "white");
                $(".aboutme").css("font-size", "1.5vw");
                $("#scrollbox").css("width", "30vw");
                $("#scrollbox").css("left", "34.5%");
                $("#scrollbox").css("margin-top", "20vw");
                document.getElementById("coaster").src = "media/coaster.png";
                $("#coaster").css("transform", "translate(0, 0)");
                $("#title1").css("margin-top", "100px");
                document.getElementById("title1").classList.remove("mobile");
                document.getElementById("title2").classList.remove("mobile");
                $("#subheading").css("margin-top", "150px");
                $("#subheading").css("left", "50%");
                maxWidth = 40;
                boxHeight = 16;
                arcadeEnd = 10;
            }
        }
        else
        {
            $("#scrollbox").css("margin-top", "20vw");
            maxWidth = 40;
            boxHeight = 16;
            arcadeEnd = 10;
        }
    }
    else
    {
        $("#scrollbox").css("margin-top", "20vw");
        $("#navigation").css("visibility", "visible");
        $("#coaster").css("top", "0px");
        $("#sidebar").css("width", "25vw");
        $(".menutext").css("font-size", "3.7vw");
        $(".menutext").css("margin-top", "1vw");
        $("#home").css("margin-top", "100px");
        boxHeight = 16;
        arcadeEnd = 10;
    }
    $("#construction").css("margin-top", `${8.5 * window.innerWidth + m}px`);
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