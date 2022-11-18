import * as yup from 'yup'

import { IProps, TValidator, TValidatorResult } from '../../_types'

export type TStringValidatorResult<Intl = unknown> = TValidatorResult<yup.StringSchema, Intl>

export type TStringValidator<Intl = unknown> = TValidator<yup.StringSchema, Intl>

export interface IStringProps extends IProps {}
