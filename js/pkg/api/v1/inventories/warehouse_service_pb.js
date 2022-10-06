// source: pkg/api/v1/inventories/warehouse_service.proto
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

var pkg_api_v1_inventories_warehouse_message_pb = require('../../../../pkg/api/v1/inventories/warehouse_message_pb.js');
goog.object.extend(proto, pkg_api_v1_inventories_warehouse_message_pb);
var pkg_api_v1_inventories_generic_message_pb = require('../../../../pkg/api/v1/inventories/generic_message_pb.js');
goog.object.extend(proto, pkg_api_v1_inventories_generic_message_pb);
goog.exportSymbol('proto.v1.inventories.ListWarehouseRequest', null, global);
goog.exportSymbol('proto.v1.inventories.ListWarehouseResponse', null, global);
goog.exportSymbol('proto.v1.inventories.WarehousePaginationResponse', null, global);
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
proto.v1.inventories.ListWarehouseRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.inventories.ListWarehouseRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.inventories.ListWarehouseRequest.displayName = 'proto.v1.inventories.ListWarehouseRequest';
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
proto.v1.inventories.WarehousePaginationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.inventories.WarehousePaginationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.inventories.WarehousePaginationResponse.displayName = 'proto.v1.inventories.WarehousePaginationResponse';
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
proto.v1.inventories.ListWarehouseResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.inventories.ListWarehouseResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.inventories.ListWarehouseResponse.displayName = 'proto.v1.inventories.ListWarehouseResponse';
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
proto.v1.inventories.ListWarehouseRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.inventories.ListWarehouseRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.inventories.ListWarehouseRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.inventories.ListWarehouseRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pagination: (f = msg.getPagination()) && pkg_api_v1_inventories_generic_message_pb.Pagination.toObject(includeInstance, f),
    branchId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.v1.inventories.ListWarehouseRequest}
 */
proto.v1.inventories.ListWarehouseRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.inventories.ListWarehouseRequest;
  return proto.v1.inventories.ListWarehouseRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.inventories.ListWarehouseRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.inventories.ListWarehouseRequest}
 */
proto.v1.inventories.ListWarehouseRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.v1.inventories.ListWarehouseRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.inventories.ListWarehouseRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.inventories.ListWarehouseRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.inventories.ListWarehouseRequest.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional Pagination pagination = 1;
 * @return {?proto.v1.inventories.Pagination}
 */
proto.v1.inventories.ListWarehouseRequest.prototype.getPagination = function() {
  return /** @type{?proto.v1.inventories.Pagination} */ (
    jspb.Message.getWrapperField(this, pkg_api_v1_inventories_generic_message_pb.Pagination, 1));
};


/**
 * @param {?proto.v1.inventories.Pagination|undefined} value
 * @return {!proto.v1.inventories.ListWarehouseRequest} returns this
*/
proto.v1.inventories.ListWarehouseRequest.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.inventories.ListWarehouseRequest} returns this
 */
proto.v1.inventories.ListWarehouseRequest.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.inventories.ListWarehouseRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string branch_id = 2;
 * @return {string}
 */
proto.v1.inventories.ListWarehouseRequest.prototype.getBranchId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.inventories.ListWarehouseRequest} returns this
 */
proto.v1.inventories.ListWarehouseRequest.prototype.setBranchId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.v1.inventories.WarehousePaginationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.inventories.WarehousePaginationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.inventories.WarehousePaginationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.inventories.WarehousePaginationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    pagination: (f = msg.getPagination()) && pkg_api_v1_inventories_generic_message_pb.Pagination.toObject(includeInstance, f),
    branchId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    count: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.v1.inventories.WarehousePaginationResponse}
 */
proto.v1.inventories.WarehousePaginationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.inventories.WarehousePaginationResponse;
  return proto.v1.inventories.WarehousePaginationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.inventories.WarehousePaginationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.inventories.WarehousePaginationResponse}
 */
proto.v1.inventories.WarehousePaginationResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.v1.inventories.WarehousePaginationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.inventories.WarehousePaginationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.inventories.WarehousePaginationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.inventories.WarehousePaginationResponse.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getCount();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional Pagination pagination = 1;
 * @return {?proto.v1.inventories.Pagination}
 */
proto.v1.inventories.WarehousePaginationResponse.prototype.getPagination = function() {
  return /** @type{?proto.v1.inventories.Pagination} */ (
    jspb.Message.getWrapperField(this, pkg_api_v1_inventories_generic_message_pb.Pagination, 1));
};


