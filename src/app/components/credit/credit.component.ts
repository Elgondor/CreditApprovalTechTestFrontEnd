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

  approveCredit():boolean{
    const data = {
      approvement: true
    };
    this.creditApprovalsService.update(this.credit.id, data).subscribe(
      res => {
        console.log(res);
        window.location.reload();
      },
      error => {
        console.log(error);
      }
    );

    return false;
  }

  getClientAnalyzers():boolean{
    this.creditApprovalsService.getClientAnalyzers(this.credit.client).subscribe(
      res => {
        this.clientAnalyzers = res;
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
