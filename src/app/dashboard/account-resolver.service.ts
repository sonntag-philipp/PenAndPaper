import { AccountService } from './../shared/services/account.service';
import { AccountModel } from './../shared/models/account.model';
import { Observable } from 'rxjs/Rx';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';


@Injectable()
export class AccountResolver implements Resolve<AccountModel> {

  constructor (
    private accountService: AccountService
  ) {

  }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<AccountModel> | Promise<AccountModel> | AccountModel {
    return this.accountService.getAccount(route.params['accountID']);
  }
}