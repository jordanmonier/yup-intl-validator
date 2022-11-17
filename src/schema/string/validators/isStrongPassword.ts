import _isStrongPassword from 'validator/lib/isStrongPassword'

import { parseReference, TReferenceProps } from '../../..'
import { IStringProps, TStringValidatorResult } from '../_types'

export interface IIsStrongPasswordProps {
  options?: validator.default.StrongPasswordOptions
}

/**
 * Check if string is considered a strong password.
 */
export const isStrongPassword = (
  props?: TReferenceProps<IIsStrongPasswordProps> & IStringProps
): TStringValidatorResult => {
  const { active = true, message } = props ?? {}

  return (schema, intl) => {
    if (active) {
      schema = schema.test({
        test(value) {
          if (typeof value !== 'string') return true

          const { options } = parseReference<IIsStrongPasswordProps>(this, props)

          const result = _isStrongPassword(value, { ...options, returnScore: false })

          return result
            ? true
            : this.createError({
                message: intl.formatErrorMessage(
                  { id: message ?? 'e.y_v.s_must_be_a_strong_password' },
                  { ...options }
                ),
              })
        },
      })
    }

    return schema
  }
}
