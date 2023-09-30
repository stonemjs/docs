---
title: Deployment
---

Deploying a Stone.js application is similar to deploying a standard Node.js application. You need `Node.js >= 18` installed on your server.

Stone.js utilizes advanced features not supported by current JavaScript engines. 
Therefore, you need to build and bundle the project, performing tree-shaking to produce a single lightweight, 
portable artifact that is independent of `node_modules` and ready for deployment anywhere.

## Create the Production Build

Generate the production build by running:

```sh
npm run build
```

The production build will be available in `dist/stone.mjs`. This build can be deployed anywhere Node.js is installed. 

To run the build:

```sh
node stone.mjs
```

## Serverless Deployment

To deploy on a FaaS platform like AWS Lambda, you need an adapter.

### AWS Lambda

1. Install the AWS Lambda adapter:

```sh
npm i @stone-js/aws-lambda-adapter
```

2. Configure your application to use the AWS Lambda adapter:

::: code-tabs#js
@tab:active JavaScript

```js
// app/Application.mjs
import { StoneApp } from '@stone-js/core/decorators'
import { AwsLambdaHttpAdapter } from '@stone-js/aws-lambda-adapter/decorators'

@StoneApp()
@AwsLambdaHttpAdapter({ default: true })
export class Application {
  handle (event) {}
}
```

@tab TypeScript

```ts
// app/Application.ts
import { StoneApp } from '@stone-js/core/decorators'
import { IncomingEvent, OutgoingResponse } from '@stone-js/core'
import { AwsLambdaHttpAdapter } from '@stone-js/aws-lambda-adapter/decorators'

@StoneApp()
@AwsLambdaHttpAdapter({ default: true })
export class Application {
  handle (event: IncomingEvent): OutgoingResponse {}
}
```
:::

3. Create the production build:

```sh
npm run build
```

4. Upload `stone.mjs` to your Lambda function, configure the handler to `stone.app`, and set environment variables if needed in the Lambda configuration section.

For more information and customization options, please refer to the adapter's documentation.

## Server Deployment

To deploy on a Node.js server:

1. Install and configure the Node.js adapter:

::: code-tabs#js
@tab:active JavaScript

```js
// app/Application.mjs
import { StoneApp } from '@stone-js/core/decorators'
import { NodeHttpAdapter } from '@stone-js/node-adapter/decorators'

@StoneApp()
@NodeHttpAdapter({ default: true })
export class Application {
  handle (event) {}
}
```

@tab TypeScript

```ts
// app/Application.ts
import { StoneApp } from '@stone-js/core/decorators'
import { IncomingEvent, OutgoingResponse } from '@stone-js/core'
   import { NodeHttpAdapter } from '@stone-js/node-adapter/decorators'

@StoneApp()
@NodeHttpAdapter({ default: true })
export class Application {
  handle (event: IncomingEvent): OutgoingResponse {}
}
```
:::

2. Create the production build:

```sh
npm run build
```

3. Deploy the `stone.mjs` file on your Node.js server and start it:

```sh
node stone.mjs
```

### Using Nginx as a Reverse Proxy

Node.js applications are commonly deployed behind a reverse proxy server such as Nginx. 
This configuration allows Nginx to handle incoming traffic on ports 80 and 443, forwarding it to your Stone.js application. 

Here is the configuration you can use, ensuring to replace the values inside the angle brackets <>:

```nginx
server {
  listen 80;
  listen [::]:80;

  server_name <YOUR_DOMAIN>;

  location / {
    proxy_pass http://localhost:<STONE_PORT>;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_cache_bypass $http_upgrade;
  }
}
```

### Using PM2

To start the production server, execute the `node stone.mjs` file. 
However, for optimal performance and reliability, it is highly recommended to use a process manager like [PM2](https://pm2.keymetrics.io/).

PM2 offers several advantages:

- **Background Execution**: Run your application in the background without blocking the current terminal session.
- **Automatic Restarts**: PM2 will automatically restart your application if it crashes while handling requests.
- **Cluster Mode**: Easily run your application in cluster mode for improved scalability and resilience.

Here is an example PM2 ecosystem file to get you started:

```js
// ecosystem.config.js
module.exports = {
  apps: [{
    name: 'stone-app',
    script: './stone.mjs',
    instances: 'max',
    exec_mode: 'cluster',
    autorestart: true,
    env: {
      NODE_ENV: "production"
    }
  }]
};
```

Start the Application Using the Ecosystem File:

```sh
pm2 start ecosystem.config.js
```

Using PM2 with this configuration ensures your Stone.js application operates efficiently and remains robust in a production environment.

## Container Deployment with Docker

If you are deploying your Stone.js application with Docker, you can create a Docker image using the following Dockerfile:

```Dockerfile
FROM node:latest
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 8080
CMD ["node", "dist/stone.mjs"]
```

This Dockerfile provides a blueprint for building a Docker image that packages your Stone.js application, ready for deployment in any Docker-supported environment.

These detailed steps should help you successfully deploy your Stone.js application in various environments. 
For more specific configuration options and advanced settings, refer to the documentation of the respective tools and adapters.