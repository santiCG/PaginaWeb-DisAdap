parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Dthb":[function(require,module,exports) {
function e(){var e=$("#name").val(),s=$("#email").val(),i=$("#msg_subject").val(),o=$("#message").val();$.ajax({type:"POST",url:"php/form-process.php",data:"name="+e+"&email="+s+"&msg_subject="+i+"&message="+o,success:function(e){"success"==e?t():(a(),n(!1,e))}})}function t(){$("#contactForm")[0].reset(),n(!0,"Message Submitted!")}function a(){$("#contactForm").removeClass().addClass("shake animated").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){$(this).removeClass()})}function n(e,t){if(e)var a="h3 text-center tada animated text-success";else a="h3 text-center text-danger";$("#msgSubmit").removeClass().addClass(a).text(t)}$("#contactForm").validator().on("submit",function(t){t.isDefaultPrevented()?(a(),n(!1,"Did you fill in the form properly?")):(t.preventDefault(),e())});
},{}]},{},["Dthb"], null)
//# sourceMappingURL=/contact-form-script.ea751a8b.js.map