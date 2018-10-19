bpc.galleryThumbInteraction = function() {
  if (bpc.clickType !== 'tap') {
    TweenMax.set($('.project-list .project'), {rotationY: 0, rotationX: 0, rotationZ: 0, transformPerspective: 1000});
    $('.project-list .project').mouseover(function() {
      $('.project-list .project').mousemove(function(e) {
        var x = e.pageX - $(this).offset().left,
          y = e.pageY - $(this).offset().top;

        var px = x/$(this).width(), py = y/$(this).height();
        var xx = -15 + (30*px), yy = 15 - (30*py);

        //TweenMax.killTweensOf($(this));
        TweenMax.to($(this), 0.5, {rotationY: xx, rotationX: yy, rotationZ: 0, transformPerspective: 1000, ease: Quad.easeOut});
      });
    }).mouseout(function() {
      $(this).unbind('mousemove');
      //TweenMax.killTweensOf($(this));
      TweenMax.to($(this), 0.5, {rotationY: 0, rotationX: 0, rotationZ: 0, transformPerspective: 1000, ease: Quad.easeOut});
    });
  }
};