import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  returnedValue : any;
  isSubmitted : boolean = false;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  filenames = ['taylor_swift.xlsx', 'Fiction.xlsx',
  'taylor_swift.xlsx'];

  readExcelForm = new FormGroup({
    cellId: new FormControl('',Validators.required),
    filename: new FormControl('',Validators.required)
  });

  

  onSubmit() {
    this.isSubmitted = true;
    console.log("Values returned from back end :" + JSON.stringify(this.readExcelForm.value));
    this.apiService.readExcelData(this.readExcelForm.value).subscribe(res => {
      let data =  res;
      this.returnedValue= JSON.parse(JSON.stringify(data)).row;
    });
  
 }

}
