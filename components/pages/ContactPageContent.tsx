import Link from 'next/link';
import PageHeroSlider from '../PageHeroSlider';

export default function ContactPageContent() {
  const contactSlides = [
    {
      title: "Bağlantı.\nİşbirliği.\nEtki.",
      subtitle: "Yeni projeler, iş birlikleri ve etkili çözümler için her zaman açığım. Birlikte değer yaratabileceğimiz konuları konuşalım."
    },
    {
      title: "Proje.\nDanışmanlık.\nEğitim.",
      subtitle: "Bağımlılık tedavisi, sağlık politikaları ve girişimcilik konularında danışmanlık ve eğitim hizmetleri sunuyorum."
    }
  ];

  return (
    <>
      <PageHeroSlider 
        slides={contactSlides}
        ctaText="HEMEN İLETİŞİME GEÇ"
        ctaLink="#contact-info"
      />
      
      <main className="bg-manjit" id="contact-info">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-manjit-coral font-crimson leading-relaxed mb-16 max-w-2xl mx-auto">
              Bağımlılık tedavisi, sağlık politikaları, girişimcilik danışmanlığı veya eğitim konularında 
              işbirliği yapmak için benimle iletişime geçin.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-8 bg-taupe-dark bg-opacity-50 rounded-lg">
                <h3 className="text-lg font-crimson font-normal mb-4 text-white">E-posta</h3>
                <a 
                  href="mailto:info@esracavusoglu.com" 
                  className="text-manjit-coral font-crimson hover:text-white transition-colors"
                >
                  info@esracavusoglu.com
                </a>
              </div>
              
              <div className="text-center p-8 bg-taupe-dark bg-opacity-50 rounded-lg">
                <h3 className="text-lg font-crimson font-normal mb-4 text-white">ÇABAÇAD</h3>
                <p className="text-manjit-coral font-crimson">
                  Çağdaş Bağımlılık Çalışmaları Derneği
                </p>
              </div>
              
              <div className="text-center p-8 bg-taupe-dark bg-opacity-50 rounded-lg">
                <h3 className="text-lg font-crimson font-normal mb-4 text-white">Longevilab</h3>
                <p className="text-manjit-coral font-crimson">
                  Biyohacking ve Uzun Yaşam Platformu
                </p>
              </div>
            </div>

            <div className="bg-taupe-dark bg-opacity-30 rounded-lg p-8 mb-16">
              <h2 className="text-2xl font-crimson font-normal mb-6 text-white">Hizmet Alanlarım</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="text-lg font-crimson font-normal mb-3 text-white">Bağımlılık Tedavisi</h4>
                  <ul className="text-manjit-coral font-crimson text-sm space-y-2">
                    <li>• Klinik psikoloji danışmanlığı</li>
                    <li>• Rehabilitasyon programları</li>
                    <li>• Süpervizyön hizmetleri</li>
                    <li>• Tedavi modeli geliştirme</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-crimson font-normal mb-3 text-white">Eğitim & Danışmanlık</h4>
                  <ul className="text-manjit-coral font-crimson text-sm space-y-2">
                    <li>• Profesyonel eğitim programları</li>
                    <li>• Sağlık politikaları danışmanlığı</li>
                    <li>• Girişimcilik mentorluğu</li>
                    <li>• Uluslararası proje geliştirme</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-crimson font-normal mb-3 text-white">Araştırma & Geliştirme</h4>
                  <ul className="text-manjit-coral font-crimson text-sm space-y-2">
                    <li>• Bağımlılık bilimi araştırmaları</li>
                    <li>• Biyohacking uygulamaları</li>
                    <li>• Uzun yaşam stratejileri</li>
                    <li>• Akademik yayın çalışmaları</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-crimson font-normal mb-3 text-white">Organizasyon Yönetimi</h4>
                  <ul className="text-manjit-coral font-crimson text-sm space-y-2">
                    <li>• ÇABAÇAD dernek yönetimi</li>
                    <li>• Longevilab platform geliştirme</li>
                    <li>• Stratejik planlama</li>
                    <li>• Ekip yönetimi ve liderlik</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-crimson font-normal mb-6 text-white">İşbirliği Yapalım</h2>
              <p className="text-manjit-coral font-crimson mb-8 max-w-2xl mx-auto">
                Ayıklık deneyimim, Yale eğitimim ve gençleri iyileştirme başarım ile
                projelerinizde değer yaratmaya hazırım.
              </p>
              
              <a 
                href="mailto:info@esracavusoglu.com?subject=İşbirliği%20Teklifi"
                className="cta-button inline-flex items-center justify-center font-crimson"
              >
                PROJENİZİ PAYLAŞIN
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}