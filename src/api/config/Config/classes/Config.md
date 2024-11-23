[**Config Documentation v0.0.0**](../../README.md) • **Docs**

***

[Config Documentation v0.0.0](../../modules.md) / [Config](../README.md) / Config

# Class: Config\<T\>

Class representing a Config.

## Author

Mr. Stone <evensstone@gmail.com>

## Extends

- [`Proxiable`](../../Proxiable/classes/Proxiable.md)

## Type Parameters

• **T** = `any`

## Constructors

### new Config()

> **new Config**\<`T`\>(`items`): [`Config`](Config.md)\<`T`\>

Create a Config.

#### Parameters

• **items**: [`ConfigItems`](../../definitions/type-aliases/ConfigItems.md)\<`T`\> = `{}`

Initial configuration items.

#### Returns

[`Config`](Config.md)\<`T`\>

#### Overrides

[`Proxiable`](../../Proxiable/classes/Proxiable.md).[`constructor`](../../Proxiable/classes/Proxiable.md#constructors)

#### Defined in

[Config.ts:30](https://github.com/stonemjs/config/blob/8247fd841f2fbb89c217bf9411d5c108c3731ae0/src/Config.ts#L30)

## Methods

### all()

> **all**(): [`ConfigItems`](../../definitions/type-aliases/ConfigItems.md)\<`T`\>

Get all of the configuration items as a literal object.

#### Returns

[`ConfigItems`](../../definitions/type-aliases/ConfigItems.md)\<`T`\>

All configuration items.

#### Defined in

[Config.ts:129](https://github.com/stonemjs/config/blob/8247fd841f2fbb89c217bf9411d5c108c3731ae0/src/Config.ts#L129)

***

### clear()

> **clear**(): `this`

Clear all of the configuration items.

#### Returns

`this`

The current Config instance.

#### Defined in

[Config.ts:138](https://github.com/stonemjs/config/blob/8247fd841f2fbb89c217bf9411d5c108c3731ae0/src/Config.ts#L138)

***

### defaults()

> **defaults**\<`R`\>(`key`, `value`): `this`

Allows providers to define the default config for a module.

#### Type Parameters

• **R**

#### Parameters

• **key**: `string` \| `string`[] \| [`ConfigItems`](../../definitions/type-aliases/ConfigItems.md)\<`R`\>

The key or keys to set as defaults.

• **value**: `R` \| [`ConfigItems`](../../definitions/type-aliases/ConfigItems.md)\<`R`\>

The value to set as default.

#### Returns

`this`

The current Config instance.

#### Defined in

[Config.ts:116](https://github.com/stonemjs/config/blob/8247fd841f2fbb89c217bf9411d5c108c3731ae0/src/Config.ts#L116)

***

### firstMatch()

> **firstMatch**\<`R`\>(`keys`, `fallback`): `R`

Get the first match configuration value.

#### Type Parameters

• **R**

#### Parameters

• **keys**: `string`[]

An array of keys to check.

• **fallback**: `null` \| `R` = `null`

The fallback value if no key matches.

#### Returns

`R`

The first matching configuration value.

#### Defined in

[Config.ts:66](https://github.com/stonemjs/config/blob/8247fd841f2fbb89c217bf9411d5c108c3731ae0/src/Config.ts#L66)

***

### get()

> **get**\<`R`\>(`key`, `fallback`): `R` \| [`ConfigItems`](../../definitions/type-aliases/ConfigItems.md)\<`R`\>

Get the specified configuration value.

#### Type Parameters

• **R**

#### Parameters

• **key**: `string` \| `string`[] \| [`ConfigItems`](../../definitions/type-aliases/ConfigItems.md)\<`R`\>

The key or keys to retrieve from the configuration.

• **fallback**: `null` \| `R` = `null`

The fallback value if the key does not exist.

#### Returns

`R` \| [`ConfigItems`](../../definitions/type-aliases/ConfigItems.md)\<`R`\>

The configuration value.

#### Defined in

[Config.ts:51](https://github.com/stonemjs/config/blob/8247fd841f2fbb89c217bf9411d5c108c3731ae0/src/Config.ts#L51)

***

### getMany()

> **getMany**\<`R`\>(`keys`): [`ConfigItems`](../../definitions/type-aliases/ConfigItems.md)\<`R`\>

Get many configuration values.

#### Type Parameters

• **R**

#### Parameters

• **keys**: `string`[] \| [`ConfigItems`](../../definitions/type-aliases/ConfigItems.md)\<`R`\>

The keys to retrieve from the configuration.

#### Returns

[`ConfigItems`](../../definitions/type-aliases/ConfigItems.md)\<`R`\>

An object containing the requested configuration values.

#### Defined in

[Config.ts:77](https://github.com/stonemjs/config/blob/8247fd841f2fbb89c217bf9411d5c108c3731ae0/src/Config.ts#L77)

***

### has()

> **has**(`key`): `boolean`

Determine if the given configuration value exists.

#### Parameters

• **key**: `string` \| `string`[]

The key or keys to check.

#### Returns

`boolean`

True if the key exists, false otherwise.

#### Defined in

[Config.ts:88](https://github.com/stonemjs/config/blob/8247fd841f2fbb89c217bf9411d5c108c3731ae0/src/Config.ts#L88)

***

### set()

> **set**\<`R`\>(`key`, `value`): `this`

Set a given configuration value.

#### Type Parameters

• **R**

#### Parameters

• **key**: `string` \| `string`[] \| [`ConfigItems`](../../definitions/type-aliases/ConfigItems.md)\<`R`\>

The key or keys to set in the configuration.

• **value**: `null` \| `R` = `null`

The value to set.

#### Returns

`this`

The current Config instance.

#### Defined in

[Config.ts:99](https://github.com/stonemjs/config/blob/8247fd841f2fbb89c217bf9411d5c108c3731ae0/src/Config.ts#L99)

***

### create()

> `static` **create**\<`T`\>(`items`): [`Config`](Config.md)\<`T`\>

Create a Config.

#### Type Parameters

• **T**

#### Parameters

• **items**: [`ConfigItems`](../../definitions/type-aliases/ConfigItems.md)\<`T`\> = `{}`

Initial configuration items.

#### Returns

[`Config`](Config.md)\<`T`\>

A new Config instance.

#### Defined in

[Config.ts:21](https://github.com/stonemjs/config/blob/8247fd841f2fbb89c217bf9411d5c108c3731ae0/src/Config.ts#L21)
