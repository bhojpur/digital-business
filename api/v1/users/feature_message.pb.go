// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.26.0
// 	protoc        v3.19.4
// source: pkg/api/v1/users/feature_message.proto

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

package users

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

type EnumPackageOfFeature int32

const (
	EnumPackageOfFeature_ALL    EnumPackageOfFeature = 0
	EnumPackageOfFeature_SIMPLE EnumPackageOfFeature = 1
	EnumPackageOfFeature_CUSTOM EnumPackageOfFeature = 2
)

// Enum value maps for EnumPackageOfFeature.
var (
	EnumPackageOfFeature_name = map[int32]string{
		0: "ALL",
		1: "SIMPLE",
		2: "CUSTOM",
	}
	EnumPackageOfFeature_value = map[string]int32{
		"ALL":    0,
		"SIMPLE": 1,
		"CUSTOM": 2,
	}
)

func (x EnumPackageOfFeature) Enum() *EnumPackageOfFeature {
	p := new(EnumPackageOfFeature)
	*p = x
	return p
}

func (x EnumPackageOfFeature) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (EnumPackageOfFeature) Descriptor() protoreflect.EnumDescriptor {
	return file_pkg_api_v1_users_feature_message_proto_enumTypes[0].Descriptor()
}

func (EnumPackageOfFeature) Type() protoreflect.EnumType {
	return &file_pkg_api_v1_users_feature_message_proto_enumTypes[0]
}

func (x EnumPackageOfFeature) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use EnumPackageOfFeature.Descriptor instead.
func (EnumPackageOfFeature) EnumDescriptor() ([]byte, []int) {
	return file_pkg_api_v1_users_feature_message_proto_rawDescGZIP(), []int{0}
}

type Feature struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id        string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Name      string `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	CreatedAt string `protobuf:"bytes,3,opt,name=created_at,json=createdAt,proto3" json:"created_at,omitempty"`
	CreatedBy string `protobuf:"bytes,4,opt,name=created_by,json=createdBy,proto3" json:"created_by,omitempty"`
	UpdatedAt string `protobuf:"bytes,5,opt,name=updated_at,json=updatedAt,proto3" json:"updated_at,omitempty"`
	UpdatedBy string `protobuf:"bytes,6,opt,name=updated_by,json=updatedBy,proto3" json:"updated_by,omitempty"`
}

func (x *Feature) Reset() {
	*x = Feature{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pkg_api_v1_users_feature_message_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Feature) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Feature) ProtoMessage() {}

func (x *Feature) ProtoReflect() protoreflect.Message {
	mi := &file_pkg_api_v1_users_feature_message_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Feature.ProtoReflect.Descriptor instead.
func (*Feature) Descriptor() ([]byte, []int) {
	return file_pkg_api_v1_users_feature_message_proto_rawDescGZIP(), []int{0}
}

func (x *Feature) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *Feature) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *Feature) GetCreatedAt() string {
	if x != nil {
		return x.CreatedAt
	}
	return ""
}

func (x *Feature) GetCreatedBy() string {
	if x != nil {
		return x.CreatedBy
	}
	return ""
}

func (x *Feature) GetUpdatedAt() string {
	if x != nil {
		return x.UpdatedAt
	}
	return ""
}

func (x *Feature) GetUpdatedBy() string {
	if x != nil {
		return x.UpdatedBy
	}
	return ""
}

type PackageOfFeature struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id       string               `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Name     EnumPackageOfFeature `protobuf:"varint,2,opt,name=name,proto3,enum=v1.users.EnumPackageOfFeature" json:"name,omitempty"`
	Features []*Feature           `protobuf:"bytes,3,rep,name=features,proto3" json:"features,omitempty"`
}

func (x *PackageOfFeature) Reset() {
	*x = PackageOfFeature{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pkg_api_v1_users_feature_message_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PackageOfFeature) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PackageOfFeature) ProtoMessage() {}

