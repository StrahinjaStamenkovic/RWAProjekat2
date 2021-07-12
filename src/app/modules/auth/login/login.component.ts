import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import * as fromAuthActions from 'src/app/store/actions/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  faSignInAlt = faSignInAlt;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}
  onSubmit(f: NgForm) {
    console.log(f.value.username, f.value.password);
    this.store.dispatch(
      fromAuthActions.loginPage({
        username: f.value.username,
        password: f.value.password,
      })
    );

    return false;
  }
}
