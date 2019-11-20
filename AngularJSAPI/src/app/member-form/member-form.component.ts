import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.scss']
})
export class MemberFormComponent implements OnInit {

  nik:string = '';
  nama:string = '';
  alamat:string = '';
  nohp:string = '';

  constructor(private http: HttpClient) { }
  httpdata;
  ngOnInit(): void{
    this.http.get('http://localhost:8080/member')
    .subscribe(data => {
      console.log(data);      
      this.displaydata(data);
      });
    }
  displaydata(data) {
     this.httpdata = data;
  }

  doPost(){
    this.http.post('http://localhost:8080/member',{
      nik:this.nik, 
      nama:this.nama,
      alamat:this.alamat,
      noHp:this.nohp
    })
    .subscribe(res => console.log(res));
  }

}
