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
class AuthenticatorAttestationResponse : Table() {

    fun __init(_i: Int, _bb: ByteBuffer)  {
        __reset(_i, _bb)
    }
    fun __assign(_i: Int, _bb: ByteBuffer) : AuthenticatorAttestationResponse {
        __init(_i, _bb)
        return this
    }
    fun clientData(j: Int) : UByte {
        val o = __offset(4)
        return if (o != 0) {
            bb.get(__vector(o) + j * 1).toUByte()
        } else {
            0u
        }
    }
    val clientDataLength : Int
        get() {
            val o = __offset(4); return if (o != 0) __vector_len(o) else 0
        }
    val clientDataAsByteBuffer : ByteBuffer get() = __vector_as_bytebuffer(4, 1)
    fun clientDataInByteBuffer(_bb: ByteBuffer) : ByteBuffer = __vector_in_bytebuffer(_bb, 4, 1)
    fun mutateClientData(j: Int, clientData: UByte) : Boolean {
        val o = __offset(4)
        return if (o != 0) {
            bb.put(__vector(o) + j * 1, clientData.toByte())
            true
        } else {
            false
        }
    }
    fun attestationObject(j: Int) : UByte {
        val o = __offset(6)
        return if (o != 0) {
            bb.get(__vector(o) + j * 1).toUByte()
        } else {
            0u
        }
    }
    val attestationObjectLength : Int
        get() {
            val o = __offset(6); return if (o != 0) __vector_len(o) else 0
        }
    val attestationObjectAsByteBuffer : ByteBuffer get() = __vector_as_bytebuffer(6, 1)
    fun attestationObjectInByteBuffer(_bb: ByteBuffer) : ByteBuffer = __vector_in_bytebuffer(_bb, 6, 1)
    fun mutateAttestationObject(j: Int, attestationObject: UByte) : Boolean {
        val o = __offset(6)
        return if (o != 0) {
            bb.put(__vector(o) + j * 1, attestationObject.toByte())
            true
        } else {
            false
        }
    }
    fun transports(j: Int) : Byte {
        val o = __offset(8)
        return if (o != 0) {
            bb.get(__vector(o) + j * 1)
        } else {
            0
        }
    }
    val transportsLength : Int
        get() {
            val o = __offset(8); return if (o != 0) __vector_len(o) else 0
        }
    val transportsAsByteBuffer : ByteBuffer get() = __vector_as_bytebuffer(8, 1)
    fun transportsInByteBuffer(_bb: ByteBuffer) : ByteBuffer = __vector_in_bytebuffer(_bb, 8, 1)
    fun mutateTransports(j: Int, transports: Byte) : Boolean {
        val o = __offset(8)
        return if (o != 0) {
            bb.put(__vector(o) + j * 1, transports)
            true
        } else {
            false
        }
    }
    companion object {
        fun validateVersion() = Constants.FLATBUFFERS_23_1_4()
        fun getRootAsAuthenticatorAttestationResponse(_bb: ByteBuffer): AuthenticatorAttestationResponse = getRootAsAuthenticatorAttestationResponse(_bb, AuthenticatorAttestationResponse())
        fun getRootAsAuthenticatorAttestationResponse(_bb: ByteBuffer, obj: AuthenticatorAttestationResponse): AuthenticatorAttestationResponse {
            _bb.order(ByteOrder.LITTLE_ENDIAN)
            return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb))
        }
        fun createAuthenticatorAttestationResponse(builder: FlatBufferBuilder, clientDataOffset: Int, attestationObjectOffset: Int, transportsOffset: Int) : Int {
            builder.startTable(3)
            addTransports(builder, transportsOffset)
            addAttestationObject(builder, attestationObjectOffset)
            addClientData(builder, clientDataOffset)
            return endAuthenticatorAttestationResponse(builder)
        }
        fun startAuthenticatorAttestationResponse(builder: FlatBufferBuilder) = builder.startTable(3)
        fun addClientData(builder: FlatBufferBuilder, clientData: Int) = builder.addOffset(0, clientData, 0)
        fun createClientDataVector(builder: FlatBufferBuilder, data: UByteArray) : Int {
            builder.startVector(1, data.size, 1)
            for (i in data.size - 1 downTo 0) {
                builder.addByte(data[i].toByte())
            }
            return builder.endVector()
        }
        fun startClientDataVector(builder: FlatBufferBuilder, numElems: Int) = builder.startVector(1, numElems, 1)
        fun addAttestationObject(builder: FlatBufferBuilder, attestationObject: Int) = builder.addOffset(1, attestationObject, 0)
        fun createAttestationObjectVector(builder: FlatBufferBuilder, data: UByteArray) : Int {
            builder.startVector(1, data.size, 1)
            for (i in data.size - 1 downTo 0) {
                builder.addByte(data[i].toByte())
            }
            return builder.endVector()
        }
        fun startAttestationObjectVector(builder: FlatBufferBuilder, numElems: Int) = builder.startVector(1, numElems, 1)
        fun addTransports(builder: FlatBufferBuilder, transports: Int) = builder.addOffset(2, transports, 0)
        fun createTransportsVector(builder: FlatBufferBuilder, data: ByteArray) : Int {
            builder.startVector(1, data.size, 1)
            for (i in data.size - 1 downTo 0) {
                builder.addByte(data[i])
            }
            return builder.endVector()
        }
        fun startTransportsVector(builder: FlatBufferBuilder, numElems: Int) = builder.startVector(1, numElems, 1)
        fun endAuthenticatorAttestationResponse(builder: FlatBufferBuilder) : Int {
            val o = builder.endTable()
            return o
        }
    }
}
