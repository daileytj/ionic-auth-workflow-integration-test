import { Component } from '@angular/core';
import {LocalStorageService} from "./services/localStorage.service";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(localStorageService: LocalStorageService, router: Router) {
    localStorageService.listenForAuthLoadingStateChanges();
    router.events.subscribe((route) => {
      if (route instanceof NavigationEnd) {
        console.log(route);
      }
    });
  }
}
