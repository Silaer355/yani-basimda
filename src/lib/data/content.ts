/* ============================================================================
   YanYana — all page copy in one place (Türkçe).
   Sıcak, sade, güven veren, premium bir ton. Ürün dili fazla teknik değil.
   Görseller kolay değiştirilebilir olsun diye foto slotları ayrı tanımlı.
   ========================================================================== */

export const brand = {
  name: "Yanı Başımda",
  tagline: "En güzel gününde, herkes yanı başında.",
  description:
    "Düğününüzün oturma planını sürükle-bırak ile dakikalar içinde kurun. Misafirleri masalara yerleştirin, son dakika değişikliklerini zahmetsizce yönetin.",
};

export const nav = {
  links: [
    { label: "Özellikler", href: "#ozellikler" },
    { label: "Nasıl Çalışır", href: "#nasil-calisir" },
    { label: "Misafir Deneyimi", href: "#misafir-deneyimi" },
    { label: "Fiyat", href: "#fiyat" },
    { label: "Yorumlar", href: "#yorumlar" },
  ],
  cta: "Kayıt Ol",
};

export const hero = {
  eyebrow: "Düğün oturma planı",
  title: ["En güzel gününde,", "herkes yanı başında."],
  body:
    "Misafirlerinizi kolayca yerleştirin, masa düzeninizi görsel olarak planlayın. Sürükle-bırak ile oturma planınızı saniyeler içinde oluşturun.",
  primaryCta: "Oturma Planını Oluştur",
  secondaryCta: "Nasıl çalışır?",
  trust: ["Kredi kartı yok", "5 dakikada hazır", "Sınırsız düzenleme"],
  stat: { value: "12", label: "masanın 9'u tamamlandı" },
};

export const valueStrip = [
  "Sürükle & Bırak",
  "Misafir Listesi",
  "Masa Düzeni",
  "Anlık Değişiklik",
  "Kolay Kullanım",
  "Mobil Uyumlu",
];

/** Bento grid — kartlar farklı boyutta ve az sayıda farklı tonda. */
export const features = {
  eyebrow: "Özellikler",
  title: "Planlamanın her adımı tek ekranda",
  body:
    "Misafir eklemekten salon düzenine kadar her şey aynı sade arayüzde. Karmaşa yok, sürpriz yok.",
  cards: [
    {
      key: "guests",
      tone: "surface",
      size: "wide",
      title: "Misafirlerini kolayca ekle",
      body: "Listeyi elle gir ya da toplu yükle; herkes tek yerde toplansın.",
    },
    {
      key: "tables",
      tone: "warm",
      size: "tall",
      title: "Masaları oluştur ve düzenle",
      body: "Yuvarlak ya da uzun masa, kapasiteyi belirle, salonu istediğin gibi kur.",
    },
    {
      key: "drag",
      tone: "surface",
      size: "normal",
      title: "Sürükle-bırak ile yerleştir",
      body: "Bir ismi tut, masaya bırak. Bu kadar.",
    },
    {
      key: "unseated",
      tone: "blue",
      size: "normal",
      title: "Açıkta kalanı gör",
      body: "Yeri belli olmayan misafirler anında listelenir.",
    },
    {
      key: "groups",
      tone: "sage",
      size: "normal",
      title: "Aileleri birlikte tut",
      body: "Grupları etiketle, birbirinden ayrı düşmesinler.",
    },
    {
      key: "search",
      tone: "surface",
      size: "wide",
      title: "Kim nerede, hemen bul",
      body: "İsim yaz, masasına git. Salon ne kadar kalabalık olursa olsun.",
    },
  ],
};

export const emotional = {
  eyebrow: "Neden Yanı Başımda",
  titleLead: "Son dakika masa değişiklikleri artık",
  titleAccent: "problem değil",
  body:
    "Kim kimin yanında oturacak, hangi masa dolu, kim hâlâ açıkta — hepsini önceden netleştirin. Karışıklığı azaltın, düğün gününü rahatça yaşayın.",
  points: [
    "Herkesin yerini önceden belirleyin",
    "Değişikliği tek dokunuşla yapın",
    "Salonu gerçek düzeniyle görün",
  ],
};

