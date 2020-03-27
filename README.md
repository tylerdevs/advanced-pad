
# [Node] advanced-pad

[![Build Status](https://travis-ci.org/tylerdevs/advanced-pad.svg?branch=master)](https://travis-ci.orgtylerdevs/advanced-pad) [![dependencies Status](https://david-dm.org/tylerdevs/advanced-pad/status.svg)](https://david-dm.org/tylerdevs/advanced-pad) [![devDependencies Status](https://david-dm.org/tylerdevs/advanced-pad/dev-status.svg)](https://david-dm.org/flexdinesh/npm-module-boilerplate?type=dev) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

**Super lightweight and advanced padding module.**

advanced-pad is a super light string padding function with advanced truncation and character padding support.

# Features

* **Directional** - One module for padding both left and right.
* **Multi Character Padding** - Pad strings with multiple characters without going over set length.
* **Advanced Truncation** - Easily toggle string truncation based on length of padding.

# Install

```
$ npm install advanced-pad
```

# Usage

```
// include advanced-pad
var pad = require('advanced-pad');

// call a padding function
pad.padLeft(string, len, chr = ' ', trunc = false);
pad.padRight(string, len, chr = ' ', trunc = false);
- string = input string to pad
- len = iteger length to pad string to
- chr = string to use as padding character, can be multi
- trunc = true / false. Setting to true will retun the input string truncated from the left or right if it is longer than len.

// pad with '0' to left with length of 10
pad.padLeft('67454', 10, '0');
Output: 0000067454

// pad with '01' to left with legnth of 15
pad.padLeft('67454, 15, '01');
Output: 010101010167454

// pad with 'x' to right with length of 10
pad.padRight('test', 10, 'x');
Output: testxxxxxx

// pad to with 'x' to right, length of 5, with truncate
pad.padRight('testing', 4, 'x', true);
Output: test
```

# License

MIT © Tyler Colwell