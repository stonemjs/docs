[**Filesystem Documentation**](../../../README.md)

***

[Filesystem Documentation](../../../README.md) / [file/UploadedFile](../README.md) / UploadedFile

# Class: UploadedFile

Defined in: [file/UploadedFile.ts:11](https://github.com/stonemjs/filesystem/blob/064ba29e1d5559c367f9a7471b75a6d308ebe158/src/file/UploadedFile.ts#L11)

Class representing an UploadedFile.

## Author

Mr. Stone <evensstone@gmail.com>

## Extends

- [`File`](../../File/classes/File.md)

## Constructors

### Constructor

> **new UploadedFile**(`path`, `originalName`, `mimeType?`, `checkPath?`): `UploadedFile`

Defined in: [file/UploadedFile.ts:34](https://github.com/stonemjs/filesystem/blob/064ba29e1d5559c367f9a7471b75a6d308ebe158/src/file/UploadedFile.ts#L34)

Create an UploadedFile.

#### Parameters

##### path

`string`

The file path.

##### originalName

`string`

The original name of the uploaded file.

##### mimeType?

`string`

The MIME type of the file.

##### checkPath?

`boolean` = `true`

#### Returns

`UploadedFile`

#### Overrides

[`File`](../../File/classes/File.md).[`constructor`](../../File/classes/File.md#constructor)

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

#### Inherited from

[`File`](../../File/classes/File.md).[`edit`](../../File/classes/File.md#edit)

***

### exists()

> **exists**(): `boolean`

Defined in: [file/File.ts:295](https://github.com/stonemjs/filesystem/blob/064ba29e1d5559c367f9a7471b75a6d308ebe158/src/file/File.ts#L295)

Check if the file exists.

#### Returns

`boolean`

True if the file exists, otherwise false.

#### Inherited from

[`File`](../../File/classes/File.md).[`exists`](../../File/classes/File.md#exists)

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

#### Inherited from

[`File`](../../File/classes/File.md).[`getAbsolutePath`](../../File/classes/File.md#getabsolutepath)

***

### getATime()

> **getATime**(): `undefined` \| `number` \| `bigint`

Defined in: [file/File.ts:268](https://github.com/stonemjs/filesystem/blob/064ba29e1d5559c367f9a7471b75a6d308ebe158/src/file/File.ts#L268)

Get the last access time of the file.

#### Returns

`undefined` \| `number` \| `bigint`

The last access time in milliseconds.

#### Inherited from

[`File`](../../File/classes/File.md).[`getATime`](../../File/classes/File.md#getatime)

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

#### Inherited from

[`File`](../../File/classes/File.md).[`getBasename`](../../File/classes/File.md#getbasename)

***

### getClientMimeType()

> **getClientMimeType**(): `string`

Defined in: [file/UploadedFile.ts:63](https://github.com/stonemjs/filesystem/blob/064ba29e1d5559c367f9a7471b75a6d308ebe158/src/file/UploadedFile.ts#L63)

Get the MIME type of the uploaded file.

#### Returns

`string`

The MIME type of the file.

***

### getClientOriginalExtension()

> **getClientOriginalExtension**(): `string`

Defined in: [file/UploadedFile.ts:54](https://github.com/stonemjs/filesystem/blob/064ba29e1d5559c367f9a7471b75a6d308ebe158/src/file/UploadedFile.ts#L54)

Get the original file extension of the uploaded file.

#### Returns

`string`

The original file extension.

***

### getClientOriginalName()

> **getClientOriginalName**(): `string`

Defined in: [file/UploadedFile.ts:45](https://github.com/stonemjs/filesystem/blob/064ba29e1d5559c367f9a7471b75a6d308ebe158/src/file/UploadedFile.ts#L45)

Get the original name of the uploaded file.

#### Returns

`string`

The original name of the file.

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

#### Inherited from

[`File`](../../File/classes/File.md).[`getContent`](../../File/classes/File.md#getcontent)

***

### getCTime()

> **getCTime**(): `undefined` \| `number` \| `bigint`

Defined in: [file/File.ts:286](https://github.com/stonemjs/filesystem/blob/064ba29e1d5559c367f9a7471b75a6d308ebe158/src/file/File.ts#L286)

Get the created time of the file.

#### Returns

`undefined` \| `number` \| `bigint`

The created time in milliseconds.

#### Inherited from

[`File`](../../File/classes/File.md).[`getCTime`](../../File/classes/File.md#getctime)

***

### getDirname()

> **getDirname**(): `string`

Defined in: [file/File.ts:184](https://github.com/stonemjs/filesystem/blob/064ba29e1d5559c367f9a7471b75a6d308ebe158/src/file/File.ts#L184)

Get the directory name of the file.

#### Returns

`string`

The directory name.

#### Inherited from

[`File`](../../File/classes/File.md).[`getDirname`](../../File/classes/File.md#getdirname)

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

#### Inherited from

[`File`](../../File/classes/File.md).[`getEncodedAbsolutePath`](../../File/classes/File.md#getencodedabsolutepath)

***

### getEncodedPath()

> **getEncodedPath**(): `string`

Defined in: [file/File.ts:202](https://github.com/stonemjs/filesystem/blob/064ba29e1d5559c367f9a7471b75a6d308ebe158/src/file/File.ts#L202)

Get the encoded file path.

#### Returns

`string`

The encoded file path.

#### Inherited from

[`File`](../../File/classes/File.md).[`getEncodedPath`](../../File/classes/File.md#getencodedpath)

***

### getExtension()

> **getExtension**(): `string`

Defined in: [file/File.ts:259](https://github.com/stonemjs/filesystem/blob/064ba29e1d5559c367f9a7471b75a6d308ebe158/src/file/File.ts#L259)

Get the file extension.

#### Returns

`string`

The file extension.

#### Inherited from

[`File`](../../File/classes/File.md).[`getExtension`](../../File/classes/File.md#getextension)

***

### getFilename()

> **getFilename**(): `string`

Defined in: [file/File.ts:241](https://github.com/stonemjs/filesystem/blob/064ba29e1d5559c367f9a7471b75a6d308ebe158/src/file/File.ts#L241)

Get the filename of the file.

#### Returns

`string`

The filename of the file.

#### Inherited from

[`File`](../../File/classes/File.md).[`getFilename`](../../File/classes/File.md#getfilename)

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

#### Inherited from

[`File`](../../File/classes/File.md).[`getHashedContent`](../../File/classes/File.md#gethashedcontent)

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

##### Inherited from

[`File`](../../File/classes/File.md).[`getMimeType`](../../File/classes/File.md#getmimetype)

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

##### Inherited from

[`File`](../../File/classes/File.md).[`getMimeType`](../../File/classes/File.md#getmimetype)

***

### getMTime()

> **getMTime**(): `undefined` \| `number` \| `bigint`

Defined in: [file/File.ts:277](https://github.com/stonemjs/filesystem/blob/064ba29e1d5559c367f9a7471b75a6d308ebe158/src/file/File.ts#L277)

Get the last modified time of the file.

#### Returns

`undefined` \| `number` \| `bigint`

The last modified time in milliseconds.

#### Inherited from

[`File`](../../File/classes/File.md).[`getMTime`](../../File/classes/File.md#getmtime)

***

### getName()

> **getName**(): `string`

Defined in: [file/File.ts:250](https://github.com/stonemjs/filesystem/blob/064ba29e1d5559c367f9a7471b75a6d308ebe158/src/file/File.ts#L250)

Get the name of the file without extension.

#### Returns

`string`

The name of the file.

#### Inherited from

[`File`](../../File/classes/File.md).[`getName`](../../File/classes/File.md#getname)

***

### getPath()

> **getPath**(): `string`

Defined in: [file/File.ts:193](https://github.com/stonemjs/filesystem/blob/064ba29e1d5559c367f9a7471b75a6d308ebe158/src/file/File.ts#L193)

Get the file path.

#### Returns

`string`

The file path.

#### Inherited from

[`File`](../../File/classes/File.md).[`getPath`](../../File/classes/File.md#getpath)

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

#### Inherited from

[`File`](../../File/classes/File.md).[`getSize`](../../File/classes/File.md#getsize)

***

### guessClientExtension()

> **guessClientExtension**(): `undefined` \| `string`

Defined in: [file/UploadedFile.ts:72](https://github.com/stonemjs/filesystem/blob/064ba29e1d5559c367f9a7471b75a6d308ebe158/src/file/UploadedFile.ts#L72)

Guess the client file extension based on the MIME type.

#### Returns

`undefined` \| `string`

The guessed file extension.

***

### isAbsolute()

> **isAbsolute**(): `boolean`

Defined in: [file/File.ts:349](https://github.com/stonemjs/filesystem/blob/064ba29e1d5559c367f9a7471b75a6d308ebe158/src/file/File.ts#L349)

Check if the file path is absolute.

#### Returns

`boolean`

True if the file path is absolute, otherwise false.

#### Inherited from

[`File`](../../File/classes/File.md).[`isAbsolute`](../../File/classes/File.md#isabsolute)

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

#### Inherited from

[`File`](../../File/classes/File.md).[`isCompressed`](../../File/classes/File.md#iscompressed)

***

### isDir()

> **isDir**(): `boolean`

Defined in: [file/File.ts:322](https://github.com/stonemjs/filesystem/blob/064ba29e1d5559c367f9a7471b75a6d308ebe158/src/file/File.ts#L322)

Check if the file is a directory.

#### Returns

`boolean`

True if the file is a directory, otherwise false.

#### Inherited from

[`File`](../../File/classes/File.md).[`isDir`](../../File/classes/File.md#isdir)

***

### isExecutable()

> **isExecutable**(): `boolean`

Defined in: [file/File.ts:386](https://github.com/stonemjs/filesystem/blob/064ba29e1d5559c367f9a7471b75a6d308ebe158/src/file/File.ts#L386)

Check if the file is executable.

#### Returns

`boolean`

True if the file is executable, otherwise false.

#### Inherited from

[`File`](../../File/classes/File.md).[`isExecutable`](../../File/classes/File.md#isexecutable)

***

### isFile()

> **isFile**(): `boolean`

Defined in: [file/File.ts:331](https://github.com/stonemjs/filesystem/blob/064ba29e1d5559c367f9a7471b75a6d308ebe158/src/file/File.ts#L331)

Check if the file is a regular file.

#### Returns

`boolean`

True if the file is a regular file, otherwise false.

#### Inherited from

[`File`](../../File/classes/File.md).[`isFile`](../../File/classes/File.md#isfile)

***

### isLink()

> **isLink**(): `boolean`

Defined in: [file/File.ts:340](https://github.com/stonemjs/filesystem/blob/064ba29e1d5559c367f9a7471b75a6d308ebe158/src/file/File.ts#L340)

Check if the file is a symbolic link.

#### Returns

`boolean`

True if the file is a symbolic link, otherwise false.

#### Inherited from

[`File`](../../File/classes/File.md).[`isLink`](../../File/classes/File.md#islink)

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

#### Inherited from

[`File`](../../File/classes/File.md).[`isPathPrefix`](../../File/classes/File.md#ispathprefix)

***

### isReadable()

> **isReadable**(): `boolean`

Defined in: [file/File.ts:372](https://github.com/stonemjs/filesystem/blob/064ba29e1d5559c367f9a7471b75a6d308ebe158/src/file/File.ts#L372)

Check if the file is readable.

#### Returns

`boolean`

True if the file is readable, otherwise false.

#### Inherited from

[`File`](../../File/classes/File.md).[`isReadable`](../../File/classes/File.md#isreadable)

***

### isValid()

> **isValid**(): `boolean`

Defined in: [file/UploadedFile.ts:81](https://github.com/stonemjs/filesystem/blob/064ba29e1d5559c367f9a7471b75a6d308ebe158/src/file/UploadedFile.ts#L81)

Check if the uploaded file is valid.

#### Returns

`boolean`

True if the file exists, otherwise false.

***

### isWritable()

> **isWritable**(): `boolean`

Defined in: [file/File.ts:358](https://github.com/stonemjs/filesystem/blob/064ba29e1d5559c367f9a7471b75a6d308ebe158/src/file/File.ts#L358)

Check if the file is writable.

#### Returns

`boolean`

True if the file is writable, otherwise false.

#### Inherited from

[`File`](../../File/classes/File.md).[`isWritable`](../../File/classes/File.md#iswritable)

***

### move()

> **move**(`directory`, `name?`): `this`

Defined in: [file/UploadedFile.ts:93](https://github.com/stonemjs/filesystem/blob/064ba29e1d5559c367f9a7471b75a6d308ebe158/src/file/UploadedFile.ts#L93)

Move the uploaded file to a new directory.

#### Parameters

##### directory

`string`

The target directory.

##### name?

`string`

The new name for the file.

#### Returns

`this`

The current UploadedFile instance.

#### Throws

FileError if the file is not valid.

#### Overrides

[`File`](../../File/classes/File.md).[`move`](../../File/classes/File.md#move)

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

#### Inherited from

[`File`](../../File/classes/File.md).[`remove`](../../File/classes/File.md#remove)

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

#### Inherited from

[`File`](../../File/classes/File.md).[`write`](../../File/classes/File.md#write)

***

### create()

> `static` **create**(`path`, `checkPath`): [`File`](../../File/classes/File.md)

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

[`File`](../../File/classes/File.md)

A new File instance.

#### Inherited from

[`File`](../../File/classes/File.md).[`create`](../../File/classes/File.md#create)

***

### createFile()

> `static` **createFile**(`path`, `originalName`, `mimeType?`, `checkPath?`): `UploadedFile`

Defined in: [file/UploadedFile.ts:23](https://github.com/stonemjs/filesystem/blob/064ba29e1d5559c367f9a7471b75a6d308ebe158/src/file/UploadedFile.ts#L23)

Create an UploadedFile.

#### Parameters

##### path

`string`

The file path.

##### originalName

`string`

The original name of the uploaded file.

##### mimeType?

`string`

The MIME type of the file.

##### checkPath?

`boolean` = `true`

#### Returns

`UploadedFile`

A new UploadedFile instance.
