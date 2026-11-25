import type { Restaurant } from "@/types";

/**
 * Central restaurant profile. Replace these values with real details —
 * the whole site (UI, metadata and structured data) reads from here.
 */
export const restaurant: Restaurant = {
  name: { en: "Dar Samar", ar: "دار سَمَر" },
  tagline: {
    en: "Levantine cooking, slow evenings",
    ar: "مطبخ شامي وأمسيات على مهل",
  },
  cuisine: ["Levantine", "Jordanian", "Middle Eastern"],
  priceRange: "$$",
  currency: "JOD",
  phone: "+96264612480",
  whatsapp: "962795550142",
  email: "hello@darsamar.jo",
  address: {
    street: {
      en: "27 Rainbow Street",
      ar: "٢٧ شارع الرينبو",
    },
    district: { en: "Jabal Amman", ar: "جبل عمّان" },
    city: { en: "Amman", ar: "عمّان" },
    postalCode: "11181",
    countryCode: "JO",
    country: { en: "Jordan", ar: "الأردن" },
  },
  geo: { latitude: 31.9505, longitude: 35.9246 },
  openingHours: [
    {
      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "12:30",
      closes: "23:30",
    },
    { days: ["Friday", "Saturday"], opens: "13:00", closes: "00:30" },
  ],
  social: [
    { platform: "instagram", label: "Instagram", url: "https://www.instagram.com/darsamar.amman" },
    { platform: "facebook", label: "Facebook", url: "https://www.facebook.com/darsamar.amman" },
    { platform: "tiktok", label: "TikTok", url: "https://www.tiktok.com/@darsamar.amman" },
  ],
  foundedYear: 2014,
};
