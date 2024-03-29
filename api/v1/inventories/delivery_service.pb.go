// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.26.0
// 	protoc        v3.19.4
// source: pkg/api/v1/inventories/delivery_service.proto

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

package inventories

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

type ListDeliveryRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Pagination   *Pagination `protobuf:"bytes,1,opt,name=pagination,proto3" json:"pagination,omitempty"`
	BranchId     string      `protobuf:"bytes,2,opt,name=branch_id,json=branchId,proto3" json:"branch_id,omitempty"`
	SalesOrderId string      `protobuf:"bytes,3,opt,name=sales_order_id,json=salesOrderId,proto3" json:"sales_order_id,omitempty"`
}

func (x *ListDeliveryRequest) Reset() {
	*x = ListDeliveryRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pkg_api_v1_inventories_delivery_service_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListDeliveryRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListDeliveryRequest) ProtoMessage() {}

func (x *ListDeliveryRequest) ProtoReflect() protoreflect.Message {
	mi := &file_pkg_api_v1_inventories_delivery_service_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListDeliveryRequest.ProtoReflect.Descriptor instead.
func (*ListDeliveryRequest) Descriptor() ([]byte, []int) {
	return file_pkg_api_v1_inventories_delivery_service_proto_rawDescGZIP(), []int{0}
}

func (x *ListDeliveryRequest) GetPagination() *Pagination {
	if x != nil {
		return x.Pagination
	}
	return nil
}

func (x *ListDeliveryRequest) GetBranchId() string {
	if x != nil {
		return x.BranchId
	}
	return ""
}

func (x *ListDeliveryRequest) GetSalesOrderId() string {
	if x != nil {
		return x.SalesOrderId
	}
	return ""
}

type DeliveryPaginationResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Pagination   *Pagination `protobuf:"bytes,1,opt,name=pagination,proto3" json:"pagination,omitempty"`
	BranchId     string      `protobuf:"bytes,2,opt,name=branch_id,json=branchId,proto3" json:"branch_id,omitempty"`
	SalesOrderId string      `protobuf:"bytes,3,opt,name=sales_order_id,json=salesOrderId,proto3" json:"sales_order_id,omitempty"`
	Count        uint32      `protobuf:"varint,4,opt,name=count,proto3" json:"count,omitempty"`
}

func (x *DeliveryPaginationResponse) Reset() {
	*x = DeliveryPaginationResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pkg_api_v1_inventories_delivery_service_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DeliveryPaginationResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DeliveryPaginationResponse) ProtoMessage() {}

func (x *DeliveryPaginationResponse) ProtoReflect() protoreflect.Message {
	mi := &file_pkg_api_v1_inventories_delivery_service_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DeliveryPaginationResponse.ProtoReflect.Descriptor instead.
func (*DeliveryPaginationResponse) Descriptor() ([]byte, []int) {
	return file_pkg_api_v1_inventories_delivery_service_proto_rawDescGZIP(), []int{1}
}

func (x *DeliveryPaginationResponse) GetPagination() *Pagination {
	if x != nil {
		return x.Pagination
	}
	return nil
}

func (x *DeliveryPaginationResponse) GetBranchId() string {
	if x != nil {
		return x.BranchId
	}
	return ""
}

func (x *DeliveryPaginationResponse) GetSalesOrderId() string {
	if x != nil {
		return x.SalesOrderId
	}
	return ""
}

func (x *DeliveryPaginationResponse) GetCount() uint32 {
	if x != nil {
		return x.Count
	}
	return 0
}

type ListDeliveryResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Pagination *DeliveryPaginationResponse `protobuf:"bytes,1,opt,name=pagination,proto3" json:"pagination,omitempty"`
	Delivery   *Delivery                   `protobuf:"bytes,2,opt,name=Delivery,proto3" json:"Delivery,omitempty"`
}

func (x *ListDeliveryResponse) Reset() {
	*x = ListDeliveryResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pkg_api_v1_inventories_delivery_service_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListDeliveryResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListDeliveryResponse) ProtoMessage() {}

