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


var pkg_api_v1_inventories_product_category_message_pb = require('../../../../pkg/api/v1/inventories/product_category_message_pb.js')

var pkg_api_v1_inventories_generic_message_pb = require('../../../../pkg/api/v1/inventories/generic_message_pb.js')
const proto = {};
proto.v1 = {};
proto.v1.inventories = require('./product_category_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.v1.inventories.ProductCategoryServiceClient =
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
proto.v1.inventories.ProductCategoryServicePromiseClient =
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
 *   !proto.v1.inventories.ProductCategory,
 *   !proto.v1.inventories.ProductCategory>}
 */
const methodDescriptor_ProductCategoryService_Create = new grpc.web.MethodDescriptor(
  '/v1.inventories.ProductCategoryService/Create',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_inventories_product_category_message_pb.ProductCategory,
  pkg_api_v1_inventories_product_category_message_pb.ProductCategory,
  /**
   * @param {!proto.v1.inventories.ProductCategory} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_inventories_product_category_message_pb.ProductCategory.deserializeBinary
);


/**
 * @param {!proto.v1.inventories.ProductCategory} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.inventories.ProductCategory)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.inventories.ProductCategory>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.inventories.ProductCategoryServiceClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.inventories.ProductCategoryService/Create',
      request,
      metadata || {},
      methodDescriptor_ProductCategoryService_Create,
      callback);
};


/**
 * @param {!proto.v1.inventories.ProductCategory} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.inventories.ProductCategory>}
 *     Promise that resolves to the response
 */
proto.v1.inventories.ProductCategoryServicePromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.inventories.ProductCategoryService/Create',
      request,
      metadata || {},
      methodDescriptor_ProductCategoryService_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.inventories.ProductCategory,
 *   !proto.v1.inventories.ProductCategory>}
 */
const methodDescriptor_ProductCategoryService_Update = new grpc.web.MethodDescriptor(
  '/v1.inventories.ProductCategoryService/Update',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_inventories_product_category_message_pb.ProductCategory,
  pkg_api_v1_inventories_product_category_message_pb.ProductCategory,
  /**
   * @param {!proto.v1.inventories.ProductCategory} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_inventories_product_category_message_pb.ProductCategory.deserializeBinary
);


/**
 * @param {!proto.v1.inventories.ProductCategory} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.inventories.ProductCategory)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.inventories.ProductCategory>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.inventories.ProductCategoryServiceClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.inventories.ProductCategoryService/Update',
      request,
      metadata || {},
      methodDescriptor_ProductCategoryService_Update,
      callback);
};


/**
 * @param {!proto.v1.inventories.ProductCategory} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.inventories.ProductCategory>}
 *     Promise that resolves to the response
 */
proto.v1.inventories.ProductCategoryServicePromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.inventories.ProductCategoryService/Update',
      request,
      metadata || {},
      methodDescriptor_ProductCategoryService_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.inventories.Id,
 *   !proto.v1.inventories.ProductCategory>}
 */
const methodDescriptor_ProductCategoryService_View = new grpc.web.MethodDescriptor(
  '/v1.inventories.ProductCategoryService/View',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_inventories_generic_message_pb.Id,
  pkg_api_v1_inventories_product_category_message_pb.ProductCategory,
  /**
   * @param {!proto.v1.inventories.Id} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_inventories_product_category_message_pb.ProductCategory.deserializeBinary
);


/**
 * @param {!proto.v1.inventories.Id} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.inventories.ProductCategory)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.inventories.ProductCategory>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.inventories.ProductCategoryServiceClient.prototype.view =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.inventories.ProductCategoryService/View',
      request,
      metadata || {},
      methodDescriptor_ProductCategoryService_View,
      callback);
};


/**
 * @param {!proto.v1.inventories.Id} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.inventories.ProductCategory>}
 *     Promise that resolves to the response
 */
proto.v1.inventories.ProductCategoryServicePromiseClient.prototype.view =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.inventories.ProductCategoryService/View',
      request,
      metadata || {},
      methodDescriptor_ProductCategoryService_View);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.inventories.Id,
 *   !proto.v1.inventories.MyBoolean>}
 */
const methodDescriptor_ProductCategoryService_Delete = new grpc.web.MethodDescriptor(
  '/v1.inventories.ProductCategoryService/Delete',
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
proto.v1.inventories.ProductCategoryServiceClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.inventories.ProductCategoryService/Delete',
      request,
      metadata || {},
      methodDescriptor_ProductCategoryService_Delete,
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
proto.v1.inventories.ProductCategoryServicePromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.inventories.ProductCategoryService/Delete',
      request,
      metadata || {},
      methodDescriptor_ProductCategoryService_Delete);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.inventories.ListProductCategoryRequest,
 *   !proto.v1.inventories.ListProductCategoryResponse>}
 */
const methodDescriptor_ProductCategoryService_List = new grpc.web.MethodDescriptor(
  '/v1.inventories.ProductCategoryService/List',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.v1.inventories.ListProductCategoryRequest,
  proto.v1.inventories.ListProductCategoryResponse,
  /**
   * @param {!proto.v1.inventories.ListProductCategoryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.v1.inventories.ListProductCategoryResponse.deserializeBinary
);


/**
 * @param {!proto.v1.inventories.ListProductCategoryRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.v1.inventories.ListProductCategoryResponse>}
 *     The XHR Node Readable Stream
 */
proto.v1.inventories.ProductCategoryServiceClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/v1.inventories.ProductCategoryService/List',
      request,
      metadata || {},
      methodDescriptor_ProductCategoryService_List);
};


/**
 * @param {!proto.v1.inventories.ListProductCategoryRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.v1.inventories.ListProductCategoryResponse>}
 *     The XHR Node Readable Stream
 */
proto.v1.inventories.ProductCategoryServicePromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/v1.inventories.ProductCategoryService/List',
      request,
      metadata || {},
      methodDescriptor_ProductCategoryService_List);
};


module.exports = proto.v1.inventories;

