'use strict';

// chrome.browserAction.setBadgeText({text: '\'Allo'});
var runShareJs = function() {
  var elem = document.activeElement;
  var s = new BCSocket('https://824c310b.ngrok.io/channel', {reconnect: true});
  var sjs = new window.sharejs.Connection(s);
  var doc = sjs.get('users', 'seph');
  doc.subscribe();
  doc.whenReady(function() {
    if (!doc.type) doc.create('text');
    if (doc.type && doc.type.name === 'text')
      doc.attachTextarea(elem);
  });

  alert('Mirror link copied to clipboard!');
};

chrome.extension.onMessage.addListener(function(message, sender, callback) {
  if (message.functiontoInvoke == 'runShareJs') {
    runShareJs();
  }
});
