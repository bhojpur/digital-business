// source: pkg/api/v1/inventories/receive_return_detail_message.proto
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

var pkg_api_v1_inventories_product_message_pb = require('../../../../pkg/api/v1/inventories/product_message_pb.js');
goog.object.extend(proto, pkg_api_v1_inventories_product_message_pb);
var pkg_api_v1_inventories_shelve_message_pb = require('../../../../pkg/api/v1/inventories/shelve_message_pb.js');
goog.object.extend(proto, pkg_api_v1_inventories_shelve_message_pb);
goog.exportSymbol('proto.v1.inventories.ReceiveReturnDetail', null, global);
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
proto.v1.inventories.ReceiveReturnDetail = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.inventories.ReceiveReturnDetail, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.inventories.ReceiveReturnDetail.displayName = 'proto.v1.inventories.ReceiveReturnDetail';
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
proto.v1.inventories.ReceiveReturnDetail.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.inventories.ReceiveReturnDetail.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.inventories.ReceiveReturnDetail} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.inventories.ReceiveReturnDetail.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    receiveReturnId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    product: (f = msg.getProduct()) && pkg_api_v1_inventories_product_message_pb.Product.toObject(includeInstance, f),
    shelve: (f = msg.getShelve()) && pkg_api_v1_inventories_shelve_message_pb.Shelve.toObject(includeInstance, f),
    code: jspb.Message.getFieldWithDefault(msg, 5, ""),
    qty: jspb.Message.getFieldWithDefault(msg, 6, 0)
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
 * @return {!proto.v1.inventories.ReceiveReturnDetail}
 */
proto.v1.inventories.ReceiveReturnDetail.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.inventories.ReceiveReturnDetail;
  return proto.v1.inventories.ReceiveReturnDetail.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.inventories.ReceiveReturnDetail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.inventories.ReceiveReturnDetail}
 */
proto.v1.inventories.ReceiveReturnDetail.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setReceiveReturnId(value);
      break;
    case 3:
      var value = new pkg_api_v1_inventories_product_message_pb.Product;
      reader.readMessage(value,pkg_api_v1_inventories_product_message_pb.Product.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 4:
      var value = new pkg_api_v1_inventories_shelve_message_pb.Shelve;
      reader.readMessage(value,pkg_api_v1_inventories_shelve_message_pb.Shelve.deserializeBinaryFromReader);
      msg.setShelve(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCode(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setQty(value);
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
proto.v1.inventories.ReceiveReturnDetail.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.inventories.ReceiveReturnDetail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.inventories.ReceiveReturnDetail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.inventories.ReceiveReturnDetail.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getReceiveReturnId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      pkg_api_v1_inventories_product_message_pb.Product.serializeBinaryToWriter
    );
  }
  f = message.getShelve();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      pkg_api_v1_inventories_shelve_message_pb.Shelve.serializeBinaryToWriter
    );
  }
  f = message.getCode();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getQty();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.v1.inventories.ReceiveReturnDetail.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.inventories.ReceiveReturnDetail} returns this
 */
proto.v1.inventories.ReceiveReturnDetail.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string receive_return_id = 2;
 * @return {string}
 */
proto.v1.inventories.ReceiveReturnDetail.prototype.getReceiveReturnId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.inventories.ReceiveReturnDetail} returns this
 */
proto.v1.inventories.ReceiveReturnDetail.prototype.setReceiveReturnId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Product product = 3;
 * @return {?proto.v1.inventories.Product}
 */
proto.v1.inventories.ReceiveReturnDetail.prototype.getProduct = function() {
  return /** @type{?proto.v1.inventories.Product} */ (
    jspb.Message.getWrapperField(this, pkg_api_v1_inventories_product_message_pb.Product, 3));
};


/**
 * @param {?proto.v1.inventories.Product|undefined} value
 * @return {!proto.v1.inventories.ReceiveReturnDetail} returns this
*/
proto.v1.inventories.ReceiveReturnDetail.prototype.setProduct = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.inventories.ReceiveReturnDetail} returns this
 */
proto.v1.inventories.ReceiveReturnDetail.prototype.clearProduct = function() {
  return this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.inventories.ReceiveReturnDetail.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Shelve shelve = 4;
 * @return {?proto.v1.inventories.Shelve}
 */
proto.v1.inventories.ReceiveReturnDetail.prototype.getShelve = function() {
  return /** @type{?proto.v1.inventories.Shelve} */ (
    jspb.Message.getWrapperField(this, pkg_api_v1_inventories_shelve_message_pb.Shelve, 4));
};


/**
 * @param {?proto.v1.inventories.Shelve|undefined} value
 * @return {!proto.v1.inventories.ReceiveReturnDetail} returns this
*/
proto.v1.inventories.ReceiveReturnDetail.prototype.setShelve = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.inventories.ReceiveReturnDetail} returns this
 */
proto.v1.inventories.ReceiveReturnDetail.prototype.clearShelve = function() {
  return this.setShelve(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.inventories.ReceiveReturnDetail.prototype.hasShelve = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string code = 5;
 * @return {string}
 */
proto.v1.inventories.ReceiveReturnDetail.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.inventories.ReceiveReturnDetail} returns this
 */
proto.v1.inventories.ReceiveReturnDetail.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional uint32 qty = 6;
 * @return {number}
 */
proto.v1.inventories.ReceiveReturnDetail.prototype.getQty = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.inventories.ReceiveReturnDetail} returns this
 */
proto.v1.inventories.ReceiveReturnDetail.prototype.setQty = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


goog.object.extend(exports, proto.v1.inventories);