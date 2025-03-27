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
    name: "Макар Махньов",
    position: "UN",
    number: 88,
    image: "https://images.unsplash.com/photo-1564135624576-c5c88640f235?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3",
    stats: {
      goals: 23,
      assists: 8,
      fouls: 12,
      matchesPlayed: 18,
      totalMatches: 20,
    },
    social: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
    },
  },
  {
    id: 2,
    name: "Дмитро Павлов",
    position: "GK",
    number: 1,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3",
    stats: {
      goals: 0,
      assists: 1,
      saves: 156,
      cleanSheets: 8,
      fouls: 3,
      matchesPlayed: 19,
      totalMatches: 20,
    },
    social: {
      instagram: "https://instagram.com",
    },
  },
  {
    id: 3,
    name: "Денис Чорний",
    position: "UN",
    number: 9,
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=2188&auto=format&fit=crop&ixlib=rb-4.0.3",
    stats: {
      goals: 5,
      assists: 14,
      fouls: 9,
      matchesPlayed: 17,
      totalMatches: 20,
    },
  },
  {
    id: 4,
    name: "Антон Шевченко",
    position: "UN",
    number: 7,
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3",
    stats: {
      goals: 1,
      assists: 4,
      fouls: 15,
      matchesPlayed: 20,
      totalMatches: 20,
    },
    social: {
      facebook: "https://facebook.com",
    },
  },
  {
    id: 5,
    name: "Денис Кириченко",
    position: "UN",
    number: 10,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3",
    stats: {
      goals: 7,
      assists: 11,
      fouls: 8,
      matchesPlayed: 16,
      totalMatches: 20,
    },
  },
  {
    id: 6,
    name: "Владислав Панченко",
    position: "UN",
    number: 19,
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3",
    stats: {
      goals: 18,
      assists: 5,
      fouls: 10,
      matchesPlayed: 17,
      totalMatches: 20,
    },
  },
  {
    id: 7,
    name: "Ігор Сорока",
    position: "UN",
    number: 77,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3",
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
    name: "Тарас Марченко",
    position: "UN",
    number: 11,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3",
    stats: {
      goals: 2,
      assists: 1,
      fouls: 14,
      matchesPlayed: 18,
      totalMatches: 20,
    },
  },
  {
    id: 9,
    name: "Кирило Гончар",
    position: "UN", 
    number: 23,
    image: "https://images.unsplash.com/photo-1639747280804-dd2d6b3d88ac?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3",
    stats: {
      goals: 12,
      assists: 6,
      fouls: 11,
      matchesPlayed: 15,
      totalMatches: 20,
    },
  },
  {
    id: 10,
    name: "Владислав Кривега",
    position: "UN",
    number: 16,
    image: "https://images.unsplash.com/photo-1568707043650-eb03f2536825?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3",
    stats: {
      goals: 8,
      assists: 9,
      fouls: 6,
      matchesPlayed: 16,
      totalMatches: 20,
    },
  },
  {
    id: 11,
    name: "Нікіта Василенко",
    position: "GK",
    number: 35,
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3",
    stats: {
      goals: 0,
      assists: 0,
      saves: 89,
      cleanSheets: 5,
      fouls: 2,
      matchesPlayed: 12,
      totalMatches: 20,
    },
  },
  {
    id: 12,
    name: "Ігор Шабля",
    position: "UN",
    number: 8,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3",
    stats: {
      goals: 14,
      assists: 7,
      fouls: 13,
      matchesPlayed: 18,
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
