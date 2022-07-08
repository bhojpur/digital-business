/**
 * @fileoverview gRPC-Web generated client stub for v1.users
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var pkg_api_v1_users_feature_message_pb = require('../../../../pkg/api/v1/users/feature_message_pb.js')

var pkg_api_v1_users_generic_message_pb = require('../../../../pkg/api/v1/users/generic_message_pb.js')
const proto = {};
proto.v1 = {};
proto.v1.users = require('./feature_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.v1.users.FeatureServiceClient =
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
proto.v1.users.FeatureServicePromiseClient =
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
 *   !proto.v1.users.MyEmpty,
 *   !proto.v1.users.ListFeatureResponse>}
 */
const methodDescriptor_FeatureService_List = new grpc.web.MethodDescriptor(
  '/v1.users.FeatureService/List',
  grpc.web.MethodType.SERVER_STREAMING,
  pkg_api_v1_users_generic_message_pb.MyEmpty,
  proto.v1.users.ListFeatureResponse,
  /**
   * @param {!proto.v1.users.MyEmpty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.v1.users.ListFeatureResponse.deserializeBinary
);


/**
 * @param {!proto.v1.users.MyEmpty} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.v1.users.ListFeatureResponse>}
 *     The XHR Node Readable Stream
 */
proto.v1.users.FeatureServiceClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/v1.users.FeatureService/List',
      request,
      metadata || {},
      methodDescriptor_FeatureService_List);
};


/**
 * @param {!proto.v1.users.MyEmpty} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.v1.users.ListFeatureResponse>}
 *     The XHR Node Readable Stream
 */
proto.v1.users.FeatureServicePromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/v1.users.FeatureService/List',
      request,
      metadata || {},
      methodDescriptor_FeatureService_List);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.v1.users.PackageFeatureServiceClient =
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
proto.v1.users.PackageFeatureServicePromiseClient =
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
 *   !proto.v1.users.Id,
 *   !proto.v1.users.PackageOfFeature>}
 */
const methodDescriptor_PackageFeatureService_View = new grpc.web.MethodDescriptor(
  '/v1.users.PackageFeatureService/View',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_users_generic_message_pb.Id,
  pkg_api_v1_users_feature_message_pb.PackageOfFeature,
  /**
   * @param {!proto.v1.users.Id} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_users_feature_message_pb.PackageOfFeature.deserializeBinary
);


/**
 * @param {!proto.v1.users.Id} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.users.PackageOfFeature)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.users.PackageOfFeature>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.users.PackageFeatureServiceClient.prototype.view =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.users.PackageFeatureService/View',
      request,
      metadata || {},
      methodDescriptor_PackageFeatureService_View,
      callback);
};


/**
 * @param {!proto.v1.users.Id} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.users.PackageOfFeature>}
 *     Promise that resolves to the response
 */
proto.v1.users.PackageFeatureServicePromiseClient.prototype.view =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.users.PackageFeatureService/View',
      request,
      metadata || {},
      methodDescriptor_PackageFeatureService_View);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.users.MyEmpty,
 *   !proto.v1.users.ListPackageFeatureResponse>}
 */
const methodDescriptor_PackageFeatureService_List = new grpc.web.MethodDescriptor(
  '/v1.users.PackageFeatureService/List',
  grpc.web.MethodType.SERVER_STREAMING,
  pkg_api_v1_users_generic_message_pb.MyEmpty,
  proto.v1.users.ListPackageFeatureResponse,
  /**
   * @param {!proto.v1.users.MyEmpty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.v1.users.ListPackageFeatureResponse.deserializeBinary
);


/**
 * @param {!proto.v1.users.MyEmpty} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.v1.users.ListPackageFeatureResponse>}
 *     The XHR Node Readable Stream
 */
proto.v1.users.PackageFeatureServiceClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/v1.users.PackageFeatureService/List',
      request,
      metadata || {},
      methodDescriptor_PackageFeatureService_List);
};


/**
 * @param {!proto.v1.users.MyEmpty} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.v1.users.ListPackageFeatureResponse>}
 *     The XHR Node Readable Stream
 */
proto.v1.users.PackageFeatureServicePromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/v1.users.PackageFeatureService/List',
      request,
      metadata || {},
      methodDescriptor_PackageFeatureService_List);
};


module.exports = proto.v1.users;

