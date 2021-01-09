import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-restaurant',
  templateUrl: './search-restaurant.component.html',
  styleUrls: ['./search-restaurant.component.scss']
})
export class SearchRestaurantComponent implements OnInit {
  
  constructor() {  }

  ngOnInit() {
  }

  public employees = [
    {
      "id": 1,
      "name": `Repaso Bobby's Wings and Grill \n 45255 Abell House Ln, SALT LAKE CITY, Utah 84044`,
    }, {
      "id": 2,
      "name": `Repaso Bobby's Wings and Grill \n 452551 Abell House Ln, SALT LAKE CITY, Utah 840441`,
    }]
    
    selectEvent(event) {
      console.log(event)
  }
}
