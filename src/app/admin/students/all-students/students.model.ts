import { formatDate } from '@angular/common';
export class Students {
  classId: string;
  educationType: string;
  parentName: string;
  parentPhonenumber: string;
  serial: number;
  studyYear: string;
  user: {
    id: string;
    firstName: string;
    lastName: string;
    gender: string;
    address: string;
    bloodGroup: string;
    createdAt: string;
    dateOfBirth: string;
    email: string;
    isReset: boolean;
    isVerified: boolean;
    mobile: string;
    password: string;
    registerDate: string;
    role: string;
    updatedAt: string;
    username: string;
    userId: '813c228a-88ed-470c-a38e-ee6deca0004f';
  };
  constructor(students) {
    {
      this.serial = students.rollNo || this.getRandomID();
      this.user.password = students.password || '';
      this.user.firstName = students.firstName || '';
      this.user.lastName = students.lastName || '';
      this.user.email = students.email || '';
      this.user.gender = students.gender || '';
      this.user.mobile = students.mobile || '';
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
