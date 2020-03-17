import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const userInfo = {
      fullName: 'John Doe',
      id: 1
    };
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
  }

}
