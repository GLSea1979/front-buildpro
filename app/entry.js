'use strict';

require('./scss/main.scss');

const path = require('path');
const angular = require('angular');
const camelcase = require('camelcase');
const pascalcase = require('pascalcase');
const uiRouter = require('angular-ui-router');
const ngAnimate = require('angular-animate');
const ngTouch = require('angular-touch');
const ngMessages = require('angular-messages');
const uiBootstrap = require('angular-ui-bootstrap');
const ngFileUpload = require('ng-file-upload');

const buildpro = angular.module('buildpro', [ngTouch, ngAnimate, uiRouter, uiBootstrap, ngMessages, ngFileUpload]);

let context = require.context('./config/', true, /\.js$/);

context.keys().forEach( key => {
  buildpro.config(context(key));
});

context = require.context('./view/', true, /\.js$/);

context.keys().forEach( key => {
  let name = pascalcase(path.basename(key, '.js'));
  let module = context(key);
  buildpro.controller(name, module);
});

context = require.context('./service/', true, /\.js$/);

context.keys().forEach( key => {
  let name = camelcase(path.basename(key, '.js'));
  let module = context(key);
  buildpro.service(name, module);
});

context = require.context('./component/', true, /\.js$/);

context.keys().forEach( key => {
  let name = camelcase(path.basename(key, '.js'));
  let module = context(key);
  buildpro.component(name, module);
});

context = require.context('./filter/', true, /\.js$/);

context.keys().forEach( key => {
  let name = camelcase(path.basename(key, '.js'));
  let module = context(key);
  buildpro.filter(name, module);
});
