import { Component, Input, OnInit } from '@angular/core';
import { CreditApprovalsService } from '../../services/credit-approvals.service'

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']
})
export class CreditComponent implements OnInit {
  @Input() credit: any;

  clientAnalyzers:any;

  watchAnalyzers:boolean;

  constructor(private creditApprovalsService: CreditApprovalsService) {
    this.watchAnalyzers = false;
  }

  ngOnInit(): void {
    
  }

  approveCredit():void{
    const data = {
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

  getClientAnalyzers():boolean{
    this.creditApprovalsService.getClientAnalyzers(1).subscribe(
      res => {
        this.clientAnalyzers = res;
        console.log(res);
        this.watchAnalyzers = true;
      }
    );
    return false;
  }

  dismissAnalyzers():boolean{
    this.watchAnalyzers = false;
    return false;
  }

}
