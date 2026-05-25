import { Video, Category } from "../types";

export const REAL_VIDEO = "/forest.mp4";

export const CATEGORIES: Category[] = [
  { id: "family", title: "Семья с детьми", description: "Школа, площадки, безопасная среда", image: "/cat-family.jpg", iconName: "users", count: 2 },
  { id: "wellness", title: "SPA и Wellness", description: "Спа, лесные ванны, wellness-программы", image: "/cat-wellness.jpg", iconName: "heart", count: 1 },
  { id: "guests", title: "Гости и отель", description: "Гостиница, ресторан, конференц-зал", image: "/cat-guests.jpg", iconName: "building2", count: 1 },
  { id: "investor", title: "Для инвестора", description: "Ликвидность, уникальная локация", image: "/cat-investor.jpg", iconName: "trendingUp", count: 1 },
  { id: "architecture", title: "Архитектура", description: "Материалы, свет, остекление", image: "/cat-architecture.jpg", iconName: "treePine", count: 1 },
];

export const VIDEOS: Video[] = [
  { id: "v1", title: "Мещерский 1 — дом в соснах", description: "Обзорный ролик о жизни в окружении природы. Комплекс частных домов с гостиничным сервисом.", category: "family", duration: "3:24", thumbnail: "/cat-family.jpg", views: "12.4K" },
  { id: "v2", title: "SPA-комплекс и wellness", description: "Погружение в атмосферу умной роскоши. Природные процедуры и забота о здоровье.", category: "wellness", duration: "2:18", thumbnail: "/cat-wellness.jpg", views: "8.7K" },
  { id: "v3", title: "Гостиничный сервис", description: "Уровень обслуживания в Мещерском. Гостиница, ресторан, конференц-зал.", category: "guests", duration: "4:05", thumbnail: "/cat-guests.jpg", views: "6.2K" },
  { id: "v4", title: "Инвестиционная привлекательность", description: "Почему Мещерский — это выгодная инвестиция. Ликвидность и уникальная локация.", category: "investor", duration: "5:12", thumbnail: "/cat-investor.jpg", views: "4.9K" },
  { id: "v5", title: "Архитектурная концепция", description: "Как природа вдохновляет архитектуру. Материалы, свет, панорамное остекление.", category: "architecture", duration: "3:45", thumbnail: "/cat-architecture.jpg", views: "9.1K" },
  { id: "v6", title: "Семейные маршруты", description: "Прогулки и активности для всей семьи. Безопасная среда для роста детей.", category: "family", duration: "2:56", thumbnail: "/cat-family.jpg", views: "5.3K" },
];
