// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.26.0
// 	protoc        v3.19.4
// source: pkg/api/v1/sales/customer_service.proto

// Copyright (c) 2018 Bhojpur Consulting Private Limited, India. All rights reserved.

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

package sales

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type ListCustomerRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Pagination *Pagination `protobuf:"bytes,1,opt,name=pagination,proto3" json:"pagination,omitempty"`
}

func (x *ListCustomerRequest) Reset() {
	*x = ListCustomerRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pkg_api_v1_sales_customer_service_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListCustomerRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListCustomerRequest) ProtoMessage() {}

func (x *ListCustomerRequest) ProtoReflect() protoreflect.Message {
	mi := &file_pkg_api_v1_sales_customer_service_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListCustomerRequest.ProtoReflect.Descriptor instead.
func (*ListCustomerRequest) Descriptor() ([]byte, []int) {
	return file_pkg_api_v1_sales_customer_service_proto_rawDescGZIP(), []int{0}
}

func (x *ListCustomerRequest) GetPagination() *Pagination {
	if x != nil {
		return x.Pagination
	}
	return nil
}

type CustomerPaginationResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Pagination *Pagination `protobuf:"bytes,1,opt,name=pagination,proto3" json:"pagination,omitempty"`
	Count      uint32      `protobuf:"varint,2,opt,name=count,proto3" json:"count,omitempty"`
}

func (x *CustomerPaginationResponse) Reset() {
	*x = CustomerPaginationResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pkg_api_v1_sales_customer_service_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CustomerPaginationResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CustomerPaginationResponse) ProtoMessage() {}

func (x *CustomerPaginationResponse) ProtoReflect() protoreflect.Message {
	mi := &file_pkg_api_v1_sales_customer_service_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CustomerPaginationResponse.ProtoReflect.Descriptor instead.
func (*CustomerPaginationResponse) Descriptor() ([]byte, []int) {
	return file_pkg_api_v1_sales_customer_service_proto_rawDescGZIP(), []int{1}
}

func (x *CustomerPaginationResponse) GetPagination() *Pagination {
	if x != nil {
		return x.Pagination
	}
	return nil
}

func (x *CustomerPaginationResponse) GetCount() uint32 {
	if x != nil {
		return x.Count
	}
	return 0
}

type ListCustomerResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Pagination *CustomerPaginationResponse `protobuf:"bytes,1,opt,name=pagination,proto3" json:"pagination,omitempty"`
	Customer   *Customer                   `protobuf:"bytes,2,opt,name=customer,proto3" json:"customer,omitempty"`
}

func (x *ListCustomerResponse) Reset() {
	*x = ListCustomerResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pkg_api_v1_sales_customer_service_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListCustomerResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListCustomerResponse) ProtoMessage() {}

