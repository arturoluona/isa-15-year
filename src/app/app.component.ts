import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'invitation-married';
  isFamiliar = false;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParamMap
      .subscribe((params) => {
          this.isFamiliar = !!params.get('familiar');
        }
      );
  }
}
