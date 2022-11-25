export class Lectures {
  id: number;
  sName: string;
  class: string;
  date: string;
  time: string;
  status: string;
  constructor(lectures) {
    {
      this.id = lectures.id || this.getRandomID();
      this.sName = lectures.dName || '';
      this.class = lectures.hod || '';
      this.date = lectures.phone || '';
      this.time = lectures.email || '';
      this.status = lectures.sYear || '';
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
