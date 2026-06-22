$(document).ready(function () {

    $("#loginfrm").submit((e) => {
        e.preventDefault();
        let email = $("#email").val().trim();
        let password = $("#password").val().trim();
        let isValid = true;
        $(".emailerror").text("");
        $(".passworderror").text("");

        if(email === ""){
            $(".emailerror").text("Enter your Email").css("color", "red");
            isValid = false;
        }
        if(password === ""){
            $(".passworderror").text("Password required");
            isValid = false;
        }
    } );
});