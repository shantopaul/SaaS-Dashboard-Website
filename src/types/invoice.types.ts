export interface CurrentPlan {
  name: string;
  price: string;
  renewalDate: string;
  status: "Active" | "Trialing" | "Past Due";
  includedSeats: number;
  usedSeats: number;
}

export interface PaymentMethod {
  brand: "Visa" | "Mastercard" | "Amex";
  last4: string;
  expiry: string;
  billingEmail: string;
}

export interface Invoice {
  id: string;
  date: string;
  amount: number;
  status: "Paid" | "Open" | "Failed";
  downloadLabel: string;
}
