---
containerClass: api-page
home: true
title: API
heroText: false
tagline: false

highlights:
  - header: Stone.js API Documentation
    description: >
      Stone.js is a modular, continuum-aligned framework designed for building modern, scalable, and universal JavaScript/TypeScript applications.  
      This page serves as the central index for accessing the **API documentation** of every core and peripheral module in the Stone.js ecosystem.

      Each module below can be used independently or combined seamlessly. Explore the links to understand the responsibilities, behavior, and integration of each package within the Continuum Architecture.

    features:
      - title: Core
        icon: layer-group
        details: Foundation of the framework — defines events, lifecycle, context, blueprints, and core abstractions
        link: ./core/

      - title: Service Container
        icon: cube
        details: Lightweight dependency injection system for managing services and contextual bindings
        link: ./service-container/

      - title: Env
        icon: leaf
        details: Safe and abstracted access to environment variables across platforms and runtimes
        link: ./env/

      - title: Config
        icon: sliders
        details: Runtime configuration management system built to work with blueprints and contextual environments
        link: ./config/

      - title: Pipeline
        icon: timeline
        details: Composable and introspectable middleware engine for processing data and requests across dimensions
        link: ./pipeline/

      - title: Filesystem
        icon: folder-open
        details: File handling utilities built to work seamlessly in local and cloud-based environments
        link: ./filesystem/

      - title: HTTP Core
        icon: network-wired
        details: Universal HTTP primitives (IncomingEvent, OutgoingResponse, cookies, CORS, etc.)
        link: ./http-core/

      - title: Browser Core
        icon: globe
        details: Runtime context and API bindings for the browser integration layer
        link: ./browser-core/

      - title: Node HTTP Adapter
        icon: plug
        details: Node.js adapter that transforms native HTTP requests into Stone.js events
        link: ./node-http-adapter/

      - title: AWS Lambda HTTP Adapter
        icon: cloud
        details: HTTP-compatible adapter for AWS Lambda environments with API Gateway
        link: ./aws-lambda-http-adapter/

      - title: AWS Lambda Adapter
        icon: cloud-upload-alt
        details: Raw AWS Lambda adapter for non-HTTP event sources and integration contexts
        link: ./aws-lambda-adapter/

      - title: Browser Adapter
        icon: desktop
        details: Adapter for browser-based runtime execution and event translation
        link: ./browser-adapter/

      - title: Node CLI Adapter
        icon: keyboard
        details: Adapter for handling command-line input as events and integrating CLI applications
        link: ./node-cli-adapter/

      - title: Router
        icon: sitemap
        details: Extensible routing engine for dynamic route resolution, middleware handling, and event dispatch
        link: ./router/

      - title: Use React
        icon: react
        details: Integration between React and Stone.js, including SSR, hydration, and head management
        link: ./use-react/

      - title: CLI
        icon: terminal
        details: CLI tooling to scaffold, build, and manage Stone.js applications from the terminal
        link: ./cli/
---
