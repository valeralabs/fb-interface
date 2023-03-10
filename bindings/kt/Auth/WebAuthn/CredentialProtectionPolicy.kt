// automatically generated by the FlatBuffers compiler, do not modify

package Auth.WebAuthn

@Suppress("unused")
@kotlin.ExperimentalUnsignedTypes
class CredentialProtectionPolicy private constructor() {
    companion object {
        /**
         * This reflects "FIDO_2_0" semantics. In this configuration, performing
         * some form of user verification is optional with or without credentialID
         * list. This is the default state of the credential if the extension is
         * not specified.
         */
        const val UserVerificationOptional: Byte = 0
        /**
         * In this configuration, credential is discovered only when its
         * credentialID is provided by the platform or when some form of user
         * verification is performed.
         */
        const val UserVerificationOptionalWithCredentialIDList: Byte = 1
        /**
         * This reflects that discovery and usage of the credential MUST be
         * preceded by some form of user verification.
         */
        const val UserVerificationRequired: Byte = 2
    }
}
