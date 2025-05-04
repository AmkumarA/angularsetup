import { Component, inject, OnInit } from '@angular/core';
import { BaseService } from '../../services/base.service';

@Component({
  selector: 'app-use-details',
  imports: [],
  templateUrl: './use-details.component.html',
  styleUrl: './use-details.component.scss'
})
export class UseDetailsComponent implements OnInit {
  baseService = inject(BaseService)
  ngOnInit(): void {
    this.getUserDetails()
  }
  getUserDetails() {
    this.baseService.GetAuth('/getUserDetails').subscribe((res: any) => {
      console.log(res);

    })
  }
}
