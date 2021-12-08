import { animate, animation, keyframes, state, style, transition, trigger, useAnimation } from '@angular/animations';

let slideInFromRightAnimation = animation(
  animate( '600ms ease-out',
    keyframes([
      style({
        offset: 0,
        opacity: 0,
        transform: 'translateX(100%)'
      }),
      style({
        offset: 0.7,
        opacity: 1,
        transform: 'translateX(-10px)'
      }),
      style({
        offset: 1,
        transform: 'translateX(0)'
      })
    ])
  )
)

export let slideInFromRight = trigger(
  'slideInFromRight', [
    transition(':enter', useAnimation(slideInFromRightAnimation))
  ]
);