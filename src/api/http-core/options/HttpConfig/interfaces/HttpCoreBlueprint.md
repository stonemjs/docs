[**HTTP Core Documentation**](../../../README.md)

***

[HTTP Core Documentation](../../../README.md) / [options/HttpConfig](../README.md) / HttpCoreBlueprint

# Interface: HttpCoreBlueprint

Defined in: [src/options/HttpConfig.ts:204](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/options/HttpConfig.ts#L204)

Represents the core HTTP blueprint for the application.

## Extends

- `StoneBlueprint`\<[`IncomingHttpEvent`](../../../IncomingHttpEvent/classes/IncomingHttpEvent.md), [`OutgoingHttpResponse`](../../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md)\>

## Indexable

\[`key`: `string`\]: `unknown`

Allow adding any additional custom properties.
The value of the custom properties can be of any type, depending on user requirements.

## Properties

### stone

> **stone**: [`HttpCoreConfig`](HttpCoreConfig.md)

Defined in: [src/options/HttpConfig.ts:205](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/options/HttpConfig.ts#L205)

Application-level settings, including environment, middleware, logging, and service registration.

#### Overrides

`StoneBlueprint.stone`
