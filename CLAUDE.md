# Esra Çavuşoğlu Web Sitesi

Bu proje, Esra Çavuşoğlu'nun kişisel web sitesini **manjitsareen.com** sitesi referans alınarak oluşturulan Next.js tabanlı modern web sitesidir.

## 🎯 Proje Amacı

Manjitsareen.com'un tasarım yapısını ve navigasyon sistemini referans alarak, Esra Çavuşoğlu için Türkçe içerikli profesyonel bir web sitesi oluşturmak.

## 🛠️ Teknoloji Stack'i

- **Framework**: Next.js 15.5.3 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4.1
- **Deployment**: Ready for Vercel/Netlify

## 📁 Proje Yapısı

```
esra-cavusoglu/
├── app/
│   ├── page.tsx              # Ana sayfa
│   ├── about/page.tsx        # Hakkımda sayfası  
│   ├── business/page.tsx     # İş hayatı sayfası
│   ├── personal/page.tsx     # Kişisel sayfa
│   ├── blog/page.tsx         # Blog sayfası
│   ├── contact/page.tsx      # İletişim sayfası
│   ├── layout.tsx           # Root layout
│   └── globals.css          # Global stiller
├── components/              # Tüm componentler
│   ├── Header.tsx          # Navigasyon menüsü
│   ├── HeroSection.tsx     # Ana hero bölümü
│   ├── ServicesSection.tsx # Hizmetler bölümü
│   ├── BlogSection.tsx     # Blog önizleme
│   └── Footer.tsx          # Footer bölümü
└── package.json
```

## 🎨 Tasarım Referansı: Manjitsareen.com

### Navigation Structure (Manjit'ten Alınan)
```
HOME | ABOUT | BUSINESS | PERSONAL | BLOG | LET'S CONNECT
```

### Sayfa Bölümleri
1. **Hero Section**: Büyük başlık, kişisel tanıtım, CTA butonları
2. **Services/Focus Areas**: 4 ana hizmet kartı (icon-based)
3. **Blog Preview**: Son yazılar grid'i
4. **Footer**: Sosyal medya, iletişim, navigation

### Tasarım Sistemi
- **Renk Paleti**: Beyaz, gri tonları, siyah akcent
- **Typography**: Large, light font weights (font-light)
- **Layout**: Grid-based, responsive
- **Spacing**: Generous whitespace, py-20 sections
- **Interactive**: Subtle hover effects, transitions

## 🔧 Ana Özellikler

### ✅ Tamamlanan Componentler

#### 1. Header.tsx
- Responsive navigation menu
- Mobile hamburger menu
- Sticky header with border
- CTA button: "LET'S CONNECT"

#### 2. HeroSection.tsx  
- Large typography hero
- Personal introduction
- Dual CTA buttons (LET'S CONNECT, LEARN MORE)
- Profile image placeholder
- Scroll indicator animation

#### 3. ServicesSection.tsx
- 4 service cards in 2x2 grid
- Icons with hover effects
- Service descriptions
- "DAHA FAZLA" arrows
- Links to respective pages

#### 4. BlogSection.tsx
- Blog preview with 3 latest posts
- Category tags and metadata
- Read time estimates
- "TÜM YAZILAR" CTA
- Hover interactions

#### 5. Footer.tsx
- 4-column layout
- Brand section with featured media logos
- Social media links (LinkedIn, Twitter, Instagram)  
- Navigation links
- Contact information
- Copyright and legal links

### ✅ Tamamlanan Sayfalar

1. **/** - Ana Sayfa
   - Hero + Services + Blog + Footer kombinasyonu
   
2. **/about** - Hakkımda  
   - Personal story, values, quote section
   
3. **/business** - İş Hayatı
   - Service areas, consulting expertise
   
4. **/personal** - Kişisel Gelişim
   - Health philosophy, wellness areas
   
5. **/blog** - Blog
   - Blog post grid, categories, featured posts
   
6. **/contact** - İletişim 
   - Contact methods, location, social links

## 💻 Development

### Kurulum
```bash
cd esra-cavusoglu
npm install
```

### Geliştirme Sunucusu
```bash
npm run dev
```
Site: http://localhost:3000

### Production Build
```bash
npm run build
npm start
```

### Type Checking
```bash
npm run type-check
```

## 🌍 İçerik Adaptasyonu

### Manjitsareen.com → Esra Çavuşoğlu
- **Dil**: İngilizce → Türkçe
- **Navigation**: HOME, ABOUT, BUSINESS, PERSONAL, BLOG, LET'S CONNECT
- **Content**: Manjit'in expertise → Esra'nın deneyimi
- **Focus Areas**: 
  - İş Danışmanlığı (Business consulting)
  - Kişisel Gelişim & Sağlık (Personal development & health)
  - Konuşmacılık & Medya (Speaking & media)
  - Yatırım & Mentorluk (Investment & mentoring)

### Profesyonel Mesajlaşma
- **Value Prop**: "25+ yıllık deneyim ile girişimcilerin büyümesine yardımcı oluyorum"
- **Philosophy**: "Dayanıklılık sadece bir buzzword değil — bu bir pratik"
- **Approach**: Veri, içgüdü ve deneyim ile liderlik

## 📱 Responsive Design

- **Mobile First**: Tailwind'in mobile-first yaklaşımı
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Grid System**: 1 → 2 → 3 → 4 columns responsive
- **Typography**: Responsive text sizing (text-5xl md:text-6xl)
- **Navigation**: Hamburger menu for mobile

## 🎨 Visual Identity

### Typography Hierarchy
```css
Hero: text-5xl md:text-6xl lg:text-7xl font-light
Sections: text-4xl md:text-5xl font-light  
Body: text-xl text-gray-600
CTAs: text-sm font-medium uppercase
```

### Color System
```css
Primary: Black (#000000)
Background: White (#ffffff)
Gray scale: gray-50 to gray-900
Accents: Hover states with gray transitions
```

### Component Patterns
- **Cards**: Border hover effects, subtle shadows
- **Buttons**: Black primary, outline secondary
- **Icons**: Outline style SVGs
- **Spacing**: Consistent py-20, px-4 sm:px-6 lg:px-8

## 🚀 Deployment Ready

### Vercel/Netlify Ready
- Next.js 15.5.3 with App Router
- Static generation optimized
- Automatic code splitting
- Performance optimized

### SEO Optimized
- Semantic HTML structure
- Meta tags in layout.tsx
- Turkish language support (lang="tr")
- Proper heading hierarchy

## 📈 Sonraki Adımlar

### Content Enhancement
- [ ] Professional photography/images
- [ ] Real blog content creation  
- [ ] Client testimonials and case studies
- [ ] Detailed service descriptions

### Technical Improvements
- [ ] Contact form functionality
- [ ] Blog CMS integration (Sanity/Contentful)
- [ ] SEO meta tags per page
- [ ] Analytics integration (Google Analytics)
- [ ] Performance monitoring

### Advanced Features
- [ ] Dark mode support
- [ ] Newsletter signup functionality
- [ ] Search functionality
- [ ] Blog filtering and pagination

---

## 📄 Döküman Notları

**Created**: 11 Eylül 2025  
**Reference Site**: https://www.manjitsareen.com/  
**Status**: ✅ Complete MVP - Ready for development server  
**Next Phase**: Content creation and professional photography

Bu proje manjitsareen.com'un yapısal tasarımını koruyarak, Esra Çavuşoğlu'nun kişisel markasını yansıtan Türkçe içerikli modern bir web sitesi oluşturur.