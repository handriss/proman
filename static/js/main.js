$("#menu-toggle").click(function(event) {
        event.preventDefault();
        $("#wrapper").toggleClass("active");
});

$("#first-link").click(function() {
    console.log("first-link clicked");
});

$("#second-link").click(function() {
    console.log("second-link clicked");
});

$("#third-link").click(function() {
    console.log("third-link clicked");
});