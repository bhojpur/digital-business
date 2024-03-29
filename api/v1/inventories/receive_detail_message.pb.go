// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.26.0
// 	protoc        v3.19.4
// source: pkg/api/v1/inventories/receive_detail_message.proto

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

type ReceiveDetail struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id          string   `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	ReceiveId   string   `protobuf:"bytes,2,opt,name=receive_id,json=receiveId,proto3" json:"receive_id,omitempty"`
	Product     *Product `protobuf:"bytes,3,opt,name=product,proto3" json:"product,omitempty"`
	Shelve      *Shelve  `protobuf:"bytes,4,opt,name=shelve,proto3" json:"shelve,omitempty"`
	ExpiredDate string   `protobuf:"bytes,5,opt,name=expired_date,json=expiredDate,proto3" json:"expired_date,omitempty"`
}

func (x *ReceiveDetail) Reset() {
	*x = ReceiveDetail{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pkg_api_v1_inventories_receive_detail_message_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ReceiveDetail) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ReceiveDetail) ProtoMessage() {}

func (x *ReceiveDetail) ProtoReflect() protoreflect.Message {
	mi := &file_pkg_api_v1_inventories_receive_detail_message_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ReceiveDetail.ProtoReflect.Descriptor instead.
func (*ReceiveDetail) Descriptor() ([]byte, []int) {
	return file_pkg_api_v1_inventories_receive_detail_message_proto_rawDescGZIP(), []int{0}
}

func (x *ReceiveDetail) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *ReceiveDetail) GetReceiveId() string {
	if x != nil {
		return x.ReceiveId
	}
	return ""
}

func (x *ReceiveDetail) GetProduct() *Product {
	if x != nil {
		return x.Product
	}
	return nil
}

func (x *ReceiveDetail) GetShelve() *Shelve {
	if x != nil {
		return x.Shelve
	}
	return nil
}

func (x *ReceiveDetail) GetExpiredDate() string {
	if x != nil {
		return x.ExpiredDate
	}
	return ""
}

var File_pkg_api_v1_inventories_receive_detail_message_proto protoreflect.FileDescriptor

var file_pkg_api_v1_inventories_receive_detail_message_proto_rawDesc = []byte{
	0x0a, 0x33, 0x70, 0x6b, 0x67, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x69, 0x6e, 0x76,
	0x65, 0x6e, 0x74, 0x6f, 0x72, 0x69, 0x65, 0x73, 0x2f, 0x72, 0x65, 0x63, 0x65, 0x69, 0x76, 0x65,
	0x5f, 0x64, 0x65, 0x74, 0x61, 0x69, 0x6c, 0x5f, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0e, 0x76, 0x31, 0x2e, 0x69, 0x6e, 0x76, 0x65, 0x6e, 0x74,
	0x6f, 0x72, 0x69, 0x65, 0x73, 0x1a, 0x2c, 0x70, 0x6b, 0x67, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76,
	0x31, 0x2f, 0x69, 0x6e, 0x76, 0x65, 0x6e, 0x74, 0x6f, 0x72, 0x69, 0x65, 0x73, 0x2f, 0x70, 0x72,
	0x6f, 0x64, 0x75, 0x63, 0x74, 0x5f, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x1a, 0x2b, 0x70, 0x6b, 0x67, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f,
	0x69, 0x6e, 0x76, 0x65, 0x6e, 0x74, 0x6f, 0x72, 0x69, 0x65, 0x73, 0x2f, 0x73, 0x68, 0x65, 0x6c,
	0x76, 0x65, 0x5f, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x22, 0xc4, 0x01, 0x0a, 0x0d, 0x52, 0x65, 0x63, 0x65, 0x69, 0x76, 0x65, 0x44, 0x65, 0x74, 0x61,
	0x69, 0x6c, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02,
	0x69, 0x64, 0x12, 0x1d, 0x0a, 0x0a, 0x72, 0x65, 0x63, 0x65, 0x69, 0x76, 0x65, 0x5f, 0x69, 0x64,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x72, 0x65, 0x63, 0x65, 0x69, 0x76, 0x65, 0x49,
	0x64, 0x12, 0x31, 0x0a, 0x07, 0x70, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x18, 0x03, 0x20, 0x01,
	0x28, 0x0b, 0x32, 0x17, 0x2e, 0x76, 0x31, 0x2e, 0x69, 0x6e, 0x76, 0x65, 0x6e, 0x74, 0x6f, 0x72,
	0x69, 0x65, 0x73, 0x2e, 0x50, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x52, 0x07, 0x70, 0x72, 0x6f,
	0x64, 0x75, 0x63, 0x74, 0x12, 0x2e, 0x0a, 0x06, 0x73, 0x68, 0x65, 0x6c, 0x76, 0x65, 0x18, 0x04,
	0x20, 0x01, 0x28, 0x0b, 0x32, 0x16, 0x2e, 0x76, 0x31, 0x2e, 0x69, 0x6e, 0x76, 0x65, 0x6e, 0x74,
	0x6f, 0x72, 0x69, 0x65, 0x73, 0x2e, 0x53, 0x68, 0x65, 0x6c, 0x76, 0x65, 0x52, 0x06, 0x73, 0x68,
	0x65, 0x6c, 0x76, 0x65, 0x12, 0x21, 0x0a, 0x0c, 0x65, 0x78, 0x70, 0x69, 0x72, 0x65, 0x64, 0x5f,
	0x64, 0x61, 0x74, 0x65, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x65, 0x78, 0x70, 0x69,
	0x72, 0x65, 0x64, 0x44, 0x61, 0x74, 0x65, 0x42, 0x70, 0x0a, 0x28, 0x6e, 0x65, 0x74, 0x2e, 0x62,
	0x68, 0x6f, 0x6a, 0x70, 0x75, 0x72, 0x2e, 0x64, 0x69, 0x67, 0x69, 0x74, 0x61, 0x6c, 0x2e, 0x62,
	0x75, 0x73, 0x69, 0x6e, 0x65, 0x73, 0x73, 0x2e, 0x69, 0x6e, 0x76, 0x65, 0x6e, 0x74, 0x6f, 0x72,
	0x69, 0x65, 0x73, 0x50, 0x01, 0x5a, 0x42, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f,
	0x6d, 0x2f, 0x62, 0x68, 0x6f, 0x6a, 0x70, 0x75, 0x72, 0x2f, 0x64, 0x69, 0x67, 0x69, 0x74, 0x61,
	0x6c, 0x2d, 0x62, 0x75, 0x73, 0x69, 0x6e, 0x65, 0x73, 0x73, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76,
	0x31, 0x2f, 0x69, 0x6e, 0x76, 0x65, 0x6e, 0x74, 0x6f, 0x72, 0x69, 0x65, 0x73, 0x3b, 0x69, 0x6e,
	0x76, 0x65, 0x6e, 0x74, 0x6f, 0x72, 0x69, 0x65, 0x73, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x33,
}

var (
	file_pkg_api_v1_inventories_receive_detail_message_proto_rawDescOnce sync.Once
	file_pkg_api_v1_inventories_receive_detail_message_proto_rawDescData = file_pkg_api_v1_inventories_receive_detail_message_proto_rawDesc
)

func file_pkg_api_v1_inventories_receive_detail_message_proto_rawDescGZIP() []byte {
	file_pkg_api_v1_inventories_receive_detail_message_proto_rawDescOnce.Do(func() {
		file_pkg_api_v1_inventories_receive_detail_message_proto_rawDescData = protoimpl.X.CompressGZIP(file_pkg_api_v1_inventories_receive_detail_message_proto_rawDescData)
	})
	return file_pkg_api_v1_inventories_receive_detail_message_proto_rawDescData
}

var file_pkg_api_v1_inventories_receive_detail_message_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_pkg_api_v1_inventories_receive_detail_message_proto_goTypes = []interface{}{
	(*ReceiveDetail)(nil), // 0: v1.inventories.ReceiveDetail
	(*Product)(nil),       // 1: v1.inventories.Product
	(*Shelve)(nil),        // 2: v1.inventories.Shelve
}
var file_pkg_api_v1_inventories_receive_detail_message_proto_depIdxs = []int32{
	1, // 0: v1.inventories.ReceiveDetail.product:type_name -> v1.inventories.Product
	2, // 1: v1.inventories.ReceiveDetail.shelve:type_name -> v1.inventories.Shelve
	2, // [2:2] is the sub-list for method output_type
	2, // [2:2] is the sub-list for method input_type
	2, // [2:2] is the sub-list for extension type_name
	2, // [2:2] is the sub-list for extension extendee
	0, // [0:2] is the sub-list for field type_name
}

func init() { file_pkg_api_v1_inventories_receive_detail_message_proto_init() }
func file_pkg_api_v1_inventories_receive_detail_message_proto_init() {
	if File_pkg_api_v1_inventories_receive_detail_message_proto != nil {
		return
	}
	file_pkg_api_v1_inventories_product_message_proto_init()
	file_pkg_api_v1_inventories_shelve_message_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_pkg_api_v1_inventories_receive_detail_message_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ReceiveDetail); i {
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
			RawDescriptor: file_pkg_api_v1_inventories_receive_detail_message_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_pkg_api_v1_inventories_receive_detail_message_proto_goTypes,
		DependencyIndexes: file_pkg_api_v1_inventories_receive_detail_message_proto_depIdxs,
		MessageInfos:      file_pkg_api_v1_inventories_receive_detail_message_proto_msgTypes,
	}.Build()
	File_pkg_api_v1_inventories_receive_detail_message_proto = out.File
	file_pkg_api_v1_inventories_receive_detail_message_proto_rawDesc = nil
	file_pkg_api_v1_inventories_receive_detail_message_proto_goTypes = nil
	file_pkg_api_v1_inventories_receive_detail_message_proto_depIdxs = nil
}
