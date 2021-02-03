import { Component } from '@angular/core';
import {LocalStorageService} from "./services/localStorage.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(localStorageService: LocalStorageServicer) {
    localStorageService.listenForAuthLoadingStateChanges();
  }
}
