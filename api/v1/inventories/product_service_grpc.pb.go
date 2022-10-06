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

// ProductServiceClient is the client API for ProductService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ProductServiceClient interface {
	Create(ctx context.Context, in *Product, opts ...grpc.CallOption) (*Product, error)
	Update(ctx context.Context, in *Product, opts ...grpc.CallOption) (*Product, error)
	View(ctx context.Context, in *Id, opts ...grpc.CallOption) (*Product, error)
	Delete(ctx context.Context, in *Id, opts ...grpc.CallOption) (*MyBoolean, error)
	List(ctx context.Context, in *ListProductRequest, opts ...grpc.CallOption) (ProductService_ListClient, error)
	Track(ctx context.Context, in *Product, opts ...grpc.CallOption) (*Transactions, error)
}

type productServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewProductServiceClient(cc grpc.ClientConnInterface) ProductServiceClient {
	return &productServiceClient{cc}
}

func (c *productServiceClient) Create(ctx context.Context, in *Product, opts ...grpc.CallOption) (*Product, error) {
	out := new(Product)
	err := c.cc.Invoke(ctx, "/v1.inventories.ProductService/Create", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *productServiceClient) Update(ctx context.Context, in *Product, opts ...grpc.CallOption) (*Product, error) {
	out := new(Product)
	err := c.cc.Invoke(ctx, "/v1.inventories.ProductService/Update", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *productServiceClient) View(ctx context.Context, in *Id, opts ...grpc.CallOption) (*Product, error) {
	out := new(Product)
	err := c.cc.Invoke(ctx, "/v1.inventories.ProductService/View", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *productServiceClient) Delete(ctx context.Context, in *Id, opts ...grpc.CallOption) (*MyBoolean, error) {
	out := new(MyBoolean)
	err := c.cc.Invoke(ctx, "/v1.inventories.ProductService/Delete", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *productServiceClient) List(ctx context.Context, in *ListProductRequest, opts ...grpc.CallOption) (ProductService_ListClient, error) {
	stream, err := c.cc.NewStream(ctx, &ProductService_ServiceDesc.Streams[0], "/v1.inventories.ProductService/List", opts...)
	if err != nil {
		return nil, err
	}
	x := &productServiceListClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type ProductService_ListClient interface {
	Recv() (*ListProductResponse, error)
	grpc.ClientStream
}

type productServiceListClient struct {
	grpc.ClientStream
}

func (x *productServiceListClient) Recv() (*ListProductResponse, error) {
	m := new(ListProductResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *productServiceClient) Track(ctx context.Context, in *Product, opts ...grpc.CallOption) (*Transactions, error) {
	out := new(Transactions)
	err := c.cc.Invoke(ctx, "/v1.inventories.ProductService/Track", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ProductServiceServer is the server API for ProductService service.
// All implementations must embed UnimplementedProductServiceServer
// for forward compatibility
type ProductServiceServer interface {
	Create(context.Context, *Product) (*Product, error)
	Update(context.Context, *Product) (*Product, error)
	View(context.Context, *Id) (*Product, error)
	Delete(context.Context, *Id) (*MyBoolean, error)
	List(*ListProductRequest, ProductService_ListServer) error
	Track(context.Context, *Product) (*Transactions, error)
	mustEmbedUnimplementedProductServiceServer()
}

// UnimplementedProductServiceServer must be embedded to have forward compatible implementations.
type UnimplementedProductServiceServer struct {
}

func (UnimplementedProductServiceServer) Create(context.Context, *Product) (*Product, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Create not implemented")
}
func (UnimplementedProductServiceServer) Update(context.Context, *Product) (*Product, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Update not implemented")
}
func (UnimplementedProductServiceServer) View(context.Context, *Id) (*Product, error) {
	return nil, status.Errorf(codes.Unimplemented, "method View not implemented")
}
func (UnimplementedProductServiceServer) Delete(context.Context, *Id) (*MyBoolean, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Delete not implemented")
}
func (UnimplementedProductServiceServer) List(*ListProductRequest, ProductService_ListServer) error {
	return status.Errorf(codes.Unimplemented, "method List not implemented")
}
func (UnimplementedProductServiceServer) Track(context.Context, *Product) (*Transactions, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Track not implemented")
}
func (UnimplementedProductServiceServer) mustEmbedUnimplementedProductServiceServer() {}

// UnsafeProductServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ProductServiceServer will
// result in compilation errors.
type UnsafeProductServiceServer interface {
	mustEmbedUnimplementedProductServiceServer()
}

func RegisterProductServiceServer(s grpc.ServiceRegistrar, srv ProductServiceServer) {
	s.RegisterService(&ProductService_ServiceDesc, srv)
}

func _ProductService_Create_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Product)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ProductServiceServer).Create(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/v1.inventories.ProductService/Create",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ProductServiceServer).Create(ctx, req.(*Product))
	}
	return interceptor(ctx, in, info, handler)
}

func _ProductService_Update_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Product)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ProductServiceServer).Update(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/v1.inventories.ProductService/Update",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ProductServiceServer).Update(ctx, req.(*Product))
	}
	return interceptor(ctx, in, info, handler)
}

func _ProductService_View_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Id)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ProductServiceServer).View(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/v1.inventories.ProductService/View",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ProductServiceServer).View(ctx, req.(*Id))
	}
	return interceptor(ctx, in, info, handler)
}

func _ProductService_Delete_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Id)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ProductServiceServer).Delete(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/v1.inventories.ProductService/Delete",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ProductServiceServer).Delete(ctx, req.(*Id))
	}
	return interceptor(ctx, in, info, handler)
}

func _ProductService_List_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(ListProductRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(ProductServiceServer).List(m, &productServiceListServer{stream})
}

type ProductService_ListServer interface {
	Send(*ListProductResponse) error
	grpc.ServerStream
}

type productServiceListServer struct {
	grpc.ServerStream
}

func (x *productServiceListServer) Send(m *ListProductResponse) error {
	return x.ServerStream.SendMsg(m)
}

func _ProductService_Track_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Product)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ProductServiceServer).Track(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/v1.inventories.ProductService/Track",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ProductServiceServer).Track(ctx, req.(*Product))
	}
	return interceptor(ctx, in, info, handler)
}

// ProductService_ServiceDesc is the grpc.ServiceDesc for ProductService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var ProductService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "v1.inventories.ProductService",
	HandlerType: (*ProductServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Create",
			Handler:    _ProductService_Create_Handler,
		},
		{
			MethodName: "Update",
			Handler:    _ProductService_Update_Handler,
		},
		{
			MethodName: "View",
			Handler:    _ProductService_View_Handler,
		},
		{
			MethodName: "Delete",
			Handler:    _ProductService_Delete_Handler,
		},
		{
			MethodName: "Track",
			Handler:    _ProductService_Track_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "List",
			Handler:       _ProductService_List_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "pkg/api/v1/inventories/product_service.proto",
}