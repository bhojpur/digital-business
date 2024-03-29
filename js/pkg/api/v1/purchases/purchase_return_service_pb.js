// source: pkg/api/v1/purchases/purchase_return_service.proto
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

var pkg_api_v1_purchases_purchase_return_message_pb = require('../../../../pkg/api/v1/purchases/purchase_return_message_pb.js');
goog.object.extend(proto, pkg_api_v1_purchases_purchase_return_message_pb);
var pkg_api_v1_purchases_generic_message_pb = require('../../../../pkg/api/v1/purchases/generic_message_pb.js');
goog.object.extend(proto, pkg_api_v1_purchases_generic_message_pb);
goog.exportSymbol('proto.v1.purchases.ListPurchaseReturnRequest', null, global);
goog.exportSymbol('proto.v1.purchases.ListPurchaseReturnResponse', null, global);
goog.exportSymbol('proto.v1.purchases.PurchaseReturnPaginationResponse', null, global);
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
proto.v1.purchases.ListPurchaseReturnRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.purchases.ListPurchaseReturnRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.purchases.ListPurchaseReturnRequest.displayName = 'proto.v1.purchases.ListPurchaseReturnRequest';
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
proto.v1.purchases.PurchaseReturnPaginationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.purchases.PurchaseReturnPaginationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.purchases.PurchaseReturnPaginationResponse.displayName = 'proto.v1.purchases.PurchaseReturnPaginationResponse';
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
proto.v1.purchases.ListPurchaseReturnResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.purchases.ListPurchaseReturnResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.purchases.ListPurchaseReturnResponse.displayName = 'proto.v1.purchases.ListPurchaseReturnResponse';
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
proto.v1.purchases.ListPurchaseReturnRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.purchases.ListPurchaseReturnRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.purchases.ListPurchaseReturnRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.purchases.ListPurchaseReturnRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pagination: (f = msg.getPagination()) && pkg_api_v1_purchases_generic_message_pb.Pagination.toObject(includeInstance, f),
    branchId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    purchaseId: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.v1.purchases.ListPurchaseReturnRequest}
 */
proto.v1.purchases.ListPurchaseReturnRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.purchases.ListPurchaseReturnRequest;
  return proto.v1.purchases.ListPurchaseReturnRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.purchases.ListPurchaseReturnRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.purchases.ListPurchaseReturnRequest}
 */
proto.v1.purchases.ListPurchaseReturnRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setPurchaseId(value);
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
proto.v1.purchases.ListPurchaseReturnRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.purchases.ListPurchaseReturnRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.purchases.ListPurchaseReturnRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.purchases.ListPurchaseReturnRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getPurchaseId();
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
proto.v1.purchases.ListPurchaseReturnRequest.prototype.getPagination = function() {
  return /** @type{?proto.v1.purchases.Pagination} */ (
    jspb.Message.getWrapperField(this, pkg_api_v1_purchases_generic_message_pb.Pagination, 1));
};


/**
 * @param {?proto.v1.purchases.Pagination|undefined} value
 * @return {!proto.v1.purchases.ListPurchaseReturnRequest} returns this
*/
proto.v1.purchases.ListPurchaseReturnRequest.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.purchases.ListPurchaseReturnRequest} returns this
 */
proto.v1.purchases.ListPurchaseReturnRequest.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.purchases.ListPurchaseReturnRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string branch_id = 2;
 * @return {string}
 */
proto.v1.purchases.ListPurchaseReturnRequest.prototype.getBranchId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.purchases.ListPurchaseReturnRequest} returns this
 */
proto.v1.purchases.ListPurchaseReturnRequest.prototype.setBranchId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string purchase_id = 3;
 * @return {string}
 */
proto.v1.purchases.ListPurchaseReturnRequest.prototype.getPurchaseId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.purchases.ListPurchaseReturnRequest} returns this
 */
proto.v1.purchases.ListPurchaseReturnRequest.prototype.setPurchaseId = function(value) {
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
proto.v1.purchases.PurchaseReturnPaginationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.purchases.PurchaseReturnPaginationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.purchases.PurchaseReturnPaginationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.purchases.PurchaseReturnPaginationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    pagination: (f = msg.getPagination()) && pkg_api_v1_purchases_generic_message_pb.Pagination.toObject(includeInstance, f),
    branchId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    purchaseId: jspb.Message.getFieldWithDefault(msg, 3, ""),
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
 * @return {!proto.v1.purchases.PurchaseReturnPaginationResponse}
 */
proto.v1.purchases.PurchaseReturnPaginationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.purchases.PurchaseReturnPaginationResponse;
  return proto.v1.purchases.PurchaseReturnPaginationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.purchases.PurchaseReturnPaginationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.purchases.PurchaseReturnPaginationResponse}
 */
proto.v1.purchases.PurchaseReturnPaginationResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setPurchaseId(value);
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
proto.v1.purchases.PurchaseReturnPaginationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.purchases.PurchaseReturnPaginationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.purchases.PurchaseReturnPaginationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.purchases.PurchaseReturnPaginationResponse.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getPurchaseId();
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
proto.v1.purchases.PurchaseReturnPaginationResponse.prototype.getPagination = function() {
  return /** @type{?proto.v1.purchases.Pagination} */ (
    jspb.Message.getWrapperField(this, pkg_api_v1_purchases_generic_message_pb.Pagination, 1));
};


