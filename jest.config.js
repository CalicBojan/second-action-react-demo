module.exports = {
    // Indicates whether each individual test should be reported during the run.
    verbose: true,

    // Automatically clear mock calls, instances, contexts, and results before every test.
    clearMocks: true,

    // An array of glob patterns indicating a set of files for which coverage information should be collected.
    collectCoverageFrom: [
        "src/**/*.{js,jsx,ts,tsx}",
        "!src/**/*.d.ts",
        "!src/serviceWorker.js",
        "!src/setupTests.js",
    ],

    // The directory where Jest should output its coverage files.
    coverageDirectory: "coverage",

    // A list of reporter names that Jest uses when writing coverage reports.
    coverageReporters: ["json", "lcov", "text", "clover"],

    // An array of file extensions your modules use.
    moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],

    // A map from regular expressions to module names that allow to stub out resources.
    moduleNameMapper: {
        "^.+\\.(css|scss|sass)$": "identity-obj-proxy",
        "^.+\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js",
    },

    // A preset that is used as a base for Jest's configuration.
    preset: "ts-jest",

    // The root directory that Jest should scan for tests and modules within.
    rootDir: "src",

    // The test environment that will be used for testing.
    testEnvironment: "jsdom",

    // An array of regex pattern strings that are matched against all test paths, tests are skipped if they match.
    testPathIgnorePatterns: ["/node_modules/", "/dist/"],

    // A list of paths to modules that run some code to configure or set up the testing framework before each test.
    setupFilesAfterEnv: ["<rootDir>/setupTests.js"],

    // A map from regular expressions to paths to transformers.
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
        "^.+\\.css$": "<rootDir>/config/cssTransform.js",
        "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)": "<rootDir>/config/fileTransform.js",
    },

    // Indicates whether each individual test should be reported during the run.
    verbose: true,
};
