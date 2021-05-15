import { Component, Input, OnInit } from '@angular/core';
import { CreditApprovalsService } from '../../services/credit-approvals.service'

@Component({
  selector: 'app-client-analyzers',
  templateUrl: './client-analyzers.component.html',
  styleUrls: ['./client-analyzers.component.css']
})
export class ClientAnalyzersComponent implements OnInit {

  @Input() clientAnalyzers: any;

  constructor(private creditApprovalsService: CreditApprovalsService) { }

  ngOnInit(): void {
  }

  approveCredit():void{
    const data = {
      amount: 123,
      approvement: true
    };
    this.creditApprovalsService.update(this.credit.id, data).subscribe(
      res => {
        console.log(res);
      },
      error => {
        console.log(error);
      }
    );
  }

}
