// automatically generated by the FlatBuffers compiler, do not modify

package Auth.WebAuthn

import com.google.flatbuffers.BaseVector
import com.google.flatbuffers.BooleanVector
import com.google.flatbuffers.ByteVector
import com.google.flatbuffers.Constants
import com.google.flatbuffers.DoubleVector
import com.google.flatbuffers.FlatBufferBuilder
import com.google.flatbuffers.FloatVector
import com.google.flatbuffers.LongVector
import com.google.flatbuffers.StringVector
import com.google.flatbuffers.Struct
import com.google.flatbuffers.Table
import com.google.flatbuffers.UnionVector
import java.nio.ByteBuffer
import java.nio.ByteOrder
import kotlin.math.sign

@Suppress("unused")
@kotlin.ExperimentalUnsignedTypes
class CredentialCreationOptions : Table() {

    fun __init(_i: Int, _bb: ByteBuffer)  {
        __reset(_i, _bb)
    }
    fun __assign(_i: Int, _bb: ByteBuffer) : CredentialCreationOptions {
        __init(_i, _bb)
        return this
    }
    /**
     * The relying party 
     */
    val rp : Auth.WebAuthn.RelyingParty? get() = rp(Auth.WebAuthn.RelyingParty())
    fun rp(obj: Auth.WebAuthn.RelyingParty) : Auth.WebAuthn.RelyingParty? {
        val o = __offset(4)
        return if (o != 0) {
            obj.__assign(__indirect(o + bb_pos), bb)
        } else {
            null
        }
    }
    /**
     * The user.
     */
    val user : Auth.WebAuthn.User? get() = user(Auth.WebAuthn.User())
    fun user(obj: Auth.WebAuthn.User) : Auth.WebAuthn.User? {
        val o = __offset(6)
        return if (o != 0) {
            obj.__assign(__indirect(o + bb_pos), bb)
        } else {
            null
        }
    }
    /**
     * The one-time challenge for the credential to sign
     */
    val challenge : String?
        get() {
            val o = __offset(8)
            return if (o != 0) {
                __string(o + bb_pos)
            } else {
                null
            }
        }
    val challengeAsByteBuffer : ByteBuffer get() = __vector_as_bytebuffer(8, 1)
    fun challengeInByteBuffer(_bb: ByteBuffer) : ByteBuffer = __vector_in_bytebuffer(_bb, 8, 1)
    /**
     * The set of cryptographic types allowed by this server.
     */
    fun pubKeyCredParams(j: Int) : Auth.WebAuthn.PubKeyCredParams? = pubKeyCredParams(Auth.WebAuthn.PubKeyCredParams(), j)
    fun pubKeyCredParams(obj: Auth.WebAuthn.PubKeyCredParams, j: Int) : Auth.WebAuthn.PubKeyCredParams? {
        val o = __offset(10)
        return if (o != 0) {
            obj.__assign(__indirect(__vector(o) + j * 4), bb)
        } else {
            null
        }
    }
    val pubKeyCredParamsLength : Int
        get() {
            val o = __offset(10); return if (o != 0) __vector_len(o) else 0
        }
    /**
     * The timeout for the authenticator to stop accepting the operation
     */
    val timeout : UInt
        get() {
            val o = __offset(12)
            return if(o != 0) bb.getInt(o + bb_pos).toUInt() else 60000u
        }
    fun mutateTimeout(timeout: UInt) : Boolean {
        val o = __offset(12)
        return if (o != 0) {
            bb.putInt(o + bb_pos, timeout.toInt())
            true
        } else {
            false
        }
    }
    /**
     * The requested attestation level from the device.
     */
    val attestation : Byte
        get() {
            val o = __offset(14)
            return if(o != 0) bb.get(o + bb_pos) else 0
        }
    fun mutateAttestation(attestation: Byte) : Boolean {
        val o = __offset(14)
        return if (o != 0) {
            bb.put(o + bb_pos, attestation)
            true
        } else {
            false
        }
    }
    /**
     * The list of credentials that are excluded from this operation.
     */
    fun excludeCredentials(j: Int) : Auth.WebAuthn.PublicKeyCredentialDescriptor? = excludeCredentials(Auth.WebAuthn.PublicKeyCredentialDescriptor(), j)
    fun excludeCredentials(obj: Auth.WebAuthn.PublicKeyCredentialDescriptor, j: Int) : Auth.WebAuthn.PublicKeyCredentialDescriptor? {
        val o = __offset(16)
        return if (o != 0) {
            obj.__assign(__indirect(__vector(o) + j * 4), bb)
        } else {
            null
        }
    }
    val excludeCredentialsLength : Int
        get() {
            val o = __offset(16); return if (o != 0) __vector_len(o) else 0
        }
    /**
     * The list of authenticators that are allowed for this operation.
     */
    val authenticatorSelection : Auth.WebAuthn.AuthenticatorSelectionCriteria? get() = authenticatorSelection(Auth.WebAuthn.AuthenticatorSelectionCriteria())
    fun authenticatorSelection(obj: Auth.WebAuthn.AuthenticatorSelectionCriteria) : Auth.WebAuthn.AuthenticatorSelectionCriteria? {
        val o = __offset(18)
        return if (o != 0) {
            obj.__assign(__indirect(o + bb_pos), bb)
        } else {
            null
        }
    }
    /**
     * The extensions that are allowed for this operation.
     */
    val extensions : Auth.WebAuthn.RequestRegistrationExtensions? get() = extensions(Auth.WebAuthn.RequestRegistrationExtensions())
    fun extensions(obj: Auth.WebAuthn.RequestRegistrationExtensions) : Auth.WebAuthn.RequestRegistrationExtensions? {
        val o = __offset(20)
        return if (o != 0) {
            obj.__assign(__indirect(o + bb_pos), bb)
        } else {
            null
        }
    }
    companion object {
        fun validateVersion() = Constants.FLATBUFFERS_23_1_4()
        fun getRootAsCredentialCreationOptions(_bb: ByteBuffer): CredentialCreationOptions = getRootAsCredentialCreationOptions(_bb, CredentialCreationOptions())
        fun getRootAsCredentialCreationOptions(_bb: ByteBuffer, obj: CredentialCreationOptions): CredentialCreationOptions {
            _bb.order(ByteOrder.LITTLE_ENDIAN)
            return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb))
        }
        fun createCredentialCreationOptions(builder: FlatBufferBuilder, rpOffset: Int, userOffset: Int, challengeOffset: Int, pubKeyCredParamsOffset: Int, timeout: UInt, attestation: Byte, excludeCredentialsOffset: Int, authenticatorSelectionOffset: Int, extensionsOffset: Int) : Int {
            builder.startTable(9)
            addExtensions(builder, extensionsOffset)
            addAuthenticatorSelection(builder, authenticatorSelectionOffset)
            addExcludeCredentials(builder, excludeCredentialsOffset)
            addTimeout(builder, timeout)
            addPubKeyCredParams(builder, pubKeyCredParamsOffset)
            addChallenge(builder, challengeOffset)
            addUser(builder, userOffset)
            addRp(builder, rpOffset)
            addAttestation(builder, attestation)
            return endCredentialCreationOptions(builder)
        }
        fun startCredentialCreationOptions(builder: FlatBufferBuilder) = builder.startTable(9)
        fun addRp(builder: FlatBufferBuilder, rp: Int) = builder.addOffset(0, rp, 0)
        fun addUser(builder: FlatBufferBuilder, user: Int) = builder.addOffset(1, user, 0)
        fun addChallenge(builder: FlatBufferBuilder, challenge: Int) = builder.addOffset(2, challenge, 0)
        fun addPubKeyCredParams(builder: FlatBufferBuilder, pubKeyCredParams: Int) = builder.addOffset(3, pubKeyCredParams, 0)
        fun createPubKeyCredParamsVector(builder: FlatBufferBuilder, data: IntArray) : Int {
            builder.startVector(4, data.size, 4)
            for (i in data.size - 1 downTo 0) {
                builder.addOffset(data[i])
            }
            return builder.endVector()
        }
        fun startPubKeyCredParamsVector(builder: FlatBufferBuilder, numElems: Int) = builder.startVector(4, numElems, 4)
        fun addTimeout(builder: FlatBufferBuilder, timeout: UInt) = builder.addInt(4, timeout.toInt(), 60000)
        fun addAttestation(builder: FlatBufferBuilder, attestation: Byte) = builder.addByte(5, attestation, 0)
        fun addExcludeCredentials(builder: FlatBufferBuilder, excludeCredentials: Int) = builder.addOffset(6, excludeCredentials, 0)
        fun createExcludeCredentialsVector(builder: FlatBufferBuilder, data: IntArray) : Int {
            builder.startVector(4, data.size, 4)
            for (i in data.size - 1 downTo 0) {
                builder.addOffset(data[i])
            }
            return builder.endVector()
        }
        fun startExcludeCredentialsVector(builder: FlatBufferBuilder, numElems: Int) = builder.startVector(4, numElems, 4)
        fun addAuthenticatorSelection(builder: FlatBufferBuilder, authenticatorSelection: Int) = builder.addOffset(7, authenticatorSelection, 0)
        fun addExtensions(builder: FlatBufferBuilder, extensions: Int) = builder.addOffset(8, extensions, 0)
        fun endCredentialCreationOptions(builder: FlatBufferBuilder) : Int {
            val o = builder.endTable()
            return o
        }
    }
}
