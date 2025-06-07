---
containerClass: api-page
home: true
title: Packages
heroText: false
tagline: false

highlights:
  - header: Stone.js Packages

    description: >
      This section contains direct access to **package-level documentation** for various tools, adapters, and core utilities used in the Stone.js ecosystem.  
      These packages are essential to how Stone.js runs across environments, from the browser to Node.js, AWS Lambda to CLI tools.

      Each package listed here links to its raw `README.md`, maintained at the source level.  
      Use this section to go deeper into advanced use cases, configuration options, and specific integration scenarios **not yet covered** in the core API documentation.

      This separation keeps the main documentation clean and structured, while still giving you full access to everything under the hood.

    features:
      - title: Node HTTP Adapter
        icon: plug
        details: Converts native Node.js HTTP requests into Stone.js IncomingEvents for server environments
        link: ./node-http-adapter/

      - title: AWS Lambda HTTP Adapter
        icon: cloud
        details: Stone.js on AWS Lambda with full HTTP compatibility
        link: ./aws-lambda-http-adapter/

      - title: AWS Lambda Adapter
        icon: cloud-upload-alt
        details: Use Stone.js with raw AWS Lambda events — no HTTP needed
        link: ./aws-lambda-adapter/

      - title: Browser Adapter
        icon: desktop
        details: Brings Stone.js to the browser, convert browser routing events into Stone.js IncomingEvents
        link: ./browser-adapter/

      - title: Node CLI Adapter
        icon: keyboard
        details: Allows CLI apps to trigger event handlers as part of the Stone.js continuum
        link: ./node-cli-adapter/
---
