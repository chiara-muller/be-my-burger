import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";

export default function CasinoEffect({count}) {
  return (
    <TransitionGroup component={CasinoEffectStyled}>
      <CSSTransition classNames="count-animated" timeout={300} key={count}>
        <span>{count}</span>
      </CSSTransition>
    </TransitionGroup>
  )
}

const CasinoEffectStyled = styled.div`

  position: relative;
  overflow-y: hidden;
  border: 1px solid red;

  //MOUNTING
  span {
    display: inline-block;
  }

  .count-animated-enter{
    transform: translateY(100%);
  }
  .count-animated-enter-active{
    transform: translateY(0%);
    transition: 300ms;
  }

  //UNMOUNTING
  .count-animated-exit{
    transform: translateY(0%);
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .count-animated-exit-active{
    transform: translateY(-100%);
    transition: 300ms;
  }
  .count-animated-exit-done{}
`;
