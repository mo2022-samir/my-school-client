import { formatDate } from '@angular/common';
export class LeaveRequest {
  id: number;
  img: string;
  rNo: string;
  name: string;
  fromDate: string;
  toDate: string;
  status: string;
  reason: string;
  constructor(leaveRequest) {
    {
      this.id = leaveRequest.id || this.getRandomID();
      this.img = leaveRequest.avatar || 'assets/images/user/user1.jpg';
      this.rNo = leaveRequest.rNo || '';
      this.name = leaveRequest.name || '';
      this.fromDate = formatDate(new Date(), 'yyyy-MM-dd', 'en') || '';
      this.toDate = formatDate(new Date(), 'yyyy-MM-dd', 'en') || '';
      this.status = leaveRequest.status || '';
      this.reason = leaveRequest.reason || '';
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
