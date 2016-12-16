/*jshint node:true*/
module.exports = {
  description: 'Installation blueprint for ember-graphql-shim',

  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addPackagesToProject([
      { name: 'graphql', target: '^0.8.2' }
    ]);
  }
};
