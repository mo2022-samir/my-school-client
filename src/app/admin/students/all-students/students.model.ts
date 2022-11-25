import { formatDate } from '@angular/common';
export class Students {
  id: number;
  img: string;
  name: string;
  email: string;
  date: string;
  gender: string;
  mobile: string;
  department: string;
  rollNo: string;
  constructor(students) {
    {
      this.id = students.id || this.getRandomID();
      this.img = students.avatar || 'assets/images/user/user1.jpg';
      this.name = students.name || '';
      this.email = students.email || '';
      this.date = formatDate(new Date(), 'yyyy-MM-dd', 'en') || '';
      this.gender = students.gender || '';
      this.mobile = students.mobile || '';
      this.department = students.department || '';
      this.rollNo = students.rollNo || '';
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
