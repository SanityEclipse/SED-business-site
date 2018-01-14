export class DevExperience {
  id: number;
  title: string;
  date: string;
  projects: DevProject[];
}

export class DevProject {
  name: string;
  desc: string;
}
