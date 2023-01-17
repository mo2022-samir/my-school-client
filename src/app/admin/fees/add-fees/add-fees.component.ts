import { FeeService } from '../../../core/service/fee.service';
import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { StudentService } from 'src/app/core/service/student.service';

@Component({
  selector: 'app-add-fees',
  templateUrl: './add-fees.component.html',
  styleUrls: ['./add-fees.component.sass'],
})
export class AddFeesComponent implements OnInit {
  feesForm: UntypedFormGroup;
  selectedStudent;
  studentsList;
  studentId;
  studentDetails;
  breadscrums = [
    {
      title: 'Add Fees',
      items: ['Fees'],
      active: 'Add Fees',
    },
  ];
  constructor(
    private fb: UntypedFormBuilder,
    private feeService: FeeService,
    private studentSerivce: StudentService
  ) {
    this.feesForm = this.fb.group({
      studentId: ['', [Validators.required]],
      sName: [''],
      feeType: ['', [Validators.required]],
      department: [''],
      dueDate: ['', [Validators.required]],
      paymentType: ['', [Validators.required]],
      status: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      details: [''],
    });
  }
  ngOnInit(): void {
    this.getList();
  }
  getList() {
    this.studentSerivce.getStudentsList().subscribe((res) => {
      this.studentsList = res;
    });
  }

  getFeeDetails(id: number) {
    this.studentSerivce.getStudentById(id).subscribe((res) => {
      this.studentDetails = res;
      this.studentDetails.userId = this.studentId;
      console.log(this.studentId);
    });
  }
  onChange() {
    this.getFeeDetails(this.selectedStudent);
  }
  onSubmit() {
    let formData = this.feesForm.value;
    this.feeService.addNewFee(formData).subscribe();
  }
}
