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


var pkg_api_v1_inventories_receive_return_message_pb = require('../../../../pkg/api/v1/inventories/receive_return_message_pb.js')

var pkg_api_v1_inventories_generic_message_pb = require('../../../../pkg/api/v1/inventories/generic_message_pb.js')
const proto = {};
proto.v1 = {};
proto.v1.inventories = require('./receive_return_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.v1.inventories.ReceiveReturnServiceClient =
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
proto.v1.inventories.ReceiveReturnServicePromiseClient =
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
 *   !proto.v1.inventories.ReceiveReturn,
 *   !proto.v1.inventories.ReceiveReturn>}
 */
const methodDescriptor_ReceiveReturnService_Create = new grpc.web.MethodDescriptor(
  '/v1.inventories.ReceiveReturnService/Create',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_inventories_receive_return_message_pb.ReceiveReturn,
  pkg_api_v1_inventories_receive_return_message_pb.ReceiveReturn,
  /**
   * @param {!proto.v1.inventories.ReceiveReturn} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_inventories_receive_return_message_pb.ReceiveReturn.deserializeBinary
);


/**
 * @param {!proto.v1.inventories.ReceiveReturn} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.inventories.ReceiveReturn)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.inventories.ReceiveReturn>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.inventories.ReceiveReturnServiceClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.inventories.ReceiveReturnService/Create',
      request,
      metadata || {},
      methodDescriptor_ReceiveReturnService_Create,
      callback);
};


/**
 * @param {!proto.v1.inventories.ReceiveReturn} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.inventories.ReceiveReturn>}
 *     Promise that resolves to the response
 */
proto.v1.inventories.ReceiveReturnServicePromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.inventories.ReceiveReturnService/Create',
      request,
      metadata || {},
      methodDescriptor_ReceiveReturnService_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.inventories.ReceiveReturn,
 *   !proto.v1.inventories.ReceiveReturn>}
 */
const methodDescriptor_ReceiveReturnService_Update = new grpc.web.MethodDescriptor(
  '/v1.inventories.ReceiveReturnService/Update',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_inventories_receive_return_message_pb.ReceiveReturn,
  pkg_api_v1_inventories_receive_return_message_pb.ReceiveReturn,
  /**
   * @param {!proto.v1.inventories.ReceiveReturn} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_inventories_receive_return_message_pb.ReceiveReturn.deserializeBinary
);


/**
 * @param {!proto.v1.inventories.ReceiveReturn} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.inventories.ReceiveReturn)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.inventories.ReceiveReturn>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.inventories.ReceiveReturnServiceClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.inventories.ReceiveReturnService/Update',
      request,
      metadata || {},
      methodDescriptor_ReceiveReturnService_Update,
      callback);
};


/**
 * @param {!proto.v1.inventories.ReceiveReturn} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.inventories.ReceiveReturn>}
 *     Promise that resolves to the response
 */
proto.v1.inventories.ReceiveReturnServicePromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.inventories.ReceiveReturnService/Update',
      request,
      metadata || {},
      methodDescriptor_ReceiveReturnService_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.inventories.Id,
 *   !proto.v1.inventories.ReceiveReturn>}
 */
const methodDescriptor_ReceiveReturnService_View = new grpc.web.MethodDescriptor(
  '/v1.inventories.ReceiveReturnService/View',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_inventories_generic_message_pb.Id,
  pkg_api_v1_inventories_receive_return_message_pb.ReceiveReturn,
  /**
   * @param {!proto.v1.inventories.Id} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_inventories_receive_return_message_pb.ReceiveReturn.deserializeBinary
);


/**
 * @param {!proto.v1.inventories.Id} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.inventories.ReceiveReturn)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.inventories.ReceiveReturn>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.inventories.ReceiveReturnServiceClient.prototype.view =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.inventories.ReceiveReturnService/View',
      request,
      metadata || {},
      methodDescriptor_ReceiveReturnService_View,
      callback);
};


/**
 * @param {!proto.v1.inventories.Id} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.inventories.ReceiveReturn>}
 *     Promise that resolves to the response
 */
proto.v1.inventories.ReceiveReturnServicePromiseClient.prototype.view =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.inventories.ReceiveReturnService/View',
      request,
      metadata || {},
      methodDescriptor_ReceiveReturnService_View);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.inventories.ListReceiveReturnRequest,
 *   !proto.v1.inventories.ListReceiveReturnResponse>}
 */
const methodDescriptor_ReceiveReturnService_List = new grpc.web.MethodDescriptor(
  '/v1.inventories.ReceiveReturnService/List',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.v1.inventories.ListReceiveReturnRequest,
  proto.v1.inventories.ListReceiveReturnResponse,
  /**
   * @param {!proto.v1.inventories.ListReceiveReturnRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.v1.inventories.ListReceiveReturnResponse.deserializeBinary
);


/**
 * @param {!proto.v1.inventories.ListReceiveReturnRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.v1.inventories.ListReceiveReturnResponse>}
 *     The XHR Node Readable Stream
 */
proto.v1.inventories.ReceiveReturnServiceClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/v1.inventories.ReceiveReturnService/List',
      request,
      metadata || {},
      methodDescriptor_ReceiveReturnService_List);
};


/**
 * @param {!proto.v1.inventories.ListReceiveReturnRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.v1.inventories.ListReceiveReturnResponse>}
 *     The XHR Node Readable Stream
 */
proto.v1.inventories.ReceiveReturnServicePromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/v1.inventories.ReceiveReturnService/List',
      request,
      metadata || {},
      methodDescriptor_ReceiveReturnService_List);
};


module.exports = proto.v1.inventories;

