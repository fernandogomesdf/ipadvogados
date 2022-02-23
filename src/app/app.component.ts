import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Fale Conosco', url: 'mailto:israel@ipadvogados.com', icon: 'mail' },
  ];
  constructor() { }
}
