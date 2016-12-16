import { module, test } from 'ember-qunit';

import {
  GraphQLSchema,

  // Definitions
  GraphQLScalarType,
  GraphQLObjectType,
  GraphQLInterfaceType,
  GraphQLUnionType,
  GraphQLEnumType,
  GraphQLInputObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLDirective,

  // "Enum" of Type Kinds
  TypeKind,

  // "Enum" of Directive Locations
  DirectiveLocation,

  // Scalars
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLID,

  // Built-in Directives defined by the Spec
  specifiedDirectives,
  GraphQLIncludeDirective,
  GraphQLSkipDirective,
  GraphQLDeprecatedDirective,

  // Constant Deprecation Reason
  DEFAULT_DEPRECATION_REASON,

  // Meta-field definitions.
  SchemaMetaFieldDef,
  TypeMetaFieldDef,
  TypeNameMetaFieldDef,

  // GraphQL Types for introspection.
  __Schema,
  __Directive,
  __DirectiveLocation,
  __Type,
  __Field,
  __InputValue,
  __EnumValue,
  __TypeKind,

  // Predicates
  isType,
  isInputType,
  isOutputType,
  isLeafType,
  isCompositeType,
  isAbstractType,

  // Assertions
  assertType,
  assertInputType,
  assertOutputType,
  assertLeafType,
  assertCompositeType,
  assertAbstractType,

  // Un-modifiers
  getNullableType,
  getNamedType
} from 'graphql';

module('Unit | vendor imports | graphql');

test('it exports GraphQLSchema', function(assert) {
  assert.ok(GraphQLSchema);
});

test('it exports GraphQLScalarType', function(assert) {
  assert.ok(GraphQLScalarType);
});

test('it exports GraphQLObjectType', function(assert) {
  assert.ok(GraphQLObjectType);
});

test('it exports GraphQLInterfaceType', function(assert) {
  assert.ok(GraphQLInterfaceType);
});

test('it exports GraphQLUnionType', function(assert) {
  assert.ok(GraphQLUnionType);
});

test('it exports GraphQLEnumType', function(assert) {
  assert.ok(GraphQLEnumType);
});

test('it exports GraphQLInputObjectType', function(assert) {
  assert.ok(GraphQLInputObjectType);
});

test('it exports GraphQLList', function(assert) {
  assert.ok(GraphQLList);
});

test('it exports GraphQLNonNull', function(assert) {
  assert.ok(GraphQLNonNull);
});

test('it exports GraphQLDirective', function(assert) {
  assert.ok(GraphQLDirective);
});

test('it exports TypeKind', function(assert) {
  assert.ok(TypeKind);
});

test('it exports DirectiveLocation', function(assert) {
  assert.ok(DirectiveLocation);
});

test('it exports GraphQLInt', function(assert) {
  assert.ok(GraphQLInt);
});

test('it exports GraphQLFloat', function(assert) {
  assert.ok(GraphQLFloat);
});

test('it exports GraphQLString', function(assert) {
  assert.ok(GraphQLString);
});

test('it exports GraphQLBoolean', function(assert) {
  assert.ok(GraphQLBoolean);
});

test('it exports GraphQLID', function(assert) {
  assert.ok(GraphQLID);
});

test('it exports specifiedDirectives', function(assert) {
  assert.ok(specifiedDirectives);
});

test('it exports GraphQLIncludeDirective', function(assert) {
  assert.ok(GraphQLIncludeDirective);
});

test('it exports GraphQLSkipDirective', function(assert) {
  assert.ok(GraphQLSkipDirective);
});

test('it exports GraphQLDeprecatedDirective', function(assert) {
  assert.ok(GraphQLDeprecatedDirective);
});

test('it exports DEFAULT_DEPRECATION_REASON', function(assert) {
  assert.ok(DEFAULT_DEPRECATION_REASON);
});

test('it exports SchemaMetaFieldDef', function(assert) {
  assert.ok(SchemaMetaFieldDef);
});

test('it exports TypeMetaFieldDef', function(assert) {
  assert.ok(TypeMetaFieldDef);
});

test('it exports TypeNameMetaFieldDef', function(assert) {
  assert.ok(TypeNameMetaFieldDef);
});

test('it exports __Schema', function(assert) {
  assert.ok(__Schema);
});

test('it exports __Directive', function(assert) {
  assert.ok(__Directive);
});

test('it exports __DirectiveLocation', function(assert) {
  assert.ok(__DirectiveLocation);
});

test('it exports __Type', function(assert) {
  assert.ok(__Type);
});

test('it exports __Field', function(assert) {
  assert.ok(__Field);
});

test('it exports __InputValue', function(assert) {
  assert.ok(__InputValue);
});

test('it exports __EnumValue', function(assert) {
  assert.ok(__EnumValue);
});

test('it exports __TypeKind', function(assert) {
  assert.ok(__TypeKind);
});

test('it exports isType', function(assert) {
  assert.ok(isType);
});

test('it exports isInputType', function(assert) {
  assert.ok(isInputType);
});

test('it exports isOutputType', function(assert) {
  assert.ok(isOutputType);
});

test('it exports isLeafType', function(assert) {
  assert.ok(isLeafType);
});

test('it exports isCompositeType', function(assert) {
  assert.ok(isCompositeType);
});

test('it exports isAbstractType', function(assert) {
  assert.ok(isAbstractType);
});

test('it exports assertType', function(assert) {
  assert.ok(assertType);
});

test('it exports assertInputType', function(assert) {
  assert.ok(assertInputType);
});

test('it exports assertOutputType', function(assert) {
  assert.ok(assertOutputType);
});

test('it exports assertLeafType', function(assert) {
  assert.ok(assertLeafType);
});

test('it exports assertCompositeType', function(assert) {
  assert.ok(assertCompositeType);
});

test('it exports assertAbstractType', function(assert) {
  assert.ok(assertAbstractType);
});

test('it exports getNullableType', function(assert) {
  assert.ok(getNullableType);
});

test('it exports getNamedType', function(assert) {
  assert.ok(getNamedType);
});
