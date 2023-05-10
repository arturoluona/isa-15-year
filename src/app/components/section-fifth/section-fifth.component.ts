import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-section-fifth',
  templateUrl: './section-fifth.component.html',
  styleUrls: ['./section-fifth.component.scss']
})
export class SectionFifthComponent implements OnInit {
  @Input() isFamiliar = false;

  constructor() { }

  ngOnInit(): void {
  }

}
