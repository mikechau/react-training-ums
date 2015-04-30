'use strict';

// put this in your test directory and smoke it (include it with your tests or test recursively)

process.env.NODE_ENV = 'test';

// globals
global.babel = require('babel/register')({ stage: 0 });
global.expect = require('chai').expect;
global.React = require('react/addons');
global.sinon = require('sinon');
global.nock = require('nock');
global.TestUtils = React.addons.TestUtils;
global.mockery = require('mockery');
global.ReactTools = require('react-tools');
global.ReactStub = React.createClass({
  displayName: 'StubClass',
  render: function() {
    return null;
  }
});
global.jsdom = require('mocha-jsdom');
global.initMockery = require('./mockery-initializer');

global.DEBUG = false;
global.BROWSER = false;

global.JSON_CONTENT_TYPE = {'Content-Type': 'application/json'};
global.API_SERVER = 'http://localhost:3000';

