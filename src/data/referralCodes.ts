
export interface ReferralCode {
  id: string;
  title: string;
  company: string;
  description: string;
  categoryId: string;
  code: string;
  benefits: string[];
  steps: string[];
  imageUrl: string;
  expiryDate?: string;
}

export const referralCodes: ReferralCode[] = [
  // Food Delivery
  {
    id: "1",
    title: "DoorDash Free Delivery",
    company: "DoorDash",
    description: "Get $15 off your first order and free delivery for 30 days",
    categoryId: "1",
    code: "NEWUSER15",
    benefits: ["$15 off first order", "Free delivery for 30 days", "No minimum order required"],
    steps: [
      "Download the DoorDash app", 
      "Create a new account", 
      "Enter code NEWUSER15 at checkout"
    ],
    imageUrl: "https://images.unsplash.com/photo-1563900365642-e0918fd90cfb",
  },
  {
    id: "2",
    title: "Uber Eats Discount",
    company: "Uber Eats",
    description: "Get $20 off your next 2 orders with this referral code",
    categoryId: "1",
    code: "EATS-NEWTRY20",
    benefits: ["$10 off first two orders", "Valid for new customers only", "Minimum order $15"],
    steps: [
      "Open Uber Eats app", 
      "Tap on Account > Promotions", 
      "Enter code EATS-NEWTRY20", 
      "Discount applies to next two orders"
    ],
    imageUrl: "https://images.unsplash.com/photo-1554136354-688952c6e2bb",
  },
  
  // Travel
  {
    id: "3",
    title: "Airbnb Discount",
    company: "Airbnb",
    description: "Get $50 off your first stay and $15 for an experience",
    categoryId: "2",
    code: "NEWTRIP2023",
    benefits: ["$50 credit for accommodation", "$15 credit for experiences", "Valid for 90 days after sign-up"],
    steps: [
      "Create new Airbnb account", 
      "Enter NEWTRIP2023 in referral section", 
      "Book your first stay within 90 days"
    ],
    imageUrl: "https://images.unsplash.com/photo-1502920514313-52581002a659",
  },
  {
    id: "4",
    title: "Hotels.com Rewards",
    company: "Hotels.com",
    description: "Earn a free night after booking 10 nights through referral",
    categoryId: "2",
    code: "FRIENDSTAY",
    benefits: ["Free night after 10 stays", "10% discount on first booking", "Extra rewards points"],
    steps: [
      "Sign up using referral link", 
      "Enter code FRIENDSTAY", 
      "Book 10 nights to qualify for free stay"
    ],
    imageUrl: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
  },
  
  // Shopping
  {
    id: "5",
    title: "Amazon Prime Discount",
    company: "Amazon",
    description: "Get 20% off first purchase with Prime trial",
    categoryId: "3",
    code: "PRIMETRY20",
    benefits: ["20% off first order (max $20)", "Free 30-day Prime trial", "Free shipping"],
    steps: [
      "Sign up for Amazon Prime trial", 
      "Enter PRIMETRY20 at checkout", 
      "Discount applies automatically"
    ],
    imageUrl: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48",
  },
  {
    id: "6",
    title: "Nike Member Discount",
    company: "Nike",
    description: "Get 20% off your first Nike purchase",
    categoryId: "3",
    code: "NIKE-NEW20",
    benefits: ["20% off first purchase", "Free shipping", "Early access to new products"],
    steps: [
      "Create Nike member account", 
      "Enter NIKE-NEW20 at checkout", 
      "Valid for 30 days after account creation"
    ],
    imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  
  // Streaming
  {
    id: "7",
    title: "Spotify Premium",
    company: "Spotify",
    description: "Get 3 months of Premium for free",
    categoryId: "4",
    code: "PREMIUM3FREE",
    benefits: ["3 months free Premium", "Ad-free music", "Offline downloads"],
    steps: [
      "Create new Spotify account", 
      "Enter PREMIUM3FREE in promo section", 
      "Add payment method (won't be charged until after 3 months)"
    ],
    imageUrl: "https://images.unsplash.com/photo-1611339555312-e607c8352fd7",
  },
  
  // Finance
  {
    id: "8",
    title: "Coinbase Bitcoin Bonus",
    company: "Coinbase",
    description: "Get $10 in free Bitcoin when you sign up and trade $100",
    categoryId: "5",
    code: "COINSTART",
    benefits: ["$10 in free Bitcoin", "Zero fees on first trade", "Crypto learning resources"],
    steps: [
      "Sign up with referral code COINSTART", 
      "Verify identity", 
      "Purchase or sell $100 in crypto", 
      "Receive $10 in Bitcoin"
    ],
    imageUrl: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247",
  },
  {
    id: "9",
    title: "Robinhood Free Stock",
    company: "Robinhood",
    description: "Get a free stock worth $5-$200 when you sign up",
    categoryId: "5",
    code: "JOIN-ROBIN",
    benefits: ["Free stock valued $5-$200", "No commission trading", "Easy to use platform"],
    steps: [
      "Sign up with code JOIN-ROBIN", 
      "Link bank account", 
      "Claim free stock within 60 days"
    ],
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
  },
  
  // Ride Sharing
  {
    id: "10",
    title: "Uber First Ride Free",
    company: "Uber",
    description: "Get your first ride free (up to $20)",
    categoryId: "6",
    code: "RIDEWITHME",
    benefits: ["Free first ride up to $20", "Valid for new users", "Works worldwide"],
    steps: [
      "Download Uber app", 
      "Create new account", 
      "Enter RIDEWITHME in promo section", 
      "Request your first ride"
    ],
    imageUrl: "https://images.unsplash.com/photo-1585503418537-88331351ad99",
  }
];

export const getReferralCodesByCategory = (categoryId: string): ReferralCode[] => {
  return referralCodes.filter(code => code.categoryId === categoryId);
};

export const getReferralCodeById = (id: string): ReferralCode | undefined => {
  return referralCodes.find(code => code.id === id);
};
