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


var pkg_api_v1_purchases_purchase_message_pb = require('../../../../pkg/api/v1/purchases/purchase_message_pb.js')

var pkg_api_v1_purchases_generic_message_pb = require('../../../../pkg/api/v1/purchases/generic_message_pb.js')
const proto = {};
proto.v1 = {};
proto.v1.purchases = require('./purchase_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.v1.purchases.PurchaseServiceClient =
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
proto.v1.purchases.PurchaseServicePromiseClient =
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
 *   !proto.v1.purchases.Purchase,
 *   !proto.v1.purchases.Purchase>}
 */
const methodDescriptor_PurchaseService_PurchaseCreate = new grpc.web.MethodDescriptor(
  '/v1.purchases.PurchaseService/PurchaseCreate',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_purchases_purchase_message_pb.Purchase,
  pkg_api_v1_purchases_purchase_message_pb.Purchase,
  /**
   * @param {!proto.v1.purchases.Purchase} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_purchases_purchase_message_pb.Purchase.deserializeBinary
);


/**
 * @param {!proto.v1.purchases.Purchase} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.purchases.Purchase)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.purchases.Purchase>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.purchases.PurchaseServiceClient.prototype.purchaseCreate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.purchases.PurchaseService/PurchaseCreate',
      request,
      metadata || {},
      methodDescriptor_PurchaseService_PurchaseCreate,
      callback);
};


/**
 * @param {!proto.v1.purchases.Purchase} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.purchases.Purchase>}
 *     Promise that resolves to the response
 */
proto.v1.purchases.PurchaseServicePromiseClient.prototype.purchaseCreate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.purchases.PurchaseService/PurchaseCreate',
      request,
      metadata || {},
      methodDescriptor_PurchaseService_PurchaseCreate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.purchases.Purchase,
 *   !proto.v1.purchases.Purchase>}
 */
const methodDescriptor_PurchaseService_PurchaseUpdate = new grpc.web.MethodDescriptor(
  '/v1.purchases.PurchaseService/PurchaseUpdate',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_purchases_purchase_message_pb.Purchase,
  pkg_api_v1_purchases_purchase_message_pb.Purchase,
  /**
   * @param {!proto.v1.purchases.Purchase} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_purchases_purchase_message_pb.Purchase.deserializeBinary
);


/**
 * @param {!proto.v1.purchases.Purchase} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.purchases.Purchase)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.purchases.Purchase>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.purchases.PurchaseServiceClient.prototype.purchaseUpdate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.purchases.PurchaseService/PurchaseUpdate',
      request,
      metadata || {},
      methodDescriptor_PurchaseService_PurchaseUpdate,
      callback);
};


/**
 * @param {!proto.v1.purchases.Purchase} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.purchases.Purchase>}
 *     Promise that resolves to the response
 */
proto.v1.purchases.PurchaseServicePromiseClient.prototype.purchaseUpdate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.purchases.PurchaseService/PurchaseUpdate',
      request,
      metadata || {},
      methodDescriptor_PurchaseService_PurchaseUpdate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.purchases.Id,
 *   !proto.v1.purchases.Purchase>}
 */
const methodDescriptor_PurchaseService_PurchaseView = new grpc.web.MethodDescriptor(
  '/v1.purchases.PurchaseService/PurchaseView',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_purchases_generic_message_pb.Id,
  pkg_api_v1_purchases_purchase_message_pb.Purchase,
  /**
   * @param {!proto.v1.purchases.Id} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_purchases_purchase_message_pb.Purchase.deserializeBinary
);


/**
 * @param {!proto.v1.purchases.Id} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.purchases.Purchase)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.purchases.Purchase>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.purchases.PurchaseServiceClient.prototype.purchaseView =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.purchases.PurchaseService/PurchaseView',
      request,
      metadata || {},
      methodDescriptor_PurchaseService_PurchaseView,
      callback);
};


/**
 * @param {!proto.v1.purchases.Id} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.purchases.Purchase>}
 *     Promise that resolves to the response
 */
proto.v1.purchases.PurchaseServicePromiseClient.prototype.purchaseView =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.purchases.PurchaseService/PurchaseView',
      request,
      metadata || {},
      methodDescriptor_PurchaseService_PurchaseView);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.purchases.ListPurchaseRequest,
 *   !proto.v1.purchases.ListPurchaseResponse>}
 */
const methodDescriptor_PurchaseService_PurchaseList = new grpc.web.MethodDescriptor(
  '/v1.purchases.PurchaseService/PurchaseList',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.v1.purchases.ListPurchaseRequest,
  proto.v1.purchases.ListPurchaseResponse,
  /**
   * @param {!proto.v1.purchases.ListPurchaseRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.v1.purchases.ListPurchaseResponse.deserializeBinary
);


/**
 * @param {!proto.v1.purchases.ListPurchaseRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.v1.purchases.ListPurchaseResponse>}
 *     The XHR Node Readable Stream
 */
proto.v1.purchases.PurchaseServiceClient.prototype.purchaseList =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/v1.purchases.PurchaseService/PurchaseList',
      request,
      metadata || {},
      methodDescriptor_PurchaseService_PurchaseList);
};


/**
 * @param {!proto.v1.purchases.ListPurchaseRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.v1.purchases.ListPurchaseResponse>}
 *     The XHR Node Readable Stream
 */
proto.v1.purchases.PurchaseServicePromiseClient.prototype.purchaseList =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/v1.purchases.PurchaseService/PurchaseList',
      request,
      metadata || {},
      methodDescriptor_PurchaseService_PurchaseList);
};


module.exports = proto.v1.purchases;

