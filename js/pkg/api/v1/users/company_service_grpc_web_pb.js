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


var pkg_api_v1_users_company_message_pb = require('../../../../pkg/api/v1/users/company_message_pb.js')

var pkg_api_v1_users_generic_message_pb = require('../../../../pkg/api/v1/users/generic_message_pb.js')

var pkg_api_v1_users_user_message_pb = require('../../../../pkg/api/v1/users/user_message_pb.js')
const proto = {};
proto.v1 = {};
proto.v1.users = require('./company_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.v1.users.CompanyServiceClient =
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
proto.v1.users.CompanyServicePromiseClient =
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
 *   !proto.v1.users.CompanyRegistration,
 *   !proto.v1.users.CompanyRegistration>}
 */
const methodDescriptor_CompanyService_Registration = new grpc.web.MethodDescriptor(
  '/v1.users.CompanyService/Registration',
  grpc.web.MethodType.UNARY,
  proto.v1.users.CompanyRegistration,
  proto.v1.users.CompanyRegistration,
  /**
   * @param {!proto.v1.users.CompanyRegistration} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.v1.users.CompanyRegistration.deserializeBinary
);


/**
 * @param {!proto.v1.users.CompanyRegistration} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.users.CompanyRegistration)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.users.CompanyRegistration>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.users.CompanyServiceClient.prototype.registration =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.users.CompanyService/Registration',
      request,
      metadata || {},
      methodDescriptor_CompanyService_Registration,
      callback);
};


/**
 * @param {!proto.v1.users.CompanyRegistration} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.users.CompanyRegistration>}
 *     Promise that resolves to the response
 */
proto.v1.users.CompanyServicePromiseClient.prototype.registration =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.users.CompanyService/Registration',
      request,
      metadata || {},
      methodDescriptor_CompanyService_Registration);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.users.Company,
 *   !proto.v1.users.Company>}
 */
const methodDescriptor_CompanyService_Update = new grpc.web.MethodDescriptor(
  '/v1.users.CompanyService/Update',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_users_company_message_pb.Company,
  pkg_api_v1_users_company_message_pb.Company,
  /**
   * @param {!proto.v1.users.Company} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_users_company_message_pb.Company.deserializeBinary
);


/**
 * @param {!proto.v1.users.Company} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.users.Company)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.users.Company>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.users.CompanyServiceClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.users.CompanyService/Update',
      request,
      metadata || {},
      methodDescriptor_CompanyService_Update,
      callback);
};


/**
 * @param {!proto.v1.users.Company} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.users.Company>}
 *     Promise that resolves to the response
 */
proto.v1.users.CompanyServicePromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.users.CompanyService/Update',
      request,
      metadata || {},
      methodDescriptor_CompanyService_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.users.Id,
 *   !proto.v1.users.Company>}
 */
const methodDescriptor_CompanyService_View = new grpc.web.MethodDescriptor(
  '/v1.users.CompanyService/View',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_users_generic_message_pb.Id,
  pkg_api_v1_users_company_message_pb.Company,
  /**
   * @param {!proto.v1.users.Id} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_users_company_message_pb.Company.deserializeBinary
);


/**
 * @param {!proto.v1.users.Id} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.users.Company)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.users.Company>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.users.CompanyServiceClient.prototype.view =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.users.CompanyService/View',
      request,
      metadata || {},
      methodDescriptor_CompanyService_View,
      callback);
};


/**
 * @param {!proto.v1.users.Id} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.users.Company>}
 *     Promise that resolves to the response
 */
proto.v1.users.CompanyServicePromiseClient.prototype.view =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.users.CompanyService/View',
      request,
      metadata || {},
      methodDescriptor_CompanyService_View);
};


module.exports = proto.v1.users;

