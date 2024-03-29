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

// WarehouseServiceClient is the client API for WarehouseService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type WarehouseServiceClient interface {
	Create(ctx context.Context, in *Warehouse, opts ...grpc.CallOption) (*Warehouse, error)
	Update(ctx context.Context, in *Warehouse, opts ...grpc.CallOption) (*Warehouse, error)
	View(ctx context.Context, in *Id, opts ...grpc.CallOption) (*Warehouse, error)
	Delete(ctx context.Context, in *Id, opts ...grpc.CallOption) (*MyBoolean, error)
	List(ctx context.Context, in *ListWarehouseRequest, opts ...grpc.CallOption) (WarehouseService_ListClient, error)
}

type warehouseServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewWarehouseServiceClient(cc grpc.ClientConnInterface) WarehouseServiceClient {
	return &warehouseServiceClient{cc}
}

func (c *warehouseServiceClient) Create(ctx context.Context, in *Warehouse, opts ...grpc.CallOption) (*Warehouse, error) {
	out := new(Warehouse)
	err := c.cc.Invoke(ctx, "/v1.inventories.WarehouseService/Create", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *warehouseServiceClient) Update(ctx context.Context, in *Warehouse, opts ...grpc.CallOption) (*Warehouse, error) {
	out := new(Warehouse)
	err := c.cc.Invoke(ctx, "/v1.inventories.WarehouseService/Update", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *warehouseServiceClient) View(ctx context.Context, in *Id, opts ...grpc.CallOption) (*Warehouse, error) {
	out := new(Warehouse)
	err := c.cc.Invoke(ctx, "/v1.inventories.WarehouseService/View", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *warehouseServiceClient) Delete(ctx context.Context, in *Id, opts ...grpc.CallOption) (*MyBoolean, error) {
	out := new(MyBoolean)
	err := c.cc.Invoke(ctx, "/v1.inventories.WarehouseService/Delete", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *warehouseServiceClient) List(ctx context.Context, in *ListWarehouseRequest, opts ...grpc.CallOption) (WarehouseService_ListClient, error) {
	stream, err := c.cc.NewStream(ctx, &WarehouseService_ServiceDesc.Streams[0], "/v1.inventories.WarehouseService/List", opts...)
	if err != nil {
		return nil, err
	}
	x := &warehouseServiceListClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type WarehouseService_ListClient interface {
	Recv() (*ListWarehouseResponse, error)
	grpc.ClientStream
}

type warehouseServiceListClient struct {
	grpc.ClientStream
}

func (x *warehouseServiceListClient) Recv() (*ListWarehouseResponse, error) {
	m := new(ListWarehouseResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// WarehouseServiceServer is the server API for WarehouseService service.
// All implementations must embed UnimplementedWarehouseServiceServer
// for forward compatibility
type WarehouseServiceServer interface {
	Create(context.Context, *Warehouse) (*Warehouse, error)
	Update(context.Context, *Warehouse) (*Warehouse, error)
	View(context.Context, *Id) (*Warehouse, error)
	Delete(context.Context, *Id) (*MyBoolean, error)
	List(*ListWarehouseRequest, WarehouseService_ListServer) error
	mustEmbedUnimplementedWarehouseServiceServer()
}

// UnimplementedWarehouseServiceServer must be embedded to have forward compatible implementations.
type UnimplementedWarehouseServiceServer struct {
}

func (UnimplementedWarehouseServiceServer) Create(context.Context, *Warehouse) (*Warehouse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Create not implemented")
}
func (UnimplementedWarehouseServiceServer) Update(context.Context, *Warehouse) (*Warehouse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Update not implemented")
}
func (UnimplementedWarehouseServiceServer) View(context.Context, *Id) (*Warehouse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method View not implemented")
}
func (UnimplementedWarehouseServiceServer) Delete(context.Context, *Id) (*MyBoolean, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Delete not implemented")
}
func (UnimplementedWarehouseServiceServer) List(*ListWarehouseRequest, WarehouseService_ListServer) error {
	return status.Errorf(codes.Unimplemented, "method List not implemented")
}
func (UnimplementedWarehouseServiceServer) mustEmbedUnimplementedWarehouseServiceServer() {}

// UnsafeWarehouseServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to WarehouseServiceServer will
// result in compilation errors.
type UnsafeWarehouseServiceServer interface {
	mustEmbedUnimplementedWarehouseServiceServer()
}

func RegisterWarehouseServiceServer(s grpc.ServiceRegistrar, srv WarehouseServiceServer) {
	s.RegisterService(&WarehouseService_ServiceDesc, srv)
}

func _WarehouseService_Create_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Warehouse)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(WarehouseServiceServer).Create(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/v1.inventories.WarehouseService/Create",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(WarehouseServiceServer).Create(ctx, req.(*Warehouse))
	}
	return interceptor(ctx, in, info, handler)
}

func _WarehouseService_Update_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Warehouse)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(WarehouseServiceServer).Update(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/v1.inventories.WarehouseService/Update",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(WarehouseServiceServer).Update(ctx, req.(*Warehouse))
	}
	return interceptor(ctx, in, info, handler)
}

func _WarehouseService_View_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Id)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(WarehouseServiceServer).View(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/v1.inventories.WarehouseService/View",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(WarehouseServiceServer).View(ctx, req.(*Id))
	}
	return interceptor(ctx, in, info, handler)
}

func _WarehouseService_Delete_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Id)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(WarehouseServiceServer).Delete(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/v1.inventories.WarehouseService/Delete",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(WarehouseServiceServer).Delete(ctx, req.(*Id))
	}
	return interceptor(ctx, in, info, handler)
}

func _WarehouseService_List_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(ListWarehouseRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(WarehouseServiceServer).List(m, &warehouseServiceListServer{stream})
}

type WarehouseService_ListServer interface {
	Send(*ListWarehouseResponse) error
	grpc.ServerStream
}

type warehouseServiceListServer struct {
	grpc.ServerStream
}

func (x *warehouseServiceListServer) Send(m *ListWarehouseResponse) error {
	return x.ServerStream.SendMsg(m)
}

// WarehouseService_ServiceDesc is the grpc.ServiceDesc for WarehouseService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var WarehouseService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "v1.inventories.WarehouseService",
	HandlerType: (*WarehouseServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Create",
			Handler:    _WarehouseService_Create_Handler,
		},
		{
			MethodName: "Update",
			Handler:    _WarehouseService_Update_Handler,
		},
		{
			MethodName: "View",
			Handler:    _WarehouseService_View_Handler,
		},
		{
			MethodName: "Delete",
			Handler:    _WarehouseService_Delete_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "List",
			Handler:       _WarehouseService_List_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "pkg/api/v1/inventories/warehouse_service.proto",
}
