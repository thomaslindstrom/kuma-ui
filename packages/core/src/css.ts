import { StyledProps, PseudoProps } from "@kuma-ui/system";
import { ThemeSystem } from "./theme";

export const css = (_strings: TemplateStringsArray): string => {
  throw Error('Using the "css" in runtime is not supported.');
};

export type CxClassName = string | false | null | undefined | CxClassName[];

export const cx = (...classNames: CxClassName[]): string =>
  classNames
    .filter((className) => Boolean(className))
    .map((className) =>
      Array.isArray(className) ? cx(...className) : className,
    )
    .join(" ");
