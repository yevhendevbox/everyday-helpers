# Filter Functions for Formatting and Processing Data

This npm package provides a set of convenient filter functions for formatting and processing data. You can use these functions to format file names, file sizes, generate file URLs, and remove protocols from URLs.

## Installation

To install this package, you can use npm or yarn:

```sh
npm install data-format-filters
# or
yarn add data-format-filters
```

## Usage

### Format File Name

Use the `formatFileNameFilter` function to format a file name by removing the file extension.

```javascript
const { formatFileNameFilter } = require("data-format-filters");

const fileName = "example.txt";
const formattedName = formatFileNameFilter(fileName);
console.log(formattedName); // Output: 'example'
```

### Format File Size

Use the `formatFileSizeFilter` function to format a file size in bytes into a human-readable format with appropriate suffixes.

```javascript
const { formatFileSizeFilter } = require("data-format-filters");

const fileSizeInBytes = 1024; // 1 KB
const formattedSize = formatFileSizeFilter(fileSizeInBytes);
console.log(formattedSize); // Output: '1 KB'
```

### Generate File Url

Use the `generateFileUrlFilter` function to generate a URL for a file object.

```javascript
const { generateFileUrlFilter } = require("data-format-filters");

const file = { name: "example.jpg" };
const fileUrl = generateFileUrlFilter(file);
console.log(fileUrl); // Output: 'blob:...'
```

### Remove Protocol from URL

Use the `removeProtocolFilter` function to remove the protocol (e.g., 'http:', 'https:') from a URL

```javascript
const { removeProtocolFilter } = require("data-format-filters");

const url = "https://example.com";
const urlWithoutProtocol = removeProtocolFilter(url);
console.log(urlWithoutProtocol); // Output: 'example.com'
```

## License

This package is open-source and available under the MIT License. See the LICENSE file for details.

## Issues

If you encounter any issues or have questions, please create an issue in the GitHub repository.
