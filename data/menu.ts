import type { MenuCategory, MenuItem } from "@/types";
import { photos } from "./images";

export const menuCategories: MenuCategory[] = [
  {
    id: "starters",
    name: { en: "Mezze & Starters", ar: "مقبلات ومازة" },
    description: {
      en: "Cold and hot plates for the middle of the table, served with warm taboon bread.",
      ar: "أطباق باردة وساخنة لمنتصف السفرة، تُقدَّم مع خبز الطابون الساخن.",
    },
  },
  {
    id: "mains",
    name: { en: "Main Courses", ar: "الأطباق الرئيسية" },
    description: {
      en: "From the charcoal grill and the slow-cooking pots.",
      ar: "من مشاوي الفحم وقدور الطهي البطيء.",
    },
  },
  {
    id: "desserts",
    name: { en: "Desserts", ar: "الحلويات" },
    description: {
      en: "Made in-house every afternoon.",
      ar: "تُحضَّر في مطبخنا كل عصر.",
    },
  },
  {
    id: "drinks",
    name: { en: "Drinks", ar: "المشروبات" },
    description: {
      en: "Fresh coolers, Arabic coffee and herbal teas.",
      ar: "عصائر طازجة وقهوة عربية وشاي بالأعشاب.",
    },
  },
];

