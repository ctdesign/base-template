/* adds .js to <body>
----------------------------------------*/
// to indicate if JS enabled
(function(){
	var html = document.getElementsByTagName('html')[0];
	html.className = html.className.replace( /(?:^|\s)no-js(?!\S)/g , '' ); 
	html.className += ' js'; 
})();

/* cutting the mustard test
----------------------------------------*/
//http://responsivenews.co.uk/post/18948466399/cutting-the-mustard

if('querySelector' in document
&& 'localStorage' in window
&& 'addEventListener' in window) {
  //if modern browser
    var html = document.getElementsByTagName('html')[0];
  html.className += ' enhanced'; //add enhanced class
  
  //load in svg class
  (function flagSVG() {
    var ns = {'svg': 'http://www.w3.org/2000/svg'};
    if(document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1")) {
         html.className += ' svg';
    }
  })();

}

/* iOS orientation fix 
https://github.com/scottjehl/iOS-Orientationchange-Fix
----------------------------------------*/

(function (a) {
    function m() {
        d.setAttribute("content", g), h = !0
    }

    function n() {
        d.setAttribute("content", f), h = !1
    }

    function o(b) {
        l = b.accelerationIncludingGravity, i = Math.abs(l.x), j = Math.abs(l.y), k = Math.abs(l.z), (!a.orientation || a.orientation === 180) && (i > 7 || (k > 6 && j < 8 || k < 8 && j > 6) && i > 5) ? h && n() : h || m()
    }
    var b = navigator.userAgent;
    if (!(/iPhone|iPad|iPod/.test(navigator.platform) && /OS [1-5]_[0-9_]* like Mac OS X/i.test(b) && b.indexOf("AppleWebKit") > -1)) return;
    var c = a.document;
    if (!c.querySelector) return;
    var d = c.querySelector("meta[name=viewport]"),
        e = d && d.getAttribute("content"),
        f = e + ",maximum-scale=1",
        g = e + ",maximum-scale=10",
        h = !0,
        i, j, k, l;
    if (!d) return;
    a.addEventListener("orientationchange", m, !1), a.addEventListener("devicemotion", o, !1)
})(this);