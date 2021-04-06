import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-logout',
  template: 'logout.component.html',
  styles: [
  ]
})
export class LogoutComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { 
    this.authService.logout();
  }

  ngOnInit(): void {
  }

}
