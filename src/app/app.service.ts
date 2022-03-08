/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';

import { Router, NavigationEnd } from '@angular/router';

import { map, share } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class AppService {

  hrefwpp = 'https://api.whatsapp.com/send?phone=5561984562536&text=Ol%C3%A1,%20preciso%20de%20assist%C3%AAncia%20com%20o%20seguinte%20assunto:%20';

  constructor(private http: HttpClient, private router: Router, private messageService: MessageService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.messageService.clear();
      }
    });
  }

  whatsapp() {
    window.location.href = this.hrefwpp;
  }

  getServerHostPort() {
    //const serverHostPort = location.protocol + '//ipadvogados.com/sqlite-rest';
    const serverHostPort = location.protocol + '//localhost:8080/sqlite-rest';
    return serverHostPort;
  }

  msgInfo(detail) {
    this.msg('info', 'Informação', detail);
  }

  msgWarn(detail) {
    this.msg('warn', 'Alerta', detail);
  }

  msgErro(detail) {
    this.msg('error', 'Erro', detail);
  }

  msgSucesso(detail) {
    this.msg('success', 'Sucesso', detail);
  }

  tratarErro(err) {
    try {
      if (err.status && err.status === 401) {
        this.router.navigate(['/']);
      } else {
        if (err.error.type === 'error') {
          this.msgErro('Não foi possí­vel conectar no servidor.');
        } else {
          const resposta = err.error;
          if (resposta.message) {
            if (resposta.status === 500 || err.status === 500) {
              this.msgErro(resposta.message);
            } else {
              this.msgWarn(resposta.message);
            }
            if (resposta.exception) {
              console.log(resposta.exception);
            }
          } else {
            if (resposta.exception) {
              this.msgErro(resposta.exception);
            }
          }
        }
      }
    } catch (erro) {
      console.log(erro);
    }
  }

  requestGet(url: string): Observable<any> {
    return this.request(url, null, VerboHttp.GET);
  }

  request(url: string, data: any, verbo: VerboHttp): Observable<any> {
    const response$ = this.chamarUrl(this.getServerHostPort() + url, data, verbo).pipe(
      map(response => response),
      share()
    );
    response$.subscribe({
      error: (err) => {
        this.tratarErro(err);
      }
    });
    return response$;
  }

  private msg(severity, summary, detail) {
    this.messageService.add({ severity, summary, detail });
  }

  private chamarUrl(url: string, data: any, verbo: VerboHttp): Observable<any> {
    const token = sessionStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      })
    };
    switch (verbo) {
      case VerboHttp.PUT:
        return this.http.put(url, data, httpOptions);
      case VerboHttp.GET:
        return this.http.get(url, httpOptions);
      case VerboHttp.POST:
        return this.http.post(url, data, httpOptions);
      case VerboHttp.PATCH:
        return this.http.patch(url, data, httpOptions);
      case VerboHttp.DELETE:
        return this.http.delete(url, httpOptions);
      default:
        break;
    }
  }

}

export enum VerboHttp {
  PUT,
  GET,
  POST,
  PATCH,
  DELETE
}
