import * as yup from 'yup'

import { IProps, TValidator, TValidatorResult } from '../../_types'

export type TArrayValidatorResult<T extends yup.AnySchema, Intl = unknown> = TValidatorResult<
  yup.ArraySchema<T>,
  Intl
>

export type TArrayValidator<T extends yup.AnySchema, Intl = unknown> = TValidator<
  yup.ArraySchema<T>,
  Intl
>

export interface IArrayProps extends IProps {}
