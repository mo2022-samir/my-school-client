import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  no: number;
  code: number;
  speciality: string;
  year: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { no: 1, name: 'Hydrogen', code: 1.0079, speciality: 'Math', year: 'first' },
  { no: 2, name: 'Helium', code: 4.0026, speciality: 'Math', year: 'first' },
  { no: 3, name: 'Lithium', code: 6.941, speciality: 'Math', year: 'first' },
  { no: 4, name: 'Beryllium', code: 9.0122, speciality: 'Math', year: 'first' },
  { no: 5, name: 'Boron', code: 10.811, speciality: 'Math', year: 'first' },
  { no: 6, name: 'Carbon', code: 12.0107, speciality: 'Math', year: 'first' },
  { no: 7, name: 'Nitrogen', code: 14.0067, speciality: 'Math', year: 'first' },
  { no: 8, name: 'Oxygen', code: 15.9994, speciality: 'Math', year: 'first' },
  { no: 9, name: 'Fluorine', code: 18.9984, speciality: 'Math', year: 'first' },
  { no: 10, name: 'Neon', code: 20.1797, speciality: 'Math', year: 'first' },
  { no: 11, name: 'Sodium', code: 22.9897, speciality: 'Math', year: 'first' },
  {
    no: 12,
    name: 'Magnesium',
    code: 24.305,
    speciality: 'Math',
    year: 'first',
  },
  { no: 13, name: 'Alumino', code: 26.9815, speciality: 'Math', year: 'first' },
  { no: 14, name: 'Silicon', code: 28.0855, speciality: 'Math', year: 'first' },
  {
    no: 15,
    name: 'Phosphorus',
    code: 30.9738,
    speciality: 'Math',
    year: 'first',
  },
  { no: 16, name: 'Sulfur', code: 32.065, speciality: 'Math', year: 'first' },
  { no: 17, name: 'Chlorine', code: 35.453, speciality: 'Math', year: 'first' },
  { no: 18, name: 'Argon', code: 39.948, speciality: 'Math', year: 'first' },
  {
    no: 19,
    name: 'Potassium',
    code: 39.0983,
    speciality: 'Math',
    year: 'first',
  },
  { no: 20, name: 'Calcium', code: 40.078, speciality: 'Math', year: 'first' },
];
@Component({
  selector: 'app-all-course',
  templateUrl: './all-course.component.html',
  styleUrls: ['./all-course.component.sass'],
})
export class AllCourseComponent implements AfterViewInit {
  breadscrums = [
    {
      title: 'All Courses',
      items: 'Course',
      active: 'All Courses',
    },
  ];
  displayedColumns: string[] = ['no', 'name', 'code', 'speciality', 'year'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
