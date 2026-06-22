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
            $(".passworderror").text("Password required").css("color", "red");
            isValid = false;
        }else if(password.length < 6){
            $(".passworderror").text("password at least 6 characters").css("color", "red");
            isValid = false;
        }
        if(isValid){
            $("#email").val("");
            $("#password").val("");
            $(".successmsg").text("Login Successful").css("color", "green");
            setTimeout(() => {
        
            $(".successmsg").text("");
            }, 2000 )
        }
    } );
});