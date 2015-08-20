$(document).ready(function() {
// Fade in?
// tooltips?
// angular slider
// append info from button to list below
console.log("begin");
$('.btn').on('click', function(){
	var proCon = $(this).attr('id');
	console.log(proCon);
	$('#list').append(proCon).slideDown('slow');
});

});
// var newItem = document.getElementsByName('newItem')[0];
//       // $('.listUl').prepend('<li id="listId">' + newItem.value + '<button class="deleteButton"> <i class="fa fa-close fa-1x"></i></button></li>');
//       $('#list').prepend('<li class="listitem"><span class="item">' + newItem.value + '</span><div class="delete"><i class="fa fa-close fa-3x"></i></div></li>').slideDown('slow');
//       document.getElementById("itemEntry").reset();