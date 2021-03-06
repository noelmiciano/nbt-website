var lastId, topMenu = $("#nav"), topMenuHeight = topMenu.outerHeight() + 0, menuItems = topMenu.find("a.link"), scrollItems = menuItems.map(function() {
  var b = $($(this).attr("href"));
  if (b.length) {
    return b;
  }
});
menuItems.click(function(b) {
  var a = $(this).attr("href"), a = "#" === a ? 0 : $(a).offset().top - topMenuHeight + 1;
  $("html, body").stop().animate({scrollTop:a}, 1500, 'easeInOutBack');
  b.preventDefault();
});
$(window).scroll(function() {
  var b = $(this).scrollTop() + topMenuHeight, a = scrollItems.map(function() {
    if ($(this).offset().top < b) {
      return this;
    }
  }), a = (a = a[a.length - 1]) && a.length ? a[0].id : "";
  lastId !== a && (lastId = a, menuItems.parent().removeClass("active").end().filter("[href=#" + a + "]").parent().addClass("active"));
});