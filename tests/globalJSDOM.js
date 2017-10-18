const { JSDOM } = require('jsdom');
const jsdom = new JSDOM(
  '<!doctype html><html><body><div id="root"></div></body></html>'
);
const { window } = jsdom;

function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .map(prop => Object.getOwnPropertyDescriptor(src, prop));
  Object.defineProperties(target, props);
}

global.document = window.document;
global.window = window;
global.navigator = {
  userAgent: 'node.js'
};
copyProps(window, global);
