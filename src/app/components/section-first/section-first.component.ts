import { Component, OnInit } from '@angular/core';
import {DeviceDetectorService} from "ngx-device-detector";

@Component({
  selector: 'app-section-first',
  templateUrl: './section-first.component.html',
  styleUrls: ['./section-first.component.scss']
})
export class SectionFirstComponent implements OnInit {

  dateNow: number = new Date().getTime();

  stylesDate = `
    font-size: 45px;
    text-align:center;
    color: #FFF;
    filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
    padding: 13px 20px;
    font-weight: bold;
    min-width:40px;
    margin:0 10px;
  `;

  constructor(private deviceService: DeviceDetectorService) {
    if (deviceService.isMobile()) {
      this.stylesDate = `
        font-size: 35px;
        text-align: center;
        filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
        color: #FFF;
        padding: 8px 15px;
        font-weight: bold;
        min-width: 20px;
        margin:0 1px;
      `
    }
  }

  ngOnInit(): void {

  }

}
