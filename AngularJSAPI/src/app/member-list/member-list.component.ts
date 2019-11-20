import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {
  
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

    doDelete(id:number){
      this.http.delete('http://localhost:8080/member/'+id).subscribe(res => console.log(res));
    }
  
}
