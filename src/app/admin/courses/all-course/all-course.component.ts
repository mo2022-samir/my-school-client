import { SelectionModel, DataSource } from '@angular/cdk/collections';
import { HttpClient } from '@angular/common/http';
import {
  Component,
  ViewChild,
  ElementRef,
  OnInit,
  DoCheck,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { fromEvent, BehaviorSubject, Observable, merge, map } from 'rxjs';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';
import { DeleteDialogComponent } from './dialogs/delete/delete.component';
import { FormDialogComponent } from './dialogs/form-dialog/form-dialog.component';
import { Courses } from './courses.model';
import { CourseService } from '../all-course/course.service';

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
export class AllCourseComponent
  extends UnsubscribeOnDestroyAdapter
  implements OnInit, DoCheck
{
  displayedColumns = [
    'select',
    'no',
    'name',
    'studyYear',
    'educationType',
    'actions',
  ];
  exampleDatabase: CourseService | null;
  dataSource: ExampleDataSource | null;
  selection = new SelectionModel<Courses>(true, []);
  id: number;
  courses: Courses | null;
  breadscrums = [
    {
      title: 'All Courese',
      items: ['Course'],
      active: 'All Courses',
    },
  ];
  constructor(
    public httpClient: HttpClient,
    public dialog: MatDialog,
    public courseService: CourseService,
    private snackBar: MatSnackBar
  ) {
    super();
  }
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild('filter', { static: true }) filter: ElementRef;
  @ViewChild(MatMenuTrigger)
  contextMenu: MatMenuTrigger;
  contextMenuPosition = { x: '0px', y: '0px' };

  ngOnInit() {
    this.loadData();
  }
  ngDoCheck(): void {
    // this.exampleDatabase.isTblLoading == false? this.loadData() :this.loadData() ;
  }
  refresh() {
    this.loadData();
  }
  addNew() {
    let tempDirection;
    if (localStorage.getItem('isRtl') === 'true') {
      tempDirection = 'rtl';
    } else {
      tempDirection = 'ltr';
    }
    const dialogRef = this.dialog.open(FormDialogComponent, {
      data: {
        courses: this.courses,
        action: 'add',
      },
      direction: tempDirection,
    });
    this.subs.sink = dialogRef.afterClosed().subscribe((result) => {
      if (result === 1) {
        // After dialog is closed we're doing frontend updates
        // For add we're just pushing a new row inside DataServicex
        this.exampleDatabase.dataChange.value.unshift(
          this.courseService.getDialogData()
        );
        this.refreshTable();
        this.showNotification(
          'snackbar-success',
          'Add Record Successfully...!!!',
          'bottom',
          'center'
        );
      }
    });
  }
  editCall(row) {
    this.id = row.id;
    let tempDirection;
    if (localStorage.getItem('isRtl') === 'true') {
      tempDirection = 'rtl';
    } else {
      tempDirection = 'ltr';
    }
    const dialogRef = this.dialog.open(FormDialogComponent, {
      data: {
        courses: row,
        action: 'edit',
      },
      direction: tempDirection,
    });
    this.subs.sink = dialogRef.afterClosed().subscribe((result) => {
      if (result === 1) {
        // When using an edit things are little different, firstly we find record inside DataService by id
        const foundIndex = this.exampleDatabase.dataChange.value.findIndex(
          (x) => Number(x.subjectId) === this.id
        );
        // Then you update that record using data from dialogData (values you enetered)
        this.exampleDatabase.dataChange.value[foundIndex] =
          this.courseService.getDialogData();
        // And lastly refresh table
        this.refresh();
        this.showNotification(
          'black',
          'Edit Record Successfully...!!!',
          'bottom',
          'center'
        );
      }
    });
  }
  deleteItem(row) {
    this.id = row.serial;
    let tempDirection;
    if (localStorage.getItem('isRtl') === 'true') {
      tempDirection = 'rtl';
    } else {
      tempDirection = 'ltr';
    }
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: row,
      direction: tempDirection,
    });
    this.subs.sink = dialogRef.afterClosed().subscribe((result) => {
      if (result === 1) {
        const foundIndex = this.exampleDatabase.dataChange.value.findIndex(
          (x) => Number(x.subjectId) === this.id
        );
        // for delete we use splice in order to remove single object from DataService
        this.exampleDatabase.dataChange.value.splice(foundIndex, 1);
        this.refreshTable();
        this.showNotification(
          'snackbar-danger',
          'Delete Record Successfully...!!!',
          'bottom',
          'center'
        );
      }
    });
  }
  private refreshTable() {
    this.paginator._changePageSize(this.paginator.pageSize);
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.renderedData.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.renderedData.forEach((row) =>
          this.selection.select(row)
        );
  }
  removeSelectedRows() {
    const totalSelect = this.selection.selected.length;
    this.selection.selected.forEach((item) => {
      const index: number = this.dataSource.renderedData.findIndex(
        (d) => d === item
      );
      // console.log(this.dataSource.renderedData.findIndex((d) => d === item));
      this.exampleDatabase.dataChange.value.splice(index, 1);
      this.exampleDatabase.deleteCourses(item.subjectId);
      this.refreshTable();
      this.selection = new SelectionModel<Courses>(true, []);
    });
    this.showNotification(
      'snackbar-danger',
      totalSelect + ' Record Delete Successfully...!!!',
      'bottom',
      'center'
    );
  }
  public loadData() {
    this.exampleDatabase = new CourseService(this.httpClient);
    this.dataSource = new ExampleDataSource(
      this.exampleDatabase,
      this.paginator,
      this.sort
    );
    this.subs.sink = fromEvent(this.filter.nativeElement, 'keyup').subscribe(
      () => {
        if (!this.dataSource) {
          return;
        }
        this.dataSource.filter = this.filter.nativeElement.value;
      }
    );
  }
  showNotification(colorName, text, placementFrom, placementAlign) {
    this.snackBar.open(text, '', {
      duration: 2000,
      verticalPosition: placementFrom,
      horizontalPosition: placementAlign,
      panelClass: colorName,
    });
  }
  // context menu
  onContextMenu(event: MouseEvent, item: Courses) {
    event.preventDefault();
    this.contextMenuPosition.x = event.clientX + 'px';
    this.contextMenuPosition.y = event.clientY + 'px';
    this.contextMenu.menuData = { item: item };
    this.contextMenu.menu.focusFirstItem('mouse');
    this.contextMenu.openMenu();
  }
}
export class ExampleDataSource extends DataSource<Courses> {
  filterChange = new BehaviorSubject('');
  get filter(): string {
    return this.filterChange.value;
  }
  set filter(filter: string) {
    this.filterChange.next(filter);
  }
  filteredData: Courses[] = [];
  renderedData: Courses[] = [];
  constructor(
    public exampleDatabase: CourseService,
    public paginator: MatPaginator,
    public _sort: MatSort
  ) {
    super();
    // Reset to the first page when the user changes the filter.
    this.filterChange.subscribe(() => (this.paginator.pageIndex = 0));
  }
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Courses[]> {
    // Listen for any changes in the base data, sorting, filtering, or pagination
    const displayDataChanges = [
      this.exampleDatabase.dataChange,
      this._sort.sortChange,
      this.filterChange,
      this.paginator.page,
    ];
    this.exampleDatabase.getAllCourses();
    return merge(...displayDataChanges).pipe(
      map(() => {
        // Filter data
        this.filteredData = this.exampleDatabase.data
          .slice()
          .filter((courses: Courses) => {
            const searchStr = (
              courses.subjectId +
              courses.name +
              courses.studyYear +
              courses.educationType
            )
              .toString()
              .toLowerCase();
            // console.log(searchStr)
            return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
          });
        // Sort filtered data
        const sortedData = this.sortData(this.filteredData.slice());
        // Grab the page's slice of the filtered sorted data.
        const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        this.renderedData = sortedData.splice(
          startIndex,
          this.paginator.pageSize
        );
        return this.renderedData;
      })
    );
  }
  disconnect() {}
  /** Returns a sorted copy of the database data. */
  sortData(data: Courses[]): Courses[] {
    if (!this._sort.active || this._sort.direction === '') {
      return data;
    }
    return data.sort((a, b) => {
      let propertyA: number | string = '';
      let propertyB: number | string = '';
      switch (this._sort.active) {
        case 'id':
          [propertyA, propertyB] = [a.subjectId, b.subjectId];
          break;
        case 'name':
          [propertyA, propertyB] = [a.name + a.name, b.name + b.name];
          break;
        case 'studyYear':
          [propertyA, propertyB] = [a.studyYear, b.studyYear];
          break;
        case 'educationType':
          [propertyA, propertyB] = [a.educationType, b.educationType];
          break;
      }
      const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      const valueB = isNaN(+propertyB) ? propertyB : +propertyB;
      return (
        (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1)
      );
    });
  }
}
