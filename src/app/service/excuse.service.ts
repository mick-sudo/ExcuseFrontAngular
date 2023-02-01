import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Excuse } from "../model/Excuse";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
  })

  export class ExcuseService{

    private baseURL = `http://localhost:8080/api/v1`
    excuses : Excuse[] = []


    constructor(private http: HttpClient) { }


    //Recuperation des données
    getAllExcuse(): Observable<Excuse[]>{
        console.log(this.http.get<Excuse[]>(`${this.baseURL}/allExcuses`));
        return this.http.get<Excuse[]>(`${this.baseURL}/allExcuses`)
    }

    addNewExcuse(formValue:{http_code: number, tag: string, message: string}){
      return this.http.post<Excuse>(`${this.baseURL}/save`, formValue)
    }

  }