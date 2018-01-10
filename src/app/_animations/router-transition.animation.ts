import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
} from '@angular/animations';

export const routerTransition =
  trigger('routerAnimation', [
    transition('* <=> *', [
      // INITIAL STATE
      query(':enter',
        style({
          opacity: 0,
          position: 'fixed',
          width:'100%',
        }), {optional:true}
      ),
      // PAGE LEAVING
      query(':leave',
        animate('500ms ease',
          style({
            opacity: 0,
            position: 'fixed',
            width:'100%',
          })
        ),
        {optional:true}
      ),
      // PAGE ENTERING
      query(':enter',
        animate('500ms ease',
          style({
            opacity: 1,
          })
        ),
        {optional:true}
      ),
    ])
  ])
