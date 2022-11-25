export class LeaveRequest {
  id: number;
  class: string;
  section: string;
  applyDate: string;
  fromDate: string;
  toDate: string;
  reason: string;
  status: string;
  constructor(leaveRequest) {
    {
      this.id = leaveRequest.id || this.getRandomID();
      this.class = leaveRequest.class || '';
      this.section = leaveRequest.section || '';
      this.applyDate = leaveRequest.applyDate || '';
      this.fromDate = leaveRequest.fromDate || '';
      this.toDate = leaveRequest.toDate || '';
      this.reason = leaveRequest.reason || '';
      this.status = leaveRequest.status || '';
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
