// Warning at test_files/type_and_value/type_and_value.ts:10:5: unhandled anonymous type
// Warning at test_files/type_and_value/type_and_value.ts:16:5: type/symbol conflict for TypeAndValue, using {?} for now
// Warning at test_files/type_and_value/type_and_value.ts:19:5: type/symbol conflict for TemplatizedTypeAndValue, using {?} for now
goog.module('test_files.type_and_value.type_and_value');var module = module || {id: 'test_files/type_and_value/type_and_value.js'};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

var conflict = goog.require('test_files.type_and_value.module');
// This test deals with symbols that are simultaneously types and values.
// Use a browser built-in as both a type and a value.
let /** @type {function(new: (!Document)): ?} */ useBuiltInAsValue = Document;
let /** @type {!Document} */ useBuiltInAsType;
// Use a user-defined class as both a type and a value.
let /** @type {?} */ useUserClassAsValue = conflict.Class;
let /** @type {!conflict.Class} */ useUserClassAsType;
// Use a user-defined interface/value pair as both a type and a value.
let /** @type {number} */ useAsValue = conflict.TypeAndValue;
// Note: because of the conflict, we currently just use the type {?} here.
let /** @type {?} */ useAsType;
// Use a templatized user-defined interface/value pair as a type.
let /** @type {?} */ useAsTypeTemplatized;
