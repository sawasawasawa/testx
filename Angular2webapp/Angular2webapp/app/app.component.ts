import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';

import { ApiService } from './core/api.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.css']
})
export class AppComponent {
        name = 'Angular 4 (webpack)';
        timestamp = 'dummy'; //(new Date()).toString();
        public ctrlData: DummyData[];

        //constructor(http: Http) {
        //    //http.get('/api/Dummier/Get').subscribe(result => {
        //    //    this.ctrlData = result.json() as DummyData[];
        //    //});

        //    http.get('/api/Dummier/Get').subscribe(value => {
        //        this.ctrlData = <DummyData[]>value.json();
        //    });
        //}

        constructor(apiService: ApiService) {
            apiService.get('/Dummier/Get').subscribe(result => {
                this.ctrlData = <DummyData[]>result;
            });
        }
}

interface DummyData {
    clientData: string;
    serverData: string;
}