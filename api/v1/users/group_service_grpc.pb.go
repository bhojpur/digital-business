// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package users

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// GroupServiceClient is the client API for GroupService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type GroupServiceClient interface {
	Create(ctx context.Context, in *Group, opts ...grpc.CallOption) (*Group, error)
	Update(ctx context.Context, in *Group, opts ...grpc.CallOption) (*Group, error)
	View(ctx context.Context, in *Id, opts ...grpc.CallOption) (*Group, error)
	Delete(ctx context.Context, in *Id, opts ...grpc.CallOption) (*MyBoolean, error)
	List(ctx context.Context, in *ListGroupRequest, opts ...grpc.CallOption) (GroupService_ListClient, error)
	GrantAccess(ctx context.Context, in *GrantAccessRequest, opts ...grpc.CallOption) (*Message, error)
	RevokeAccess(ctx context.Context, in *GrantAccessRequest, opts ...grpc.CallOption) (*Message, error)
}

type groupServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewGroupServiceClient(cc grpc.ClientConnInterface) GroupServiceClient {
	return &groupServiceClient{cc}
}

func (c *groupServiceClient) Create(ctx context.Context, in *Group, opts ...grpc.CallOption) (*Group, error) {
	out := new(Group)
	err := c.cc.Invoke(ctx, "/v1.users.GroupService/Create", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *groupServiceClient) Update(ctx context.Context, in *Group, opts ...grpc.CallOption) (*Group, error) {
	out := new(Group)
	err := c.cc.Invoke(ctx, "/v1.users.GroupService/Update", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *groupServiceClient) View(ctx context.Context, in *Id, opts ...grpc.CallOption) (*Group, error) {
	out := new(Group)
	err := c.cc.Invoke(ctx, "/v1.users.GroupService/View", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *groupServiceClient) Delete(ctx context.Context, in *Id, opts ...grpc.CallOption) (*MyBoolean, error) {
	out := new(MyBoolean)
	err := c.cc.Invoke(ctx, "/v1.users.GroupService/Delete", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *groupServiceClient) List(ctx context.Context, in *ListGroupRequest, opts ...grpc.CallOption) (GroupService_ListClient, error) {
	stream, err := c.cc.NewStream(ctx, &GroupService_ServiceDesc.Streams[0], "/v1.users.GroupService/List", opts...)
	if err != nil {
		return nil, err
	}
	x := &groupServiceListClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type GroupService_ListClient interface {
	Recv() (*ListGroupResponse, error)
	grpc.ClientStream
}

type groupServiceListClient struct {
	grpc.ClientStream
}

func (x *groupServiceListClient) Recv() (*ListGroupResponse, error) {
	m := new(ListGroupResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *groupServiceClient) GrantAccess(ctx context.Context, in *GrantAccessRequest, opts ...grpc.CallOption) (*Message, error) {
	out := new(Message)
	err := c.cc.Invoke(ctx, "/v1.users.GroupService/GrantAccess", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *groupServiceClient) RevokeAccess(ctx context.Context, in *GrantAccessRequest, opts ...grpc.CallOption) (*Message, error) {
	out := new(Message)
	err := c.cc.Invoke(ctx, "/v1.users.GroupService/RevokeAccess", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// GroupServiceServer is the server API for GroupService service.
// All implementations must embed UnimplementedGroupServiceServer
// for forward compatibility
type GroupServiceServer interface {
	Create(context.Context, *Group) (*Group, error)
	Update(context.Context, *Group) (*Group, error)
	View(context.Context, *Id) (*Group, error)
	Delete(context.Context, *Id) (*MyBoolean, error)
	List(*ListGroupRequest, GroupService_ListServer) error
	GrantAccess(context.Context, *GrantAccessRequest) (*Message, error)
	RevokeAccess(context.Context, *GrantAccessRequest) (*Message, error)
	mustEmbedUnimplementedGroupServiceServer()
}

// UnimplementedGroupServiceServer must be embedded to have forward compatible implementations.
type UnimplementedGroupServiceServer struct {
}

func (UnimplementedGroupServiceServer) Create(context.Context, *Group) (*Group, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Create not implemented")
}
func (UnimplementedGroupServiceServer) Update(context.Context, *Group) (*Group, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Update not implemented")
}
func (UnimplementedGroupServiceServer) View(context.Context, *Id) (*Group, error) {
	return nil, status.Errorf(codes.Unimplemented, "method View not implemented")
}
func (UnimplementedGroupServiceServer) Delete(context.Context, *Id) (*MyBoolean, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Delete not implemented")
}
func (UnimplementedGroupServiceServer) List(*ListGroupRequest, GroupService_ListServer) error {
	return status.Errorf(codes.Unimplemented, "method List not implemented")
}
func (UnimplementedGroupServiceServer) GrantAccess(context.Context, *GrantAccessRequest) (*Message, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GrantAccess not implemented")
}
func (UnimplementedGroupServiceServer) RevokeAccess(context.Context, *GrantAccessRequest) (*Message, error) {
	return nil, status.Errorf(codes.Unimplemented, "method RevokeAccess not implemented")
}
func (UnimplementedGroupServiceServer) mustEmbedUnimplementedGroupServiceServer() {}

// UnsafeGroupServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to GroupServiceServer will
// result in compilation errors.
type UnsafeGroupServiceServer interface {
	mustEmbedUnimplementedGroupServiceServer()
}

func RegisterGroupServiceServer(s grpc.ServiceRegistrar, srv GroupServiceServer) {
	s.RegisterService(&GroupService_ServiceDesc, srv)
}

func _GroupService_Create_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Group)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GroupServiceServer).Create(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/v1.users.GroupService/Create",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GroupServiceServer).Create(ctx, req.(*Group))
	}
	return interceptor(ctx, in, info, handler)
}

func _GroupService_Update_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Group)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GroupServiceServer).Update(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/v1.users.GroupService/Update",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GroupServiceServer).Update(ctx, req.(*Group))
	}
	return interceptor(ctx, in, info, handler)
}

func _GroupService_View_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Id)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GroupServiceServer).View(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/v1.users.GroupService/View",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GroupServiceServer).View(ctx, req.(*Id))
	}
	return interceptor(ctx, in, info, handler)
}

