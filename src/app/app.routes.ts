import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AudioComponent } from './core/components/audio/audio.component';

export const routes: Routes = [

    {
        path: "",
        redirectTo: "audio",
        pathMatch: "full"
    },
    {
        path: "",
        component: AppComponent,
    },
    {
        path: "audio",
        component: AudioComponent
    }

];
