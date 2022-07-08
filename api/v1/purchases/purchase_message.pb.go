// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.26.0
// 	protoc        v3.19.4
// source: pkg/api/v1/purchases/purchase_message.proto

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

package purchases

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

type Purchase struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id                       string            `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	BranchId                 string            `protobuf:"bytes,2,opt,name=branch_id,json=branchId,proto3" json:"branch_id,omitempty"`
	BranchName               string            `protobuf:"bytes,3,opt,name=branch_name,json=branchName,proto3" json:"branch_name,omitempty"`
	Supplier                 *Supplier         `protobuf:"bytes,4,opt,name=supplier,proto3" json:"supplier,omitempty"`
	Code                     string            `protobuf:"bytes,5,opt,name=code,proto3" json:"code,omitempty"`
	PurchaseDate             string            `protobuf:"bytes,6,opt,name=purchase_date,json=purchaseDate,proto3" json:"purchase_date,omitempty"`
	Price                    float64           `protobuf:"fixed64,7,opt,name=price,proto3" json:"price,omitempty"`
	AdditionalDiscAmount     float64           `protobuf:"fixed64,8,opt,name=additional_disc_amount,json=additionalDiscAmount,proto3" json:"additional_disc_amount,omitempty"`
	AdditionalDiscPercentage float32           `protobuf:"fixed32,9,opt,name=additional_disc_percentage,json=additionalDiscPercentage,proto3" json:"additional_disc_percentage,omitempty"`
	TotalPrice               float64           `protobuf:"fixed64,10,opt,name=total_price,json=totalPrice,proto3" json:"total_price,omitempty"`
	Remark                   string            `protobuf:"bytes,11,opt,name=remark,proto3" json:"remark,omitempty"`
	CreatedAt                string            `protobuf:"bytes,12,opt,name=created_at,json=createdAt,proto3" json:"created_at,omitempty"`
	CreatedBy                string            `protobuf:"bytes,13,opt,name=created_by,json=createdBy,proto3" json:"created_by,omitempty"`
	UpdatedAt                string            `protobuf:"bytes,14,opt,name=updated_at,json=updatedAt,proto3" json:"updated_at,omitempty"`
	UpdatedBy                string            `protobuf:"bytes,15,opt,name=updated_by,json=updatedBy,proto3" json:"updated_by,omitempty"`
	Details                  []*PurchaseDetail `protobuf:"bytes,16,rep,name=details,proto3" json:"details,omitempty"`
}

func (x *Purchase) Reset() {
	*x = Purchase{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pkg_api_v1_purchases_purchase_message_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Purchase) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Purchase) ProtoMessage() {}

func (x *Purchase) ProtoReflect() protoreflect.Message {
	mi := &file_pkg_api_v1_purchases_purchase_message_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Purchase.ProtoReflect.Descriptor instead.
func (*Purchase) Descriptor() ([]byte, []int) {
	return file_pkg_api_v1_purchases_purchase_message_proto_rawDescGZIP(), []int{0}
}

func (x *Purchase) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *Purchase) GetBranchId() string {
	if x != nil {
		return x.BranchId
	}
	return ""
}

func (x *Purchase) GetBranchName() string {
	if x != nil {
		return x.BranchName
	}
	return ""
}

func (x *Purchase) GetSupplier() *Supplier {
	if x != nil {
		return x.Supplier
	}
	return nil
}

func (x *Purchase) GetCode() string {
	if x != nil {
		return x.Code
	}
	return ""
}

func (x *Purchase) GetPurchaseDate() string {
	if x != nil {
		return x.PurchaseDate
	}
	return ""
}

func (x *Purchase) GetPrice() float64 {
	if x != nil {
		return x.Price
	}
	return 0
}

func (x *Purchase) GetAdditionalDiscAmount() float64 {
	if x != nil {
		return x.AdditionalDiscAmount
	}
	return 0
}

func (x *Purchase) GetAdditionalDiscPercentage() float32 {
	if x != nil {
		return x.AdditionalDiscPercentage
	}
	return 0
}

func (x *Purchase) GetTotalPrice() float64 {
	if x != nil {
		return x.TotalPrice
	}
	return 0
}

func (x *Purchase) GetRemark() string {
	if x != nil {
		return x.Remark
	}
	return ""
}

func (x *Purchase) GetCreatedAt() string {
	if x != nil {
		return x.CreatedAt
	}
	return ""
}

func (x *Purchase) GetCreatedBy() string {
	if x != nil {
		return x.CreatedBy
	}
	return ""
}

func (x *Purchase) GetUpdatedAt() string {
	if x != nil {
		return x.UpdatedAt
	}
	return ""
}

func (x *Purchase) GetUpdatedBy() string {
	if x != nil {
		return x.UpdatedBy
	}
	return ""
}

func (x *Purchase) GetDetails() []*PurchaseDetail {
	if x != nil {
		return x.Details
	}
	return nil
}

type PurchaseDetail struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id             string  `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	PurchaseId     string  `protobuf:"bytes,2,opt,name=purchase_id,json=purchaseId,proto3" json:"purchase_id,omitempty"`
	ProductId      string  `protobuf:"bytes,3,opt,name=product_id,json=productId,proto3" json:"product_id,omitempty"`
	ProductCode    string  `protobuf:"bytes,4,opt,name=product_code,json=productCode,proto3" json:"product_code,omitempty"`
	ProductName    string  `protobuf:"bytes,5,opt,name=product_name,json=productName,proto3" json:"product_name,omitempty"`
	Quantity       int32   `protobuf:"varint,6,opt,name=quantity,proto3" json:"quantity,omitempty"`
	Price          float64 `protobuf:"fixed64,7,opt,name=price,proto3" json:"price,omitempty"`
	DiscAmount     float64 `protobuf:"fixed64,8,opt,name=disc_amount,json=discAmount,proto3" json:"disc_amount,omitempty"`
	DiscPercentage float32 `protobuf:"fixed32,9,opt,name=disc_percentage,json=discPercentage,proto3" json:"disc_percentage,omitempty"`
	TotalPrice     float64 `protobuf:"fixed64,10,opt,name=total_price,json=totalPrice,proto3" json:"total_price,omitempty"`
}

