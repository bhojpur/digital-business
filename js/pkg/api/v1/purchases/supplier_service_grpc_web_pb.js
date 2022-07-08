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


var pkg_api_v1_purchases_supplier_message_pb = require('../../../../pkg/api/v1/purchases/supplier_message_pb.js')

var pkg_api_v1_purchases_generic_message_pb = require('../../../../pkg/api/v1/purchases/generic_message_pb.js')
const proto = {};
proto.v1 = {};
proto.v1.purchases = require('./supplier_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.v1.purchases.SupplierServiceClient =
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
proto.v1.purchases.SupplierServicePromiseClient =
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
 *   !proto.v1.purchases.Supplier,
 *   !proto.v1.purchases.Supplier>}
 */
const methodDescriptor_SupplierService_SupplierCreate = new grpc.web.MethodDescriptor(
  '/v1.purchases.SupplierService/SupplierCreate',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_purchases_supplier_message_pb.Supplier,
  pkg_api_v1_purchases_supplier_message_pb.Supplier,
  /**
   * @param {!proto.v1.purchases.Supplier} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_purchases_supplier_message_pb.Supplier.deserializeBinary
);


/**
 * @param {!proto.v1.purchases.Supplier} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.purchases.Supplier)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.purchases.Supplier>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.purchases.SupplierServiceClient.prototype.supplierCreate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.purchases.SupplierService/SupplierCreate',
      request,
      metadata || {},
      methodDescriptor_SupplierService_SupplierCreate,
      callback);
};


/**
 * @param {!proto.v1.purchases.Supplier} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.purchases.Supplier>}
 *     Promise that resolves to the response
 */
proto.v1.purchases.SupplierServicePromiseClient.prototype.supplierCreate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.purchases.SupplierService/SupplierCreate',
      request,
      metadata || {},
      methodDescriptor_SupplierService_SupplierCreate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.purchases.Supplier,
 *   !proto.v1.purchases.Supplier>}
 */
const methodDescriptor_SupplierService_SupplierUpdate = new grpc.web.MethodDescriptor(
  '/v1.purchases.SupplierService/SupplierUpdate',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_purchases_supplier_message_pb.Supplier,
  pkg_api_v1_purchases_supplier_message_pb.Supplier,
  /**
   * @param {!proto.v1.purchases.Supplier} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_purchases_supplier_message_pb.Supplier.deserializeBinary
);


/**
 * @param {!proto.v1.purchases.Supplier} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.purchases.Supplier)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.purchases.Supplier>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.purchases.SupplierServiceClient.prototype.supplierUpdate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.purchases.SupplierService/SupplierUpdate',
      request,
      metadata || {},
      methodDescriptor_SupplierService_SupplierUpdate,
      callback);
};


/**
 * @param {!proto.v1.purchases.Supplier} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.purchases.Supplier>}
 *     Promise that resolves to the response
 */
proto.v1.purchases.SupplierServicePromiseClient.prototype.supplierUpdate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.purchases.SupplierService/SupplierUpdate',
      request,
      metadata || {},
      methodDescriptor_SupplierService_SupplierUpdate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.purchases.Id,
 *   !proto.v1.purchases.Supplier>}
 */
const methodDescriptor_SupplierService_SupplierView = new grpc.web.MethodDescriptor(
  '/v1.purchases.SupplierService/SupplierView',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_purchases_generic_message_pb.Id,
  pkg_api_v1_purchases_supplier_message_pb.Supplier,
  /**
   * @param {!proto.v1.purchases.Id} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_purchases_supplier_message_pb.Supplier.deserializeBinary
);


/**
 * @param {!proto.v1.purchases.Id} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.purchases.Supplier)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.purchases.Supplier>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.purchases.SupplierServiceClient.prototype.supplierView =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.purchases.SupplierService/SupplierView',
      request,
      metadata || {},
      methodDescriptor_SupplierService_SupplierView,
      callback);
};


/**
 * @param {!proto.v1.purchases.Id} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.purchases.Supplier>}
 *     Promise that resolves to the response
 */
proto.v1.purchases.SupplierServicePromiseClient.prototype.supplierView =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.purchases.SupplierService/SupplierView',
      request,
      metadata || {},
      methodDescriptor_SupplierService_SupplierView);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.purchases.ListSupplierRequest,
 *   !proto.v1.purchases.ListSupplierResponse>}
 */
const methodDescriptor_SupplierService_SupplierList = new grpc.web.MethodDescriptor(
  '/v1.purchases.SupplierService/SupplierList',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.v1.purchases.ListSupplierRequest,
  proto.v1.purchases.ListSupplierResponse,
  /**
   * @param {!proto.v1.purchases.ListSupplierRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.v1.purchases.ListSupplierResponse.deserializeBinary
);


/**
 * @param {!proto.v1.purchases.ListSupplierRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.v1.purchases.ListSupplierResponse>}
 *     The XHR Node Readable Stream
 */
proto.v1.purchases.SupplierServiceClient.prototype.supplierList =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/v1.purchases.SupplierService/SupplierList',
      request,
      metadata || {},
      methodDescriptor_SupplierService_SupplierList);
};


/**
 * @param {!proto.v1.purchases.ListSupplierRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.v1.purchases.ListSupplierResponse>}
 *     The XHR Node Readable Stream
 */
proto.v1.purchases.SupplierServicePromiseClient.prototype.supplierList =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/v1.purchases.SupplierService/SupplierList',
      request,
      metadata || {},
      methodDescriptor_SupplierService_SupplierList);
};


module.exports = proto.v1.purchases;

