function comment_dm(text, color, size) {
  this.render(text, color, size);
  this.fly();
}

comment_dm.prototype.render = function(text, color, size) {
  var span = document.createElement("span");
  this.elem = $(span).text(text).css({
    color    : color,
    fontSize : size,
    position : "absolute"
  }).addClass("comment_dm").appendTo(document.body);
}

comment_dm.prototype.fly = function() {
  var width = document.body.clientWidth - 40,
      height = document.body.clientHeight,
      beginpos = {
        top: height * Math.random(),
        left: width 
      };
  this.elem.css(beginpos).animate({left: 0}, {
    duration : 6000,
    easing   : "linear",
    step     : function(now, fx){
    },
    complete : function(){
      $(this).remove();
    }
  });
}
