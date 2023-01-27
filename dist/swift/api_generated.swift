// automatically generated by the FlatBuffers compiler, do not modify
// swiftlint:disable all
// swiftformat:disable all

import FlatBuffers

public struct Auth_API_ErrorRes: FlatBufferObject, Verifiable {

  static func validateVersion() { FlatBuffersVersion_23_1_4() }
  public var __buffer: ByteBuffer! { return _accessor.bb }
  private var _accessor: Table

  private init(_ t: Table) { _accessor = t }
  public init(_ bb: ByteBuffer, o: Int32) { _accessor = Table(bb: bb, position: o) }

  private enum VTOFFSET: VOffset {
    case error = 4
    var v: Int32 { Int32(self.rawValue) }
    var p: VOffset { self.rawValue }
  }

  public var error: String? { let o = _accessor.offset(VTOFFSET.error.v); return o == 0 ? nil : _accessor.string(at: o) }
  public var errorSegmentArray: [UInt8]? { return _accessor.getVector(at: VTOFFSET.error.v) }
  public static func startErrorRes(_ fbb: inout FlatBufferBuilder) -> UOffset { fbb.startTable(with: 1) }
  public static func add(error: Offset, _ fbb: inout FlatBufferBuilder) { fbb.add(offset: error, at: VTOFFSET.error.p) }
  public static func endErrorRes(_ fbb: inout FlatBufferBuilder, start: UOffset) -> Offset { let end = Offset(offset: fbb.endTable(at: start)); return end }
  public static func createErrorRes(
    _ fbb: inout FlatBufferBuilder,
    errorOffset error: Offset = Offset()
  ) -> Offset {
    let __start = Auth_API_ErrorRes.startErrorRes(&fbb)
    Auth_API_ErrorRes.add(error: error, &fbb)
    return Auth_API_ErrorRes.endErrorRes(&fbb, start: __start)
  }

  public static func verify<T>(_ verifier: inout Verifier, at position: Int, of type: T.Type) throws where T: Verifiable {
    var _v = try verifier.visitTable(at: position)
    try _v.visit(field: VTOFFSET.error.p, fieldName: "error", required: false, type: ForwardOffset<String>.self)
    _v.finish()
  }
}

public struct Auth_API_RegisterNumberReq: FlatBufferObject, Verifiable {

  static func validateVersion() { FlatBuffersVersion_23_1_4() }
  public var __buffer: ByteBuffer! { return _accessor.bb }
  private var _accessor: Table

  private init(_ t: Table) { _accessor = t }
  public init(_ bb: ByteBuffer, o: Int32) { _accessor = Table(bb: bb, position: o) }

  private enum VTOFFSET: VOffset {
    case name = 4
    case number = 6
    var v: Int32 { Int32(self.rawValue) }
    var p: VOffset { self.rawValue }
  }

  ///  The name of the user to register.
  public var name: String? { let o = _accessor.offset(VTOFFSET.name.v); return o == 0 ? nil : _accessor.string(at: o) }
  public var nameSegmentArray: [UInt8]? { return _accessor.getVector(at: VTOFFSET.name.v) }
  ///  The phone number to register.
  public var number: String? { let o = _accessor.offset(VTOFFSET.number.v); return o == 0 ? nil : _accessor.string(at: o) }
  public var numberSegmentArray: [UInt8]? { return _accessor.getVector(at: VTOFFSET.number.v) }
  public static func startRegisterNumberReq(_ fbb: inout FlatBufferBuilder) -> UOffset { fbb.startTable(with: 2) }
  public static func add(name: Offset, _ fbb: inout FlatBufferBuilder) { fbb.add(offset: name, at: VTOFFSET.name.p) }
  public static func add(number: Offset, _ fbb: inout FlatBufferBuilder) { fbb.add(offset: number, at: VTOFFSET.number.p) }
  public static func endRegisterNumberReq(_ fbb: inout FlatBufferBuilder, start: UOffset) -> Offset { let end = Offset(offset: fbb.endTable(at: start)); return end }
  public static func createRegisterNumberReq(
    _ fbb: inout FlatBufferBuilder,
    nameOffset name: Offset = Offset(),
    numberOffset number: Offset = Offset()
  ) -> Offset {
    let __start = Auth_API_RegisterNumberReq.startRegisterNumberReq(&fbb)
    Auth_API_RegisterNumberReq.add(name: name, &fbb)
    Auth_API_RegisterNumberReq.add(number: number, &fbb)
    return Auth_API_RegisterNumberReq.endRegisterNumberReq(&fbb, start: __start)
  }

