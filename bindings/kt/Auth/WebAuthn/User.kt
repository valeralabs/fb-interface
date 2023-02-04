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
class User : Table() {

    fun __init(_i: Int, _bb: ByteBuffer)  {
        __reset(_i, _bb)
    }
    fun __assign(_i: Int, _bb: ByteBuffer) : User {
        __init(_i, _bb)
        return this
    }
    /**
     * The user's base58 encoded, 32 byte user ID.
     */
    val id : String?
        get() {
            val o = __offset(4)
            return if (o != 0) {
                __string(o + bb_pos)
            } else {
                null
            }
        }
    val idAsByteBuffer : ByteBuffer get() = __vector_as_bytebuffer(4, 1)
    fun idInByteBuffer(_bb: ByteBuffer) : ByteBuffer = __vector_in_bytebuffer(_bb, 4, 1)
    /**
     * The user's name.
     */
    val name : String?
        get() {
            val o = __offset(6)
            return if (o != 0) {
                __string(o + bb_pos)
            } else {
                null
            }
        }
    val nameAsByteBuffer : ByteBuffer get() = __vector_as_bytebuffer(6, 1)
    fun nameInByteBuffer(_bb: ByteBuffer) : ByteBuffer = __vector_in_bytebuffer(_bb, 6, 1)
    /**
     * The user's display name. Defaults to the user's name.
     */
    val displayName : String?
        get() {
            val o = __offset(8)
            return if (o != 0) {
                __string(o + bb_pos)
            } else {
                null
            }
        }
    val displayNameAsByteBuffer : ByteBuffer get() = __vector_as_bytebuffer(8, 1)
    fun displayNameInByteBuffer(_bb: ByteBuffer) : ByteBuffer = __vector_in_bytebuffer(_bb, 8, 1)
    companion object {
        fun validateVersion() = Constants.FLATBUFFERS_23_1_4()
        fun getRootAsUser(_bb: ByteBuffer): User = getRootAsUser(_bb, User())
        fun getRootAsUser(_bb: ByteBuffer, obj: User): User {
            _bb.order(ByteOrder.LITTLE_ENDIAN)
            return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb))
        }
        fun createUser(builder: FlatBufferBuilder, idOffset: Int, nameOffset: Int, displayNameOffset: Int) : Int {
            builder.startTable(3)
            addDisplayName(builder, displayNameOffset)
            addName(builder, nameOffset)
            addId(builder, idOffset)
            return endUser(builder)
        }
        fun startUser(builder: FlatBufferBuilder) = builder.startTable(3)
        fun addId(builder: FlatBufferBuilder, id: Int) = builder.addOffset(0, id, 0)
        fun addName(builder: FlatBufferBuilder, name: Int) = builder.addOffset(1, name, 0)
        fun addDisplayName(builder: FlatBufferBuilder, displayName: Int) = builder.addOffset(2, displayName, 0)
        fun endUser(builder: FlatBufferBuilder) : Int {
            val o = builder.endTable()
            return o
        }
    }
}