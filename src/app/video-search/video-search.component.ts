import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {UtilService} from "../services/util.service";

@Component({
  selector: 'app-video-search',
  templateUrl: './video-search.component.html',
  styleUrls: ['./video-search.component.css']
})
export class VideoSearchComponent implements OnInit {

  searchForm: any;
  downloadOptions: any

  constructor(private formBuilder: FormBuilder, private utilsService: UtilService) {
  }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      search: ['', Validators.required]
    })
  }

  searchUrl() {
    this.utilsService.searchUrl(this.searchForm.value.search).subscribe((data) => {
      this.downloadOptions = data;
      debugger
    })
  }
}
