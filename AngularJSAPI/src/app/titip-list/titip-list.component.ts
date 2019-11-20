import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
@Component({
  selector: 'app-titip-list',
  templateUrl: './titip-list.component.html',
  styleUrls: ['./titip-list.component.scss']
})
export class TitipListComponent implements OnInit {

  constructor(private http: HttpClient) { }
  httpdata;
  ngOnInit(): void{
    this.http.get('http://localhost:8080/titip')
    .subscribe(data => {
    console.log(data);      
    this.displaydata(data);
    });
  }
  displaydata(data) {
    this.httpdata = data;
  }

  doDelete(id:number){
    this.http.delete('http://localhost:8080/titip/'+id).subscribe(res => console.log(res));
  }
  

}
