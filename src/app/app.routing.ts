import { PerfilComponent } from './pages/perfil/perfil.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { LoginComponent } from './pages/login/login.component';
import { ReservaComponent } from './pages/reserva/reserva.component';
import { ReservasComponent } from './pages/reservas/reservas.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';

declare module "@angular/core" {
    interface ModuleWithProviders<T = any> {
        ngModule: Type<T>;
        providers?: Provider[];
    }
}

const APP_ROUTES: Routes = [
    { path: 'login', component:LoginComponent},
    { path: 'cadastro', component:CadastroComponent},
    { path: 'reserva', component:ReservaComponent},
    { path: 'reservas', component:ReservasComponent},
    { path: 'usuario', component:UsuarioComponent},
    { path: 'perfil', component:PerfilComponent},
    { path: '', component:InicioComponent}, 

    { path: 'home', component:HomeComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);  
