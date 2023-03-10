// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { AttestationConveyancePreference } from '../../auth/web-authn/attestation-conveyance-preference.js';
import { AuthenticatorSelectionCriteria, AuthenticatorSelectionCriteriaT } from '../../auth/web-authn/authenticator-selection-criteria.js';
import { PubKeyCredParams, PubKeyCredParamsT } from '../../auth/web-authn/pub-key-cred-params.js';
import { PublicKeyCredentialDescriptor, PublicKeyCredentialDescriptorT } from '../../auth/web-authn/public-key-credential-descriptor.js';
import { RelyingParty, RelyingPartyT } from '../../auth/web-authn/relying-party.js';
import { RequestRegistrationExtensions, RequestRegistrationExtensionsT } from '../../auth/web-authn/request-registration-extensions.js';
import { User, UserT } from '../../auth/web-authn/user.js';


export class CredentialCreationOptions implements flatbuffers.IUnpackableObject<CredentialCreationOptionsT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):CredentialCreationOptions {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsCredentialCreationOptions(bb:flatbuffers.ByteBuffer, obj?:CredentialCreationOptions):CredentialCreationOptions {
  return (obj || new CredentialCreationOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsCredentialCreationOptions(bb:flatbuffers.ByteBuffer, obj?:CredentialCreationOptions):CredentialCreationOptions {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new CredentialCreationOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

/**
 * The relying party 
 */
rp(obj?:RelyingParty):RelyingParty|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new RelyingParty()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

/**
 * The user.
 */
user(obj?:User):User|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? (obj || new User()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

/**
 * The one-time challenge for the credential to sign
 */
challenge():string|null
challenge(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
challenge(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * The set of cryptographic types allowed by this server.
 */
pubKeyCredParams(index: number, obj?:PubKeyCredParams):PubKeyCredParams|null {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? (obj || new PubKeyCredParams()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

pubKeyCredParamsLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

/**
 * The timeout for the authenticator to stop accepting the operation
 */
timeout():number {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.readUint32(this.bb_pos + offset) : 60000;
}

/**
 * The requested attestation level from the device.
 */
attestation():AttestationConveyancePreference {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : AttestationConveyancePreference.None;
}

/**
 * The list of credentials that are excluded from this operation.
 */
excludeCredentials(index: number, obj?:PublicKeyCredentialDescriptor):PublicKeyCredentialDescriptor|null {
  const offset = this.bb!.__offset(this.bb_pos, 16);
  return offset ? (obj || new PublicKeyCredentialDescriptor()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

excludeCredentialsLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 16);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

/**
 * The list of authenticators that are allowed for this operation.
 */
authenticatorSelection(obj?:AuthenticatorSelectionCriteria):AuthenticatorSelectionCriteria|null {
  const offset = this.bb!.__offset(this.bb_pos, 18);
  return offset ? (obj || new AuthenticatorSelectionCriteria()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

/**
 * The extensions that are allowed for this operation.
 */
extensions(obj?:RequestRegistrationExtensions):RequestRegistrationExtensions|null {
  const offset = this.bb!.__offset(this.bb_pos, 20);
  return offset ? (obj || new RequestRegistrationExtensions()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

static startCredentialCreationOptions(builder:flatbuffers.Builder) {
  builder.startObject(9);
}

static addRp(builder:flatbuffers.Builder, rpOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, rpOffset, 0);
}

static addUser(builder:flatbuffers.Builder, userOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, userOffset, 0);
}

static addChallenge(builder:flatbuffers.Builder, challengeOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, challengeOffset, 0);
}

static addPubKeyCredParams(builder:flatbuffers.Builder, pubKeyCredParamsOffset:flatbuffers.Offset) {
  builder.addFieldOffset(3, pubKeyCredParamsOffset, 0);
}

static createPubKeyCredParamsVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startPubKeyCredParamsVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static addTimeout(builder:flatbuffers.Builder, timeout:number) {
  builder.addFieldInt32(4, timeout, 60000);
}

static addAttestation(builder:flatbuffers.Builder, attestation:AttestationConveyancePreference) {
  builder.addFieldInt8(5, attestation, AttestationConveyancePreference.None);
}

static addExcludeCredentials(builder:flatbuffers.Builder, excludeCredentialsOffset:flatbuffers.Offset) {
  builder.addFieldOffset(6, excludeCredentialsOffset, 0);
}

static createExcludeCredentialsVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startExcludeCredentialsVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static addAuthenticatorSelection(builder:flatbuffers.Builder, authenticatorSelectionOffset:flatbuffers.Offset) {
  builder.addFieldOffset(7, authenticatorSelectionOffset, 0);
}

static addExtensions(builder:flatbuffers.Builder, extensionsOffset:flatbuffers.Offset) {
  builder.addFieldOffset(8, extensionsOffset, 0);
}

static endCredentialCreationOptions(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}


unpack(): CredentialCreationOptionsT {
  return new CredentialCreationOptionsT(
    (this.rp() !== null ? this.rp()!.unpack() : null),
    (this.user() !== null ? this.user()!.unpack() : null),
    this.challenge(),
    this.bb!.createObjList<PubKeyCredParams, PubKeyCredParamsT>(this.pubKeyCredParams.bind(this), this.pubKeyCredParamsLength()),
    this.timeout(),
    this.attestation(),
    this.bb!.createObjList<PublicKeyCredentialDescriptor, PublicKeyCredentialDescriptorT>(this.excludeCredentials.bind(this), this.excludeCredentialsLength()),
    (this.authenticatorSelection() !== null ? this.authenticatorSelection()!.unpack() : null),
    (this.extensions() !== null ? this.extensions()!.unpack() : null)
  );
}


unpackTo(_o: CredentialCreationOptionsT): void {
  _o.rp = (this.rp() !== null ? this.rp()!.unpack() : null);
  _o.user = (this.user() !== null ? this.user()!.unpack() : null);
  _o.challenge = this.challenge();
  _o.pubKeyCredParams = this.bb!.createObjList<PubKeyCredParams, PubKeyCredParamsT>(this.pubKeyCredParams.bind(this), this.pubKeyCredParamsLength());
  _o.timeout = this.timeout();
  _o.attestation = this.attestation();
  _o.excludeCredentials = this.bb!.createObjList<PublicKeyCredentialDescriptor, PublicKeyCredentialDescriptorT>(this.excludeCredentials.bind(this), this.excludeCredentialsLength());
  _o.authenticatorSelection = (this.authenticatorSelection() !== null ? this.authenticatorSelection()!.unpack() : null);
  _o.extensions = (this.extensions() !== null ? this.extensions()!.unpack() : null);
}
}

export class CredentialCreationOptionsT implements flatbuffers.IGeneratedObject {
constructor(
  public rp: RelyingPartyT|null = null,
  public user: UserT|null = null,
  public challenge: string|Uint8Array|null = null,
  public pubKeyCredParams: (PubKeyCredParamsT)[] = [],
  public timeout: number = 60000,
  public attestation: AttestationConveyancePreference = AttestationConveyancePreference.None,
  public excludeCredentials: (PublicKeyCredentialDescriptorT)[] = [],
  public authenticatorSelection: AuthenticatorSelectionCriteriaT|null = null,
  public extensions: RequestRegistrationExtensionsT|null = null
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const rp = (this.rp !== null ? this.rp!.pack(builder) : 0);
  const user = (this.user !== null ? this.user!.pack(builder) : 0);
  const challenge = (this.challenge !== null ? builder.createString(this.challenge!) : 0);
  const pubKeyCredParams = CredentialCreationOptions.createPubKeyCredParamsVector(builder, builder.createObjectOffsetList(this.pubKeyCredParams));
  const excludeCredentials = CredentialCreationOptions.createExcludeCredentialsVector(builder, builder.createObjectOffsetList(this.excludeCredentials));
  const authenticatorSelection = (this.authenticatorSelection !== null ? this.authenticatorSelection!.pack(builder) : 0);
  const extensions = (this.extensions !== null ? this.extensions!.pack(builder) : 0);

  CredentialCreationOptions.startCredentialCreationOptions(builder);
  CredentialCreationOptions.addRp(builder, rp);
  CredentialCreationOptions.addUser(builder, user);
  CredentialCreationOptions.addChallenge(builder, challenge);
  CredentialCreationOptions.addPubKeyCredParams(builder, pubKeyCredParams);
  CredentialCreationOptions.addTimeout(builder, this.timeout);
  CredentialCreationOptions.addAttestation(builder, this.attestation);
  CredentialCreationOptions.addExcludeCredentials(builder, excludeCredentials);
  CredentialCreationOptions.addAuthenticatorSelection(builder, authenticatorSelection);
  CredentialCreationOptions.addExtensions(builder, extensions);

  return CredentialCreationOptions.endCredentialCreationOptions(builder);
}
}
