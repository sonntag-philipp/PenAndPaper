import { AccountService } from '../shared/services/account.service';
import { ActivatedRoute, Data } from '@angular/router';
import { AccountModel } from './../shared/models/account.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private accountService: AccountService
  ) { }

  ngOnInit() {
    console.log(this.accountService.account);

  }

}
