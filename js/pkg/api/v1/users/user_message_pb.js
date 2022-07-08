// source: pkg/api/v1/users/user_message.proto
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

var pkg_api_v1_users_group_message_pb = require('../../../../pkg/api/v1/users/group_message_pb.js');
goog.object.extend(proto, pkg_api_v1_users_group_message_pb);
goog.exportSymbol('proto.v1.users.User', null, global);
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
proto.v1.users.User = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.users.User, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.users.User.displayName = 'proto.v1.users.User';
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
proto.v1.users.User.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.users.User.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.users.User} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.users.User.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    companyId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    regionId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    branchId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    username: jspb.Message.getFieldWithDefault(msg, 5, ""),
    name: jspb.Message.getFieldWithDefault(msg, 6, ""),
    email: jspb.Message.getFieldWithDefault(msg, 7, ""),
    group: (f = msg.getGroup()) && pkg_api_v1_users_group_message_pb.Group.toObject(includeInstance, f),
    createdAt: jspb.Message.getFieldWithDefault(msg, 9, ""),
    updatedAt: jspb.Message.getFieldWithDefault(msg, 10, ""),
    updatedBy: jspb.Message.getFieldWithDefault(msg, 11, "")
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
 * @return {!proto.v1.users.User}
 */
proto.v1.users.User.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.users.User;
  return proto.v1.users.User.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.users.User} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.users.User}
 */
proto.v1.users.User.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setRegionId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setBranchId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 8:
      var value = new pkg_api_v1_users_group_message_pb.Group;
      reader.readMessage(value,pkg_api_v1_users_group_message_pb.Group.deserializeBinaryFromReader);
      msg.setGroup(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedAt(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdatedAt(value);
      break;
    case 11:
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
proto.v1.users.User.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.users.User.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.users.User} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.users.User.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getRegionId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getBranchId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getGroup();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      pkg_api_v1_users_group_message_pb.Group.serializeBinaryToWriter
    );
  }
  f = message.getCreatedAt();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getUpdatedAt();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getUpdatedBy();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.v1.users.User.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.users.User} returns this
 */
proto.v1.users.User.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string company_id = 2;
 * @return {string}
 */
proto.v1.users.User.prototype.getCompanyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.users.User} returns this
 */
proto.v1.users.User.prototype.setCompanyId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string region_id = 3;
 * @return {string}
 */
proto.v1.users.User.prototype.getRegionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.users.User} returns this
 */
proto.v1.users.User.prototype.setRegionId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string branch_id = 4;
 * @return {string}
 */
proto.v1.users.User.prototype.getBranchId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.users.User} returns this
 */
proto.v1.users.User.prototype.setBranchId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string username = 5;
 * @return {string}
 */
proto.v1.users.User.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.users.User} returns this
 */
proto.v1.users.User.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string name = 6;
 * @return {string}
 */
proto.v1.users.User.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.users.User} returns this
 */
proto.v1.users.User.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string email = 7;
 * @return {string}
 */
proto.v1.users.User.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.users.User} returns this
 */
proto.v1.users.User.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional Group group = 8;
 * @return {?proto.v1.users.Group}
 */
proto.v1.users.User.prototype.getGroup = function() {
  return /** @type{?proto.v1.users.Group} */ (
    jspb.Message.getWrapperField(this, pkg_api_v1_users_group_message_pb.Group, 8));
};


/**
 * @param {?proto.v1.users.Group|undefined} value
 * @return {!proto.v1.users.User} returns this
*/
proto.v1.users.User.prototype.setGroup = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.users.User} returns this
 */
proto.v1.users.User.prototype.clearGroup = function() {
  return this.setGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.users.User.prototype.hasGroup = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string created_at = 9;
 * @return {string}
 */
proto.v1.users.User.prototype.getCreatedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.users.User} returns this
 */
proto.v1.users.User.prototype.setCreatedAt = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string updated_at = 10;
 * @return {string}
 */
proto.v1.users.User.prototype.getUpdatedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.users.User} returns this
 */
proto.v1.users.User.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string updated_by = 11;
 * @return {string}
 */
proto.v1.users.User.prototype.getUpdatedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.users.User} returns this
 */
proto.v1.users.User.prototype.setUpdatedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


goog.object.extend(exports, proto.v1.users);