func (x *PurchaseDetail) Reset() {
	*x = PurchaseDetail{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pkg_api_v1_purchases_purchase_message_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PurchaseDetail) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PurchaseDetail) ProtoMessage() {}

func (x *PurchaseDetail) ProtoReflect() protoreflect.Message {
	mi := &file_pkg_api_v1_purchases_purchase_message_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PurchaseDetail.ProtoReflect.Descriptor instead.
func (*PurchaseDetail) Descriptor() ([]byte, []int) {
	return file_pkg_api_v1_purchases_purchase_message_proto_rawDescGZIP(), []int{1}
}

func (x *PurchaseDetail) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *PurchaseDetail) GetPurchaseId() string {
	if x != nil {
		return x.PurchaseId
	}
	return ""
}

func (x *PurchaseDetail) GetProductId() string {
	if x != nil {
		return x.ProductId
	}
	return ""
}

func (x *PurchaseDetail) GetProductCode() string {
	if x != nil {
		return x.ProductCode
	}
	return ""
}

func (x *PurchaseDetail) GetProductName() string {
	if x != nil {
		return x.ProductName
	}
	return ""
}

func (x *PurchaseDetail) GetQuantity() int32 {
	if x != nil {
		return x.Quantity
	}
	return 0
}

func (x *PurchaseDetail) GetPrice() float64 {
	if x != nil {
		return x.Price
	}
	return 0
}

func (x *PurchaseDetail) GetDiscAmount() float64 {
	if x != nil {
		return x.DiscAmount
	}
	return 0
}

func (x *PurchaseDetail) GetDiscPercentage() float32 {
	if x != nil {
		return x.DiscPercentage
	}
	return 0
}

func (x *PurchaseDetail) GetTotalPrice() float64 {
	if x != nil {
		return x.TotalPrice
	}
	return 0
}

var File_pkg_api_v1_purchases_purchase_message_proto protoreflect.FileDescriptor

