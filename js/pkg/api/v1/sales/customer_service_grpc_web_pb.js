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


var pkg_api_v1_sales_customer_message_pb = require('../../../../pkg/api/v1/sales/customer_message_pb.js')

var pkg_api_v1_sales_generic_message_pb = require('../../../../pkg/api/v1/sales/generic_message_pb.js')
const proto = {};
proto.v1 = {};
proto.v1.sales = require('./customer_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.v1.sales.CustomerServiceClient =
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
proto.v1.sales.CustomerServicePromiseClient =
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
 *   !proto.v1.sales.Customer,
 *   !proto.v1.sales.Customer>}
 */
const methodDescriptor_CustomerService_CustomerCreate = new grpc.web.MethodDescriptor(
  '/v1.sales.CustomerService/CustomerCreate',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_sales_customer_message_pb.Customer,
  pkg_api_v1_sales_customer_message_pb.Customer,
  /**
   * @param {!proto.v1.sales.Customer} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_sales_customer_message_pb.Customer.deserializeBinary
);


/**
 * @param {!proto.v1.sales.Customer} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.sales.Customer)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.sales.Customer>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.sales.CustomerServiceClient.prototype.customerCreate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.sales.CustomerService/CustomerCreate',
      request,
      metadata || {},
      methodDescriptor_CustomerService_CustomerCreate,
      callback);
};


/**
 * @param {!proto.v1.sales.Customer} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.sales.Customer>}
 *     Promise that resolves to the response
 */
proto.v1.sales.CustomerServicePromiseClient.prototype.customerCreate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.sales.CustomerService/CustomerCreate',
      request,
      metadata || {},
      methodDescriptor_CustomerService_CustomerCreate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.sales.Customer,
 *   !proto.v1.sales.Customer>}
 */
const methodDescriptor_CustomerService_CustomerUpdate = new grpc.web.MethodDescriptor(
  '/v1.sales.CustomerService/CustomerUpdate',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_sales_customer_message_pb.Customer,
  pkg_api_v1_sales_customer_message_pb.Customer,
  /**
   * @param {!proto.v1.sales.Customer} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_sales_customer_message_pb.Customer.deserializeBinary
);


/**
 * @param {!proto.v1.sales.Customer} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.sales.Customer)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.sales.Customer>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.sales.CustomerServiceClient.prototype.customerUpdate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.sales.CustomerService/CustomerUpdate',
      request,
      metadata || {},
      methodDescriptor_CustomerService_CustomerUpdate,
      callback);
};


/**
 * @param {!proto.v1.sales.Customer} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.sales.Customer>}
 *     Promise that resolves to the response
 */
proto.v1.sales.CustomerServicePromiseClient.prototype.customerUpdate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.sales.CustomerService/CustomerUpdate',
      request,
      metadata || {},
      methodDescriptor_CustomerService_CustomerUpdate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.sales.Id,
 *   !proto.v1.sales.Customer>}
 */
const methodDescriptor_CustomerService_CustomerView = new grpc.web.MethodDescriptor(
  '/v1.sales.CustomerService/CustomerView',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_sales_generic_message_pb.Id,
  pkg_api_v1_sales_customer_message_pb.Customer,
  /**
   * @param {!proto.v1.sales.Id} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_sales_customer_message_pb.Customer.deserializeBinary
);


/**
 * @param {!proto.v1.sales.Id} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.sales.Customer)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.sales.Customer>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.sales.CustomerServiceClient.prototype.customerView =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.sales.CustomerService/CustomerView',
      request,
      metadata || {},
      methodDescriptor_CustomerService_CustomerView,
      callback);
};


/**
 * @param {!proto.v1.sales.Id} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.sales.Customer>}
 *     Promise that resolves to the response
 */
proto.v1.sales.CustomerServicePromiseClient.prototype.customerView =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.sales.CustomerService/CustomerView',
      request,
      metadata || {},
      methodDescriptor_CustomerService_CustomerView);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.sales.ListCustomerRequest,
 *   !proto.v1.sales.ListCustomerResponse>}
 */
const methodDescriptor_CustomerService_CustomerList = new grpc.web.MethodDescriptor(
  '/v1.sales.CustomerService/CustomerList',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.v1.sales.ListCustomerRequest,
  proto.v1.sales.ListCustomerResponse,
  /**
   * @param {!proto.v1.sales.ListCustomerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.v1.sales.ListCustomerResponse.deserializeBinary
);


/**
 * @param {!proto.v1.sales.ListCustomerRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.v1.sales.ListCustomerResponse>}
 *     The XHR Node Readable Stream
 */
proto.v1.sales.CustomerServiceClient.prototype.customerList =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/v1.sales.CustomerService/CustomerList',
      request,
      metadata || {},
      methodDescriptor_CustomerService_CustomerList);
};


/**
 * @param {!proto.v1.sales.ListCustomerRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.v1.sales.ListCustomerResponse>}
 *     The XHR Node Readable Stream
 */
proto.v1.sales.CustomerServicePromiseClient.prototype.customerList =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/v1.sales.CustomerService/CustomerList',
      request,
      metadata || {},
      methodDescriptor_CustomerService_CustomerList);
};


module.exports = proto.v1.sales;

