import { Component, OnInit } from '@angular/core';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-disemp',
  templateUrl: './disemp.component.html',
  styleUrls: ['./disemp.component.scss']
})
export class DisempComponent implements OnInit {


  constructor(private service:ServService) { }

  ngOnInit(): void {
    this.GetEmployee()
  }
EmpDatas:any

  GetEmployee(){

    this.service.GetEmployee().subscribe((data:any)=>{
      this.EmpDatas=data.employeeList
    })
  }

}
