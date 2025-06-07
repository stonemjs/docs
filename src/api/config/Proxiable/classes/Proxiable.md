[**Config Documentation**](../../README.md)

***

[Config Documentation](../../README.md) / [Proxiable](../README.md) / Proxiable

# Class: `abstract` Proxiable

Defined in: [Proxiable.ts:9](https://github.com/stonemjs/config/blob/ade524096d0b7ceacdb60a4149ff30c957103be1/src/Proxiable.ts#L9)

Class representing a Proxiable.

This class allows instances to be wrapped in a Proxy, enabling custom behaviors for property access, assignment, etc.

## Author

Mr. Stone <evensstone@gmail.com>

## Extended by

- [`Config`](../../Config/classes/Config.md)

## Constructors

### Constructor

> **new Proxiable**(`handler`): `Proxiable`

Defined in: [Proxiable.ts:16](https://github.com/stonemjs/config/blob/ade524096d0b7ceacdb60a4149ff30c957103be1/src/Proxiable.ts#L16)

Creates a Proxiable instance wrapped in a Proxy.

#### Parameters

##### handler

`ProxyHandler`\<`Proxiable`\>

A trap object for the proxy, which defines custom behavior for fundamental operations (e.g., property lookup, assignment, etc.).

#### Returns

`Proxiable`

A new proxy object for this instance.
