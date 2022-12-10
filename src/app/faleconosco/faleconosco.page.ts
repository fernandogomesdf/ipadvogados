/* eslint-disable max-len */
import { AppService, VerboHttp } from './../app.service';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-faleconosco',
  templateUrl: './faleconosco.page.html',
  styleUrls: ['./faleconosco.page.scss'],
})
export class FaleconoscoPage implements OnInit {

  formulario: any = { telefone: '55619' };

  constructor(private messageService: MessageService, private appService: AppService) { }

  ngOnInit() {
  }

  solicitar() {
    if (this.isValido()) {
      this.appService.request('/services/mail/enviar', this.formulario, VerboHttp.POST).subscribe(data => {
        if (data && data.resposta === 'ok') {
          this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'A mensagem foi enviada com sucesso, aguarde contato!' });
          this.formulario = {telefone: '55619'};
        }
      });
    }
  }

  isValido() {
    let valido = true;

    if (!this.formulario.nome) {
      this.messageService.add({ severity: 'warn', summary: 'Atenção', detail: 'O nome é requerido.' });
      valido = false;
    }

    if (!this.formulario.telefone) {
      this.messageService.add({ severity: 'warn', summary: 'Atenção', detail: 'O telefone é requerido.' });
      valido = false;
    }

    if (this.formulario.telefone.length !== 13) {
      this.messageService.add({ severity: 'warn', summary: 'Atenção', detail: 'O telefone é inválido.' });
      valido = false;
    }

    if (this.formulario.email) {
      if (!this.isEmailValid(this.formulario.email)) {
        this.messageService.add({ severity: 'warn', summary: 'Atenção', detail: 'O e-mail é inválido.' });
        valido = false;
      }
    }

    if (!this.formulario.texto) {
      this.messageService.add({ severity: 'warn', summary: 'Atenção', detail: 'O texto descrevendo seu caso é requerido.' });
      valido = false;
    }

    return valido;
  }

  isEmailValid(email: string) {
    // eslint-disable-next-line max-len
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

}
