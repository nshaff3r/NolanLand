var m = 100; // scroll buffer
var arcadeMaxHeight = 260;
var arcadeMinHeight = 50;
var boxHeight = 16;
var arcadeEnd = 10;

$(window).scroll(scrolling);

function scrolling()
{
    var arcade = document.getElementById("arcade");
    var titleHeight = $("#title2").position().top;
    var width = window.innerWidth;
    var scrolling = $(this).scrollTop();
    if (scrolling >= titleHeight - document.getElementById("title1").offsetTop + 187)
    {
        $("#title1").css("visibility", "hidden");
        $("#title2").css("visibility", "visible");
    }
    else
    {
        $("#title1").css("visibility", "visible");
        $("#title2").css("visibility", "hidden");
        arcade.style.height = arcadeMinHeight + "vw";
        $("#scrollbox").css("height", "0px"); // Hide about me text
    }
    if (scrolling >= width + m)
    {   
        document.getElementById("arcade").src = "media/arcade.png"; // Switch to blank arcade
        arcade.style.height = arcadeMaxHeight + "vw";
        $("#scrollbox").css("height", `${boxHeight}vw`); // Show about me text
        $("#text1").css("visibility", "visible");
        $("#text2").css("visibility", "hidden")
        $("#text3").css("visibility", "hidden")
        $("#text4").css("visibility", "hidden")
        $("#text1").css("opacity", `${100 - (0.1 * (scrolling - width - m))}%`); // Reduce opacity
        if (scrolling >= 2 * width + m)
        {   
            arcade.style.transition = "0s";
            document.getElementById("scrollbox").style.transitionDelay = "0s";
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
                            arcade.style.transition = "2s";
                            document.getElementById("scrollbox").style.transitionDelay = "1.9s";
                            $("#text3").css("visibility", "hidden");
                            $("#text4").css("visibility", "visible")
                            $("#text4").css("opacity", `${0.1 * (scrolling - 7 * width - m)}%`); // Increase fourth about me opacity
                            if (scrolling >= 8 * width + m)
                            {
                                $("#text4").css("visibility", "hidden");
                                arcade.src = "media/arcade2.png";
                                arcade.style.height = arcadeMinHeight + "vw";
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
            arcade.style.transition = "2s";
            document.getElementById("scrollbox").style.transitionDelay = "1.9s";
        }
    }
    else
    {
        document.getElementById("arcade").src = "media/arcade1.png";
        arcade.style.height = arcadeMinHeight + "vw";
        $("#scrollbox").css("height", "0px"); // Hide about me text
        $("#text1").css("visibility", "hidden")
    }
}


$(window).resize(screen_size);

function screen_size()
{
    var arcade = document.getElementById("arcade");
    // Change page height
    $("#construction").css("margin-top", `${9 * window.innerWidth + m}px`);
    if (window.innerWidth <= 1050 || screen.width <= 1050)
    {
        // Change top navigation and menu sizes
        $("#navigation").css("visibility", "hidden");
        $("#coaster").css("top", "150px");
        $("#sidebar").css("width", "100%");
        $(".menutext").css("font-size", "400%");
        $(".menutext").css("margin-top", "3vw");
        if (screen.width <= 415 && window.innerWidth < window.innerHeight)
        {
            // Change scrollbox and text size
            $("#scrollbox").css("width", "74vw");
            $("#scrollbox").css("left", "12vw");
            $("#scrollbox").css("margin-top", "28vw");
            $(".aboutme").css("font-size", "3.7vw");
            // Change and position coaster image
            document.getElementById("coaster").src = "media/mobileCoaster.png";
            $("#coaster").css("transform", "translate(0, -230px)");
            // Reposition text
            $("#title1").css("margin-top", "550px");
            document.getElementById("title1").classList.add("mobile");
            document.getElementById("title2").classList.add("mobile");
            $("#subheading").css("margin-top", "700px");
            $("#subheading").css("left", "40%");
            // Change buffer values
            m = 1500;
            arcadeMaxHeight = 260;
            arcadeMinHeight = 50;
            boxHeight = 40;
        }
        else
        {
            // Revert scrollbox and text size
            $("#scrollbox").css("width", "42vw");
            $("#scrollbox").css("left", "28.5vw");
            $("#scrollbox").css("margin-top", "7.5vw");
            $(".aboutme").css("font-size", "2.1vw");
            // Change and reposition coaster image
            document.getElementById("coaster").src = "media/coaster.png";
            $("#coaster").css("transform", "translate(0, 0)");
            // Reposition text
            $("#title1").css("margin-top", "100px");
            document.getElementById("title1").classList.remove("mobile");
            document.getElementById("title2").classList.remove("mobile");
            $("#subheading").css("margin-top", "225px");
            $("#subheading").css("left", "50%");
            // Change buffer value and arcade size
            m = 100;
            arcadeMaxHeight = 145;
            boxHeight = 25;
        }
    }
    else
    {
        // Show top navigation and shrink menu
        $("#navigation").css("visibility", "visible");
        $("#coaster").css("top", "0px");
        $("#sidebar").css("width", "25vw");
        $(".menutext").css("font-size", "3.7vw");
        $(".menutext").css("margin-top", "1vw");
        // Change scrollbox and text size
        $("#scrollbox").css("width", "31vw");
        $("#scrollbox").css("left", "34vw");
        $("#scrollbox").css("margin-top", "1vw");
        $(".aboutme").css("font-size", "1.55vw");
        // Change arcade size
        arcadeMaxHeight = 110;
        arcadeMinHeight = 20;
        arcade
        boxHeight = 20;
        arcadeEnd = 10;
    }
    if ($(this).scrollTop() >= window.innerWidth + m)
    {
        arcade.style.height = arcadeMaxHeight + "vw";
    }
}


document.addEventListener("DOMContentLoaded", function()
{
    screen_size();
    scrolling();
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