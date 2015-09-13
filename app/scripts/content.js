'use strict';

// chrome.browserAction.setBadgeText({text: '\'Allo'});
var runShareJs = function() {
  alert('CALLLLLLLED!!!WEEEKJLGDHJS');
  var elem = document.activeElement;
  console.log(elem);
  var s = new BCSocket('https://824c310b.ngrok.io', {reconnect: true});
  console.log(s);
  var sjs = new window.sharejs.Connection(s);
  console.log(sjs);
  var doc = sjs.get('users', 'seph');
  alert('>>>>>>', doc);
  console.log(doc);
  doc.subscribe();
  doc.whenReady(function() {
    if (!doc.type) doc.create('text');
    if (doc.type && doc.type.name === 'text')
      doc.attachTextarea(elem);
  });
};

chrome.extension.onMessage.addListener(function(message, sender, callback) {
  if (message.functiontoInvoke == 'runShareJs') {
    runShareJs();
  }
});
