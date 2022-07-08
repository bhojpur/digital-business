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


var pkg_api_v1_inventories_delivery_message_pb = require('../../../../pkg/api/v1/inventories/delivery_message_pb.js')

var pkg_api_v1_inventories_generic_message_pb = require('../../../../pkg/api/v1/inventories/generic_message_pb.js')
const proto = {};
proto.v1 = {};
proto.v1.inventories = require('./delivery_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.v1.inventories.DeliveryServiceClient =
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
proto.v1.inventories.DeliveryServicePromiseClient =
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
 *   !proto.v1.inventories.Delivery,
 *   !proto.v1.inventories.Delivery>}
 */
const methodDescriptor_DeliveryService_Create = new grpc.web.MethodDescriptor(
  '/v1.inventories.DeliveryService/Create',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_inventories_delivery_message_pb.Delivery,
  pkg_api_v1_inventories_delivery_message_pb.Delivery,
  /**
   * @param {!proto.v1.inventories.Delivery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_inventories_delivery_message_pb.Delivery.deserializeBinary
);


/**
 * @param {!proto.v1.inventories.Delivery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.inventories.Delivery)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.inventories.Delivery>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.inventories.DeliveryServiceClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.inventories.DeliveryService/Create',
      request,
      metadata || {},
      methodDescriptor_DeliveryService_Create,
      callback);
};


/**
 * @param {!proto.v1.inventories.Delivery} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.inventories.Delivery>}
 *     Promise that resolves to the response
 */
proto.v1.inventories.DeliveryServicePromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.inventories.DeliveryService/Create',
      request,
      metadata || {},
      methodDescriptor_DeliveryService_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.inventories.Delivery,
 *   !proto.v1.inventories.Delivery>}
 */
const methodDescriptor_DeliveryService_Update = new grpc.web.MethodDescriptor(
  '/v1.inventories.DeliveryService/Update',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_inventories_delivery_message_pb.Delivery,
  pkg_api_v1_inventories_delivery_message_pb.Delivery,
  /**
   * @param {!proto.v1.inventories.Delivery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_inventories_delivery_message_pb.Delivery.deserializeBinary
);


/**
 * @param {!proto.v1.inventories.Delivery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.inventories.Delivery)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.inventories.Delivery>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.inventories.DeliveryServiceClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.inventories.DeliveryService/Update',
      request,
      metadata || {},
      methodDescriptor_DeliveryService_Update,
      callback);
};


/**
 * @param {!proto.v1.inventories.Delivery} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.inventories.Delivery>}
 *     Promise that resolves to the response
 */
proto.v1.inventories.DeliveryServicePromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.inventories.DeliveryService/Update',
      request,
      metadata || {},
      methodDescriptor_DeliveryService_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.inventories.Id,
 *   !proto.v1.inventories.Delivery>}
 */
const methodDescriptor_DeliveryService_View = new grpc.web.MethodDescriptor(
  '/v1.inventories.DeliveryService/View',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_inventories_generic_message_pb.Id,
  pkg_api_v1_inventories_delivery_message_pb.Delivery,
  /**
   * @param {!proto.v1.inventories.Id} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_inventories_delivery_message_pb.Delivery.deserializeBinary
);


/**
 * @param {!proto.v1.inventories.Id} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.inventories.Delivery)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.inventories.Delivery>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.inventories.DeliveryServiceClient.prototype.view =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.inventories.DeliveryService/View',
      request,
      metadata || {},
      methodDescriptor_DeliveryService_View,
      callback);
};


/**
 * @param {!proto.v1.inventories.Id} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.inventories.Delivery>}
 *     Promise that resolves to the response
 */
proto.v1.inventories.DeliveryServicePromiseClient.prototype.view =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.inventories.DeliveryService/View',
      request,
      metadata || {},
      methodDescriptor_DeliveryService_View);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.inventories.ListDeliveryRequest,
 *   !proto.v1.inventories.ListDeliveryResponse>}
 */
const methodDescriptor_DeliveryService_List = new grpc.web.MethodDescriptor(
  '/v1.inventories.DeliveryService/List',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.v1.inventories.ListDeliveryRequest,
  proto.v1.inventories.ListDeliveryResponse,
  /**
   * @param {!proto.v1.inventories.ListDeliveryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.v1.inventories.ListDeliveryResponse.deserializeBinary
);


/**
 * @param {!proto.v1.inventories.ListDeliveryRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.v1.inventories.ListDeliveryResponse>}
 *     The XHR Node Readable Stream
 */
proto.v1.inventories.DeliveryServiceClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/v1.inventories.DeliveryService/List',
      request,
      metadata || {},
      methodDescriptor_DeliveryService_List);
};


/**
 * @param {!proto.v1.inventories.ListDeliveryRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.v1.inventories.ListDeliveryResponse>}
 *     The XHR Node Readable Stream
 */
proto.v1.inventories.DeliveryServicePromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/v1.inventories.DeliveryService/List',
      request,
      metadata || {},
      methodDescriptor_DeliveryService_List);
};


module.exports = proto.v1.inventories;

