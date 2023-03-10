// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { CredProtect, CredProtectT } from '../../auth/web-authn/cred-protect.js';


export class RequestRegistrationExtensions implements flatbuffers.IUnpackableObject<RequestRegistrationExtensionsT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):RequestRegistrationExtensions {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsRequestRegistrationExtensions(bb:flatbuffers.ByteBuffer, obj?:RequestRegistrationExtensions):RequestRegistrationExtensions {
  return (obj || new RequestRegistrationExtensions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsRequestRegistrationExtensions(bb:flatbuffers.ByteBuffer, obj?:RequestRegistrationExtensions):RequestRegistrationExtensions {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new RequestRegistrationExtensions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

/**
 * The `credProtect` extension options
 */
credProtect(obj?:CredProtect):CredProtect|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new CredProtect()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

/**
 * ⚠️  - Browsers do not support this!
 */
uvm():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

/**
 * ⚠️  - This extension result is always unsigned, and only indicates if the
 * browser *requests* a residentKey to be created. It has no bearing on the
 * true rk state of the credential.
 */
credProps():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

/**
 * CTAP2.1 Minumum pin length
 */
minPinLength():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

/**
 * ⚠️  - Browsers support the *creation* of the secret, but not the retrieval of it.
 * CTAP2.1 create hmac secret
 */
hmacCreateSecret():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

static startRequestRegistrationExtensions(builder:flatbuffers.Builder) {
  builder.startObject(5);
}

static addCredProtect(builder:flatbuffers.Builder, credProtectOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, credProtectOffset, 0);
}

static addUvm(builder:flatbuffers.Builder, uvm:boolean) {
  builder.addFieldInt8(1, +uvm, +false);
}

static addCredProps(builder:flatbuffers.Builder, credProps:boolean) {
  builder.addFieldInt8(2, +credProps, +false);
}

static addMinPinLength(builder:flatbuffers.Builder, minPinLength:boolean) {
  builder.addFieldInt8(3, +minPinLength, +false);
}

static addHmacCreateSecret(builder:flatbuffers.Builder, hmacCreateSecret:boolean) {
  builder.addFieldInt8(4, +hmacCreateSecret, +false);
}

static endRequestRegistrationExtensions(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createRequestRegistrationExtensions(builder:flatbuffers.Builder, credProtectOffset:flatbuffers.Offset, uvm:boolean, credProps:boolean, minPinLength:boolean, hmacCreateSecret:boolean):flatbuffers.Offset {
  RequestRegistrationExtensions.startRequestRegistrationExtensions(builder);
  RequestRegistrationExtensions.addCredProtect(builder, credProtectOffset);
  RequestRegistrationExtensions.addUvm(builder, uvm);
  RequestRegistrationExtensions.addCredProps(builder, credProps);
  RequestRegistrationExtensions.addMinPinLength(builder, minPinLength);
  RequestRegistrationExtensions.addHmacCreateSecret(builder, hmacCreateSecret);
  return RequestRegistrationExtensions.endRequestRegistrationExtensions(builder);
}

unpack(): RequestRegistrationExtensionsT {
  return new RequestRegistrationExtensionsT(
    (this.credProtect() !== null ? this.credProtect()!.unpack() : null),
    this.uvm(),
    this.credProps(),
    this.minPinLength(),
    this.hmacCreateSecret()
  );
}


unpackTo(_o: RequestRegistrationExtensionsT): void {
  _o.credProtect = (this.credProtect() !== null ? this.credProtect()!.unpack() : null);
  _o.uvm = this.uvm();
  _o.credProps = this.credProps();
  _o.minPinLength = this.minPinLength();
  _o.hmacCreateSecret = this.hmacCreateSecret();
}
}

export class RequestRegistrationExtensionsT implements flatbuffers.IGeneratedObject {
constructor(
  public credProtect: CredProtectT|null = null,
  public uvm: boolean = false,
  public credProps: boolean = false,
  public minPinLength: boolean = false,
  public hmacCreateSecret: boolean = false
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const credProtect = (this.credProtect !== null ? this.credProtect!.pack(builder) : 0);

  return RequestRegistrationExtensions.createRequestRegistrationExtensions(builder,
    credProtect,
    this.uvm,
    this.credProps,
    this.minPinLength,
    this.hmacCreateSecret
  );
}
}
