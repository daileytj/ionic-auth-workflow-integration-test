import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { getAuthSubRoutes, AUTH_ROUTES, PxbAuthGuard } from '@pxblue/angular-auth-workflow';
import { AuthPage } from './auth/auth.page';
import { HomePage } from './home/home.page';

const authWorkflowRoutes = getAuthSubRoutes();
const routes: Routes = [
    { path: '', redirectTo: AUTH_ROUTES.AUTH_WORKFLOW, pathMatch: 'full' },
    { path: AUTH_ROUTES.AUTH_WORKFLOW, component: AuthPage, children: authWorkflowRoutes },
    {
        path: '',
        canActivate: [PxbAuthGuard],
        children: [{ path: 'home', component: HomePage }],
    },
    // {
    //   path: 'auth',
    //   loadChildren: (): any => import('./auth/auth.module').then((m: any) => m.AuthPageModule)
    // },
    // {
    //   path: 'home',
    //   loadChildren: (): any => import('./home/home.module').then((m: any) => m.HomePageModule)
    // },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
