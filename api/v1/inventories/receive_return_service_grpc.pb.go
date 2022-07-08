// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package inventories

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

// ReceiveReturnServiceClient is the client API for ReceiveReturnService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ReceiveReturnServiceClient interface {
	Create(ctx context.Context, in *ReceiveReturn, opts ...grpc.CallOption) (*ReceiveReturn, error)
	Update(ctx context.Context, in *ReceiveReturn, opts ...grpc.CallOption) (*ReceiveReturn, error)
	View(ctx context.Context, in *Id, opts ...grpc.CallOption) (*ReceiveReturn, error)
	List(ctx context.Context, in *ListReceiveReturnRequest, opts ...grpc.CallOption) (ReceiveReturnService_ListClient, error)
}

type receiveReturnServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewReceiveReturnServiceClient(cc grpc.ClientConnInterface) ReceiveReturnServiceClient {
	return &receiveReturnServiceClient{cc}
}

func (c *receiveReturnServiceClient) Create(ctx context.Context, in *ReceiveReturn, opts ...grpc.CallOption) (*ReceiveReturn, error) {
	out := new(ReceiveReturn)
	err := c.cc.Invoke(ctx, "/v1.inventories.ReceiveReturnService/Create", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *receiveReturnServiceClient) Update(ctx context.Context, in *ReceiveReturn, opts ...grpc.CallOption) (*ReceiveReturn, error) {
	out := new(ReceiveReturn)
	err := c.cc.Invoke(ctx, "/v1.inventories.ReceiveReturnService/Update", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *receiveReturnServiceClient) View(ctx context.Context, in *Id, opts ...grpc.CallOption) (*ReceiveReturn, error) {
	out := new(ReceiveReturn)
	err := c.cc.Invoke(ctx, "/v1.inventories.ReceiveReturnService/View", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *receiveReturnServiceClient) List(ctx context.Context, in *ListReceiveReturnRequest, opts ...grpc.CallOption) (ReceiveReturnService_ListClient, error) {
	stream, err := c.cc.NewStream(ctx, &ReceiveReturnService_ServiceDesc.Streams[0], "/v1.inventories.ReceiveReturnService/List", opts...)
	if err != nil {
		return nil, err
	}
	x := &receiveReturnServiceListClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type ReceiveReturnService_ListClient interface {
	Recv() (*ListReceiveReturnResponse, error)
	grpc.ClientStream
}

type receiveReturnServiceListClient struct {
	grpc.ClientStream
}

func (x *receiveReturnServiceListClient) Recv() (*ListReceiveReturnResponse, error) {
	m := new(ListReceiveReturnResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// ReceiveReturnServiceServer is the server API for ReceiveReturnService service.
// All implementations must embed UnimplementedReceiveReturnServiceServer
// for forward compatibility
type ReceiveReturnServiceServer interface {
	Create(context.Context, *ReceiveReturn) (*ReceiveReturn, error)
	Update(context.Context, *ReceiveReturn) (*ReceiveReturn, error)
	View(context.Context, *Id) (*ReceiveReturn, error)
	List(*ListReceiveReturnRequest, ReceiveReturnService_ListServer) error
	mustEmbedUnimplementedReceiveReturnServiceServer()
}

// UnimplementedReceiveReturnServiceServer must be embedded to have forward compatible implementations.
type UnimplementedReceiveReturnServiceServer struct {
}

func (UnimplementedReceiveReturnServiceServer) Create(context.Context, *ReceiveReturn) (*ReceiveReturn, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Create not implemented")
}
func (UnimplementedReceiveReturnServiceServer) Update(context.Context, *ReceiveReturn) (*ReceiveReturn, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Update not implemented")
}
func (UnimplementedReceiveReturnServiceServer) View(context.Context, *Id) (*ReceiveReturn, error) {
	return nil, status.Errorf(codes.Unimplemented, "method View not implemented")
}
func (UnimplementedReceiveReturnServiceServer) List(*ListReceiveReturnRequest, ReceiveReturnService_ListServer) error {
	return status.Errorf(codes.Unimplemented, "method List not implemented")
}
func (UnimplementedReceiveReturnServiceServer) mustEmbedUnimplementedReceiveReturnServiceServer() {}

// UnsafeReceiveReturnServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ReceiveReturnServiceServer will
// result in compilation errors.
type UnsafeReceiveReturnServiceServer interface {
	mustEmbedUnimplementedReceiveReturnServiceServer()
}

func RegisterReceiveReturnServiceServer(s grpc.ServiceRegistrar, srv ReceiveReturnServiceServer) {
	s.RegisterService(&ReceiveReturnService_ServiceDesc, srv)
}

func _ReceiveReturnService_Create_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ReceiveReturn)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ReceiveReturnServiceServer).Create(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/v1.inventories.ReceiveReturnService/Create",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ReceiveReturnServiceServer).Create(ctx, req.(*ReceiveReturn))
	}
	return interceptor(ctx, in, info, handler)
}

func _ReceiveReturnService_Update_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ReceiveReturn)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ReceiveReturnServiceServer).Update(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/v1.inventories.ReceiveReturnService/Update",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ReceiveReturnServiceServer).Update(ctx, req.(*ReceiveReturn))
	}
	return interceptor(ctx, in, info, handler)
}

func _ReceiveReturnService_View_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Id)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ReceiveReturnServiceServer).View(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/v1.inventories.ReceiveReturnService/View",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ReceiveReturnServiceServer).View(ctx, req.(*Id))
	}
	return interceptor(ctx, in, info, handler)
}

func _ReceiveReturnService_List_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(ListReceiveReturnRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(ReceiveReturnServiceServer).List(m, &receiveReturnServiceListServer{stream})
}

type ReceiveReturnService_ListServer interface {
	Send(*ListReceiveReturnResponse) error
	grpc.ServerStream
}

type receiveReturnServiceListServer struct {
	grpc.ServerStream
}

func (x *receiveReturnServiceListServer) Send(m *ListReceiveReturnResponse) error {
	return x.ServerStream.SendMsg(m)
}

// ReceiveReturnService_ServiceDesc is the grpc.ServiceDesc for ReceiveReturnService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var ReceiveReturnService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "v1.inventories.ReceiveReturnService",
	HandlerType: (*ReceiveReturnServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Create",
			Handler:    _ReceiveReturnService_Create_Handler,
		},
		{
			MethodName: "Update",
			Handler:    _ReceiveReturnService_Update_Handler,
		},
		{
			MethodName: "View",
			Handler:    _ReceiveReturnService_View_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "List",
			Handler:       _ReceiveReturnService_List_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "pkg/api/v1/inventories/receive_return_service.proto",
}
