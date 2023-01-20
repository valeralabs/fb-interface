// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';



export class VerifyWebAuthnRes implements flatbuffers.IUnpackableObject<VerifyWebAuthnResT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):VerifyWebAuthnRes {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsVerifyWebAuthnRes(bb:flatbuffers.ByteBuffer, obj?:VerifyWebAuthnRes):VerifyWebAuthnRes {
  return (obj || new VerifyWebAuthnRes()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsVerifyWebAuthnRes(bb:flatbuffers.ByteBuffer, obj?:VerifyWebAuthnRes):VerifyWebAuthnRes {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new VerifyWebAuthnRes()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

token():string|null
token(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
token(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

static startVerifyWebAuthnRes(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addToken(builder:flatbuffers.Builder, tokenOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, tokenOffset, 0);
}

static endVerifyWebAuthnRes(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createVerifyWebAuthnRes(builder:flatbuffers.Builder, tokenOffset:flatbuffers.Offset):flatbuffers.Offset {
  VerifyWebAuthnRes.startVerifyWebAuthnRes(builder);
  VerifyWebAuthnRes.addToken(builder, tokenOffset);
  return VerifyWebAuthnRes.endVerifyWebAuthnRes(builder);
}

unpack(): VerifyWebAuthnResT {
  return new VerifyWebAuthnResT(
    this.token()
  );
}


unpackTo(_o: VerifyWebAuthnResT): void {
  _o.token = this.token();
}
}

export class VerifyWebAuthnResT implements flatbuffers.IGeneratedObject {
constructor(
  public token: string|Uint8Array|null = null
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const token = (this.token !== null ? builder.createString(this.token!) : 0);

  return VerifyWebAuthnRes.createVerifyWebAuthnRes(builder,
    token
  );
}
}
