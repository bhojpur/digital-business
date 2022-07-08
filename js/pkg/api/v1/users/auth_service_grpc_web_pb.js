/**
 * @fileoverview gRPC-Web generated client stub for v1.users
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var pkg_api_v1_users_user_message_pb = require('../../../../pkg/api/v1/users/user_message_pb.js')

var pkg_api_v1_users_generic_message_pb = require('../../../../pkg/api/v1/users/generic_message_pb.js')
const proto = {};
proto.v1 = {};
proto.v1.users = require('./auth_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.v1.users.AuthServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.v1.users.AuthServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.users.LoginRequest,
 *   !proto.v1.users.LoginResponse>}
 */
const methodDescriptor_AuthService_Login = new grpc.web.MethodDescriptor(
  '/v1.users.AuthService/Login',
  grpc.web.MethodType.UNARY,
  proto.v1.users.LoginRequest,
  proto.v1.users.LoginResponse,
  /**
   * @param {!proto.v1.users.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.v1.users.LoginResponse.deserializeBinary
);


/**
 * @param {!proto.v1.users.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.users.LoginResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.users.LoginResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.users.AuthServiceClient.prototype.login =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.users.AuthService/Login',
      request,
      metadata || {},
      methodDescriptor_AuthService_Login,
      callback);
};


/**
 * @param {!proto.v1.users.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.users.LoginResponse>}
 *     Promise that resolves to the response
 */
proto.v1.users.AuthServicePromiseClient.prototype.login =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.users.AuthService/Login',
      request,
      metadata || {},
      methodDescriptor_AuthService_Login);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.users.ForgotPasswordRequest,
 *   !proto.v1.users.Message>}
 */
const methodDescriptor_AuthService_ForgotPassword = new grpc.web.MethodDescriptor(
  '/v1.users.AuthService/ForgotPassword',
  grpc.web.MethodType.UNARY,
  proto.v1.users.ForgotPasswordRequest,
  pkg_api_v1_users_generic_message_pb.Message,
  /**
   * @param {!proto.v1.users.ForgotPasswordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_users_generic_message_pb.Message.deserializeBinary
);


/**
 * @param {!proto.v1.users.ForgotPasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.users.Message)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.users.Message>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.users.AuthServiceClient.prototype.forgotPassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.users.AuthService/ForgotPassword',
      request,
      metadata || {},
      methodDescriptor_AuthService_ForgotPassword,
      callback);
};


/**
 * @param {!proto.v1.users.ForgotPasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.users.Message>}
 *     Promise that resolves to the response
 */
proto.v1.users.AuthServicePromiseClient.prototype.forgotPassword =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.users.AuthService/ForgotPassword',
      request,
      metadata || {},
      methodDescriptor_AuthService_ForgotPassword);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.users.ResetPasswordRequest,
 *   !proto.v1.users.Message>}
 */
const methodDescriptor_AuthService_ResetPassword = new grpc.web.MethodDescriptor(
  '/v1.users.AuthService/ResetPassword',
  grpc.web.MethodType.UNARY,
  proto.v1.users.ResetPasswordRequest,
  pkg_api_v1_users_generic_message_pb.Message,
  /**
   * @param {!proto.v1.users.ResetPasswordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_users_generic_message_pb.Message.deserializeBinary
);


/**
 * @param {!proto.v1.users.ResetPasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.users.Message)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.users.Message>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.users.AuthServiceClient.prototype.resetPassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.users.AuthService/ResetPassword',
      request,
      metadata || {},
      methodDescriptor_AuthService_ResetPassword,
      callback);
};


/**
 * @param {!proto.v1.users.ResetPasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.users.Message>}
 *     Promise that resolves to the response
 */
proto.v1.users.AuthServicePromiseClient.prototype.resetPassword =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.users.AuthService/ResetPassword',
      request,
      metadata || {},
      methodDescriptor_AuthService_ResetPassword);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.users.ChangePasswordRequest,
 *   !proto.v1.users.Message>}
 */
const methodDescriptor_AuthService_ChangePassword = new grpc.web.MethodDescriptor(
  '/v1.users.AuthService/ChangePassword',
  grpc.web.MethodType.UNARY,
  proto.v1.users.ChangePasswordRequest,
  pkg_api_v1_users_generic_message_pb.Message,
  /**
   * @param {!proto.v1.users.ChangePasswordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_users_generic_message_pb.Message.deserializeBinary
);


/**
 * @param {!proto.v1.users.ChangePasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.users.Message)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.users.Message>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.users.AuthServiceClient.prototype.changePassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.users.AuthService/ChangePassword',
      request,
      metadata || {},
      methodDescriptor_AuthService_ChangePassword,
      callback);
};


/**
 * @param {!proto.v1.users.ChangePasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.users.Message>}
 *     Promise that resolves to the response
 */
proto.v1.users.AuthServicePromiseClient.prototype.changePassword =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.users.AuthService/ChangePassword',
      request,
      metadata || {},
      methodDescriptor_AuthService_ChangePassword);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.users.MyString,
 *   !proto.v1.users.MyBoolean>}
 */
const methodDescriptor_AuthService_IsAuth = new grpc.web.MethodDescriptor(
  '/v1.users.AuthService/IsAuth',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_users_generic_message_pb.MyString,
  pkg_api_v1_users_generic_message_pb.MyBoolean,
  /**
   * @param {!proto.v1.users.MyString} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_users_generic_message_pb.MyBoolean.deserializeBinary
);


/**
 * @param {!proto.v1.users.MyString} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.users.MyBoolean)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.users.MyBoolean>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.users.AuthServiceClient.prototype.isAuth =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.users.AuthService/IsAuth',
      request,
      metadata || {},
      methodDescriptor_AuthService_IsAuth,
      callback);
};


/**
 * @param {!proto.v1.users.MyString} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.users.MyBoolean>}
 *     Promise that resolves to the response
 */
proto.v1.users.AuthServicePromiseClient.prototype.isAuth =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.users.AuthService/IsAuth',
      request,
      metadata || {},
      methodDescriptor_AuthService_IsAuth);
};


module.exports = proto.v1.users;

