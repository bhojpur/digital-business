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


var pkg_api_v1_users_group_message_pb = require('../../../../pkg/api/v1/users/group_message_pb.js')

var pkg_api_v1_users_generic_message_pb = require('../../../../pkg/api/v1/users/generic_message_pb.js')
const proto = {};
proto.v1 = {};
proto.v1.users = require('./group_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.v1.users.GroupServiceClient =
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
proto.v1.users.GroupServicePromiseClient =
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
 *   !proto.v1.users.Group,
 *   !proto.v1.users.Group>}
 */
const methodDescriptor_GroupService_Create = new grpc.web.MethodDescriptor(
  '/v1.users.GroupService/Create',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_users_group_message_pb.Group,
  pkg_api_v1_users_group_message_pb.Group,
  /**
   * @param {!proto.v1.users.Group} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_users_group_message_pb.Group.deserializeBinary
);


/**
 * @param {!proto.v1.users.Group} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.users.Group)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.users.Group>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.users.GroupServiceClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.users.GroupService/Create',
      request,
      metadata || {},
      methodDescriptor_GroupService_Create,
      callback);
};


/**
 * @param {!proto.v1.users.Group} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.users.Group>}
 *     Promise that resolves to the response
 */
proto.v1.users.GroupServicePromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.users.GroupService/Create',
      request,
      metadata || {},
      methodDescriptor_GroupService_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.users.Group,
 *   !proto.v1.users.Group>}
 */
const methodDescriptor_GroupService_Update = new grpc.web.MethodDescriptor(
  '/v1.users.GroupService/Update',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_users_group_message_pb.Group,
  pkg_api_v1_users_group_message_pb.Group,
  /**
   * @param {!proto.v1.users.Group} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_users_group_message_pb.Group.deserializeBinary
);


/**
 * @param {!proto.v1.users.Group} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.users.Group)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.users.Group>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.users.GroupServiceClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.users.GroupService/Update',
      request,
      metadata || {},
      methodDescriptor_GroupService_Update,
      callback);
};


/**
 * @param {!proto.v1.users.Group} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.users.Group>}
 *     Promise that resolves to the response
 */
proto.v1.users.GroupServicePromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.users.GroupService/Update',
      request,
      metadata || {},
      methodDescriptor_GroupService_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.users.Id,
 *   !proto.v1.users.Group>}
 */
const methodDescriptor_GroupService_View = new grpc.web.MethodDescriptor(
  '/v1.users.GroupService/View',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_users_generic_message_pb.Id,
  pkg_api_v1_users_group_message_pb.Group,
  /**
   * @param {!proto.v1.users.Id} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_users_group_message_pb.Group.deserializeBinary
);


/**
 * @param {!proto.v1.users.Id} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.users.Group)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.users.Group>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.users.GroupServiceClient.prototype.view =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.users.GroupService/View',
      request,
      metadata || {},
      methodDescriptor_GroupService_View,
      callback);
};


/**
 * @param {!proto.v1.users.Id} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.users.Group>}
 *     Promise that resolves to the response
 */
proto.v1.users.GroupServicePromiseClient.prototype.view =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.users.GroupService/View',
      request,
      metadata || {},
      methodDescriptor_GroupService_View);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.users.Id,
 *   !proto.v1.users.MyBoolean>}
 */
const methodDescriptor_GroupService_Delete = new grpc.web.MethodDescriptor(
  '/v1.users.GroupService/Delete',
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
proto.v1.users.GroupServiceClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.users.GroupService/Delete',
      request,
      metadata || {},
      methodDescriptor_GroupService_Delete,
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
proto.v1.users.GroupServicePromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.users.GroupService/Delete',
      request,
      metadata || {},
      methodDescriptor_GroupService_Delete);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.users.ListGroupRequest,
 *   !proto.v1.users.ListGroupResponse>}
 */
const methodDescriptor_GroupService_List = new grpc.web.MethodDescriptor(
  '/v1.users.GroupService/List',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.v1.users.ListGroupRequest,
  proto.v1.users.ListGroupResponse,
  /**
   * @param {!proto.v1.users.ListGroupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.v1.users.ListGroupResponse.deserializeBinary
);


/**
 * @param {!proto.v1.users.ListGroupRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.v1.users.ListGroupResponse>}
 *     The XHR Node Readable Stream
 */
proto.v1.users.GroupServiceClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/v1.users.GroupService/List',
      request,
      metadata || {},
      methodDescriptor_GroupService_List);
};


/**
 * @param {!proto.v1.users.ListGroupRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.v1.users.ListGroupResponse>}
 *     The XHR Node Readable Stream
 */
proto.v1.users.GroupServicePromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/v1.users.GroupService/List',
      request,
      metadata || {},
      methodDescriptor_GroupService_List);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.users.GrantAccessRequest,
 *   !proto.v1.users.Message>}
 */
const methodDescriptor_GroupService_GrantAccess = new grpc.web.MethodDescriptor(
  '/v1.users.GroupService/GrantAccess',
  grpc.web.MethodType.UNARY,
  proto.v1.users.GrantAccessRequest,
  pkg_api_v1_users_generic_message_pb.Message,
  /**
   * @param {!proto.v1.users.GrantAccessRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_users_generic_message_pb.Message.deserializeBinary
);


/**
 * @param {!proto.v1.users.GrantAccessRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.users.Message)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.users.Message>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.users.GroupServiceClient.prototype.grantAccess =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.users.GroupService/GrantAccess',
      request,
      metadata || {},
      methodDescriptor_GroupService_GrantAccess,
      callback);
};


/**
 * @param {!proto.v1.users.GrantAccessRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.users.Message>}
 *     Promise that resolves to the response
 */
proto.v1.users.GroupServicePromiseClient.prototype.grantAccess =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.users.GroupService/GrantAccess',
      request,
      metadata || {},
      methodDescriptor_GroupService_GrantAccess);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.users.GrantAccessRequest,
 *   !proto.v1.users.Message>}
 */
const methodDescriptor_GroupService_RevokeAccess = new grpc.web.MethodDescriptor(
  '/v1.users.GroupService/RevokeAccess',
  grpc.web.MethodType.UNARY,
  proto.v1.users.GrantAccessRequest,
  pkg_api_v1_users_generic_message_pb.Message,
  /**
   * @param {!proto.v1.users.GrantAccessRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_users_generic_message_pb.Message.deserializeBinary
);


/**
 * @param {!proto.v1.users.GrantAccessRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.users.Message)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.users.Message>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.users.GroupServiceClient.prototype.revokeAccess =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.users.GroupService/RevokeAccess',
      request,
      metadata || {},
      methodDescriptor_GroupService_RevokeAccess,
      callback);
};


/**
 * @param {!proto.v1.users.GrantAccessRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.users.Message>}
 *     Promise that resolves to the response
 */
proto.v1.users.GroupServicePromiseClient.prototype.revokeAccess =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.users.GroupService/RevokeAccess',
      request,
      metadata || {},
      methodDescriptor_GroupService_RevokeAccess);
};


module.exports = proto.v1.users;

