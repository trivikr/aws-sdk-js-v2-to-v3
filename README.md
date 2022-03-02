# aws-sdk-js-v2-to-v3

jscodeshift transform to migrate AWS SDK for JavaScript in a Javascript/TypeScript codebase
from version 2 (v2) to version 3 (v3).

## Table of Contents

- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Usage](#usage)
- [Example](#example)
- [License](#license)

## Prerequisites

To use this jscodeshift transform, please install [Node.js][install-nodejs] and [curl][install-curl].

## Setup

- Export FILEPATH where transform will be stored:
  ```console
  export TRANSFORM_FILEPATH=/tmp/transform.js
  ```
- Download transform from [UNPKG][unpkg] and save it to the filepath:
  ```console
  curl -L https://unpkg.com/aws-sdk-js-v2-to-v3 -o $TRANSFORM_FILEPATH
  ```

## Usage

- Optional execute dry-run for the transform:
  ```console
  npx jscodeshift --dry -t $TRANSFORM_FILEPATH PATH...
  ```
- Run transform:
  ```console
  npx jscodeshift -t $TRANSFORM_FILEPATH PATH...
  ```

## Example

```console
$ cat example.ts
import AWS from "aws-sdk";

const region = "us-west-2";
const client = new AWS.DynamoDB({ region });
client.listTables({}, (err, data) => {
  if (err) console.log(err, err.stack);
  else console.log(data);
});

$ npx jscodeshift -t $TRANSFORM_FILEPATH example.ts

$ cat example.ts
import AWS from "aws-sdk";

import { DynamoDB } from "@aws-sdk/client-dynamodb";

const region = "us-west-2";
const client = new DynamoDB({ region });
client.listTables({}, (err, data) => {
  if (err) console.log(err, err.stack);
  else console.log(data);
});

```

## License

This library is licensed under the MIT License. See the LICENSE file.

[install-nodejs]: https://nodejs.dev/learn/how-to-install-nodejs
[install-curl]: https://curl.se/docs/install.html
[unpkg]: https://unpkg.com/
