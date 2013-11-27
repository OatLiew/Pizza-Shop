//signup.js 
// add your JavaScript code to this file

//function that will be called when the 
//document is ready for manipulation
$( document ).ready(function() {
    var select = $('select[name="state"]');
    var option;
    var idx;
    var state;

    for(idx = 0; idx < usStates.length; ++idx) {
            state = usStates[idx];
            option = $(document.createElement('option'));
            option.attr('value', state.abbreviation);
            option.html(state.name);
            select.append(option);
    } 
    
    var firstname = $('#first-name');
    var lastname = $('#last-name');
    var email = $('#email');


    $('.place-order').click(function(){
        //code to execute when the sign-up form is submitted
        //this is the raw DOM form element
        //wrap it in a jQuery object so we can use jQuery methods on it

        var form = $(this);
        var addr1Input = $('#addr-1').val();
        var zip1Input = $('#zip').val();
        var name = $('#first-name').val();
        var phone = $('#phone').val();

         $('.alert').html(""); //clear warning


        if((addr1Input.trim().length > 0) && (zip1Input.trim().length > 0) 
            && (name.trim().length > 0) && (phone.trim().length > 0) )
        {
             $('#myModal').modal();
             cart['name'] = name.toString();
             cart['phone']= phone.toString();
             cart['address1']= addr1Input.toString();
             cart['zip']=zip1Input.toString();

        }
        else{
             $('.alert').html("Please enter all the information");
        }

    });


    $('#submit').click(function(){
       
       var json = JSON.stringify(cart);

        $.ajax({
            url: 'http://dawgpizza.com/orders/',
            type: 'POST',
            data: json,
            contentType: 'application/json',
            success: function(responseData) {
                //code to run after successful post
                alert("succes");
            },
            error: function(jqXHR, status, errorThrown) {
                //error with post--alert user
                alert(errorThrown || status);
            }
        }); //ajax()

        window.location.replace("index.html");
    });


    $('.cancel').click(function(){
    //code to run when user clicks "No Thanks!" button
        $('.form-body').hide();
        $('.menu-book').fadeIn("slow");
        $('.cartItem').fadeIn("slow");
        $('.menu-ui').fadeIn("slow");
       
    }); //cancel-signup click

    $('.btn-abandon').click(function(){
        window.location = 'http://www.google.com';
    });

    //disable the element
    var referother = $('input[name="refer-other"]');
    referother.attr('disable', true);

});
