// source: pkg/api/v1/purchases/purchase_service.proto
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

var pkg_api_v1_purchases_purchase_message_pb = require('../../../../pkg/api/v1/purchases/purchase_message_pb.js');
goog.object.extend(proto, pkg_api_v1_purchases_purchase_message_pb);
var pkg_api_v1_purchases_generic_message_pb = require('../../../../pkg/api/v1/purchases/generic_message_pb.js');
goog.object.extend(proto, pkg_api_v1_purchases_generic_message_pb);
goog.exportSymbol('proto.v1.purchases.ListPurchaseRequest', null, global);
goog.exportSymbol('proto.v1.purchases.ListPurchaseResponse', null, global);
goog.exportSymbol('proto.v1.purchases.PurchasePaginationResponse', null, global);
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
proto.v1.purchases.ListPurchaseRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.purchases.ListPurchaseRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.purchases.ListPurchaseRequest.displayName = 'proto.v1.purchases.ListPurchaseRequest';
}
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
proto.v1.purchases.PurchasePaginationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.purchases.PurchasePaginationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.purchases.PurchasePaginationResponse.displayName = 'proto.v1.purchases.PurchasePaginationResponse';
}
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
proto.v1.purchases.ListPurchaseResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.purchases.ListPurchaseResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.purchases.ListPurchaseResponse.displayName = 'proto.v1.purchases.ListPurchaseResponse';
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
proto.v1.purchases.ListPurchaseRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.purchases.ListPurchaseRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.purchases.ListPurchaseRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.purchases.ListPurchaseRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pagination: (f = msg.getPagination()) && pkg_api_v1_purchases_generic_message_pb.Pagination.toObject(includeInstance, f),
    branchId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    supplierId: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.v1.purchases.ListPurchaseRequest}
 */
proto.v1.purchases.ListPurchaseRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.purchases.ListPurchaseRequest;
  return proto.v1.purchases.ListPurchaseRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.purchases.ListPurchaseRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.purchases.ListPurchaseRequest}
 */
proto.v1.purchases.ListPurchaseRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new pkg_api_v1_purchases_generic_message_pb.Pagination;
      reader.readMessage(value,pkg_api_v1_purchases_generic_message_pb.Pagination.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBranchId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSupplierId(value);
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
proto.v1.purchases.ListPurchaseRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.purchases.ListPurchaseRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.purchases.ListPurchaseRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.purchases.ListPurchaseRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      pkg_api_v1_purchases_generic_message_pb.Pagination.serializeBinaryToWriter
    );
  }
  f = message.getBranchId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSupplierId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional Pagination pagination = 1;
 * @return {?proto.v1.purchases.Pagination}
 */
proto.v1.purchases.ListPurchaseRequest.prototype.getPagination = function() {
  return /** @type{?proto.v1.purchases.Pagination} */ (
    jspb.Message.getWrapperField(this, pkg_api_v1_purchases_generic_message_pb.Pagination, 1));
};


/**
 * @param {?proto.v1.purchases.Pagination|undefined} value
 * @return {!proto.v1.purchases.ListPurchaseRequest} returns this
*/
proto.v1.purchases.ListPurchaseRequest.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.purchases.ListPurchaseRequest} returns this
 */
proto.v1.purchases.ListPurchaseRequest.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.purchases.ListPurchaseRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string branch_id = 2;
 * @return {string}
 */
proto.v1.purchases.ListPurchaseRequest.prototype.getBranchId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.purchases.ListPurchaseRequest} returns this
 */
proto.v1.purchases.ListPurchaseRequest.prototype.setBranchId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string supplier_id = 3;
 * @return {string}
 */
proto.v1.purchases.ListPurchaseRequest.prototype.getSupplierId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.purchases.ListPurchaseRequest} returns this
 */
proto.v1.purchases.ListPurchaseRequest.prototype.setSupplierId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





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
proto.v1.purchases.PurchasePaginationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.purchases.PurchasePaginationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.purchases.PurchasePaginationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.purchases.PurchasePaginationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    pagination: (f = msg.getPagination()) && pkg_api_v1_purchases_generic_message_pb.Pagination.toObject(includeInstance, f),
    branchId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    supplierId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    count: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.v1.purchases.PurchasePaginationResponse}
 */
proto.v1.purchases.PurchasePaginationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.purchases.PurchasePaginationResponse;
  return proto.v1.purchases.PurchasePaginationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.purchases.PurchasePaginationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.purchases.PurchasePaginationResponse}
 */
proto.v1.purchases.PurchasePaginationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new pkg_api_v1_purchases_generic_message_pb.Pagination;
      reader.readMessage(value,pkg_api_v1_purchases_generic_message_pb.Pagination.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBranchId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSupplierId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCount(value);
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
proto.v1.purchases.PurchasePaginationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.purchases.PurchasePaginationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.purchases.PurchasePaginationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.purchases.PurchasePaginationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      pkg_api_v1_purchases_generic_message_pb.Pagination.serializeBinaryToWriter
    );
  }
  f = message.getBranchId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSupplierId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional Pagination pagination = 1;
 * @return {?proto.v1.purchases.Pagination}
 */
