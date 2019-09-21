
$(document).ready(function(){
    let validName = false;
    let validEmail = false;
    let validPhoneNumber = false;
    let validMessage = false;

    $("form").submit(function(event){
        event.preventDefault();


        let name = $("#name").val();
        let email = $("#email").val();
        let phonenumber = $("#phonenumber").val();
        let message = $("#message").val();

        if(name == ""){
            $("#name").removeClass("border border-success").addClass("border border-danger");
            validName = false;
        } else {
            $("#name").removeClass("border border-danger").addClass("border border-success");
            validName = true;
        }


         if (phonenumber.length != 10)
        {
            $("#phonenumber").removeClass("border border-success").addClass("border border-danger");
            validPhoneNumber = false;

        } else {
            $("#phonenumber").removeClass("border border-danger").addClass("border border-success");
            validPhoneNumber = true;
        }

         if(email == ""){
            $("#email").removeClass("border border-success").addClass("border border-danger");
            validEmail = false;
        } else {
            $("#email").removeClass("border border-danger").addClass("border border-success");
            validEmail = true;
        }

        if(message == ""){
            $("#message").removeClass("border border-success").addClass("border border-danger");
            validMessage = false;
        } else {
            $("#message").removeClass("border border-danger").addClass("border border-success");
            validMessage = true;
        }

        if(validName == true && validEmail == true && validPhoneNumber == true && validMessage == true){
            $("form").unbind('submit').submit();
        }
    });
});


