import { createIntl, IntlShape } from '@formatjs/intl'

export interface IIntlShapeRich extends IntlShape {
  formatErrorMessage: IntlShape['formatMessage']
}

const intl = createIntl({ locale: 'en-US' })

export const DEFAULT_INTL: IIntlShapeRich = {
  ...intl,
  // eslint-disable-next-line jest/unbound-method
  formatErrorMessage: intl.formatMessage,
}
