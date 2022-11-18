import * as yup from 'yup'

import { IProps, TValidator, TValidatorResult } from '../../_types'

export type TDateValidatorResult<Intl = unknown> = TValidatorResult<yup.DateSchema, Intl>

export type TDateValidator<Intl = unknown> = TValidator<yup.DateSchema, Intl>

export interface IDateProps extends IProps {}
