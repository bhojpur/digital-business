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


var pkg_api_v1_users_branch_message_pb = require('../../../../pkg/api/v1/users/branch_message_pb.js')

var pkg_api_v1_users_generic_message_pb = require('../../../../pkg/api/v1/users/generic_message_pb.js')
const proto = {};
proto.v1 = {};
proto.v1.users = require('./branch_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.v1.users.BranchServiceClient =
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
proto.v1.users.BranchServicePromiseClient =
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
 *   !proto.v1.users.Branch,
 *   !proto.v1.users.Branch>}
 */
const methodDescriptor_BranchService_Create = new grpc.web.MethodDescriptor(
  '/v1.users.BranchService/Create',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_users_branch_message_pb.Branch,
  pkg_api_v1_users_branch_message_pb.Branch,
  /**
   * @param {!proto.v1.users.Branch} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_users_branch_message_pb.Branch.deserializeBinary
);


/**
 * @param {!proto.v1.users.Branch} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.users.Branch)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.users.Branch>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.users.BranchServiceClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.users.BranchService/Create',
      request,
      metadata || {},
      methodDescriptor_BranchService_Create,
      callback);
};


/**
 * @param {!proto.v1.users.Branch} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.users.Branch>}
 *     Promise that resolves to the response
 */
proto.v1.users.BranchServicePromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.users.BranchService/Create',
      request,
      metadata || {},
      methodDescriptor_BranchService_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.users.Branch,
 *   !proto.v1.users.Branch>}
 */
const methodDescriptor_BranchService_Update = new grpc.web.MethodDescriptor(
  '/v1.users.BranchService/Update',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_users_branch_message_pb.Branch,
  pkg_api_v1_users_branch_message_pb.Branch,
  /**
   * @param {!proto.v1.users.Branch} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_users_branch_message_pb.Branch.deserializeBinary
);


/**
 * @param {!proto.v1.users.Branch} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.users.Branch)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.users.Branch>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.users.BranchServiceClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.users.BranchService/Update',
      request,
      metadata || {},
      methodDescriptor_BranchService_Update,
      callback);
};


/**
 * @param {!proto.v1.users.Branch} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.users.Branch>}
 *     Promise that resolves to the response
 */
proto.v1.users.BranchServicePromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.users.BranchService/Update',
      request,
      metadata || {},
      methodDescriptor_BranchService_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.users.Id,
 *   !proto.v1.users.Branch>}
 */
const methodDescriptor_BranchService_View = new grpc.web.MethodDescriptor(
  '/v1.users.BranchService/View',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_users_generic_message_pb.Id,
  pkg_api_v1_users_branch_message_pb.Branch,
  /**
   * @param {!proto.v1.users.Id} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_users_branch_message_pb.Branch.deserializeBinary
);


/**
 * @param {!proto.v1.users.Id} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.users.Branch)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.users.Branch>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.users.BranchServiceClient.prototype.view =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.users.BranchService/View',
      request,
      metadata || {},
      methodDescriptor_BranchService_View,
      callback);
};


/**
 * @param {!proto.v1.users.Id} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.users.Branch>}
 *     Promise that resolves to the response
 */
proto.v1.users.BranchServicePromiseClient.prototype.view =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.users.BranchService/View',
      request,
      metadata || {},
      methodDescriptor_BranchService_View);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.users.Id,
 *   !proto.v1.users.MyBoolean>}
 */
const methodDescriptor_BranchService_Delete = new grpc.web.MethodDescriptor(
  '/v1.users.BranchService/Delete',
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
proto.v1.users.BranchServiceClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.users.BranchService/Delete',
      request,
      metadata || {},
      methodDescriptor_BranchService_Delete,
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
proto.v1.users.BranchServicePromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.users.BranchService/Delete',
      request,
      metadata || {},
      methodDescriptor_BranchService_Delete);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.users.ListBranchRequest,
 *   !proto.v1.users.ListBranchResponse>}
 */
const methodDescriptor_BranchService_List = new grpc.web.MethodDescriptor(
  '/v1.users.BranchService/List',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.v1.users.ListBranchRequest,
  proto.v1.users.ListBranchResponse,
  /**
   * @param {!proto.v1.users.ListBranchRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.v1.users.ListBranchResponse.deserializeBinary
);


/**
 * @param {!proto.v1.users.ListBranchRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.v1.users.ListBranchResponse>}
 *     The XHR Node Readable Stream
 */
proto.v1.users.BranchServiceClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/v1.users.BranchService/List',
      request,
      metadata || {},
      methodDescriptor_BranchService_List);
};


/**
 * @param {!proto.v1.users.ListBranchRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.v1.users.ListBranchResponse>}
 *     The XHR Node Readable Stream
 */
proto.v1.users.BranchServicePromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/v1.users.BranchService/List',
      request,
      metadata || {},
      methodDescriptor_BranchService_List);
};


module.exports = proto.v1.users;

