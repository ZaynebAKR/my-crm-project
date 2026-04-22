import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent {
  username = "";
  role = "";

  constructor(private route: ActivatedRoute){
    this.username = history.state.username;
    this.role = history.state.role;
  }
}