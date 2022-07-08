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
proto.v1.users = require('./user_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.v1.users.UserServiceClient =
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
proto.v1.users.UserServicePromiseClient =
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
 *   !proto.v1.users.User,
 *   !proto.v1.users.User>}
 */
const methodDescriptor_UserService_Create = new grpc.web.MethodDescriptor(
  '/v1.users.UserService/Create',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_users_user_message_pb.User,
  pkg_api_v1_users_user_message_pb.User,
  /**
   * @param {!proto.v1.users.User} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_users_user_message_pb.User.deserializeBinary
);


/**
 * @param {!proto.v1.users.User} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.users.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.users.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.users.UserServiceClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.users.UserService/Create',
      request,
      metadata || {},
      methodDescriptor_UserService_Create,
      callback);
};


/**
 * @param {!proto.v1.users.User} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.users.User>}
 *     Promise that resolves to the response
 */
proto.v1.users.UserServicePromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.users.UserService/Create',
      request,
      metadata || {},
      methodDescriptor_UserService_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.users.User,
 *   !proto.v1.users.User>}
 */
const methodDescriptor_UserService_Update = new grpc.web.MethodDescriptor(
  '/v1.users.UserService/Update',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_users_user_message_pb.User,
  pkg_api_v1_users_user_message_pb.User,
  /**
   * @param {!proto.v1.users.User} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_users_user_message_pb.User.deserializeBinary
);


/**
 * @param {!proto.v1.users.User} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.users.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.users.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.users.UserServiceClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.users.UserService/Update',
      request,
      metadata || {},
      methodDescriptor_UserService_Update,
      callback);
};


/**
 * @param {!proto.v1.users.User} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.users.User>}
 *     Promise that resolves to the response
 */
proto.v1.users.UserServicePromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.users.UserService/Update',
      request,
      metadata || {},
      methodDescriptor_UserService_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.users.Id,
 *   !proto.v1.users.User>}
 */
const methodDescriptor_UserService_View = new grpc.web.MethodDescriptor(
  '/v1.users.UserService/View',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_users_generic_message_pb.Id,
  pkg_api_v1_users_user_message_pb.User,
  /**
   * @param {!proto.v1.users.Id} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_users_user_message_pb.User.deserializeBinary
);


/**
 * @param {!proto.v1.users.Id} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.users.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.users.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.users.UserServiceClient.prototype.view =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.users.UserService/View',
      request,
      metadata || {},
      methodDescriptor_UserService_View,
      callback);
};


/**
 * @param {!proto.v1.users.Id} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.users.User>}
 *     Promise that resolves to the response
 */
proto.v1.users.UserServicePromiseClient.prototype.view =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.users.UserService/View',
      request,
      metadata || {},
      methodDescriptor_UserService_View);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.users.Id,
 *   !proto.v1.users.MyBoolean>}
 */
const methodDescriptor_UserService_Delete = new grpc.web.MethodDescriptor(
  '/v1.users.UserService/Delete',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_users_generic_message_pb.Id,
  pkg_api_v1_users_generic_message_pb.MyBoolean,
  /**
   * @param {!proto.v1.users.Id} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_users_generic_message_pb.MyBoolean.deserializeBinary
);


/**
 * @param {!proto.v1.users.Id} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.users.MyBoolean)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.users.MyBoolean>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.users.UserServiceClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.users.UserService/Delete',
      request,
      metadata || {},
      methodDescriptor_UserService_Delete,
      callback);
};


/**
 * @param {!proto.v1.users.Id} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.users.MyBoolean>}
 *     Promise that resolves to the response
 */
proto.v1.users.UserServicePromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.users.UserService/Delete',
      request,
      metadata || {},
      methodDescriptor_UserService_Delete);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.users.ListUserRequest,
 *   !proto.v1.users.ListUserResponse>}
 */
const methodDescriptor_UserService_List = new grpc.web.MethodDescriptor(
  '/v1.users.UserService/List',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.v1.users.ListUserRequest,
  proto.v1.users.ListUserResponse,
  /**
   * @param {!proto.v1.users.ListUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.v1.users.ListUserResponse.deserializeBinary
);


/**
 * @param {!proto.v1.users.ListUserRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.v1.users.ListUserResponse>}
 *     The XHR Node Readable Stream
 */
proto.v1.users.UserServiceClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/v1.users.UserService/List',
      request,
      metadata || {},
      methodDescriptor_UserService_List);
};


/**
 * @param {!proto.v1.users.ListUserRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.v1.users.ListUserResponse>}
 *     The XHR Node Readable Stream
 */
proto.v1.users.UserServicePromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/v1.users.UserService/List',
      request,
      metadata || {},
      methodDescriptor_UserService_List);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.users.MyEmpty,
 *   !proto.v1.users.User>}
 */
const methodDescriptor_UserService_GetByToken = new grpc.web.MethodDescriptor(
  '/v1.users.UserService/GetByToken',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_users_generic_message_pb.MyEmpty,
  pkg_api_v1_users_user_message_pb.User,
  /**
   * @param {!proto.v1.users.MyEmpty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_users_user_message_pb.User.deserializeBinary
);


/**
 * @param {!proto.v1.users.MyEmpty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.users.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.users.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.users.UserServiceClient.prototype.getByToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.users.UserService/GetByToken',
      request,
      metadata || {},
      methodDescriptor_UserService_GetByToken,
      callback);
};


/**
 * @param {!proto.v1.users.MyEmpty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.users.User>}
 *     Promise that resolves to the response
 */
proto.v1.users.UserServicePromiseClient.prototype.getByToken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.users.UserService/GetByToken',
      request,
      metadata || {},
      methodDescriptor_UserService_GetByToken);
};


module.exports = proto.v1.users;

