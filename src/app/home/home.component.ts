import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { Observable } from 'rxjs/Rx';
import { ToolbarService } from './../toolbar/toolbar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public toolbarService: ToolbarService,
    private cookieService: CookieService,
    private router: Router
  ) { }

  ngOnInit() {
    this.toolbarService.title = "Pen and Paper - Home";

    if(this.cookieService.get("accountID") != undefined) {
      this.router.navigate(
        ['dashboard', this.cookieService.get("accountID")]
      );
    }
  }

}
