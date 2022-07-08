// source: pkg/api/v1/sales/salesman_service.proto
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

var pkg_api_v1_sales_salesman_message_pb = require('../../../../pkg/api/v1/sales/salesman_message_pb.js');
goog.object.extend(proto, pkg_api_v1_sales_salesman_message_pb);
var pkg_api_v1_sales_generic_message_pb = require('../../../../pkg/api/v1/sales/generic_message_pb.js');
goog.object.extend(proto, pkg_api_v1_sales_generic_message_pb);
goog.exportSymbol('proto.v1.sales.ListSalesmanRequest', null, global);
goog.exportSymbol('proto.v1.sales.ListSalesmanResponse', null, global);
goog.exportSymbol('proto.v1.sales.SalesmanPaginationResponse', null, global);
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
proto.v1.sales.ListSalesmanRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.sales.ListSalesmanRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.sales.ListSalesmanRequest.displayName = 'proto.v1.sales.ListSalesmanRequest';
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
proto.v1.sales.SalesmanPaginationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.sales.SalesmanPaginationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.sales.SalesmanPaginationResponse.displayName = 'proto.v1.sales.SalesmanPaginationResponse';
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
proto.v1.sales.ListSalesmanResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.sales.ListSalesmanResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.sales.ListSalesmanResponse.displayName = 'proto.v1.sales.ListSalesmanResponse';
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
proto.v1.sales.ListSalesmanRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.sales.ListSalesmanRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.sales.ListSalesmanRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.sales.ListSalesmanRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pagination: (f = msg.getPagination()) && pkg_api_v1_sales_generic_message_pb.Pagination.toObject(includeInstance, f)
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
 * @return {!proto.v1.sales.ListSalesmanRequest}
 */
proto.v1.sales.ListSalesmanRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.sales.ListSalesmanRequest;
  return proto.v1.sales.ListSalesmanRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.sales.ListSalesmanRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.sales.ListSalesmanRequest}
 */
proto.v1.sales.ListSalesmanRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new pkg_api_v1_sales_generic_message_pb.Pagination;
      reader.readMessage(value,pkg_api_v1_sales_generic_message_pb.Pagination.deserializeBinaryFromReader);
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
proto.v1.sales.ListSalesmanRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.sales.ListSalesmanRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.sales.ListSalesmanRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.sales.ListSalesmanRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      pkg_api_v1_sales_generic_message_pb.Pagination.serializeBinaryToWriter
    );
  }
};


/**
 * optional Pagination pagination = 1;
 * @return {?proto.v1.sales.Pagination}
 */
proto.v1.sales.ListSalesmanRequest.prototype.getPagination = function() {
  return /** @type{?proto.v1.sales.Pagination} */ (
    jspb.Message.getWrapperField(this, pkg_api_v1_sales_generic_message_pb.Pagination, 1));
};


/**
 * @param {?proto.v1.sales.Pagination|undefined} value
 * @return {!proto.v1.sales.ListSalesmanRequest} returns this
*/
proto.v1.sales.ListSalesmanRequest.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.sales.ListSalesmanRequest} returns this
 */
proto.v1.sales.ListSalesmanRequest.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.sales.ListSalesmanRequest.prototype.hasPagination = function() {
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
proto.v1.sales.SalesmanPaginationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.sales.SalesmanPaginationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.sales.SalesmanPaginationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.sales.SalesmanPaginationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    pagination: (f = msg.getPagination()) && pkg_api_v1_sales_generic_message_pb.Pagination.toObject(includeInstance, f),
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
 * @return {!proto.v1.sales.SalesmanPaginationResponse}
 */
proto.v1.sales.SalesmanPaginationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.sales.SalesmanPaginationResponse;
  return proto.v1.sales.SalesmanPaginationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.sales.SalesmanPaginationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.sales.SalesmanPaginationResponse}
 */
proto.v1.sales.SalesmanPaginationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new pkg_api_v1_sales_generic_message_pb.Pagination;
      reader.readMessage(value,pkg_api_v1_sales_generic_message_pb.Pagination.deserializeBinaryFromReader);
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
proto.v1.sales.SalesmanPaginationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.sales.SalesmanPaginationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.sales.SalesmanPaginationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.sales.SalesmanPaginationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      pkg_api_v1_sales_generic_message_pb.Pagination.serializeBinaryToWriter
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
 * @return {?proto.v1.sales.Pagination}
 */
