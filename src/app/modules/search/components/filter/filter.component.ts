import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Output() onSortByChange: EventEmitter<any> = new EventEmitter();
  sortConfig: any = {
    sort_by : 'created_at',
    type: 'date',
    order: 'asc'
  };
  constructor() { }

  ngOnInit() {
  }

  updateSortBy(sort_by: any, type: any){
    this.sortConfig['sort_by'] = sort_by;
    this.sortConfig['type'] = type;
    this.onSortByChange.emit(this.sortConfig);
  }

  updateSortOrder(sort_order: any){
    this.sortConfig['order'] = sort_order;
    this.onSortByChange.emit(this.sortConfig);
  }

}