func (x *ListCustomerResponse) ProtoReflect() protoreflect.Message {
	mi := &file_pkg_api_v1_sales_customer_service_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListCustomerResponse.ProtoReflect.Descriptor instead.
func (*ListCustomerResponse) Descriptor() ([]byte, []int) {
	return file_pkg_api_v1_sales_customer_service_proto_rawDescGZIP(), []int{2}
}

func (x *ListCustomerResponse) GetPagination() *CustomerPaginationResponse {
	if x != nil {
		return x.Pagination
	}
	return nil
}

func (x *ListCustomerResponse) GetCustomer() *Customer {
	if x != nil {
		return x.Customer
	}
	return nil
}

var File_pkg_api_v1_sales_customer_service_proto protoreflect.FileDescriptor

var file_pkg_api_v1_sales_customer_service_proto_rawDesc = []byte{
	0x0a, 0x27, 0x70, 0x6b, 0x67, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x73, 0x61, 0x6c,
	0x65, 0x73, 0x2f, 0x63, 0x75, 0x73, 0x74, 0x6f, 0x6d, 0x65, 0x72, 0x5f, 0x73, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x08, 0x76, 0x31, 0x2e, 0x73, 0x61,
	0x6c, 0x65, 0x73, 0x1a, 0x27, 0x70, 0x6b, 0x67, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f,
	0x73, 0x61, 0x6c, 0x65, 0x73, 0x2f, 0x63, 0x75, 0x73, 0x74, 0x6f, 0x6d, 0x65, 0x72, 0x5f, 0x6d,
	0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x26, 0x70, 0x6b,
	0x67, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x73, 0x61, 0x6c, 0x65, 0x73, 0x2f, 0x67,
	0x65, 0x6e, 0x65, 0x72, 0x69, 0x63, 0x5f, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x22, 0x4b, 0x0a, 0x13, 0x4c, 0x69, 0x73, 0x74, 0x43, 0x75, 0x73, 0x74,
	0x6f, 0x6d, 0x65, 0x72, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x34, 0x0a, 0x0a, 0x70,
	0x61, 0x67, 0x69, 0x6e, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x14, 0x2e, 0x76, 0x31, 0x2e, 0x73, 0x61, 0x6c, 0x65, 0x73, 0x2e, 0x50, 0x61, 0x67, 0x69, 0x6e,
	0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x0a, 0x70, 0x61, 0x67, 0x69, 0x6e, 0x61, 0x74, 0x69, 0x6f,
	0x6e, 0x22, 0x68, 0x0a, 0x1a, 0x43, 0x75, 0x73, 0x74, 0x6f, 0x6d, 0x65, 0x72, 0x50, 0x61, 0x67,
	0x69, 0x6e, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12,
	0x34, 0x0a, 0x0a, 0x70, 0x61, 0x67, 0x69, 0x6e, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x0b, 0x32, 0x14, 0x2e, 0x76, 0x31, 0x2e, 0x73, 0x61, 0x6c, 0x65, 0x73, 0x2e, 0x50,
	0x61, 0x67, 0x69, 0x6e, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x0a, 0x70, 0x61, 0x67, 0x69, 0x6e,
	0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x14, 0x0a, 0x05, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x0d, 0x52, 0x05, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x22, 0x8c, 0x01, 0x0a, 0x14,
	0x4c, 0x69, 0x73, 0x74, 0x43, 0x75, 0x73, 0x74, 0x6f, 0x6d, 0x65, 0x72, 0x52, 0x65, 0x73, 0x70,
	0x6f, 0x6e, 0x73, 0x65, 0x12, 0x44, 0x0a, 0x0a, 0x70, 0x61, 0x67, 0x69, 0x6e, 0x61, 0x74, 0x69,
	0x6f, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x24, 0x2e, 0x76, 0x31, 0x2e, 0x73, 0x61,
	0x6c, 0x65, 0x73, 0x2e, 0x43, 0x75, 0x73, 0x74, 0x6f, 0x6d, 0x65, 0x72, 0x50, 0x61, 0x67, 0x69,
	0x6e, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x52, 0x0a,
	0x70, 0x61, 0x67, 0x69, 0x6e, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x2e, 0x0a, 0x08, 0x63, 0x75,
	0x73, 0x74, 0x6f, 0x6d, 0x65, 0x72, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x12, 0x2e, 0x76,
	0x31, 0x2e, 0x73, 0x61, 0x6c, 0x65, 0x73, 0x2e, 0x43, 0x75, 0x73, 0x74, 0x6f, 0x6d, 0x65, 0x72,
	0x52, 0x08, 0x63, 0x75, 0x73, 0x74, 0x6f, 0x6d, 0x65, 0x72, 0x32, 0x90, 0x02, 0x0a, 0x0f, 0x43,
	0x75, 0x73, 0x74, 0x6f, 0x6d, 0x65, 0x72, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x3a,
	0x0a, 0x0e, 0x43, 0x75, 0x73, 0x74, 0x6f, 0x6d, 0x65, 0x72, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65,
	0x12, 0x12, 0x2e, 0x76, 0x31, 0x2e, 0x73, 0x61, 0x6c, 0x65, 0x73, 0x2e, 0x43, 0x75, 0x73, 0x74,
	0x6f, 0x6d, 0x65, 0x72, 0x1a, 0x12, 0x2e, 0x76, 0x31, 0x2e, 0x73, 0x61, 0x6c, 0x65, 0x73, 0x2e,
	0x43, 0x75, 0x73, 0x74, 0x6f, 0x6d, 0x65, 0x72, 0x22, 0x00, 0x12, 0x3a, 0x0a, 0x0e, 0x43, 0x75,
	0x73, 0x74, 0x6f, 0x6d, 0x65, 0x72, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x12, 0x12, 0x2e, 0x76,
	0x31, 0x2e, 0x73, 0x61, 0x6c, 0x65, 0x73, 0x2e, 0x43, 0x75, 0x73, 0x74, 0x6f, 0x6d, 0x65, 0x72,
	0x1a, 0x12, 0x2e, 0x76, 0x31, 0x2e, 0x73, 0x61, 0x6c, 0x65, 0x73, 0x2e, 0x43, 0x75, 0x73, 0x74,
	0x6f, 0x6d, 0x65, 0x72, 0x22, 0x00, 0x12, 0x32, 0x0a, 0x0c, 0x43, 0x75, 0x73, 0x74, 0x6f, 0x6d,
	0x65, 0x72, 0x56, 0x69, 0x65, 0x77, 0x12, 0x0c, 0x2e, 0x76, 0x31, 0x2e, 0x73, 0x61, 0x6c, 0x65,
	0x73, 0x2e, 0x49, 0x64, 0x1a, 0x12, 0x2e, 0x76, 0x31, 0x2e, 0x73, 0x61, 0x6c, 0x65, 0x73, 0x2e,
	0x43, 0x75, 0x73, 0x74, 0x6f, 0x6d, 0x65, 0x72, 0x22, 0x00, 0x12, 0x51, 0x0a, 0x0c, 0x43, 0x75,
	0x73, 0x74, 0x6f, 0x6d, 0x65, 0x72, 0x4c, 0x69, 0x73, 0x74, 0x12, 0x1d, 0x2e, 0x76, 0x31, 0x2e,
	0x73, 0x61, 0x6c, 0x65, 0x73, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x43, 0x75, 0x73, 0x74, 0x6f, 0x6d,
	0x65, 0x72, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1e, 0x2e, 0x76, 0x31, 0x2e, 0x73,
	0x61, 0x6c, 0x65, 0x73, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x43, 0x75, 0x73, 0x74, 0x6f, 0x6d, 0x65,
	0x72, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x30, 0x01, 0x42, 0x5e, 0x0a,
	0x22, 0x6e, 0x65, 0x74, 0x2e, 0x62, 0x68, 0x6f, 0x6a, 0x70, 0x75, 0x72, 0x2e, 0x64, 0x69, 0x67,
	0x69, 0x74, 0x61, 0x6c, 0x2e, 0x62, 0x75, 0x73, 0x69, 0x6e, 0x65, 0x73, 0x73, 0x2e, 0x73, 0x61,
	0x6c, 0x65, 0x73, 0x50, 0x01, 0x5a, 0x36, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f,
	0x6d, 0x2f, 0x62, 0x68, 0x6f, 0x6a, 0x70, 0x75, 0x72, 0x2f, 0x64, 0x69, 0x67, 0x69, 0x74, 0x61,
	0x6c, 0x2d, 0x62, 0x75, 0x73, 0x69, 0x6e, 0x65, 0x73, 0x73, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76,
	0x31, 0x2f, 0x73, 0x61, 0x6c, 0x65, 0x73, 0x3b, 0x73, 0x61, 0x6c, 0x65, 0x73, 0x62, 0x06, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_pkg_api_v1_sales_customer_service_proto_rawDescOnce sync.Once
	file_pkg_api_v1_sales_customer_service_proto_rawDescData = file_pkg_api_v1_sales_customer_service_proto_rawDesc
)

func file_pkg_api_v1_sales_customer_service_proto_rawDescGZIP() []byte {
	file_pkg_api_v1_sales_customer_service_proto_rawDescOnce.Do(func() {
		file_pkg_api_v1_sales_customer_service_proto_rawDescData = protoimpl.X.CompressGZIP(file_pkg_api_v1_sales_customer_service_proto_rawDescData)
	})
	return file_pkg_api_v1_sales_customer_service_proto_rawDescData
}

var file_pkg_api_v1_sales_customer_service_proto_msgTypes = make([]protoimpl.MessageInfo, 3)
var file_pkg_api_v1_sales_customer_service_proto_goTypes = []interface{}{
	(*ListCustomerRequest)(nil),        // 0: v1.sales.ListCustomerRequest
	(*CustomerPaginationResponse)(nil), // 1: v1.sales.CustomerPaginationResponse
	(*ListCustomerResponse)(nil),       // 2: v1.sales.ListCustomerResponse
	(*Pagination)(nil),                 // 3: v1.sales.Pagination
	(*Customer)(nil),                   // 4: v1.sales.Customer
	(*Id)(nil),                         // 5: v1.sales.Id
}
var file_pkg_api_v1_sales_customer_service_proto_depIdxs = []int32{
	3, // 0: v1.sales.ListCustomerRequest.pagination:type_name -> v1.sales.Pagination
	3, // 1: v1.sales.CustomerPaginationResponse.pagination:type_name -> v1.sales.Pagination
	1, // 2: v1.sales.ListCustomerResponse.pagination:type_name -> v1.sales.CustomerPaginationResponse
	4, // 3: v1.sales.ListCustomerResponse.customer:type_name -> v1.sales.Customer
	4, // 4: v1.sales.CustomerService.CustomerCreate:input_type -> v1.sales.Customer
	4, // 5: v1.sales.CustomerService.CustomerUpdate:input_type -> v1.sales.Customer
	5, // 6: v1.sales.CustomerService.CustomerView:input_type -> v1.sales.Id
	0, // 7: v1.sales.CustomerService.CustomerList:input_type -> v1.sales.ListCustomerRequest
	4, // 8: v1.sales.CustomerService.CustomerCreate:output_type -> v1.sales.Customer
	4, // 9: v1.sales.CustomerService.CustomerUpdate:output_type -> v1.sales.Customer
	4, // 10: v1.sales.CustomerService.CustomerView:output_type -> v1.sales.Customer
	2, // 11: v1.sales.CustomerService.CustomerList:output_type -> v1.sales.ListCustomerResponse
	8, // [8:12] is the sub-list for method output_type
	4, // [4:8] is the sub-list for method input_type
	4, // [4:4] is the sub-list for extension type_name
	4, // [4:4] is the sub-list for extension extendee
	0, // [0:4] is the sub-list for field type_name
}

func init() { file_pkg_api_v1_sales_customer_service_proto_init() }
func file_pkg_api_v1_sales_customer_service_proto_init() {
	if File_pkg_api_v1_sales_customer_service_proto != nil {
		return
	}
	file_pkg_api_v1_sales_customer_message_proto_init()
	file_pkg_api_v1_sales_generic_message_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_pkg_api_v1_sales_customer_service_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListCustomerRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_pkg_api_v1_sales_customer_service_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CustomerPaginationResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_pkg_api_v1_sales_customer_service_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListCustomerResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_pkg_api_v1_sales_customer_service_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   3,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_pkg_api_v1_sales_customer_service_proto_goTypes,
		DependencyIndexes: file_pkg_api_v1_sales_customer_service_proto_depIdxs,
		MessageInfos:      file_pkg_api_v1_sales_customer_service_proto_msgTypes,
	}.Build()
	File_pkg_api_v1_sales_customer_service_proto = out.File
	file_pkg_api_v1_sales_customer_service_proto_rawDesc = nil
	file_pkg_api_v1_sales_customer_service_proto_goTypes = nil
	file_pkg_api_v1_sales_customer_service_proto_depIdxs = nil
}
