$(window).scroll(function()
{
    var arcade = document.getElementById("arcade");
    apply_sticky_class(arcade);
    var height = $("#title2").position().top;
    var scrolling = $(this).scrollTop();
    if (height - document.getElementById("title1").offsetTop + 84 <= scrolling)
    {
        $("#title1").css("visibility", "hidden");
        $("#title2").css("visibility", "visible");
        var arcadeWidth = scrolling - (height - document.getElementById("title1").offsetTop) + 5;
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
    if (first == false)
    {
        if (scrolling >= sticky + stickyCorrector)
        {
            $("#scrollbox").css("display", "block");
            document.getElementById("arcade").src = "media/arcade.png";
            $("#text1").css("visibility", "visible");
            $("#text1").css("opacity", `${100 - (0.07 * (scrolling - (sticky + stickyCorrector + 400)))}%`);
            if ($("#text1").css("opacity") == 0)
            {   
                if (first2 == true)
                {
                    text2 = scrolling;
                    first2 = false;
                }
                $("#text2").css("visibility", "visible");
                $("#text2").css("opacity", `${0.07 * (scrolling - text2)}%`);
                
                if ($("#text2").css("opacity") == 1)
                {   
                    $("#text2").css("opacity", `${200 - (0.07 * (scrolling - text2))}%`);
                    if ($("#text2").css("opacity") == 0)
                    {
                        if (first3 == true)
                        {
                            text3 = scrolling;
                            first3 = false;
                        }
                        $("#text3").css("visibility", "visible");
                        $("#text3").css("opacity", `${0.07 * (scrolling - text3)}%`);
                        if ($("#text3").css("opacity") == 1)
                        {   
                            $("#text3").css("opacity", `${200 - (0.07 * (scrolling - text3))}%`);
                            if ($("#text3").css("opacity") == 0)
                            {
                                if (first4 == true)
                                {
                                    text4 = scrolling;
                                    first4 = false;
                                }
                                $("#text4").css("visibility", "visible");
                                $("#text4").css("opacity", `${0.07 * (scrolling - text4)}%`);
                            }
                            else
                            {
                                $("#text4").css("visibility", "hidden");
                            }
                        }
                    }
                    else
                    {
                        $("#text3").css("visibility", "hidden");
                    }
                }
            }
            else
            {
                $("#text2").css("visibility", "hidden");
            }
        }
        else
        {
            document.getElementById("arcade").src = "media/arcade1.png";
            $("#text1").css("visibility", "hidden");
        }
    }
});


$(window).resize(screen_size);

var first = true;
var first2 = true;
var first3 = true;
var first4 = true;
var screenSet = false;
var sticky = 0;
var stickyCorrector = 0;
var text2; 
var text3;
var text4;

// Adapted from https://stackoverflow.com/questions/44744498/use-of-and-in-javascript
function apply_sticky_class(el) {
    var currentOffset = el.getBoundingClientRect().top;
    var stickyOffset = parseInt(getComputedStyle(el).top.replace('px', ''));
    if (currentOffset <= stickyOffset && first == true)
    {
        first = false;
        sticky = sessionStorage.getItem("sticky")
        if (sticky === null)
        {
            alert("TESTING!")
            sticky = $(this).scrollTop() + 40;
            sessionStorage.setItem("sticky", sticky);
        }
        console.log(sticky);
    }
}

function screen_size()
{
    if (screenSet == true)
    {
        sessionStorage.removeItem("sticky");
        apply_sticky_class(document.getElementById("arcade"));
    }
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
                stickyCorrector = 500;
            }
            else
            {
                $("#arcade").css("max-width", "40vw");
                $("#arcade").css("backround-color", "white");
                $("#scrollbox").css("width", "30vw");
                $("#scrollbox").css("height", "16vw");
                $("#scrollbox").css("left", "34.5%");
                $("#scrollbox").css("margin-top", "0");
                stickyCorrector = 300;
            }
            $("#arcade").css("top", `${(window.innerHeight - arcade.offsetHeight) / 2}px`);
            $("#scrollbox").css("top", `${(window.innerHeight - arcade.offsetHeight) / 2 + 190}px`);
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
    screenSet = true;
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