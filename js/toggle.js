$(document).ready(function(){
  $(".show").click(function(){
    
    var target = $(this).parent().children(".more-info");
    $(target).slideToggle();     
	$(this).text($(this).text() == 'Hide' ? 'Show More' : 'Hide');
                
  });
});