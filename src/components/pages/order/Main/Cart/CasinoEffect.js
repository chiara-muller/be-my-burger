import { CSSTransition, TransitionGroup } from "react-transition-group";

export default function CasinoEffect() {
  return (
    <TransitionGroup>
      <CSSTransition>
       <span></span>
      </CSSTransition>
    </TransitionGroup>
  )
}
