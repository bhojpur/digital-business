// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.26.0
// 	protoc        v3.19.4
// source: pkg/api/v1/sales/sales_return_service.proto

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

type ListSalesReturnRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Pagination *Pagination `protobuf:"bytes,1,opt,name=pagination,proto3" json:"pagination,omitempty"`
	BranchId   string      `protobuf:"bytes,2,opt,name=branch_id,json=branchId,proto3" json:"branch_id,omitempty"`
	SalesId    string      `protobuf:"bytes,3,opt,name=sales_id,json=salesId,proto3" json:"sales_id,omitempty"`
}

func (x *ListSalesReturnRequest) Reset() {
	*x = ListSalesReturnRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pkg_api_v1_sales_sales_return_service_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListSalesReturnRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListSalesReturnRequest) ProtoMessage() {}

func (x *ListSalesReturnRequest) ProtoReflect() protoreflect.Message {
	mi := &file_pkg_api_v1_sales_sales_return_service_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListSalesReturnRequest.ProtoReflect.Descriptor instead.
func (*ListSalesReturnRequest) Descriptor() ([]byte, []int) {
	return file_pkg_api_v1_sales_sales_return_service_proto_rawDescGZIP(), []int{0}
}

func (x *ListSalesReturnRequest) GetPagination() *Pagination {
	if x != nil {
		return x.Pagination
	}
	return nil
}

func (x *ListSalesReturnRequest) GetBranchId() string {
	if x != nil {
		return x.BranchId
	}
	return ""
}

func (x *ListSalesReturnRequest) GetSalesId() string {
	if x != nil {
		return x.SalesId
	}
	return ""
}

type SalesReturnPaginationResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Pagination *Pagination `protobuf:"bytes,1,opt,name=pagination,proto3" json:"pagination,omitempty"`
	BranchId   string      `protobuf:"bytes,2,opt,name=branch_id,json=branchId,proto3" json:"branch_id,omitempty"`
	SalesId    string      `protobuf:"bytes,3,opt,name=sales_id,json=salesId,proto3" json:"sales_id,omitempty"`
	Count      uint32      `protobuf:"varint,4,opt,name=count,proto3" json:"count,omitempty"`
}

func (x *SalesReturnPaginationResponse) Reset() {
	*x = SalesReturnPaginationResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pkg_api_v1_sales_sales_return_service_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SalesReturnPaginationResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SalesReturnPaginationResponse) ProtoMessage() {}

func (x *SalesReturnPaginationResponse) ProtoReflect() protoreflect.Message {
	mi := &file_pkg_api_v1_sales_sales_return_service_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SalesReturnPaginationResponse.ProtoReflect.Descriptor instead.
func (*SalesReturnPaginationResponse) Descriptor() ([]byte, []int) {
	return file_pkg_api_v1_sales_sales_return_service_proto_rawDescGZIP(), []int{1}
}

func (x *SalesReturnPaginationResponse) GetPagination() *Pagination {
	if x != nil {
		return x.Pagination
	}
	return nil
}

func (x *SalesReturnPaginationResponse) GetBranchId() string {
	if x != nil {
		return x.BranchId
	}
	return ""
}

func (x *SalesReturnPaginationResponse) GetSalesId() string {
	if x != nil {
		return x.SalesId
	}
	return ""
}

func (x *SalesReturnPaginationResponse) GetCount() uint32 {
	if x != nil {
		return x.Count
	}
	return 0
}

type ListSalesReturnResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Pagination  *SalesReturnPaginationResponse `protobuf:"bytes,1,opt,name=pagination,proto3" json:"pagination,omitempty"`
	SalesReturn *SalesReturn                   `protobuf:"bytes,2,opt,name=SalesReturn,proto3" json:"SalesReturn,omitempty"`
}

func (x *ListSalesReturnResponse) Reset() {
	*x = ListSalesReturnResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pkg_api_v1_sales_sales_return_service_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListSalesReturnResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListSalesReturnResponse) ProtoMessage() {}

