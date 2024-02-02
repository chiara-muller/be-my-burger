import { css } from "styled-components";

export const panelAnimation = css`

.panel-animated-appear{
  transform: translateY(100%);
  opacity: 0.1;

    &.panel-animated-appear-active{
      transform: translateY(0%);
      opacity: 1;
      transition: all 500ms;
    }
}

`
