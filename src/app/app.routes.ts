import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AudioComponent } from './core/components/audio/audio.component';
import { LoginComponent } from './core/components/login/login.component';
import { authGuard } from './core/guards/auth.guard';
import { LayoutComponent } from './core/components/layout/layout.component';

export const routes: Routes = [

    {
        path: "",
        redirectTo: "audio",
        pathMatch: "full"
    },
    {
        path: "",
        component: LayoutComponent,
        canActivate: [authGuard],
        children: [
            {
                path: "audio",
                component: AudioComponent,
                canActivate: [authGuard]
            },
        ]
    },

    {
        path: "login",
        component: LoginComponent
    }

];
