/* jshint node: true */
'use strict';

const merge = require('broccoli-merge-trees');
const path = require('path');
const WebpackWriter = require('broccoli-webpack');

module.exports = {
  name: 'ember-graphql-shim',

  included(app) {
    // see: https://github.com/ember-cli/ember-cli/issues/3718
    if (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }

    app.import('vendor/graphql.amd.js')
  },

  treeForVendor(tree) {
    const graphqlPath = path.dirname(require.resolve('graphql'))
    const graphqlTree = new WebpackWriter([ graphqlPath ], {
      entry: './index.js',
      output: {
        library: 'graphql',
        libraryTarget: 'amd',
        filename: 'graphql.amd.js'
      }
    });

    if (!tree) {
      return this._super.treeForVendor.call(this, graphqlTree);
    }

    const trees = merge([graphqlTree, tree], {
      overwrite: true
    });

    return this._super.treeForVendor.call(this, trees);
  }
};
