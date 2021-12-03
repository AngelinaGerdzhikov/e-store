import { animate, state, style, transition, trigger } from '@angular/animations';

export let fadeIn = trigger(
  'fadeIn', [
    state('void', style({ opacity: 0 })),
    transition(':enter', animate('200ms ease-in')),
  ]
);

export let fadeOut = trigger(
  'fadeOut', [
    state('void', style({ opacity: 0 })),
    transition(':leave', animate('300ms ease-out')),
  ]
);

export let fade = trigger(
  'fade', [
    state('void', style({ opacity: 0 })),
    transition(':enter :leave', animate('300ms ease-out')),
  ]
);