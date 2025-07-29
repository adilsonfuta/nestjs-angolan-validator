{
  "name": "nestjs-angolan-validator",
  "version": "1.0.0",
  "description": "A NestJS validator decorator for Angolan",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "build": "tsc",
    "test": "jest",
    "prepublish": "npm run build"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/adilsonfuta/nestjs-angolan-validator.git"
  },
  "keywords": [
    "nestjs",
    "validator",
    "angola",
    "bi",
    "nif",
    "iban",
    "decorator"
  ],
  "author": "Adilson Futa adilsonmariafuta@gmail.com",
  "license": "MIT",
  "type": "commonjs",
  "peerDependencies": {
    "@nestjs/common": "^11.1.5",
    "class-transformer": "^0.5.1",
    "class-validator": "^0.14.2"
  },
  "devDependencies": {
    "@babel/core": "^7.28.0",
    "@babel/plugin-proposal-decorators": "^7.28.0",
    "@babel/preset-env": "^7.28.0",
    "@babel/preset-typescript": "^7.27.1",
    "@types/jest": "^29.5.14",
    "@types/node": "^18.11.18",
    "babel-jest": "^30.0.5",
    "jest": "^29.7.0",
    "ts-jest": "^29.2.5",
    "typescript": "^4.9.5"
  },
  "bugs": {
    "url": "https://github.com/adilsonfuta/nestjs-angolan-validator/issues"
  },
  "homepage": "https://github.com/adilsonfuta/nestjs-angolan-validator#readme",
  "dependencies": {
    "reflect-metadata": "^0.2.2"
  }
}
