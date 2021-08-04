$("#alert button").click(function()
    {$(alert ("You have clicked the button")
    )}
)

$("#hide button").click(function()
    {$("h1").hide()
    }
)

$("#show button").click(function()
    {$("h1").show()
    }
)

$("#toggle button").click(function()
    {$("#toggle p").toggle()
    }
)

$("document").ready(function()
    {$("#slide img").hide()
    }
)

$("#slide button").click(function()
    {$("#slide img").slideDown()
    }
)

$("#slide_up").click(function()
    {$("#slide img").slideUp()
    }
)

$("#slide_toggle button").click(function()
    {$("#slide_toggle img").slideToggle()
    }
)

$("#fade button").click(function()
    {$("#fade img").fadeIn([1000])
    }
)

$("#fade_out").click(function()
    {$("#fade img").fadeOut([1000])
    }
)

$("#blue button").click(function()
    {$(this).addClass("blue")
    }
)

$("#before button").click(function()
    {$("#before p").before("<p>This is here now</p>")
    }
)

$("#append button").click(function()
    {$("#second_p").append(" You are!")
    }
)

$("#html button").click(function()
    {$("#html p").html('<img src="cat.jpg" alt="cat">')
    }
)

$("#attr button").click(function()
    {$("#attr img").attr("src", "dog.jpg")
    }
)

$("#value button").click(function()
    {$("#value input").val("Something")
    }
)

$("#text button").click(function()
    {$("#text p").text("<p>Clicking this button will show the code used to make this <b>paragraph</b></p>")
    }
)