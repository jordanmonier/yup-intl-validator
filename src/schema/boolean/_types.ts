import * as yup from 'yup'

import { IProps, TValidator, TValidatorResult } from '../../_types'

export type TBooleanValidatorResult<Intl = unknown> = TValidatorResult<
  yup.BooleanSchema<boolean>,
  Intl
>

export type TBooleanValidator<Intl = unknown> = TValidator<yup.BooleanSchema<boolean>, Intl>

export interface IBooleanProps extends IProps {}
