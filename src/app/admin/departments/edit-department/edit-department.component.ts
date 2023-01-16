import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ClassesService } from 'src/app/core/service/classes.service';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.sass'],
})
export class EditDepartmentComponent {
  departmentForm: UntypedFormGroup;
  selectedClass: any;
  ClassList: any;
  ClasssDetails: any;

  breadscrums = [
    {
      title: 'Edit Department',
      items: ['Department'],
      active: 'Edit',
    },
  ];

  constructor(
    private fb: UntypedFormBuilder,
    private classService: ClassesService
  ) {}

  ngOnInit(): void {
    this.departmentForm = this.createContactForm();
    this.getList();
  }
  onSubmit() {
    this.classService
      .editClass(this.ClasssDetails?.userId, this.departmentForm.value)
      .subscribe();
  }

  getList() {
    this.classService.getClassesList().subscribe((res) => {
      this.ClassList = res;
    });
  }

  getClassDetails(id: string) {
    this.classService.getClassById(id).subscribe((res) => {
      this.ClasssDetails = res;
      this.createContactForm();
      this.departmentForm = this.createContactForm();
    });
  }

  onChange() {
    this.getClassDetails(this.selectedClass);
  }

  createContactForm(): UntypedFormGroup {
    return this.fb.group({
      educationType: [this.ClasssDetails?.educationType, [Validators.required]],
      educationlevel: [
        this.ClasssDetails?.educationlevel,
        [Validators.required],
      ],
      classId: [this.ClasssDetails?.classId, [Validators.required]],
    });
  }
}
