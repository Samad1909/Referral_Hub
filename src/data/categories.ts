
export interface Category {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  slug: string;
  count: number;
}

export const categories: Category[] = [
  {
    id: "1",
    title: "Food Delivery",
    description: "Save on your favorite food delivery services",
    icon: "🍔",
    color: "from-orange-500 to-red-500",
    slug: "food-delivery",
    count: 5
  },
  {
    id: "2",
    title: "Travel",
    description: "Discounts for hotels, flights and more",
    icon: "✈️",
    color: "from-blue-500 to-cyan-500",
    slug: "travel",
    count: 4
  },
  {
    id: "3",
    title: "Shopping",
    description: "Best deals for online shopping",
    icon: "🛍️",
    color: "from-green-500 to-emerald-500",
    slug: "shopping",
    count: 6
  },
  {
    id: "4",
    title: "Streaming",
    description: "Subscriptions for music, movies and more",
    icon: "📺",
    color: "from-purple-500 to-violet-500",
    slug: "streaming",
    count: 3
  },
  {
    id: "5",
    title: "Finance",
    description: "Crypto, banking and investment offers",
    icon: "💰",
    color: "from-yellow-500 to-amber-500",
    slug: "finance",
    count: 4
  },
  {
    id: "6",
    title: "Ride Sharing",
    description: "Discounts on taxi and transportation",
    icon: "🚗",
    color: "from-pink-500 to-rose-500",
    slug: "ride-sharing",
    count: 3
  }
];
