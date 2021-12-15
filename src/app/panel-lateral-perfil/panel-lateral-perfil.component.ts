import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel-lateral-perfil',
  templateUrl: './panel-lateral-perfil.component.html',
  styleUrls: ['../app.component.css']
})
export class PanelLateralPerfilComponent implements OnInit {
  public router;

  constructor(Router: Router) {
    this.router = Router;
  }

  ngOnInit(): void {
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