func (x *ListDeliveryResponse) ProtoReflect() protoreflect.Message {
	mi := &file_pkg_api_v1_inventories_delivery_service_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListDeliveryResponse.ProtoReflect.Descriptor instead.
func (*ListDeliveryResponse) Descriptor() ([]byte, []int) {
	return file_pkg_api_v1_inventories_delivery_service_proto_rawDescGZIP(), []int{2}
}

func (x *ListDeliveryResponse) GetPagination() *DeliveryPaginationResponse {
	if x != nil {
		return x.Pagination
	}
	return nil
}

func (x *ListDeliveryResponse) GetDelivery() *Delivery {
	if x != nil {
		return x.Delivery
	}
	return nil
}

var File_pkg_api_v1_inventories_delivery_service_proto protoreflect.FileDescriptor

var file_pkg_api_v1_inventories_delivery_service_proto_rawDesc = []byte{
	0x0a, 0x2d, 0x70, 0x6b, 0x67, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x69, 0x6e, 0x76,
	0x65, 0x6e, 0x74, 0x6f, 0x72, 0x69, 0x65, 0x73, 0x2f, 0x64, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72,
	0x79, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12,
	0x0e, 0x76, 0x31, 0x2e, 0x69, 0x6e, 0x76, 0x65, 0x6e, 0x74, 0x6f, 0x72, 0x69, 0x65, 0x73, 0x1a,
	0x2d, 0x70, 0x6b, 0x67, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x69, 0x6e, 0x76, 0x65,
	0x6e, 0x74, 0x6f, 0x72, 0x69, 0x65, 0x73, 0x2f, 0x64, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79,
	0x5f, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x2c,
	0x70, 0x6b, 0x67, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x69, 0x6e, 0x76, 0x65, 0x6e,
	0x74, 0x6f, 0x72, 0x69, 0x65, 0x73, 0x2f, 0x67, 0x65, 0x6e, 0x65, 0x72, 0x69, 0x63, 0x5f, 0x6d,
	0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x94, 0x01, 0x0a,
	0x13, 0x4c, 0x69, 0x73, 0x74, 0x44, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x12, 0x3a, 0x0a, 0x0a, 0x70, 0x61, 0x67, 0x69, 0x6e, 0x61, 0x74, 0x69,
	0x6f, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x76, 0x31, 0x2e, 0x69, 0x6e,
	0x76, 0x65, 0x6e, 0x74, 0x6f, 0x72, 0x69, 0x65, 0x73, 0x2e, 0x50, 0x61, 0x67, 0x69, 0x6e, 0x61,
	0x74, 0x69, 0x6f, 0x6e, 0x52, 0x0a, 0x70, 0x61, 0x67, 0x69, 0x6e, 0x61, 0x74, 0x69, 0x6f, 0x6e,
	0x12, 0x1b, 0x0a, 0x09, 0x62, 0x72, 0x61, 0x6e, 0x63, 0x68, 0x5f, 0x69, 0x64, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x08, 0x62, 0x72, 0x61, 0x6e, 0x63, 0x68, 0x49, 0x64, 0x12, 0x24, 0x0a,
	0x0e, 0x73, 0x61, 0x6c, 0x65, 0x73, 0x5f, 0x6f, 0x72, 0x64, 0x65, 0x72, 0x5f, 0x69, 0x64, 0x18,
	0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0c, 0x73, 0x61, 0x6c, 0x65, 0x73, 0x4f, 0x72, 0x64, 0x65,
	0x72, 0x49, 0x64, 0x22, 0xb1, 0x01, 0x0a, 0x1a, 0x44, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79,
	0x50, 0x61, 0x67, 0x69, 0x6e, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e,
	0x73, 0x65, 0x12, 0x3a, 0x0a, 0x0a, 0x70, 0x61, 0x67, 0x69, 0x6e, 0x61, 0x74, 0x69, 0x6f, 0x6e,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x76, 0x31, 0x2e, 0x69, 0x6e, 0x76, 0x65,
	0x6e, 0x74, 0x6f, 0x72, 0x69, 0x65, 0x73, 0x2e, 0x50, 0x61, 0x67, 0x69, 0x6e, 0x61, 0x74, 0x69,
	0x6f, 0x6e, 0x52, 0x0a, 0x70, 0x61, 0x67, 0x69, 0x6e, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x1b,
	0x0a, 0x09, 0x62, 0x72, 0x61, 0x6e, 0x63, 0x68, 0x5f, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x08, 0x62, 0x72, 0x61, 0x6e, 0x63, 0x68, 0x49, 0x64, 0x12, 0x24, 0x0a, 0x0e, 0x73,
	0x61, 0x6c, 0x65, 0x73, 0x5f, 0x6f, 0x72, 0x64, 0x65, 0x72, 0x5f, 0x69, 0x64, 0x18, 0x03, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x0c, 0x73, 0x61, 0x6c, 0x65, 0x73, 0x4f, 0x72, 0x64, 0x65, 0x72, 0x49,
	0x64, 0x12, 0x14, 0x0a, 0x05, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0d,
	0x52, 0x05, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x22, 0x98, 0x01, 0x0a, 0x14, 0x4c, 0x69, 0x73, 0x74,
	0x44, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65,
	0x12, 0x4a, 0x0a, 0x0a, 0x70, 0x61, 0x67, 0x69, 0x6e, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x0b, 0x32, 0x2a, 0x2e, 0x76, 0x31, 0x2e, 0x69, 0x6e, 0x76, 0x65, 0x6e, 0x74,
	0x6f, 0x72, 0x69, 0x65, 0x73, 0x2e, 0x44, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x50, 0x61,
	0x67, 0x69, 0x6e, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65,
	0x52, 0x0a, 0x70, 0x61, 0x67, 0x69, 0x6e, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x34, 0x0a, 0x08,
	0x44, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x18,
	0x2e, 0x76, 0x31, 0x2e, 0x69, 0x6e, 0x76, 0x65, 0x6e, 0x74, 0x6f, 0x72, 0x69, 0x65, 0x73, 0x2e,
	0x44, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x52, 0x08, 0x44, 0x65, 0x6c, 0x69, 0x76, 0x65,
	0x72, 0x79, 0x32, 0xa0, 0x02, 0x0a, 0x0f, 0x44, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x53,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x3e, 0x0a, 0x06, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65,
	0x12, 0x18, 0x2e, 0x76, 0x31, 0x2e, 0x69, 0x6e, 0x76, 0x65, 0x6e, 0x74, 0x6f, 0x72, 0x69, 0x65,
	0x73, 0x2e, 0x44, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x1a, 0x18, 0x2e, 0x76, 0x31, 0x2e,
	0x69, 0x6e, 0x76, 0x65, 0x6e, 0x74, 0x6f, 0x72, 0x69, 0x65, 0x73, 0x2e, 0x44, 0x65, 0x6c, 0x69,
	0x76, 0x65, 0x72, 0x79, 0x22, 0x00, 0x12, 0x3e, 0x0a, 0x06, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65,
	0x12, 0x18, 0x2e, 0x76, 0x31, 0x2e, 0x69, 0x6e, 0x76, 0x65, 0x6e, 0x74, 0x6f, 0x72, 0x69, 0x65,
	0x73, 0x2e, 0x44, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x1a, 0x18, 0x2e, 0x76, 0x31, 0x2e,
	0x69, 0x6e, 0x76, 0x65, 0x6e, 0x74, 0x6f, 0x72, 0x69, 0x65, 0x73, 0x2e, 0x44, 0x65, 0x6c, 0x69,
	0x76, 0x65, 0x72, 0x79, 0x22, 0x00, 0x12, 0x36, 0x0a, 0x04, 0x56, 0x69, 0x65, 0x77, 0x12, 0x12,
	0x2e, 0x76, 0x31, 0x2e, 0x69, 0x6e, 0x76, 0x65, 0x6e, 0x74, 0x6f, 0x72, 0x69, 0x65, 0x73, 0x2e,
	0x49, 0x64, 0x1a, 0x18, 0x2e, 0x76, 0x31, 0x2e, 0x69, 0x6e, 0x76, 0x65, 0x6e, 0x74, 0x6f, 0x72,
	0x69, 0x65, 0x73, 0x2e, 0x44, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x22, 0x00, 0x12, 0x55,
	0x0a, 0x04, 0x4c, 0x69, 0x73, 0x74, 0x12, 0x23, 0x2e, 0x76, 0x31, 0x2e, 0x69, 0x6e, 0x76, 0x65,
	0x6e, 0x74, 0x6f, 0x72, 0x69, 0x65, 0x73, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x44, 0x65, 0x6c, 0x69,
	0x76, 0x65, 0x72, 0x79, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x24, 0x2e, 0x76, 0x31,
	0x2e, 0x69, 0x6e, 0x76, 0x65, 0x6e, 0x74, 0x6f, 0x72, 0x69, 0x65, 0x73, 0x2e, 0x4c, 0x69, 0x73,
	0x74, 0x44, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x22, 0x00, 0x30, 0x01, 0x42, 0x70, 0x0a, 0x28, 0x6e, 0x65, 0x74, 0x2e, 0x62, 0x68, 0x6f,
	0x6a, 0x70, 0x75, 0x72, 0x2e, 0x64, 0x69, 0x67, 0x69, 0x74, 0x61, 0x6c, 0x2e, 0x62, 0x75, 0x73,
	0x69, 0x6e, 0x65, 0x73, 0x73, 0x2e, 0x69, 0x6e, 0x76, 0x65, 0x6e, 0x74, 0x6f, 0x72, 0x69, 0x65,
	0x73, 0x50, 0x01, 0x5a, 0x42, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f,
	0x62, 0x68, 0x6f, 0x6a, 0x70, 0x75, 0x72, 0x2f, 0x64, 0x69, 0x67, 0x69, 0x74, 0x61, 0x6c, 0x2d,
	0x62, 0x75, 0x73, 0x69, 0x6e, 0x65, 0x73, 0x73, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f,
	0x69, 0x6e, 0x76, 0x65, 0x6e, 0x74, 0x6f, 0x72, 0x69, 0x65, 0x73, 0x3b, 0x69, 0x6e, 0x76, 0x65,
	0x6e, 0x74, 0x6f, 0x72, 0x69, 0x65, 0x73, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_pkg_api_v1_inventories_delivery_service_proto_rawDescOnce sync.Once
	file_pkg_api_v1_inventories_delivery_service_proto_rawDescData = file_pkg_api_v1_inventories_delivery_service_proto_rawDesc
)

func file_pkg_api_v1_inventories_delivery_service_proto_rawDescGZIP() []byte {
	file_pkg_api_v1_inventories_delivery_service_proto_rawDescOnce.Do(func() {
		file_pkg_api_v1_inventories_delivery_service_proto_rawDescData = protoimpl.X.CompressGZIP(file_pkg_api_v1_inventories_delivery_service_proto_rawDescData)
	})
	return file_pkg_api_v1_inventories_delivery_service_proto_rawDescData
}

var file_pkg_api_v1_inventories_delivery_service_proto_msgTypes = make([]protoimpl.MessageInfo, 3)
var file_pkg_api_v1_inventories_delivery_service_proto_goTypes = []interface{}{
	(*ListDeliveryRequest)(nil),        // 0: v1.inventories.ListDeliveryRequest
	(*DeliveryPaginationResponse)(nil), // 1: v1.inventories.DeliveryPaginationResponse
	(*ListDeliveryResponse)(nil),       // 2: v1.inventories.ListDeliveryResponse
	(*Pagination)(nil),                 // 3: v1.inventories.Pagination
	(*Delivery)(nil),                   // 4: v1.inventories.Delivery
	(*Id)(nil),                         // 5: v1.inventories.Id
}
var file_pkg_api_v1_inventories_delivery_service_proto_depIdxs = []int32{
	3, // 0: v1.inventories.ListDeliveryRequest.pagination:type_name -> v1.inventories.Pagination
	3, // 1: v1.inventories.DeliveryPaginationResponse.pagination:type_name -> v1.inventories.Pagination
	1, // 2: v1.inventories.ListDeliveryResponse.pagination:type_name -> v1.inventories.DeliveryPaginationResponse
	4, // 3: v1.inventories.ListDeliveryResponse.Delivery:type_name -> v1.inventories.Delivery
	4, // 4: v1.inventories.DeliveryService.Create:input_type -> v1.inventories.Delivery
	4, // 5: v1.inventories.DeliveryService.Update:input_type -> v1.inventories.Delivery
	5, // 6: v1.inventories.DeliveryService.View:input_type -> v1.inventories.Id
	0, // 7: v1.inventories.DeliveryService.List:input_type -> v1.inventories.ListDeliveryRequest
	4, // 8: v1.inventories.DeliveryService.Create:output_type -> v1.inventories.Delivery
	4, // 9: v1.inventories.DeliveryService.Update:output_type -> v1.inventories.Delivery
	4, // 10: v1.inventories.DeliveryService.View:output_type -> v1.inventories.Delivery
	2, // 11: v1.inventories.DeliveryService.List:output_type -> v1.inventories.ListDeliveryResponse
	8, // [8:12] is the sub-list for method output_type
	4, // [4:8] is the sub-list for method input_type
	4, // [4:4] is the sub-list for extension type_name
	4, // [4:4] is the sub-list for extension extendee
	0, // [0:4] is the sub-list for field type_name
}

func init() { file_pkg_api_v1_inventories_delivery_service_proto_init() }
func file_pkg_api_v1_inventories_delivery_service_proto_init() {
	if File_pkg_api_v1_inventories_delivery_service_proto != nil {
		return
	}
	file_pkg_api_v1_inventories_delivery_message_proto_init()
	file_pkg_api_v1_inventories_generic_message_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_pkg_api_v1_inventories_delivery_service_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListDeliveryRequest); i {
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
		file_pkg_api_v1_inventories_delivery_service_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DeliveryPaginationResponse); i {
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
		file_pkg_api_v1_inventories_delivery_service_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListDeliveryResponse); i {
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
			RawDescriptor: file_pkg_api_v1_inventories_delivery_service_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   3,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_pkg_api_v1_inventories_delivery_service_proto_goTypes,
		DependencyIndexes: file_pkg_api_v1_inventories_delivery_service_proto_depIdxs,
		MessageInfos:      file_pkg_api_v1_inventories_delivery_service_proto_msgTypes,
	}.Build()
	File_pkg_api_v1_inventories_delivery_service_proto = out.File
	file_pkg_api_v1_inventories_delivery_service_proto_rawDesc = nil
	file_pkg_api_v1_inventories_delivery_service_proto_goTypes = nil
	file_pkg_api_v1_inventories_delivery_service_proto_depIdxs = nil
}
