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
class PublicKeyCredentialDescriptor : Table() {

    fun __init(_i: Int, _bb: ByteBuffer)  {
        __reset(_i, _bb)
    }
    fun __assign(_i: Int, _bb: ByteBuffer) : PublicKeyCredentialDescriptor {
        __init(_i, _bb)
        return this
    }
    /**
     * The type of credential to exclude.
     */
    val type : String?
        get() {
            val o = __offset(4)
            return if (o != 0) {
                __string(o + bb_pos)
            } else {
                null
            }
        }
    val typeAsByteBuffer : ByteBuffer get() = __vector_as_bytebuffer(4, 1)
    fun typeInByteBuffer(_bb: ByteBuffer) : ByteBuffer = __vector_in_bytebuffer(_bb, 4, 1)
    /**
     * The credential ID to exclude.
     */
    fun id(j: Int) : UByte {
        val o = __offset(6)
        return if (o != 0) {
            bb.get(__vector(o) + j * 1).toUByte()
        } else {
            0u
        }
    }
    val idLength : Int
        get() {
            val o = __offset(6); return if (o != 0) __vector_len(o) else 0
        }
    val idAsByteBuffer : ByteBuffer get() = __vector_as_bytebuffer(6, 1)
    fun idInByteBuffer(_bb: ByteBuffer) : ByteBuffer = __vector_in_bytebuffer(_bb, 6, 1)
    fun mutateId(j: Int, id: UByte) : Boolean {
        val o = __offset(6)
        return if (o != 0) {
            bb.put(__vector(o) + j * 1, id.toByte())
            true
        } else {
            false
        }
    }
    /**
     * The transports that are allowed for this credential.
     */
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
        fun getRootAsPublicKeyCredentialDescriptor(_bb: ByteBuffer): PublicKeyCredentialDescriptor = getRootAsPublicKeyCredentialDescriptor(_bb, PublicKeyCredentialDescriptor())
        fun getRootAsPublicKeyCredentialDescriptor(_bb: ByteBuffer, obj: PublicKeyCredentialDescriptor): PublicKeyCredentialDescriptor {
            _bb.order(ByteOrder.LITTLE_ENDIAN)
            return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb))
        }
        fun createPublicKeyCredentialDescriptor(builder: FlatBufferBuilder, typeOffset: Int, idOffset: Int, transportsOffset: Int) : Int {
            builder.startTable(3)
            addTransports(builder, transportsOffset)
            addId(builder, idOffset)
            addType(builder, typeOffset)
            return endPublicKeyCredentialDescriptor(builder)
        }
        fun startPublicKeyCredentialDescriptor(builder: FlatBufferBuilder) = builder.startTable(3)
        fun addType(builder: FlatBufferBuilder, type: Int) = builder.addOffset(0, type, 0)
        fun addId(builder: FlatBufferBuilder, id: Int) = builder.addOffset(1, id, 0)
        fun createIdVector(builder: FlatBufferBuilder, data: UByteArray) : Int {
            builder.startVector(1, data.size, 1)
            for (i in data.size - 1 downTo 0) {
                builder.addByte(data[i].toByte())
            }
            return builder.endVector()
        }
        fun startIdVector(builder: FlatBufferBuilder, numElems: Int) = builder.startVector(1, numElems, 1)
        fun addTransports(builder: FlatBufferBuilder, transports: Int) = builder.addOffset(2, transports, 0)
        fun createTransportsVector(builder: FlatBufferBuilder, data: ByteArray) : Int {
            builder.startVector(1, data.size, 1)
            for (i in data.size - 1 downTo 0) {
                builder.addByte(data[i])
            }
            return builder.endVector()
        }
        fun startTransportsVector(builder: FlatBufferBuilder, numElems: Int) = builder.startVector(1, numElems, 1)
        fun endPublicKeyCredentialDescriptor(builder: FlatBufferBuilder) : Int {
            val o = builder.endTable()
            return o
        }
    }
}
