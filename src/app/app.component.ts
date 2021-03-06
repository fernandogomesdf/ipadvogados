import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { AppService } from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  public appPages = [
    { title: 'Home', url: '/#/home', icon: 'home' },
    { title: 'Direito Crimininal', url: '/#/criminal', icon: 'caret-forward' },
    { title: 'Direito Empresarial', url: '/#/empresarial', icon: 'caret-forward' },
    { title: 'Direito Trabalhista', url: '/#/trabalhista', icon: 'caret-forward' },
    { title: 'Direito Imobiliário', url: '/#/imobiliario', icon: 'caret-forward' },
    { title: 'Direito Administrativo', url: '/#/administrativo', icon: 'caret-forward' },
    { title: 'Direito Médico', url: '/#/medico', icon: 'caret-forward' },
    { title: 'Direito Tributário', url: '/#/tributario', icon: 'caret-forward' },
    { title: 'Tribunais Superiores', url: '/#/superiores', icon: 'caret-forward' },
    { title: 'Fale Conosco', url: '/#/faleconosco', icon: 'mail' },
  ];

  constructor(private appService: AppService) { }

  ngAfterViewInit(): void {

  }

  whatsapp() {
    this.appService.whatsapp()
  }

}
