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

// DeliveryServiceClient is the client API for DeliveryService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type DeliveryServiceClient interface {
	Create(ctx context.Context, in *Delivery, opts ...grpc.CallOption) (*Delivery, error)
	Update(ctx context.Context, in *Delivery, opts ...grpc.CallOption) (*Delivery, error)
	View(ctx context.Context, in *Id, opts ...grpc.CallOption) (*Delivery, error)
	List(ctx context.Context, in *ListDeliveryRequest, opts ...grpc.CallOption) (DeliveryService_ListClient, error)
}

type deliveryServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewDeliveryServiceClient(cc grpc.ClientConnInterface) DeliveryServiceClient {
	return &deliveryServiceClient{cc}
}

func (c *deliveryServiceClient) Create(ctx context.Context, in *Delivery, opts ...grpc.CallOption) (*Delivery, error) {
	out := new(Delivery)
	err := c.cc.Invoke(ctx, "/v1.inventories.DeliveryService/Create", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *deliveryServiceClient) Update(ctx context.Context, in *Delivery, opts ...grpc.CallOption) (*Delivery, error) {
	out := new(Delivery)
	err := c.cc.Invoke(ctx, "/v1.inventories.DeliveryService/Update", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *deliveryServiceClient) View(ctx context.Context, in *Id, opts ...grpc.CallOption) (*Delivery, error) {
	out := new(Delivery)
	err := c.cc.Invoke(ctx, "/v1.inventories.DeliveryService/View", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *deliveryServiceClient) List(ctx context.Context, in *ListDeliveryRequest, opts ...grpc.CallOption) (DeliveryService_ListClient, error) {
	stream, err := c.cc.NewStream(ctx, &DeliveryService_ServiceDesc.Streams[0], "/v1.inventories.DeliveryService/List", opts...)
	if err != nil {
		return nil, err
	}
	x := &deliveryServiceListClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type DeliveryService_ListClient interface {
	Recv() (*ListDeliveryResponse, error)
	grpc.ClientStream
}

type deliveryServiceListClient struct {
	grpc.ClientStream
}

func (x *deliveryServiceListClient) Recv() (*ListDeliveryResponse, error) {
	m := new(ListDeliveryResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// DeliveryServiceServer is the server API for DeliveryService service.
// All implementations must embed UnimplementedDeliveryServiceServer
// for forward compatibility
type DeliveryServiceServer interface {
	Create(context.Context, *Delivery) (*Delivery, error)
	Update(context.Context, *Delivery) (*Delivery, error)
	View(context.Context, *Id) (*Delivery, error)
	List(*ListDeliveryRequest, DeliveryService_ListServer) error
	mustEmbedUnimplementedDeliveryServiceServer()
}

// UnimplementedDeliveryServiceServer must be embedded to have forward compatible implementations.
type UnimplementedDeliveryServiceServer struct {
}

func (UnimplementedDeliveryServiceServer) Create(context.Context, *Delivery) (*Delivery, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Create not implemented")
}
func (UnimplementedDeliveryServiceServer) Update(context.Context, *Delivery) (*Delivery, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Update not implemented")
}
func (UnimplementedDeliveryServiceServer) View(context.Context, *Id) (*Delivery, error) {
	return nil, status.Errorf(codes.Unimplemented, "method View not implemented")
}
func (UnimplementedDeliveryServiceServer) List(*ListDeliveryRequest, DeliveryService_ListServer) error {
	return status.Errorf(codes.Unimplemented, "method List not implemented")
}
func (UnimplementedDeliveryServiceServer) mustEmbedUnimplementedDeliveryServiceServer() {}

// UnsafeDeliveryServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to DeliveryServiceServer will
// result in compilation errors.
type UnsafeDeliveryServiceServer interface {
	mustEmbedUnimplementedDeliveryServiceServer()
}

func RegisterDeliveryServiceServer(s grpc.ServiceRegistrar, srv DeliveryServiceServer) {
	s.RegisterService(&DeliveryService_ServiceDesc, srv)
}

func _DeliveryService_Create_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Delivery)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DeliveryServiceServer).Create(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/v1.inventories.DeliveryService/Create",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DeliveryServiceServer).Create(ctx, req.(*Delivery))
	}
	return interceptor(ctx, in, info, handler)
}

func _DeliveryService_Update_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Delivery)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DeliveryServiceServer).Update(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/v1.inventories.DeliveryService/Update",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DeliveryServiceServer).Update(ctx, req.(*Delivery))
	}
	return interceptor(ctx, in, info, handler)
}

func _DeliveryService_View_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Id)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DeliveryServiceServer).View(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/v1.inventories.DeliveryService/View",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DeliveryServiceServer).View(ctx, req.(*Id))
	}
	return interceptor(ctx, in, info, handler)
}

func _DeliveryService_List_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(ListDeliveryRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(DeliveryServiceServer).List(m, &deliveryServiceListServer{stream})
}

type DeliveryService_ListServer interface {
	Send(*ListDeliveryResponse) error
	grpc.ServerStream
}

type deliveryServiceListServer struct {
	grpc.ServerStream
}

func (x *deliveryServiceListServer) Send(m *ListDeliveryResponse) error {
	return x.ServerStream.SendMsg(m)
}

// DeliveryService_ServiceDesc is the grpc.ServiceDesc for DeliveryService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var DeliveryService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "v1.inventories.DeliveryService",
	HandlerType: (*DeliveryServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Create",
			Handler:    _DeliveryService_Create_Handler,
		},
		{
			MethodName: "Update",
			Handler:    _DeliveryService_Update_Handler,
		},
		{
			MethodName: "View",
			Handler:    _DeliveryService_View_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "List",
			Handler:       _DeliveryService_List_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "pkg/api/v1/inventories/delivery_service.proto",
}
