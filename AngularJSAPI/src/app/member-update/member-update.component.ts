import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-member-update',
  templateUrl: './member-update.component.html',
  styleUrls: ['./member-update.component.scss']
})
export class MemberUpdateComponent implements OnInit {
  id:string = '';
  nik:string = '';
  nama:string = '';
  alamat:string = '';
  nohp:string = '';

  constructor(private http: HttpClient,private route: ActivatedRoute) { }
  httpdata;
  ngOnInit(): void{
    console.log(this.route); 
    this.id = this.route.snapshot.params.id;
    this.http.get('http://localhost:8080/member/'+this.id)
    .subscribe(data => {
      console.log(data);           
      this.displaydataId(data);
      });
    }
  displaydataId(data) {
    this.nik=data.nik;
    this.nama=data.nama;
    this.alamat=data.alamat;
    this.nohp=data.noHp;     
  }

  doUpdate(){
    this.http.put('http://localhost:8080/member/',{
      id_member:this.id,
      nik:this.nik, 
      nama:this.nama,
      alamat:this.alamat,
      noHp:this.nohp
    })
    .subscribe(res => console.log(res));
  }
  
}