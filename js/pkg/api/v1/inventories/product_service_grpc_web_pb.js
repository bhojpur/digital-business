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


var pkg_api_v1_inventories_product_message_pb = require('../../../../pkg/api/v1/inventories/product_message_pb.js')

var pkg_api_v1_inventories_generic_message_pb = require('../../../../pkg/api/v1/inventories/generic_message_pb.js')

var pkg_api_v1_inventories_transaction_message_pb = require('../../../../pkg/api/v1/inventories/transaction_message_pb.js')
const proto = {};
proto.v1 = {};
proto.v1.inventories = require('./product_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.v1.inventories.ProductServiceClient =
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
proto.v1.inventories.ProductServicePromiseClient =
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
 *   !proto.v1.inventories.Product,
 *   !proto.v1.inventories.Product>}
 */
const methodDescriptor_ProductService_Create = new grpc.web.MethodDescriptor(
  '/v1.inventories.ProductService/Create',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_inventories_product_message_pb.Product,
  pkg_api_v1_inventories_product_message_pb.Product,
  /**
   * @param {!proto.v1.inventories.Product} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_inventories_product_message_pb.Product.deserializeBinary
);


/**
 * @param {!proto.v1.inventories.Product} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.inventories.Product)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.inventories.Product>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.inventories.ProductServiceClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.inventories.ProductService/Create',
      request,
      metadata || {},
      methodDescriptor_ProductService_Create,
      callback);
};


/**
 * @param {!proto.v1.inventories.Product} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.inventories.Product>}
 *     Promise that resolves to the response
 */
proto.v1.inventories.ProductServicePromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.inventories.ProductService/Create',
      request,
      metadata || {},
      methodDescriptor_ProductService_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.inventories.Product,
 *   !proto.v1.inventories.Product>}
 */
const methodDescriptor_ProductService_Update = new grpc.web.MethodDescriptor(
  '/v1.inventories.ProductService/Update',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_inventories_product_message_pb.Product,
  pkg_api_v1_inventories_product_message_pb.Product,
  /**
   * @param {!proto.v1.inventories.Product} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_inventories_product_message_pb.Product.deserializeBinary
);


/**
 * @param {!proto.v1.inventories.Product} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.inventories.Product)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.inventories.Product>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.inventories.ProductServiceClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.inventories.ProductService/Update',
      request,
      metadata || {},
      methodDescriptor_ProductService_Update,
      callback);
};


/**
 * @param {!proto.v1.inventories.Product} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.inventories.Product>}
 *     Promise that resolves to the response
 */
proto.v1.inventories.ProductServicePromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.inventories.ProductService/Update',
      request,
      metadata || {},
      methodDescriptor_ProductService_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.inventories.Id,
 *   !proto.v1.inventories.Product>}
 */
const methodDescriptor_ProductService_View = new grpc.web.MethodDescriptor(
  '/v1.inventories.ProductService/View',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_inventories_generic_message_pb.Id,
  pkg_api_v1_inventories_product_message_pb.Product,
  /**
   * @param {!proto.v1.inventories.Id} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_inventories_product_message_pb.Product.deserializeBinary
);


/**
 * @param {!proto.v1.inventories.Id} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.inventories.Product)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.inventories.Product>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.inventories.ProductServiceClient.prototype.view =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.inventories.ProductService/View',
      request,
      metadata || {},
      methodDescriptor_ProductService_View,
      callback);
};


/**
 * @param {!proto.v1.inventories.Id} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.inventories.Product>}
 *     Promise that resolves to the response
 */
proto.v1.inventories.ProductServicePromiseClient.prototype.view =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.inventories.ProductService/View',
      request,
      metadata || {},
      methodDescriptor_ProductService_View);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.inventories.Id,
 *   !proto.v1.inventories.MyBoolean>}
 */
const methodDescriptor_ProductService_Delete = new grpc.web.MethodDescriptor(
  '/v1.inventories.ProductService/Delete',
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
proto.v1.inventories.ProductServiceClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.inventories.ProductService/Delete',
      request,
      metadata || {},
      methodDescriptor_ProductService_Delete,
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
proto.v1.inventories.ProductServicePromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.inventories.ProductService/Delete',
      request,
      metadata || {},
      methodDescriptor_ProductService_Delete);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.inventories.ListProductRequest,
 *   !proto.v1.inventories.ListProductResponse>}
 */
const methodDescriptor_ProductService_List = new grpc.web.MethodDescriptor(
  '/v1.inventories.ProductService/List',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.v1.inventories.ListProductRequest,
  proto.v1.inventories.ListProductResponse,
  /**
   * @param {!proto.v1.inventories.ListProductRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.v1.inventories.ListProductResponse.deserializeBinary
);


/**
 * @param {!proto.v1.inventories.ListProductRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.v1.inventories.ListProductResponse>}
 *     The XHR Node Readable Stream
 */
proto.v1.inventories.ProductServiceClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/v1.inventories.ProductService/List',
      request,
      metadata || {},
      methodDescriptor_ProductService_List);
};


/**
 * @param {!proto.v1.inventories.ListProductRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.v1.inventories.ListProductResponse>}
 *     The XHR Node Readable Stream
 */
proto.v1.inventories.ProductServicePromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/v1.inventories.ProductService/List',
      request,
      metadata || {},
      methodDescriptor_ProductService_List);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.inventories.Product,
 *   !proto.v1.inventories.Transactions>}
 */
const methodDescriptor_ProductService_Track = new grpc.web.MethodDescriptor(
  '/v1.inventories.ProductService/Track',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_inventories_product_message_pb.Product,
  pkg_api_v1_inventories_transaction_message_pb.Transactions,
  /**
   * @param {!proto.v1.inventories.Product} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_inventories_transaction_message_pb.Transactions.deserializeBinary
);


/**
 * @param {!proto.v1.inventories.Product} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.inventories.Transactions)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.inventories.Transactions>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.inventories.ProductServiceClient.prototype.track =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.inventories.ProductService/Track',
      request,
      metadata || {},
      methodDescriptor_ProductService_Track,
      callback);
};


/**
 * @param {!proto.v1.inventories.Product} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.inventories.Transactions>}
 *     Promise that resolves to the response
 */
proto.v1.inventories.ProductServicePromiseClient.prototype.track =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.inventories.ProductService/Track',
      request,
      metadata || {},
      methodDescriptor_ProductService_Track);
};


module.exports = proto.v1.inventories;