/**
 * @param {?proto.v1.purchases.Pagination|undefined} value
 * @return {!proto.v1.purchases.PurchaseReturnPaginationResponse} returns this
*/
proto.v1.purchases.PurchaseReturnPaginationResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.purchases.PurchaseReturnPaginationResponse} returns this
 */
proto.v1.purchases.PurchaseReturnPaginationResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.purchases.PurchaseReturnPaginationResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string branch_id = 2;
 * @return {string}
 */
proto.v1.purchases.PurchaseReturnPaginationResponse.prototype.getBranchId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.purchases.PurchaseReturnPaginationResponse} returns this
 */
proto.v1.purchases.PurchaseReturnPaginationResponse.prototype.setBranchId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string purchase_id = 3;
 * @return {string}
 */
proto.v1.purchases.PurchaseReturnPaginationResponse.prototype.getPurchaseId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.purchases.PurchaseReturnPaginationResponse} returns this
 */
proto.v1.purchases.PurchaseReturnPaginationResponse.prototype.setPurchaseId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint32 count = 4;
 * @return {number}
 */
proto.v1.purchases.PurchaseReturnPaginationResponse.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.purchases.PurchaseReturnPaginationResponse} returns this
 */
proto.v1.purchases.PurchaseReturnPaginationResponse.prototype.setCount = function(value) {
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
proto.v1.purchases.ListPurchaseReturnResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.purchases.ListPurchaseReturnResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.purchases.ListPurchaseReturnResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.purchases.ListPurchaseReturnResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    pagination: (f = msg.getPagination()) && proto.v1.purchases.PurchaseReturnPaginationResponse.toObject(includeInstance, f),
    purchasereturn: (f = msg.getPurchasereturn()) && pkg_api_v1_purchases_purchase_return_message_pb.PurchaseReturn.toObject(includeInstance, f)
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
 * @return {!proto.v1.purchases.ListPurchaseReturnResponse}
 */
proto.v1.purchases.ListPurchaseReturnResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.purchases.ListPurchaseReturnResponse;
  return proto.v1.purchases.ListPurchaseReturnResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.purchases.ListPurchaseReturnResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.purchases.ListPurchaseReturnResponse}
 */
proto.v1.purchases.ListPurchaseReturnResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.v1.purchases.PurchaseReturnPaginationResponse;
      reader.readMessage(value,proto.v1.purchases.PurchaseReturnPaginationResponse.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    case 2:
      var value = new pkg_api_v1_purchases_purchase_return_message_pb.PurchaseReturn;
      reader.readMessage(value,pkg_api_v1_purchases_purchase_return_message_pb.PurchaseReturn.deserializeBinaryFromReader);
      msg.setPurchasereturn(value);
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
proto.v1.purchases.ListPurchaseReturnResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.purchases.ListPurchaseReturnResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.purchases.ListPurchaseReturnResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.purchases.ListPurchaseReturnResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.v1.purchases.PurchaseReturnPaginationResponse.serializeBinaryToWriter
    );
  }
  f = message.getPurchasereturn();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      pkg_api_v1_purchases_purchase_return_message_pb.PurchaseReturn.serializeBinaryToWriter
    );
  }
};


/**
 * optional PurchaseReturnPaginationResponse pagination = 1;
 * @return {?proto.v1.purchases.PurchaseReturnPaginationResponse}
 */
proto.v1.purchases.ListPurchaseReturnResponse.prototype.getPagination = function() {
  return /** @type{?proto.v1.purchases.PurchaseReturnPaginationResponse} */ (
    jspb.Message.getWrapperField(this, proto.v1.purchases.PurchaseReturnPaginationResponse, 1));
};


/**
 * @param {?proto.v1.purchases.PurchaseReturnPaginationResponse|undefined} value
 * @return {!proto.v1.purchases.ListPurchaseReturnResponse} returns this
*/
proto.v1.purchases.ListPurchaseReturnResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.purchases.ListPurchaseReturnResponse} returns this
 */
proto.v1.purchases.ListPurchaseReturnResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.purchases.ListPurchaseReturnResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PurchaseReturn PurchaseReturn = 2;
 * @return {?proto.v1.purchases.PurchaseReturn}
 */
proto.v1.purchases.ListPurchaseReturnResponse.prototype.getPurchasereturn = function() {
  return /** @type{?proto.v1.purchases.PurchaseReturn} */ (
    jspb.Message.getWrapperField(this, pkg_api_v1_purchases_purchase_return_message_pb.PurchaseReturn, 2));
};


/**
 * @param {?proto.v1.purchases.PurchaseReturn|undefined} value
 * @return {!proto.v1.purchases.ListPurchaseReturnResponse} returns this
*/
proto.v1.purchases.ListPurchaseReturnResponse.prototype.setPurchasereturn = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.purchases.ListPurchaseReturnResponse} returns this
 */
proto.v1.purchases.ListPurchaseReturnResponse.prototype.clearPurchasereturn = function() {
  return this.setPurchasereturn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.purchases.ListPurchaseReturnResponse.prototype.hasPurchasereturn = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.v1.purchases);
