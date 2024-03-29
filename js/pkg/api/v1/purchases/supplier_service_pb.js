// source: pkg/api/v1/purchases/supplier_service.proto
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

var pkg_api_v1_purchases_supplier_message_pb = require('../../../../pkg/api/v1/purchases/supplier_message_pb.js');
goog.object.extend(proto, pkg_api_v1_purchases_supplier_message_pb);
var pkg_api_v1_purchases_generic_message_pb = require('../../../../pkg/api/v1/purchases/generic_message_pb.js');
goog.object.extend(proto, pkg_api_v1_purchases_generic_message_pb);
goog.exportSymbol('proto.v1.purchases.ListSupplierRequest', null, global);
goog.exportSymbol('proto.v1.purchases.ListSupplierResponse', null, global);
goog.exportSymbol('proto.v1.purchases.SupplierPaginationResponse', null, global);
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
proto.v1.purchases.ListSupplierRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.purchases.ListSupplierRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.purchases.ListSupplierRequest.displayName = 'proto.v1.purchases.ListSupplierRequest';
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
proto.v1.purchases.SupplierPaginationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.purchases.SupplierPaginationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.purchases.SupplierPaginationResponse.displayName = 'proto.v1.purchases.SupplierPaginationResponse';
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
proto.v1.purchases.ListSupplierResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.purchases.ListSupplierResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.purchases.ListSupplierResponse.displayName = 'proto.v1.purchases.ListSupplierResponse';
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
proto.v1.purchases.ListSupplierRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.purchases.ListSupplierRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.purchases.ListSupplierRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.purchases.ListSupplierRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pagination: (f = msg.getPagination()) && pkg_api_v1_purchases_generic_message_pb.Pagination.toObject(includeInstance, f)
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
 * @return {!proto.v1.purchases.ListSupplierRequest}
 */
proto.v1.purchases.ListSupplierRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.purchases.ListSupplierRequest;
  return proto.v1.purchases.ListSupplierRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.purchases.ListSupplierRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.purchases.ListSupplierRequest}
 */
proto.v1.purchases.ListSupplierRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.v1.purchases.ListSupplierRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.purchases.ListSupplierRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.purchases.ListSupplierRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.purchases.ListSupplierRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      pkg_api_v1_purchases_generic_message_pb.Pagination.serializeBinaryToWriter
    );
  }
};


/**
 * optional Pagination pagination = 1;
 * @return {?proto.v1.purchases.Pagination}
 */
proto.v1.purchases.ListSupplierRequest.prototype.getPagination = function() {
  return /** @type{?proto.v1.purchases.Pagination} */ (
    jspb.Message.getWrapperField(this, pkg_api_v1_purchases_generic_message_pb.Pagination, 1));
};


/**
 * @param {?proto.v1.purchases.Pagination|undefined} value
 * @return {!proto.v1.purchases.ListSupplierRequest} returns this
*/
proto.v1.purchases.ListSupplierRequest.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.purchases.ListSupplierRequest} returns this
 */
proto.v1.purchases.ListSupplierRequest.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.purchases.ListSupplierRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.v1.purchases.SupplierPaginationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.purchases.SupplierPaginationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.purchases.SupplierPaginationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.purchases.SupplierPaginationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    pagination: (f = msg.getPagination()) && pkg_api_v1_purchases_generic_message_pb.Pagination.toObject(includeInstance, f),
    count: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.v1.purchases.SupplierPaginationResponse}
 */
proto.v1.purchases.SupplierPaginationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.purchases.SupplierPaginationResponse;
  return proto.v1.purchases.SupplierPaginationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.purchases.SupplierPaginationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.purchases.SupplierPaginationResponse}
 */
proto.v1.purchases.SupplierPaginationResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.v1.purchases.SupplierPaginationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.purchases.SupplierPaginationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.purchases.SupplierPaginationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.purchases.SupplierPaginationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      pkg_api_v1_purchases_generic_message_pb.Pagination.serializeBinaryToWriter
    );
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional Pagination pagination = 1;
 * @return {?proto.v1.purchases.Pagination}
 */
