import PageHeroSlider from '../PageHeroSlider';

export default function BusinessPageContent() {
  const businessSlides = [
    {
      title: "Kurucu.\nYatırımcı.\nDanışman.",
      subtitle: "ÇABAÇAD ve Longevilab'in kurucusu. Türkiye'nin bağımlılık tedavisinde yenilikçi yaklaşımlarının öncüsü."
    },
    {
      title: "Türkiye Modeli.\nUluslararası Standart.\nBilimsel Yaklaşım.",
      subtitle: "Türkiye Rehabilitasyon Modeli'ni tasarlayıp uygulayarak ulusal standart haline getirdim."
    },
    {
      title: "Yale Deneyimi.\nAmerika Eğitimi.\nTürkiye Hizmeti.",
      subtitle: "Yale Tıp Fakültesi ve Miami Üniversitesi eğitimimi Türkiye'deki gençlerin hizmetine sunuyorum."
    }
  ];

  return (
    <>
      <PageHeroSlider 
        slides={businessSlides}
        ctaText="PROJELERİMİ İNCELE"
        ctaLink="/iletisim"
      />
      
      <main className="bg-manjit">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-crimson font-normal mt-16 mb-6 text-white">Profesyonel Deneyimim</h2>
              
              <div className="space-y-8 not-prose">
                <div className="p-8 bg-taupe-dark bg-opacity-50 rounded-lg">
                  <h3 className="text-xl font-crimson font-normal mb-4 text-white">Oya Bahadır Yüksel Rehabilitasyon Merkezi</h3>
                  <p className="text-manjit-coral mb-3 font-crimson font-normal">Kıdemli Süpervizyör</p>
                  <p className="text-manjit-coral font-crimson leading-relaxed mb-4">
                    Gaziantep'te yer alan merkezde Türkiye Rehabilitasyon Modeli'ni tasarladım ve uygulamaya koydum. 
                    Bu model daha sonra Türkiye'nin standardı haline geldi.
                  </p>
                  <p className="text-manjit-coral font-crimson leading-relaxed">
                    <strong className="text-white">Sonuç:</strong> 500'den fazla gencin bağımlılıktan kurtulmasına yardımcı oldum.
                  </p>
                </div>
                
                <div className="p-8 bg-taupe-dark bg-opacity-50 rounded-lg">
                  <h3 className="text-xl font-crimson font-normal mb-4 text-white">Yale Tıp Fakültesi</h3>
                  <p className="text-manjit-coral mb-3 font-crimson font-normal">Klinik Danışma Kurulu Üyesi & Uluslararası Kalkınma Danışmanı</p>
                  <p className="text-manjit-coral font-crimson leading-relaxed">
                    Yale Süpervizyon Programı'nda uluslararası kalkınma konularında danışmanlık yaptım. 
                    Psikiyatri kliniği Prof. Dr. David J. Powell ile işbirliği içinde çalıştım.
                  </p>
                </div>
                
                <div className="p-8 bg-taupe-dark bg-opacity-50 rounded-lg">
                  <h3 className="text-xl font-crimson font-normal mb-4 text-white">ÇABAÇAD & Longevilab</h3>
                  <p className="text-manjit-coral mb-3 font-crimson font-normal">Kurucu</p>
                  <p className="text-manjit-coral font-crimson leading-relaxed mb-4">
                    Türkiye'nin artan bağımlılık sorunuyla mücadele etmek için Çağdaş Bağımlılık 
                    Çalışmaları Derneği'ni (ÇABAÇAD) kurdum.
                  </p>
                  <p className="text-manjit-coral font-crimson leading-relaxed">
                    Longevilab ile Türkiye'nin ilk biyohacking, uzun yaşam ve bağımlılık bilimi 
                    platformunu oluşturdum.
                  </p>
                </div>
              </div>
              
              <h2 className="text-2xl font-crimson font-normal mt-16 mb-6 text-white">Uluslararası Tanınırlık</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
                <div className="p-6 bg-taupe-dark bg-opacity-30 rounded-lg border border-taupe-dark">
                  <h3 className="text-lg font-crimson font-normal mb-3 text-white">UNODC (Birleşmiş Milletler)</h3>
                  <p className="text-manjit-coral font-crimson text-sm">Viyana, Avusturya'da 2016 yılında düzenlenen etkinlikte moderator</p>
                </div>
                <div className="p-6 bg-taupe-dark bg-opacity-30 rounded-lg border border-taupe-dark">
                  <h3 className="text-lg font-crimson font-normal mb-3 text-white">APBAM Konferansı</h3>
                  <p className="text-manjit-coral font-crimson text-sm">Singapur'da 2013'te Asya Pasifik Davranışsal ve Bağımlılık Tıbbı Konferansı'nda panelist</p>
                </div>
                <div className="p-6 bg-taupe-dark bg-opacity-30 rounded-lg border border-taupe-dark">
                  <h3 className="text-lg font-crimson font-normal mb-3 text-white">Başbakanlık Onuru</h3>
                  <p className="text-manjit-coral font-crimson text-sm">Bağımlılık konusundaki makalelerim Başbakanlık tarafından onurlandırıldı</p>
                </div>
                <div className="p-6 bg-taupe-dark bg-opacity-30 rounded-lg border border-taupe-dark">
                  <h3 className="text-lg font-crimson font-normal mb-3 text-white">Uluslararası Eğitim</h3>
                  <p className="text-manjit-coral font-crimson text-sm">ABD, Türkiye ve Singapur'da genç madde kullanımı tedavisi konularında sunumlar</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}