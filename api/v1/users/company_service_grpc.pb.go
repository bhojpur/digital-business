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

// CompanyServiceClient is the client API for CompanyService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type CompanyServiceClient interface {
	Registration(ctx context.Context, in *CompanyRegistration, opts ...grpc.CallOption) (*CompanyRegistration, error)
	Update(ctx context.Context, in *Company, opts ...grpc.CallOption) (*Company, error)
	View(ctx context.Context, in *Id, opts ...grpc.CallOption) (*Company, error)
}

type companyServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewCompanyServiceClient(cc grpc.ClientConnInterface) CompanyServiceClient {
	return &companyServiceClient{cc}
}

func (c *companyServiceClient) Registration(ctx context.Context, in *CompanyRegistration, opts ...grpc.CallOption) (*CompanyRegistration, error) {
	out := new(CompanyRegistration)
	err := c.cc.Invoke(ctx, "/v1.users.CompanyService/Registration", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *companyServiceClient) Update(ctx context.Context, in *Company, opts ...grpc.CallOption) (*Company, error) {
	out := new(Company)
	err := c.cc.Invoke(ctx, "/v1.users.CompanyService/Update", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *companyServiceClient) View(ctx context.Context, in *Id, opts ...grpc.CallOption) (*Company, error) {
	out := new(Company)
	err := c.cc.Invoke(ctx, "/v1.users.CompanyService/View", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// CompanyServiceServer is the server API for CompanyService service.
// All implementations must embed UnimplementedCompanyServiceServer
// for forward compatibility
type CompanyServiceServer interface {
	Registration(context.Context, *CompanyRegistration) (*CompanyRegistration, error)
	Update(context.Context, *Company) (*Company, error)
	View(context.Context, *Id) (*Company, error)
	mustEmbedUnimplementedCompanyServiceServer()
}

// UnimplementedCompanyServiceServer must be embedded to have forward compatible implementations.
type UnimplementedCompanyServiceServer struct {
}

func (UnimplementedCompanyServiceServer) Registration(context.Context, *CompanyRegistration) (*CompanyRegistration, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Registration not implemented")
}
func (UnimplementedCompanyServiceServer) Update(context.Context, *Company) (*Company, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Update not implemented")
}
func (UnimplementedCompanyServiceServer) View(context.Context, *Id) (*Company, error) {
	return nil, status.Errorf(codes.Unimplemented, "method View not implemented")
}
func (UnimplementedCompanyServiceServer) mustEmbedUnimplementedCompanyServiceServer() {}

// UnsafeCompanyServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to CompanyServiceServer will
// result in compilation errors.
type UnsafeCompanyServiceServer interface {
	mustEmbedUnimplementedCompanyServiceServer()
}

func RegisterCompanyServiceServer(s grpc.ServiceRegistrar, srv CompanyServiceServer) {
	s.RegisterService(&CompanyService_ServiceDesc, srv)
}

func _CompanyService_Registration_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CompanyRegistration)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CompanyServiceServer).Registration(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/v1.users.CompanyService/Registration",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CompanyServiceServer).Registration(ctx, req.(*CompanyRegistration))
	}
	return interceptor(ctx, in, info, handler)
}

func _CompanyService_Update_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Company)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CompanyServiceServer).Update(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/v1.users.CompanyService/Update",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CompanyServiceServer).Update(ctx, req.(*Company))
	}
	return interceptor(ctx, in, info, handler)
}

func _CompanyService_View_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Id)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CompanyServiceServer).View(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/v1.users.CompanyService/View",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CompanyServiceServer).View(ctx, req.(*Id))
	}
	return interceptor(ctx, in, info, handler)
}

// CompanyService_ServiceDesc is the grpc.ServiceDesc for CompanyService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var CompanyService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "v1.users.CompanyService",
	HandlerType: (*CompanyServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Registration",
			Handler:    _CompanyService_Registration_Handler,
		},
		{
			MethodName: "Update",
			Handler:    _CompanyService_Update_Handler,
		},
		{
			MethodName: "View",
			Handler:    _CompanyService_View_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "pkg/api/v1/users/company_service.proto",
}
