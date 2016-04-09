/* Process form submission, clear form fields and display confirmation message.
Adapted from http://api.jquery.com/jQuery.post/ */ 

                 
                        
// Attach a submit handler to the form
$( "form" ).submit(function( event ) {
 
  // Stop form from submitting normally
  event.preventDefault();
 
  // Get some values from elements on the page:
  var $form = $( this ),
    name = $form.find( "input[name='name']").val(),
    email = $form.find( "input[name='email']").val(),
    message = $form.find( "textarea[name='message']").val(),
    url = $form.attr( "action" );
 
  // Send the data using post
  var posting = $.post( url, {"name": name, "email": email, "message": message} );
 
  // Put the results in a div
  posting.done(function( data ) {
      $(".form")[0].reset();
      $('.form__confirmation').show().delay(5000).fadeOut();    
  });
});