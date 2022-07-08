// source: pkg/api/v1/users/company_service.proto
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

var pkg_api_v1_users_company_message_pb = require('../../../../pkg/api/v1/users/company_message_pb.js');
goog.object.extend(proto, pkg_api_v1_users_company_message_pb);
var pkg_api_v1_users_generic_message_pb = require('../../../../pkg/api/v1/users/generic_message_pb.js');
goog.object.extend(proto, pkg_api_v1_users_generic_message_pb);
var pkg_api_v1_users_user_message_pb = require('../../../../pkg/api/v1/users/user_message_pb.js');
goog.object.extend(proto, pkg_api_v1_users_user_message_pb);
goog.exportSymbol('proto.v1.users.CompanyRegistration', null, global);
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
proto.v1.users.CompanyRegistration = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.users.CompanyRegistration, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.users.CompanyRegistration.displayName = 'proto.v1.users.CompanyRegistration';
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
proto.v1.users.CompanyRegistration.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.users.CompanyRegistration.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.users.CompanyRegistration} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.users.CompanyRegistration.toObject = function(includeInstance, msg) {
  var f, obj = {
    company: (f = msg.getCompany()) && pkg_api_v1_users_company_message_pb.Company.toObject(includeInstance, f),
    user: (f = msg.getUser()) && pkg_api_v1_users_user_message_pb.User.toObject(includeInstance, f)
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
 * @return {!proto.v1.users.CompanyRegistration}
 */
proto.v1.users.CompanyRegistration.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.users.CompanyRegistration;
  return proto.v1.users.CompanyRegistration.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.users.CompanyRegistration} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.users.CompanyRegistration}
 */
proto.v1.users.CompanyRegistration.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new pkg_api_v1_users_company_message_pb.Company;
      reader.readMessage(value,pkg_api_v1_users_company_message_pb.Company.deserializeBinaryFromReader);
      msg.setCompany(value);
      break;
    case 2:
      var value = new pkg_api_v1_users_user_message_pb.User;
      reader.readMessage(value,pkg_api_v1_users_user_message_pb.User.deserializeBinaryFromReader);
      msg.setUser(value);
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
proto.v1.users.CompanyRegistration.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.users.CompanyRegistration.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.users.CompanyRegistration} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.users.CompanyRegistration.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCompany();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      pkg_api_v1_users_company_message_pb.Company.serializeBinaryToWriter
    );
  }
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      pkg_api_v1_users_user_message_pb.User.serializeBinaryToWriter
    );
  }
};


/**
 * optional Company company = 1;
 * @return {?proto.v1.users.Company}
 */
proto.v1.users.CompanyRegistration.prototype.getCompany = function() {
  return /** @type{?proto.v1.users.Company} */ (
    jspb.Message.getWrapperField(this, pkg_api_v1_users_company_message_pb.Company, 1));
};


/**
 * @param {?proto.v1.users.Company|undefined} value
 * @return {!proto.v1.users.CompanyRegistration} returns this
*/
proto.v1.users.CompanyRegistration.prototype.setCompany = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.users.CompanyRegistration} returns this
 */
proto.v1.users.CompanyRegistration.prototype.clearCompany = function() {
  return this.setCompany(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.users.CompanyRegistration.prototype.hasCompany = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional User user = 2;
 * @return {?proto.v1.users.User}
 */
proto.v1.users.CompanyRegistration.prototype.getUser = function() {
  return /** @type{?proto.v1.users.User} */ (
    jspb.Message.getWrapperField(this, pkg_api_v1_users_user_message_pb.User, 2));
};


/**
 * @param {?proto.v1.users.User|undefined} value
 * @return {!proto.v1.users.CompanyRegistration} returns this
*/
proto.v1.users.CompanyRegistration.prototype.setUser = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.users.CompanyRegistration} returns this
 */
proto.v1.users.CompanyRegistration.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.users.CompanyRegistration.prototype.hasUser = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.v1.users);
