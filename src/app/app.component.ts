import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { AppService } from './app.service';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
    standalone: false
})
export class AppComponent implements AfterViewInit {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Direito Crimininal', url: '/criminal', icon: 'caret-forward' },
    { title: 'Direito Empresarial', url: '/empresarial', icon: 'caret-forward' },
    { title: 'Direito Trabalhista', url: '/trabalhista', icon: 'caret-forward' },
    { title: 'Direito Imobiliário', url: '/imobiliario', icon: 'caret-forward' },
    { title: 'Direito Administrativo', url: '/administrativo', icon: 'caret-forward' },
    { title: 'Direito Médico', url: '/medico', icon: 'caret-forward' },
    { title: 'Direito Tributário', url: '/tributario', icon: 'caret-forward' },
    { title: 'Tribunais Superiores', url: '/superiores', icon: 'caret-forward' },
    { title: 'Fale Conosco', url: '/faleconosco', icon: 'mail' },
  ];
  public isBrowser: boolean;

  constructor(
    private appService: AppService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngAfterViewInit(): void {

  }

  whatsapp() {
    this.appService.whatsapp()
  }

}
