var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'express-three'
    },
    port: 3000,
    db: 'mongodb://localhost/express-three-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'express-three'
    },
    port: 3000,
    db: 'mongodb://localhost/express-three-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'express-three'
    },
    port: 3000,
    db: 'mongodb://localhost/express-three-production'
  }
};

module.exports = config[env];
