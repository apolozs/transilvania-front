import { InicioComponent } from './pages/inicio/inicio.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { LoginComponent } from './pages/login/login.component';

declare module "@angular/core" {
    interface ModuleWithProviders<T = any> {
        ngModule: Type<T>;
        providers?: Provider[];
    }
}

const APP_ROUTES: Routes = [
    { path: 'login', component:LoginComponent},
    { path: 'cadastro', component:CadastroComponent},
    { path: 'home', component:HomeComponent},
    { path: '', component:InicioComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);  