export const menuItems: MenuItem[] = [
  /* ---------- Starters ---------- */
  {
    id: "hummus-lamb",
    category: "starters",
    name: { en: "Hummus with Spiced Lamb", ar: "حمص باللحمة" },
    description: {
      en: "Silky chickpea purée, tahini and lemon, topped with sizzling minced lamb and pine nuts.",
      ar: "حمص ناعم بالطحينة والليمون، مع لحم ضأن مفروم محمّر وصنوبر.",
    },
    price: 5.5,
    tags: ["signature"],
  },
  {
    id: "mutabbal",
    category: "starters",
    name: { en: "Smoked Aubergine Mutabbal", ar: "متبّل باذنجان مدخّن" },
    description: {
      en: "Charcoal-smoked aubergine with tahini, garlic, yoghurt and pomegranate.",
      ar: "باذنجان مدخّن على الفحم مع الطحينة والثوم واللبن والرمان.",
    },
    price: 4.75,
    tags: ["vegetarian"],
  },
  {
    id: "fattoush",
    category: "starters",
    name: { en: "Fattoush", ar: "فتوش" },
    description: {
      en: "Garden vegetables, purslane, crisp taboon bread and a sumac–pomegranate dressing.",
      ar: "خضار طازجة وبقلة وخبز طابون مقرمش مع صلصة السماق ودبس الرمان.",
    },
    price: 4.5,
    image: photos.fattoush,
    tags: ["vegetarian"],
  },
  {
    id: "warak-enab",
    category: "starters",
    name: { en: "Warak Enab", ar: "ورق عنب" },
    description: {
      en: "Vine leaves rolled by hand with rice, tomato, parsley and mint, slow-cooked in lemon and olive oil.",
      ar: "ورق عنب ملفوف يدوياً بالأرز والبندورة والبقدونس والنعنع، مطهو بالليمون وزيت الزيتون.",
    },
    price: 5.25,
    tags: ["vegetarian"],
  },
  {
    id: "muhammara",
    category: "starters",
    name: { en: "Muhammara", ar: "محمّرة" },
    description: {
      en: "Roasted red pepper and walnut dip with Aleppo chilli and pomegranate molasses.",
      ar: "غموس الفليفلة الحمراء المشوية والجوز مع الفلفل الحلبي ودبس الرمان.",
    },
    price: 4.75,
    tags: ["vegetarian", "spicy"],
  },
  {
    id: "lamb-kawarma",
    category: "starters",
    name: { en: "Lamb Kawarma Skillet", ar: "مقلاة قاورما" },
    description: {
      en: "Spiced lamb cooked in its own fat with onion and baharat, served bubbling with flatbread.",
      ar: "لحم ضأن متبّل مطهو بدهنه مع البصل والبهارات، يُقدَّم ساخناً مع الخبز.",
    },
    price: 6.5,
    image: photos.lambKawarma,
  },

  /* ---------- Mains ---------- */
  {
    id: "mansaf",
    category: "mains",
    name: { en: "Mansaf", ar: "منسف" },
    description: {
      en: "Jordan's national dish: lamb slow-cooked in Karak jameed over saffron rice and shrak bread, with toasted almonds.",
      ar: "طبق الأردن الوطني: لحم ضأن مطهو على مهل بجميد الكرك فوق الأرز والشراك، مع اللوز المحمّص.",
    },
    price: 14.5,
    tags: ["signature"],
  },
  {
    id: "mixed-grill",
    category: "mains",
    name: { en: "Charcoal Mixed Grill", ar: "مشاوي مشكّلة على الفحم" },
    description: {
      en: "Lamb kofta, shish tawook and lamb tikka over oak charcoal, with grilled tomato, onion and garlic toum.",
      ar: "كفتة وشيش طاووق وتكّة لحم على فحم السنديان، مع بندورة وبصل مشوي وثومية.",
    },
    price: 16,
    image: photos.kebabSkewers,
    tags: ["signature"],
  },
  {
    id: "sumac-chicken",
    category: "mains",
    name: { en: "Sumac Roast Chicken", ar: "دجاج محمّر بالسماق" },
    description: {
      en: "Half a free-range chicken roasted with sumac, onions and olive oil, finished with pomegranate.",
      ar: "نصف دجاجة بلدية محمّرة بالسماق والبصل وزيت الزيتون، مع حبّات الرمان.",
    },
    price: 11.5,
    image: photos.sumacChicken,
  },
  {
    id: "maqluba",
    category: "mains",
    name: { en: "Maqluba", ar: "مقلوبة" },
    description: {
      en: "Upside-down rice with fried aubergine, cauliflower and tender lamb, turned out at the table.",
      ar: "أرز مقلوب مع الباذنجان والزهرة المقلية ولحم ضأن طري، يُقلب أمامك على السفرة.",
    },
    price: 12.5,
  },
  {
    id: "chicken-shawarma",
    category: "mains",
    name: { en: "Chicken Shawarma Plate", ar: "صحن شاورما دجاج" },
    description: {
      en: "Marinated chicken from the spit in saj bread, with garlic toum, pickles and hand-cut fries.",
      ar: "دجاج متبّل من السيخ في خبز الصاج، مع الثومية والمخلل والبطاطا المقطّعة يدوياً.",
    },
    price: 7.5,
    image: photos.shawarma,
  },
  {
    id: "sayadieh",
    category: "mains",
    name: { en: "Sayadieh", ar: "صيّادية" },
    description: {
      en: "Aqaba sea bream over cumin rice cooked with caramelised onions, with tahini and lemon.",
      ar: "سمك من العقبة فوق أرز بالكمّون مطهو مع البصل المكرمل، يُقدَّم مع الطحينة والليمون.",
    },
    price: 15.75,
  },

  /* ---------- Desserts ---------- */
  {
    id: "knafeh",
    category: "desserts",
    name: { en: "Knafeh Nabulsieh", ar: "كنافة نابلسية" },
    description: {
      en: "Warm Nabulsi cheese under crisp semolina, soaked in orange-blossom syrup and pistachio.",
      ar: "جبنة نابلسية ساخنة تحت طبقة سميد مقرمشة، مع قطر بماء الزهر وفستق حلبي.",
    },
    price: 4.5,
    tags: ["signature", "vegetarian"],
  },
  {
    id: "muhallabia",
    category: "desserts",
    name: { en: "Muhallabia", ar: "مهلبية" },
    description: {
      en: "Chilled rose-water milk pudding with fresh strawberries and crushed pistachio.",
      ar: "مهلبية باردة بماء الورد مع الفراولة الطازجة والفستق المجروش.",
    },
    price: 3.5,
    image: photos.muhallabia,
    tags: ["vegetarian"],
  },
  {
    id: "booza",
    category: "desserts",
    name: { en: "Booza with Date Caramel", ar: "بوظة بكراميل التمر" },
    description: {
      en: "Stretchy mastic and sahlab ice cream with warm date caramel and a sesame wafer.",
      ar: "بوظة عربية بالمستكة والسحلب مع كراميل التمر الدافئ ورقاقة بالسمسم.",
    },
    price: 4.25,
    image: photos.booza,
    tags: ["vegetarian"],
  },
  {
    id: "halawet-el-jibn",
    category: "desserts",
    name: { en: "Halawet el Jibn", ar: "حلاوة الجبن" },
    description: {
      en: "Soft semolina-cheese rolls filled with ashta cream, rose syrup and candied orange.",
      ar: "لفائف الجبن والسميد الطرية محشوة بالقشطة، مع قطر الورد وقشر البرتقال المسكّر.",
    },
    price: 4.25,
    tags: ["vegetarian"],
  },

  /* ---------- Drinks ---------- */
  {
    id: "lemon-mint",
    category: "drinks",
    name: { en: "Frozen Lemon & Mint", ar: "ليمون ونعنع مثلّج" },
    description: {
      en: "Fresh lemons blended with mint leaves and crushed ice.",
      ar: "ليمون طازج مخفوق مع أوراق النعنع والثلج المجروش.",
    },
    price: 2.75,
    image: photos.lemonMint,
  },
  {
    id: "tamarind",
    category: "drinks",
    name: { en: "Tamarind Cooler", ar: "تمر هندي" },
    description: {
      en: "House-made tamarind syrup over ice with a squeeze of lime.",
      ar: "شراب تمر هندي محضّر في مطبخنا مع الثلج وعصرة ليمون.",
    },
    price: 2.5,
    image: photos.tamarindCooler,
  },
  {
    id: "jallab",
    category: "drinks",
    name: { en: "Jallab", ar: "جلّاب" },
    description: {
      en: "Grape molasses, rose water and dates, topped with pine nuts and golden raisins.",
      ar: "دبس العنب وماء الورد والتمر، مع الصنوبر والزبيب الذهبي.",
    },
    price: 3,
  },
  {
    id: "arabic-coffee",
    category: "drinks",
    name: { en: "Arabic Coffee", ar: "قهوة عربية" },
    description: {
      en: "Lightly roasted coffee brewed with cardamom, poured from the dallah.",
      ar: "قهوة شقراء بالهيل تُصبّ من الدلّة.",
    },
    price: 2,
  },
  {
    id: "sage-tea",
    category: "drinks",
    name: { en: "Sage Tea", ar: "شاي بالميرمية" },
    description: {
      en: "Black tea brewed with wild sage from the hills of Ajloun.",
      ar: "شاي أسود مع ميرمية برية من جبال عجلون.",
    },
    price: 1.75,
  },
];

/** Dishes featured on the home page, in display order. */
export const signatureDishIds = ["mixed-grill", "sumac-chicken", "booza"] as const;
