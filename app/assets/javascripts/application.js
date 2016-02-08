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
      spacing: 4
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

  // if (clr<=360 && clr>=240){
  // 	clr2 = 241;
  // }
  // else if (clr<240 && clr>=120){
  // 	clr2 = 55;
  // }
  // else{
  // 	clr2 = 0;
  // }

  // var _hsl = {
  //   s: 70,
  //   l: Math.floor(Math.random() * 100)
  // };

  $(_res.el).find('figure').css({
    // 'background-color': 'hsl(' + 233 + ',' + _hsl.s + '%,' + _hsl.l + '%)'
      //,'opacity': 0.5
  });

  return _res;
};

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