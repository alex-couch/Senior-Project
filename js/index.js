$(document).ready(function(){
	var firstListItem = document.getElementsByClass(".navbar-content:first");
	$(firstListItem).hide();
	$(firstListItem).click(function(){
		$(this).show();
	});
});