export const howItWorks = {
  eyebrow: "Nasıl Çalışır",
  title: "Üç adımda hazır",
  steps: [
    {
      no: "01",
      title: "Misafirlerini ekle",
      body: "Listeyi oluştur, aileleri grupla.",
    },
    {
      no: "02",
      title: "Masalarını oluştur",
      body: "Salonu kur, kapasiteleri belirle.",
    },
    {
      no: "03",
      title: "Yerleştir ve düzenle",
      body: "Sürükle-bırak ile herkesi yerine koy.",
    },
  ],
};

export const showcase = {
  eyebrow: "Ürün",
  title: "Gerçekten çalışan bir plan",
  body:
    "Masa kapasitesi, oturan ve açıkta kalan misafirler, aile grupları ve etiketler — hepsi tek bir canlı görünümde.",
  details: [
    { title: "Masa kapasitesi", body: "Her masanın doluluğu anında görünür." },
    { title: "Oturan / açıkta", body: "Yerleşmeyen misafirler hiç gözden kaçmaz." },
    { title: "Aile & grup", body: "Kategorilerle herkesi doğru masada tut." },
    { title: "Etiketler", body: "Masalara isim ver, salonu kolay oku." },
  ],
};

export const guestExperience = {
  eyebrow: "Misafir Deneyimi",
  title: "Adını yaz, masanı bul",
  body:
    "Misafirleriniz salona girdiğinde ismini aratıp masasını görebilir. Kapıda karışıklık olmaz, herkes doğrudan yerine geçer.",
  steps: [
    { title: "Adını yaz", body: "Küçük bir arama kutusu yeter." },
    { title: "Masanı bul", body: "Masa numarası ve konumu anında görünür." },
    { title: "Karışıklık olmasın", body: "Herkes doğru yerde, gün akışında kalır." },
  ],
};

export const testimonials = {
  eyebrow: "Yorumlar",
  title: "Yakında çiftlerin favorisi",
  body:
    "Yanı Başımda yeni yayında. İlk düğünlerde denenmeye hazır — gerçek çift yorumları çok yakında burada.",
  cards: [
    {
      quote:
        "Oturma planını bir akşamda bitirdik. En çok son dakika değişiklikleri kurtardı.",
      name: "Çift adayı",
      meta: "Yer tutucu yorum",
    },
    {
      quote:
        "Açıkta kalan misafirleri tek bakışta görmek büyük rahatlık. Hiç kimse unutulmadı.",
      name: "Organizatör",
      meta: "Yer tutucu yorum",
    },
    {
      quote:
        "Salon düzenini gerçek haliyle görebilmek, masaları planlarken her şeyi netleştirdi.",
      name: "Düğün planlayıcı",
      meta: "Yer tutucu yorum",
    },
  ],
};

export const rules = {
  eyebrow: "Akıllı Kurallar",
  title: "Kim kiminle? Kuralı siz koyun",
  body:
    "Bazı misafirler mutlaka yan yana olmalı, bazıları da kesinlikle ayrı. Kuralı bir kez tanımlayın — Yanı Başımda planı buna göre kurulur ve bir kural bozulursa anında uyarır.",
  cards: [
    {
      key: "together",
      title: "Birlikte otursun",
      body: "Aynı masada, yan yana. Aileler, çiftler ve yakın dostlar hiç ayrılmaz.",
      a: "Ayşe",
      b: "Mehmet",
    },
    {
      key: "apart",
      title: "Ayrı otursun",
      body: "Asla aynı masada değil. Araları limoni o ikiliyi birbirinden uzak tutun.",
      a: "Deniz",
      b: "Kerem",
    },
  ],
  validation: {
    title: "Kural ihlali yok",
    body:
      "Plan bütün kurallarınıza uyuyor. Bir kuralı bozan yerleştirme yaparsanız, planın üstünde anında kırmızı bir uyarı belirir. Demoda deneyin: ayrı oturması gerekenleri aynı masaya sürükleyin.",
  },
};

