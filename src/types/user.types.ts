export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar?: string;
  company: string;
  phone?: string;
  location?: string;
  bio?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: string;
  department: string;
  status: "Active" | "Invited" | "Offline";
  joinedDate: string;
}
