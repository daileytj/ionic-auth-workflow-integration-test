import { Component } from '@angular/core';
import {PxbAuthConfig, AUTH_ROUTES} from "@pxblue/angular-auth-workflow";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage {

  constructor() {
    // If the ON_AUTHENTICATED route is not pre-populated by PXB auth workflow, provide it below.
    if (!AUTH_ROUTES.ON_AUTHENTICATED || AUTH_ROUTES.ON_AUTHENTICATED === '/') {
      AUTH_ROUTES.ON_AUTHENTICATED = 'home';
    }
  }
}
