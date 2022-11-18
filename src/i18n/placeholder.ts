import { createIntl, IntlFormatters, IntlShape, ResolvedIntlConfig } from '@formatjs/intl'

export interface IIntlShapeRich<T = unknown> extends ResolvedIntlConfig, IntlFormatters<T> {
  formatErrorMessage: IntlShape['formatMessage']
}

const intl = createIntl({
  locale: 'en-US',
  fallbackOnEmptyString: true,
  onError() {},
})

export const DEFAULT_INTL: IIntlShapeRich = {
  ...intl,
  // eslint-disable-next-line jest/unbound-method
  formatErrorMessage: intl.formatMessage,
}