/**
 * @param {?proto.v1.inventories.Pagination|undefined} value
 * @return {!proto.v1.inventories.WarehousePaginationResponse} returns this
*/
proto.v1.inventories.WarehousePaginationResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.inventories.WarehousePaginationResponse} returns this
 */
proto.v1.inventories.WarehousePaginationResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.inventories.WarehousePaginationResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string branch_id = 2;
 * @return {string}
 */
proto.v1.inventories.WarehousePaginationResponse.prototype.getBranchId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.inventories.WarehousePaginationResponse} returns this
 */
proto.v1.inventories.WarehousePaginationResponse.prototype.setBranchId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 count = 3;
 * @return {number}
 */
proto.v1.inventories.WarehousePaginationResponse.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.inventories.WarehousePaginationResponse} returns this
 */
proto.v1.inventories.WarehousePaginationResponse.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
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
proto.v1.inventories.ListWarehouseResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.inventories.ListWarehouseResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.inventories.ListWarehouseResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.inventories.ListWarehouseResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    pagination: (f = msg.getPagination()) && proto.v1.inventories.WarehousePaginationResponse.toObject(includeInstance, f),
    warehouse: (f = msg.getWarehouse()) && pkg_api_v1_inventories_warehouse_message_pb.Warehouse.toObject(includeInstance, f)
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
 * @return {!proto.v1.inventories.ListWarehouseResponse}
 */
proto.v1.inventories.ListWarehouseResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.inventories.ListWarehouseResponse;
  return proto.v1.inventories.ListWarehouseResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.inventories.ListWarehouseResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.inventories.ListWarehouseResponse}
 */
proto.v1.inventories.ListWarehouseResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.v1.inventories.WarehousePaginationResponse;
      reader.readMessage(value,proto.v1.inventories.WarehousePaginationResponse.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    case 2:
      var value = new pkg_api_v1_inventories_warehouse_message_pb.Warehouse;
      reader.readMessage(value,pkg_api_v1_inventories_warehouse_message_pb.Warehouse.deserializeBinaryFromReader);
      msg.setWarehouse(value);
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
proto.v1.inventories.ListWarehouseResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.inventories.ListWarehouseResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.inventories.ListWarehouseResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.inventories.ListWarehouseResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.v1.inventories.WarehousePaginationResponse.serializeBinaryToWriter
    );
  }
  f = message.getWarehouse();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      pkg_api_v1_inventories_warehouse_message_pb.Warehouse.serializeBinaryToWriter
    );
  }
};


/**
 * optional WarehousePaginationResponse pagination = 1;
 * @return {?proto.v1.inventories.WarehousePaginationResponse}
 */
proto.v1.inventories.ListWarehouseResponse.prototype.getPagination = function() {
  return /** @type{?proto.v1.inventories.WarehousePaginationResponse} */ (
    jspb.Message.getWrapperField(this, proto.v1.inventories.WarehousePaginationResponse, 1));
};


/**
 * @param {?proto.v1.inventories.WarehousePaginationResponse|undefined} value
 * @return {!proto.v1.inventories.ListWarehouseResponse} returns this
*/
proto.v1.inventories.ListWarehouseResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.inventories.ListWarehouseResponse} returns this
 */
proto.v1.inventories.ListWarehouseResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.inventories.ListWarehouseResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Warehouse warehouse = 2;
 * @return {?proto.v1.inventories.Warehouse}
 */
proto.v1.inventories.ListWarehouseResponse.prototype.getWarehouse = function() {
  return /** @type{?proto.v1.inventories.Warehouse} */ (
    jspb.Message.getWrapperField(this, pkg_api_v1_inventories_warehouse_message_pb.Warehouse, 2));
};


/**
 * @param {?proto.v1.inventories.Warehouse|undefined} value
 * @return {!proto.v1.inventories.ListWarehouseResponse} returns this
*/
proto.v1.inventories.ListWarehouseResponse.prototype.setWarehouse = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.inventories.ListWarehouseResponse} returns this
 */
proto.v1.inventories.ListWarehouseResponse.prototype.clearWarehouse = function() {
  return this.setWarehouse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.inventories.ListWarehouseResponse.prototype.hasWarehouse = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.v1.inventories);