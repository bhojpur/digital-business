// source: pkg/api/v1/inventories/product_message.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var pkg_api_v1_inventories_brand_message_pb = require('../../../../pkg/api/v1/inventories/brand_message_pb.js');
goog.object.extend(proto, pkg_api_v1_inventories_brand_message_pb);
var pkg_api_v1_inventories_product_category_message_pb = require('../../../../pkg/api/v1/inventories/product_category_message_pb.js');
goog.object.extend(proto, pkg_api_v1_inventories_product_category_message_pb);
goog.exportSymbol('proto.v1.inventories.Product', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.inventories.Product = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.inventories.Product, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.inventories.Product.displayName = 'proto.v1.inventories.Product';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.inventories.Product.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.inventories.Product.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.inventories.Product} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.inventories.Product.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    brand: (f = msg.getBrand()) && pkg_api_v1_inventories_brand_message_pb.Brand.toObject(includeInstance, f),
    productCategory: (f = msg.getProductCategory()) && pkg_api_v1_inventories_product_category_message_pb.ProductCategory.toObject(includeInstance, f),
    code: jspb.Message.getFieldWithDefault(msg, 4, ""),
    name: jspb.Message.getFieldWithDefault(msg, 5, ""),
    minimunStock: jspb.Message.getFieldWithDefault(msg, 6, 0),
    createdAt: jspb.Message.getFieldWithDefault(msg, 7, ""),
    createdBy: jspb.Message.getFieldWithDefault(msg, 8, ""),
    updatedAt: jspb.Message.getFieldWithDefault(msg, 9, ""),
    updatedBy: jspb.Message.getFieldWithDefault(msg, 10, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.inventories.Product}
 */
proto.v1.inventories.Product.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.inventories.Product;
  return proto.v1.inventories.Product.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.inventories.Product} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.inventories.Product}
 */
proto.v1.inventories.Product.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new pkg_api_v1_inventories_brand_message_pb.Brand;
      reader.readMessage(value,pkg_api_v1_inventories_brand_message_pb.Brand.deserializeBinaryFromReader);
      msg.setBrand(value);
      break;
    case 3:
      var value = new pkg_api_v1_inventories_product_category_message_pb.ProductCategory;
      reader.readMessage(value,pkg_api_v1_inventories_product_category_message_pb.ProductCategory.deserializeBinaryFromReader);
      msg.setProductCategory(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCode(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMinimunStock(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedAt(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedBy(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdatedAt(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdatedBy(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.inventories.Product.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.inventories.Product.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.inventories.Product} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.inventories.Product.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBrand();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      pkg_api_v1_inventories_brand_message_pb.Brand.serializeBinaryToWriter
    );
  }
  f = message.getProductCategory();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      pkg_api_v1_inventories_product_category_message_pb.ProductCategory.serializeBinaryToWriter
    );
  }
  f = message.getCode();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getMinimunStock();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getCreatedAt();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getCreatedBy();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getUpdatedAt();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getUpdatedBy();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.v1.inventories.Product.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.inventories.Product} returns this
 */
proto.v1.inventories.Product.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Brand brand = 2;
 * @return {?proto.v1.inventories.Brand}
 */
proto.v1.inventories.Product.prototype.getBrand = function() {
  return /** @type{?proto.v1.inventories.Brand} */ (
    jspb.Message.getWrapperField(this, pkg_api_v1_inventories_brand_message_pb.Brand, 2));
};


/**
 * @param {?proto.v1.inventories.Brand|undefined} value
 * @return {!proto.v1.inventories.Product} returns this
*/
proto.v1.inventories.Product.prototype.setBrand = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.inventories.Product} returns this
 */
proto.v1.inventories.Product.prototype.clearBrand = function() {
  return this.setBrand(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.inventories.Product.prototype.hasBrand = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ProductCategory product_category = 3;
 * @return {?proto.v1.inventories.ProductCategory}
 */
proto.v1.inventories.Product.prototype.getProductCategory = function() {
  return /** @type{?proto.v1.inventories.ProductCategory} */ (
    jspb.Message.getWrapperField(this, pkg_api_v1_inventories_product_category_message_pb.ProductCategory, 3));
};


/**
 * @param {?proto.v1.inventories.ProductCategory|undefined} value
 * @return {!proto.v1.inventories.Product} returns this
*/
proto.v1.inventories.Product.prototype.setProductCategory = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.inventories.Product} returns this
 */
proto.v1.inventories.Product.prototype.clearProductCategory = function() {
  return this.setProductCategory(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.inventories.Product.prototype.hasProductCategory = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string code = 4;
 * @return {string}
 */
proto.v1.inventories.Product.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.inventories.Product} returns this
 */
proto.v1.inventories.Product.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string name = 5;
 * @return {string}
 */
proto.v1.inventories.Product.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.inventories.Product} returns this
 */
proto.v1.inventories.Product.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional uint32 minimun_stock = 6;
 * @return {number}
 */
proto.v1.inventories.Product.prototype.getMinimunStock = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.inventories.Product} returns this
 */
proto.v1.inventories.Product.prototype.setMinimunStock = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string created_at = 7;
 * @return {string}
 */
proto.v1.inventories.Product.prototype.getCreatedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.inventories.Product} returns this
 */
proto.v1.inventories.Product.prototype.setCreatedAt = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string created_by = 8;
 * @return {string}
 */
proto.v1.inventories.Product.prototype.getCreatedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.inventories.Product} returns this
 */
proto.v1.inventories.Product.prototype.setCreatedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string updated_at = 9;
 * @return {string}
 */
proto.v1.inventories.Product.prototype.getUpdatedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.inventories.Product} returns this
 */
proto.v1.inventories.Product.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string updated_by = 10;
 * @return {string}
 */
proto.v1.inventories.Product.prototype.getUpdatedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.inventories.Product} returns this
 */
proto.v1.inventories.Product.prototype.setUpdatedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


goog.object.extend(exports, proto.v1.inventories);
