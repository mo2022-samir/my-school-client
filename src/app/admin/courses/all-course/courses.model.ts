export class Courses {
  subjectId: string;
  name: string;
  studyYear: string;
  educationType: string;
 

  constructor(courses) {
    {
      this.subjectId = courses.subjectId || this.getRandomID();
      this.name = courses.name || '';
      this.studyYear = courses.name || '';
      this.educationType = courses.lastName || '';

    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
