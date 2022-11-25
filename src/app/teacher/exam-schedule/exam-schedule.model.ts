import { formatDate } from '@angular/common';
export class ExamSchedule {
  id: number;
  subject: string;
  class: string;
  date: string;
  time: string;
  duration: string;
  roomNo: string;
  totalMarks: string;
  reqMarks: string;

  constructor(examSchedule) {
    {
      this.id = examSchedule.id || this.getRandomID();
      this.subject = examSchedule.subject || '';
      this.class = examSchedule.class || '';
      this.date = formatDate(new Date(), 'yyyy-MM-dd', 'en') || '';
      this.time = examSchedule.time || '';
      this.duration = examSchedule.duration || '';
      this.roomNo = examSchedule.roomNo || '';
      this.totalMarks = examSchedule.totalMarks || '';
      this.reqMarks = examSchedule.reqMarks || '';
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
