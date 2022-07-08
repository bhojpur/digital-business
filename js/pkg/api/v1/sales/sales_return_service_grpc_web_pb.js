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


var pkg_api_v1_sales_sales_return_message_pb = require('../../../../pkg/api/v1/sales/sales_return_message_pb.js')

var pkg_api_v1_sales_generic_message_pb = require('../../../../pkg/api/v1/sales/generic_message_pb.js')
const proto = {};
proto.v1 = {};
proto.v1.sales = require('./sales_return_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.v1.sales.SalesReturnServiceClient =
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
proto.v1.sales.SalesReturnServicePromiseClient =
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
 *   !proto.v1.sales.SalesReturn,
 *   !proto.v1.sales.SalesReturn>}
 */
const methodDescriptor_SalesReturnService_SalesReturnCreate = new grpc.web.MethodDescriptor(
  '/v1.sales.SalesReturnService/SalesReturnCreate',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_sales_sales_return_message_pb.SalesReturn,
  pkg_api_v1_sales_sales_return_message_pb.SalesReturn,
  /**
   * @param {!proto.v1.sales.SalesReturn} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_sales_sales_return_message_pb.SalesReturn.deserializeBinary
);


/**
 * @param {!proto.v1.sales.SalesReturn} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.sales.SalesReturn)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.sales.SalesReturn>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.sales.SalesReturnServiceClient.prototype.salesReturnCreate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.sales.SalesReturnService/SalesReturnCreate',
      request,
      metadata || {},
      methodDescriptor_SalesReturnService_SalesReturnCreate,
      callback);
};


/**
 * @param {!proto.v1.sales.SalesReturn} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.sales.SalesReturn>}
 *     Promise that resolves to the response
 */
proto.v1.sales.SalesReturnServicePromiseClient.prototype.salesReturnCreate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.sales.SalesReturnService/SalesReturnCreate',
      request,
      metadata || {},
      methodDescriptor_SalesReturnService_SalesReturnCreate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.sales.SalesReturn,
 *   !proto.v1.sales.SalesReturn>}
 */
const methodDescriptor_SalesReturnService_SalesReturnUpdate = new grpc.web.MethodDescriptor(
  '/v1.sales.SalesReturnService/SalesReturnUpdate',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_sales_sales_return_message_pb.SalesReturn,
  pkg_api_v1_sales_sales_return_message_pb.SalesReturn,
  /**
   * @param {!proto.v1.sales.SalesReturn} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_sales_sales_return_message_pb.SalesReturn.deserializeBinary
);


/**
 * @param {!proto.v1.sales.SalesReturn} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.sales.SalesReturn)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.sales.SalesReturn>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.sales.SalesReturnServiceClient.prototype.salesReturnUpdate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.sales.SalesReturnService/SalesReturnUpdate',
      request,
      metadata || {},
      methodDescriptor_SalesReturnService_SalesReturnUpdate,
      callback);
};


/**
 * @param {!proto.v1.sales.SalesReturn} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.sales.SalesReturn>}
 *     Promise that resolves to the response
 */
proto.v1.sales.SalesReturnServicePromiseClient.prototype.salesReturnUpdate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.sales.SalesReturnService/SalesReturnUpdate',
      request,
      metadata || {},
      methodDescriptor_SalesReturnService_SalesReturnUpdate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.sales.Id,
 *   !proto.v1.sales.SalesReturn>}
 */
const methodDescriptor_SalesReturnService_SalesReturnView = new grpc.web.MethodDescriptor(
  '/v1.sales.SalesReturnService/SalesReturnView',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_sales_generic_message_pb.Id,
  pkg_api_v1_sales_sales_return_message_pb.SalesReturn,
  /**
   * @param {!proto.v1.sales.Id} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_sales_sales_return_message_pb.SalesReturn.deserializeBinary
);


/**
 * @param {!proto.v1.sales.Id} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.sales.SalesReturn)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.sales.SalesReturn>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.sales.SalesReturnServiceClient.prototype.salesReturnView =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.sales.SalesReturnService/SalesReturnView',
      request,
      metadata || {},
      methodDescriptor_SalesReturnService_SalesReturnView,
      callback);
};


/**
 * @param {!proto.v1.sales.Id} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.sales.SalesReturn>}
 *     Promise that resolves to the response
 */
proto.v1.sales.SalesReturnServicePromiseClient.prototype.salesReturnView =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.sales.SalesReturnService/SalesReturnView',
      request,
      metadata || {},
      methodDescriptor_SalesReturnService_SalesReturnView);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.sales.ListSalesReturnRequest,
 *   !proto.v1.sales.ListSalesReturnResponse>}
 */
const methodDescriptor_SalesReturnService_SalesReturnList = new grpc.web.MethodDescriptor(
  '/v1.sales.SalesReturnService/SalesReturnList',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.v1.sales.ListSalesReturnRequest,
  proto.v1.sales.ListSalesReturnResponse,
  /**
   * @param {!proto.v1.sales.ListSalesReturnRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.v1.sales.ListSalesReturnResponse.deserializeBinary
);


/**
 * @param {!proto.v1.sales.ListSalesReturnRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.v1.sales.ListSalesReturnResponse>}
 *     The XHR Node Readable Stream
 */
proto.v1.sales.SalesReturnServiceClient.prototype.salesReturnList =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/v1.sales.SalesReturnService/SalesReturnList',
      request,
      metadata || {},
      methodDescriptor_SalesReturnService_SalesReturnList);
};


/**
 * @param {!proto.v1.sales.ListSalesReturnRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.v1.sales.ListSalesReturnResponse>}
 *     The XHR Node Readable Stream
 */
proto.v1.sales.SalesReturnServicePromiseClient.prototype.salesReturnList =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/v1.sales.SalesReturnService/SalesReturnList',
      request,
      metadata || {},
      methodDescriptor_SalesReturnService_SalesReturnList);
};


module.exports = proto.v1.sales;

