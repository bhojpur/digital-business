// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.26.0
// 	protoc        v3.19.4
// source: pkg/api/v1/users/feature_service.proto

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

type ListFeatureResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Feature *Feature `protobuf:"bytes,1,opt,name=feature,proto3" json:"feature,omitempty"`
}

func (x *ListFeatureResponse) Reset() {
	*x = ListFeatureResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pkg_api_v1_users_feature_service_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListFeatureResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListFeatureResponse) ProtoMessage() {}

func (x *ListFeatureResponse) ProtoReflect() protoreflect.Message {
	mi := &file_pkg_api_v1_users_feature_service_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListFeatureResponse.ProtoReflect.Descriptor instead.
func (*ListFeatureResponse) Descriptor() ([]byte, []int) {
	return file_pkg_api_v1_users_feature_service_proto_rawDescGZIP(), []int{0}
}

func (x *ListFeatureResponse) GetFeature() *Feature {
	if x != nil {
		return x.Feature
	}
	return nil
}

type ListPackageFeatureResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	PackageOfFeature *PackageOfFeature `protobuf:"bytes,1,opt,name=package_of_feature,json=packageOfFeature,proto3" json:"package_of_feature,omitempty"`
}

func (x *ListPackageFeatureResponse) Reset() {
	*x = ListPackageFeatureResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pkg_api_v1_users_feature_service_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListPackageFeatureResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListPackageFeatureResponse) ProtoMessage() {}

