import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-repo-card',
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.scss']
})
export class RepoCardComponent implements OnInit {

  @Input() data: any;
  @Output() onAction: EventEmitter<any> = new EventEmitter();
  public openState: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  showDashboard(event: any){
    this.onAction.emit({
      type: 'show-dashboard',
      data: this.data
    })
  }
}
