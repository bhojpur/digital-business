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


var pkg_api_v1_inventories_generic_message_pb = require('../../../../pkg/api/v1/inventories/generic_message_pb.js')

var pkg_api_v1_inventories_product_message_pb = require('../../../../pkg/api/v1/inventories/product_message_pb.js')
const proto = {};
proto.v1 = {};
proto.v1.inventories = require('./stock_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.v1.inventories.StockServiceClient =
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
proto.v1.inventories.StockServicePromiseClient =
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
 *   !proto.v1.inventories.ClosingStockRequest,
 *   !proto.v1.inventories.MyBoolean>}
 */
const methodDescriptor_StockService_Closing = new grpc.web.MethodDescriptor(
  '/v1.inventories.StockService/Closing',
  grpc.web.MethodType.UNARY,
  proto.v1.inventories.ClosingStockRequest,
  pkg_api_v1_inventories_generic_message_pb.MyBoolean,
  /**
   * @param {!proto.v1.inventories.ClosingStockRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_inventories_generic_message_pb.MyBoolean.deserializeBinary
);


/**
 * @param {!proto.v1.inventories.ClosingStockRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.inventories.MyBoolean)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.inventories.MyBoolean>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.inventories.StockServiceClient.prototype.closing =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.inventories.StockService/Closing',
      request,
      metadata || {},
      methodDescriptor_StockService_Closing,
      callback);
};


/**
 * @param {!proto.v1.inventories.ClosingStockRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.inventories.MyBoolean>}
 *     Promise that resolves to the response
 */
proto.v1.inventories.StockServicePromiseClient.prototype.closing =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.inventories.StockService/Closing',
      request,
      metadata || {},
      methodDescriptor_StockService_Closing);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.inventories.StockListInput,
 *   !proto.v1.inventories.StockList>}
 */
const methodDescriptor_StockService_List = new grpc.web.MethodDescriptor(
  '/v1.inventories.StockService/List',
  grpc.web.MethodType.UNARY,
  proto.v1.inventories.StockListInput,
  proto.v1.inventories.StockList,
  /**
   * @param {!proto.v1.inventories.StockListInput} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.v1.inventories.StockList.deserializeBinary
);


/**
 * @param {!proto.v1.inventories.StockListInput} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.inventories.StockList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.inventories.StockList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.inventories.StockServiceClient.prototype.list =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.inventories.StockService/List',
      request,
      metadata || {},
      methodDescriptor_StockService_List,
      callback);
};


/**
 * @param {!proto.v1.inventories.StockListInput} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.inventories.StockList>}
 *     Promise that resolves to the response
 */
proto.v1.inventories.StockServicePromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.inventories.StockService/List',
      request,
      metadata || {},
      methodDescriptor_StockService_List);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.inventories.StockInfoInput,
 *   !proto.v1.inventories.StockInfo>}
 */
const methodDescriptor_StockService_Info = new grpc.web.MethodDescriptor(
  '/v1.inventories.StockService/Info',
  grpc.web.MethodType.UNARY,
  proto.v1.inventories.StockInfoInput,
  proto.v1.inventories.StockInfo,
  /**
   * @param {!proto.v1.inventories.StockInfoInput} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.v1.inventories.StockInfo.deserializeBinary
);


/**
 * @param {!proto.v1.inventories.StockInfoInput} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.inventories.StockInfo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.inventories.StockInfo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.inventories.StockServiceClient.prototype.info =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.inventories.StockService/Info',
      request,
      metadata || {},
      methodDescriptor_StockService_Info,
      callback);
};


/**
 * @param {!proto.v1.inventories.StockInfoInput} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.inventories.StockInfo>}
 *     Promise that resolves to the response
 */
proto.v1.inventories.StockServicePromiseClient.prototype.info =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.inventories.StockService/Info',
      request,
      metadata || {},
      methodDescriptor_StockService_Info);
};


module.exports = proto.v1.inventories;

