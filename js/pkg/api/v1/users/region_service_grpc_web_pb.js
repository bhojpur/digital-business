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


var pkg_api_v1_users_region_message_pb = require('../../../../pkg/api/v1/users/region_message_pb.js')

var pkg_api_v1_users_generic_message_pb = require('../../../../pkg/api/v1/users/generic_message_pb.js')
const proto = {};
proto.v1 = {};
proto.v1.users = require('./region_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.v1.users.RegionServiceClient =
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
proto.v1.users.RegionServicePromiseClient =
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
 *   !proto.v1.users.Region,
 *   !proto.v1.users.Region>}
 */
const methodDescriptor_RegionService_Create = new grpc.web.MethodDescriptor(
  '/v1.users.RegionService/Create',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_users_region_message_pb.Region,
  pkg_api_v1_users_region_message_pb.Region,
  /**
   * @param {!proto.v1.users.Region} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_users_region_message_pb.Region.deserializeBinary
);


/**
 * @param {!proto.v1.users.Region} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.users.Region)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.users.Region>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.users.RegionServiceClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.users.RegionService/Create',
      request,
      metadata || {},
      methodDescriptor_RegionService_Create,
      callback);
};


/**
 * @param {!proto.v1.users.Region} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.users.Region>}
 *     Promise that resolves to the response
 */
proto.v1.users.RegionServicePromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.users.RegionService/Create',
      request,
      metadata || {},
      methodDescriptor_RegionService_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.users.Region,
 *   !proto.v1.users.Region>}
 */
const methodDescriptor_RegionService_Update = new grpc.web.MethodDescriptor(
  '/v1.users.RegionService/Update',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_users_region_message_pb.Region,
  pkg_api_v1_users_region_message_pb.Region,
  /**
   * @param {!proto.v1.users.Region} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_users_region_message_pb.Region.deserializeBinary
);


/**
 * @param {!proto.v1.users.Region} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.users.Region)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.users.Region>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.users.RegionServiceClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.users.RegionService/Update',
      request,
      metadata || {},
      methodDescriptor_RegionService_Update,
      callback);
};


/**
 * @param {!proto.v1.users.Region} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.users.Region>}
 *     Promise that resolves to the response
 */
proto.v1.users.RegionServicePromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.users.RegionService/Update',
      request,
      metadata || {},
      methodDescriptor_RegionService_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.users.Id,
 *   !proto.v1.users.Region>}
 */
const methodDescriptor_RegionService_View = new grpc.web.MethodDescriptor(
  '/v1.users.RegionService/View',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_users_generic_message_pb.Id,
  pkg_api_v1_users_region_message_pb.Region,
  /**
   * @param {!proto.v1.users.Id} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_users_region_message_pb.Region.deserializeBinary
);


/**
 * @param {!proto.v1.users.Id} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.users.Region)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.users.Region>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.users.RegionServiceClient.prototype.view =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.users.RegionService/View',
      request,
      metadata || {},
      methodDescriptor_RegionService_View,
      callback);
};


/**
 * @param {!proto.v1.users.Id} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.users.Region>}
 *     Promise that resolves to the response
 */
proto.v1.users.RegionServicePromiseClient.prototype.view =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.users.RegionService/View',
      request,
      metadata || {},
      methodDescriptor_RegionService_View);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.users.Id,
 *   !proto.v1.users.MyBoolean>}
 */
const methodDescriptor_RegionService_Delete = new grpc.web.MethodDescriptor(
  '/v1.users.RegionService/Delete',
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
proto.v1.users.RegionServiceClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.users.RegionService/Delete',
      request,
      metadata || {},
      methodDescriptor_RegionService_Delete,
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
proto.v1.users.RegionServicePromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.users.RegionService/Delete',
      request,
      metadata || {},
      methodDescriptor_RegionService_Delete);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.users.ListRegionRequest,
 *   !proto.v1.users.ListRegionResponse>}
 */
const methodDescriptor_RegionService_List = new grpc.web.MethodDescriptor(
  '/v1.users.RegionService/List',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.v1.users.ListRegionRequest,
  proto.v1.users.ListRegionResponse,
  /**
   * @param {!proto.v1.users.ListRegionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.v1.users.ListRegionResponse.deserializeBinary
);


/**
 * @param {!proto.v1.users.ListRegionRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.v1.users.ListRegionResponse>}
 *     The XHR Node Readable Stream
 */
proto.v1.users.RegionServiceClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/v1.users.RegionService/List',
      request,
      metadata || {},
      methodDescriptor_RegionService_List);
};


/**
 * @param {!proto.v1.users.ListRegionRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.v1.users.ListRegionResponse>}
 *     The XHR Node Readable Stream
 */
proto.v1.users.RegionServicePromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/v1.users.RegionService/List',
      request,
      metadata || {},
      methodDescriptor_RegionService_List);
};


module.exports = proto.v1.users;

