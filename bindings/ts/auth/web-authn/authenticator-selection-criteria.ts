// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { AuthenticatorAttachment } from '../../auth/web-authn/authenticator-attachment.js';
import { UserVerificationPolicy } from '../../auth/web-authn/user-verification-policy.js';


export class AuthenticatorSelectionCriteria implements flatbuffers.IUnpackableObject<AuthenticatorSelectionCriteriaT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):AuthenticatorSelectionCriteria {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsAuthenticatorSelectionCriteria(bb:flatbuffers.ByteBuffer, obj?:AuthenticatorSelectionCriteria):AuthenticatorSelectionCriteria {
  return (obj || new AuthenticatorSelectionCriteria()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsAuthenticatorSelectionCriteria(bb:flatbuffers.ByteBuffer, obj?:AuthenticatorSelectionCriteria):AuthenticatorSelectionCriteria {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new AuthenticatorSelectionCriteria()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

/**
 * The authenticator attachment mode.
 */
authenticatorAttachment():AuthenticatorAttachment {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : AuthenticatorAttachment.Platform;
}

/**
 * Whether or not the authenticator must be resident.
 */
requireResidentKey():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

/**
 * The list of authenticator transports that are allowed.
 */
userVerification():UserVerificationPolicy {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : UserVerificationPolicy.Preferred;
}

static startAuthenticatorSelectionCriteria(builder:flatbuffers.Builder) {
  builder.startObject(3);
}

static addAuthenticatorAttachment(builder:flatbuffers.Builder, authenticatorAttachment:AuthenticatorAttachment) {
  builder.addFieldInt8(0, authenticatorAttachment, AuthenticatorAttachment.Platform);
}

static addRequireResidentKey(builder:flatbuffers.Builder, requireResidentKey:boolean) {
  builder.addFieldInt8(1, +requireResidentKey, +false);
}

static addUserVerification(builder:flatbuffers.Builder, userVerification:UserVerificationPolicy) {
  builder.addFieldInt8(2, userVerification, UserVerificationPolicy.Preferred);
}

static endAuthenticatorSelectionCriteria(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createAuthenticatorSelectionCriteria(builder:flatbuffers.Builder, authenticatorAttachment:AuthenticatorAttachment, requireResidentKey:boolean, userVerification:UserVerificationPolicy):flatbuffers.Offset {
  AuthenticatorSelectionCriteria.startAuthenticatorSelectionCriteria(builder);
  AuthenticatorSelectionCriteria.addAuthenticatorAttachment(builder, authenticatorAttachment);
  AuthenticatorSelectionCriteria.addRequireResidentKey(builder, requireResidentKey);
  AuthenticatorSelectionCriteria.addUserVerification(builder, userVerification);
  return AuthenticatorSelectionCriteria.endAuthenticatorSelectionCriteria(builder);
}

unpack(): AuthenticatorSelectionCriteriaT {
  return new AuthenticatorSelectionCriteriaT(
    this.authenticatorAttachment(),
    this.requireResidentKey(),
    this.userVerification()
  );
}


unpackTo(_o: AuthenticatorSelectionCriteriaT): void {
  _o.authenticatorAttachment = this.authenticatorAttachment();
  _o.requireResidentKey = this.requireResidentKey();
  _o.userVerification = this.userVerification();
}
}

export class AuthenticatorSelectionCriteriaT implements flatbuffers.IGeneratedObject {
constructor(
  public authenticatorAttachment: AuthenticatorAttachment = AuthenticatorAttachment.Platform,
  public requireResidentKey: boolean = false,
  public userVerification: UserVerificationPolicy = UserVerificationPolicy.Preferred
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  return AuthenticatorSelectionCriteria.createAuthenticatorSelectionCriteria(builder,
    this.authenticatorAttachment,
    this.requireResidentKey,
    this.userVerification
  );
}
}
