import { Routes, RouterModule } from "@angular/router";
import {SignupComponent} from './signup.component';

const signup_Router: Routes = [
    {
        path: '',
        component: SignupComponent
    }
];
export const signupRouter = RouterModule.forChild(signup_Router);