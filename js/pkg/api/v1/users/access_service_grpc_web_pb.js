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


var pkg_api_v1_users_access_message_pb = require('../../../../pkg/api/v1/users/access_message_pb.js')

var pkg_api_v1_users_generic_message_pb = require('../../../../pkg/api/v1/users/generic_message_pb.js')
const proto = {};
proto.v1 = {};
proto.v1.users = require('./access_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.v1.users.AccessServiceClient =
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
proto.v1.users.AccessServicePromiseClient =
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
 *   !proto.v1.users.Access>}
 */
const methodDescriptor_AccessService_List = new grpc.web.MethodDescriptor(
  '/v1.users.AccessService/List',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_users_generic_message_pb.MyEmpty,
  pkg_api_v1_users_access_message_pb.Access,
  /**
   * @param {!proto.v1.users.MyEmpty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_users_access_message_pb.Access.deserializeBinary
);


/**
 * @param {!proto.v1.users.MyEmpty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.users.Access)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.users.Access>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.users.AccessServiceClient.prototype.list =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.users.AccessService/List',
      request,
      metadata || {},
      methodDescriptor_AccessService_List,
      callback);
};


/**
 * @param {!proto.v1.users.MyEmpty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.users.Access>}
 *     Promise that resolves to the response
 */
proto.v1.users.AccessServicePromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.users.AccessService/List',
      request,
      metadata || {},
      methodDescriptor_AccessService_List);
};


module.exports = proto.v1.users;

