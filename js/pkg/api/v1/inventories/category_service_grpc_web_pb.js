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


var pkg_api_v1_inventories_category_message_pb = require('../../../../pkg/api/v1/inventories/category_message_pb.js')

var pkg_api_v1_inventories_generic_message_pb = require('../../../../pkg/api/v1/inventories/generic_message_pb.js')
const proto = {};
proto.v1 = {};
proto.v1.inventories = require('./category_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.v1.inventories.CategoryServiceClient =
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
proto.v1.inventories.CategoryServicePromiseClient =
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
 *   !proto.v1.inventories.MyEmpty,
 *   !proto.v1.inventories.Category>}
 */
const methodDescriptor_CategoryService_List = new grpc.web.MethodDescriptor(
  '/v1.inventories.CategoryService/List',
  grpc.web.MethodType.SERVER_STREAMING,
  pkg_api_v1_inventories_generic_message_pb.MyEmpty,
  pkg_api_v1_inventories_category_message_pb.Category,
  /**
   * @param {!proto.v1.inventories.MyEmpty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_inventories_category_message_pb.Category.deserializeBinary
);


/**
 * @param {!proto.v1.inventories.MyEmpty} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.v1.inventories.Category>}
 *     The XHR Node Readable Stream
 */
proto.v1.inventories.CategoryServiceClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/v1.inventories.CategoryService/List',
      request,
      metadata || {},
      methodDescriptor_CategoryService_List);
};


/**
 * @param {!proto.v1.inventories.MyEmpty} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.v1.inventories.Category>}
 *     The XHR Node Readable Stream
 */
proto.v1.inventories.CategoryServicePromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/v1.inventories.CategoryService/List',
      request,
      metadata || {},
      methodDescriptor_CategoryService_List);
};


module.exports = proto.v1.inventories;