func _GroupService_Delete_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Id)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GroupServiceServer).Delete(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/v1.users.GroupService/Delete",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GroupServiceServer).Delete(ctx, req.(*Id))
	}
	return interceptor(ctx, in, info, handler)
}

func _GroupService_List_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(ListGroupRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(GroupServiceServer).List(m, &groupServiceListServer{stream})
}

type GroupService_ListServer interface {
	Send(*ListGroupResponse) error
	grpc.ServerStream
}

type groupServiceListServer struct {
	grpc.ServerStream
}

func (x *groupServiceListServer) Send(m *ListGroupResponse) error {
	return x.ServerStream.SendMsg(m)
}

func _GroupService_GrantAccess_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GrantAccessRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GroupServiceServer).GrantAccess(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/v1.users.GroupService/GrantAccess",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GroupServiceServer).GrantAccess(ctx, req.(*GrantAccessRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _GroupService_RevokeAccess_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GrantAccessRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GroupServiceServer).RevokeAccess(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/v1.users.GroupService/RevokeAccess",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GroupServiceServer).RevokeAccess(ctx, req.(*GrantAccessRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// GroupService_ServiceDesc is the grpc.ServiceDesc for GroupService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var GroupService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "v1.users.GroupService",
	HandlerType: (*GroupServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Create",
			Handler:    _GroupService_Create_Handler,
		},
		{
			MethodName: "Update",
			Handler:    _GroupService_Update_Handler,
		},
		{
			MethodName: "View",
			Handler:    _GroupService_View_Handler,
		},
		{
			MethodName: "Delete",
			Handler:    _GroupService_Delete_Handler,
		},
		{
			MethodName: "GrantAccess",
			Handler:    _GroupService_GrantAccess_Handler,
		},
		{
			MethodName: "RevokeAccess",
			Handler:    _GroupService_RevokeAccess_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "List",
			Handler:       _GroupService_List_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "pkg/api/v1/users/group_service.proto",
}