func (x *ListSalesReturnResponse) ProtoReflect() protoreflect.Message {
	mi := &file_pkg_api_v1_sales_sales_return_service_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListSalesReturnResponse.ProtoReflect.Descriptor instead.
func (*ListSalesReturnResponse) Descriptor() ([]byte, []int) {
	return file_pkg_api_v1_sales_sales_return_service_proto_rawDescGZIP(), []int{2}
}

func (x *ListSalesReturnResponse) GetPagination() *SalesReturnPaginationResponse {
	if x != nil {
		return x.Pagination
	}
	return nil
}

func (x *ListSalesReturnResponse) GetSalesReturn() *SalesReturn {
	if x != nil {
		return x.SalesReturn
	}
	return nil
}

var File_pkg_api_v1_sales_sales_return_service_proto protoreflect.FileDescriptor

var file_pkg_api_v1_sales_sales_return_service_proto_rawDesc = []byte{
	0x0a, 0x2b, 0x70, 0x6b, 0x67, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x73, 0x61, 0x6c,
	0x65, 0x73, 0x2f, 0x73, 0x61, 0x6c, 0x65, 0x73, 0x5f, 0x72, 0x65, 0x74, 0x75, 0x72, 0x6e, 0x5f,
	0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x08, 0x76,
	0x31, 0x2e, 0x73, 0x61, 0x6c, 0x65, 0x73, 0x1a, 0x2b, 0x70, 0x6b, 0x67, 0x2f, 0x61, 0x70, 0x69,
	0x2f, 0x76, 0x31, 0x2f, 0x73, 0x61, 0x6c, 0x65, 0x73, 0x2f, 0x73, 0x61, 0x6c, 0x65, 0x73, 0x5f,
	0x72, 0x65, 0x74, 0x75, 0x72, 0x6e, 0x5f, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x26, 0x70, 0x6b, 0x67, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31,
	0x2f, 0x73, 0x61, 0x6c, 0x65, 0x73, 0x2f, 0x67, 0x65, 0x6e, 0x65, 0x72, 0x69, 0x63, 0x5f, 0x6d,
	0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x86, 0x01, 0x0a,
	0x16, 0x4c, 0x69, 0x73, 0x74, 0x53, 0x61, 0x6c, 0x65, 0x73, 0x52, 0x65, 0x74, 0x75, 0x72, 0x6e,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x34, 0x0a, 0x0a, 0x70, 0x61, 0x67, 0x69, 0x6e,
	0x61, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x14, 0x2e, 0x76, 0x31,
	0x2e, 0x73, 0x61, 0x6c, 0x65, 0x73, 0x2e, 0x50, 0x61, 0x67, 0x69, 0x6e, 0x61, 0x74, 0x69, 0x6f,
	0x6e, 0x52, 0x0a, 0x70, 0x61, 0x67, 0x69, 0x6e, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x1b, 0x0a,
	0x09, 0x62, 0x72, 0x61, 0x6e, 0x63, 0x68, 0x5f, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x08, 0x62, 0x72, 0x61, 0x6e, 0x63, 0x68, 0x49, 0x64, 0x12, 0x19, 0x0a, 0x08, 0x73, 0x61,
	0x6c, 0x65, 0x73, 0x5f, 0x69, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x73, 0x61,
	0x6c, 0x65, 0x73, 0x49, 0x64, 0x22, 0xa3, 0x01, 0x0a, 0x1d, 0x53, 0x61, 0x6c, 0x65, 0x73, 0x52,
	0x65, 0x74, 0x75, 0x72, 0x6e, 0x50, 0x61, 0x67, 0x69, 0x6e, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x34, 0x0a, 0x0a, 0x70, 0x61, 0x67, 0x69, 0x6e,
	0x61, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x14, 0x2e, 0x76, 0x31,
	0x2e, 0x73, 0x61, 0x6c, 0x65, 0x73, 0x2e, 0x50, 0x61, 0x67, 0x69, 0x6e, 0x61, 0x74, 0x69, 0x6f,
	0x6e, 0x52, 0x0a, 0x70, 0x61, 0x67, 0x69, 0x6e, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x1b, 0x0a,
	0x09, 0x62, 0x72, 0x61, 0x6e, 0x63, 0x68, 0x5f, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x08, 0x62, 0x72, 0x61, 0x6e, 0x63, 0x68, 0x49, 0x64, 0x12, 0x19, 0x0a, 0x08, 0x73, 0x61,
	0x6c, 0x65, 0x73, 0x5f, 0x69, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x73, 0x61,
	0x6c, 0x65, 0x73, 0x49, 0x64, 0x12, 0x14, 0x0a, 0x05, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x18, 0x04,
	0x20, 0x01, 0x28, 0x0d, 0x52, 0x05, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x22, 0x9b, 0x01, 0x0a, 0x17,
	0x4c, 0x69, 0x73, 0x74, 0x53, 0x61, 0x6c, 0x65, 0x73, 0x52, 0x65, 0x74, 0x75, 0x72, 0x6e, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x47, 0x0a, 0x0a, 0x70, 0x61, 0x67, 0x69, 0x6e,
	0x61, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x27, 0x2e, 0x76, 0x31,
	0x2e, 0x73, 0x61, 0x6c, 0x65, 0x73, 0x2e, 0x53, 0x61, 0x6c, 0x65, 0x73, 0x52, 0x65, 0x74, 0x75,
	0x72, 0x6e, 0x50, 0x61, 0x67, 0x69, 0x6e, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x70,
	0x6f, 0x6e, 0x73, 0x65, 0x52, 0x0a, 0x70, 0x61, 0x67, 0x69, 0x6e, 0x61, 0x74, 0x69, 0x6f, 0x6e,
	0x12, 0x37, 0x0a, 0x0b, 0x53, 0x61, 0x6c, 0x65, 0x73, 0x52, 0x65, 0x74, 0x75, 0x72, 0x6e, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x15, 0x2e, 0x76, 0x31, 0x2e, 0x73, 0x61, 0x6c, 0x65, 0x73,
	0x2e, 0x53, 0x61, 0x6c, 0x65, 0x73, 0x52, 0x65, 0x74, 0x75, 0x72, 0x6e, 0x52, 0x0b, 0x53, 0x61,
	0x6c, 0x65, 0x73, 0x52, 0x65, 0x74, 0x75, 0x72, 0x6e, 0x32, 0xb4, 0x02, 0x0a, 0x12, 0x53, 0x61,
	0x6c, 0x65, 0x73, 0x52, 0x65, 0x74, 0x75, 0x72, 0x6e, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65,
	0x12, 0x43, 0x0a, 0x11, 0x53, 0x61, 0x6c, 0x65, 0x73, 0x52, 0x65, 0x74, 0x75, 0x72, 0x6e, 0x43,
	0x72, 0x65, 0x61, 0x74, 0x65, 0x12, 0x15, 0x2e, 0x76, 0x31, 0x2e, 0x73, 0x61, 0x6c, 0x65, 0x73,
	0x2e, 0x53, 0x61, 0x6c, 0x65, 0x73, 0x52, 0x65, 0x74, 0x75, 0x72, 0x6e, 0x1a, 0x15, 0x2e, 0x76,
	0x31, 0x2e, 0x73, 0x61, 0x6c, 0x65, 0x73, 0x2e, 0x53, 0x61, 0x6c, 0x65, 0x73, 0x52, 0x65, 0x74,
	0x75, 0x72, 0x6e, 0x22, 0x00, 0x12, 0x43, 0x0a, 0x11, 0x53, 0x61, 0x6c, 0x65, 0x73, 0x52, 0x65,
	0x74, 0x75, 0x72, 0x6e, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x12, 0x15, 0x2e, 0x76, 0x31, 0x2e,
	0x73, 0x61, 0x6c, 0x65, 0x73, 0x2e, 0x53, 0x61, 0x6c, 0x65, 0x73, 0x52, 0x65, 0x74, 0x75, 0x72,
	0x6e, 0x1a, 0x15, 0x2e, 0x76, 0x31, 0x2e, 0x73, 0x61, 0x6c, 0x65, 0x73, 0x2e, 0x53, 0x61, 0x6c,
	0x65, 0x73, 0x52, 0x65, 0x74, 0x75, 0x72, 0x6e, 0x22, 0x00, 0x12, 0x38, 0x0a, 0x0f, 0x53, 0x61,
	0x6c, 0x65, 0x73, 0x52, 0x65, 0x74, 0x75, 0x72, 0x6e, 0x56, 0x69, 0x65, 0x77, 0x12, 0x0c, 0x2e,
	0x76, 0x31, 0x2e, 0x73, 0x61, 0x6c, 0x65, 0x73, 0x2e, 0x49, 0x64, 0x1a, 0x15, 0x2e, 0x76, 0x31,
	0x2e, 0x73, 0x61, 0x6c, 0x65, 0x73, 0x2e, 0x53, 0x61, 0x6c, 0x65, 0x73, 0x52, 0x65, 0x74, 0x75,
	0x72, 0x6e, 0x22, 0x00, 0x12, 0x5a, 0x0a, 0x0f, 0x53, 0x61, 0x6c, 0x65, 0x73, 0x52, 0x65, 0x74,
	0x75, 0x72, 0x6e, 0x4c, 0x69, 0x73, 0x74, 0x12, 0x20, 0x2e, 0x76, 0x31, 0x2e, 0x73, 0x61, 0x6c,
	0x65, 0x73, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x53, 0x61, 0x6c, 0x65, 0x73, 0x52, 0x65, 0x74, 0x75,
	0x72, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x21, 0x2e, 0x76, 0x31, 0x2e, 0x73,
	0x61, 0x6c, 0x65, 0x73, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x53, 0x61, 0x6c, 0x65, 0x73, 0x52, 0x65,
	0x74, 0x75, 0x72, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x30, 0x01,
	0x42, 0x5e, 0x0a, 0x22, 0x6e, 0x65, 0x74, 0x2e, 0x62, 0x68, 0x6f, 0x6a, 0x70, 0x75, 0x72, 0x2e,
	0x64, 0x69, 0x67, 0x69, 0x74, 0x61, 0x6c, 0x2e, 0x62, 0x75, 0x73, 0x69, 0x6e, 0x65, 0x73, 0x73,
	0x2e, 0x73, 0x61, 0x6c, 0x65, 0x73, 0x50, 0x01, 0x5a, 0x36, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62,
	0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x62, 0x68, 0x6f, 0x6a, 0x70, 0x75, 0x72, 0x2f, 0x64, 0x69, 0x67,
	0x69, 0x74, 0x61, 0x6c, 0x2d, 0x62, 0x75, 0x73, 0x69, 0x6e, 0x65, 0x73, 0x73, 0x2f, 0x61, 0x70,
	0x69, 0x2f, 0x76, 0x31, 0x2f, 0x73, 0x61, 0x6c, 0x65, 0x73, 0x3b, 0x73, 0x61, 0x6c, 0x65, 0x73,
	0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_pkg_api_v1_sales_sales_return_service_proto_rawDescOnce sync.Once
	file_pkg_api_v1_sales_sales_return_service_proto_rawDescData = file_pkg_api_v1_sales_sales_return_service_proto_rawDesc
)

func file_pkg_api_v1_sales_sales_return_service_proto_rawDescGZIP() []byte {
	file_pkg_api_v1_sales_sales_return_service_proto_rawDescOnce.Do(func() {
		file_pkg_api_v1_sales_sales_return_service_proto_rawDescData = protoimpl.X.CompressGZIP(file_pkg_api_v1_sales_sales_return_service_proto_rawDescData)
	})
	return file_pkg_api_v1_sales_sales_return_service_proto_rawDescData
}

var file_pkg_api_v1_sales_sales_return_service_proto_msgTypes = make([]protoimpl.MessageInfo, 3)
var file_pkg_api_v1_sales_sales_return_service_proto_goTypes = []interface{}{
	(*ListSalesReturnRequest)(nil),        // 0: v1.sales.ListSalesReturnRequest
	(*SalesReturnPaginationResponse)(nil), // 1: v1.sales.SalesReturnPaginationResponse
	(*ListSalesReturnResponse)(nil),       // 2: v1.sales.ListSalesReturnResponse
	(*Pagination)(nil),                    // 3: v1.sales.Pagination
	(*SalesReturn)(nil),                   // 4: v1.sales.SalesReturn
	(*Id)(nil),                            // 5: v1.sales.Id
}
var file_pkg_api_v1_sales_sales_return_service_proto_depIdxs = []int32{
	3, // 0: v1.sales.ListSalesReturnRequest.pagination:type_name -> v1.sales.Pagination
	3, // 1: v1.sales.SalesReturnPaginationResponse.pagination:type_name -> v1.sales.Pagination
	1, // 2: v1.sales.ListSalesReturnResponse.pagination:type_name -> v1.sales.SalesReturnPaginationResponse
	4, // 3: v1.sales.ListSalesReturnResponse.SalesReturn:type_name -> v1.sales.SalesReturn
	4, // 4: v1.sales.SalesReturnService.SalesReturnCreate:input_type -> v1.sales.SalesReturn
	4, // 5: v1.sales.SalesReturnService.SalesReturnUpdate:input_type -> v1.sales.SalesReturn
	5, // 6: v1.sales.SalesReturnService.SalesReturnView:input_type -> v1.sales.Id
	0, // 7: v1.sales.SalesReturnService.SalesReturnList:input_type -> v1.sales.ListSalesReturnRequest
	4, // 8: v1.sales.SalesReturnService.SalesReturnCreate:output_type -> v1.sales.SalesReturn
	4, // 9: v1.sales.SalesReturnService.SalesReturnUpdate:output_type -> v1.sales.SalesReturn
	4, // 10: v1.sales.SalesReturnService.SalesReturnView:output_type -> v1.sales.SalesReturn
	2, // 11: v1.sales.SalesReturnService.SalesReturnList:output_type -> v1.sales.ListSalesReturnResponse
	8, // [8:12] is the sub-list for method output_type
	4, // [4:8] is the sub-list for method input_type
	4, // [4:4] is the sub-list for extension type_name
	4, // [4:4] is the sub-list for extension extendee
	0, // [0:4] is the sub-list for field type_name
}

func init() { file_pkg_api_v1_sales_sales_return_service_proto_init() }
func file_pkg_api_v1_sales_sales_return_service_proto_init() {
	if File_pkg_api_v1_sales_sales_return_service_proto != nil {
		return
	}
	file_pkg_api_v1_sales_sales_return_message_proto_init()
	file_pkg_api_v1_sales_generic_message_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_pkg_api_v1_sales_sales_return_service_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListSalesReturnRequest); i {
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
		file_pkg_api_v1_sales_sales_return_service_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SalesReturnPaginationResponse); i {
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
		file_pkg_api_v1_sales_sales_return_service_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListSalesReturnResponse); i {
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
			RawDescriptor: file_pkg_api_v1_sales_sales_return_service_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   3,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_pkg_api_v1_sales_sales_return_service_proto_goTypes,
		DependencyIndexes: file_pkg_api_v1_sales_sales_return_service_proto_depIdxs,
		MessageInfos:      file_pkg_api_v1_sales_sales_return_service_proto_msgTypes,
	}.Build()
	File_pkg_api_v1_sales_sales_return_service_proto = out.File
	file_pkg_api_v1_sales_sales_return_service_proto_rawDesc = nil
	file_pkg_api_v1_sales_sales_return_service_proto_goTypes = nil
	file_pkg_api_v1_sales_sales_return_service_proto_depIdxs = nil
}
