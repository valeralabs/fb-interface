// automatically generated by the FlatBuffers compiler, do not modify

package Auth.KV

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

/**
 * Entry that is kept temporarily for verification purposes
 */
@Suppress("unused")
@kotlin.ExperimentalUnsignedTypes
class NumberRegistration : Table() {

    fun __init(_i: Int, _bb: ByteBuffer)  {
        __reset(_i, _bb)
    }
    fun __assign(_i: Int, _bb: ByteBuffer) : NumberRegistration {
        __init(_i, _bb)
        return this
    }
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
    val code : ULong
        get() {
            val o = __offset(6)
            return if(o != 0) bb.getLong(o + bb_pos).toULong() else 0UL
        }
    fun mutateCode(code: ULong) : Boolean {
        val o = __offset(6)
        return if (o != 0) {
            bb.putLong(o + bb_pos, code.toLong())
            true
        } else {
            false
        }
    }
    companion object {
        fun validateVersion() = Constants.FLATBUFFERS_23_1_4()
        fun getRootAsNumberRegistration(_bb: ByteBuffer): NumberRegistration = getRootAsNumberRegistration(_bb, NumberRegistration())
        fun getRootAsNumberRegistration(_bb: ByteBuffer, obj: NumberRegistration): NumberRegistration {
            _bb.order(ByteOrder.LITTLE_ENDIAN)
            return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb))
        }
        fun createNumberRegistration(builder: FlatBufferBuilder, nameOffset: Int, code: ULong) : Int {
            builder.startTable(2)
            addCode(builder, code)
            addName(builder, nameOffset)
            return endNumberRegistration(builder)
        }
        fun startNumberRegistration(builder: FlatBufferBuilder) = builder.startTable(2)
        fun addName(builder: FlatBufferBuilder, name: Int) = builder.addOffset(0, name, 0)
        fun addCode(builder: FlatBufferBuilder, code: ULong) = builder.addLong(1, code.toLong(), 0)
        fun endNumberRegistration(builder: FlatBufferBuilder) : Int {
            val o = builder.endTable()
            return o
        }
    }
}
