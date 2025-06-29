export interface TravelPost {
  id: number;
  title: string;
  location: string;
  date: string;
  content: string;
}

export const travelPosts: TravelPost[] = [
  {
    id: 1,
    title: 'Exploring Kyoto',
    location: 'Kyoto, Japan',
    date: '2024-04-15',
    content: 'Visited beautiful temples and enjoyed cherry blossoms.'
  },
  {
    id: 2,
    title: 'Hiking in Patagonia',
    location: 'Patagonia, Argentina',
    date: '2023-11-02',
    content: 'Breathtaking views and challenging trails.'
  }
];
