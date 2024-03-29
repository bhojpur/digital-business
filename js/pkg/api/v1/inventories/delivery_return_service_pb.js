// source: pkg/api/v1/inventories/delivery_return_service.proto
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

var pkg_api_v1_inventories_delivery_return_message_pb = require('../../../../pkg/api/v1/inventories/delivery_return_message_pb.js');
goog.object.extend(proto, pkg_api_v1_inventories_delivery_return_message_pb);
var pkg_api_v1_inventories_generic_message_pb = require('../../../../pkg/api/v1/inventories/generic_message_pb.js');
goog.object.extend(proto, pkg_api_v1_inventories_generic_message_pb);
goog.exportSymbol('proto.v1.inventories.DeliveryReturnPaginationResponse', null, global);
goog.exportSymbol('proto.v1.inventories.ListDeliveryReturnRequest', null, global);
goog.exportSymbol('proto.v1.inventories.ListDeliveryReturnResponse', null, global);
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
proto.v1.inventories.ListDeliveryReturnRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.inventories.ListDeliveryReturnRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.inventories.ListDeliveryReturnRequest.displayName = 'proto.v1.inventories.ListDeliveryReturnRequest';
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
proto.v1.inventories.DeliveryReturnPaginationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.inventories.DeliveryReturnPaginationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.inventories.DeliveryReturnPaginationResponse.displayName = 'proto.v1.inventories.DeliveryReturnPaginationResponse';
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
proto.v1.inventories.ListDeliveryReturnResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.inventories.ListDeliveryReturnResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.inventories.ListDeliveryReturnResponse.displayName = 'proto.v1.inventories.ListDeliveryReturnResponse';
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
proto.v1.inventories.ListDeliveryReturnRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.inventories.ListDeliveryReturnRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.inventories.ListDeliveryReturnRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.inventories.ListDeliveryReturnRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pagination: (f = msg.getPagination()) && pkg_api_v1_inventories_generic_message_pb.Pagination.toObject(includeInstance, f),
    branchId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    deliveryId: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.v1.inventories.ListDeliveryReturnRequest}
 */
proto.v1.inventories.ListDeliveryReturnRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.inventories.ListDeliveryReturnRequest;
  return proto.v1.inventories.ListDeliveryReturnRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.inventories.ListDeliveryReturnRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.inventories.ListDeliveryReturnRequest}
 */
proto.v1.inventories.ListDeliveryReturnRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new pkg_api_v1_inventories_generic_message_pb.Pagination;
      reader.readMessage(value,pkg_api_v1_inventories_generic_message_pb.Pagination.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBranchId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeliveryId(value);
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
proto.v1.inventories.ListDeliveryReturnRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.inventories.ListDeliveryReturnRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.inventories.ListDeliveryReturnRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.inventories.ListDeliveryReturnRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      pkg_api_v1_inventories_generic_message_pb.Pagination.serializeBinaryToWriter
    );
  }
  f = message.getBranchId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDeliveryId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional Pagination pagination = 1;
 * @return {?proto.v1.inventories.Pagination}
 */
proto.v1.inventories.ListDeliveryReturnRequest.prototype.getPagination = function() {
  return /** @type{?proto.v1.inventories.Pagination} */ (
    jspb.Message.getWrapperField(this, pkg_api_v1_inventories_generic_message_pb.Pagination, 1));
};


/**
 * @param {?proto.v1.inventories.Pagination|undefined} value
 * @return {!proto.v1.inventories.ListDeliveryReturnRequest} returns this
*/
proto.v1.inventories.ListDeliveryReturnRequest.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.inventories.ListDeliveryReturnRequest} returns this
 */
proto.v1.inventories.ListDeliveryReturnRequest.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.inventories.ListDeliveryReturnRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string branch_id = 2;
 * @return {string}
 */
proto.v1.inventories.ListDeliveryReturnRequest.prototype.getBranchId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.inventories.ListDeliveryReturnRequest} returns this
 */
proto.v1.inventories.ListDeliveryReturnRequest.prototype.setBranchId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string delivery_id = 3;
 * @return {string}
 */
proto.v1.inventories.ListDeliveryReturnRequest.prototype.getDeliveryId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.inventories.ListDeliveryReturnRequest} returns this
 */
proto.v1.inventories.ListDeliveryReturnRequest.prototype.setDeliveryId = function(value) {
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
proto.v1.inventories.DeliveryReturnPaginationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.inventories.DeliveryReturnPaginationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.inventories.DeliveryReturnPaginationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.inventories.DeliveryReturnPaginationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    pagination: (f = msg.getPagination()) && pkg_api_v1_inventories_generic_message_pb.Pagination.toObject(includeInstance, f),
    branchId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    deliveryId: jspb.Message.getFieldWithDefault(msg, 3, ""),
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
 * @return {!proto.v1.inventories.DeliveryReturnPaginationResponse}
 */
proto.v1.inventories.DeliveryReturnPaginationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.inventories.DeliveryReturnPaginationResponse;
  return proto.v1.inventories.DeliveryReturnPaginationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.inventories.DeliveryReturnPaginationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.inventories.DeliveryReturnPaginationResponse}
 */
proto.v1.inventories.DeliveryReturnPaginationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new pkg_api_v1_inventories_generic_message_pb.Pagination;
      reader.readMessage(value,pkg_api_v1_inventories_generic_message_pb.Pagination.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBranchId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeliveryId(value);
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
proto.v1.inventories.DeliveryReturnPaginationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.inventories.DeliveryReturnPaginationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.inventories.DeliveryReturnPaginationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.inventories.DeliveryReturnPaginationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      pkg_api_v1_inventories_generic_message_pb.Pagination.serializeBinaryToWriter
    );
  }
  f = message.getBranchId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDeliveryId();
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
 * @return {?proto.v1.inventories.Pagination}
 */
