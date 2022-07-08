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


var pkg_api_v1_inventories_delivery_return_message_pb = require('../../../../pkg/api/v1/inventories/delivery_return_message_pb.js')

var pkg_api_v1_inventories_generic_message_pb = require('../../../../pkg/api/v1/inventories/generic_message_pb.js')
const proto = {};
proto.v1 = {};
proto.v1.inventories = require('./delivery_return_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.v1.inventories.DeliveryReturnServiceClient =
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
proto.v1.inventories.DeliveryReturnServicePromiseClient =
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
 *   !proto.v1.inventories.DeliveryReturn,
 *   !proto.v1.inventories.DeliveryReturn>}
 */
const methodDescriptor_DeliveryReturnService_Create = new grpc.web.MethodDescriptor(
  '/v1.inventories.DeliveryReturnService/Create',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_inventories_delivery_return_message_pb.DeliveryReturn,
  pkg_api_v1_inventories_delivery_return_message_pb.DeliveryReturn,
  /**
   * @param {!proto.v1.inventories.DeliveryReturn} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_inventories_delivery_return_message_pb.DeliveryReturn.deserializeBinary
);


/**
 * @param {!proto.v1.inventories.DeliveryReturn} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.inventories.DeliveryReturn)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.inventories.DeliveryReturn>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.inventories.DeliveryReturnServiceClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.inventories.DeliveryReturnService/Create',
      request,
      metadata || {},
      methodDescriptor_DeliveryReturnService_Create,
      callback);
};


/**
 * @param {!proto.v1.inventories.DeliveryReturn} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.inventories.DeliveryReturn>}
 *     Promise that resolves to the response
 */
proto.v1.inventories.DeliveryReturnServicePromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.inventories.DeliveryReturnService/Create',
      request,
      metadata || {},
      methodDescriptor_DeliveryReturnService_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.inventories.DeliveryReturn,
 *   !proto.v1.inventories.DeliveryReturn>}
 */
const methodDescriptor_DeliveryReturnService_Update = new grpc.web.MethodDescriptor(
  '/v1.inventories.DeliveryReturnService/Update',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_inventories_delivery_return_message_pb.DeliveryReturn,
  pkg_api_v1_inventories_delivery_return_message_pb.DeliveryReturn,
  /**
   * @param {!proto.v1.inventories.DeliveryReturn} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_inventories_delivery_return_message_pb.DeliveryReturn.deserializeBinary
);


/**
 * @param {!proto.v1.inventories.DeliveryReturn} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.inventories.DeliveryReturn)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.inventories.DeliveryReturn>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.inventories.DeliveryReturnServiceClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.inventories.DeliveryReturnService/Update',
      request,
      metadata || {},
      methodDescriptor_DeliveryReturnService_Update,
      callback);
};


/**
 * @param {!proto.v1.inventories.DeliveryReturn} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.inventories.DeliveryReturn>}
 *     Promise that resolves to the response
 */
proto.v1.inventories.DeliveryReturnServicePromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.inventories.DeliveryReturnService/Update',
      request,
      metadata || {},
      methodDescriptor_DeliveryReturnService_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.inventories.Id,
 *   !proto.v1.inventories.DeliveryReturn>}
 */
const methodDescriptor_DeliveryReturnService_View = new grpc.web.MethodDescriptor(
  '/v1.inventories.DeliveryReturnService/View',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_inventories_generic_message_pb.Id,
  pkg_api_v1_inventories_delivery_return_message_pb.DeliveryReturn,
  /**
   * @param {!proto.v1.inventories.Id} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_inventories_delivery_return_message_pb.DeliveryReturn.deserializeBinary
);


/**
 * @param {!proto.v1.inventories.Id} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.inventories.DeliveryReturn)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.inventories.DeliveryReturn>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.inventories.DeliveryReturnServiceClient.prototype.view =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.inventories.DeliveryReturnService/View',
      request,
      metadata || {},
      methodDescriptor_DeliveryReturnService_View,
      callback);
};


/**
 * @param {!proto.v1.inventories.Id} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.inventories.DeliveryReturn>}
 *     Promise that resolves to the response
 */
proto.v1.inventories.DeliveryReturnServicePromiseClient.prototype.view =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.inventories.DeliveryReturnService/View',
      request,
      metadata || {},
      methodDescriptor_DeliveryReturnService_View);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.inventories.ListDeliveryReturnRequest,
 *   !proto.v1.inventories.ListDeliveryReturnResponse>}
 */
const methodDescriptor_DeliveryReturnService_List = new grpc.web.MethodDescriptor(
  '/v1.inventories.DeliveryReturnService/List',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.v1.inventories.ListDeliveryReturnRequest,
  proto.v1.inventories.ListDeliveryReturnResponse,
  /**
   * @param {!proto.v1.inventories.ListDeliveryReturnRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.v1.inventories.ListDeliveryReturnResponse.deserializeBinary
);


/**
 * @param {!proto.v1.inventories.ListDeliveryReturnRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.v1.inventories.ListDeliveryReturnResponse>}
 *     The XHR Node Readable Stream
 */
proto.v1.inventories.DeliveryReturnServiceClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/v1.inventories.DeliveryReturnService/List',
      request,
      metadata || {},
      methodDescriptor_DeliveryReturnService_List);
};


/**
 * @param {!proto.v1.inventories.ListDeliveryReturnRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.v1.inventories.ListDeliveryReturnResponse>}
 *     The XHR Node Readable Stream
 */
proto.v1.inventories.DeliveryReturnServicePromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/v1.inventories.DeliveryReturnService/List',
      request,
      metadata || {},
      methodDescriptor_DeliveryReturnService_List);
};


module.exports = proto.v1.inventories;

