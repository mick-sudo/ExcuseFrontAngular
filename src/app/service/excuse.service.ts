import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Excuse } from "../model/Excuse";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })

  export class ExcuseService{

    private baseURL = `http://localhost:8080/api/v1`
    excuses : Excuse[] = []


    constructor(private http: HttpClient) { }


    getAllExcuse(): Observable<Excuse[]>{
        console.log(this.http.get<Excuse[]>(`${this.baseURL}/allExcuses`));
        return this.http.get<Excuse[]>(`${this.baseURL}/allExcuses`)
    }

  }