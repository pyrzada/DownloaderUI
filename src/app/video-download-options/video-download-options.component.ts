import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-video-download-options',
  templateUrl: './video-download-options.component.html',
  styleUrls: ['./video-download-options.component.css']
})
export class VideoDownloadOptionsComponent implements OnInit {
  @Input() urls: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
