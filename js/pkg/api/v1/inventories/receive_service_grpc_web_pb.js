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


var pkg_api_v1_inventories_receive_message_pb = require('../../../../pkg/api/v1/inventories/receive_message_pb.js')

var pkg_api_v1_inventories_generic_message_pb = require('../../../../pkg/api/v1/inventories/generic_message_pb.js')
const proto = {};
proto.v1 = {};
proto.v1.inventories = require('./receive_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.v1.inventories.ReceiveServiceClient =
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
proto.v1.inventories.ReceiveServicePromiseClient =
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
 *   !proto.v1.inventories.Receive,
 *   !proto.v1.inventories.Receive>}
 */
const methodDescriptor_ReceiveService_Create = new grpc.web.MethodDescriptor(
  '/v1.inventories.ReceiveService/Create',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_inventories_receive_message_pb.Receive,
  pkg_api_v1_inventories_receive_message_pb.Receive,
  /**
   * @param {!proto.v1.inventories.Receive} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_inventories_receive_message_pb.Receive.deserializeBinary
);


/**
 * @param {!proto.v1.inventories.Receive} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.inventories.Receive)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.inventories.Receive>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.inventories.ReceiveServiceClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.inventories.ReceiveService/Create',
      request,
      metadata || {},
      methodDescriptor_ReceiveService_Create,
      callback);
};


/**
 * @param {!proto.v1.inventories.Receive} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.inventories.Receive>}
 *     Promise that resolves to the response
 */
proto.v1.inventories.ReceiveServicePromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.inventories.ReceiveService/Create',
      request,
      metadata || {},
      methodDescriptor_ReceiveService_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.inventories.Receive,
 *   !proto.v1.inventories.Receive>}
 */
const methodDescriptor_ReceiveService_Update = new grpc.web.MethodDescriptor(
  '/v1.inventories.ReceiveService/Update',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_inventories_receive_message_pb.Receive,
  pkg_api_v1_inventories_receive_message_pb.Receive,
  /**
   * @param {!proto.v1.inventories.Receive} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_inventories_receive_message_pb.Receive.deserializeBinary
);


/**
 * @param {!proto.v1.inventories.Receive} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.inventories.Receive)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.inventories.Receive>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.inventories.ReceiveServiceClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.inventories.ReceiveService/Update',
      request,
      metadata || {},
      methodDescriptor_ReceiveService_Update,
      callback);
};


/**
 * @param {!proto.v1.inventories.Receive} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.inventories.Receive>}
 *     Promise that resolves to the response
 */
proto.v1.inventories.ReceiveServicePromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.inventories.ReceiveService/Update',
      request,
      metadata || {},
      methodDescriptor_ReceiveService_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.inventories.Id,
 *   !proto.v1.inventories.Receive>}
 */
const methodDescriptor_ReceiveService_View = new grpc.web.MethodDescriptor(
  '/v1.inventories.ReceiveService/View',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_inventories_generic_message_pb.Id,
  pkg_api_v1_inventories_receive_message_pb.Receive,
  /**
   * @param {!proto.v1.inventories.Id} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_inventories_receive_message_pb.Receive.deserializeBinary
);


/**
 * @param {!proto.v1.inventories.Id} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.inventories.Receive)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.inventories.Receive>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.inventories.ReceiveServiceClient.prototype.view =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.inventories.ReceiveService/View',
      request,
      metadata || {},
      methodDescriptor_ReceiveService_View,
      callback);
};


/**
 * @param {!proto.v1.inventories.Id} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.inventories.Receive>}
 *     Promise that resolves to the response
 */
proto.v1.inventories.ReceiveServicePromiseClient.prototype.view =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.inventories.ReceiveService/View',
      request,
      metadata || {},
      methodDescriptor_ReceiveService_View);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.inventories.ListReceiveRequest,
 *   !proto.v1.inventories.ListReceiveResponse>}
 */
const methodDescriptor_ReceiveService_List = new grpc.web.MethodDescriptor(
  '/v1.inventories.ReceiveService/List',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.v1.inventories.ListReceiveRequest,
  proto.v1.inventories.ListReceiveResponse,
  /**
   * @param {!proto.v1.inventories.ListReceiveRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.v1.inventories.ListReceiveResponse.deserializeBinary
);


/**
 * @param {!proto.v1.inventories.ListReceiveRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.v1.inventories.ListReceiveResponse>}
 *     The XHR Node Readable Stream
 */
proto.v1.inventories.ReceiveServiceClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/v1.inventories.ReceiveService/List',
      request,
      metadata || {},
      methodDescriptor_ReceiveService_List);
};


/**
 * @param {!proto.v1.inventories.ListReceiveRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.v1.inventories.ListReceiveResponse>}
 *     The XHR Node Readable Stream
 */
proto.v1.inventories.ReceiveServicePromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/v1.inventories.ReceiveService/List',
      request,
      metadata || {},
      methodDescriptor_ReceiveService_List);
};


module.exports = proto.v1.inventories;

