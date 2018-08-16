shbabel.svgDottyPanel = {

  init: function () {

    this.$element = $('#svg-dotty');

    if (this.$element.length) {
      this.Container = {x: 100, y: 300};
      this.draw = SVG($(this.$element).attr('id')).viewbox(0, 0, this.Container.x, this.Container.y).attr({'preserveAspectRatio': 'xMinYMin slice'});
      this.createSVG();
    }

  },
  createSVG: function () {

    var circle;
    var groups;
    var nested;
    var rowArray = Array();


    this.color = "255, 217, 0";
    this.colorBG = this.color;

    this.circleArray = Array();
    nested = this.draw.nested().viewbox(0, 0, 100, 300);

    this.flashMatrix = {x:0,y:0};

    var col = 0;
    var row = 0;

    this.rows = 41;
    this.columns = 20;

    this.cirlceDim = {x: (this.Container.x / this.columns) , y: (this.Container.x / this.columns)};

    var masterGroup = this.draw.group();
    group = this.draw.group();


    for (var i = 0; i < (this.columns * this.rows); i++) {

      circle = group.circle(this.cirlceDim.x - (this.cirlceDim.x/2), this.cirlceDim.y - (this.cirlceDim.y/2)).move(((this.cirlceDim.x/3) + (this.cirlceDim.x * col)),((this.cirlceDim.y/3) + (this.cirlceDim.y * row))).fill('rgba('+this.color+', 1)').scale(0.5);

      rowArray.push(circle);

      col++;

      if ((i+1)%this.columns === 0) {
        // new row
        this.circleArray.push(rowArray);
        rowArray = Array();
        col = 0;
        row ++;
      }
    }

    var g;
    var gB;
    var groupMask;
    var maskPolygon;

    g = group.clone();

    $(g.node).find('circle').css({'fill':'rgba('+this.colorBG+', 0.5)'});


    var use  = this.draw.use('lightening', 'svg/svgmap.svg').fill('transparent');

    groupMask = group.group();

    maskPolygon = groupMask.mask().add(use.clone().fill('#fff').translate(4,-23).scale(0.5));
    group.maskWith(maskPolygon);


    groupMask = g.group();
    maskPolygon = groupMask.mask().add(this.draw.rect(100,100).fill('#fff')).add(use.clone().fill('rgba('+this.color+', 1)').translate(4,-23).scale(0.5));
    g.maskWith(maskPolygon);

    nested.add(g);
    nested.add(group);


    gB = this.draw.group();

    // use = use.clone();

    gB.add(use.clone().fill('transparent').stroke({'width':3, 'color':'rgba('+this.color+', 1)' }).translate(4,-23.5).scale(0.5))
    nested.add(gB);

    masterGroup.add(nested);
    masterGroup.scale(2);


    TweenMax.fromTo($(gB.node), 0.5, {scale:1, transformOrigin:"center center", ease: Linear.sineInOut }, {scale:1.01, transformOrigin:"center center", ease: Linear.sineInOut }).repeat(-1).yoyo(true);
    TweenMax.fromTo($(gB.node), 1, {rotation:'-0.7_ccw', transformOrigin:"center center", repeat:-1, ease: Linear.easeNone },{rotation:'0.5_cw', transformOrigin:"center center", repeat:-1, ease: Linear.easeNone }).yoyo(true);
    //TweenMax.fromTo($(g.node), 0.2, {x:'-1px', transformOrigin:"center center", repeat:-1, ease: Linear.easeNone },{x:'1px', transformOrigin:"center center", repeat:-1, ease: Linear.easeNone }).yoyo(true);
    TweenMax.fromTo($(gB.node), 0.01, {y:'0.5', transformOrigin:"center center", repeat:-1, ease: Linear.easeNone },{y:'-0.5', transformOrigin:"center center", repeat:-1, ease: Linear.easeNone }).yoyo(true);


    TweenMax.fromTo($(g.node), 0.5, {scale:1, transformOrigin:"center center", ease: Linear.sineInOut }, {scale:1.01, transformOrigin:"center center", ease: Linear.sineInOut }).repeat(-1).yoyo(true);
    TweenMax.fromTo($(g.node), 1, {rotation:'-0.7_ccw', transformOrigin:"center center", repeat:-1, ease: Linear.easeNone },{rotation:'0.5_cw', transformOrigin:"center center", repeat:-1, ease: Linear.easeNone }).yoyo(true);
    //TweenMax.fromTo($(g.node), 0.2, {x:'-1px', transformOrigin:"center center", repeat:-1, ease: Linear.easeNone },{x:'1px', transformOrigin:"center center", repeat:-1, ease: Linear.easeNone }).yoyo(true);
    TweenMax.fromTo($(g.node), 0.01, {y:'0.5', transformOrigin:"center center", repeat:-1, ease: Linear.easeNone },{y:'-0.5', transformOrigin:"center center", repeat:-1, ease: Linear.easeNone }).yoyo(true);

    TweenMax.fromTo($(group.node), 1, {scale:1, transformOrigin:"center center", ease: Linear.sineInOut }, {scale:1.03, transformOrigin:"center center", ease: Linear.sineInOut }).repeat(-1).yoyo(true);
    TweenMax.fromTo($(group.node), 0.2, {rotation:'0.5_cw', transformOrigin:"center center", repeat:-1, ease: Linear.easeNone },{rotation:'-0.5_ccw', transformOrigin:"center center", repeat:-1, ease: Linear.easeNone }).yoyo(true);
    //TweenMax.fromTo($(g.node), 0.2, {x:'-1px', transformOrigin:"center center", repeat:-1, ease: Linear.easeNone },{x:'1px', transformOrigin:"center center", repeat:-1, ease: Linear.easeNone }).yoyo(true);
    TweenMax.fromTo($(group.node), 0.01, {y:'-0.5', transformOrigin:"center center", repeat:-1, ease: Linear.easeNone },{y:'0.5', transformOrigin:"center center", repeat:-1, ease: Linear.easeNone }).yoyo(true);




    this.timeout();

  },

  timeout: function() {

    setTimeout(function () {

      this.flashDots();
      this.timeout();

    }.bind(this), 100);

  },
  flashDots: function () {

    var flashMe = this.circleArray[this.flashMatrix.y][this.flashMatrix.x];
    flashMe.attr({r:1.25});;

    this.flashMatrix.x = this.flashMatrix.x + 1;

    if (this.flashMatrix.x >= this.columns) {
      this.flashMatrix.x = 0;
      this.flashMatrix.y = this.flashMatrix.y + 1
      if (this.flashMatrix.y >= this.rows) {
        this.flashMatrix.y = 0;
      }
    }
    var flashMe = this.circleArray[this.flashMatrix.y][this.flashMatrix.x];
    flashMe.attr({r:1.8});
  }

};
