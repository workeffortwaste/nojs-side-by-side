# NoJS Side-by-Side

A simple bookmarklet that displays the current URL with and without JavaScript side by side in the current window.

## Bookmarklet

To install the bookmarklet either:
* Drag the link below into your bookmarks bar.

[NoJS Side-by-Side](javascript:void%20function(){javascript:!function(){var%20a=document.createElement(%22style%22);a.innerHTML=%22\n%20%20.side-by-side{\n%20%20%20%20position:absolute;\n%20%20%20%20top:0;\n%20%20%20%20width:%2050vw;\n%20%20%20%20height:100vh!important;\n%20%20%20%20z-index:999;\n%20%20}\n%20%20.side-by-side-nojs%20{\n%20%20%20%20left:50%;\n%20%20}\n%20%20.side-by-side-js%20{\n%20%20%20%20left:0;\n%20%20}\n%20%20.side-by-side-label%20{\n%20%20%20%20padding:%2010px;\n%20%20%20%20background-color:%20black;\n%20%20%20%20color:%20white;\n%20%20%20%20font-size:%2012px;\n%20%20%20%20position:%20absolute;\n%20%20%20%20z-index:%201000;\n%20%20%20%20margin:%2010px;\n%20%20%20%20opacity:%200.7;\n%20%20%20%20text-transform:%20uppercase;\n%20%20%20%20font-family:%20'Arial';\n%20%20%20%20pointer-events:%20none;\n%20%20}\n%20%20.no_js{\n%20%20%20%20left:50vw;\n%20%20}\n%20%20body{\n%20%20%20%20display:none!important;\n%20%20%20%20overflow:hidden!important;\n%20%20}\n%20%20%22,document.head.appendChild(a);var%20b=document.createElement(%22div%22);b.setAttribute(%22class%22,%22js%20side-by-side-label%22),b.innerText=%22JavaScript%20Enabled%22,document.body.insertAdjacentElement(%22afterend%22,b);var%20c=document.createElement(%22div%22);c.setAttribute(%22class%22,%22no_js%20side-by-side-label%22),c.innerText=%22JavaScript%20Disabled%22,document.body.insertAdjacentElement(%22afterend%22,c);var%20d=document.createElement(%22iframe%22);d.setAttribute(%22class%22,%22side-by-side-nojs%20side-by-side%22),d.src=window.location.href,d.frameBorder=0,d.sandbox=%22allow-forms%20allow-pointer-lock%20allow-popups%20allow-same-origin%20allow-top-navigation%22,document.body.insertAdjacentElement(%22afterend%22,d);var%20e=document.createElement(%22iframe%22);e.setAttribute(%22class%22,%22side-by-side-js%20side-by-side%22),e.src=window.location.href,e.frameBorder=0,document.body.insertAdjacentElement(%22afterend%22,e)}()}();)

* Copy and paste the code below into a bookmark.
```javascript
javascript:!function(){var e=document.createElement("style");e.innerHTML="\n  .side-by-side{\n    position:absolute;\n    top:0;\n    width: 50vw;\n    height:100vh!important;\n    z-index:999;\n  }\n  .side-by-side-nojs {\n    left:50%;\n  }\n  .side-by-side-js {\n    left:0;\n  }\n  .side-by-side-label {\n    padding: 10px;\n    background-color: black;\n    color: white;\n    font-size: 12px;\n    position: absolute;\n    z-index: 1000;\n    margin: 10px;\n    opacity: 0.7;\n    text-transform: uppercase;\n    font-family: 'Arial';\n    pointer-events: none;\n  }\n  .no_js{\n    left:50vw;\n  }\n  body{\n    display:none!important;\n    overflow:hidden!important;\n  }\n  ",document.head.appendChild(e);var n=document.createElement("div");n.setAttribute("class","js side-by-side-label"),n.innerText="JavaScript Enabled",document.body.insertAdjacentElement("afterend",n);var t=document.createElement("div");t.setAttribute("class","no_js side-by-side-label"),t.innerText="JavaScript Disabled",document.body.insertAdjacentElement("afterend",t);var i=document.createElement("iframe");i.setAttribute("class","side-by-side-nojs side-by-side"),i.src=window.location.href,i.frameBorder=0,i.sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-top-navigation",document.body.insertAdjacentElement("afterend",i);var o=document.createElement("iframe");o.setAttribute("class","side-by-side-js side-by-side"),o.src=window.location.href,o.frameBorder=0,document.body.insertAdjacentElement("afterend",o)}();
```

## Known Issues

Sites with X-Frame-Options: deny header will not work with this bookmarklet.

## Contact

Questions? Contact me on Twitter [@defaced](https://www.twitter.com/defaced)
