
$(document).ready(function(){
    let validName = false;
    let validEmail = false;
    let validPhoneNumber = false;
    let validMessage = false;

    $("form").submit(function(event){
        event.preventDefault();


        const name = $("#name").val();
        const email = $("#email").val();
        const phonenumber = $("#phonenumber").val();
        const message = $("#message").val();

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
            let validPhoneNumber = false;
            $('#phonenumber').val('');
            $('#phonenumber').focus();
        } else {
            $("#phonenumber").removeClass("border border-danger").addClass("border border-success");
            validPhoneNumber = true;
        }

         if(email == ""){
            $("#email").removeClass("border border-success").addClass("border border-danger");
            validName = false;
        } else {
            $("#email").removeClass("border border-danger").addClass("border border-success");
            validName = true;
        }

        if(message == ""){
            $("#message").removeClass("border border-success").addClass("border border-danger");
            validName = false;
        } else {
            $("#message").removeClass("border border-danger").addClass("border border-success");
            validName = true;
        }

        if(validName == true && validEmail == true && phonenumber == true && message == true){
            $("form").unbind('submit').submit();
        }
    });
});


