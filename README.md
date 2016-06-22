<p align="center"><img src="https://cloud.githubusercontent.com/assets/13259/13648628/3af893a8-e5ff-11e5-9b24-5cb32671f799.png" width="150"></p>

# node-lambda-babel-template ![npm](https://img.shields.io/npm/v/node-lambda-babel-template.svg) ![dependencies](https://david-dm.org/flesch/node-lambda-babel-template.svg)

This project adds [webpack](http://webpack.github.io/) and [Babel](https://babeljs.io/) to **@motdotla**'s [node-lambda-template](https://github.com/motdotla/node-lambda-template) so you can run the lastest version of Javascript on [AWS Lambda](http://aws.amazon.com/lambda/).

[babel-polyfill](http://babeljs.io/docs/usage/polyfill/) and [babel-preset-es2015](http://babeljs.io/docs/plugins/preset-es2015/) are automatically included, but you can easily add additional presets and plugins.

[webpack](http://webpack.github.io/) transforms `index.js` outputting to `dist/index.js`, which is then pushed up to [AWS Lambda](http://aws.amazon.com/lambda/) with [node-lambda](https://github.com/motdotla/node-lambda).

## Getting Started

To get started, download the latest template files:

```bash
DIR=node-lambda-babel-template && mkdir $DIR && curl -L -o- $(curl https://ribjyr1g9l.execute-api.us-east-1.amazonaws.com/latest/) | tar zxf - --directory $DIR --strip-components=1 && cd $DIR
```

<https://ribjyr1g9l.execute-api.us-east-1.amazonaws.com/latest/> will respond with the `tarball_url` of the `latest` release <a href="#ribjyr1g9l">(source)</a>. To download a specific release, use the following:

```bash
$ DIR=node-lambda-babel-template VERSION=2.1.0 && mkdir $DIR && curl -o- https://codeload.github.com/flesch/node-lambda-babel-template/tar.gz/v$VERSION | tar zxf - --directory $DIR --strip-components=1 && cd $DIR
```

The template will be downloaded and extracted to what you define as `$DIR` (defaulting to `node-lambda-babel-template`). Update `DIR=node-lambda-babel-template` to change this.

Or clone this repository and remove the `.git` folder.

```bash
$ git clone --depth 1 https://github.com/flesch/node-lambda-babel-template.git && cd node-lambda-babel-template && rm -rf .git
```

Next, install the dependencies.

```bash
$ npm install
```

The `postinstall` npm hook will run `node-lambda setup`, giving you the `context.json`, `event.json`, `.env`, and `deploy.env` files.

See <https://github.com/motdotla/node-lambda#setup> for more details.

**Note:** `AWS_ENVIRONMENT` and `AWS_HANDLER` are defined in the npm `scripts` in `package.json`, not `.env`.

## Developing

[webpack](http://webpack.github.io/) will watch `index.js` and transform it as `dist/index.js` while you make changes. 

```bash
$ npm start
```

Modify `webpack.config.js` and `.babelrc` to add addtional plugins and presets.

You can **test** your changes with by running:

```bash
$ npm test
```

Modify `event.json` to mock your event.

## Deploying

To deploy your compiled `index.js` to [AWS Lambda](http://aws.amazon.com/lambda/), simply run:

```bash
$ npm run deploy
```

The `predeploy` npm hook will recompile `index.js` using Webpack in production mode. `node-lambda deploy` is then executed, including `deploy.env`.

## See Also

* <https://github.com/motdotla/node-lambda>
* <https://github.com/motdotla/node-lambda-template>
* <http://kennbrodhagen.net/2015/12/06/how-to-create-a-request-object-for-your-lambda-event-from-api-gateway/>

### <a name="ribjyr1g9l">Latest Release Download</a>

<https://ribjyr1g9l.execute-api.us-east-1.amazonaws.com/latest/> uses is an AWS Lambda function created with this template (:dog2: meta) that pulls the latest release's `tarball_url` from the GitHub API. The full source is here:

```javascript
'use strict';
import { get } from 'gh-got';
export default (event, context, callback) => {
  get('repos/flesch/node-lambda-babel-template/releases/latest').then(res => {
    let { tarball_url } = res.body;
    callback(null, tarball_url);
  });
}
```

```bash
$ curl https://ribjyr1g9l.execute-api.us-east-1.amazonaws.com/latest/
```


## License

(The MIT License)

Copyright (c) 2016 [John Flesch](http://fles.ch).

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
