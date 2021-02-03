import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IonicModule } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PxbAuthModule, PxbAuthUIService, PxbRegisterUIService } from '@pxblue/angular-auth-workflow';
import { AuthUIService } from './services/auth-ui.service';
import { RegisterUIService } from './services/register-ui.service';
import {AuthPageModule} from "./auth/auth.module";
import {HomePageModule} from "./home/home.module";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, PxbAuthModule, AuthPageModule, HomePageModule],
  providers: [ {
    provide: 'APP_NAME',
    useValue: 'IONIC_TEST_AUTH_WORKFLOW_INTEGRATION',
},
{
    provide: PxbAuthUIService,
    useClass: AuthUIService,
},
{
    provide: PxbRegisterUIService,
    useClass: RegisterUIService,
}],
  bootstrap: [AppComponent],
})
export class AppModule {}
