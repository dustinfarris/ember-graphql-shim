# ember-graphql-shim

[![CircleCI](https://circleci.com/gh/dustinfarris/ember-graphql-shim.svg?style=svg)](https://circleci.com/gh/dustinfarris/ember-graphql-shim)

Use [graphql](https://github.com/graphql/graphql-js) in your Ember project.


## Installation

```
ember install ember-graphql-shim
```


## Usage

```js
import { GraphQLSchema } from 'graphql';

import query from './myRootQuery';
import mutation from './myRootMutation';

export const rootSchema = new GraphQLSchema({ query, mutation });
```


## Developing

### Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