func (x *ListPackageFeatureResponse) ProtoReflect() protoreflect.Message {
	mi := &file_pkg_api_v1_users_feature_service_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListPackageFeatureResponse.ProtoReflect.Descriptor instead.
func (*ListPackageFeatureResponse) Descriptor() ([]byte, []int) {
	return file_pkg_api_v1_users_feature_service_proto_rawDescGZIP(), []int{1}
}

func (x *ListPackageFeatureResponse) GetPackageOfFeature() *PackageOfFeature {
	if x != nil {
		return x.PackageOfFeature
	}
	return nil
}

var File_pkg_api_v1_users_feature_service_proto protoreflect.FileDescriptor

var file_pkg_api_v1_users_feature_service_proto_rawDesc = []byte{
	0x0a, 0x26, 0x70, 0x6b, 0x67, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x75, 0x73, 0x65,
	0x72, 0x73, 0x2f, 0x66, 0x65, 0x61, 0x74, 0x75, 0x72, 0x65, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69,
	0x63, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x08, 0x76, 0x31, 0x2e, 0x75, 0x73, 0x65,
	0x72, 0x73, 0x1a, 0x26, 0x70, 0x6b, 0x67, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x75,
	0x73, 0x65, 0x72, 0x73, 0x2f, 0x66, 0x65, 0x61, 0x74, 0x75, 0x72, 0x65, 0x5f, 0x6d, 0x65, 0x73,
	0x73, 0x61, 0x67, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x26, 0x70, 0x6b, 0x67, 0x2f,
	0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x75, 0x73, 0x65, 0x72, 0x73, 0x2f, 0x67, 0x65, 0x6e,
	0x65, 0x72, 0x69, 0x63, 0x5f, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x22, 0x42, 0x0a, 0x13, 0x4c, 0x69, 0x73, 0x74, 0x46, 0x65, 0x61, 0x74, 0x75, 0x72,
	0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x2b, 0x0a, 0x07, 0x66, 0x65, 0x61,
	0x74, 0x75, 0x72, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x11, 0x2e, 0x76, 0x31, 0x2e,
	0x75, 0x73, 0x65, 0x72, 0x73, 0x2e, 0x46, 0x65, 0x61, 0x74, 0x75, 0x72, 0x65, 0x52, 0x07, 0x66,
	0x65, 0x61, 0x74, 0x75, 0x72, 0x65, 0x22, 0x66, 0x0a, 0x1a, 0x4c, 0x69, 0x73, 0x74, 0x50, 0x61,
	0x63, 0x6b, 0x61, 0x67, 0x65, 0x46, 0x65, 0x61, 0x74, 0x75, 0x72, 0x65, 0x52, 0x65, 0x73, 0x70,
	0x6f, 0x6e, 0x73, 0x65, 0x12, 0x48, 0x0a, 0x12, 0x70, 0x61, 0x63, 0x6b, 0x61, 0x67, 0x65, 0x5f,
	0x6f, 0x66, 0x5f, 0x66, 0x65, 0x61, 0x74, 0x75, 0x72, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x1a, 0x2e, 0x76, 0x31, 0x2e, 0x75, 0x73, 0x65, 0x72, 0x73, 0x2e, 0x50, 0x61, 0x63, 0x6b,
	0x61, 0x67, 0x65, 0x4f, 0x66, 0x46, 0x65, 0x61, 0x74, 0x75, 0x72, 0x65, 0x52, 0x10, 0x70, 0x61,
	0x63, 0x6b, 0x61, 0x67, 0x65, 0x4f, 0x66, 0x46, 0x65, 0x61, 0x74, 0x75, 0x72, 0x65, 0x32, 0x4e,
	0x0a, 0x0e, 0x46, 0x65, 0x61, 0x74, 0x75, 0x72, 0x65, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65,
	0x12, 0x3c, 0x0a, 0x04, 0x4c, 0x69, 0x73, 0x74, 0x12, 0x11, 0x2e, 0x76, 0x31, 0x2e, 0x75, 0x73,
	0x65, 0x72, 0x73, 0x2e, 0x4d, 0x79, 0x45, 0x6d, 0x70, 0x74, 0x79, 0x1a, 0x1d, 0x2e, 0x76, 0x31,
	0x2e, 0x75, 0x73, 0x65, 0x72, 0x73, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x46, 0x65, 0x61, 0x74, 0x75,
	0x72, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x30, 0x01, 0x32, 0x90,
	0x01, 0x0a, 0x15, 0x50, 0x61, 0x63, 0x6b, 0x61, 0x67, 0x65, 0x46, 0x65, 0x61, 0x74, 0x75, 0x72,
	0x65, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x32, 0x0a, 0x04, 0x56, 0x69, 0x65, 0x77,
	0x12, 0x0c, 0x2e, 0x76, 0x31, 0x2e, 0x75, 0x73, 0x65, 0x72, 0x73, 0x2e, 0x49, 0x64, 0x1a, 0x1a,
	0x2e, 0x76, 0x31, 0x2e, 0x75, 0x73, 0x65, 0x72, 0x73, 0x2e, 0x50, 0x61, 0x63, 0x6b, 0x61, 0x67,
	0x65, 0x4f, 0x66, 0x46, 0x65, 0x61, 0x74, 0x75, 0x72, 0x65, 0x22, 0x00, 0x12, 0x43, 0x0a, 0x04,
	0x4c, 0x69, 0x73, 0x74, 0x12, 0x11, 0x2e, 0x76, 0x31, 0x2e, 0x75, 0x73, 0x65, 0x72, 0x73, 0x2e,
	0x4d, 0x79, 0x45, 0x6d, 0x70, 0x74, 0x79, 0x1a, 0x24, 0x2e, 0x76, 0x31, 0x2e, 0x75, 0x73, 0x65,
	0x72, 0x73, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x50, 0x61, 0x63, 0x6b, 0x61, 0x67, 0x65, 0x46, 0x65,
	0x61, 0x74, 0x75, 0x72, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x30,
	0x01, 0x42, 0x5e, 0x0a, 0x22, 0x6e, 0x65, 0x74, 0x2e, 0x62, 0x68, 0x6f, 0x6a, 0x70, 0x75, 0x72,
	0x2e, 0x64, 0x69, 0x67, 0x69, 0x74, 0x61, 0x6c, 0x2e, 0x62, 0x75, 0x73, 0x69, 0x6e, 0x65, 0x73,
	0x73, 0x2e, 0x75, 0x73, 0x65, 0x72, 0x73, 0x50, 0x01, 0x5a, 0x36, 0x67, 0x69, 0x74, 0x68, 0x75,
	0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x62, 0x68, 0x6f, 0x6a, 0x70, 0x75, 0x72, 0x2f, 0x64, 0x69,
	0x67, 0x69, 0x74, 0x61, 0x6c, 0x2d, 0x62, 0x75, 0x73, 0x69, 0x6e, 0x65, 0x73, 0x73, 0x2f, 0x61,
	0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x75, 0x73, 0x65, 0x72, 0x73, 0x3b, 0x75, 0x73, 0x65, 0x72,
	0x73, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_pkg_api_v1_users_feature_service_proto_rawDescOnce sync.Once
	file_pkg_api_v1_users_feature_service_proto_rawDescData = file_pkg_api_v1_users_feature_service_proto_rawDesc
)

func file_pkg_api_v1_users_feature_service_proto_rawDescGZIP() []byte {
	file_pkg_api_v1_users_feature_service_proto_rawDescOnce.Do(func() {
		file_pkg_api_v1_users_feature_service_proto_rawDescData = protoimpl.X.CompressGZIP(file_pkg_api_v1_users_feature_service_proto_rawDescData)
	})
	return file_pkg_api_v1_users_feature_service_proto_rawDescData
}

var file_pkg_api_v1_users_feature_service_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_pkg_api_v1_users_feature_service_proto_goTypes = []interface{}{
	(*ListFeatureResponse)(nil),        // 0: v1.users.ListFeatureResponse
	(*ListPackageFeatureResponse)(nil), // 1: v1.users.ListPackageFeatureResponse
	(*Feature)(nil),                    // 2: v1.users.Feature
	(*PackageOfFeature)(nil),           // 3: v1.users.PackageOfFeature
	(*MyEmpty)(nil),                    // 4: v1.users.MyEmpty
	(*Id)(nil),                         // 5: v1.users.Id
}
var file_pkg_api_v1_users_feature_service_proto_depIdxs = []int32{
	2, // 0: v1.users.ListFeatureResponse.feature:type_name -> v1.users.Feature
	3, // 1: v1.users.ListPackageFeatureResponse.package_of_feature:type_name -> v1.users.PackageOfFeature
	4, // 2: v1.users.FeatureService.List:input_type -> v1.users.MyEmpty
	5, // 3: v1.users.PackageFeatureService.View:input_type -> v1.users.Id
	4, // 4: v1.users.PackageFeatureService.List:input_type -> v1.users.MyEmpty
	0, // 5: v1.users.FeatureService.List:output_type -> v1.users.ListFeatureResponse
	3, // 6: v1.users.PackageFeatureService.View:output_type -> v1.users.PackageOfFeature
	1, // 7: v1.users.PackageFeatureService.List:output_type -> v1.users.ListPackageFeatureResponse
	5, // [5:8] is the sub-list for method output_type
	2, // [2:5] is the sub-list for method input_type
	2, // [2:2] is the sub-list for extension type_name
	2, // [2:2] is the sub-list for extension extendee
	0, // [0:2] is the sub-list for field type_name
}

func init() { file_pkg_api_v1_users_feature_service_proto_init() }
func file_pkg_api_v1_users_feature_service_proto_init() {
	if File_pkg_api_v1_users_feature_service_proto != nil {
		return
	}
	file_pkg_api_v1_users_feature_message_proto_init()
	file_pkg_api_v1_users_generic_message_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_pkg_api_v1_users_feature_service_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListFeatureResponse); i {
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
		file_pkg_api_v1_users_feature_service_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListPackageFeatureResponse); i {
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
			RawDescriptor: file_pkg_api_v1_users_feature_service_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   2,
		},
		GoTypes:           file_pkg_api_v1_users_feature_service_proto_goTypes,
		DependencyIndexes: file_pkg_api_v1_users_feature_service_proto_depIdxs,
		MessageInfos:      file_pkg_api_v1_users_feature_service_proto_msgTypes,
	}.Build()
	File_pkg_api_v1_users_feature_service_proto = out.File
	file_pkg_api_v1_users_feature_service_proto_rawDesc = nil
	file_pkg_api_v1_users_feature_service_proto_goTypes = nil
	file_pkg_api_v1_users_feature_service_proto_depIdxs = nil
}
