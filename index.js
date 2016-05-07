'use strict';

import { name, version } from './package.json';

export default (event, context, callback) => {
  console.log('event:', event);
  console.log('context:', context);
  console.log('env:', process.env);
  callback(null, { name, version });
}
