import type { Photo } from "@/types";

import heroMixedGrill from "@/public/images/hero-mixed-grill.jpg";
import diningRoom from "@/public/images/dining-room.jpg";
import eveningTable from "@/public/images/evening-table.jpg";
import chefFlame from "@/public/images/chef-flame.jpg";
import charcoalSkewers from "@/public/images/charcoal-skewers.jpg";
import spices from "@/public/images/spices.jpg";
import taboonBread from "@/public/images/taboon-bread.jpg";
import fattoush from "@/public/images/fattoush.jpg";
import lambKawarma from "@/public/images/lamb-kawarma.jpg";
import kebabSkewers from "@/public/images/kebab-skewers.jpg";
import shawarma from "@/public/images/shawarma.jpg";
import sumacChicken from "@/public/images/sumac-chicken.jpg";
import booza from "@/public/images/booza.jpg";
import muhallabia from "@/public/images/muhallabia.jpg";
import lemonMint from "@/public/images/lemon-mint.jpg";
import tamarindCooler from "@/public/images/tamarind-cooler.jpg";

/**
 * Every photograph used on the site, with bilingual alt text.
 * Static imports give us intrinsic sizes and blur placeholders for free.
 */
export const photos = {
  hero: {
    src: heroMixedGrill,
    alt: {
      en: "Charcoal-grilled chicken and lamb skewers with a blistered red pepper, mushrooms and potatoes on flatbread, with two dipping sauces",
      ar: "أسياخ دجاج ولحم مشوية على الفحم مع فليفلة حمراء محروقة وفطر وبطاطا على خبز رقيق، مع صلصتين للتغميس",
    },
  },
  diningRoom: {
    src: diningRoom,
    alt: {
      en: "Warmly lit dining room with terracotta chairs, wooden tables and an open kitchen",
      ar: "صالة طعام بإضاءة دافئة وكراسٍ بلون الطين وطاولات خشبية ومطبخ مفتوح",
    },
  },
  eveningTable: {
    src: eveningTable,
    alt: {
      en: "Guests sharing plates at a candlelit table during evening service",
      ar: "ضيوف يتشاركون الأطباق على طاولة مضاءة بالشموع خلال خدمة المساء",
    },
  },
  chefFlame: {
    src: chefFlame,
    alt: {
      en: "A chef tossing a pan over a tall flame in a busy kitchen",
      ar: "طاهٍ يقلّب مقلاة فوق لهب عالٍ في مطبخ مزدحم",
    },
  },
  charcoalSkewers: {
    src: charcoalSkewers,
    alt: {
      en: "Skewers of marinated meat cooking over glowing charcoal",
      ar: "أسياخ لحم متبّل تُشوى فوق جمر الفحم",
    },
  },
  spices: {
    src: spices,
    alt: {
      en: "Whole and ground spices, garlic, ginger and fresh herbs arranged on a pale wooden table",
      ar: "بهارات كاملة ومطحونة مع الثوم والزنجبيل والأعشاب الطازجة على طاولة خشبية",
    },
  },
  taboonBread: {
    src: taboonBread,
    alt: {
      en: "Rustic loaves of freshly baked bread dusted with flour",
      ar: "أرغفة خبز بلدي مخبوزة طازجة ومرشوشة بالطحين",
    },
  },
  fattoush: {
    src: fattoush,
    alt: { en: "Fresh fattoush salad", ar: "سلطة فتوش طازجة" },
  },
  lambKawarma: {
    src: lambKawarma,
    alt: { en: "Spiced minced lamb in a skillet", ar: "لحم ضأن مفروم متبّل في مقلاة" },
  },
  kebabSkewers: {
    src: kebabSkewers,
    alt: { en: "Lamb kebab skewers with grilled vegetables", ar: "أسياخ كباب لحم مع خضار مشوية" },
  },
  shawarma: {
    src: shawarma,
    alt: { en: "Chicken shawarma wraps with pickles and fries", ar: "ساندويشات شاورما دجاج مع مخلل وبطاطا" },
  },
  sumacChicken: {
    src: sumacChicken,
    alt: { en: "Roast chicken with sumac and pomegranate", ar: "دجاج محمّر بالسماق والرمان" },
  },
  booza: {
    src: booza,
    alt: { en: "Ice cream with a caramel drizzle and a crisp wafer", ar: "بوظة مع صلصة الكراميل ورقاقة مقرمشة" },
  },
  muhallabia: {
    src: muhallabia,
    alt: { en: "Milk pudding in glass jars topped with fresh strawberries", ar: "مهلبية في برطمانات زجاجية مع الفراولة الطازجة" },
  },
  lemonMint: {
    src: lemonMint,
    alt: { en: "Frozen lemon and mint drink", ar: "عصير ليمون بالنعناع مثلّج" },
  },
  tamarindCooler: {
    src: tamarindCooler,
    alt: { en: "Iced tamarind cooler with lime", ar: "تمر هندي مثلّج مع الليمون" },
  },
} satisfies Record<string, Photo>;
