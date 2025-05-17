/* eslint-disable max-len */
import { AppService, VerboHttp } from './../app.service';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
    selector: 'app-faleconosco',
    templateUrl: './faleconosco.page.html',
    styleUrls: ['./faleconosco.page.scss'],
    standalone: false
})
export class FaleconoscoPage implements OnInit {

  formulario: any = { telefone: '' };

  constructor(private toastController: ToastController, private appService: AppService) { }

  ngOnInit() {
  }

  solicitar() {
    if (this.isValido()) {
      this.appService.request('/services/mail/enviar', this.formulario, VerboHttp.POST).subscribe(data => {
        if (data && data.resposta === 'ok') {
          this.presentToast('top','A mensagem foi enviada com sucesso, aguarde contato!')
          this.formulario = {telefone: ''};
        }
      });
    }
  }

  isValido() {
    let valido = true;
    
    if (!this.formulario.nome || this.formulario.nome.length < 4) {
      this.presentToast('top','O nome é requerido.')
      valido = false;
    }

    if (!this.formulario.telefone) {
      this.presentToast('top','O telefone é requerido.')
      valido = false;
    }
    
    if (this.formulario.telefone.length < 15) {
      this.presentToast('top','O telefone é inválido.')
      valido = false;
    }

    if (!this.formulario.email || !this.isEmailValid(this.formulario.email)) {
      this.presentToast('top','O e-mail é requerido e precisa ser válido.')
      valido = false;
    }

    if (!this.formulario.texto) {
      this.presentToast('top','O texto descrevendo seu caso é requerido.')
      valido = false;
    }

    return valido;
  }

  isEmailValid(email: string) {
    // eslint-disable-next-line max-len
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  async presentToast(position: 'top' | 'middle' | 'bottom', message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: position
    });

    await toast.present();
  }

}
