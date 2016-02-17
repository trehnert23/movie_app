// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

/*--------------------------------------*/
/*         Home Page Annimation         */
/*--------------------------------------*/



var scene = null,
  mX = 0,
  mY = 0,
  rY = null,
  rX = null;

var TileSpace = {
  opts: {
    dims: {
      width: 162,
      height: 240,
      spacing: 15
    },
    columns: 15,
    rows: 13,
    count: 120,
    holder_selector: '#scene'
  },
  holder: null,
  tiles: [],
  initialize: function($opts) {
    ts = TileSpace;
    ts.holder = $(ts.opts.holder_selector);
    $.extend(ts.opts, $opts);
    ts.createTiles();
    var hWidth = ((ts.opts.dims.width * ts.opts.columns) + (ts.opts.dims.spacing * ts.opts.columns - 1));
    var hHeight = (ts.opts.dims.height * ts.opts.rows) + (ts.opts.dims.spacing * ts.opts.rows - 1);
    ts.holder.css({
      width: hWidth,
      height: hHeight,
      marginLeft: 0 - (hWidth * .5) + 'px',
      //marginTop: 0-(hHeight *.5) + 'px',
      left: "50%",
      top: "50%",
      position: 'absolute'
    });

  },
  createTiles: function() {
    for (var ii = 0; ii < ts.opts.count; ii++) {
      var newTile = Tile(ii);
      var tileIdx = ts.tiles.push(newTile);
      ts.holder.append(newTile.el);
    };
    $.each(ts.tiles, function(idx, val) {
      setTimeout(function() {
        $(val.el).animate({
            top: val.y + 'px',
            left: val.x + 'px'
          },
          700 + Math.random() * 500);
      }, Math.random() * 1000);
    });
  }
};

