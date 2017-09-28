import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs'

@Injectable()
export class DishesService {

  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: Http) { }

  getList() {
    return this.http.get(`${this.BASE_URL}/api/dishes`)
      .map((res) => res.json());
  }

  get(id) {
    return this.http.get(`${this.BASE_URL}/api/dishes/${id}`)
      .map((res) => res.json())
  }

  addIngredient(ingredient, Id){
    return this.http.put(`${this.BASE_URL}/dishes/${Id}/ingredients/${ingredient._id}/add`, ingredient)
      .map((res)=>res.json())
  }

}