func (x *PackageOfFeature) ProtoReflect() protoreflect.Message {
	mi := &file_pkg_api_v1_users_feature_message_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PackageOfFeature.ProtoReflect.Descriptor instead.
func (*PackageOfFeature) Descriptor() ([]byte, []int) {
	return file_pkg_api_v1_users_feature_message_proto_rawDescGZIP(), []int{1}
}

func (x *PackageOfFeature) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *PackageOfFeature) GetName() EnumPackageOfFeature {
	if x != nil {
		return x.Name
	}
	return EnumPackageOfFeature_ALL
}

func (x *PackageOfFeature) GetFeatures() []*Feature {
	if x != nil {
		return x.Features
	}
	return nil
}

var File_pkg_api_v1_users_feature_message_proto protoreflect.FileDescriptor

var file_pkg_api_v1_users_feature_message_proto_rawDesc = []byte{
	0x0a, 0x26, 0x70, 0x6b, 0x67, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x75, 0x73, 0x65,
	0x72, 0x73, 0x2f, 0x66, 0x65, 0x61, 0x74, 0x75, 0x72, 0x65, 0x5f, 0x6d, 0x65, 0x73, 0x73, 0x61,
	0x67, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x08, 0x76, 0x31, 0x2e, 0x75, 0x73, 0x65,
	0x72, 0x73, 0x22, 0xa9, 0x01, 0x0a, 0x07, 0x46, 0x65, 0x61, 0x74, 0x75, 0x72, 0x65, 0x12, 0x0e,
	0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x12,
	0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61,
	0x6d, 0x65, 0x12, 0x1d, 0x0a, 0x0a, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x5f, 0x61, 0x74,
	0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x41,
	0x74, 0x12, 0x1d, 0x0a, 0x0a, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x5f, 0x62, 0x79, 0x18,
	0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x42, 0x79,
	0x12, 0x1d, 0x0a, 0x0a, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x5f, 0x61, 0x74, 0x18, 0x05,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x41, 0x74, 0x12,
	0x1d, 0x0a, 0x0a, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x5f, 0x62, 0x79, 0x18, 0x06, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x09, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x42, 0x79, 0x22, 0x85,
	0x01, 0x0a, 0x10, 0x50, 0x61, 0x63, 0x6b, 0x61, 0x67, 0x65, 0x4f, 0x66, 0x46, 0x65, 0x61, 0x74,
	0x75, 0x72, 0x65, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x02, 0x69, 0x64, 0x12, 0x32, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x0e, 0x32, 0x1e, 0x2e, 0x76, 0x31, 0x2e, 0x75, 0x73, 0x65, 0x72, 0x73, 0x2e, 0x45, 0x6e, 0x75,
	0x6d, 0x50, 0x61, 0x63, 0x6b, 0x61, 0x67, 0x65, 0x4f, 0x66, 0x46, 0x65, 0x61, 0x74, 0x75, 0x72,
	0x65, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x2d, 0x0a, 0x08, 0x66, 0x65, 0x61, 0x74, 0x75,
	0x72, 0x65, 0x73, 0x18, 0x03, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x11, 0x2e, 0x76, 0x31, 0x2e, 0x75,
	0x73, 0x65, 0x72, 0x73, 0x2e, 0x46, 0x65, 0x61, 0x74, 0x75, 0x72, 0x65, 0x52, 0x08, 0x66, 0x65,
	0x61, 0x74, 0x75, 0x72, 0x65, 0x73, 0x2a, 0x37, 0x0a, 0x14, 0x45, 0x6e, 0x75, 0x6d, 0x50, 0x61,
	0x63, 0x6b, 0x61, 0x67, 0x65, 0x4f, 0x66, 0x46, 0x65, 0x61, 0x74, 0x75, 0x72, 0x65, 0x12, 0x07,
	0x0a, 0x03, 0x41, 0x4c, 0x4c, 0x10, 0x00, 0x12, 0x0a, 0x0a, 0x06, 0x53, 0x49, 0x4d, 0x50, 0x4c,
	0x45, 0x10, 0x01, 0x12, 0x0a, 0x0a, 0x06, 0x43, 0x55, 0x53, 0x54, 0x4f, 0x4d, 0x10, 0x02, 0x42,
	0x5e, 0x0a, 0x22, 0x6e, 0x65, 0x74, 0x2e, 0x62, 0x68, 0x6f, 0x6a, 0x70, 0x75, 0x72, 0x2e, 0x64,
	0x69, 0x67, 0x69, 0x74, 0x61, 0x6c, 0x2e, 0x62, 0x75, 0x73, 0x69, 0x6e, 0x65, 0x73, 0x73, 0x2e,
	0x75, 0x73, 0x65, 0x72, 0x73, 0x50, 0x01, 0x5a, 0x36, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e,
	0x63, 0x6f, 0x6d, 0x2f, 0x62, 0x68, 0x6f, 0x6a, 0x70, 0x75, 0x72, 0x2f, 0x64, 0x69, 0x67, 0x69,
	0x74, 0x61, 0x6c, 0x2d, 0x62, 0x75, 0x73, 0x69, 0x6e, 0x65, 0x73, 0x73, 0x2f, 0x61, 0x70, 0x69,
	0x2f, 0x76, 0x31, 0x2f, 0x75, 0x73, 0x65, 0x72, 0x73, 0x3b, 0x75, 0x73, 0x65, 0x72, 0x73, 0x62,
	0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_pkg_api_v1_users_feature_message_proto_rawDescOnce sync.Once
	file_pkg_api_v1_users_feature_message_proto_rawDescData = file_pkg_api_v1_users_feature_message_proto_rawDesc
)

