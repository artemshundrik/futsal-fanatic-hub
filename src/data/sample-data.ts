
export const teamName = "FAYNA TEAM";
export const teamSlogan = "Passion, Teamwork, Victory";
export const teamFoundedYear = 2024;

export interface Player {
  id: number;
  name: string;
  position: "GK" | "UN";
  number: number;
  image: string;
  stats: {
    goals: number;
    assists: number;
    cleanSheets?: number;
    saves?: number;
    fouls: number;
    matchesPlayed: number;
    totalMatches: number;
  };
  social?: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
}

export interface Match {
  id: number;
  opponent: string;
  date: string; // ISO date string
  time: string;
  location: string;
  isHome: boolean;
  competition: string;
  result?: {
    teamScore: number;
    opponentScore: number;
  };
  completed: boolean;
}

export interface TrainingSession {
  id: number;
  date: string; // ISO date string
  time: string;
  location: string;
  focus?: string;
  attendance?: number[];
}

export interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string; // ISO date string
  image: string;
  category: "match-report" | "announcement" | "news";
}

export const players: Player[] = [
  {
    id: 1,
    name: "Назар Гібєда",
    position: "GK",
    number: 1,
    image: "/lovable-uploads/63ace949-ec2d-42bb-8215-0d21ae42fb12.png",
    stats: {
      goals: 0,
      assists: 0,
      saves: 156,
      cleanSheets: 8,
      fouls: 3,
      matchesPlayed: 19,
      totalMatches: 20,
    },
    social: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
    },
  },
  {
    id: 2,
    name: "Артем Головченко",
    position: "GK",
    number: 12,
    image: "/lovable-uploads/27b4d2a5-6972-452e-aa4b-bbbd78633888.png",
    stats: {
      goals: 0,
      assists: 0,
      saves: 142,
      cleanSheets: 7,
      fouls: 2,
      matchesPlayed: 18,
      totalMatches: 20,
    },
    social: {
      instagram: "https://instagram.com",
    },
  },
  {
    id: 3,
    name: "Руслан Кашкарьов",
    position: "GK",
    number: 30,
    image: "/lovable-uploads/2f4896ba-59f0-4bdd-b450-f21fb6b97639.png",
    stats: {
      goals: 0,
      assists: 0,
      saves: 89,
      cleanSheets: 5,
      fouls: 1,
      matchesPlayed: 10,
      totalMatches: 20,
    },
  },
  {
    id: 4,
    name: "Юрій Глушук",
    position: "UN",
    number: 7,
    image: "/lovable-uploads/8ce2ec69-7933-4ee9-bbd1-1f2a609066f3.png",
    stats: {
      goals: 8,
      assists: 10,
      fouls: 7,
      matchesPlayed: 20,
      totalMatches: 20,
    },
    social: {
      facebook: "https://facebook.com",
    },
  },
  {
    id: 5,
    name: "Віктор Зінчук",
    position: "UN",
    number: 10,
    image: "/lovable-uploads/52ac33bf-3615-44a4-96ac-2c0d9331cfcc.png",
    stats: {
      goals: 12,
      assists: 7,
      fouls: 5,
      matchesPlayed: 19,
      totalMatches: 20,
    },
  },
  {
    id: 6,
    name: "Сергій Осадчий",
    position: "UN",
    number: 19,
    image: "/lovable-uploads/b3d13fdf-7529-4036-bd07-e0400d9c032f.png",
    stats: {
      goals: 5,
      assists: 9,
      fouls: 10,
      matchesPlayed: 17,
      totalMatches: 20,
    },
  },
  {
    id: 7,
    name: "Сергій Оссульчук",
    position: "UN",
    number: 77,
    image: "/lovable-uploads/19e1dffb-34d1-4be6-ad1c-45b440f5d5bb.png",
    stats: {
      goals: 9,
      assists: 13,
      fouls: 7,
      matchesPlayed: 19,
      totalMatches: 20,
    },
  },
  {
    id: 8,
    name: "Вадим Пазін",
    position: "UN",
    number: 11,
    image: "/lovable-uploads/5b4241a8-8d70-41b5-9678-76d81f26b803.png",
    stats: {
      goals: 6,
      assists: 5,
      fouls: 8,
      matchesPlayed: 18,
      totalMatches: 20,
    },
  },
  {
    id: 9,
    name: "Роман Подзізей",
    position: "UN", 
    number: 23,
    image: "/lovable-uploads/729a9e86-14df-4f49-878f-921383d79274.png",
    stats: {
      goals: 7,
      assists: 8,
      fouls: 11,
      matchesPlayed: 15,
      totalMatches: 20,
    },
  },
  {
    id: 10,
    name: "Анатолій Пристайчук",
    position: "UN",
    number: 16,
    image: "/lovable-uploads/9f71ced8-4b2e-49b9-9804-a7359327b615.png",
    stats: {
      goals: 4,
      assists: 11,
      fouls: 6,
      matchesPlayed: 16,
      totalMatches: 20,
    },
  },
  {
    id: 11,
    name: "Ігор Сірик",
    position: "UN",
    number: 35,
    image: "/lovable-uploads/f233477b-7acf-455b-bd42-9cb967af843c.png",
    stats: {
      goals: 10,
      assists: 3,
      fouls: 9,
      matchesPlayed: 17,
      totalMatches: 20,
    },
  },
  {
    id: 12,
    name: "Владислав Скляр",
    position: "UN",
    number: 8,
    image: "/lovable-uploads/772132a6-fd68-4b33-8290-cbf47eb40ec7.png",
    stats: {
      goals: 14,
      assists: 7,
      fouls: 13,
      matchesPlayed: 18,
      totalMatches: 20,
    },
  },
  {
    id: 13,
    name: "Олександр Стеблюк",
    position: "UN",
    number: 21,
    image: "/lovable-uploads/2a6f994c-c9e0-4f32-a7b5-db3a23b0c5d1.png",
    stats: {
      goals: 11,
      assists: 6,
      fouls: 7,
      matchesPlayed: 19,
      totalMatches: 20,
    },
  },
  {
    id: 14,
    name: "Владислав Хом'яков",
    position: "UN",
    number: 14,
    image: "/lovable-uploads/80394195-0faa-40d1-bf74-4cea748a91ef.png",
    stats: {
      goals: 3,
      assists: 12,
      fouls: 5,
      matchesPlayed: 16,
      totalMatches: 20,
    },
  },
  {
    id: 15,
    name: "Артем Шундрик",
    position: "UN",
    number: 9,
    image: "/lovable-uploads/5ce695a9-f2df-4a76-8fd1-fb1b83c73048.png",
    stats: {
      goals: 15,
      assists: 4,
      fouls: 8,
      matchesPlayed: 20,
      totalMatches: 20,
    },
  },
  {
    id: 16,
    name: "Андрій Супруненко",
    position: "UN",
    number: 22,
    image: "/lovable-uploads/5ce695a9-f2df-4a76-8fd1-fb1b83c73048.png", // Using existing image as we don't have his specific image
    stats: {
      goals: 5,
      assists: 4,
      fouls: 6,
      matchesPlayed: 15,
      totalMatches: 20,
    },
  }
];

