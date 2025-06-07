[**Filesystem Documentation**](../../../README.md)

***

[Filesystem Documentation](../../../README.md) / [file/File](../README.md) / File

# Class: File

Defined in: [file/File.ts:32](https://github.com/stonemjs/filesystem/blob/064ba29e1d5559c367f9a7471b75a6d308ebe158/src/file/File.ts#L32)

Class representing a File.

## Author

Mr. Stone <evensstone@gmail.com>

## Extended by

- [`UploadedFile`](../../UploadedFile/classes/UploadedFile.md)

## Constructors

### Constructor

> `protected` **new File**(`path`, `checkPath`): `File`

Defined in: [file/File.ts:53](https://github.com/stonemjs/filesystem/blob/064ba29e1d5559c367f9a7471b75a6d308ebe158/src/file/File.ts#L53)

Create a File.

#### Parameters

##### path

`string`

The file path.

##### checkPath

`boolean` = `true`

Whether to check if the file path is valid.

#### Returns

`File`

## Methods

### edit()

> **edit**(`callback`): `this`

Defined in: [file/File.ts:93](https://github.com/stonemjs/filesystem/blob/064ba29e1d5559c367f9a7471b75a6d308ebe158/src/file/File.ts#L93)

Edit file content.

#### Parameters

##### callback

(`content`) => `string`

The callback function to modify the file content.

#### Returns

`this`

The current File instance.

***

### exists()

> **exists**(): `boolean`

Defined in: [file/File.ts:295](https://github.com/stonemjs/filesystem/blob/064ba29e1d5559c367f9a7471b75a6d308ebe158/src/file/File.ts#L295)

Check if the file exists.

#### Returns

`boolean`

True if the file exists, otherwise false.

***

### getAbsolutePath()

> **getAbsolutePath**(`root`): `string`

Defined in: [file/File.ts:212](https://github.com/stonemjs/filesystem/blob/064ba29e1d5559c367f9a7471b75a6d308ebe158/src/file/File.ts#L212)

Get the absolute file path.

#### Parameters

##### root

`string` = `''`

The root directory to resolve from.

#### Returns

`string`

The absolute file path.

***

### getATime()

> **getATime**(): `undefined` \| `number` \| `bigint`

Defined in: [file/File.ts:268](https://github.com/stonemjs/filesystem/blob/064ba29e1d5559c367f9a7471b75a6d308ebe158/src/file/File.ts#L268)

Get the last access time of the file.

#### Returns

`undefined` \| `number` \| `bigint`

The last access time in milliseconds.

***

### getBasename()

> **getBasename**(`exclude`): `string`

Defined in: [file/File.ts:232](https://github.com/stonemjs/filesystem/blob/064ba29e1d5559c367f9a7471b75a6d308ebe158/src/file/File.ts#L232)

Get the basename of the file.

#### Parameters

##### exclude

`string` = `''`

The file extension to exclude from the basename.

#### Returns

`string`

The basename of the file.

***

### getContent()

> **getContent**(`encoding`): `string`

Defined in: [file/File.ts:65](https://github.com/stonemjs/filesystem/blob/064ba29e1d5559c367f9a7471b75a6d308ebe158/src/file/File.ts#L65)

Get file content.

#### Parameters

##### encoding

`BufferEncoding` = `'utf-8'`

#### Returns

`string`

The content of the file as a string.

***

### getCTime()

> **getCTime**(): `undefined` \| `number` \| `bigint`

Defined in: [file/File.ts:286](https://github.com/stonemjs/filesystem/blob/064ba29e1d5559c367f9a7471b75a6d308ebe158/src/file/File.ts#L286)

Get the created time of the file.

#### Returns

`undefined` \| `number` \| `bigint`

The created time in milliseconds.

***

### getDirname()

> **getDirname**(): `string`

Defined in: [file/File.ts:184](https://github.com/stonemjs/filesystem/blob/064ba29e1d5559c367f9a7471b75a6d308ebe158/src/file/File.ts#L184)

Get the directory name of the file.

#### Returns

`string`

The directory name.

***

### getEncodedAbsolutePath()

> **getEncodedAbsolutePath**(`root`): `string`

Defined in: [file/File.ts:222](https://github.com/stonemjs/filesystem/blob/064ba29e1d5559c367f9a7471b75a6d308ebe158/src/file/File.ts#L222)

Get the encoded absolute file path.

#### Parameters

##### root

`string` = `''`

The root directory to resolve from.

#### Returns

`string`

The encoded absolute file path.

***

### getEncodedPath()

> **getEncodedPath**(): `string`

Defined in: [file/File.ts:202](https://github.com/stonemjs/filesystem/blob/064ba29e1d5559c367f9a7471b75a6d308ebe158/src/file/File.ts#L202)

Get the encoded file path.

#### Returns

`string`

The encoded file path.

***

### getExtension()

> **getExtension**(): `string`

Defined in: [file/File.ts:259](https://github.com/stonemjs/filesystem/blob/064ba29e1d5559c367f9a7471b75a6d308ebe158/src/file/File.ts#L259)

Get the file extension.

#### Returns

`string`

The file extension.

***

### getFilename()

> **getFilename**(): `string`

Defined in: [file/File.ts:241](https://github.com/stonemjs/filesystem/blob/064ba29e1d5559c367f9a7471b75a6d308ebe158/src/file/File.ts#L241)

Get the filename of the file.

#### Returns

`string`

The filename of the file.

***

### getHashedContent()

> **getHashedContent**(`algo`): `string`

Defined in: [file/File.ts:139](https://github.com/stonemjs/filesystem/blob/064ba29e1d5559c367f9a7471b75a6d308ebe158/src/file/File.ts#L139)

Get the hashed content of the file.

#### Parameters

##### algo

`string` = `'sha256'`

The hashing algorithm to use.

#### Returns

`string`

The hashed content of the file as a hex string.

***

### getMimeType()

Get the MIME type of the file.

#### Param

A fallback MIME type if detection fails.

#### Call Signature

> **getMimeType**(): `undefined` \| `string`

Defined in: [file/File.ts:159](https://github.com/stonemjs/filesystem/blob/064ba29e1d5559c367f9a7471b75a6d308ebe158/src/file/File.ts#L159)

Get the MIME type of the file.

##### Returns

`undefined` \| `string`

The MIME type of the file.

##### Param

A fallback MIME type if detection fails.

#### Call Signature

> **getMimeType**(`fallback`): `string`

Defined in: [file/File.ts:167](https://github.com/stonemjs/filesystem/blob/064ba29e1d5559c367f9a7471b75a6d308ebe158/src/file/File.ts#L167)

Get the MIME type of the file.

##### Parameters

###### fallback

`string`

A fallback MIME type if detection fails.

##### Returns

`string`

The MIME type of the file.

##### Param

A fallback MIME type if detection fails.

***

### getMTime()

> **getMTime**(): `undefined` \| `number` \| `bigint`

Defined in: [file/File.ts:277](https://github.com/stonemjs/filesystem/blob/064ba29e1d5559c367f9a7471b75a6d308ebe158/src/file/File.ts#L277)

Get the last modified time of the file.

#### Returns

`undefined` \| `number` \| `bigint`

The last modified time in milliseconds.

***

### getName()

> **getName**(): `string`

Defined in: [file/File.ts:250](https://github.com/stonemjs/filesystem/blob/064ba29e1d5559c367f9a7471b75a6d308ebe158/src/file/File.ts#L250)

Get the name of the file without extension.

#### Returns

`string`

The name of the file.

***

### getPath()

> **getPath**(): `string`

Defined in: [file/File.ts:193](https://github.com/stonemjs/filesystem/blob/064ba29e1d5559c367f9a7471b75a6d308ebe158/src/file/File.ts#L193)

Get the file path.

#### Returns

`string`

The file path.

***

### getSize()

> **getSize**(`formatted`): `undefined` \| `string` \| `number` \| `bigint`

Defined in: [file/File.ts:149](https://github.com/stonemjs/filesystem/blob/064ba29e1d5559c367f9a7471b75a6d308ebe158/src/file/File.ts#L149)

Get file size.

#### Parameters

##### formatted

`boolean` = `false`

Whether to return the file size as a formatted string.

#### Returns

`undefined` \| `string` \| `number` \| `bigint`

The file size as a string or number.

***

### isAbsolute()

> **isAbsolute**(): `boolean`

Defined in: [file/File.ts:349](https://github.com/stonemjs/filesystem/blob/064ba29e1d5559c367f9a7471b75a6d308ebe158/src/file/File.ts#L349)

Check if the file path is absolute.

#### Returns

`boolean`

True if the file path is absolute, otherwise false.

***

### isCompressed()

> **isCompressed**(`extensions`): `boolean`

Defined in: [file/File.ts:313](https://github.com/stonemjs/filesystem/blob/064ba29e1d5559c367f9a7471b75a6d308ebe158/src/file/File.ts#L313)

Check if the file is compressed.

#### Parameters

##### extensions

`string`[] = `...`

#### Returns

`boolean`

True if the file is compressed, otherwise false.

***

### isDir()

> **isDir**(): `boolean`

Defined in: [file/File.ts:322](https://github.com/stonemjs/filesystem/blob/064ba29e1d5559c367f9a7471b75a6d308ebe158/src/file/File.ts#L322)

Check if the file is a directory.

#### Returns

`boolean`

True if the file is a directory, otherwise false.

***

### isExecutable()

> **isExecutable**(): `boolean`

Defined in: [file/File.ts:386](https://github.com/stonemjs/filesystem/blob/064ba29e1d5559c367f9a7471b75a6d308ebe158/src/file/File.ts#L386)

Check if the file is executable.

#### Returns

`boolean`

True if the file is executable, otherwise false.

***

### isFile()

> **isFile**(): `boolean`

Defined in: [file/File.ts:331](https://github.com/stonemjs/filesystem/blob/064ba29e1d5559c367f9a7471b75a6d308ebe158/src/file/File.ts#L331)

Check if the file is a regular file.

#### Returns

`boolean`

True if the file is a regular file, otherwise false.

***

### isLink()

> **isLink**(): `boolean`

Defined in: [file/File.ts:340](https://github.com/stonemjs/filesystem/blob/064ba29e1d5559c367f9a7471b75a6d308ebe158/src/file/File.ts#L340)

Check if the file is a symbolic link.

#### Returns

`boolean`

True if the file is a symbolic link, otherwise false.

***

### isPathPrefix()

> **isPathPrefix**(`prefix`): `boolean`

Defined in: [file/File.ts:304](https://github.com/stonemjs/filesystem/blob/064ba29e1d5559c367f9a7471b75a6d308ebe158/src/file/File.ts#L304)

Check if the file path starts with a provided prefix.

#### Parameters

##### prefix

`string`

#### Returns

`boolean`

True if the file path starts with the provided prefix, otherwise false.

***

### isReadable()

> **isReadable**(): `boolean`

Defined in: [file/File.ts:372](https://github.com/stonemjs/filesystem/blob/064ba29e1d5559c367f9a7471b75a6d308ebe158/src/file/File.ts#L372)

Check if the file is readable.

#### Returns

`boolean`

True if the file is readable, otherwise false.

***

### isWritable()

> **isWritable**(): `boolean`

Defined in: [file/File.ts:358](https://github.com/stonemjs/filesystem/blob/064ba29e1d5559c367f9a7471b75a6d308ebe158/src/file/File.ts#L358)

Check if the file is writable.

#### Returns

`boolean`

True if the file is writable, otherwise false.

***

### move()

> **move**(`directory`, `name?`): `File`

Defined in: [file/File.ts:105](https://github.com/stonemjs/filesystem/blob/064ba29e1d5559c367f9a7471b75a6d308ebe158/src/file/File.ts#L105)

Move file to a new directory.

#### Parameters

##### directory

`string`

The target directory.

##### name?

`string`

The new name for the file.

#### Returns

`File`

The new File instance representing the moved file.

#### Throws

FileError if the file could not be moved.

***

### remove()

> **remove**(`force`): `this`

Defined in: [file/File.ts:124](https://github.com/stonemjs/filesystem/blob/064ba29e1d5559c367f9a7471b75a6d308ebe158/src/file/File.ts#L124)

Remove file.

#### Parameters

##### force

`boolean` = `false`

Whether to forcefully remove the file.

#### Returns

`this`

The current File instance.

***

### write()

> **write**(`content`): `this`

Defined in: [file/File.ts:78](https://github.com/stonemjs/filesystem/blob/064ba29e1d5559c367f9a7471b75a6d308ebe158/src/file/File.ts#L78)

Write content to file.

#### Parameters

##### content

`string`

The content to write to the file.

#### Returns

`this`

The current File instance.

***

### create()

> `static` **create**(`path`, `checkPath`): `File`

Defined in: [file/File.ts:43](https://github.com/stonemjs/filesystem/blob/064ba29e1d5559c367f9a7471b75a6d308ebe158/src/file/File.ts#L43)

Create a File.

#### Parameters

##### path

`string`

The file path.

##### checkPath

`boolean` = `true`

Whether to check if the file path is valid.

#### Returns

`File`

A new File instance.
