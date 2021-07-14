import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-test-error',
  templateUrl: './test-error.component.html',
  styleUrls: ['./test-error.component.scss']
})
export class TestErrorComponent implements OnInit {
  baseUrl = environment.apiUrl;
  validationErrors: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  get404Error(){
    this.http.get(this.baseUrl + 'products/42').subscribe(resp => {
      console.log(resp);
    }, error => {
      console.log(error)
    })
  }

  get400Error(){
    this.http.get(this.baseUrl + 'buggy/badrequest').subscribe(resp => {
      console.log(resp);
    }, error => {
      console.log(error)
    })
  }

  get500Error(){
    this.http.get(this.baseUrl + 'buggy/servererror').subscribe(resp => {
      console.log(resp);
    }, error => {
      console.log(error)
    })
  }

  get400ValError(){
    this.http.get(this.baseUrl + 'products/fortytwo').subscribe(resp => {
      console.log(resp);
    }, error => {
      console.log(error);
      this.validationErrors = error.errors;
    })
  }


}
