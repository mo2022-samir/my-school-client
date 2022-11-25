export class Department {
  id: number;
  dName: string;
  hod: string;
  phone: string;
  email: string;
  sYear: string;
  sCapacity: string;
  constructor(department) {
    {
      this.id = department.id || this.getRandomID();
      this.dName = department.dName || '';
      this.hod = department.hod || '';
      this.phone = department.phone || '';
      this.email = department.email || '';
      this.sYear = department.sYear || '';
      this.sCapacity = department.sCapacity || '';
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
