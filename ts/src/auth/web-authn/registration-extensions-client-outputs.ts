// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { CredentialProtectionPolicy } from '../../auth/web-authn/credential-protection-policy.js';


export class RegistrationExtensionsClientOutputs implements flatbuffers.IUnpackableObject<RegistrationExtensionsClientOutputsT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):RegistrationExtensionsClientOutputs {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsRegistrationExtensionsClientOutputs(bb:flatbuffers.ByteBuffer, obj?:RegistrationExtensionsClientOutputs):RegistrationExtensionsClientOutputs {
  return (obj || new RegistrationExtensionsClientOutputs()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsRegistrationExtensionsClientOutputs(bb:flatbuffers.ByteBuffer, obj?:RegistrationExtensionsClientOutputs):RegistrationExtensionsClientOutputs {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new RegistrationExtensionsClientOutputs()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

appId():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

credProps():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

hmacSecret():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

credProtect():CredentialProtectionPolicy {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : CredentialProtectionPolicy.UserVerificationOptional;
}

minPinLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.readUint32(this.bb_pos + offset) : 0;
}

static startRegistrationExtensionsClientOutputs(builder:flatbuffers.Builder) {
  builder.startObject(5);
}

static addAppId(builder:flatbuffers.Builder, appId:boolean) {
  builder.addFieldInt8(0, +appId, +false);
}

static addCredProps(builder:flatbuffers.Builder, credProps:boolean) {
  builder.addFieldInt8(1, +credProps, +false);
}

static addHmacSecret(builder:flatbuffers.Builder, hmacSecret:boolean) {
  builder.addFieldInt8(2, +hmacSecret, +false);
}

static addCredProtect(builder:flatbuffers.Builder, credProtect:CredentialProtectionPolicy) {
  builder.addFieldInt8(3, credProtect, CredentialProtectionPolicy.UserVerificationOptional);
}

static addMinPinLength(builder:flatbuffers.Builder, minPinLength:number) {
  builder.addFieldInt32(4, minPinLength, 0);
}

static endRegistrationExtensionsClientOutputs(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createRegistrationExtensionsClientOutputs(builder:flatbuffers.Builder, appId:boolean, credProps:boolean, hmacSecret:boolean, credProtect:CredentialProtectionPolicy, minPinLength:number):flatbuffers.Offset {
  RegistrationExtensionsClientOutputs.startRegistrationExtensionsClientOutputs(builder);
  RegistrationExtensionsClientOutputs.addAppId(builder, appId);
  RegistrationExtensionsClientOutputs.addCredProps(builder, credProps);
  RegistrationExtensionsClientOutputs.addHmacSecret(builder, hmacSecret);
  RegistrationExtensionsClientOutputs.addCredProtect(builder, credProtect);
  RegistrationExtensionsClientOutputs.addMinPinLength(builder, minPinLength);
  return RegistrationExtensionsClientOutputs.endRegistrationExtensionsClientOutputs(builder);
}

unpack(): RegistrationExtensionsClientOutputsT {
  return new RegistrationExtensionsClientOutputsT(
    this.appId(),
    this.credProps(),
    this.hmacSecret(),
    this.credProtect(),
    this.minPinLength()
  );
}


unpackTo(_o: RegistrationExtensionsClientOutputsT): void {
  _o.appId = this.appId();
  _o.credProps = this.credProps();
  _o.hmacSecret = this.hmacSecret();
  _o.credProtect = this.credProtect();
  _o.minPinLength = this.minPinLength();
}
}

export class RegistrationExtensionsClientOutputsT implements flatbuffers.IGeneratedObject {
constructor(
  public appId: boolean = false,
  public credProps: boolean = false,
  public hmacSecret: boolean = false,
  public credProtect: CredentialProtectionPolicy = CredentialProtectionPolicy.UserVerificationOptional,
  public minPinLength: number = 0
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  return RegistrationExtensionsClientOutputs.createRegistrationExtensionsClientOutputs(builder,
    this.appId,
    this.credProps,
    this.hmacSecret,
    this.credProtect,
    this.minPinLength
  );
}
}
