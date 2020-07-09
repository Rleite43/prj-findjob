$.getJSON('http://localhost/prj/banco/selectuser.php/user_id='+window.localStorage.getItem('user_id'), function(data){

var items = [];
  $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
  });
 
  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
   
})