export const pricing = {
  eyebrow: "Fiyatlandırma",
  title: "Ne kadar erken, o kadar uygun",
  body:
    "Yanı Başımda, düğününüz için tek seferlik. Rezervasyonunuzu ne kadar erken yaparsanız fiyatınız o kadar düşük olur — en erken 700 ₺'den başlar, düğüne yaklaştıkça 1.000 ₺'ye çıkar.",
  currency: "₺",
  min: 700,
  max: 1000,
  monthsEarly: 12, // en erken rezervasyon = en düşük fiyat
  monthsLate: 1, // düğün ayı = en yüksek fiyat (sistem de bu ay açılır)
  sliderLabel: "Düğününüze kaç ay var?",
  rangeEarlyLabel: "12+ ay önce",
  rangeLateLabel: "Düğün ayı",
  includesTitle: "Her rezervasyona dahil",
  includes: [
    "Sınırsız misafir ve masa",
    "Sürükle-bırak yerleştirme",
    "Anlık değişiklikler",
    "İsimle misafir arama",
    "Salon düzeni görünümü",
  ],
  reserveNote:
    "Bugün kredi kartı olmadan yerinizi ayırın; fiyatınız kilitlenir, ödemeyi planlayıcı açıldığında yaparsınız.",
  note: {
    title: "Düğününüze özel, tam zamanında açılır",
    body:
      "Planlayıcınız düğün tarihinize göre, düğünden 1 ay önce açılır — masaların gerçekten netleştiği o son dönemde tam kapasite kullanırsınız.",
  },
  cta: "Erken Yerini Ayır",
};

export const finalCta = {
  title: ["Masalar hazır.", "Siz de hazırsınız."],
  body: "Oturma planınızı zahmetsizce oluşturun. Düğününüzde herkes doğru yerde olsun.",
  primaryCta: "Yerini Ayır",
  secondaryCta: "Demo İncele",
};

export const footer = {
  blurb: "Düğün oturma planınızı sıcak, sade ve zahmetsiz şekilde kurun.",
  columns: [
    {
      title: "Ürün",
      links: ["Özellikler", "Nasıl Çalışır", "Fiyatlandırma", "Demo"],
    },
    {
      title: "Şirket",
      links: ["Hakkımızda", "Blog", "İletişim", "Kariyer"],
    },
    {
      title: "Yasal",
      links: ["Gizlilik", "Kullanım Koşulları", "KVKK"],
    },
  ],
  social: ["Instagram", "Pinterest", "X"],
  legal: "© 2026 Yanı Başımda. Tüm hakları saklıdır.",
};

/* --- Sample data that drives the real (CSS-drawn) seating-planner mockup --- */
export const plannerData = {
  tables: [
    { id: 1, label: "Masa 1", seats: 8, filled: 8, group: "Aile" },
    { id: 2, label: "Masa 2", seats: 8, filled: 6, group: "Arkadaş" },
    { id: 3, label: "Masa 3", seats: 6, filled: 6, group: "Aile" },
    { id: 4, label: "Masa 4", seats: 8, filled: 5, group: "İş" },
  ],
  guests: [
    { name: "Elif Yıldız", group: "Aile", seated: true, table: "Masa 1" },
    { name: "Kaan Demir", group: "Arkadaş", seated: true, table: "Masa 2" },
    { name: "Zeynep Arslan", group: "Aile", seated: true, table: "Masa 3" },
    { name: "Mert Çelik", group: "İş", seated: false, table: null },
    { name: "Selin Koç", group: "Arkadaş", seated: false, table: null },
    { name: "Deniz Aydın", group: "Aile", seated: true, table: "Masa 1" },
  ],
  summary: { total: 96, seated: 79, unseated: 17, tables: 12 },
};
