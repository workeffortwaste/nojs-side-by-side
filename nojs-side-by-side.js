(function () {
  var style = document.createElement('style')
  style.innerHTML = `
  .side-by-side{
    position:absolute;
    top:0;
    width: 50vw;
    height:100vh!important;
    z-index:999;
  }
  .side-by-side-nojs {
    left:50%;
  }
  .side-by-side-js {
    left:0;
  }
  .side-by-side-label {
    padding: 10px;
    background-color: black;
    color: white;
    font-size: 12px;
    position: absolute;
    z-index: 1000;
    margin: 10px;
    opacity: 0.7;
    text-transform: uppercase;
    font-family: 'Arial';
    pointer-events: none;
  }
  .no_js{
    left:50vw;
  }
  body{
    display:none!important;
    overflow:hidden!important;
  }
  `
  document.head.appendChild(style)

  var js = document.createElement('div')
  js.setAttribute('class', 'js side-by-side-label')
  js.innerText = 'JavaScript Enabled'
  document.body.insertAdjacentElement('afterend', js)

  var no_js = document.createElement('div')
  no_js.setAttribute('class', 'no_js side-by-side-label')
  no_js.innerText = 'JavaScript Disabled'
  document.body.insertAdjacentElement('afterend', no_js)

  var iframe_nojs = document.createElement('iframe')
  iframe_nojs.setAttribute('class', 'side-by-side-nojs side-by-side')
  iframe_nojs.src = window.location.href
  iframe_nojs.frameBorder = 0
  iframe_nojs.sandbox = 'allow-forms allow-pointer-lock allow-popups allow-same-origin allow-top-navigation'
  document.body.insertAdjacentElement('afterend', iframe_nojs)

  var iframe_js = document.createElement('iframe')
  iframe_js.setAttribute('class', 'side-by-side-js side-by-side')
  iframe_js.src = window.location.href
  iframe_js.frameBorder = 0
  document.body.insertAdjacentElement('afterend', iframe_js)
})()
