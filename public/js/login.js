'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function () {
    initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    // $('.project a').click(addProjectDetails);
    // $('#colorBtn').click(randomizeColors);


    $('form').submit((event) => {
        event.preventDefault();
        console.log("clicked, here is the event");

        var values = $('form').serializeArray();

        let pid = values[0].value;
        let password = values[1].value;

        console.log(pid);
        console.log(password);

        if(pid !== "A12345678" || password !== "CatsAreCool") {
            alert("Make sure PID is A12345678 and password is CatsAreCool");
            $('form').trigger('reset');
        } else {
            window.location.pathname = "/journey";
        }

    })

}
