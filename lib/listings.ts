export type Listing = {
  id: string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  area: string;
  tag: "Featured" | "New" | "Hot";
  image: string;
};

export const listings: Listing[] = [
  {
    id: "l1",
    title: "Skyline Glass Villa",
    location: "Sector 66, Mohali",
    price: "₹ 2.4 Cr",
    beds: 4,
    baths: 4,
    area: "3200 sq ft",
    tag: "Featured",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "l2",
    title: "Lakeview Luxury Apartment",
    location: "Zirakpur",
    price: "₹ 98 Lakh",
    beds: 3,
    baths: 3,
    area: "1850 sq ft",
    tag: "New",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "l3",
    title: "Modern Green Penthouse",
    location: "Chandigarh",
    price: "₹ 1.75 Cr",
    beds: 3,
    baths: 3,
    area: "2100 sq ft",
    tag: "Hot",
    image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1600&q=80",
  },
];
