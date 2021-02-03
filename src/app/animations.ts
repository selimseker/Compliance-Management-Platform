import { trigger, state, style, transition, animate, group, query, stagger, keyframes } from '@angular/animations';

export const SlideInOutAnimation = [
    trigger('slideInOut', [
        state('in', style({
            'max-width': '250px'
        })),
        state('out', style({
            'max-width': '100px'
        })),
        transition('in => out', [group([
            animate('600ms ease-in-out', style({
                'max-width': '100px'
            }))
        ]
        )]),
        transition('out => in', [group([
            animate('600ms ease-in-out', style({
                'max-width': '250px'
            }))
        ]
        )])
    ])
]