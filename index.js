const {
  buildSubgraphSchema,
  printSubgraphSchema,
} = require("@apollo/subgraph");
const { printSchemaWithDirectives } = require("@graphql-tools/utils");
const gql = require("graphql-tag");

const schema = gql`
  extend schema
    @link(
      url: "https://specs.apollo.dev/federation/v2.0"
      import: ["@shareable", "@override", "@key"]
    )

  type Foo {
    bar: String
  }

  extend type Baz {
    biz: String
  }
`;

const subgraphSchema = buildSubgraphSchema({ typeDefs: [schema] });

console.log("printSchemaWithDirectives");
console.log(printSchemaWithDirectives(subgraphSchema));

console.log("==========================");

console.log("printSubgraphSchema");
console.log(printSubgraphSchema(subgraphSchema));
