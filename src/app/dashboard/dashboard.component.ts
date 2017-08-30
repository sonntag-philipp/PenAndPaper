import { SocketIOService } from '../shared/services/socketio.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private cookieService: CookieService, private router: Router, private socketIOService: SocketIOService) {}

  ngOnInit() {
    if(this.cookieService.getObject("session_id") == null){
      this.router.navigate(['/']);
    }
  }

}
