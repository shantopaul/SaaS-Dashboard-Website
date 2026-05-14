export interface Customer {
  id: string;
  name: string;
  email: string;
  company: string;
  plan: "Starter" | "Professional" | "Enterprise";
  status: "Active" | "Pending" | "Cancelled";
  joinedDate: string;
  revenue: number;
}

export interface Transaction {
  id: string;
  customerName: string;
  amount: number;
  status: "Paid" | "Pending" | "Failed";
  date: string;
  method: string;
}
