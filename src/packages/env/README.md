---
title: Stone Env
---

`Stone Env` is a standalone JavaScript/TypeScript library designed to provide easy access to environment 
variables with built-in validation and formatting. It offers a fluent API to retrieve environment variables, 
ensuring that your application's configuration is always correct and reliable. 

With `Stone Env`, you can easily retrieve environment variables as different types, including:

- Strings
- Numbers
- Booleans
- Arrays
- Objects
- JSON
- Enums
- Emails
- URLs
- Hosts

With automatic validation and optional default values, 
`Stone Env` ensures that your environment variables are always accurate and dependable.

You can access your environment variables in both backend and frontend contexts. 
For frontend usage, you'll need to use a `Vite`, `Rollup` or `Webpack` plugin to handle 
the replacement of environment variables at build time. We'll cover this in more detail later.