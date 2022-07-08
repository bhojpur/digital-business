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


var pkg_api_v1_sales_salesman_message_pb = require('../../../../pkg/api/v1/sales/salesman_message_pb.js')

var pkg_api_v1_sales_generic_message_pb = require('../../../../pkg/api/v1/sales/generic_message_pb.js')
const proto = {};
proto.v1 = {};
proto.v1.sales = require('./salesman_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.v1.sales.SalesmanServiceClient =
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
proto.v1.sales.SalesmanServicePromiseClient =
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
 *   !proto.v1.sales.Salesman,
 *   !proto.v1.sales.Salesman>}
 */
const methodDescriptor_SalesmanService_SalesmanCreate = new grpc.web.MethodDescriptor(
  '/v1.sales.SalesmanService/SalesmanCreate',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_sales_salesman_message_pb.Salesman,
  pkg_api_v1_sales_salesman_message_pb.Salesman,
  /**
   * @param {!proto.v1.sales.Salesman} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_sales_salesman_message_pb.Salesman.deserializeBinary
);


/**
 * @param {!proto.v1.sales.Salesman} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.sales.Salesman)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.sales.Salesman>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.sales.SalesmanServiceClient.prototype.salesmanCreate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.sales.SalesmanService/SalesmanCreate',
      request,
      metadata || {},
      methodDescriptor_SalesmanService_SalesmanCreate,
      callback);
};


/**
 * @param {!proto.v1.sales.Salesman} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.sales.Salesman>}
 *     Promise that resolves to the response
 */
proto.v1.sales.SalesmanServicePromiseClient.prototype.salesmanCreate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.sales.SalesmanService/SalesmanCreate',
      request,
      metadata || {},
      methodDescriptor_SalesmanService_SalesmanCreate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.sales.Salesman,
 *   !proto.v1.sales.Salesman>}
 */
const methodDescriptor_SalesmanService_SalesmanUpdate = new grpc.web.MethodDescriptor(
  '/v1.sales.SalesmanService/SalesmanUpdate',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_sales_salesman_message_pb.Salesman,
  pkg_api_v1_sales_salesman_message_pb.Salesman,
  /**
   * @param {!proto.v1.sales.Salesman} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_sales_salesman_message_pb.Salesman.deserializeBinary
);


/**
 * @param {!proto.v1.sales.Salesman} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.sales.Salesman)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.sales.Salesman>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.sales.SalesmanServiceClient.prototype.salesmanUpdate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.sales.SalesmanService/SalesmanUpdate',
      request,
      metadata || {},
      methodDescriptor_SalesmanService_SalesmanUpdate,
      callback);
};


/**
 * @param {!proto.v1.sales.Salesman} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.sales.Salesman>}
 *     Promise that resolves to the response
 */
proto.v1.sales.SalesmanServicePromiseClient.prototype.salesmanUpdate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.sales.SalesmanService/SalesmanUpdate',
      request,
      metadata || {},
      methodDescriptor_SalesmanService_SalesmanUpdate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.sales.Id,
 *   !proto.v1.sales.Salesman>}
 */
const methodDescriptor_SalesmanService_SalesmanView = new grpc.web.MethodDescriptor(
  '/v1.sales.SalesmanService/SalesmanView',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_sales_generic_message_pb.Id,
  pkg_api_v1_sales_salesman_message_pb.Salesman,
  /**
   * @param {!proto.v1.sales.Id} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_sales_salesman_message_pb.Salesman.deserializeBinary
);


/**
 * @param {!proto.v1.sales.Id} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.sales.Salesman)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.sales.Salesman>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.sales.SalesmanServiceClient.prototype.salesmanView =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.sales.SalesmanService/SalesmanView',
      request,
      metadata || {},
      methodDescriptor_SalesmanService_SalesmanView,
      callback);
};


/**
 * @param {!proto.v1.sales.Id} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.sales.Salesman>}
 *     Promise that resolves to the response
 */
proto.v1.sales.SalesmanServicePromiseClient.prototype.salesmanView =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.sales.SalesmanService/SalesmanView',
      request,
      metadata || {},
      methodDescriptor_SalesmanService_SalesmanView);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.sales.ListSalesmanRequest,
 *   !proto.v1.sales.ListSalesmanResponse>}
 */
const methodDescriptor_SalesmanService_SalesmanList = new grpc.web.MethodDescriptor(
  '/v1.sales.SalesmanService/SalesmanList',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.v1.sales.ListSalesmanRequest,
  proto.v1.sales.ListSalesmanResponse,
  /**
   * @param {!proto.v1.sales.ListSalesmanRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.v1.sales.ListSalesmanResponse.deserializeBinary
);


/**
 * @param {!proto.v1.sales.ListSalesmanRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.v1.sales.ListSalesmanResponse>}
 *     The XHR Node Readable Stream
 */
proto.v1.sales.SalesmanServiceClient.prototype.salesmanList =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/v1.sales.SalesmanService/SalesmanList',
      request,
      metadata || {},
      methodDescriptor_SalesmanService_SalesmanList);
};


/**
 * @param {!proto.v1.sales.ListSalesmanRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.v1.sales.ListSalesmanResponse>}
 *     The XHR Node Readable Stream
 */
proto.v1.sales.SalesmanServicePromiseClient.prototype.salesmanList =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/v1.sales.SalesmanService/SalesmanList',
      request,
      metadata || {},
      methodDescriptor_SalesmanService_SalesmanList);
};


module.exports = proto.v1.sales;

