/**
 * @fileoverview gRPC-Web generated client stub for v1.inventories
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var pkg_api_v1_inventories_shelve_message_pb = require('../../../../pkg/api/v1/inventories/shelve_message_pb.js')

var pkg_api_v1_inventories_generic_message_pb = require('../../../../pkg/api/v1/inventories/generic_message_pb.js')
const proto = {};
proto.v1 = {};
proto.v1.inventories = require('./shelve_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.v1.inventories.ShelveServiceClient =
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
proto.v1.inventories.ShelveServicePromiseClient =
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
 *   !proto.v1.inventories.Shelve,
 *   !proto.v1.inventories.Shelve>}
 */
const methodDescriptor_ShelveService_Create = new grpc.web.MethodDescriptor(
  '/v1.inventories.ShelveService/Create',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_inventories_shelve_message_pb.Shelve,
  pkg_api_v1_inventories_shelve_message_pb.Shelve,
  /**
   * @param {!proto.v1.inventories.Shelve} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_inventories_shelve_message_pb.Shelve.deserializeBinary
);


/**
 * @param {!proto.v1.inventories.Shelve} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.inventories.Shelve)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.inventories.Shelve>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.inventories.ShelveServiceClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.inventories.ShelveService/Create',
      request,
      metadata || {},
      methodDescriptor_ShelveService_Create,
      callback);
};


/**
 * @param {!proto.v1.inventories.Shelve} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.inventories.Shelve>}
 *     Promise that resolves to the response
 */
proto.v1.inventories.ShelveServicePromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.inventories.ShelveService/Create',
      request,
      metadata || {},
      methodDescriptor_ShelveService_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.inventories.Shelve,
 *   !proto.v1.inventories.Shelve>}
 */
const methodDescriptor_ShelveService_Update = new grpc.web.MethodDescriptor(
  '/v1.inventories.ShelveService/Update',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_inventories_shelve_message_pb.Shelve,
  pkg_api_v1_inventories_shelve_message_pb.Shelve,
  /**
   * @param {!proto.v1.inventories.Shelve} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_inventories_shelve_message_pb.Shelve.deserializeBinary
);


/**
 * @param {!proto.v1.inventories.Shelve} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.inventories.Shelve)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.inventories.Shelve>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.inventories.ShelveServiceClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.inventories.ShelveService/Update',
      request,
      metadata || {},
      methodDescriptor_ShelveService_Update,
      callback);
};


/**
 * @param {!proto.v1.inventories.Shelve} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.inventories.Shelve>}
 *     Promise that resolves to the response
 */
proto.v1.inventories.ShelveServicePromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.inventories.ShelveService/Update',
      request,
      metadata || {},
      methodDescriptor_ShelveService_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.inventories.Id,
 *   !proto.v1.inventories.Shelve>}
 */
const methodDescriptor_ShelveService_View = new grpc.web.MethodDescriptor(
  '/v1.inventories.ShelveService/View',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_inventories_generic_message_pb.Id,
  pkg_api_v1_inventories_shelve_message_pb.Shelve,
  /**
   * @param {!proto.v1.inventories.Id} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_inventories_shelve_message_pb.Shelve.deserializeBinary
);


/**
 * @param {!proto.v1.inventories.Id} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.inventories.Shelve)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.inventories.Shelve>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.inventories.ShelveServiceClient.prototype.view =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.inventories.ShelveService/View',
      request,
      metadata || {},
      methodDescriptor_ShelveService_View,
      callback);
};


/**
 * @param {!proto.v1.inventories.Id} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.inventories.Shelve>}
 *     Promise that resolves to the response
 */
proto.v1.inventories.ShelveServicePromiseClient.prototype.view =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.inventories.ShelveService/View',
      request,
      metadata || {},
      methodDescriptor_ShelveService_View);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.inventories.Id,
 *   !proto.v1.inventories.MyBoolean>}
 */
const methodDescriptor_ShelveService_Delete = new grpc.web.MethodDescriptor(
  '/v1.inventories.ShelveService/Delete',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_inventories_generic_message_pb.Id,
  pkg_api_v1_inventories_generic_message_pb.MyBoolean,
  /**
   * @param {!proto.v1.inventories.Id} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_inventories_generic_message_pb.MyBoolean.deserializeBinary
);


/**
 * @param {!proto.v1.inventories.Id} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.inventories.MyBoolean)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.inventories.MyBoolean>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.inventories.ShelveServiceClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.inventories.ShelveService/Delete',
      request,
      metadata || {},
      methodDescriptor_ShelveService_Delete,
      callback);
};


/**
 * @param {!proto.v1.inventories.Id} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.inventories.MyBoolean>}
 *     Promise that resolves to the response
 */
proto.v1.inventories.ShelveServicePromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.inventories.ShelveService/Delete',
      request,
      metadata || {},
      methodDescriptor_ShelveService_Delete);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.inventories.ListShelveRequest,
 *   !proto.v1.inventories.ListShelveResponse>}
 */
const methodDescriptor_ShelveService_List = new grpc.web.MethodDescriptor(
  '/v1.inventories.ShelveService/List',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.v1.inventories.ListShelveRequest,
  proto.v1.inventories.ListShelveResponse,
  /**
   * @param {!proto.v1.inventories.ListShelveRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.v1.inventories.ListShelveResponse.deserializeBinary
);


/**
 * @param {!proto.v1.inventories.ListShelveRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.v1.inventories.ListShelveResponse>}
 *     The XHR Node Readable Stream
 */
proto.v1.inventories.ShelveServiceClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/v1.inventories.ShelveService/List',
      request,
      metadata || {},
      methodDescriptor_ShelveService_List);
};


/**
 * @param {!proto.v1.inventories.ListShelveRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.v1.inventories.ListShelveResponse>}
 *     The XHR Node Readable Stream
 */
proto.v1.inventories.ShelveServicePromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/v1.inventories.ShelveService/List',
      request,
      metadata || {},
      methodDescriptor_ShelveService_List);
};


module.exports = proto.v1.inventories;

