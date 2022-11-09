# apollo-subgraph-extend-repro

This contains a reproduction of an issue with `printSchemaWithDirectives` from the `@graphql-tools/utils` package.

## Steps to reproduce

- Run `yarn install`
- Run `node index.js`
- Observe the output from `printSubgraphSchema` contains `extend type Foo { ... }`, but the output from `printSchemaWithDirectives` is missing the `extend` keyword.
