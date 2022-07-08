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


var pkg_api_v1_inventories_brand_message_pb = require('../../../../pkg/api/v1/inventories/brand_message_pb.js')

var pkg_api_v1_inventories_generic_message_pb = require('../../../../pkg/api/v1/inventories/generic_message_pb.js')
const proto = {};
proto.v1 = {};
proto.v1.inventories = require('./brand_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.v1.inventories.BrandServiceClient =
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
proto.v1.inventories.BrandServicePromiseClient =
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
 *   !proto.v1.inventories.Brand,
 *   !proto.v1.inventories.Brand>}
 */
const methodDescriptor_BrandService_Create = new grpc.web.MethodDescriptor(
  '/v1.inventories.BrandService/Create',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_inventories_brand_message_pb.Brand,
  pkg_api_v1_inventories_brand_message_pb.Brand,
  /**
   * @param {!proto.v1.inventories.Brand} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_inventories_brand_message_pb.Brand.deserializeBinary
);


/**
 * @param {!proto.v1.inventories.Brand} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.inventories.Brand)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.inventories.Brand>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.inventories.BrandServiceClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.inventories.BrandService/Create',
      request,
      metadata || {},
      methodDescriptor_BrandService_Create,
      callback);
};


/**
 * @param {!proto.v1.inventories.Brand} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.inventories.Brand>}
 *     Promise that resolves to the response
 */
proto.v1.inventories.BrandServicePromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.inventories.BrandService/Create',
      request,
      metadata || {},
      methodDescriptor_BrandService_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.inventories.Brand,
 *   !proto.v1.inventories.Brand>}
 */
const methodDescriptor_BrandService_Update = new grpc.web.MethodDescriptor(
  '/v1.inventories.BrandService/Update',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_inventories_brand_message_pb.Brand,
  pkg_api_v1_inventories_brand_message_pb.Brand,
  /**
   * @param {!proto.v1.inventories.Brand} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_inventories_brand_message_pb.Brand.deserializeBinary
);


/**
 * @param {!proto.v1.inventories.Brand} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.inventories.Brand)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.inventories.Brand>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.inventories.BrandServiceClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.inventories.BrandService/Update',
      request,
      metadata || {},
      methodDescriptor_BrandService_Update,
      callback);
};


/**
 * @param {!proto.v1.inventories.Brand} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.inventories.Brand>}
 *     Promise that resolves to the response
 */
proto.v1.inventories.BrandServicePromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.inventories.BrandService/Update',
      request,
      metadata || {},
      methodDescriptor_BrandService_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.inventories.Id,
 *   !proto.v1.inventories.Brand>}
 */
const methodDescriptor_BrandService_View = new grpc.web.MethodDescriptor(
  '/v1.inventories.BrandService/View',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_inventories_generic_message_pb.Id,
  pkg_api_v1_inventories_brand_message_pb.Brand,
  /**
   * @param {!proto.v1.inventories.Id} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_inventories_brand_message_pb.Brand.deserializeBinary
);


/**
 * @param {!proto.v1.inventories.Id} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.inventories.Brand)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.inventories.Brand>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.inventories.BrandServiceClient.prototype.view =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.inventories.BrandService/View',
      request,
      metadata || {},
      methodDescriptor_BrandService_View,
      callback);
};


/**
 * @param {!proto.v1.inventories.Id} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.inventories.Brand>}
 *     Promise that resolves to the response
 */
proto.v1.inventories.BrandServicePromiseClient.prototype.view =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.inventories.BrandService/View',
      request,
      metadata || {},
      methodDescriptor_BrandService_View);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.inventories.Id,
 *   !proto.v1.inventories.MyBoolean>}
 */
const methodDescriptor_BrandService_Delete = new grpc.web.MethodDescriptor(
  '/v1.inventories.BrandService/Delete',
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
proto.v1.inventories.BrandServiceClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.inventories.BrandService/Delete',
      request,
      metadata || {},
      methodDescriptor_BrandService_Delete,
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
proto.v1.inventories.BrandServicePromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.inventories.BrandService/Delete',
      request,
      metadata || {},
      methodDescriptor_BrandService_Delete);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.inventories.Pagination,
 *   !proto.v1.inventories.ListBrandResponse>}
 */
const methodDescriptor_BrandService_List = new grpc.web.MethodDescriptor(
  '/v1.inventories.BrandService/List',
  grpc.web.MethodType.SERVER_STREAMING,
  pkg_api_v1_inventories_generic_message_pb.Pagination,
  proto.v1.inventories.ListBrandResponse,
  /**
   * @param {!proto.v1.inventories.Pagination} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.v1.inventories.ListBrandResponse.deserializeBinary
);


/**
 * @param {!proto.v1.inventories.Pagination} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.v1.inventories.ListBrandResponse>}
 *     The XHR Node Readable Stream
 */
proto.v1.inventories.BrandServiceClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/v1.inventories.BrandService/List',
      request,
      metadata || {},
      methodDescriptor_BrandService_List);
};


/**
 * @param {!proto.v1.inventories.Pagination} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.v1.inventories.ListBrandResponse>}
 *     The XHR Node Readable Stream
 */
proto.v1.inventories.BrandServicePromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/v1.inventories.BrandService/List',
      request,
      metadata || {},
      methodDescriptor_BrandService_List);
};


module.exports = proto.v1.inventories;

