import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AppService {

    hrefwpp: string = 'https://api.whatsapp.com/send?phone=5561984562536&text=Ol%C3%A1,%20preciso%20de%20assist%C3%AAncia%20com%20o%20seguinte%20assunto:'

    whatsapp() {
        window.location.href = this.hrefwpp
    }

    constructor() { }

}