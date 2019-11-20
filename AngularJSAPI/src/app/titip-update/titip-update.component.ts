import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';

@Component({
  selector: 'app-titip-update',
  templateUrl: './titip-update.component.html',
  styleUrls: ['./titip-update.component.scss']
})
export class TitipUpdateComponent implements OnInit {
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
    this.http.get('http://localhost:8080/titip/'+this.kode_titip)
    .subscribe(data => {  
    console.log(data);
    this.displaydatatitipbyid(data);
    });

    this.http.get('http://localhost:8080/member/')
    .subscribe(data1 => {
    console.log(data1);   
    this.displaydatamember(data1);
    });
}

  displaydatatitipbyid(data) {
    this.nama=data.member.nama;
    this.jenisHewan=data.jenisHewan;
    this.jenisJasa=data.jenisJasa;
    this.status=data.status;
  }

  displaydatamember(data) {
    this.httpdata = data;
  }

  doUpdate(){
    this.http.put('http://localhost:8080/titip/',{
      kode_titip:this.kode_titip,
      jenisHewan:this.jenisHewan,
      jenisJasa:this.jenisJasa,
      status:this.status,
      member:{
        id_member:this.id_member,
        nik:this.nik,
        nama:this.nama,
        alamat:this.alamat,
        noHp:this.noHp
      }
    })
    .subscribe(res => console.log(res));              
 }

}
