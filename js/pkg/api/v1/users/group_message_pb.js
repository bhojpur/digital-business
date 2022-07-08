// source: pkg/api/v1/users/group_message.proto
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

var pkg_api_v1_users_access_message_pb = require('../../../../pkg/api/v1/users/access_message_pb.js');
goog.object.extend(proto, pkg_api_v1_users_access_message_pb);
goog.exportSymbol('proto.v1.users.Group', null, global);
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
proto.v1.users.Group = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.v1.users.Group.repeatedFields_, null);
};
goog.inherits(proto.v1.users.Group, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.users.Group.displayName = 'proto.v1.users.Group';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.v1.users.Group.repeatedFields_ = [5];



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
proto.v1.users.Group.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.users.Group.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.users.Group} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.users.Group.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    companyId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    isMutable: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    accessList: jspb.Message.toObjectList(msg.getAccessList(),
    pkg_api_v1_users_access_message_pb.Access.toObject, includeInstance),
    createdAt: jspb.Message.getFieldWithDefault(msg, 6, ""),
    createdBy: jspb.Message.getFieldWithDefault(msg, 7, ""),
    updatedAt: jspb.Message.getFieldWithDefault(msg, 8, ""),
    updatedBy: jspb.Message.getFieldWithDefault(msg, 9, "")
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
 * @return {!proto.v1.users.Group}
 */
proto.v1.users.Group.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.users.Group;
  return proto.v1.users.Group.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.users.Group} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.users.Group}
 */
proto.v1.users.Group.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setCompanyId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsMutable(value);
      break;
    case 5:
      var value = new pkg_api_v1_users_access_message_pb.Access;
      reader.readMessage(value,pkg_api_v1_users_access_message_pb.Access.deserializeBinaryFromReader);
      msg.addAccess(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedAt(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedBy(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdatedAt(value);
      break;
    case 9:
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
proto.v1.users.Group.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.users.Group.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.users.Group} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.users.Group.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCompanyId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIsMutable();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getAccessList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      pkg_api_v1_users_access_message_pb.Access.serializeBinaryToWriter
    );
  }
  f = message.getCreatedAt();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getCreatedBy();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getUpdatedAt();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getUpdatedBy();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.v1.users.Group.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.users.Group} returns this
 */
proto.v1.users.Group.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string company_id = 2;
 * @return {string}
 */
proto.v1.users.Group.prototype.getCompanyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.users.Group} returns this
 */
proto.v1.users.Group.prototype.setCompanyId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.v1.users.Group.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.users.Group} returns this
 */
proto.v1.users.Group.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool is_mutable = 4;
 * @return {boolean}
 */
proto.v1.users.Group.prototype.getIsMutable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.v1.users.Group} returns this
 */
proto.v1.users.Group.prototype.setIsMutable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * repeated Access access = 5;
 * @return {!Array<!proto.v1.users.Access>}
 */
proto.v1.users.Group.prototype.getAccessList = function() {
  return /** @type{!Array<!proto.v1.users.Access>} */ (
    jspb.Message.getRepeatedWrapperField(this, pkg_api_v1_users_access_message_pb.Access, 5));
};


/**
 * @param {!Array<!proto.v1.users.Access>} value
 * @return {!proto.v1.users.Group} returns this
*/
proto.v1.users.Group.prototype.setAccessList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.v1.users.Access=} opt_value
 * @param {number=} opt_index
 * @return {!proto.v1.users.Access}
 */
proto.v1.users.Group.prototype.addAccess = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.v1.users.Access, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.v1.users.Group} returns this
 */
proto.v1.users.Group.prototype.clearAccessList = function() {
  return this.setAccessList([]);
};


/**
 * optional string created_at = 6;
 * @return {string}
 */
proto.v1.users.Group.prototype.getCreatedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.users.Group} returns this
 */
proto.v1.users.Group.prototype.setCreatedAt = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string created_by = 7;
 * @return {string}
 */
proto.v1.users.Group.prototype.getCreatedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.users.Group} returns this
 */
proto.v1.users.Group.prototype.setCreatedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string updated_at = 8;
 * @return {string}
 */
proto.v1.users.Group.prototype.getUpdatedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.users.Group} returns this
 */
proto.v1.users.Group.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string updated_by = 9;
 * @return {string}
 */
proto.v1.users.Group.prototype.getUpdatedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.users.Group} returns this
 */
proto.v1.users.Group.prototype.setUpdatedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


goog.object.extend(exports, proto.v1.users);
