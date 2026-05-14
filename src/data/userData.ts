import type { TeamMember, User } from "@/types";

export const currentUser: User = {
  id: "usr_001",
  name: "Shanto Paul",
  email: "shanto@flowpilot.dev",
  role: "Workspace Owner",
  company: "FlowPilot Studio",
  phone: "+880 1700 000000",
  location: "Dhaka, Bangladesh",
  bio: "Frontend specialist building analytics products for modern teams.",
};

export const teamMembers: TeamMember[] = [
  {
    id: "tm_001",
    name: "Avery Stone",
    email: "avery@flowpilot.dev",
    role: "Product Manager",
    department: "Product",
    status: "Active",
    joinedDate: "2025-11-18",
  },
  {
    id: "tm_002",
    name: "Maya Chen",
    email: "maya@flowpilot.dev",
    role: "Growth Analyst",
    department: "Marketing",
    status: "Active",
    joinedDate: "2026-01-09",
  },
  {
    id: "tm_003",
    name: "Jon Bell",
    email: "jon@flowpilot.dev",
    role: "Finance Lead",
    department: "Finance",
    status: "Invited",
    joinedDate: "2026-05-04",
  },
];
