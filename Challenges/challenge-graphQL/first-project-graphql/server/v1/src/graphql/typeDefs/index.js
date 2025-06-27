const { loadFilesSync } = require("@graphql-tools/load-files");
const { mergeTypeDefs } = require("@graphql-tools/merge");
const path = require("path");

const typeDefsArray = loadFilesSync(path.join(__dirname, "./", "*.gql"));

const typeDefs = mergeTypeDefs(typeDefsArray);

module.exports = typeDefs;
