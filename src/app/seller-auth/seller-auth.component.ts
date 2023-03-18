import { Component } from '@angular/core';
import { signUp } from '../data-type';
import { SelleService } from '../services/selle.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {
  showLogin = true
  authError: string = ''

  constructor(private seller: SelleService) { }

  ngOnInit(): void {
    this.seller.reloadSeller()
  }

  signUp(data: signUp): void {
    this.seller.userSignUp(data)
  }

  login(data: signUp): void {
    this.seller.userLogin(data)
    this.seller.isLoggingError.subscribe((isError) => {
      if (isError) {
        this.authError = 'Email or password is not correct'
      }
    })
  }

  openLogin() {
    this.showLogin = true
  }

  openSignup() {
    this.showLogin = false
  }
}
