import * as yup from 'yup'
import { IIntlShapeRich } from '../../i18n/placeholder'

import { IProps, TValidator, TValidatorResult } from '../../_types'

export type TBooleanValidatorResult<Intl extends IIntlShapeRich = IIntlShapeRich> =
  TValidatorResult<yup.BooleanSchema<boolean>, Intl>

export type TBooleanValidator<Intl extends IIntlShapeRich = IIntlShapeRich> = TValidator<
  yup.BooleanSchema<boolean>,
  Intl
>

export interface IBooleanProps extends IProps {}
