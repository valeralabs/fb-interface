// automatically generated by the FlatBuffers compiler, do not modify

package Auth.API

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
class RegisterNumberReq : Table() {

    fun __init(_i: Int, _bb: ByteBuffer)  {
        __reset(_i, _bb)
    }
    fun __assign(_i: Int, _bb: ByteBuffer) : RegisterNumberReq {
        __init(_i, _bb)
        return this
    }
    /**
     * The name of the user to register.
     */
    val name : String?
        get() {
            val o = __offset(4)
            return if (o != 0) {
                __string(o + bb_pos)
            } else {
                null
            }
        }
    val nameAsByteBuffer : ByteBuffer get() = __vector_as_bytebuffer(4, 1)
    fun nameInByteBuffer(_bb: ByteBuffer) : ByteBuffer = __vector_in_bytebuffer(_bb, 4, 1)
    /**
     * The phone number to register.
     */
    val number : String?
        get() {
            val o = __offset(6)
            return if (o != 0) {
                __string(o + bb_pos)
            } else {
                null
            }
        }
    val numberAsByteBuffer : ByteBuffer get() = __vector_as_bytebuffer(6, 1)
    fun numberInByteBuffer(_bb: ByteBuffer) : ByteBuffer = __vector_in_bytebuffer(_bb, 6, 1)
    companion object {
        fun validateVersion() = Constants.FLATBUFFERS_23_1_4()
        fun getRootAsRegisterNumberReq(_bb: ByteBuffer): RegisterNumberReq = getRootAsRegisterNumberReq(_bb, RegisterNumberReq())
        fun getRootAsRegisterNumberReq(_bb: ByteBuffer, obj: RegisterNumberReq): RegisterNumberReq {
            _bb.order(ByteOrder.LITTLE_ENDIAN)
            return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb))
        }
        fun createRegisterNumberReq(builder: FlatBufferBuilder, nameOffset: Int, numberOffset: Int) : Int {
            builder.startTable(2)
            addNumber(builder, numberOffset)
            addName(builder, nameOffset)
            return endRegisterNumberReq(builder)
        }
        fun startRegisterNumberReq(builder: FlatBufferBuilder) = builder.startTable(2)
        fun addName(builder: FlatBufferBuilder, name: Int) = builder.addOffset(0, name, 0)
        fun addNumber(builder: FlatBufferBuilder, number: Int) = builder.addOffset(1, number, 0)
        fun endRegisterNumberReq(builder: FlatBufferBuilder) : Int {
            val o = builder.endTable()
            return o
        }
    }
}