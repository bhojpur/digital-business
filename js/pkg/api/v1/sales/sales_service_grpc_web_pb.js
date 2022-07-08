/**
 * @fileoverview gRPC-Web generated client stub for v1.sales
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var pkg_api_v1_sales_sales_message_pb = require('../../../../pkg/api/v1/sales/sales_message_pb.js')

var pkg_api_v1_sales_generic_message_pb = require('../../../../pkg/api/v1/sales/generic_message_pb.js')
const proto = {};
proto.v1 = {};
proto.v1.sales = require('./sales_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.v1.sales.SalesServiceClient =
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
proto.v1.sales.SalesServicePromiseClient =
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
 *   !proto.v1.sales.Sales,
 *   !proto.v1.sales.Sales>}
 */
const methodDescriptor_SalesService_SalesCreate = new grpc.web.MethodDescriptor(
  '/v1.sales.SalesService/SalesCreate',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_sales_sales_message_pb.Sales,
  pkg_api_v1_sales_sales_message_pb.Sales,
  /**
   * @param {!proto.v1.sales.Sales} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_sales_sales_message_pb.Sales.deserializeBinary
);


/**
 * @param {!proto.v1.sales.Sales} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.sales.Sales)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.sales.Sales>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.sales.SalesServiceClient.prototype.salesCreate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.sales.SalesService/SalesCreate',
      request,
      metadata || {},
      methodDescriptor_SalesService_SalesCreate,
      callback);
};


/**
 * @param {!proto.v1.sales.Sales} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.sales.Sales>}
 *     Promise that resolves to the response
 */
proto.v1.sales.SalesServicePromiseClient.prototype.salesCreate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.sales.SalesService/SalesCreate',
      request,
      metadata || {},
      methodDescriptor_SalesService_SalesCreate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.sales.Sales,
 *   !proto.v1.sales.Sales>}
 */
const methodDescriptor_SalesService_SalesUpdate = new grpc.web.MethodDescriptor(
  '/v1.sales.SalesService/SalesUpdate',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_sales_sales_message_pb.Sales,
  pkg_api_v1_sales_sales_message_pb.Sales,
  /**
   * @param {!proto.v1.sales.Sales} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_sales_sales_message_pb.Sales.deserializeBinary
);


/**
 * @param {!proto.v1.sales.Sales} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.sales.Sales)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.sales.Sales>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.sales.SalesServiceClient.prototype.salesUpdate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.sales.SalesService/SalesUpdate',
      request,
      metadata || {},
      methodDescriptor_SalesService_SalesUpdate,
      callback);
};


/**
 * @param {!proto.v1.sales.Sales} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.sales.Sales>}
 *     Promise that resolves to the response
 */
proto.v1.sales.SalesServicePromiseClient.prototype.salesUpdate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.sales.SalesService/SalesUpdate',
      request,
      metadata || {},
      methodDescriptor_SalesService_SalesUpdate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.sales.Id,
 *   !proto.v1.sales.Sales>}
 */
const methodDescriptor_SalesService_SalesView = new grpc.web.MethodDescriptor(
  '/v1.sales.SalesService/SalesView',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_sales_generic_message_pb.Id,
  pkg_api_v1_sales_sales_message_pb.Sales,
  /**
   * @param {!proto.v1.sales.Id} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_sales_sales_message_pb.Sales.deserializeBinary
);


/**
 * @param {!proto.v1.sales.Id} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.sales.Sales)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.sales.Sales>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.sales.SalesServiceClient.prototype.salesView =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.sales.SalesService/SalesView',
      request,
      metadata || {},
      methodDescriptor_SalesService_SalesView,
      callback);
};


/**
 * @param {!proto.v1.sales.Id} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.sales.Sales>}
 *     Promise that resolves to the response
 */
proto.v1.sales.SalesServicePromiseClient.prototype.salesView =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.sales.SalesService/SalesView',
      request,
      metadata || {},
      methodDescriptor_SalesService_SalesView);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.sales.ListSalesRequest,
 *   !proto.v1.sales.ListSalesResponse>}
 */
const methodDescriptor_SalesService_SalesList = new grpc.web.MethodDescriptor(
  '/v1.sales.SalesService/SalesList',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.v1.sales.ListSalesRequest,
  proto.v1.sales.ListSalesResponse,
  /**
   * @param {!proto.v1.sales.ListSalesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.v1.sales.ListSalesResponse.deserializeBinary
);


/**
 * @param {!proto.v1.sales.ListSalesRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.v1.sales.ListSalesResponse>}
 *     The XHR Node Readable Stream
 */
proto.v1.sales.SalesServiceClient.prototype.salesList =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/v1.sales.SalesService/SalesList',
      request,
      metadata || {},
      methodDescriptor_SalesService_SalesList);
};


/**
 * @param {!proto.v1.sales.ListSalesRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.v1.sales.ListSalesResponse>}
 *     The XHR Node Readable Stream
 */
proto.v1.sales.SalesServicePromiseClient.prototype.salesList =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/v1.sales.SalesService/SalesList',
      request,
      metadata || {},
      methodDescriptor_SalesService_SalesList);
};


module.exports = proto.v1.sales;

