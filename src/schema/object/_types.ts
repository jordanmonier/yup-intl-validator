import * as yup from 'yup'
import { ObjectShape } from 'yup/lib/object'

import { IProps, TValidator, TValidatorResult } from '../../_types'

export type TObjectValidatorResult<T extends ObjectShape = {}, Intl = unknown> = TValidatorResult<
  yup.ObjectSchema<T>,
  Intl
>

export type TObjectValidator<T extends ObjectShape = {}, Intl = unknown> = TValidator<
  yup.ObjectSchema<T>,
  Intl
>

export interface IObjectProps extends IProps {}
