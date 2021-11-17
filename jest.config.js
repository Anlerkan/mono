module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleFileExtensions: ["js", "json", "ts"],
  rootDir: "src",
  transform: {
    "^.+\\.(t|j)s$": "ts-jest"
  }
};
