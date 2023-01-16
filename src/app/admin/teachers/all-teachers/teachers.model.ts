import { formatDate } from '@angular/common';
export class Teachers {
  serial: number;
  userId: string;
  education: string;
  department: string;
  img: string;
  user: {
    id: string;
    firstName: string;
    lastName: string;
    gender: string;
    mobile: string;
    registerDate: string;
    dateOfBirth: string;
    address: string;
    bloodGroup: any;
    email: string;
    username: string;
    password: string;
    role: string;
    isVerified: boolean;
    isReset: boolean;
    createdAt: string;
    updatedAt: string;
  };

  constructor(teachers) {
    {
      this.serial = teachers.serial || this.getRandomID();
      this.img = teachers.avatar || 'assets/images/user/user1.jpg';
      this.user.firstName = teachers.firstName || '';
      this.user.lastName = teachers.lastName || '';
      this.user.email = teachers.email || '';
      this.user.password = teachers.password || '';
      this.user.gender = teachers.gender || '';
      this.user.mobile = teachers.mobile || '';
      this.department = teachers.department || '';
      this.education = teachers.education || '';
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
