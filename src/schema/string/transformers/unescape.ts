import _unescape from "validator/lib/unescape";

import type { IStringProps, TStringValidatorResult } from "../_types";

export type IUnescapeProps = {};

/**
 * 	Replace HTML encoded entities with `<`, `>`, `&`, `'`, `"` and `/`.
 */
export const unescape = (
  props?: IUnescapeProps & Omit<IStringProps, "message">
): TStringValidatorResult => {
  const { active = true } = props ?? {};

  return (schema) => {
    if (active) {
      schema = schema.transform((v: unknown) =>
        typeof v === "string" ? _unescape(v) : v
      );
    }

    return schema;
  };
};
