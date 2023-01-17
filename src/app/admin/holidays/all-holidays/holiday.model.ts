import { formatDate } from '@angular/common';
export class Holiday {
  id: number;
  serial: number;
  no: string;
  name: string;
  startDate: string;
  endDate: string;
  constructor(holiday) {
    {
      this.id = holiday.id || this.getRandomID();
      this.no = holiday.no || '';
      this.serial = holiday.serial;
      this.name = holiday.name || '';
      this.startDate = formatDate(new Date(), 'yyyy-MM-dd', 'en') || '';
      this.endDate = formatDate(new Date(), 'yyyy-MM-dd', 'en') || '';
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
