import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-video-info',
  templateUrl: './video-info.component.html',
  styleUrls: ['./video-info.component.css']
})
export class VideoInfoComponent implements OnInit {
  @Input() infoData:any;
  constructor() { }

  ngOnInit(): void {
  }

}
