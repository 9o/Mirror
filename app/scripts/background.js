'use strict';

chrome.runtime.onInstalled.addListener(function(details) {
  console.log('previousVersion', details.previousVersion);
});

// chrome.browserAction.setBadgeText({text: '\'Allo'})

//
var clickHandler = function(info, tab) {
  alert('ehyyydshjgackdjs');
  alert('item ' + info.menuItemId + ' was clicked');
  alert('info: ' + JSON.stringify(info));
  alert('tab: ' + JSON.stringify(tab));

  //Add all you functional Logic here
  chrome.tabs.query({
    'active': true,
    'currentWindow': true,
  }, function(tabs) {
    alert(tabs);
    chrome.tabs.sendMessage(tabs[0].id, {
      'functiontoInvoke': 'runShareJs',
    });
  });
};

chrome.contextMenus.create({
  title: 'Mirror This',
  contexts: ['editable'],
  onclick: clickHandler,
});

console.log('\'Allo \'Allo! Event Page for Browser Action');

//# sourceMappingURL=background.js.map
