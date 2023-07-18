var m = 350; // scroll buffer

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
            var arcadeWidth = scrolling - (titleHeight - document.getElementById("title1").offsetTop) - 235;
            var k = 1 // speed of zoom
            if (k * arcadeWidth > 100)
            {
                arcade.style.width = k * arcadeWidth + "px";
            }
        }
    }
    else
    {
        $("#title1").css("visibility", "visible");
        $("#title2").css("visibility", "hidden");
    }
    if (scrolling >= width + m)
    {
        $("#scrollbox").css("display", "block"); // Show about me text
        document.getElementById("arcade").src = "media/arcade.png"; // Switch to blank arcade
        $("#text1").css("visibility", "visible")
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
                                $("#text4").css("opacity", `${100 - (0.1 * (scrolling - 8 * width - m))}%`); // Reduce text four opacity
                                $("#arcade").css("opacity", `${100 - (0.1 * (scrolling - 8 * width - m))}%`); // Reduce text four opacity
                                if (scrolling >= 9 * width + m)
                                {
                                    $("#text4").css("visibility", "hidden");
                                    $("#arcade").css("visibility", "hidden");
                                }
                                else
                                {
                                    $("#arcade").css("visibility", "visible");
                                }
                            }
                            else
                            {
                                $("#arcade").css("opacity", 1);
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
                $("#arcade").css("max-width", "65vw");
                $("#scrollbox").css("width", "48vw");
                $("#scrollbox").css("height", "27vw");
                $("#scrollbox").css("left", "25%");
                $("#scrollbox").css("margin-top", "12vw");
                $(".aboutme").css("font-size", "2.45vw");
                $(".aboutme").css("margin-top", "1vw");
                $("#arcade").css("top", `${(window.innerHeight - arcade.offsetHeight) / 2}px`);
                $("#scrollbox").css("top", `${(window.innerHeight - arcade.offsetHeight) / 2 + 190}px`);
                document.getElementById("coaster").src = "media/mobileCoaster.png";
                $("#coaster").css("transform", "translate(0, -230px)");
                $("#title1").css("margin-top", "550px");
                document.getElementById("title1").classList.add("mobile");
                document.getElementById("title2").classList.add("mobile");
                $("#subheading").css("margin-top", "700px");
                $("#subheading").css("left", "40%");
                m = 350;
            }
            else
            {
                $("#arcade").css("max-width", "40vw");
                $("#arcade").css("backround-color", "white");
                $("#arcade").css("top", "-1px");
                $(".aboutme").css("font-size", "1.5vw");
                $(".aboutme").css("margin-top", 0);
                $("#scrollbox").css("width", "30vw");
                $("#scrollbox").css("height", "16vw");  
                $("#scrollbox").css("left", "34.5%");
                $("#scrollbox").css("margin-top", 0);
                $("#scrollbox").css("top", "20vw");
                document.getElementById("coaster").src = "media/coaster.png";
                $("#coaster").css("transform", "translate(0, 0)");
                $("#title1").css("margin-top", "100px");
                document.getElementById("title1").classList.remove("mobile");
                document.getElementById("title2").classList.remove("mobile");
                $("#subheading").css("margin-top", "150px");
                $("#subheading").css("left", "50%");
                m = 1800;
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