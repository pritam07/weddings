import { Routes, RouterModule } from "@angular/router";
import {LoginComponent} from './login.component';

const login_Router: Routes = [
    {
        path: '',
        component: LoginComponent
    }
];
export const loginRouter = RouterModule.forChild(login_Router);