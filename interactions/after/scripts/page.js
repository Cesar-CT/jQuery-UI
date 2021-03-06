/// <reference path="jquery-1.6.2.js" />
/// <reference path="jquery-ui-1.8.16.custom.js" />

$(function () {
    $("#d1").draggable({
        //axis: "X",
        revert: "invalid"
    });

    $("#d2").draggable({
        //axis: 'Y',
        snap: "#d1, #d3",
        helper: function () {
            return $("<div>I am a helper</div>");
        }
    });

    $("#d3").draggable({
        //contaiment: '#draggables',
        handle: "header"
    });

    $("#d1, #d2, #d3").draggable(
        "option", "stack", ".ui-draggable");

    $("#trash").droppable({
        activeClass: "opaque",
        accept: "#d3",
        drop: function (event, ui) {
            ui.draggable.fadeOut(function () {
                ui.draggable.remove();
            });
        }
    });
            //<-- "placeholder" add a css shadow under the content like a hole
    $("#sortable").sortable({ axis: "y", placeholder: "placeholder" });

    $("#d3").resizable({ aspectRatio: true, alsoResize: "#d2" });

});