proto.v1.purchases.SupplierPaginationResponse.prototype.getPagination = function() {
  return /** @type{?proto.v1.purchases.Pagination} */ (
    jspb.Message.getWrapperField(this, pkg_api_v1_purchases_generic_message_pb.Pagination, 1));
};


/**
 * @param {?proto.v1.purchases.Pagination|undefined} value
 * @return {!proto.v1.purchases.SupplierPaginationResponse} returns this
*/
proto.v1.purchases.SupplierPaginationResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.purchases.SupplierPaginationResponse} returns this
 */
proto.v1.purchases.SupplierPaginationResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.purchases.SupplierPaginationResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint32 count = 2;
 * @return {number}
 */
proto.v1.purchases.SupplierPaginationResponse.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.purchases.SupplierPaginationResponse} returns this
 */
proto.v1.purchases.SupplierPaginationResponse.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
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
proto.v1.purchases.ListSupplierResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.purchases.ListSupplierResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.purchases.ListSupplierResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.purchases.ListSupplierResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    pagination: (f = msg.getPagination()) && proto.v1.purchases.SupplierPaginationResponse.toObject(includeInstance, f),
    supplier: (f = msg.getSupplier()) && pkg_api_v1_purchases_supplier_message_pb.Supplier.toObject(includeInstance, f)
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
 * @return {!proto.v1.purchases.ListSupplierResponse}
 */
proto.v1.purchases.ListSupplierResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.purchases.ListSupplierResponse;
  return proto.v1.purchases.ListSupplierResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.purchases.ListSupplierResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.purchases.ListSupplierResponse}
 */
proto.v1.purchases.ListSupplierResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.v1.purchases.SupplierPaginationResponse;
      reader.readMessage(value,proto.v1.purchases.SupplierPaginationResponse.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    case 2:
      var value = new pkg_api_v1_purchases_supplier_message_pb.Supplier;
      reader.readMessage(value,pkg_api_v1_purchases_supplier_message_pb.Supplier.deserializeBinaryFromReader);
      msg.setSupplier(value);
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
proto.v1.purchases.ListSupplierResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.purchases.ListSupplierResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.purchases.ListSupplierResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.purchases.ListSupplierResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.v1.purchases.SupplierPaginationResponse.serializeBinaryToWriter
    );
  }
  f = message.getSupplier();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      pkg_api_v1_purchases_supplier_message_pb.Supplier.serializeBinaryToWriter
    );
  }
};


/**
 * optional SupplierPaginationResponse pagination = 1;
 * @return {?proto.v1.purchases.SupplierPaginationResponse}
 */
proto.v1.purchases.ListSupplierResponse.prototype.getPagination = function() {
  return /** @type{?proto.v1.purchases.SupplierPaginationResponse} */ (
    jspb.Message.getWrapperField(this, proto.v1.purchases.SupplierPaginationResponse, 1));
};


/**
 * @param {?proto.v1.purchases.SupplierPaginationResponse|undefined} value
 * @return {!proto.v1.purchases.ListSupplierResponse} returns this
*/
proto.v1.purchases.ListSupplierResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.purchases.ListSupplierResponse} returns this
 */
proto.v1.purchases.ListSupplierResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.purchases.ListSupplierResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Supplier supplier = 2;
 * @return {?proto.v1.purchases.Supplier}
 */
proto.v1.purchases.ListSupplierResponse.prototype.getSupplier = function() {
  return /** @type{?proto.v1.purchases.Supplier} */ (
    jspb.Message.getWrapperField(this, pkg_api_v1_purchases_supplier_message_pb.Supplier, 2));
};


/**
 * @param {?proto.v1.purchases.Supplier|undefined} value
 * @return {!proto.v1.purchases.ListSupplierResponse} returns this
*/
proto.v1.purchases.ListSupplierResponse.prototype.setSupplier = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.purchases.ListSupplierResponse} returns this
 */
proto.v1.purchases.ListSupplierResponse.prototype.clearSupplier = function() {
  return this.setSupplier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.purchases.ListSupplierResponse.prototype.hasSupplier = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.v1.purchases);