  public static func verify<T>(_ verifier: inout Verifier, at position: Int, of type: T.Type) throws where T: Verifiable {
    var _v = try verifier.visitTable(at: position)
    try _v.visit(field: VTOFFSET.name.p, fieldName: "name", required: false, type: ForwardOffset<String>.self)
    try _v.visit(field: VTOFFSET.number.p, fieldName: "number", required: false, type: ForwardOffset<String>.self)
    _v.finish()
  }
}

public struct Auth_API_RegisterNumberRes: FlatBufferObject, Verifiable {

  static func validateVersion() { FlatBuffersVersion_23_1_4() }
  public var __buffer: ByteBuffer! { return _accessor.bb }
  private var _accessor: Table

  private init(_ t: Table) { _accessor = t }
  public init(_ bb: ByteBuffer, o: Int32) { _accessor = Table(bb: bb, position: o) }

  private enum VTOFFSET: VOffset {
    case multiplier = 4
    var v: Int32 { Int32(self.rawValue) }
    var p: VOffset { self.rawValue }
  }

  ///  A value to multiply the code by for VerifyNumberReq
  public var multiplier: UInt32 { let o = _accessor.offset(VTOFFSET.multiplier.v); return o == 0 ? 0 : _accessor.readBuffer(of: UInt32.self, at: o) }
  @discardableResult public func mutate(multiplier: UInt32) -> Bool {let o = _accessor.offset(VTOFFSET.multiplier.v);  return _accessor.mutate(multiplier, index: o) }
  public static func startRegisterNumberRes(_ fbb: inout FlatBufferBuilder) -> UOffset { fbb.startTable(with: 1) }
  public static func add(multiplier: UInt32, _ fbb: inout FlatBufferBuilder) { fbb.add(element: multiplier, def: 0, at: VTOFFSET.multiplier.p) }
  public static func endRegisterNumberRes(_ fbb: inout FlatBufferBuilder, start: UOffset) -> Offset { let end = Offset(offset: fbb.endTable(at: start)); return end }
  public static func createRegisterNumberRes(
    _ fbb: inout FlatBufferBuilder,
    multiplier: UInt32 = 0
  ) -> Offset {
    let __start = Auth_API_RegisterNumberRes.startRegisterNumberRes(&fbb)
    Auth_API_RegisterNumberRes.add(multiplier: multiplier, &fbb)
    return Auth_API_RegisterNumberRes.endRegisterNumberRes(&fbb, start: __start)
  }

  public static func verify<T>(_ verifier: inout Verifier, at position: Int, of type: T.Type) throws where T: Verifiable {
    var _v = try verifier.visitTable(at: position)
    try _v.visit(field: VTOFFSET.multiplier.p, fieldName: "multiplier", required: false, type: UInt32.self)
    _v.finish()
  }
}

public struct Auth_API_VerifyNumberReq: FlatBufferObject, Verifiable {

  static func validateVersion() { FlatBuffersVersion_23_1_4() }
  public var __buffer: ByteBuffer! { return _accessor.bb }
  private var _accessor: Table

  private init(_ t: Table) { _accessor = t }
  public init(_ bb: ByteBuffer, o: Int32) { _accessor = Table(bb: bb, position: o) }

  private enum VTOFFSET: VOffset {
    case number = 4
    case code = 6
    var v: Int32 { Int32(self.rawValue) }
    var p: VOffset { self.rawValue }
  }

  ///  The user's number.
  public var number: String? { let o = _accessor.offset(VTOFFSET.number.v); return o == 0 ? nil : _accessor.string(at: o) }
  public var numberSegmentArray: [UInt8]? { return _accessor.getVector(at: VTOFFSET.number.v) }
  ///  The code to verify.
  public var code: UInt64 { let o = _accessor.offset(VTOFFSET.code.v); return o == 0 ? 0 : _accessor.readBuffer(of: UInt64.self, at: o) }
  @discardableResult public func mutate(code: UInt64) -> Bool {let o = _accessor.offset(VTOFFSET.code.v);  return _accessor.mutate(code, index: o) }
  public static func startVerifyNumberReq(_ fbb: inout FlatBufferBuilder) -> UOffset { fbb.startTable(with: 2) }
  public static func add(number: Offset, _ fbb: inout FlatBufferBuilder) { fbb.add(offset: number, at: VTOFFSET.number.p) }
  public static func add(code: UInt64, _ fbb: inout FlatBufferBuilder) { fbb.add(element: code, def: 0, at: VTOFFSET.code.p) }
  public static func endVerifyNumberReq(_ fbb: inout FlatBufferBuilder, start: UOffset) -> Offset { let end = Offset(offset: fbb.endTable(at: start)); return end }
  public static func createVerifyNumberReq(
    _ fbb: inout FlatBufferBuilder,
    numberOffset number: Offset = Offset(),
    code: UInt64 = 0
  ) -> Offset {
    let __start = Auth_API_VerifyNumberReq.startVerifyNumberReq(&fbb)
    Auth_API_VerifyNumberReq.add(number: number, &fbb)
    Auth_API_VerifyNumberReq.add(code: code, &fbb)
    return Auth_API_VerifyNumberReq.endVerifyNumberReq(&fbb, start: __start)
  }

