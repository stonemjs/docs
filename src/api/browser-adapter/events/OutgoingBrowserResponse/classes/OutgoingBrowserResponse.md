[**AWS Lambda Adapter Documentation v0.0.2**](../../../README.md)

***

[AWS Lambda Adapter Documentation](../../../modules.md) / [events/OutgoingBrowserResponse](../README.md) / OutgoingBrowserResponse

# Class: OutgoingBrowserResponse

Defined in: [src/events/OutgoingBrowserResponse.ts:8](https://github.com/stonemjs/browser-adapter/blob/2a6ec5410a97b6bc45328cca33b607b5a6b7ed84/src/events/OutgoingBrowserResponse.ts#L8)

## Extends

- `OutgoingResponse`

## Constructors

### new OutgoingBrowserResponse()

> **new OutgoingBrowserResponse**(`options`): [`OutgoingBrowserResponse`](OutgoingBrowserResponse.md)

Defined in: [src/events/OutgoingBrowserResponse.ts:17](https://github.com/stonemjs/browser-adapter/blob/2a6ec5410a97b6bc45328cca33b607b5a6b7ed84/src/events/OutgoingBrowserResponse.ts#L17)

Constructor for OutgoingBrowserResponse.
Initializes headers and cookies based on the provided options.

#### Parameters

##### options

[`OutgoingBrowserResponseOptions`](../interfaces/OutgoingBrowserResponseOptions.md)

Options for the outgoing browser response.

#### Returns

[`OutgoingBrowserResponse`](OutgoingBrowserResponse.md)

#### Overrides

`OutgoingResponse.constructor`

## Properties

### OUTGOING\_BROWSER\_RESPONSE

> `static` **OUTGOING\_BROWSER\_RESPONSE**: `string` = `'stonejs@outgoing_browser_response'`

Defined in: [src/events/OutgoingBrowserResponse.ts:9](https://github.com/stonemjs/browser-adapter/blob/2a6ec5410a97b6bc45328cca33b607b5a6b7ed84/src/events/OutgoingBrowserResponse.ts#L9)
