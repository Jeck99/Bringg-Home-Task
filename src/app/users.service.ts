import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Inject } from '@angular/core';
import { IUsers } from "./Users";
import 'rxjs/add/operator/catch';

export class UsersService {
    extractData: any;
    private url: string = "http://www.json-generator.com/api/json/get/bQAMbAQSxu?indent=2";
    Get(): Observable<IUsers[]> {
        return this.http
            .get(this.url)
            .map((response: Response) => {
                return <IUsers[]>response.json();
            }).catch(this.handleError);
    }
    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
    constructor( @Inject(Http) private http: Http) { }
}