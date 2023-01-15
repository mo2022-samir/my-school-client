import { formatDate } from '@angular/common';
export class Students {
  serial: number;
  userId: string;
  studyYear: string;
  educationType: string;
  parentName: string;
  parentPhonenumber: string;
  classId?: any;
  img?:any;
  user:  {
    id: string;
    firstName: string;
    lastName: string;
    gender: string;
    mobile: string;
    registerDate: string;
    dateOfBirth: string;
    address: string;
    bloodGroup: string;
    email: string;
    username: string;
    password: string;
    role: string;
    isVerified: boolean;
    isReset: boolean;
    createdAt: string;
    updatedAt: Date;
};
  constructor(students) {
    {
      this.userId = students.id || this.getRandomID();
      this.img = students.avatar || 'assets/images/user/user1.jpg';
      this.user.firstName = students.firstName || '';
      this.user.lastName = students.lastName || '';
      this.user.email = students.email || '';
      this.user.dateOfBirth = formatDate(new Date(), 'yyyy-MM-dd', 'en') || '';
      this.user.createdAt = formatDate(new Date(), 'yyyy-MM-dd', 'en') || '';
      this.user.gender = students.gender || '';
      this.user.mobile = students.mobile || '';
      this.educationType = students.educationType || '';
      this.serial = students.serial || '';
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
