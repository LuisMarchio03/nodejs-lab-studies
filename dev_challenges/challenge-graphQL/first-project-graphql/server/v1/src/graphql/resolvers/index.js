const { loadFilesSync } = require("@graphql-tools/load-files");
const { mergeResolvers } = require("@graphql-tools/merge");
const path = require("path");

const resolversArray = loadFilesSync(path.join(__dirname, "./"), {
  ignoreIndex: true,
});

const resolvers = mergeResolvers(resolversArray);

module.exports = resolvers;
