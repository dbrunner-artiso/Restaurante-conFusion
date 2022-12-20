import { animate, state, style, transition, trigger } from '@angular/animations';

export function visibility() {
    return trigger('visibility', [
        state('shown', style({
            transform: 'scale(1.0)',
            opacity: 1
        })),
        state('hidden', style({
            transform: 'scale(0.3)',
            opacity: 0.1
        })),
        transition('* => *', animate('0.5s 200ms ease-in-out')) // animate ('duration delay easing')
    ])
}

export function flyInOut() {
    return trigger('flyInOut', [
        state('*', style({
            opacity: 1,
            transform: 'translateX(0)'
        })),
        transition(':enter', [
            style({
                transform: 'translateX(-100%)',
                opacity: 0}),
            animate('500ms 0ms ease-in')
        ]),
        transition(':leave', [
            animate('500ms 0ms ease-out',
                style({
                    transform: 'translateX(100%)',
                    opacity: 0}))
        ])
    ]);
}

export function expand() {
    return trigger('expand', [
        state('*', style({
            opacity: 1,
            transform: 'translateX(0)'
        })),
        transition(':enter', [
            style({
                transform: 'translateX(-50%)',
                opacity: 0}),
            animate('200ms 0ms ease-in')
            ])
    ]);
}
