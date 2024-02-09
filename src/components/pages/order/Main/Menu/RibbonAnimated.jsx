import { CSSTransition } from "react-transition-group";
import Ribbon from "../../../../resusable-ui/Ribbon";
import { css } from "styled-components";

export default function RibbonAnimated() {
  return (
    <CSSTransition in={true} timeout={500} appear={true} classNames={"ribbon-animated"}>
      <Ribbon className="ribbon" label="Nouveau"/>
    </CSSTransition>
  )
}

export const ribbonAnimation = css`

  .ribbon-animated-appear {
    position: absolute;
    opacity: 0.1;
    transform: scale(1.8);
    &.ribbon-animated-appear-active {
      transition: ease-out 500ms;
      opacity: 1;
      transform: scale(1);
    }
  }

  .ribbon-animated-exit {
    position: absolute;
    opacity: 1;
    transition: 1000ms;
    &.ribbon-animated-exit-active {
      opacity: 0.1;
      transform: scale(1.5);
    }
  }

`
