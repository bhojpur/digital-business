// source: pkg/api/v1/users/branch_service.proto
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

var pkg_api_v1_users_branch_message_pb = require('../../../../pkg/api/v1/users/branch_message_pb.js');
goog.object.extend(proto, pkg_api_v1_users_branch_message_pb);
var pkg_api_v1_users_generic_message_pb = require('../../../../pkg/api/v1/users/generic_message_pb.js');
goog.object.extend(proto, pkg_api_v1_users_generic_message_pb);
goog.exportSymbol('proto.v1.users.BranchPaginationResponse', null, global);
goog.exportSymbol('proto.v1.users.ListBranchRequest', null, global);
goog.exportSymbol('proto.v1.users.ListBranchResponse', null, global);
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
proto.v1.users.ListBranchRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.users.ListBranchRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.users.ListBranchRequest.displayName = 'proto.v1.users.ListBranchRequest';
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
proto.v1.users.BranchPaginationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.users.BranchPaginationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.users.BranchPaginationResponse.displayName = 'proto.v1.users.BranchPaginationResponse';
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
proto.v1.users.ListBranchResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.users.ListBranchResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.users.ListBranchResponse.displayName = 'proto.v1.users.ListBranchResponse';
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
proto.v1.users.ListBranchRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.users.ListBranchRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.users.ListBranchRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.users.ListBranchRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pagination: (f = msg.getPagination()) && pkg_api_v1_users_generic_message_pb.Pagination.toObject(includeInstance, f),
    regionId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.v1.users.ListBranchRequest}
 */
proto.v1.users.ListBranchRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.users.ListBranchRequest;
  return proto.v1.users.ListBranchRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.users.ListBranchRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.users.ListBranchRequest}
 */
proto.v1.users.ListBranchRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new pkg_api_v1_users_generic_message_pb.Pagination;
      reader.readMessage(value,pkg_api_v1_users_generic_message_pb.Pagination.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegionId(value);
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
proto.v1.users.ListBranchRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.users.ListBranchRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.users.ListBranchRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.users.ListBranchRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      pkg_api_v1_users_generic_message_pb.Pagination.serializeBinaryToWriter
    );
  }
  f = message.getRegionId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional Pagination pagination = 1;
 * @return {?proto.v1.users.Pagination}
 */
proto.v1.users.ListBranchRequest.prototype.getPagination = function() {
  return /** @type{?proto.v1.users.Pagination} */ (
    jspb.Message.getWrapperField(this, pkg_api_v1_users_generic_message_pb.Pagination, 1));
};


/**
 * @param {?proto.v1.users.Pagination|undefined} value
 * @return {!proto.v1.users.ListBranchRequest} returns this
*/
proto.v1.users.ListBranchRequest.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.users.ListBranchRequest} returns this
 */
proto.v1.users.ListBranchRequest.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.users.ListBranchRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string region_id = 2;
 * @return {string}
 */
proto.v1.users.ListBranchRequest.prototype.getRegionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.users.ListBranchRequest} returns this
 */
proto.v1.users.ListBranchRequest.prototype.setRegionId = function(value) {
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
proto.v1.users.BranchPaginationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.users.BranchPaginationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.users.BranchPaginationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.users.BranchPaginationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    pagination: (f = msg.getPagination()) && pkg_api_v1_users_generic_message_pb.Pagination.toObject(includeInstance, f),
    regionId: jspb.Message.getFieldWithDefault(msg, 2, ""),
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
 * @return {!proto.v1.users.BranchPaginationResponse}
 */
proto.v1.users.BranchPaginationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.users.BranchPaginationResponse;
  return proto.v1.users.BranchPaginationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.users.BranchPaginationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.users.BranchPaginationResponse}
 */
proto.v1.users.BranchPaginationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new pkg_api_v1_users_generic_message_pb.Pagination;
      reader.readMessage(value,pkg_api_v1_users_generic_message_pb.Pagination.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegionId(value);
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
proto.v1.users.BranchPaginationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.users.BranchPaginationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.users.BranchPaginationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.users.BranchPaginationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      pkg_api_v1_users_generic_message_pb.Pagination.serializeBinaryToWriter
    );
  }
  f = message.getRegionId();
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
 * @return {?proto.v1.users.Pagination}
 */
