import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Contact} from './contact';

@Injectable()
export class HttpService{
    constructor(private http: HttpClient){ }
    postData(contact: Contact){
        const body = {name: contact.name, email: contact.email, comment: contact.comment};
        return this.http.post(' https://formula-test-api.herokuapp.com/contact', body);
    }
}