import { HolidayService } from 'src/app/core/service/holiday.service';
import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-edit-holiday',
  templateUrl: './edit-holiday.component.html',
  styleUrls: ['./edit-holiday.component.sass'],
})
export class EditHolidayComponent implements OnInit {
  holidayForm: UntypedFormGroup;
  selectedHoliday: any;
  holidayList: any;
  holidayDetials: any;
  formdata = {
    no: '99',
    title: 'christmas Holiday',
    sDate: '2019-12-17T14:22:18Z',
    eDate: '2020-01-04T14:22:18Z',
    type: '1',
    details: 'christmas Holiday',
  };
  breadscrums = [
    {
      title: 'Edit Holiday',
      items: ['Fees'],
      active: 'Edit Holiday',
    },
  ];
  constructor(
    private fb: UntypedFormBuilder,
    private holidayService: HolidayService
  ) {
    this.holidayForm = this.createContactForm();
  }
  ngOnInit(): void {
    this.holidayForm;
    this.getList();
  }
  getList() {
    this.holidayService.getHolidaysList().subscribe((res) => {
      this.holidayList = res;
    });
  }
  onSubmit() {
    this.holidayService
      .editHoliday(this.holidayDetials?.serial, this.holidayForm.value)
      .subscribe();
  }

  getHolidayDetials(id: string) {
    this.holidayService.getHolidayById(id).subscribe((res) => {
      this.holidayDetials = res;
      this.createContactForm();
      this.holidayForm = this.createContactForm();
    });
  }

  onChange() {
    this.getHolidayDetials(this.selectedHoliday);
  }

  createContactForm(): UntypedFormGroup {
    return this.fb.group({
      title: [this.holidayDetials?.name, [Validators.required]],
      sDate: [this.holidayDetials?.startDate, [Validators.required]],
      eDate: [this.holidayDetials?.endDate, [Validators.required]],
      type: [this.holidayDetials?.type, [Validators.required]],
      details: [this.holidayDetials?.details],
    });
  }
}