var file_pkg_api_v1_purchases_purchase_message_proto_rawDesc = []byte{
	0x0a, 0x2b, 0x70, 0x6b, 0x67, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x70, 0x75, 0x72,
	0x63, 0x68, 0x61, 0x73, 0x65, 0x73, 0x2f, 0x70, 0x75, 0x72, 0x63, 0x68, 0x61, 0x73, 0x65, 0x5f,
	0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0c, 0x76,
	0x31, 0x2e, 0x70, 0x75, 0x72, 0x63, 0x68, 0x61, 0x73, 0x65, 0x73, 0x1a, 0x2b, 0x70, 0x6b, 0x67,
	0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x70, 0x75, 0x72, 0x63, 0x68, 0x61, 0x73, 0x65,
	0x73, 0x2f, 0x73, 0x75, 0x70, 0x70, 0x6c, 0x69, 0x65, 0x72, 0x5f, 0x6d, 0x65, 0x73, 0x73, 0x61,
	0x67, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xbc, 0x04, 0x0a, 0x08, 0x50, 0x75, 0x72,
	0x63, 0x68, 0x61, 0x73, 0x65, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x1b, 0x0a, 0x09, 0x62, 0x72, 0x61, 0x6e, 0x63, 0x68, 0x5f,
	0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x62, 0x72, 0x61, 0x6e, 0x63, 0x68,
	0x49, 0x64, 0x12, 0x1f, 0x0a, 0x0b, 0x62, 0x72, 0x61, 0x6e, 0x63, 0x68, 0x5f, 0x6e, 0x61, 0x6d,
	0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0a, 0x62, 0x72, 0x61, 0x6e, 0x63, 0x68, 0x4e,
	0x61, 0x6d, 0x65, 0x12, 0x32, 0x0a, 0x08, 0x73, 0x75, 0x70, 0x70, 0x6c, 0x69, 0x65, 0x72, 0x18,
	0x04, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x16, 0x2e, 0x76, 0x31, 0x2e, 0x70, 0x75, 0x72, 0x63, 0x68,
	0x61, 0x73, 0x65, 0x73, 0x2e, 0x53, 0x75, 0x70, 0x70, 0x6c, 0x69, 0x65, 0x72, 0x52, 0x08, 0x73,
	0x75, 0x70, 0x70, 0x6c, 0x69, 0x65, 0x72, 0x12, 0x12, 0x0a, 0x04, 0x63, 0x6f, 0x64, 0x65, 0x18,
	0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x63, 0x6f, 0x64, 0x65, 0x12, 0x23, 0x0a, 0x0d, 0x70,
	0x75, 0x72, 0x63, 0x68, 0x61, 0x73, 0x65, 0x5f, 0x64, 0x61, 0x74, 0x65, 0x18, 0x06, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x0c, 0x70, 0x75, 0x72, 0x63, 0x68, 0x61, 0x73, 0x65, 0x44, 0x61, 0x74, 0x65,
	0x12, 0x14, 0x0a, 0x05, 0x70, 0x72, 0x69, 0x63, 0x65, 0x18, 0x07, 0x20, 0x01, 0x28, 0x01, 0x52,
	0x05, 0x70, 0x72, 0x69, 0x63, 0x65, 0x12, 0x34, 0x0a, 0x16, 0x61, 0x64, 0x64, 0x69, 0x74, 0x69,
	0x6f, 0x6e, 0x61, 0x6c, 0x5f, 0x64, 0x69, 0x73, 0x63, 0x5f, 0x61, 0x6d, 0x6f, 0x75, 0x6e, 0x74,
	0x18, 0x08, 0x20, 0x01, 0x28, 0x01, 0x52, 0x14, 0x61, 0x64, 0x64, 0x69, 0x74, 0x69, 0x6f, 0x6e,
	0x61, 0x6c, 0x44, 0x69, 0x73, 0x63, 0x41, 0x6d, 0x6f, 0x75, 0x6e, 0x74, 0x12, 0x3c, 0x0a, 0x1a,
	0x61, 0x64, 0x64, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x61, 0x6c, 0x5f, 0x64, 0x69, 0x73, 0x63, 0x5f,
	0x70, 0x65, 0x72, 0x63, 0x65, 0x6e, 0x74, 0x61, 0x67, 0x65, 0x18, 0x09, 0x20, 0x01, 0x28, 0x02,
	0x52, 0x18, 0x61, 0x64, 0x64, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x61, 0x6c, 0x44, 0x69, 0x73, 0x63,
	0x50, 0x65, 0x72, 0x63, 0x65, 0x6e, 0x74, 0x61, 0x67, 0x65, 0x12, 0x1f, 0x0a, 0x0b, 0x74, 0x6f,
	0x74, 0x61, 0x6c, 0x5f, 0x70, 0x72, 0x69, 0x63, 0x65, 0x18, 0x0a, 0x20, 0x01, 0x28, 0x01, 0x52,
	0x0a, 0x74, 0x6f, 0x74, 0x61, 0x6c, 0x50, 0x72, 0x69, 0x63, 0x65, 0x12, 0x16, 0x0a, 0x06, 0x72,
	0x65, 0x6d, 0x61, 0x72, 0x6b, 0x18, 0x0b, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x72, 0x65, 0x6d,
	0x61, 0x72, 0x6b, 0x12, 0x1d, 0x0a, 0x0a, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x5f, 0x61,
	0x74, 0x18, 0x0c, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64,
	0x41, 0x74, 0x12, 0x1d, 0x0a, 0x0a, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x5f, 0x62, 0x79,
	0x18, 0x0d, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x42,
	0x79, 0x12, 0x1d, 0x0a, 0x0a, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x5f, 0x61, 0x74, 0x18,
	0x0e, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x41, 0x74,
	0x12, 0x1d, 0x0a, 0x0a, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x5f, 0x62, 0x79, 0x18, 0x0f,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x42, 0x79, 0x12,
	0x36, 0x0a, 0x07, 0x64, 0x65, 0x74, 0x61, 0x69, 0x6c, 0x73, 0x18, 0x10, 0x20, 0x03, 0x28, 0x0b,
	0x32, 0x1c, 0x2e, 0x76, 0x31, 0x2e, 0x70, 0x75, 0x72, 0x63, 0x68, 0x61, 0x73, 0x65, 0x73, 0x2e,
	0x50, 0x75, 0x72, 0x63, 0x68, 0x61, 0x73, 0x65, 0x44, 0x65, 0x74, 0x61, 0x69, 0x6c, 0x52, 0x07,
	0x64, 0x65, 0x74, 0x61, 0x69, 0x6c, 0x73, 0x22, 0xc3, 0x02, 0x0a, 0x0e, 0x50, 0x75, 0x72, 0x63,
	0x68, 0x61, 0x73, 0x65, 0x44, 0x65, 0x74, 0x61, 0x69, 0x6c, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x1f, 0x0a, 0x0b, 0x70, 0x75,
	0x72, 0x63, 0x68, 0x61, 0x73, 0x65, 0x5f, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x0a, 0x70, 0x75, 0x72, 0x63, 0x68, 0x61, 0x73, 0x65, 0x49, 0x64, 0x12, 0x1d, 0x0a, 0x0a, 0x70,
	0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x5f, 0x69, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x09, 0x70, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x49, 0x64, 0x12, 0x21, 0x0a, 0x0c, 0x70, 0x72,
	0x6f, 0x64, 0x75, 0x63, 0x74, 0x5f, 0x63, 0x6f, 0x64, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x0b, 0x70, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x43, 0x6f, 0x64, 0x65, 0x12, 0x21, 0x0a,
	0x0c, 0x70, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x05, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x0b, 0x70, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x4e, 0x61, 0x6d, 0x65,
	0x12, 0x1a, 0x0a, 0x08, 0x71, 0x75, 0x61, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x18, 0x06, 0x20, 0x01,
	0x28, 0x05, 0x52, 0x08, 0x71, 0x75, 0x61, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x12, 0x14, 0x0a, 0x05,
	0x70, 0x72, 0x69, 0x63, 0x65, 0x18, 0x07, 0x20, 0x01, 0x28, 0x01, 0x52, 0x05, 0x70, 0x72, 0x69,
	0x63, 0x65, 0x12, 0x1f, 0x0a, 0x0b, 0x64, 0x69, 0x73, 0x63, 0x5f, 0x61, 0x6d, 0x6f, 0x75, 0x6e,
	0x74, 0x18, 0x08, 0x20, 0x01, 0x28, 0x01, 0x52, 0x0a, 0x64, 0x69, 0x73, 0x63, 0x41, 0x6d, 0x6f,
	0x75, 0x6e, 0x74, 0x12, 0x27, 0x0a, 0x0f, 0x64, 0x69, 0x73, 0x63, 0x5f, 0x70, 0x65, 0x72, 0x63,
	0x65, 0x6e, 0x74, 0x61, 0x67, 0x65, 0x18, 0x09, 0x20, 0x01, 0x28, 0x02, 0x52, 0x0e, 0x64, 0x69,
	0x73, 0x63, 0x50, 0x65, 0x72, 0x63, 0x65, 0x6e, 0x74, 0x61, 0x67, 0x65, 0x12, 0x1f, 0x0a, 0x0b,
	0x74, 0x6f, 0x74, 0x61, 0x6c, 0x5f, 0x70, 0x72, 0x69, 0x63, 0x65, 0x18, 0x0a, 0x20, 0x01, 0x28,
	0x01, 0x52, 0x0a, 0x74, 0x6f, 0x74, 0x61, 0x6c, 0x50, 0x72, 0x69, 0x63, 0x65, 0x42, 0x6a, 0x0a,
	0x26, 0x6e, 0x65, 0x74, 0x2e, 0x62, 0x68, 0x6f, 0x6a, 0x70, 0x75, 0x72, 0x2e, 0x64, 0x69, 0x67,
	0x69, 0x74, 0x61, 0x6c, 0x2e, 0x62, 0x75, 0x73, 0x69, 0x6e, 0x65, 0x73, 0x73, 0x2e, 0x70, 0x75,
	0x72, 0x63, 0x68, 0x61, 0x73, 0x65, 0x73, 0x50, 0x01, 0x5a, 0x3e, 0x67, 0x69, 0x74, 0x68, 0x75,
	0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x62, 0x68, 0x6f, 0x6a, 0x70, 0x75, 0x72, 0x2f, 0x64, 0x69,
	0x67, 0x69, 0x74, 0x61, 0x6c, 0x2d, 0x62, 0x75, 0x73, 0x69, 0x6e, 0x65, 0x73, 0x73, 0x2f, 0x61,
	0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x70, 0x75, 0x72, 0x63, 0x68, 0x61, 0x73, 0x65, 0x73, 0x3b,
	0x70, 0x75, 0x72, 0x63, 0x68, 0x61, 0x73, 0x65, 0x73, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x33,
}

