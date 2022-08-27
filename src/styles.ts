import { css } from "@emotion/css";

export const defaultBoxCss = css`
  border: 1px solid #ececec;
  padding: 10px;
  border-radius: 5px;
`;

const breakpoints = {
  small: 576,
  medium: 768,
  large: 992,
  extraLarge: 1200
};

export const small = `@media (max-width: ${breakpoints.small}px)`;
export const medium = `@media (max-width: ${breakpoints.medium}px)`;
export const large = `@media (max-width: ${breakpoints.large}px)`;
export const extraLarge = `@media (max-width: ${breakpoints.extraLarge}px)`;
