'use client';

import Link from 'next/link';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <main className="pt-24 pb-20">
        <div className="w-full px-[4vw]">
          <div className="max-w-[900px] mx-auto">
            <h1 className="font-josefin text-black mb-12"
                style={{ fontSize: '3.5rem', fontWeight: 200, lineHeight: 1.2 }}>
              Kişisel Veri Politikası
            </h1>

            <div className="font-josefin prose prose-lg max-w-none"
                 style={{ fontSize: '1.25rem', lineHeight: 1.8, fontWeight: 200 }}>

              <h2 className="font-josefin text-black mt-12 mb-6"
                  style={{ fontSize: '2rem', fontWeight: 300 }}>
                1. Veri Sorumlusu
              </h2>
              <p className="mb-6 text-gray-700">
                6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, kişisel verileriniz; veri sorumlusu olarak Dr. Esra Çavuşoğlu, PhD ("Esra Çavuşoğlu" veya "Biz") tarafından aşağıda açıklanan kapsamda işlenebilecektir.
              </p>

              <h2 className="font-josefin text-black mt-12 mb-6"
                  style={{ fontSize: '2rem', fontWeight: 300 }}>
                2. İşlenen Kişisel Verileriniz
              </h2>
              <p className="mb-6 text-gray-700">
                Web sitemizi ziyaret etmeniz, hizmetlerimizden faydalanmanız veya bizimle iletişime geçmeniz durumunda aşağıdaki kişisel verileriniz işlenebilmektedir:
              </p>
              <ul className="mb-6 text-gray-700 list-disc pl-6">
                <li>Ad, soyad</li>
                <li>E-posta adresi</li>
                <li>Telefon numarası</li>
                <li>Mesajınızın içeriği</li>
                <li>IP adresi</li>
                <li>Çerez (cookie) verileri</li>
                <li>Web sitesi kullanım verileri</li>
              </ul>

              <h2 className="font-josefin text-black mt-12 mb-6"
                  style={{ fontSize: '2rem', fontWeight: 300 }}>
                3. Kişisel Verilerinizin İşlenme Amaçları
              </h2>
              <p className="mb-6 text-gray-700">
                Toplanan kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:
              </p>
              <ul className="mb-6 text-gray-700 list-disc pl-6">
                <li>İletişim taleplerinin değerlendirilmesi ve yanıtlanması</li>
                <li>Hizmetlerimiz hakkında bilgi verilmesi</li>
                <li>Randevu ve görüşme organizasyonu</li>
                <li>Hukuki yükümlülüklerin yerine getirilmesi</li>
                <li>Web sitesi performansının iyileştirilmesi</li>
                <li>İstatistiksel analizler ve raporlamalar</li>
                <li>Güvenlik tedbirlerinin alınması</li>
              </ul>

              <h2 className="font-josefin text-black mt-12 mb-6"
                  style={{ fontSize: '2rem', fontWeight: 300 }}>
                4. Kişisel Verilerinizin İşlenmesinin Hukuki Sebepleri
              </h2>
              <p className="mb-6 text-gray-700">
                Kişisel verileriniz, KVKK'nın 5. maddesinde belirtilen aşağıdaki hukuki sebepler kapsamında işlenmektedir:
              </p>
              <ul className="mb-6 text-gray-700 list-disc pl-6">
                <li>Açık rızanızın bulunması</li>
                <li>Bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması</li>
                <li>Hukuki yükümlülüğün yerine getirilmesi</li>
                <li>Bir hakkın tesisi, kullanılması veya korunması için zorunlu olması</li>
                <li>Meşru menfaatlerimiz için veri işlemenin zorunlu olması</li>
              </ul>

              <h2 className="font-josefin text-black mt-12 mb-6"
                  style={{ fontSize: '2rem', fontWeight: 300 }}>
                5. Kişisel Verilerin Kimlere ve Hangi Amaçla Aktarılabileceği
              </h2>
              <p className="mb-6 text-gray-700">
                Toplanan kişisel verileriniz; yukarıda belirtilen amaçların gerçekleştirilmesi doğrultusunda:
              </p>
              <ul className="mb-6 text-gray-700 list-disc pl-6">
                <li>Hukuk danışmanlarımıza</li>
                <li>Mali müşavirlerimize</li>
                <li>Hosting ve teknik altyapı hizmeti sağlayıcılarına</li>
                <li>Yasal düzenlemeler kapsamında yetkili kamu kurum ve kuruluşlarına</li>
              </ul>
              <p className="mb-6 text-gray-700">
                KVKK'nın 8. ve 9. maddelerinde belirtilen kişisel veri işleme şartları ve amaçları çerçevesinde aktarılabilecektir.
              </p>

              <h2 className="font-josefin text-black mt-12 mb-6"
                  style={{ fontSize: '2rem', fontWeight: 300 }}>
                6. Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi
              </h2>
              <p className="mb-6 text-gray-700">
                Kişisel verileriniz, elektronik ortamda web sitesi iletişim formları, e-posta, telefon ve çerezler aracılığıyla; otomatik veya otomatik olmayan yöntemlerle, sözlü, yazılı veya elektronik ortamda toplanmaktadır.
              </p>

              <h2 className="font-josefin text-black mt-12 mb-6"
                  style={{ fontSize: '2rem', fontWeight: 300 }}>
                7. Kişisel Verilerinizin Korunması
              </h2>
              <p className="mb-6 text-gray-700">
                Kişisel verilerinizin güvenliği bizim için önceliklidir. Verilerinizi korumak için gerekli teknik ve idari tedbirleri almaktayız:
              </p>
              <ul className="mb-6 text-gray-700 list-disc pl-6">
                <li>SSL sertifikası ile güvenli bağlantı</li>
                <li>Güvenlik duvarları ve antivirüs sistemleri</li>
                <li>Veri erişim yetki kontrolü</li>
                <li>Düzenli güvenlik güncellemeleri</li>
                <li>Veri işleyen personelin gizlilik taahhütnamesi</li>
              </ul>

              <h2 className="font-josefin text-black mt-12 mb-6"
                  style={{ fontSize: '2rem', fontWeight: 300 }}>
                8. Kişisel Veri Sahibinin KVKK Madde 11 Kapsamındaki Hakları
              </h2>
              <p className="mb-6 text-gray-700">
                KVKK'nın 11. maddesi uyarınca herkes, veri sorumlusuna başvurarak kendisiyle ilgili:
              </p>
              <ul className="mb-6 text-gray-700 list-disc pl-6">
                <li>Kişisel veri işlenip işlenmediğini öğrenme</li>
                <li>Kişisel verileri işlenmişse buna ilişkin bilgi talep etme</li>
                <li>Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                <li>Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme</li>
                <li>Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme</li>
                <li>KVKK'nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerin silinmesini veya yok edilmesini isteme</li>
                <li>Düzeltme, silme ve yok etme işlemlerinin, kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme</li>
                <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme</li>
                <li>Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme</li>
              </ul>
              <p className="mb-6 text-gray-700">
                haklarına sahiptir.
              </p>

              <h2 className="font-josefin text-black mt-12 mb-6"
                  style={{ fontSize: '2rem', fontWeight: 300 }}>
                9. Veri Saklama Süresi
              </h2>
              <p className="mb-6 text-gray-700">
                Kişisel verileriniz, işleme amaçlarının gerektirdiği süre boyunca saklanmaktadır. İşleme amacının ortadan kalkması halinde, ilgili mevzuat hükümleri saklı kalmak kaydıyla, verileriniz silinecek, yok edilecek veya anonim hale getirilecektir.
              </p>

              <h2 className="font-josefin text-black mt-12 mb-6"
                  style={{ fontSize: '2rem', fontWeight: 300 }}>
                10. Çerezler (Cookies)
              </h2>
              <p className="mb-6 text-gray-700">
                Web sitemizde çerezler kullanılmaktadır. Çerez kullanımı hakkında detaylı bilgi için <Link href="/terms" className="text-blue-600 hover:underline">Çerez Politikamızı</Link> inceleyebilirsiniz.
              </p>

              <h2 className="font-josefin text-black mt-12 mb-6"
                  style={{ fontSize: '2rem', fontWeight: 300 }}>
                11. Üçüncü Taraf Web Siteleri
              </h2>
              <p className="mb-6 text-gray-700">
                Web sitemiz üçüncü taraf web sitelerine bağlantılar içerebilir. Bu sitelerin gizlilik uygulamaları hakkında sorumluluk taşımamaktayız. Bu siteleri ziyaret ettiğinizde, ilgili sitenin gizlilik politikasını incelemenizi öneririz.
              </p>

              <h2 className="font-josefin text-black mt-12 mb-6"
                  style={{ fontSize: '2rem', fontWeight: 300 }}>
                12. Politika Güncellemeleri
              </h2>
              <p className="mb-6 text-gray-700">
                Bu Kişisel Veri Politikası, yasal düzenlemeler veya iş süreçlerimiz doğrultusunda güncellenebilir. Güncellemeler web sitemizde yayınlanacaktır. Önemli değişiklikler için size bildirimde bulunabiliriz.
              </p>

              <h2 className="font-josefin text-black mt-12 mb-6"
                  style={{ fontSize: '2rem', fontWeight: 300 }}>
                13. Başvuru Yöntemi
              </h2>
              <p className="mb-6 text-gray-700">
                KVKK'nın 11. maddesi kapsamındaki haklarınızı kullanmak için:
              </p>
              <ul className="mb-6 text-gray-700 list-disc pl-6">
                <li>E-posta: hello@esracavusoglu.com</li>
                <li>Adres: İstanbul, Türkiye</li>
              </ul>
              <p className="mb-6 text-gray-700">
                adreslerine kimliğinizi tespit edici bilgilerle birlikte başvuruda bulunabilirsiniz. Başvurularınız en kısa sürede ve en geç otuz gün içinde yanıtlanacaktır.
              </p>

              <h2 className="font-josefin text-black mt-12 mb-6"
                  style={{ fontSize: '2rem', fontWeight: 300 }}>
                14. İletişim
              </h2>
              <p className="mb-6 text-gray-700">
                Kişisel verilerinizin işlenmesi ile ilgili sorularınız için bizimle iletişime geçebilirsiniz:
              </p>
              <p className="mb-6 text-gray-700">
                <strong>Dr. Esra Çavuşoğlu, PhD</strong><br />
                E-posta: hello@esracavusoglu.com<br />
                Adres: İstanbul, Türkiye
              </p>

              <p className="mt-12 text-gray-600 italic">
                Son güncelleme: {new Date().toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}