proto.v1.sales.SalesmanPaginationResponse.prototype.getPagination = function() {
  return /** @type{?proto.v1.sales.Pagination} */ (
    jspb.Message.getWrapperField(this, pkg_api_v1_sales_generic_message_pb.Pagination, 1));
};


/**
 * @param {?proto.v1.sales.Pagination|undefined} value
 * @return {!proto.v1.sales.SalesmanPaginationResponse} returns this
*/
proto.v1.sales.SalesmanPaginationResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.sales.SalesmanPaginationResponse} returns this
 */
proto.v1.sales.SalesmanPaginationResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.sales.SalesmanPaginationResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint32 count = 2;
 * @return {number}
 */
proto.v1.sales.SalesmanPaginationResponse.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.sales.SalesmanPaginationResponse} returns this
 */
proto.v1.sales.SalesmanPaginationResponse.prototype.setCount = function(value) {
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
proto.v1.sales.ListSalesmanResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.sales.ListSalesmanResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.sales.ListSalesmanResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.sales.ListSalesmanResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    pagination: (f = msg.getPagination()) && proto.v1.sales.SalesmanPaginationResponse.toObject(includeInstance, f),
    salesman: (f = msg.getSalesman()) && pkg_api_v1_sales_salesman_message_pb.Salesman.toObject(includeInstance, f)
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
 * @return {!proto.v1.sales.ListSalesmanResponse}
 */
proto.v1.sales.ListSalesmanResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.sales.ListSalesmanResponse;
  return proto.v1.sales.ListSalesmanResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.sales.ListSalesmanResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.sales.ListSalesmanResponse}
 */
proto.v1.sales.ListSalesmanResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.v1.sales.SalesmanPaginationResponse;
      reader.readMessage(value,proto.v1.sales.SalesmanPaginationResponse.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    case 2:
      var value = new pkg_api_v1_sales_salesman_message_pb.Salesman;
      reader.readMessage(value,pkg_api_v1_sales_salesman_message_pb.Salesman.deserializeBinaryFromReader);
      msg.setSalesman(value);
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
proto.v1.sales.ListSalesmanResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.sales.ListSalesmanResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.sales.ListSalesmanResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.sales.ListSalesmanResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.v1.sales.SalesmanPaginationResponse.serializeBinaryToWriter
    );
  }
  f = message.getSalesman();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      pkg_api_v1_sales_salesman_message_pb.Salesman.serializeBinaryToWriter
    );
  }
};


/**
 * optional SalesmanPaginationResponse pagination = 1;
 * @return {?proto.v1.sales.SalesmanPaginationResponse}
 */
proto.v1.sales.ListSalesmanResponse.prototype.getPagination = function() {
  return /** @type{?proto.v1.sales.SalesmanPaginationResponse} */ (
    jspb.Message.getWrapperField(this, proto.v1.sales.SalesmanPaginationResponse, 1));
};


/**
 * @param {?proto.v1.sales.SalesmanPaginationResponse|undefined} value
 * @return {!proto.v1.sales.ListSalesmanResponse} returns this
*/
proto.v1.sales.ListSalesmanResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.sales.ListSalesmanResponse} returns this
 */
proto.v1.sales.ListSalesmanResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.sales.ListSalesmanResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Salesman salesman = 2;
 * @return {?proto.v1.sales.Salesman}
 */
proto.v1.sales.ListSalesmanResponse.prototype.getSalesman = function() {
  return /** @type{?proto.v1.sales.Salesman} */ (
    jspb.Message.getWrapperField(this, pkg_api_v1_sales_salesman_message_pb.Salesman, 2));
};


/**
 * @param {?proto.v1.sales.Salesman|undefined} value
 * @return {!proto.v1.sales.ListSalesmanResponse} returns this
*/
proto.v1.sales.ListSalesmanResponse.prototype.setSalesman = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.sales.ListSalesmanResponse} returns this
 */
proto.v1.sales.ListSalesmanResponse.prototype.clearSalesman = function() {
  return this.setSalesman(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.sales.ListSalesmanResponse.prototype.hasSalesman = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.v1.sales);