proto.v1.inventories.DeliveryReturnPaginationResponse.prototype.getPagination = function() {
  return /** @type{?proto.v1.inventories.Pagination} */ (
    jspb.Message.getWrapperField(this, pkg_api_v1_inventories_generic_message_pb.Pagination, 1));
};


/**
 * @param {?proto.v1.inventories.Pagination|undefined} value
 * @return {!proto.v1.inventories.DeliveryReturnPaginationResponse} returns this
*/
proto.v1.inventories.DeliveryReturnPaginationResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.inventories.DeliveryReturnPaginationResponse} returns this
 */
proto.v1.inventories.DeliveryReturnPaginationResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.inventories.DeliveryReturnPaginationResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string branch_id = 2;
 * @return {string}
 */
proto.v1.inventories.DeliveryReturnPaginationResponse.prototype.getBranchId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.inventories.DeliveryReturnPaginationResponse} returns this
 */
proto.v1.inventories.DeliveryReturnPaginationResponse.prototype.setBranchId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string delivery_id = 3;
 * @return {string}
 */
proto.v1.inventories.DeliveryReturnPaginationResponse.prototype.getDeliveryId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.inventories.DeliveryReturnPaginationResponse} returns this
 */
proto.v1.inventories.DeliveryReturnPaginationResponse.prototype.setDeliveryId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint32 count = 4;
 * @return {number}
 */
proto.v1.inventories.DeliveryReturnPaginationResponse.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.inventories.DeliveryReturnPaginationResponse} returns this
 */
proto.v1.inventories.DeliveryReturnPaginationResponse.prototype.setCount = function(value) {
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
proto.v1.inventories.ListDeliveryReturnResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.inventories.ListDeliveryReturnResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.inventories.ListDeliveryReturnResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.inventories.ListDeliveryReturnResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    pagination: (f = msg.getPagination()) && proto.v1.inventories.DeliveryReturnPaginationResponse.toObject(includeInstance, f),
    deliveryreturn: (f = msg.getDeliveryreturn()) && pkg_api_v1_inventories_delivery_return_message_pb.DeliveryReturn.toObject(includeInstance, f)
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
 * @return {!proto.v1.inventories.ListDeliveryReturnResponse}
 */
proto.v1.inventories.ListDeliveryReturnResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.inventories.ListDeliveryReturnResponse;
  return proto.v1.inventories.ListDeliveryReturnResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.inventories.ListDeliveryReturnResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.inventories.ListDeliveryReturnResponse}
 */
proto.v1.inventories.ListDeliveryReturnResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.v1.inventories.DeliveryReturnPaginationResponse;
      reader.readMessage(value,proto.v1.inventories.DeliveryReturnPaginationResponse.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    case 2:
      var value = new pkg_api_v1_inventories_delivery_return_message_pb.DeliveryReturn;
      reader.readMessage(value,pkg_api_v1_inventories_delivery_return_message_pb.DeliveryReturn.deserializeBinaryFromReader);
      msg.setDeliveryreturn(value);
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
proto.v1.inventories.ListDeliveryReturnResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.inventories.ListDeliveryReturnResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.inventories.ListDeliveryReturnResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.inventories.ListDeliveryReturnResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.v1.inventories.DeliveryReturnPaginationResponse.serializeBinaryToWriter
    );
  }
  f = message.getDeliveryreturn();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      pkg_api_v1_inventories_delivery_return_message_pb.DeliveryReturn.serializeBinaryToWriter
    );
  }
};


/**
 * optional DeliveryReturnPaginationResponse pagination = 1;
 * @return {?proto.v1.inventories.DeliveryReturnPaginationResponse}
 */
proto.v1.inventories.ListDeliveryReturnResponse.prototype.getPagination = function() {
  return /** @type{?proto.v1.inventories.DeliveryReturnPaginationResponse} */ (
    jspb.Message.getWrapperField(this, proto.v1.inventories.DeliveryReturnPaginationResponse, 1));
};


/**
 * @param {?proto.v1.inventories.DeliveryReturnPaginationResponse|undefined} value
 * @return {!proto.v1.inventories.ListDeliveryReturnResponse} returns this
*/
proto.v1.inventories.ListDeliveryReturnResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.inventories.ListDeliveryReturnResponse} returns this
 */
proto.v1.inventories.ListDeliveryReturnResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.inventories.ListDeliveryReturnResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional DeliveryReturn DeliveryReturn = 2;
 * @return {?proto.v1.inventories.DeliveryReturn}
 */
proto.v1.inventories.ListDeliveryReturnResponse.prototype.getDeliveryreturn = function() {
  return /** @type{?proto.v1.inventories.DeliveryReturn} */ (
    jspb.Message.getWrapperField(this, pkg_api_v1_inventories_delivery_return_message_pb.DeliveryReturn, 2));
};


/**
 * @param {?proto.v1.inventories.DeliveryReturn|undefined} value
 * @return {!proto.v1.inventories.ListDeliveryReturnResponse} returns this
*/
proto.v1.inventories.ListDeliveryReturnResponse.prototype.setDeliveryreturn = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.inventories.ListDeliveryReturnResponse} returns this
 */
proto.v1.inventories.ListDeliveryReturnResponse.prototype.clearDeliveryreturn = function() {
  return this.setDeliveryreturn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.inventories.ListDeliveryReturnResponse.prototype.hasDeliveryreturn = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.v1.inventories);
