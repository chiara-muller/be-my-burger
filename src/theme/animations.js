import { css, keyframes } from "styled-components";

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

export const cartAnimation = css`
  .animation-cart-appear {
    .item {
      transform: translateX(100px);
      opacity: 0%;
    }
  }
  .animation-cart-appear-active {
    .item {
      transform: translateX(0px);
      transition: 300ms;
      opacity: 100%;
    }
  }

  .animation-cart-enter {
    .item {
      transform: translateX(100px);
      opacity: 0%;
    }
  }
  .animation-cart-enter-active {
    .item {
      transform: translateX(0px);
      transition: 300ms;
      opacity: 100%;
    }
  }

  .animation-cart-exit {
    .item {
      transform: translateX(0px);
      opacity: 100%;
    }
  }
  .animation-cart-exit-active {
    .item {
      transform: translateX(-100px);
      transition: 300ms;
      opacity: 0%;
    }
  }
`

export const fadeInFromRight = keyframes`
  0% {
    position: absolute;
    z-index: -1;
    opacity: 0;
    transform: translateX(100%);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
`

export const menuAnimation = css`
  .animation-menu-enter {
    transform: translateX(-120px);
    opacity: 0.01;
      &.animation-menu-enter-active {
        transform: translateX(0px);
        transition: all 300ms ease-out;
        opacity: 1;
      }
  }

  .animation-menu-exit {
    opacity: 1;
    transform: translateY(0);
      &.animation-menu-exit-active {
        opacity: 0.01;
        transition: 300ms ease-out;
      }
  }
`
