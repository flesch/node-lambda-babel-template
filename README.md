<p align="center"><img src="https://cloud.githubusercontent.com/assets/13259/13648628/3af893a8-e5ff-11e5-9b24-5cb32671f799.png" width="150"></p>

# node-lambda-babel-template ![npm](https://img.shields.io/npm/v/node-lambda-babel-template.svg) ![dependencies](https://david-dm.org/flesch/node-lambda-babel-template.svg)

This project adds [webpack](http://webpack.github.io/) and [Babel](https://babeljs.io/) to **@motdotla**'s [node-lambda-template](https://github.com/motdotla/node-lambda-template) so you can run the lastest version of Javascript on [AWS Lambda](http://aws.amazon.com/lambda/).

[babel-polyfill](http://babeljs.io/docs/usage/polyfill/) and [babel-preset-es2015](http://babeljs.io/docs/plugins/preset-es2015/) are automatically included, but you can easily add additional presets and plugins.

[webpack](http://webpack.github.io/) transforms `index.js` outputting to `dist/index.js`, which is then pushed up to [AWS Lambda](http://aws.amazon.com/lambda/) with [node-lambda](https://github.com/motdotla/node-lambda).

## Getting Started

To get started, download the latest template files:

```bash
$ curl -o- https://io.fles.ch/node-lambda-babel-template/latest | bash
```

> Before running the command above, please take a look at <https://io.fles.ch/node-lambda-babel-template/latest> directly. Piping anything unknown through `bash` can be dangerous!
>
> The install script is created using this: <https://gist.github.com/flesch/8ed6f47942350e858ebd3283e10f8a9b>.


To download a specific release, use the following:

```bash
$ curl -o- https://io.fles.ch/node-lambda-babel-template/v2.1.0 | bash
```

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

You can **test** your changes by running:

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


## License

(The MIT License)

Copyright (c) 2016 [John Flesch](http://fles.ch).

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
