import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Output() onSearchChange: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onTextChange(event: any){
    this.onSearchChange.emit({
      value: event.target.value
    });
  }

}
