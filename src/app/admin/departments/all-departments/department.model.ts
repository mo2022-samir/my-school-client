export class Department {
  educationType: string;
  educationlevel: string;
  classId: string;
  constructor(department) {
    {
      this.educationType = department.educationType || this.getRandomID();
      this.educationlevel = department.educationlevel || '';
      this.classId = department.classId || '';
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
