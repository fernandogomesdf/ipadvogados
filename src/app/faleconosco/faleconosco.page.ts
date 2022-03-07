import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-faleconosco',
  templateUrl: './faleconosco.page.html',
  styleUrls: ['./faleconosco.page.scss'],
})
export class FaleconoscoPage implements OnInit {

  size = 40;
  formulario: any = {};

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  solicitar() {
    //this.appService.request('/estabelecimento/cadastrar', this.formulario, VerboHttp.PUT);
    this.validar();
  }

  validar() {
    this.messageService.add({ severity: 'warn', summary: 'Atenção', detail: 'Via MessageService' });
    console.log('ddd');
  }

}
