import styled, { css } from "styled-components";

interface IStyledPostProps {
  $isLiked?: boolean;
  $isMarked?: boolean;
}

export const StyledPost = styled.div<IStyledPostProps>`
  box-shadow: 0 0 10px ${(props) => props.theme.colors.lightGray};
  padding: calc(1vw + 11px);
  /* background-color: var(--elems-bgc); */
  background-color: ${(props) => props.theme.colors.elemsBgc};
  border-radius: 20px;
  margin-bottom: 20px;

  position: relative;

  /* &._liked {
    .icon-wrapper {
      .icon-like {
        fill: var(--red);
        stroke: 0;
        stroke-width: 0;
      }

      .likes-count {
        color: var(--red);
      }
    }
  } */

  ${(props) =>
    props.$isLiked &&
    css`
      .icon-wrapper {
        .icon-like {
          fill: ${(props) => props.theme.colors.red};
          stroke: 0;
          stroke-width: 0;
        }

        .likes-count {
          color: ${(props) => props.theme.colors.red};
        }
      }
    `}

  /*   
  &._marked {
    .icon-wrapper {
      .icon-mark {
        fill: var(--prime-color);
        stroke: 0;
        stroke-width: 0;
      }
    }
  } */

    ${(props) =>
    props.$isMarked &&
    css`
      .icon-wrapper {
        .icon-mark {
          fill: ${(props) => props.theme.colors.primeColor};
          stroke: 0;
          stroke-width: 0;
        }
      }
    `}


  .UserElem {
    cursor: default;
    padding: 0;
    margin-bottom: 30px;

    &:hover {
      background-color: initial;
      scale: 1;
    }

    &::after {
      display: none; //? нижняя полоса в списке
    }

    img {
      flex: 0 0 60px;
      height: 60px;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  &__text {
    margin-bottom: 20px;
  }
`;

export const PostSettingsBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 8px;
  background: #fefefe;
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
`;
