/*! d1gallery https://github.com/vvvkor/d1gallery */
/* Lighweight image gallery */

//.gallery a.pic
if(typeof module !== "undefined") var d1 = require('d1css');
(function () {
var main = new(function () {

  "use strict";

  this.name = 'gallery';
  
  this.opt = {
    hashCancel: '#cancel',
    idPrefix: 'pic',
    num: true,
    qsGallery: '.gallery',
    qsLinks: 'a.pic'
  };
  
  this.seq = 0;
  
  this.init = function (opt) {
    var i;
    for (i in opt) this.opt[i] = opt[i];
    d1.b('', this.opt.qsGallery, '', this.prepare.bind(this));
    d1.b('', [window], 'keydown', this.key.bind(this));
    d1.b('', [window], 'hashchange', this.loadTarget.bind(this));
    if(location.hash) this.loadTarget();
  }
  
  this.loadTarget = function() {
    var n = d1.q(location.hash, 0);
    if(n) {
      this.loadImg(n);
      this.loadImg(d1.q(n.hash, 0));
    }
  }
  
  this.loadImg = function(n){
    if(n && n.vImg){
      n.style.backgroundImage = 'url("' + n.vImg + '")';
      n.vImg = '';
    }
  }
  
  this.prepare = function (n) {
    var g = d1.ins('div', '', {className: d1.opt.cGallery});
    var a = n.querySelectorAll(this.opt.qsLinks);
    var z = a.length;
    for(var i=0; i<z; i++) if(!a[i].vDone) {
      this.seq++;
      var p = d1.ins('a', '', {
          id: this.opt.idPrefix + this.seq,
          href: '#' + this.opt.idPrefix + (this.seq + 1 - (i==z-1 ? z : 0))
          }, g);
      //p.style.setProperty('--img', 'url("' + a[i].getAttribute('href') + '")');
      //p.style.backgroundImage = 'url("' + a[i].getAttribute('href') + '")';//preload all
      p.vLink = a[i].getAttribute('href');//real link
      p.vImg = a[i].getAttribute('href');//preload prev & next
      p.setAttribute('data-info', (this.opt.num ? (i+1)+'/'+z+(a[i].title ? ' - ' : '') : '') + (a[i].title || ''));
      a[i].href = '#' + p.id;
      a[i].vDone = 1;
    }
    d1.ins('a', d1.i('close'), {href: this.opt.hashCancel, className: d1.opt.cClose}, g);
    d1.b(g, 'a[id]', 'click', d1.gotoPrev);
    document.querySelector('body').appendChild(g);
  }

   this.key = function(n, e) {
    if(location.hash) {
      var a = document.getElementById(location.hash.substr(1));
      if(a && a.hash){
        var k = e.keyCode;
        if (k==37 || k==38) d1.gotoPrev(a);
        else if (k==39 || k==40) location.hash = a.hash;//a.click();
        else if(k==8 && a.vLink) location.href = a.vLink;
      }
    }
  }

  d1.plug(this);

})();

  if (typeof module !== "undefined") module.exports = main;
  else if (window) d1gallery = main;
})();