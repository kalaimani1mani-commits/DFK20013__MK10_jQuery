$(document).ready(function () {

    $("#submitBtn").click(function () {

        var age = $("#age").val();

        if (age == "") {
            $("#message").text("Age is required!");
            $("#popupMsg").popup("open");
        }

        else if (age < 13) {
            $("#message").text("Participant is not eligible to register for the event.");
            $("#popupMsg").popup("open");
        }

        else if (age >= 13 && age <= 17) {
            $("#message").text("Participant must be accompanied by a parent or guardian.");
            $("#popupMsg").popup("open");
        }

        else if (age >= 18 && age <= 40) {
            $("#message").text("Participant is eligible to participate in all event activities.");
            $("#popupMsg").popup("open");
        }

        else if (age >= 41 && age <= 60) {
            $("#message").text("Participant is eligible but advised to choose suitable activities.");
            $("#popupMsg").popup("open");
        }

        else {
            $("#message").text("Participant is welcome to join the event but is advised to participate in light activities only.");
            $("#popupMsg").popup("open");
        }

    });

});