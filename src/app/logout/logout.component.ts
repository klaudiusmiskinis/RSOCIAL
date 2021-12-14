import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html'
})
export class LogoutComponent implements OnInit {
  public router: Router;
  constructor(Router: Router) { 
    this.router = Router;
  }

  ngOnInit(): void {
    localStorage.setItem('user', 'logout')
    console.log(localStorage)
    this.router.navigate(['login']);
  }

}
