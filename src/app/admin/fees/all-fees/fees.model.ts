import { formatDate } from '@angular/common';
export class Fees {
  id: number;
  rollNo: string;
  sName: string;
  fType: string;
  date: string;
  invoiceNo: string;
  pType: string;
  status: string;
  amount: string;
  department: string;
  duration: string;
  details: string;
  constructor(fees) {
    {
      this.id = fees.id || this.getRandomID();
      this.rollNo = fees.rollNo || '';
      this.sName = fees.sName || '';
      this.fType = fees.fType || '';
      this.date = formatDate(new Date(), 'yyyy-MM-dd', 'en') || '';
      this.invoiceNo = fees.invoiceNo || '';
      this.pType = fees.pType || '';
      this.status = fees.status || '';
      this.amount = fees.amount || '';
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
