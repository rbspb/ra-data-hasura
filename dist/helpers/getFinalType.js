'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const graphql_1 = require('graphql');
/**
 * Ensure we get the real type even if the root type is NON_NULL or LIST
 * @param {GraphQLType} type
 */
const getFinalType = (type) => {
  if (
    type.kind === graphql_1.TypeKind.NON_NULL ||
    type.kind === graphql_1.TypeKind.LIST
  ) {
    return getFinalType(type.ofType);
  }
  return type;
};
exports.default = getFinalType;