proto.v1.users.BranchPaginationResponse.prototype.getPagination = function() {
  return /** @type{?proto.v1.users.Pagination} */ (
    jspb.Message.getWrapperField(this, pkg_api_v1_users_generic_message_pb.Pagination, 1));
};


/**
 * @param {?proto.v1.users.Pagination|undefined} value
 * @return {!proto.v1.users.BranchPaginationResponse} returns this
*/
proto.v1.users.BranchPaginationResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.users.BranchPaginationResponse} returns this
 */
proto.v1.users.BranchPaginationResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.users.BranchPaginationResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string region_id = 2;
 * @return {string}
 */
proto.v1.users.BranchPaginationResponse.prototype.getRegionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.users.BranchPaginationResponse} returns this
 */
proto.v1.users.BranchPaginationResponse.prototype.setRegionId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 count = 3;
 * @return {number}
 */
proto.v1.users.BranchPaginationResponse.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.v1.users.BranchPaginationResponse} returns this
 */
proto.v1.users.BranchPaginationResponse.prototype.setCount = function(value) {
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
proto.v1.users.ListBranchResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.users.ListBranchResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.users.ListBranchResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.users.ListBranchResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    pagination: (f = msg.getPagination()) && proto.v1.users.BranchPaginationResponse.toObject(includeInstance, f),
    branch: (f = msg.getBranch()) && pkg_api_v1_users_branch_message_pb.Branch.toObject(includeInstance, f)
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
 * @return {!proto.v1.users.ListBranchResponse}
 */
proto.v1.users.ListBranchResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.users.ListBranchResponse;
  return proto.v1.users.ListBranchResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.users.ListBranchResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.users.ListBranchResponse}
 */
proto.v1.users.ListBranchResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.v1.users.BranchPaginationResponse;
      reader.readMessage(value,proto.v1.users.BranchPaginationResponse.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    case 2:
      var value = new pkg_api_v1_users_branch_message_pb.Branch;
      reader.readMessage(value,pkg_api_v1_users_branch_message_pb.Branch.deserializeBinaryFromReader);
      msg.setBranch(value);
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
proto.v1.users.ListBranchResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.users.ListBranchResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.users.ListBranchResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.users.ListBranchResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.v1.users.BranchPaginationResponse.serializeBinaryToWriter
    );
  }
  f = message.getBranch();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      pkg_api_v1_users_branch_message_pb.Branch.serializeBinaryToWriter
    );
  }
};


/**
 * optional BranchPaginationResponse pagination = 1;
 * @return {?proto.v1.users.BranchPaginationResponse}
 */
proto.v1.users.ListBranchResponse.prototype.getPagination = function() {
  return /** @type{?proto.v1.users.BranchPaginationResponse} */ (
    jspb.Message.getWrapperField(this, proto.v1.users.BranchPaginationResponse, 1));
};


/**
 * @param {?proto.v1.users.BranchPaginationResponse|undefined} value
 * @return {!proto.v1.users.ListBranchResponse} returns this
*/
proto.v1.users.ListBranchResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.users.ListBranchResponse} returns this
 */
proto.v1.users.ListBranchResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.users.ListBranchResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Branch branch = 2;
 * @return {?proto.v1.users.Branch}
 */
proto.v1.users.ListBranchResponse.prototype.getBranch = function() {
  return /** @type{?proto.v1.users.Branch} */ (
    jspb.Message.getWrapperField(this, pkg_api_v1_users_branch_message_pb.Branch, 2));
};


/**
 * @param {?proto.v1.users.Branch|undefined} value
 * @return {!proto.v1.users.ListBranchResponse} returns this
*/
proto.v1.users.ListBranchResponse.prototype.setBranch = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.users.ListBranchResponse} returns this
 */
proto.v1.users.ListBranchResponse.prototype.clearBranch = function() {
  return this.setBranch(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.users.ListBranchResponse.prototype.hasBranch = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.v1.users);
