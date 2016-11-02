
    $("#btn").on("click", function() {
        function validInfo() {
            var valid = true;
            $(".form-control").each(function() {
                if ($(this).val() === '')
                    isValid = false;
                if (validInfo == true) {
                    var userData = {
                        name: $("#name").val(),
                        photo: $("#photo").val(),
                        scores: [$("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val(), $("#q5").val(), $("#q6").val(), $("#q7").val(), $("#q8").val(), ]
                    }
                    var currentLocation = window.location.origin;
                    $.post(currentURL + "/api/friends", userData, function(data) {

                        $("#name").text(data.name);
                        $("#photo").attr("src", data.photo);

                        $("#resultsModal").modal("toggle");

                    });
                } else {
                    alert("Please fill out all fields before submitting!");
                }

                return false;
            });

        }
    });
    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the button that opens the modal
    var btn = document.getElementById("btn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

