'use strict';

chrome.runtime.onInstalled.addListener(details => {
  console.log('previousVersion', details.previousVersion);
});

const clickHandler = function() {
  console.log('heyyyyyyyyyyyy');
};

chrome.contextMenus.create({
  title: 'Mirror This',
  contexts: ['editable'],
  onclick: clickHandler,
});

console.log('\'Allo \'Allo! Event Page for Browser Action');