  public static func verify<T>(_ verifier: inout Verifier, at position: Int, of type: T.Type) throws where T: Verifiable {
    var _v = try verifier.visitTable(at: position)
    try _v.visit(field: VTOFFSET.number.p, fieldName: "number", required: false, type: ForwardOffset<String>.self)
    try _v.visit(field: VTOFFSET.code.p, fieldName: "code", required: false, type: UInt64.self)
    _v.finish()
  }
}

public struct Auth_API_VerifyNumberRes: FlatBufferObject, Verifiable {

  static func validateVersion() { FlatBuffersVersion_23_1_4() }
  public var __buffer: ByteBuffer! { return _accessor.bb }
  private var _accessor: Table

  private init(_ t: Table) { _accessor = t }
  public init(_ bb: ByteBuffer, o: Int32) { _accessor = Table(bb: bb, position: o) }

  private enum VTOFFSET: VOffset {
    case options = 4
    var v: Int32 { Int32(self.rawValue) }
    var p: VOffset { self.rawValue }
  }

  ///  Options for registering a WebAuthn credential.
  public var options: Auth_WebAuthn_CredentialCreationOptions? { let o = _accessor.offset(VTOFFSET.options.v); return o == 0 ? nil : Auth_WebAuthn_CredentialCreationOptions(_accessor.bb, o: _accessor.indirect(o + _accessor.postion)) }
  public static func startVerifyNumberRes(_ fbb: inout FlatBufferBuilder) -> UOffset { fbb.startTable(with: 1) }
  public static func add(options: Offset, _ fbb: inout FlatBufferBuilder) { fbb.add(offset: options, at: VTOFFSET.options.p) }
  public static func endVerifyNumberRes(_ fbb: inout FlatBufferBuilder, start: UOffset) -> Offset { let end = Offset(offset: fbb.endTable(at: start)); return end }
  public static func createVerifyNumberRes(
    _ fbb: inout FlatBufferBuilder,
    optionsOffset options: Offset = Offset()
  ) -> Offset {
    let __start = Auth_API_VerifyNumberRes.startVerifyNumberRes(&fbb)
    Auth_API_VerifyNumberRes.add(options: options, &fbb)
    return Auth_API_VerifyNumberRes.endVerifyNumberRes(&fbb, start: __start)
  }

  public static func verify<T>(_ verifier: inout Verifier, at position: Int, of type: T.Type) throws where T: Verifiable {
    var _v = try verifier.visitTable(at: position)
    try _v.visit(field: VTOFFSET.options.p, fieldName: "options", required: false, type: ForwardOffset<Auth_WebAuthn_CredentialCreationOptions>.self)
    _v.finish()
  }
}

public struct Auth_API_VerifyWebAuthnReq: FlatBufferObject, Verifiable {

  static func validateVersion() { FlatBuffersVersion_23_1_4() }
  public var __buffer: ByteBuffer! { return _accessor.bb }
  private var _accessor: Table

  private init(_ t: Table) { _accessor = t }
  public init(_ bb: ByteBuffer, o: Int32) { _accessor = Table(bb: bb, position: o) }

  private enum VTOFFSET: VOffset {
    case name = 4
    case id = 6
    case webauthn = 8
    var v: Int32 { Int32(self.rawValue) }
    var p: VOffset { self.rawValue }
  }

