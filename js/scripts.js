var getRandomIntInclusive = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(document).ready(function () {
	$('.row2').hide(); 
});

var showSecondRow = function() {
	$('.row2').show(); 
}




