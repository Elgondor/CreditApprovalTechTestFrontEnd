import { Component, OnInit } from '@angular/core';
import { CreditApprovalsService } from '../../services/credit-approvals.service'

@Component({
  selector: 'app-credit-list',
  templateUrl: './credit-list.component.html',
  styleUrls: ['./credit-list.component.css']
})
export class CreditListComponent implements OnInit {

  creditList:any[];

  constructor(private creditApprovalsService: CreditApprovalsService) { 
    this.creditList = [];
  }

  ngOnInit(): void {
    this.getCreditList();
  }

  getCreditList():void{
    this.creditApprovalsService.getAll().subscribe(
      res => {
        this.creditList = res;
        console.log(res);
      }
    );
  }

}
