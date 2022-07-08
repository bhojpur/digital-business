// source: pkg/api/v1/users/access_message.proto
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

goog.exportSymbol('proto.v1.users.Access', null, global);
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
proto.v1.users.Access = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.users.Access, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.users.Access.displayName = 'proto.v1.users.Access';
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
proto.v1.users.Access.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.users.Access.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.users.Access} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.users.Access.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    parentId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    createdAt: jspb.Message.getFieldWithDefault(msg, 4, ""),
    createdBy: jspb.Message.getFieldWithDefault(msg, 5, ""),
    updatedAt: jspb.Message.getFieldWithDefault(msg, 6, ""),
    updatedBy: jspb.Message.getFieldWithDefault(msg, 7, "")
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
 * @return {!proto.v1.users.Access}
 */
proto.v1.users.Access.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.users.Access;
  return proto.v1.users.Access.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.users.Access} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.users.Access}
 */
proto.v1.users.Access.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setParentId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedAt(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedBy(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdatedAt(value);
      break;
    case 7:
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
proto.v1.users.Access.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.users.Access.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.users.Access} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.users.Access.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getParentId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCreatedAt();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCreatedBy();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getUpdatedAt();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getUpdatedBy();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.v1.users.Access.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.users.Access} returns this
 */
proto.v1.users.Access.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.v1.users.Access.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.users.Access} returns this
 */
proto.v1.users.Access.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string parent_id = 3;
 * @return {string}
 */
proto.v1.users.Access.prototype.getParentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.users.Access} returns this
 */
proto.v1.users.Access.prototype.setParentId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string created_at = 4;
 * @return {string}
 */
proto.v1.users.Access.prototype.getCreatedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.users.Access} returns this
 */
proto.v1.users.Access.prototype.setCreatedAt = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string created_by = 5;
 * @return {string}
 */
proto.v1.users.Access.prototype.getCreatedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.users.Access} returns this
 */
proto.v1.users.Access.prototype.setCreatedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string updated_at = 6;
 * @return {string}
 */
proto.v1.users.Access.prototype.getUpdatedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.users.Access} returns this
 */
proto.v1.users.Access.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string updated_by = 7;
 * @return {string}
 */
proto.v1.users.Access.prototype.getUpdatedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.users.Access} returns this
 */
proto.v1.users.Access.prototype.setUpdatedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


goog.object.extend(exports, proto.v1.users);
