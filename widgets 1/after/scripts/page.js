/// <reference path="jquery-1.6.2.js" />
/// <reference path="jquery-ui-1.8.16.custom.js" />

$(function () {
 //<-- important the title of the dialog is defined in the div of the html in the title attribute
    $("#dialog").dialog( //<-- this add the content of the div to a dialog box
        {
            autoOpen: false, //<--specify that it does not open automatically at startup
            modal: true, //<-- convert in to a modal dialog
            resizable: false, //<--prevents resizing
            draggable: false, //<--prevents the dialog be draggable
            position: "top", //difine the position of the dialog
            buttons: {
                "Yes, I do!": function () {
                    $("#dialog").dialog("close"); //<--close the dialog
                    $("#dialogDecision").text("Yes you did!!"); //print text in this div
                },
                "No": function () { }
            }
        }
     );

    $("#openDialog").click(function () {
        $("#dialog").dialog("open");
    });

    //$("#progress").progressbar({ value: 60 });

    $("#progress").progressbar({ value: 100 });

    var value = 100;

    // countdown();

    function countdown() {
        value--; //<-- reduce in one the value 
        $("#progress").progressbar("option", "value", value);
        $("#countdown").text(value);

        if (value > 0) {
            setTimeout(countdown, 100); //<-- actualiza el value of countdown each 100ms
        }
        else {
            $("#countdown").text("completed");
            $("#progress").progressbar("disable");
        }
    }
                        //<--- define the max, min and the start value
    $("#slider").slider({ min: 0, max: 100, value: 100, slide: function (event, ui) {
        $("#slider").prev().css({ opacity: ui.value / 100 }); //<-- this event reduce the opacity of the #slider
    }
    });

    $("#tabs").tabs(); //<-- convert the elements inside the div #tabs in tabs whit this method
    //if contains a link add dinamic content

});