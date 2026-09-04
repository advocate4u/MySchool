export interface Notice {
  id: string;
  date: string;
  title: string;
  description: string;
}

export interface SchoolEvent {
  id: string;
  date: string;
  month: string;
  title: string;
  location: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  role: string;
  initials: string;
}
