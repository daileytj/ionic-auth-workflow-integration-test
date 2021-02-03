import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AuthPage } from './auth.page';

describe('AuthPage', () => {
    let component: AuthPage;
    let fixture: ComponentFixture<AuthPage>;

    beforeEach(waitForAsync(() => {
        void TestBed.configureTestingModule({
            declarations: [AuthPage],
            imports: [IonicModule.forRoot()],
        }).compileComponents();

        fixture = TestBed.createComponent(AuthPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        void expect(component).toBeTruthy();
    });
});
