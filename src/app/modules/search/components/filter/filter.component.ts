import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Input() instanceCounter: any;
  @Output() onSortByChange: EventEmitter<any> = new EventEmitter();
  sortConfig: any = {
    sort_by : 'created_at',
    type: 'date',
    order: 'asc'
  };
  constructor() { }

  ngOnInit() {
  }

  /**
   * To update field name to use for sorting
   * and data field of sort field.
   * @param sort_by : string
   * @param type : string
   */
  updateSortBy(sort_by: string, type: string){
    this.sortConfig['sort_by'] = sort_by;
    this.sortConfig['type'] = type;
    this.onSortByChange.emit(this.sortConfig);
  }

  /**
   * To update sort order for sorting.
   * @param sort_order : string
   */
  updateSortOrder(sort_order: string){
    this.sortConfig['order'] = sort_order;
    this.onSortByChange.emit(this.sortConfig);
  }

}
