module.exports = {
    moduleFileExtensions: [
        'js',
        'ts',
        'json',
        'vue'
    ],
    transform: {
        '^.+\\.ts$': 'ts-jest',
        '^.+\\.vue$': '@vue/vue3-jest'
    },
    testEnvironment: "jsdom",
    moduleNameMapper: { "^@/(.*)$": "<rootDir>/src/$1" }
}