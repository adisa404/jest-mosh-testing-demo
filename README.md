# install jest

npm i jest --save-dev

# run test

npm test

```json
  "scripts": {
    "test": "jest"
  },
```

# naming match

any file with that maches this name is a testfile
testMatch: **/**tests**/**/_.[jt]s?(x), \*\*/?(_.)+(spec|test).[tj]s?(x)

# naming convention

`[module to test].test.js`
example: `lib.test.js`
