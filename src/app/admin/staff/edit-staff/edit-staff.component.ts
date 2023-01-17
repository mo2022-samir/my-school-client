import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { StaffService } from 'src/app/core/service/staff.service';
@Component({
  selector: 'app-edit-staff',
  templateUrl: './edit-staff.component.html',
  styleUrls: ['./edit-staff.component.sass'],
})
export class EditStaffComponent implements OnInit {
  staffForm: UntypedFormGroup;
  selectedstaff;
  staffDetails: any;
  list;
  formdata = {
    first: 'Pooja',
    last: 'Sarma',
    gender: 'Female',
    mobile: '123456789',
    password: '123',
    conformPassword: '123',
    email: 'test@example.com',
    designation: 'John Deo',
    department: '2',
    address: '101, Elanxa, New Yourk',
    dob: '1987-02-17T14:22:18Z',
    education: 'M.Com.,P.H.D.',
    uploadFile: '',
  };
  breadscrums = [
    {
      title: 'Edit Staff',
      items: ['Staff'],
      active: 'Edit Staff',
    },
  ];
  constructor(
    private fb: UntypedFormBuilder,
    private staffServive: StaffService
  ) {
    this.staffForm = this.createContactForm();
  }
  ngOnInit(): void {
    this.getList();
  }
  getList() {
    this.staffServive.getStaffList().subscribe((res) => {
      this.list = res;
      console.log(this.list);
    });
  }
  getAssetDetails(id: any) {
    this.staffServive.getStaffById(id).subscribe((res) => {
      this.staffDetails = res;
      this.createContactForm;
      this.staffForm = this.createContactForm();
    });
  }

  onChange() {
    this.getAssetDetails(this.selectedstaff);
  }
  onSubmit() {
    this.staffServive
      .editStaff(this.staffDetails.id, this.staffForm.getRawValue())
      .subscribe();
  }
  createContactForm(): UntypedFormGroup {
    return this.fb.group({
      first: [
        this.staffDetails?.first,
        [Validators.required, Validators.pattern('[a-zA-Z]+')],
      ],
      last: [this.staffDetails?.last],
      gender: [this.staffDetails?.gender, [Validators.required]],
      mobile: [this.staffDetails?.mobile, [Validators.required]],
      password: [this.staffDetails?.password],
      conformPassword: [this.staffDetails?.conformPassword],
      email: [
        this.staffDetails?.email,
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      designation: [this.staffDetails?.designation],
      department: [this.staffDetails?.department],
      address: [this.staffDetails?.address],
      dob: [this.staffDetails?.dob, [Validators.required]],
      education: [this.staffDetails?.education],
      uploadFile: [this.staffDetails?.uploadFile],
    });
  }
}
