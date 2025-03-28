
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
    name: "Назар Гнібеда",
    position: "GK",
    number: 81,
    image: "/lovable-uploads/d8d5c784-cf81-4baf-8413-2aac62701149.png",
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
    number: 71,
    image: "/lovable-uploads/44a695d0-9ee9-4a8e-a4f2-9877e640ef94.png",
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
    number: 33,
    image: "/lovable-uploads/02ec082d-b39f-476a-b886-f862052d60fb.png",
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
    name: "Юрій Глущук",
    position: "UN",
    number: 99,
    image: "/lovable-uploads/c38b9d7d-1818-4870-b1d8-db9e489b0cf1.png",
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
    number: 5,
    image: "/lovable-uploads/bbc0050d-1fbf-4bfa-87f0-7c6f089875e1.png",
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
    number: 18,
    image: "/lovable-uploads/1241a268-3ae0-463f-af49-10804eaca1d0.png",
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
    name: "Сергій Осаульчук",
    position: "UN",
    number: 19,
    image: "/lovable-uploads/567d377c-b560-4b8c-90fa-aa0c8dba8174.png",
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
    name: "Вадим Пазин",
    position: "UN",
    number: 8,
    image: "/lovable-uploads/11a5d807-bb6d-4e10-b332-04477d60e07e.png",
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
    number: 13,
    image: "/lovable-uploads/8d9ebe03-0e8b-4892-af1b-58ebfa4b15aa.png",
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
    number: 7,
    image: "/lovable-uploads/a42c93d0-9a00-4179-8b54-99eff2065cac.png",
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
    number: 10,
    image: "/lovable-uploads/52cb9c20-2d52-44cc-b916-2b2a658729a0.png",
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
    number: 3,
    image: "/lovable-uploads/1ff00437-0566-4946-8b37-a214894e4201.png",
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
    number: 12,
    image: "/lovable-uploads/0703cc6a-0f79-4ddc-8920-4ae46237601c.png",
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
    number: 17,
    image: "/lovable-uploads/e138faae-e069-45d7-bfb9-dcd519d81995.png",
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
    number: 4,
    image: "/lovable-uploads/c38b9d7d-1818-4870-b1d8-db9e489b0cf1.png",
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
    number: 11,
    image: "/lovable-uploads/5ce695a9-f2df-4a76-8fd1-fb1b83c73048.png",
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
