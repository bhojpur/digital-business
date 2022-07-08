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


var pkg_api_v1_users_employee_message_pb = require('../../../../pkg/api/v1/users/employee_message_pb.js')

var pkg_api_v1_users_generic_message_pb = require('../../../../pkg/api/v1/users/generic_message_pb.js')
const proto = {};
proto.v1 = {};
proto.v1.users = require('./employee_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.v1.users.EmployeeServiceClient =
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
proto.v1.users.EmployeeServicePromiseClient =
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
 *   !proto.v1.users.Employee,
 *   !proto.v1.users.Employee>}
 */
const methodDescriptor_EmployeeService_Create = new grpc.web.MethodDescriptor(
  '/v1.users.EmployeeService/Create',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_users_employee_message_pb.Employee,
  pkg_api_v1_users_employee_message_pb.Employee,
  /**
   * @param {!proto.v1.users.Employee} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_users_employee_message_pb.Employee.deserializeBinary
);


/**
 * @param {!proto.v1.users.Employee} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.users.Employee)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.users.Employee>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.users.EmployeeServiceClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.users.EmployeeService/Create',
      request,
      metadata || {},
      methodDescriptor_EmployeeService_Create,
      callback);
};


/**
 * @param {!proto.v1.users.Employee} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.users.Employee>}
 *     Promise that resolves to the response
 */
proto.v1.users.EmployeeServicePromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.users.EmployeeService/Create',
      request,
      metadata || {},
      methodDescriptor_EmployeeService_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.users.Employee,
 *   !proto.v1.users.Employee>}
 */
const methodDescriptor_EmployeeService_Update = new grpc.web.MethodDescriptor(
  '/v1.users.EmployeeService/Update',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_users_employee_message_pb.Employee,
  pkg_api_v1_users_employee_message_pb.Employee,
  /**
   * @param {!proto.v1.users.Employee} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_users_employee_message_pb.Employee.deserializeBinary
);


/**
 * @param {!proto.v1.users.Employee} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.users.Employee)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.users.Employee>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.users.EmployeeServiceClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.users.EmployeeService/Update',
      request,
      metadata || {},
      methodDescriptor_EmployeeService_Update,
      callback);
};


/**
 * @param {!proto.v1.users.Employee} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.users.Employee>}
 *     Promise that resolves to the response
 */
proto.v1.users.EmployeeServicePromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.users.EmployeeService/Update',
      request,
      metadata || {},
      methodDescriptor_EmployeeService_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.users.Id,
 *   !proto.v1.users.Employee>}
 */
const methodDescriptor_EmployeeService_View = new grpc.web.MethodDescriptor(
  '/v1.users.EmployeeService/View',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_users_generic_message_pb.Id,
  pkg_api_v1_users_employee_message_pb.Employee,
  /**
   * @param {!proto.v1.users.Id} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_users_employee_message_pb.Employee.deserializeBinary
);


/**
 * @param {!proto.v1.users.Id} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.users.Employee)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.users.Employee>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.users.EmployeeServiceClient.prototype.view =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.users.EmployeeService/View',
      request,
      metadata || {},
      methodDescriptor_EmployeeService_View,
      callback);
};


/**
 * @param {!proto.v1.users.Id} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.users.Employee>}
 *     Promise that resolves to the response
 */
proto.v1.users.EmployeeServicePromiseClient.prototype.view =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.users.EmployeeService/View',
      request,
      metadata || {},
      methodDescriptor_EmployeeService_View);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.users.Id,
 *   !proto.v1.users.MyBoolean>}
 */
const methodDescriptor_EmployeeService_Delete = new grpc.web.MethodDescriptor(
  '/v1.users.EmployeeService/Delete',
  grpc.web.MethodType.UNARY,
  pkg_api_v1_users_generic_message_pb.Id,
  pkg_api_v1_users_generic_message_pb.MyBoolean,
  /**
   * @param {!proto.v1.users.Id} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  pkg_api_v1_users_generic_message_pb.MyBoolean.deserializeBinary
);


/**
 * @param {!proto.v1.users.Id} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.users.MyBoolean)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.users.MyBoolean>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.users.EmployeeServiceClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.users.EmployeeService/Delete',
      request,
      metadata || {},
      methodDescriptor_EmployeeService_Delete,
      callback);
};


/**
 * @param {!proto.v1.users.Id} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.users.MyBoolean>}
 *     Promise that resolves to the response
 */
proto.v1.users.EmployeeServicePromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.users.EmployeeService/Delete',
      request,
      metadata || {},
      methodDescriptor_EmployeeService_Delete);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.users.ListEmployeeRequest,
 *   !proto.v1.users.ListEmployeeResponse>}
 */
const methodDescriptor_EmployeeService_List = new grpc.web.MethodDescriptor(
  '/v1.users.EmployeeService/List',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.v1.users.ListEmployeeRequest,
  proto.v1.users.ListEmployeeResponse,
  /**
   * @param {!proto.v1.users.ListEmployeeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.v1.users.ListEmployeeResponse.deserializeBinary
);


/**
 * @param {!proto.v1.users.ListEmployeeRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.v1.users.ListEmployeeResponse>}
 *     The XHR Node Readable Stream
 */
proto.v1.users.EmployeeServiceClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/v1.users.EmployeeService/List',
      request,
      metadata || {},
      methodDescriptor_EmployeeService_List);
};


/**
 * @param {!proto.v1.users.ListEmployeeRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.v1.users.ListEmployeeResponse>}
 *     The XHR Node Readable Stream
 */
proto.v1.users.EmployeeServicePromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/v1.users.EmployeeService/List',
      request,
      metadata || {},
      methodDescriptor_EmployeeService_List);
};


module.exports = proto.v1.users;