func file_pkg_api_v1_users_feature_message_proto_rawDescGZIP() []byte {
	file_pkg_api_v1_users_feature_message_proto_rawDescOnce.Do(func() {
		file_pkg_api_v1_users_feature_message_proto_rawDescData = protoimpl.X.CompressGZIP(file_pkg_api_v1_users_feature_message_proto_rawDescData)
	})
	return file_pkg_api_v1_users_feature_message_proto_rawDescData
}

var file_pkg_api_v1_users_feature_message_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_pkg_api_v1_users_feature_message_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_pkg_api_v1_users_feature_message_proto_goTypes = []interface{}{
	(EnumPackageOfFeature)(0), // 0: v1.users.EnumPackageOfFeature
	(*Feature)(nil),           // 1: v1.users.Feature
	(*PackageOfFeature)(nil),  // 2: v1.users.PackageOfFeature
}
var file_pkg_api_v1_users_feature_message_proto_depIdxs = []int32{
	0, // 0: v1.users.PackageOfFeature.name:type_name -> v1.users.EnumPackageOfFeature
	1, // 1: v1.users.PackageOfFeature.features:type_name -> v1.users.Feature
	2, // [2:2] is the sub-list for method output_type
	2, // [2:2] is the sub-list for method input_type
	2, // [2:2] is the sub-list for extension type_name
	2, // [2:2] is the sub-list for extension extendee
	0, // [0:2] is the sub-list for field type_name
}

func init() { file_pkg_api_v1_users_feature_message_proto_init() }
func file_pkg_api_v1_users_feature_message_proto_init() {
	if File_pkg_api_v1_users_feature_message_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_pkg_api_v1_users_feature_message_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Feature); i {
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
		file_pkg_api_v1_users_feature_message_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PackageOfFeature); i {
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
			RawDescriptor: file_pkg_api_v1_users_feature_message_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_pkg_api_v1_users_feature_message_proto_goTypes,
		DependencyIndexes: file_pkg_api_v1_users_feature_message_proto_depIdxs,
		EnumInfos:         file_pkg_api_v1_users_feature_message_proto_enumTypes,
		MessageInfos:      file_pkg_api_v1_users_feature_message_proto_msgTypes,
	}.Build()
	File_pkg_api_v1_users_feature_message_proto = out.File
	file_pkg_api_v1_users_feature_message_proto_rawDesc = nil
	file_pkg_api_v1_users_feature_message_proto_goTypes = nil
	file_pkg_api_v1_users_feature_message_proto_depIdxs = nil
}