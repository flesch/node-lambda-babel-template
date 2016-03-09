'use strict';

import { name, version } from './package.json';

export default (event, context) => {
  console.log('event:', event);
  console.log('context:', context);
  console.log('env:', process.env);
  context.done(null, { name, version });
}
