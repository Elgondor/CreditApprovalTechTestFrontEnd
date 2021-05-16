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

}
