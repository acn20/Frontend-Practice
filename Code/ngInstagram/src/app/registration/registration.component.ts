import { Component, OnInit } from '@angular/core';
import { InstagramService } from '../insta-common/instagram.service';
import { Credentials } from '../insta-common/credentials';
import { RegistrationResponse } from '../insta-common/responses/registration-response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  username: string;
  password: string;
  mobileEmail: string;
  fullName: string;
  response: string;

  constructor(private dataService: InstagramService, private router: Router) { }

  ngOnInit() {
  }

  register() {
    const credentials = new Credentials();
    credentials.username = this.username;
    credentials.password = this.password;
    this.dataService.register(credentials).subscribe((res: RegistrationResponse) => {
      console.log(res);

      if (!res.success) {
        // show error. you can use res.error
        this.response = res.error;
        console.log('failed');
      } else {
        // show success
        this.response = "Success";
        console.log('success');

        this.router.navigate(['/home']); // or maybe /home
      }
    });
  }

}
