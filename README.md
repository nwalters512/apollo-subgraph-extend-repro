# apollo-subgraph-extend-repro

This contains a reproduction of an issue with `addResolversToSchema` from the `@graphql-tools/schema` package.

## Steps to reproduce

- Run `yarn install`
- Run `node index.js`
- Observe the output from `printSubgraphSchema` contains `extend type Foo { ... }`, but trying to print the schema returned from `addResolversToSchema` with `printSubgraphSchema` throws.
