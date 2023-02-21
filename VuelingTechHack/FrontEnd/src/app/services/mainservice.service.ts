import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListOfFlights } from '../interfaces/listOfFlights.interface';

@Injectable({
  providedIn: 'root'
})

export class MainserviceService {

  constructor(
    private http: HttpClient
  ) {}

  getListofFlights(){
    return this.http.get<ListOfFlights>('')
  }

  

}
