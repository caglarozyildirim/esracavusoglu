import PageHeroSlider from '../PageHeroSlider';

export default function PersonalPageContent() {
  const personalSlides = [
    {
      title: "Sağlık.\nİnsanlık.\nDayanıklılık.",
      subtitle: "Kişisel sağlık yolculuğumu ve yaşam felsefemi paylaşıyorum. MS ile mücadele, annelik deneyimi ve bütünsel sağlık yaklaşımı."
    },
    {
      title: "Zihinsel Güç.\nFiziksel Sağlık.\nYaşam Dengesi.",
      subtitle: "18 yıllık ayıklık sürecimde öğrendiğim yaşam prensiplerini ve sağlık stratejilerimi aktarıyorum."
    },
    {
      title: "İç Huzur.\nAile.\nAmaca Odaklı Yaşam.",
      subtitle: "Mindfulness, meditasyon ve sürdürülebilir yaşam alışkanlıklarıyla kişisel dönüşüm hikayem."
    }
  ];

  return (
    <>
      <PageHeroSlider 
        slides={personalSlides}
        ctaText="BENİMLE İLETİŞİME GEÇ"
        ctaLink="/iletisim"
      />
      
      <main className="bg-light">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-josefin font-semibold mt-16 mb-6 text-primary">Sağlık & Yaşam Felsefem</h2>
              
              <p className="text-lg text-secondary font-josefin leading-relaxed mb-8">
                Sağlıklı yaşam konusunda tutkulu bir savunucuyum. Fiziksel ve mental sağlığın dengesi, 
                başarılı bir iş hayatının temelini oluşturduğuna inanıyorum. Bu nedenle, bütünsel sağlık 
                yaklaşımını hem kendi hayatımda uyguluyorum hem de çevremdekilere ilham vermeye çalışıyorum.
              </p>
              
              <h3 className="text-xl font-josefin font-semibold mt-12 mb-4 text-primary">Ana Odak Alanlarım</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
                <div className="p-6 bg-light-secondary border border-light rounded-sm">
                  <h4 className="font-josefin font-medium mb-2 text-primary">Fiziksel Sağlık</h4>
                  <p className="text-secondary text-sm font-josefin">Düzenli egzersiz, beslenme ve uyku optimizasyonu</p>
                </div>
                <div className="p-6 bg-light-secondary border border-light rounded-sm">
                  <h4 className="font-josefin font-medium mb-2 text-primary">Mental Sağlık</h4>
                  <p className="text-secondary text-sm font-josefin">Mindfulness, meditasyon ve stres yönetimi</p>
                </div>
                <div className="p-6 bg-light-secondary border border-light rounded-sm">
                  <h4 className="font-josefin font-medium mb-2 text-primary">Yaşam Dengesi</h4>
                  <p className="text-secondary text-sm font-josefin">İş-yaşam dengesi ve sürdürülebilir alışkanlıklar</p>
                </div>
                <div className="p-6 bg-light-secondary border border-light rounded-sm">
                  <h4 className="font-josefin font-medium mb-2 text-primary">Kişisel Gelişim</h4>
                  <p className="text-secondary text-sm font-josefin">Sürekli öğrenme ve kişisel dönüşüm</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}