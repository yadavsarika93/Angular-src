import { Component, OnInit, Input, EventEmitter, Output
  styleUrls: ['./subcomponent.component.css']
})
export class SubcomponentComponent implements OnInit 
{
  // Create object of event class
  @Output() public MyEvent = new EventEmitter();
 
  // Action listener for button } from '@angular/core';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-subcomponent',
  templateUrl: './subcomponent.component.html',
  public SendEvent()
  {
    // Send the event to parent
    this.MyEvent.emit('Hello from child');
  }
  constructor() { }

  ngOnInit() {
  }

}
