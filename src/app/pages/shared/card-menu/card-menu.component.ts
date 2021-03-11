import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardMenu } from './card-menu.interface';

@Component({
  selector: 'app-card-menu',
  templateUrl: './card-menu.component.html',
  styleUrls: ['./card-menu.component.css']
})
export class CardMenuComponent implements OnInit {

  @Input() cardData: CardMenu;
  constructor(private router:Router) { }

  ngOnInit(): void {
    
  }

  redirectTo(){
    this.router.navigateByUrl(this.cardData.url)
  }

}
