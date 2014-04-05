/* Exercise 1: Wish list */

$(document).ready(function () {
	addListitems();
	algo();
});


function addListitems() {
	
	/*$(document).on("click", "#add-to-list", function() {
	var a = $("#item").val();	
	$("ol").append("<li>" + a + "</li>");
	
//});*/
$( "#item" ).keypress(function( event ) {
  if ( event.which == 13 ) {
     var a = $("#item").val();	
	$("ol").append(" <li> <span class='label pending'>Pending</span>" + a + "</li> ");
	$(this).val("");
	}



});






}


function algo () {
	$(document).on('click','.label pending', function() {
  var parent_node = $(this).parent();
  parent_node.addClass("completed" );
  parent_node.remove($(this));
  parent_node.append("<span class='label success'>Done!</span>");
});


}






