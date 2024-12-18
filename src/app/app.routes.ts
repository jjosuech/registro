import { Routes } from '@angular/router';
import { MainComponent } from './shared/layout/main/main.component';
import { RegisterHomeComponent } from './features/register/pages/register-home/register-home.component';
import { ListHomeComponent } from './features/list/pages/list-home/list-home.component';

export const routes: Routes = [
    {
        path: '',
        component: MainComponent, // layout
        children: [ // hijos
            {
                path: '',
                component: RegisterHomeComponent
            },
            {
                path: 'chamos',
                component: ListHomeComponent
            }
        ]
    }
];
