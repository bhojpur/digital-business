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

// DeliveryReturnServiceClient is the client API for DeliveryReturnService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type DeliveryReturnServiceClient interface {
	Create(ctx context.Context, in *DeliveryReturn, opts ...grpc.CallOption) (*DeliveryReturn, error)
	Update(ctx context.Context, in *DeliveryReturn, opts ...grpc.CallOption) (*DeliveryReturn, error)
	View(ctx context.Context, in *Id, opts ...grpc.CallOption) (*DeliveryReturn, error)
	List(ctx context.Context, in *ListDeliveryReturnRequest, opts ...grpc.CallOption) (DeliveryReturnService_ListClient, error)
}

type deliveryReturnServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewDeliveryReturnServiceClient(cc grpc.ClientConnInterface) DeliveryReturnServiceClient {
	return &deliveryReturnServiceClient{cc}
}

func (c *deliveryReturnServiceClient) Create(ctx context.Context, in *DeliveryReturn, opts ...grpc.CallOption) (*DeliveryReturn, error) {
	out := new(DeliveryReturn)
	err := c.cc.Invoke(ctx, "/v1.inventories.DeliveryReturnService/Create", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *deliveryReturnServiceClient) Update(ctx context.Context, in *DeliveryReturn, opts ...grpc.CallOption) (*DeliveryReturn, error) {
	out := new(DeliveryReturn)
	err := c.cc.Invoke(ctx, "/v1.inventories.DeliveryReturnService/Update", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *deliveryReturnServiceClient) View(ctx context.Context, in *Id, opts ...grpc.CallOption) (*DeliveryReturn, error) {
	out := new(DeliveryReturn)
	err := c.cc.Invoke(ctx, "/v1.inventories.DeliveryReturnService/View", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *deliveryReturnServiceClient) List(ctx context.Context, in *ListDeliveryReturnRequest, opts ...grpc.CallOption) (DeliveryReturnService_ListClient, error) {
	stream, err := c.cc.NewStream(ctx, &DeliveryReturnService_ServiceDesc.Streams[0], "/v1.inventories.DeliveryReturnService/List", opts...)
	if err != nil {
		return nil, err
	}
	x := &deliveryReturnServiceListClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type DeliveryReturnService_ListClient interface {
	Recv() (*ListDeliveryReturnResponse, error)
	grpc.ClientStream
}

type deliveryReturnServiceListClient struct {
	grpc.ClientStream
}

func (x *deliveryReturnServiceListClient) Recv() (*ListDeliveryReturnResponse, error) {
	m := new(ListDeliveryReturnResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// DeliveryReturnServiceServer is the server API for DeliveryReturnService service.
// All implementations must embed UnimplementedDeliveryReturnServiceServer
// for forward compatibility
type DeliveryReturnServiceServer interface {
	Create(context.Context, *DeliveryReturn) (*DeliveryReturn, error)
	Update(context.Context, *DeliveryReturn) (*DeliveryReturn, error)
	View(context.Context, *Id) (*DeliveryReturn, error)
	List(*ListDeliveryReturnRequest, DeliveryReturnService_ListServer) error
	mustEmbedUnimplementedDeliveryReturnServiceServer()
}

// UnimplementedDeliveryReturnServiceServer must be embedded to have forward compatible implementations.
type UnimplementedDeliveryReturnServiceServer struct {
}

func (UnimplementedDeliveryReturnServiceServer) Create(context.Context, *DeliveryReturn) (*DeliveryReturn, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Create not implemented")
}
func (UnimplementedDeliveryReturnServiceServer) Update(context.Context, *DeliveryReturn) (*DeliveryReturn, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Update not implemented")
}
func (UnimplementedDeliveryReturnServiceServer) View(context.Context, *Id) (*DeliveryReturn, error) {
	return nil, status.Errorf(codes.Unimplemented, "method View not implemented")
}
func (UnimplementedDeliveryReturnServiceServer) List(*ListDeliveryReturnRequest, DeliveryReturnService_ListServer) error {
	return status.Errorf(codes.Unimplemented, "method List not implemented")
}
func (UnimplementedDeliveryReturnServiceServer) mustEmbedUnimplementedDeliveryReturnServiceServer() {}

// UnsafeDeliveryReturnServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to DeliveryReturnServiceServer will
// result in compilation errors.
type UnsafeDeliveryReturnServiceServer interface {
	mustEmbedUnimplementedDeliveryReturnServiceServer()
}

func RegisterDeliveryReturnServiceServer(s grpc.ServiceRegistrar, srv DeliveryReturnServiceServer) {
	s.RegisterService(&DeliveryReturnService_ServiceDesc, srv)
}

func _DeliveryReturnService_Create_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeliveryReturn)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DeliveryReturnServiceServer).Create(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/v1.inventories.DeliveryReturnService/Create",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DeliveryReturnServiceServer).Create(ctx, req.(*DeliveryReturn))
	}
	return interceptor(ctx, in, info, handler)
}

func _DeliveryReturnService_Update_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeliveryReturn)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DeliveryReturnServiceServer).Update(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/v1.inventories.DeliveryReturnService/Update",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DeliveryReturnServiceServer).Update(ctx, req.(*DeliveryReturn))
	}
	return interceptor(ctx, in, info, handler)
}

func _DeliveryReturnService_View_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Id)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DeliveryReturnServiceServer).View(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/v1.inventories.DeliveryReturnService/View",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DeliveryReturnServiceServer).View(ctx, req.(*Id))
	}
	return interceptor(ctx, in, info, handler)
}

func _DeliveryReturnService_List_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(ListDeliveryReturnRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(DeliveryReturnServiceServer).List(m, &deliveryReturnServiceListServer{stream})
}

type DeliveryReturnService_ListServer interface {
	Send(*ListDeliveryReturnResponse) error
	grpc.ServerStream
}

type deliveryReturnServiceListServer struct {
	grpc.ServerStream
}

func (x *deliveryReturnServiceListServer) Send(m *ListDeliveryReturnResponse) error {
	return x.ServerStream.SendMsg(m)
}

// DeliveryReturnService_ServiceDesc is the grpc.ServiceDesc for DeliveryReturnService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var DeliveryReturnService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "v1.inventories.DeliveryReturnService",
	HandlerType: (*DeliveryReturnServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Create",
			Handler:    _DeliveryReturnService_Create_Handler,
		},
		{
			MethodName: "Update",
			Handler:    _DeliveryReturnService_Update_Handler,
		},
		{
			MethodName: "View",
			Handler:    _DeliveryReturnService_View_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "List",
			Handler:       _DeliveryReturnService_List_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "pkg/api/v1/inventories/delivery_return_service.proto",
}