proto.v1.purchases.PurchasePaginationResponse.prototype.getPagination = function() {
  return /** @type{?proto.v1.purchases.Pagination} */ (
    jspb.Message.getWrapperField(this, pkg_api_v1_purchases_generic_message_pb.Pagination, 1));
};


/**
 * @param {?proto.v1.purchases.Pagination|undefined} value
 * @return {!proto.v1.purchases.PurchasePaginationResponse} returns this
*/
proto.v1.purchases.PurchasePaginationResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.purchases.PurchasePaginationResponse} returns this
 */
proto.v1.purchases.PurchasePaginationResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.purchases.PurchasePaginationResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string branch_id = 2;
 * @return {string}
 */
proto.v1.purchases.PurchasePaginationResponse.prototype.getBranchId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.purchases.PurchasePaginationResponse} returns this
 */
proto.v1.purchases.PurchasePaginationResponse.prototype.setBranchId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string supplier_id = 3;
 * @return {string}
 */
proto.v1.purchases.PurchasePaginationResponse.prototype.getSupplierId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.purchases.PurchasePaginationResponse} returns this
 */
proto.v1.purchases.PurchasePaginationResponse.prototype.setSupplierId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint32 count = 4;
 * @return {number}
 */
proto.v1.purchases.PurchasePaginationResponse.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.purchases.PurchasePaginationResponse} returns this
 */
proto.v1.purchases.PurchasePaginationResponse.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





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
proto.v1.purchases.ListPurchaseResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.purchases.ListPurchaseResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.purchases.ListPurchaseResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.purchases.ListPurchaseResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    pagination: (f = msg.getPagination()) && proto.v1.purchases.PurchasePaginationResponse.toObject(includeInstance, f),
    purchase: (f = msg.getPurchase()) && pkg_api_v1_purchases_purchase_message_pb.Purchase.toObject(includeInstance, f)
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
 * @return {!proto.v1.purchases.ListPurchaseResponse}
 */
proto.v1.purchases.ListPurchaseResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.purchases.ListPurchaseResponse;
  return proto.v1.purchases.ListPurchaseResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.purchases.ListPurchaseResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.purchases.ListPurchaseResponse}
 */
proto.v1.purchases.ListPurchaseResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.v1.purchases.PurchasePaginationResponse;
      reader.readMessage(value,proto.v1.purchases.PurchasePaginationResponse.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    case 2:
      var value = new pkg_api_v1_purchases_purchase_message_pb.Purchase;
      reader.readMessage(value,pkg_api_v1_purchases_purchase_message_pb.Purchase.deserializeBinaryFromReader);
      msg.setPurchase(value);
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
proto.v1.purchases.ListPurchaseResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.purchases.ListPurchaseResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.purchases.ListPurchaseResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.purchases.ListPurchaseResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.v1.purchases.PurchasePaginationResponse.serializeBinaryToWriter
    );
  }
  f = message.getPurchase();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      pkg_api_v1_purchases_purchase_message_pb.Purchase.serializeBinaryToWriter
    );
  }
};


/**
 * optional PurchasePaginationResponse pagination = 1;
 * @return {?proto.v1.purchases.PurchasePaginationResponse}
 */
proto.v1.purchases.ListPurchaseResponse.prototype.getPagination = function() {
  return /** @type{?proto.v1.purchases.PurchasePaginationResponse} */ (
    jspb.Message.getWrapperField(this, proto.v1.purchases.PurchasePaginationResponse, 1));
};


/**
 * @param {?proto.v1.purchases.PurchasePaginationResponse|undefined} value
 * @return {!proto.v1.purchases.ListPurchaseResponse} returns this
*/
proto.v1.purchases.ListPurchaseResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.purchases.ListPurchaseResponse} returns this
 */
proto.v1.purchases.ListPurchaseResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.purchases.ListPurchaseResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Purchase purchase = 2;
 * @return {?proto.v1.purchases.Purchase}
 */
proto.v1.purchases.ListPurchaseResponse.prototype.getPurchase = function() {
  return /** @type{?proto.v1.purchases.Purchase} */ (
    jspb.Message.getWrapperField(this, pkg_api_v1_purchases_purchase_message_pb.Purchase, 2));
};


/**
 * @param {?proto.v1.purchases.Purchase|undefined} value
 * @return {!proto.v1.purchases.ListPurchaseResponse} returns this
*/
proto.v1.purchases.ListPurchaseResponse.prototype.setPurchase = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.purchases.ListPurchaseResponse} returns this
 */
proto.v1.purchases.ListPurchaseResponse.prototype.clearPurchase = function() {
  return this.setPurchase(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.purchases.ListPurchaseResponse.prototype.hasPurchase = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.v1.purchases);
