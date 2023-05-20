import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-probono',
  templateUrl: './probono.component.html',
  styleUrls: ['./probono.component.css']
})
export class ProbonoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  formData = {
    name: '',
    email: '',
    mobile:'',
    address:'',
    details:''
  };

  onSubmit() {
    console.log(this.formData);
  }
}
