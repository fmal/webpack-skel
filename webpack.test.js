'use strict';

var context = require.context('./src', true, /__tests__\/\S+\.js$/)

context.keys().forEach(context);