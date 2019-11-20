import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';

@Component({
  selector: 'app-titip-form',
  templateUrl: './titip-form.component.html',
  styleUrls: ['./titip-form.component.scss']
})
export class TitipFormComponent implements OnInit {
  id_member:String='';
  kode_titip:String='';
  nama:String='';
  jenisHewan:String='';
  status:String='';
  jenisJasa:String='';
  nik:String='';
  alamat:String='';
  noHp:String='';

  constructor(private http: HttpClient){
  }
  httpdata;
  ngOnInit(): void{
    this.http.get('http://localhost:8080/member')
    .subscribe(data => {
    console.log(data);
    this.displaydatamember(data);
  }); 
  }
  displaydatamember(data) {
    this.httpdata = data;
  }

  displaydatamemberbyid(data1) {
    this.httpdata = data1;
    this.nama=data1.nama;
  }

  doPost(){    
    this.http.get('http://localhost:8080/member/'+this.id_member)
    .subscribe(data1 => {
    console.log(data1);
    this.displaydatamemberbyid(data1);
  });
   console.log(this.id_member);
   
    this.http.post('http://localhost:8080/titip',{
      jenisHewan:this.jenisHewan, 
      jenisJasa:this.jenisJasa,
      status:this.status,
      member:{
        id_member:this.id_member,
        nama:this.nama,
        nik:this.nik,
        noHp:this.noHp,
        alamat:this.alamat
      }
     }).subscribe(res => console.log(res));
            
 }
}