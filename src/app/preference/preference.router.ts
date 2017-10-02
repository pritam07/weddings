import { Routes, RouterModule } from "@angular/router";
import {PreferenceComponent} from './preference.component';

const preference_Router: Routes = [
    {
        path: '',
        component: PreferenceComponent
    }
];
export const preferenceRouter = RouterModule.forChild(preference_Router);