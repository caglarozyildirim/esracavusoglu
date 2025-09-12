import PageHeroSlider from '../PageHeroSlider';

export default function AboutPageContent() {
  const aboutSlides = [
    {
      title: "Yaşanmış Deneyim.\nPsikolojik Zeka.\nYeni Bir Etki Dönemi.",
      subtitle: "Dr. Esra Çavuşoğlu hakkında – Psikoloji doktoru, New York eyalet sertifikalı bağımlılık terapisti ve klinik psikolog."
    },
    {
      title: "18 Yıllık Ayıklık.\nBilimsel Yaklaşım.\nUmut Dolu Gelecek.",
      subtitle: "21 yaşında madde bağımlısı, 28 yaşında bu savaşı kazandım. 18 yıldır ayık yaşamın güzelliklerini yaşıyorum."
    },
    {
      title: "Yale Deneyimi.\nTürkiye Modeli.\n500+ Genç.",
      subtitle: "Yale Tıp Fakültesi deneyimi ile Türkiye Rehabilitasyon Modeli'ni tasarladım ve 500+ gencin hayatını değiştirdim."
    }
  ];

  return (
    <>
      <PageHeroSlider 
        slides={aboutSlides}
        ctaText="DAHA FAZLA BİLGİ"
        ctaLink="/iletisim"
      />
      
      <main className="bg-manjit">
        {/* Quote Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <blockquote className="text-3xl md:text-4xl font-crimson font-normal leading-tight text-white mb-8">
              "Madde bağımlılığı şeker hastalığı gibi tedavi edilebilir bir hastalıktır."
            </blockquote>
            <p className="text-lg text-manjit-coral font-crimson">
              Kendi deneyimlerimle başlayan bu yolculuk, bağımlılıkla mücadelede bilimsel ve 
              kanıta dayalı yaklaşımların ne kadar önemli olduğunu gösterdi.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-crimson font-normal text-center mb-16 text-white">Değerlerim</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center p-6 bg-taupe-dark bg-opacity-50 rounded-lg">
                <h3 className="text-xl font-crimson font-normal mb-4 text-white">Kurtuluş</h3>
                <p className="text-manjit-coral font-crimson leading-relaxed">
                  7 yıllık bağımlılık döneminden sonra iyileşme yolculuklarına rehberlik ediyorum.
                </p>
              </div>
              <div className="text-center p-6 bg-taupe-dark bg-opacity-50 rounded-lg">
                <h3 className="text-xl font-crimson font-normal mb-4 text-white">Eğitim</h3>
                <p className="text-manjit-coral font-crimson leading-relaxed">
                  Amerika'da aldığım eğitimi Türkiye'deki gençlerin hizmetine sunuyorum.
                </p>
              </div>
              <div className="text-center p-6 bg-taupe-dark bg-opacity-50 rounded-lg">
                <h3 className="text-xl font-crimson font-normal mb-4 text-white">Hizmet</h3>
                <p className="text-manjit-coral font-crimson leading-relaxed">
                  500'den fazla gencin hayatını yeniden inşa etmesine yardımcı oldum.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}