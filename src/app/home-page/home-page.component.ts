import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../providers/auth.service';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-home-page',
  // viewProviders: [HTTP_PROVIDERS],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  secret: any = JSON.stringify({"client_id":'hF7QQ8hV697qU2S0WRmzvA',
                 "client_secret":"7PdoWkjOYSZLt7ung4tDczoWarsFZRZCRezqwY6TnyVJmMQIcGyf7j8tczLufMQp"
  });
  // secret: any = 'client_id=hF7QQ8hV697qU2S0WRmzvA&client_secret=7PdoWkjOYSZLt7ung4tDczoWarsFZRZCRezqwY6TnyVJmMQIcGyf7j8tczLufMQp';
  token: any;


  constructor(private authService: AuthService, private router: Router, private http: Http) {

  }

  ngOnInit() {
    // console.log(this.http.post('https://api.yelp.com/oauth2/token', this.secret));
    // this.http.post('../../../test-db.json').map(response => console.log(response));
    this.http.get('https://reqres.in/api/users').subscribe(data => console.log(data.json()));
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }

}
