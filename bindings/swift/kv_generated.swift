// automatically generated by the FlatBuffers compiler, do not modify
// swiftlint:disable all
// swiftformat:disable all

import FlatBuffers

///  Entry that is kept temporarily for verification purposes
public struct Auth_KV_NumberRegistration: FlatBufferObject, Verifiable {

  static func validateVersion() { FlatBuffersVersion_23_1_4() }
  public var __buffer: ByteBuffer! { return _accessor.bb }
  private var _accessor: Table

  private init(_ t: Table) { _accessor = t }
  public init(_ bb: ByteBuffer, o: Int32) { _accessor = Table(bb: bb, position: o) }

  private enum VTOFFSET: VOffset {
    case name = 4
    case code = 6
    var v: Int32 { Int32(self.rawValue) }
    var p: VOffset { self.rawValue }
  }

  public var name: String? { let o = _accessor.offset(VTOFFSET.name.v); return o == 0 ? nil : _accessor.string(at: o) }
  public var nameSegmentArray: [UInt8]? { return _accessor.getVector(at: VTOFFSET.name.v) }
  public var code: UInt64 { let o = _accessor.offset(VTOFFSET.code.v); return o == 0 ? 0 : _accessor.readBuffer(of: UInt64.self, at: o) }
  @discardableResult public func mutate(code: UInt64) -> Bool {let o = _accessor.offset(VTOFFSET.code.v);  return _accessor.mutate(code, index: o) }
  public static func startNumberRegistration(_ fbb: inout FlatBufferBuilder) -> UOffset { fbb.startTable(with: 2) }
  public static func add(name: Offset, _ fbb: inout FlatBufferBuilder) { fbb.add(offset: name, at: VTOFFSET.name.p) }
  public static func add(code: UInt64, _ fbb: inout FlatBufferBuilder) { fbb.add(element: code, def: 0, at: VTOFFSET.code.p) }
  public static func endNumberRegistration(_ fbb: inout FlatBufferBuilder, start: UOffset) -> Offset { let end = Offset(offset: fbb.endTable(at: start)); return end }
  public static func createNumberRegistration(
    _ fbb: inout FlatBufferBuilder,
    nameOffset name: Offset = Offset(),
    code: UInt64 = 0
  ) -> Offset {
    let __start = Auth_KV_NumberRegistration.startNumberRegistration(&fbb)
    Auth_KV_NumberRegistration.add(name: name, &fbb)
    Auth_KV_NumberRegistration.add(code: code, &fbb)
    return Auth_KV_NumberRegistration.endNumberRegistration(&fbb, start: __start)
  }

  public static func verify<T>(_ verifier: inout Verifier, at position: Int, of type: T.Type) throws where T: Verifiable {
    var _v = try verifier.visitTable(at: position)
    try _v.visit(field: VTOFFSET.name.p, fieldName: "name", required: false, type: ForwardOffset<String>.self)
    try _v.visit(field: VTOFFSET.code.p, fieldName: "code", required: false, type: UInt64.self)
    _v.finish()
  }
}

///  Kept permanently to look up a number. The number is hashed, peppered and 
///  then hashed again. To lookup the number, the client hashes the number and 
///  sends it to the server. The server peppers the hash and hashes it again.
///  We could work out the original phone number if we really wanted to, but
///  this is more for protecting against breaches of the database. The pepper is
///  a secret that's encrypted and only available to the server, even in the case
///  of a breach.
public struct Auth_KV_VerifiedNumber: FlatBufferObject, Verifiable {

  static func validateVersion() { FlatBuffersVersion_23_1_4() }
  public var __buffer: ByteBuffer! { return _accessor.bb }
  private var _accessor: Table

  private init(_ t: Table) { _accessor = t }
  public init(_ bb: ByteBuffer, o: Int32) { _accessor = Table(bb: bb, position: o) }

  private enum VTOFFSET: VOffset {
    case name = 4
    case avatar = 6
    case id = 8
    var v: Int32 { Int32(self.rawValue) }
    var p: VOffset { self.rawValue }
  }

  ///  Display name of the user
  public var name: String? { let o = _accessor.offset(VTOFFSET.name.v); return o == 0 ? nil : _accessor.string(at: o) }
  public var nameSegmentArray: [UInt8]? { return _accessor.getVector(at: VTOFFSET.name.v) }
  ///  A link to the user's avatar image
  public var avatar: String? { let o = _accessor.offset(VTOFFSET.avatar.v); return o == 0 ? nil : _accessor.string(at: o) }
  public var avatarSegmentArray: [UInt8]? { return _accessor.getVector(at: VTOFFSET.avatar.v) }
  ///  The account the number is registered to. 32 bytes, encoded with base58
  ///  This is used to contact the user's durable object
  public var id: String? { let o = _accessor.offset(VTOFFSET.id.v); return o == 0 ? nil : _accessor.string(at: o) }
  public var idSegmentArray: [UInt8]? { return _accessor.getVector(at: VTOFFSET.id.v) }
  public static func startVerifiedNumber(_ fbb: inout FlatBufferBuilder) -> UOffset { fbb.startTable(with: 3) }
  public static func add(name: Offset, _ fbb: inout FlatBufferBuilder) { fbb.add(offset: name, at: VTOFFSET.name.p) }
  public static func add(avatar: Offset, _ fbb: inout FlatBufferBuilder) { fbb.add(offset: avatar, at: VTOFFSET.avatar.p) }
  public static func add(id: Offset, _ fbb: inout FlatBufferBuilder) { fbb.add(offset: id, at: VTOFFSET.id.p) }
  public static func endVerifiedNumber(_ fbb: inout FlatBufferBuilder, start: UOffset) -> Offset { let end = Offset(offset: fbb.endTable(at: start)); return end }
  public static func createVerifiedNumber(
    _ fbb: inout FlatBufferBuilder,
    nameOffset name: Offset = Offset(),
    avatarOffset avatar: Offset = Offset(),
    idOffset id: Offset = Offset()
  ) -> Offset {
    let __start = Auth_KV_VerifiedNumber.startVerifiedNumber(&fbb)
    Auth_KV_VerifiedNumber.add(name: name, &fbb)
    Auth_KV_VerifiedNumber.add(avatar: avatar, &fbb)
    Auth_KV_VerifiedNumber.add(id: id, &fbb)
    return Auth_KV_VerifiedNumber.endVerifiedNumber(&fbb, start: __start)
  }

  public static func verify<T>(_ verifier: inout Verifier, at position: Int, of type: T.Type) throws where T: Verifiable {
    var _v = try verifier.visitTable(at: position)
    try _v.visit(field: VTOFFSET.name.p, fieldName: "name", required: false, type: ForwardOffset<String>.self)
    try _v.visit(field: VTOFFSET.avatar.p, fieldName: "avatar", required: false, type: ForwardOffset<String>.self)
    try _v.visit(field: VTOFFSET.id.p, fieldName: "id", required: false, type: ForwardOffset<String>.self)
    _v.finish()
  }
}

