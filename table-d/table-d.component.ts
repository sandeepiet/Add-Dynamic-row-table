import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-d',
  templateUrl: './table-d.component.html',
  styleUrls: ['./table-d.component.css']
})
export class TableDComponent implements OnInit {


  private fieldArray: Array<any> = [];
    private newAttribute: any = {};

    addFieldValue() {
        this.fieldArray.push(this.newAttribute)
        this.newAttribute = {};
    }

    deleteFieldValue(index) {
        this.fieldArray.splice(index, 1);
    }

  constructor() { }

  ngOnInit() {
  }

}
