// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';



/**
 * Kept permanently to look up a number. The number is hashed, peppered and 
 * then hashed again. To lookup the number, the client hashes the number and 
 * sends it to the server. The server peppers the hash and hashes it again.
 * We could work out the original phone number if we really wanted to, but
 * this is more for protecting against breaches of the database. The pepper is
 * a secret that's encrypted and only available to the server, even in the case
 * of a breach.
 */
export class VerifiedNumber implements flatbuffers.IUnpackableObject<VerifiedNumberT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):VerifiedNumber {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsVerifiedNumber(bb:flatbuffers.ByteBuffer, obj?:VerifiedNumber):VerifiedNumber {
  return (obj || new VerifiedNumber()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsVerifiedNumber(bb:flatbuffers.ByteBuffer, obj?:VerifiedNumber):VerifiedNumber {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new VerifiedNumber()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

/**
 * Display name of the user
 */
name():string|null
name(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
name(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * A link to the user's avatar image
 */
avatar():string|null
avatar(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
avatar(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * The account the number is registered to. 32 bytes, encoded with base58
 * This is used to contact the user's durable object
 */
id():string|null
id(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
id(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

static startVerifiedNumber(builder:flatbuffers.Builder) {
  builder.startObject(3);
}

static addName(builder:flatbuffers.Builder, nameOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, nameOffset, 0);
}

static addAvatar(builder:flatbuffers.Builder, avatarOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, avatarOffset, 0);
}

static addId(builder:flatbuffers.Builder, idOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, idOffset, 0);
}

static endVerifiedNumber(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createVerifiedNumber(builder:flatbuffers.Builder, nameOffset:flatbuffers.Offset, avatarOffset:flatbuffers.Offset, idOffset:flatbuffers.Offset):flatbuffers.Offset {
  VerifiedNumber.startVerifiedNumber(builder);
  VerifiedNumber.addName(builder, nameOffset);
  VerifiedNumber.addAvatar(builder, avatarOffset);
  VerifiedNumber.addId(builder, idOffset);
  return VerifiedNumber.endVerifiedNumber(builder);
}

unpack(): VerifiedNumberT {
  return new VerifiedNumberT(
    this.name(),
    this.avatar(),
    this.id()
  );
}


unpackTo(_o: VerifiedNumberT): void {
  _o.name = this.name();
  _o.avatar = this.avatar();
  _o.id = this.id();
}
}

export class VerifiedNumberT implements flatbuffers.IGeneratedObject {
constructor(
  public name: string|Uint8Array|null = null,
  public avatar: string|Uint8Array|null = null,
  public id: string|Uint8Array|null = null
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const name = (this.name !== null ? builder.createString(this.name!) : 0);
  const avatar = (this.avatar !== null ? builder.createString(this.avatar!) : 0);
  const id = (this.id !== null ? builder.createString(this.id!) : 0);

  return VerifiedNumber.createVerifiedNumber(builder,
    name,
    avatar,
    id
  );
}
}
