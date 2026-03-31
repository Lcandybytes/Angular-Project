import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable ( {
    providedIn: 'root' 
})

export class ServiceMethod {
    private bankUrl = 'https://api.worldbank.org/v2/country'

    constructor(private http: HttpClient) {

    }

    getCountryProperties(code: string): Observable <any> {
        return this.http.get(this.bankUrl +'/' + code + '?format=json');
    }
}