var (
	file_pkg_api_v1_purchases_purchase_message_proto_rawDescOnce sync.Once
	file_pkg_api_v1_purchases_purchase_message_proto_rawDescData = file_pkg_api_v1_purchases_purchase_message_proto_rawDesc
)

func file_pkg_api_v1_purchases_purchase_message_proto_rawDescGZIP() []byte {
	file_pkg_api_v1_purchases_purchase_message_proto_rawDescOnce.Do(func() {
		file_pkg_api_v1_purchases_purchase_message_proto_rawDescData = protoimpl.X.CompressGZIP(file_pkg_api_v1_purchases_purchase_message_proto_rawDescData)
	})
	return file_pkg_api_v1_purchases_purchase_message_proto_rawDescData
}

var file_pkg_api_v1_purchases_purchase_message_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_pkg_api_v1_purchases_purchase_message_proto_goTypes = []interface{}{
	(*Purchase)(nil),       // 0: v1.purchases.Purchase
	(*PurchaseDetail)(nil), // 1: v1.purchases.PurchaseDetail
	(*Supplier)(nil),       // 2: v1.purchases.Supplier
}
var file_pkg_api_v1_purchases_purchase_message_proto_depIdxs = []int32{
	2, // 0: v1.purchases.Purchase.supplier:type_name -> v1.purchases.Supplier
	1, // 1: v1.purchases.Purchase.details:type_name -> v1.purchases.PurchaseDetail
	2, // [2:2] is the sub-list for method output_type
	2, // [2:2] is the sub-list for method input_type
	2, // [2:2] is the sub-list for extension type_name
	2, // [2:2] is the sub-list for extension extendee
	0, // [0:2] is the sub-list for field type_name
}

func init() { file_pkg_api_v1_purchases_purchase_message_proto_init() }
func file_pkg_api_v1_purchases_purchase_message_proto_init() {
	if File_pkg_api_v1_purchases_purchase_message_proto != nil {
		return
	}
	file_pkg_api_v1_purchases_supplier_message_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_pkg_api_v1_purchases_purchase_message_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Purchase); i {
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
		file_pkg_api_v1_purchases_purchase_message_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PurchaseDetail); i {
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
			RawDescriptor: file_pkg_api_v1_purchases_purchase_message_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_pkg_api_v1_purchases_purchase_message_proto_goTypes,
		DependencyIndexes: file_pkg_api_v1_purchases_purchase_message_proto_depIdxs,
		MessageInfos:      file_pkg_api_v1_purchases_purchase_message_proto_msgTypes,
	}.Build()
	File_pkg_api_v1_purchases_purchase_message_proto = out.File
	file_pkg_api_v1_purchases_purchase_message_proto_rawDesc = nil
	file_pkg_api_v1_purchases_purchase_message_proto_goTypes = nil
	file_pkg_api_v1_purchases_purchase_message_proto_depIdxs = nil
}
