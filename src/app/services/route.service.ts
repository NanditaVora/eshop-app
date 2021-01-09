import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private route: Router, 
    private location: Location) { }

  toProductAdd(){
    this.route.navigate(['addProduct']);
  }

  toHome()
  {
    this.location.back();
  }
}
