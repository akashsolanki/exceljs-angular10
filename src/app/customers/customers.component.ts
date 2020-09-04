import { Component, OnInit , HostListener} from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener("window:beforeunload", ["$event"])
    unloadNotification($event: any) {
      $event.returnValue = true;
      console.log($event);
    }
}
