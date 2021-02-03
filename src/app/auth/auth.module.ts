import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthPage } from './auth.page';
import { PxbAuthModule } from '@pxblue/angular-auth-workflow';

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, PxbAuthModule],
    declarations: [AuthPage],
})
export class AuthPageModule {}
