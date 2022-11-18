import * as yup from 'yup'

import { IProps, TValidator, TValidatorResult } from '../../_types'

export type TNumberValidatorResult<Intl = unknown> = TValidatorResult<yup.NumberSchema, Intl>

export type TNumberValidator<Intl = unknown> = TValidator<yup.NumberSchema, Intl>

export interface INumberProps extends IProps {}