var Tile = function($id) {
  var _res = {
    el: null,
    idx: $id,
    x: null,
    y: null
  };
  var _el = $('<div/>');
  var _row = Math.floor($id / ts.opts.columns);
  var _col = $id % ts.opts.columns;
  ts.opts.rows = _row;

  _el.append(
    "<div>" +
    "<figure class='cube front'></figure>" +
    // "<figure class='cube back'></figure>" +
    // "<figure class='cube left'></figure>" +
    // "<figure class='cube right'></figure>" +
    // "<figure class='cube top'></figure>" +
    // "<figure class='cube bottom'></figure>" +
    "</div>"
  );

  _res.el = _el;

  var _deg = ($id / ts.opts.count * 360).toFixed(0);
  var dW = 2000;
  _res.el.css({
    left: ((dW / 2) + Math.cos(_deg) * dW) + 'px',
    top: ((dW / 2) + Math.sin(_deg) * dW) + 'px'
  });

  _res.x = (ts.opts.dims.width + ts.opts.dims.spacing) * _col;
  _res.y = (ts.opts.dims.height + ts.opts.dims.spacing) * _row;

  _res.el.addClass('tile');

  var bground = Math.floor(Math.random() * 100)
  // var clr2 = 0;

  if (bground<=100 && bground>95){
  	$(_res.el).find('figure').css({
  	    'background-image': 'url("http://s3.amazonaws.com/codecademy-content/courses/learn-rails/img/oceans-11.jpg")'
  	  });
  }
  else if (bground<=95 && bground>90){
  	$(_res.el).find('figure').css({
  	    'background-image': 'url("http://s3.amazonaws.com/codecademy-content/courses/learn-rails/img/the-perfect-storm.jpg")'
  	  });
  }
  else if (bground<=90 && bground>85){
  	$(_res.el).find('figure').css({
  	    'background-image': 'url("http://s3.amazonaws.com/codecademy-content/courses/learn-rails/img/contagion.jpg")'
  	  });
  }
  else if (bground<=85 && bground>80){
  	$(_res.el).find('figure').css({
  	    'background-image': 'url("http://s3.amazonaws.com/codecademy-content/courses/learn-rails/img/the-departed.jpg")'
  	  });
  }
  else if (bground<=80 && bground>75){
  	$(_res.el).find('figure').css({
  	    'background-image': 'url("http://s3.amazonaws.com/codecademy-content/courses/learn-rails/img/inception.jpg")'
  	  });
  }
  else if (bground<=75 && bground>70){
  	$(_res.el).find('figure').css({
  	    'background-image': 'url("http://s3.amazonaws.com/codecademy-content/courses/learn-rails/img/dark-knight-rises.jpg")'
  	  });
  }
  else if (bground<=70 && bground>65){
  	$(_res.el).find('figure').css({
  	    'background-image': 'url("http://s3.amazonaws.com/codecademy-content/courses/learn-rails/img/iron-man.jpg")'
  	  });
  }
  else if (bground<=65 && bground>60){
  	$(_res.el).find('figure').css({
  	    'background-image': 'url("http://s3.amazonaws.com/codecademy-content/courses/learn-rails/img/sherlock-holmes.jpg")'
  	  });
  }
  else if (bground<=60 && bground>55){
  	$(_res.el).find('figure').css({
  	    'background-image': 'url("http://ecx.images-amazon.com/images/I/917iZAoHaVL._SL1500_.jpg")'
  	  });
  }
  else if (bground<=55 && bground>50){
  	$(_res.el).find('figure').css({
  	    'background-image': 'url("https://latestmovieposters.files.wordpress.com/2015/06/jurassic-world-2015-movie-poster.jpg")'
  	  });
  }
  else if (bground<=50 && bground>45){
  	$(_res.el).find('figure').css({
  	    'background-image': 'url("http://www.fashiongonerogue.com/wp-content/uploads/2014/12/insurgent-2015-movie-posters01.jpg")'
  	  });
  }
  else if (bground<=45 && bground>40){
  	$(_res.el).find('figure').css({
  	    'background-image': 'url("http://static.srcdn.com/slir/w786-h1179-q90-c786:1179/wp-content/uploads/Star-Wars-The-Force-Awakens-Movie-Poster.jpg")'
  	  });
  }
  else if (bground<=40 && bground>35){
  	$(_res.el).find('figure').css({
  	    'background-image': 'url("http://www.movienewz.com/wp-content/uploads/2015/06/everest_movie_poster_2.jpg")'
  	  });
  }
  else if (bground<=35 && bground>30){
  	$(_res.el).find('figure').css({
  	    'background-image': 'url("http://thesefantasticworlds.com/wp-content/uploads/2015/01/fantasic-four-2015-movie-poster.jpg")'
  	  });
  }
  else if (bground<=30 && bground>25){
  	$(_res.el).find('figure').css({
  	    'background-image': 'url("http://madmovieman.com/wp-content/uploads/2015/10/Poster-Pixels.jpg")'
  	  });
  }
  else if (bground<=25 && bground>20){
  	$(_res.el).find('figure').css({
  	    'background-image': 'url("http://www.theshiznit.co.uk/media/2015/January/truth2015/imitation-game-large.jpg")'
  	  });
  }
  else if (bground<=20 && bground>15){
  	$(_res.el).find('figure').css({
  	    'background-image': 'url("http://www.printmag.com/wp-content/uploads/jupiter_ascending_ver3_xlg.jpg")'
  	  });
  }
  else if (bground<=15 && bground>10){
  	$(_res.el).find('figure').css({
  	    'background-image': 'url("http://www.movienewz.com/img/gallery/martian/posters/martian_movie_poster_1.jpg")'
  	  });
  }
  else{
  	$(_res.el).find('figure').css({
  	    'background-image': 'url("http://s3.amazonaws.com/codecademy-content/courses/learn-rails/img/closer.jpg")'
  	  });
  }



  return _res;
};


/*--------------------------------------*/
/*         Setting Movie Pages          */
/*--------------------------------------*/




function adjustScene() {
  if (mX == 0) return;
  _rX = -5 + ((mY / $(window).height()) * 10);
  _rY = -5 + ((mX / $(window).width()) * 10);

  if (rX == null) rX = _rX;
  if (rY == null) rY = _rY;

  rX = rX * .8 + _rX * .2;
  rY = rY * .8 + _rY * .2;

  rX = rX.toFixed(2);
  rY = rY.toFixed(2);
  var newcss = 'rotateX(' + rX + 'deg) rotateY(' + -rY + 'deg)';
  scene.css({
    '-webkit-transform': newcss,
    '-o-transform': newcss,
    '-moz-transform': newcss,
    '-ms-transform': newcss
  });

}

$(function() {
  scene = $('#scene');

  TileSpace.initialize();
  $('html').mousemove(function(e) {
    mX = e.pageX;
    mY = e.pageY;
  });

  setInterval(adjustScene, 33);
});

(function($, self) {

  if (!$ || !self) {
    return;
  }

  for (var i = 0; i < self.properties.length; i++) {
    var property = self.properties[i],
      camelCased = StyleFix.camelCase(property),
      PrefixCamelCased = self.prefixProperty(property, true);

    $.cssProps[camelCased] = PrefixCamelCased;
  }

})(window.jQuery, window.PrefixFree);
