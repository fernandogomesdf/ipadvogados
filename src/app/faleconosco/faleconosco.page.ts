import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-faleconosco',
  templateUrl: './faleconosco.page.html',
  styleUrls: ['./faleconosco.page.scss'],
})
export class FaleconoscoPage implements OnInit {

  formulario: any = {};

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  solicitar() {
    if (this.isValido()) {

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

    if (this.formulario.email) {
      if (!this.isEmailValid(this.formulario.email)) {
        this.messageService.add({ severity: 'warn', summary: 'Atenção', detail: 'O e-mail é inválido.' });
        valido = false;
      }
    }

    if (!this.formulario.texto) {
      this.messageService.add({ severity: 'warn', summary: 'Atenção', detail: 'O texto descrendo seu caso é requerido.' });
      valido = false;
    }

    return valido;
  }

  isEmailValid(email) {
    // eslint-disable-next-line max-len
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

}
