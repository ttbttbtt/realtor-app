import styled, { css } from "styled-components";

type StyledButtonProps = {
  $isPrimary?: boolean;
  isSecondary?: boolean;
};

export const StyledButton = styled.button<StyledButtonProps>`
  cursor: pointer;
  padding: 12px 15px;
  font-size: inherit;
  border-radius: 10px;

  border: 1px solid transparent;
  outline: 0;
  font-family: inherit;

  /* background-color: ${(props) => props.theme.colors.primeColor}; */
  color: white;
  transition: 200ms;
  width: 100%;
  margin-bottom: 30px;

  &:disabled {
    background-color: var(--disabled-bgc);
  }

  /* &.primary {
    background-color: var(--prime-color);
    color: white;
  }

  &.secondary {
    background-color: var(--light-gray);
    color: var(--placeholder-color);
  } */

  ${(props) =>
    props.$isPrimary &&
    css`
      background-color: ${(props) => props.theme.colors.primeColor};
      color: white;
    `}

  ${(props) =>
    props.isSecondary &&
    css`
    background-color: ${(props) => props.theme.colors.lightGray}
    color: ${(props) => props.theme.colors.placeholderColor}
  `}

  &:disabled {
    background-color: ${(props) => props.theme.colors.disabledBgc}
  }

  &:disabled:hover {
    cursor: default;
    opacity: 0.5;
  }

  &:hover {
    translate: 0 -5px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.7);
  }

  &:active {
    transition: 100ms;
    translate: 0 0;
    box-shadow: none;
  }

  @media (max-width: 730px) {
    padding: 10px 12px;
  }
`;
