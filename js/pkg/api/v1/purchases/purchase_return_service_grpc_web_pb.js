/**
 * @fileoverview gRPC-Web generated client stub for v1.purchases
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var pkg_api_v1_purchases_purchase_return_message_pb = require('../../../../pkg/api/v1/purchases/purchase_return_message_pb.js')

var pkg_api_v1_purchases_generic_message_pb = require('../../../../pkg/api/v1/purchases/generic_message_pb.js')
const proto = {};
proto.v1 = {};
proto.v1.purchases = require('./purchase_return_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.v1.purchases.PurchaseReturnServiceClient =
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
proto.v1.purchases.PurchaseReturnServicePromiseClient =
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
 *   !proto.v1.purchases.PurchaseReturn,
 *   !proto.v1.purchases.PurchaseReturn>}
 */
const methodDescriptor_PurchaseReturnService_PurchaseReturnCreate = new grpc.web.MethodDescriptor(
  '/v1.purchases.PurchaseReturnService/PurchaseReturnCreate',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_purchases_purchase_return_message_pb.PurchaseReturn,
  pkg_api_v1_purchases_purchase_return_message_pb.PurchaseReturn,
  /**
   * @param {!proto.v1.purchases.PurchaseReturn} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_purchases_purchase_return_message_pb.PurchaseReturn.deserializeBinary
);


/**
 * @param {!proto.v1.purchases.PurchaseReturn} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.purchases.PurchaseReturn)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.purchases.PurchaseReturn>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.purchases.PurchaseReturnServiceClient.prototype.purchaseReturnCreate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.purchases.PurchaseReturnService/PurchaseReturnCreate',
      request,
      metadata || {},
      methodDescriptor_PurchaseReturnService_PurchaseReturnCreate,
      callback);
};


/**
 * @param {!proto.v1.purchases.PurchaseReturn} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.purchases.PurchaseReturn>}
 *     Promise that resolves to the response
 */
proto.v1.purchases.PurchaseReturnServicePromiseClient.prototype.purchaseReturnCreate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.purchases.PurchaseReturnService/PurchaseReturnCreate',
      request,
      metadata || {},
      methodDescriptor_PurchaseReturnService_PurchaseReturnCreate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.purchases.PurchaseReturn,
 *   !proto.v1.purchases.PurchaseReturn>}
 */
const methodDescriptor_PurchaseReturnService_PurchaseReturnUpdate = new grpc.web.MethodDescriptor(
  '/v1.purchases.PurchaseReturnService/PurchaseReturnUpdate',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_purchases_purchase_return_message_pb.PurchaseReturn,
  pkg_api_v1_purchases_purchase_return_message_pb.PurchaseReturn,
  /**
   * @param {!proto.v1.purchases.PurchaseReturn} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_purchases_purchase_return_message_pb.PurchaseReturn.deserializeBinary
);


/**
 * @param {!proto.v1.purchases.PurchaseReturn} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.purchases.PurchaseReturn)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.purchases.PurchaseReturn>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.purchases.PurchaseReturnServiceClient.prototype.purchaseReturnUpdate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.purchases.PurchaseReturnService/PurchaseReturnUpdate',
      request,
      metadata || {},
      methodDescriptor_PurchaseReturnService_PurchaseReturnUpdate,
      callback);
};


/**
 * @param {!proto.v1.purchases.PurchaseReturn} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.purchases.PurchaseReturn>}
 *     Promise that resolves to the response
 */
proto.v1.purchases.PurchaseReturnServicePromiseClient.prototype.purchaseReturnUpdate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.purchases.PurchaseReturnService/PurchaseReturnUpdate',
      request,
      metadata || {},
      methodDescriptor_PurchaseReturnService_PurchaseReturnUpdate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.purchases.Id,
 *   !proto.v1.purchases.PurchaseReturn>}
 */
const methodDescriptor_PurchaseReturnService_PurchaseReturnView = new grpc.web.MethodDescriptor(
  '/v1.purchases.PurchaseReturnService/PurchaseReturnView',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_purchases_generic_message_pb.Id,
  pkg_api_v1_purchases_purchase_return_message_pb.PurchaseReturn,
  /**
   * @param {!proto.v1.purchases.Id} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_purchases_purchase_return_message_pb.PurchaseReturn.deserializeBinary
);


/**
 * @param {!proto.v1.purchases.Id} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.purchases.PurchaseReturn)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.purchases.PurchaseReturn>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.purchases.PurchaseReturnServiceClient.prototype.purchaseReturnView =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.purchases.PurchaseReturnService/PurchaseReturnView',
      request,
      metadata || {},
      methodDescriptor_PurchaseReturnService_PurchaseReturnView,
      callback);
};


/**
 * @param {!proto.v1.purchases.Id} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.purchases.PurchaseReturn>}
 *     Promise that resolves to the response
 */
proto.v1.purchases.PurchaseReturnServicePromiseClient.prototype.purchaseReturnView =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.purchases.PurchaseReturnService/PurchaseReturnView',
      request,
      metadata || {},
      methodDescriptor_PurchaseReturnService_PurchaseReturnView);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.purchases.ListPurchaseReturnRequest,
 *   !proto.v1.purchases.ListPurchaseReturnResponse>}
 */
const methodDescriptor_PurchaseReturnService_PurchaseReturnList = new grpc.web.MethodDescriptor(
  '/v1.purchases.PurchaseReturnService/PurchaseReturnList',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.v1.purchases.ListPurchaseReturnRequest,
  proto.v1.purchases.ListPurchaseReturnResponse,
  /**
   * @param {!proto.v1.purchases.ListPurchaseReturnRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.v1.purchases.ListPurchaseReturnResponse.deserializeBinary
);


/**
 * @param {!proto.v1.purchases.ListPurchaseReturnRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.v1.purchases.ListPurchaseReturnResponse>}
 *     The XHR Node Readable Stream
 */
proto.v1.purchases.PurchaseReturnServiceClient.prototype.purchaseReturnList =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/v1.purchases.PurchaseReturnService/PurchaseReturnList',
      request,
      metadata || {},
      methodDescriptor_PurchaseReturnService_PurchaseReturnList);
};


/**
 * @param {!proto.v1.purchases.ListPurchaseReturnRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.v1.purchases.ListPurchaseReturnResponse>}
 *     The XHR Node Readable Stream
 */
proto.v1.purchases.PurchaseReturnServicePromiseClient.prototype.purchaseReturnList =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/v1.purchases.PurchaseReturnService/PurchaseReturnList',
      request,
      metadata || {},
      methodDescriptor_PurchaseReturnService_PurchaseReturnList);
};


module.exports = proto.v1.purchases;