  public var name: String? { let o = _accessor.offset(VTOFFSET.name.v); return o == 0 ? nil : _accessor.string(at: o) }
  public var nameSegmentArray: [UInt8]? { return _accessor.getVector(at: VTOFFSET.name.v) }
  public var id: String? { let o = _accessor.offset(VTOFFSET.id.v); return o == 0 ? nil : _accessor.string(at: o) }
  public var idSegmentArray: [UInt8]? { return _accessor.getVector(at: VTOFFSET.id.v) }
  public var webauthn: Auth_WebAuthn_RegisterPublicKeyCredential? { let o = _accessor.offset(VTOFFSET.webauthn.v); return o == 0 ? nil : Auth_WebAuthn_RegisterPublicKeyCredential(_accessor.bb, o: _accessor.indirect(o + _accessor.postion)) }
  public static func startVerifyWebAuthnReq(_ fbb: inout FlatBufferBuilder) -> UOffset { fbb.startTable(with: 3) }
  public static func add(name: Offset, _ fbb: inout FlatBufferBuilder) { fbb.add(offset: name, at: VTOFFSET.name.p) }
  public static func add(id: Offset, _ fbb: inout FlatBufferBuilder) { fbb.add(offset: id, at: VTOFFSET.id.p) }
  public static func add(webauthn: Offset, _ fbb: inout FlatBufferBuilder) { fbb.add(offset: webauthn, at: VTOFFSET.webauthn.p) }
  public static func endVerifyWebAuthnReq(_ fbb: inout FlatBufferBuilder, start: UOffset) -> Offset { let end = Offset(offset: fbb.endTable(at: start)); return end }
  public static func createVerifyWebAuthnReq(
    _ fbb: inout FlatBufferBuilder,
    nameOffset name: Offset = Offset(),
    idOffset id: Offset = Offset(),
    webauthnOffset webauthn: Offset = Offset()
  ) -> Offset {
    let __start = Auth_API_VerifyWebAuthnReq.startVerifyWebAuthnReq(&fbb)
    Auth_API_VerifyWebAuthnReq.add(name: name, &fbb)
    Auth_API_VerifyWebAuthnReq.add(id: id, &fbb)
    Auth_API_VerifyWebAuthnReq.add(webauthn: webauthn, &fbb)
    return Auth_API_VerifyWebAuthnReq.endVerifyWebAuthnReq(&fbb, start: __start)
  }

  public static func verify<T>(_ verifier: inout Verifier, at position: Int, of type: T.Type) throws where T: Verifiable {
    var _v = try verifier.visitTable(at: position)
    try _v.visit(field: VTOFFSET.name.p, fieldName: "name", required: false, type: ForwardOffset<String>.self)
    try _v.visit(field: VTOFFSET.id.p, fieldName: "id", required: false, type: ForwardOffset<String>.self)
    try _v.visit(field: VTOFFSET.webauthn.p, fieldName: "webauthn", required: false, type: ForwardOffset<Auth_WebAuthn_RegisterPublicKeyCredential>.self)
    _v.finish()
  }
}

public struct Auth_API_VerifyWebAuthnRes: FlatBufferObject, Verifiable {

  static func validateVersion() { FlatBuffersVersion_23_1_4() }
  public var __buffer: ByteBuffer! { return _accessor.bb }
  private var _accessor: Table

  private init(_ t: Table) { _accessor = t }
  public init(_ bb: ByteBuffer, o: Int32) { _accessor = Table(bb: bb, position: o) }

  private enum VTOFFSET: VOffset {
    case token = 4
    var v: Int32 { Int32(self.rawValue) }
    var p: VOffset { self.rawValue }
  }

  public var token: String? { let o = _accessor.offset(VTOFFSET.token.v); return o == 0 ? nil : _accessor.string(at: o) }
  public var tokenSegmentArray: [UInt8]? { return _accessor.getVector(at: VTOFFSET.token.v) }
  public static func startVerifyWebAuthnRes(_ fbb: inout FlatBufferBuilder) -> UOffset { fbb.startTable(with: 1) }
  public static func add(token: Offset, _ fbb: inout FlatBufferBuilder) { fbb.add(offset: token, at: VTOFFSET.token.p) }
  public static func endVerifyWebAuthnRes(_ fbb: inout FlatBufferBuilder, start: UOffset) -> Offset { let end = Offset(offset: fbb.endTable(at: start)); return end }
  public static func createVerifyWebAuthnRes(
    _ fbb: inout FlatBufferBuilder,
    tokenOffset token: Offset = Offset()
  ) -> Offset {
    let __start = Auth_API_VerifyWebAuthnRes.startVerifyWebAuthnRes(&fbb)
    Auth_API_VerifyWebAuthnRes.add(token: token, &fbb)
    return Auth_API_VerifyWebAuthnRes.endVerifyWebAuthnRes(&fbb, start: __start)
  }

  public static func verify<T>(_ verifier: inout Verifier, at position: Int, of type: T.Type) throws where T: Verifiable {
    var _v = try verifier.visitTable(at: position)
    try _v.visit(field: VTOFFSET.token.p, fieldName: "token", required: false, type: ForwardOffset<String>.self)
    _v.finish()
  }
}