export const upcomingMatches: Match[] = [
  {
    id: 1,
    opponent: "FC Sokil",
    date: "2023-11-15",
    time: "19:00",
    location: "Kyiv Sports Arena",
    isHome: true,
    competition: "City League",
    completed: false,
  },
  {
    id: 2,
    opponent: "Spartak Futsal",
    date: "2023-11-22",
    time: "20:30",
    location: "Lviv Indoor Stadium",
    isHome: false,
    competition: "City League",
    completed: false,
  },
  {
    id: 3,
    opponent: "Arsenal Kyiv",
    date: "2023-11-29",
    time: "19:30",
    location: "Kyiv Sports Arena",
    isHome: true,
    competition: "Cup",
    completed: false,
  },
];

export const pastMatches: Match[] = [
  {
    id: 4,
    opponent: "Dynamo-2",
    date: "2023-10-25",
    time: "19:00",
    location: "Kyiv Sports Arena",
    isHome: true,
    competition: "City League",
    result: {
      teamScore: 6,
      opponentScore: 3,
    },
    completed: true,
  },
  {
    id: 5,
    opponent: "Metalist Futsal",
    date: "2023-10-18",
    time: "20:30",
    location: "Kharkiv Sports Complex",
    isHome: false,
    competition: "City League",
    result: {
      teamScore: 2,
      opponentScore: 2,
    },
    completed: true,
  },
  {
    id: 6,
    opponent: "FC Dnipro",
    date: "2023-10-11",
    time: "19:30",
    location: "Kyiv Sports Arena",
    isHome: true,
    competition: "Cup",
    result: {
      teamScore: 4,
      opponentScore: 1,
    },
    completed: true,
  },
];

export const upcomingTraining: TrainingSession[] = [
  {
    id: 1,
    date: "2023-11-13",
    time: "18:00",
    location: "Training Ground 1",
    focus: "Tactical preparation",
  },
  {
    id: 2,
    date: "2023-11-16",
    time: "18:00",
    location: "Training Ground 1",
    focus: "Recovery",
  },
  {
    id: 3,
    date: "2023-11-20",
    time: "18:00",
    location: "Training Ground 1",
    focus: "Technical skills",
  },
];

export const newsArticles: NewsArticle[] = [
  {
    id: 1,
    title: "Dynamo Futsal dominates Dynamo-2 in thrilling 6-3 victory",
    excerpt: "Team captain leads the charge with a hat-trick as our team secures another important win in the City League.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc eget lacinia tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Nullam auctor, nunc eget lacinia tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
    author: "Team Press Officer",
    date: "2023-10-26",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2156&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "match-report",
  },
  {
    id: 2,
    title: "New training schedule for November announced",
    excerpt: "Coach introduces changes to the training schedule to prepare for the upcoming crucial matches.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc eget lacinia tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Nullam auctor, nunc eget lacinia tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
    author: "Team Manager",
    date: "2023-10-30",
    image: "https://images.unsplash.com/photo-1526232373132-0e4ee643aa7a?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "announcement",
  },
  {
    id: 3,
    title: "Team welcomes new sponsor",
    excerpt: "Exciting partnership announced with local company to support the team for the rest of the season.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc eget lacinia tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Nullam auctor, nunc eget lacinia tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
    author: "Team President",
    date: "2023-11-05",
    image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=2150&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "news",
  },
];

export const teamImage = "https://images.unsplash.com/photo-1577471488278-16eec37ffcc2?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.0.3";
