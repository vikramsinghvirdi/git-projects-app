import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'ng-connection-service';
@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
  isConnected = true;
  /**
   * Checks for connection and if not found sets flag to show alert
   * @param connectionService 
   */
  constructor(private connectionService: ConnectionService) {
    this.connectionService.monitor().subscribe(isConnected => {
      this.isConnected = isConnected;
    });
  }
  ngOnInit() {
  }

}
