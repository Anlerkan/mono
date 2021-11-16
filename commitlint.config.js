const {
  utils: {getPackages}
  // eslint-disable-next-line @typescript-eslint/no-var-requires
} = require("@commitlint/config-lerna-scopes");

module.exports = {
  extends: ["@commitlint/config-conventional", "@commitlint/config-lerna-scopes"],
  rules: {
    "scope-enum": async (ctx) => [
      // eslint-disable-next-line no-magic-numbers
      2,
      "always",
      [
        ...(await getPackages(ctx)),
        // Insert custom scopes below:
        "release"
      ]
    ]
  }
};
