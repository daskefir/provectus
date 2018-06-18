import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ListOfProduct} from './listOfProduct';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  listOfProduct: ListOfProduct;
  constructor(private http: HttpClient) { }

  ngOnInit() {
 this.http.get('https://formula-test-api.herokuapp.com/menu').subscribe((data: ListOfProduct) => this.listOfProduct = data);
  }
}
