'use client';

import Link from 'next/link';

export default function CerezPolitikasi() {
  return (
    <div className="min-h-screen bg-white">
      <main className="pt-24 pb-20">
        <div className="w-full px-[4vw]">
          <div className="max-w-[900px] mx-auto">
            <h1 className="font-josefin text-black mb-12"
                style={{ fontSize: '3.5rem', fontWeight: 200, lineHeight: 1.2 }}>
              Çerez Politikası
            </h1>

            <div className="font-josefin prose prose-lg max-w-none"
                 style={{ fontSize: '1.25rem', lineHeight: 1.8, fontWeight: 200 }}>

              <p className="mb-6 text-gray-700">
                İşbu Çerez Politikası, 6698 sayılı Kişisel Verilerin Korunması Kanunu\'nun 10\'uncu maddesi ile Aydınlatma Yükümlülüğünün Yerine Getirilmesinde Uyulacak Usul ve Esaslar Hakkında Tebliğ kapsamında veri sorumlusu sıfatıyla Dr. Esra Çavuşoğlu, PhD tarafından hazırlanmıştır.
              </p>

              <p className="mb-6 text-gray-700">
                Bu Çerez Aydınlatma Metni\'nin amacı, internet sitemizde kullanılan çerezlerin cihazınıza yerleştirilmesi aracılığıyla otomatik yolla elde edilen kişisel verilerin işlenmesine ilişkin olarak, hangi amaçlarla hangi tür çerezleri kullandığımızı ve bu çerezleri nasıl yönetebileceğiniz hakkında sizlere bilgi vermektir.
              </p>

              <p className="mb-6 text-gray-700">
                İnternet sitemizde kullandığımız, zorunlu çerezler haricindeki çerezler için, kullanıcıların açık rızaları alınmakta ve istedikleri zaman rızalarını değiştirebilme olanağı sağlanmaktadır. Kullanıcılar çerez yönetim paneli üzerinden, internet sitemizde kullanılan çerez çeşitlerini görebilmekte ve Zorunlu Çerezler dışında kalan tüm çerezler için "açık" veya "kapalı" seçenekleri ile tercihlerini belirleyebilmektedirler. Yine bu panel üzerinden kullanıcılar tercihlerini her zaman değiştirebilmektedirler.
              </p>

              <h2 className="font-josefin text-black mt-12 mb-6"
                  style={{ fontSize: '2rem', fontWeight: 300 }}>
                1. Çerez Nedir?
              </h2>
              <p className="mb-6 text-gray-700">
                Çerezler (cookies), web sitelerini ziyaret ettiğinizde bilgisayarınıza, cep telefonunuza veya tabletinize kaydedilen küçük metin dosyalarıdır. Çerezler, web sitelerinin daha verimli çalışmasını sağlamak, kullanıcı deneyimini iyileştirmek ve site sahiplerine kullanım hakkında bilgi vermek için kullanılır.
              </p>

              <h2 className="font-josefin text-black mt-12 mb-6"
                  style={{ fontSize: '2rem', fontWeight: 300 }}>
                2. Çerezleri Neden Kullanıyoruz?
              </h2>
              <p className="mb-6 text-gray-700">
                www.esracavusoglu.com web sitesinde çerezleri aşağıdaki amaçlarla kullanmaktayız:
              </p>
              <ul className="mb-6 text-gray-700 list-disc pl-6">
                <li>Web sitesinin düzgün çalışmasını sağlamak</li>
                <li>Web sitesi güvenliğini artırmak</li>
                <li>Kullanıcı tercihlerini hatırlamak</li>
                <li>Web sitesi trafiğini analiz etmek ve kullanıcı davranışlarını anlamak</li>
                <li>Web sitesi performansını iyileştirmek</li>
                <li>Size daha iyi bir kullanıcı deneyimi sunmak</li>
                <li>Sosyal medya özellikleri sağlamak</li>
              </ul>

              <h2 className="font-josefin text-black mt-12 mb-6"
                  style={{ fontSize: '2rem', fontWeight: 300 }}>
                3. Kullandığımız Çerez Türleri
              </h2>

              <h3 className="font-josefin text-black mt-8 mb-4"
                  style={{ fontSize: '1.5rem', fontWeight: 300 }}>
                3.1 Zorunlu Çerezler
              </h3>
              <p className="mb-6 text-gray-700">
                Bu çerezler web sitesinin düzgün çalışması için gereklidir. Bu çerezler olmadan, istediğiniz sayfaları görüntüleyemez veya online formları kullanamazsınız. Bu çerezler kişisel bilgilerinizi saklamaz.
              </p>
              <div className="mb-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="text-left py-3 px-4 font-josefin" style={{ fontWeight: 300 }}>Çerez Adı</th>
                      <th className="text-left py-3 px-4 font-josefin" style={{ fontWeight: 300 }}>Süresi</th>
                      <th className="text-left py-3 px-4 font-josefin" style={{ fontWeight: 300 }}>Açıklama</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4">session_id</td>
                      <td className="py-3 px-4">Oturum</td>
                      <td className="py-3 px-4">Kullanıcı oturumunu yönetir</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4">security_token</td>
                      <td className="py-3 px-4">Oturum</td>
                      <td className="py-3 px-4">Güvenlik doğrulaması için kullanılır</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="font-josefin text-black mt-8 mb-4"
                  style={{ fontSize: '1.5rem', fontWeight: 300 }}>
                3.2 Performans Çerezleri
              </h3>
              <p className="mb-6 text-gray-700">
                Bu çerezler, web sitesini nasıl kullandığınız hakkında bilgi toplar (örneğin, hangi sayfalara gittiğiniz, hangi bağlantılara tıkladığınız). Bu bilgiler, web sitesinin performansını iyileştirmek için kullanılır. Bu çerezler kimliğinizi tanımlayan bilgiler toplamaz.
              </p>
              <div className="mb-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="text-left py-3 px-4 font-josefin" style={{ fontWeight: 300 }}>Çerez Adı</th>
                      <th className="text-left py-3 px-4 font-josefin" style={{ fontWeight: 300 }}>Süresi</th>
                      <th className="text-left py-3 px-4 font-josefin" style={{ fontWeight: 300 }}>Açıklama</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4">_ga</td>
                      <td className="py-3 px-4">2 yıl</td>
                      <td className="py-3 px-4">Google Analytics - Benzersiz kullanıcıları ayırt eder</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4">_gid</td>
                      <td className="py-3 px-4">24 saat</td>
                      <td className="py-3 px-4">Google Analytics - Kullanıcıları ayırt eder</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="font-josefin text-black mt-8 mb-4"
                  style={{ fontSize: '1.5rem', fontWeight: 300 }}>
                3.3 İşlevsellik Çerezleri
              </h3>
              <p className="mb-6 text-gray-700">
                Bu çerezler, web sitesinin tercihlerinizi hatırlamasını sağlar (örneğin, dil tercihiniz, bölgeniz). Bu sayede size daha kişiselleştirilmiş bir deneyim sunabiliriz.
              </p>
              <div className="mb-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="text-left py-3 px-4 font-josefin" style={{ fontWeight: 300 }}>Çerez Adı</th>
                      <th className="text-left py-3 px-4 font-josefin" style={{ fontWeight: 300 }}>Süresi</th>
                      <th className="text-left py-3 px-4 font-josefin" style={{ fontWeight: 300 }}>Açıklama</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4">language</td>
                      <td className="py-3 px-4">1 yıl</td>
                      <td className="py-3 px-4">Dil tercihini saklar</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4">theme</td>
                      <td className="py-3 px-4">1 yıl</td>
                      <td className="py-3 px-4">Tema tercihini saklar</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="font-josefin text-black mt-8 mb-4"
                  style={{ fontSize: '1.5rem', fontWeight: 300 }}>
                3.4 Hedefleme/Reklam Çerezleri
              </h3>
              <p className="mb-6 text-gray-700">
                Bu çerezler, ilgi alanlarınızı belirlemek ve size ilgili reklamlar göstermek için kullanılır. Ayrıca, bir reklamı kaç kez gördüğünüzü sınırlamak ve reklam kampanyalarının etkinliğini ölçmek için de kullanılırlar.
              </p>

              <h2 className="font-josefin text-black mt-12 mb-6"
                  style={{ fontSize: '2rem', fontWeight: 300 }}>
                4. Üçüncü Taraf Çerezleri
              </h2>
              <p className="mb-6 text-gray-700">
                Web sitemizde aşağıdaki üçüncü taraf hizmetleri kullanılmaktadır ve bu hizmetler kendi çerezlerini yerleştirebilir:
              </p>

              <h3 className="font-josefin text-black mt-8 mb-4"
                  style={{ fontSize: '1.5rem', fontWeight: 300 }}>
                Google Analytics
              </h3>
              <p className="mb-6 text-gray-700">
                Web sitesi trafiğini analiz etmek ve ziyaretçi davranışlarını anlamak için Google Analytics kullanıyoruz. Google Analytics, IP adresiniz dahil olmak üzere çeşitli bilgileri toplar, ancak bu bilgiler anonimleştirilmiştir.
              </p>
              <p className="mb-6 text-gray-700">
                Google\'ın gizlilik politikası hakkında daha fazla bilgi için:
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">
                  https://policies.google.com/privacy
                </a>
              </p>

              <h3 className="font-josefin text-black mt-8 mb-4"
                  style={{ fontSize: '1.5rem', fontWeight: 300 }}>
                Sosyal Medya Eklentileri
              </h3>
              <p className="mb-6 text-gray-700">
                LinkedIn, Instagram ve diğer sosyal medya platformlarının paylaşım butonları ve eklentileri, bu platformların çerezlerini yerleştirebilir. Bu çerezlerin kullanımı ilgili sosyal medya platformunun gizlilik politikasına tabidir.
              </p>

              <h2 className="font-josefin text-black mt-12 mb-6"
                  style={{ fontSize: '2rem', fontWeight: 300 }}>
                5. Çerez Süresi
              </h2>
              <p className="mb-6 text-gray-700">
                Çerezler, süreleri bakımından iki gruba ayrılır:
              </p>

              <h3 className="font-josefin text-black mt-8 mb-4"
                  style={{ fontSize: '1.5rem', fontWeight: 300 }}>
                Oturum Çerezleri
              </h3>
              <p className="mb-6 text-gray-700">
                Bu çerezler geçicidir ve tarayıcınızı kapattığınızda silinirler. Genellikle web sitesinde gezinirken girdiğiniz bilgileri saklamak için kullanılırlar.
              </p>

              <h3 className="font-josefin text-black mt-8 mb-4"
                  style={{ fontSize: '1.5rem', fontWeight: 300 }}>
                Kalıcı Çerezler
              </h3>
              <p className="mb-6 text-gray-700">
                Bu çerezler cihazınızda belirli bir süre (birkaç saat, gün veya yıl) saklanır. Web sitesini her ziyaret ettiğinizde tercihlerinizi hatırlamak için kullanılırlar.
              </p>

              <h2 className="font-josefin text-black mt-12 mb-6"
                  style={{ fontSize: '2rem', fontWeight: 300 }}>
                6. Çerezleri Nasıl Kontrol Edebilirsiniz?
              </h2>
              <p className="mb-6 text-gray-700">
                Çerezleri kabul etmek veya reddetmek tamamen sizin kontrolünüzdedir. Çerezleri aşağıdaki yöntemlerle yönetebilirsiniz:
              </p>

              <h3 className="font-josefin text-black mt-8 mb-4"
                  style={{ fontSize: '1.5rem', fontWeight: 300 }}>
                Tarayıcı Ayarları
              </h3>
              <p className="mb-6 text-gray-700">
                Tarayıcınızın ayarlarını değiştirerek çerezleri engelleyebilir veya silebilirsiniz. Her tarayıcının çerez yönetimi farklıdır. Detaylı bilgi için tarayıcınızın yardım menüsüne bakabilirsiniz:
              </p>
              <ul className="mb-6 text-gray-700 list-disc pl-6">
                <li>
                  <strong>Chrome:</strong>
                  <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">
                    chrome://settings/cookies
                  </a>
                </li>
                <li>
                  <strong>Firefox:</strong>
                  <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">
                    about:preferences#privacy
                  </a>
                </li>
                <li>
                  <strong>Safari:</strong> Tercihler → Gizlilik
                </li>
                <li>
                  <strong>Edge:</strong>
                  <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">
                    edge://settings/privacy
                  </a>
                </li>
              </ul>

              <h3 className="font-josefin text-black mt-8 mb-4"
                  style={{ fontSize: '1.5rem', fontWeight: 300 }}>
                Google Analytics\'i Devre Dışı Bırakma
              </h3>
              <p className="mb-6 text-gray-700">
                Google Analytics tarafından veri toplanmasını istemiyorsanız, Google Analytics Opt-out Browser Add-on\'ı yükleyebilirsiniz:
                <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">
                  https://tools.google.com/dlpage/gaoptout
                </a>
              </p>

              <h2 className="font-josefin text-black mt-12 mb-6"
                  style={{ fontSize: '2rem', fontWeight: 300 }}>
                7. Çerezleri Engellerseniz Ne Olur?
              </h2>
              <p className="mb-6 text-gray-700">
                Çerezleri engellemeyi seçerseniz:
              </p>
              <ul className="mb-6 text-gray-700 list-disc pl-6">
                <li>Web sitesinin bazı özellikleri düzgün çalışmayabilir</li>
                <li>Tercihleriniz kaydedilmeyebilir</li>
                <li>Her ziyaretinizde bazı bilgileri yeniden girmeniz gerekebilir</li>
                <li>Bazı sayfalara erişemeyebilirsiniz</li>
              </ul>

              <h2 className="font-josefin text-black mt-12 mb-6"
                  style={{ fontSize: '2rem', fontWeight: 300 }}>
                8. Çerez Politikası Güncellemeleri
              </h2>
              <p className="mb-6 text-gray-700">
                Bu çerez politikasını zaman zaman güncelleyebiliriz. Önemli değişiklikler yapıldığında web sitemizde bildirimde bulunacağız. En güncel politikayı her zaman bu sayfada bulabilirsiniz.
              </p>

              <h2 className="font-josefin text-black mt-12 mb-6"
                  style={{ fontSize: '2rem', fontWeight: 300 }}>
                9. Daha Fazla Bilgi
              </h2>
              <p className="mb-6 text-gray-700">
                Çerezler hakkında daha fazla bilgi almak için aşağıdaki kaynaklara başvurabilirsiniz:
              </p>
              <ul className="mb-6 text-gray-700 list-disc pl-6">
                <li>
                  <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    www.aboutcookies.org
                  </a>
                </li>
                <li>
                  <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    www.allaboutcookies.org
                  </a>
                </li>
              </ul>

              <h2 className="font-josefin text-black mt-12 mb-6"
                  style={{ fontSize: '2rem', fontWeight: 300 }}>
                10. İletişim
              </h2>
              <p className="mb-6 text-gray-700">
                Çerez politikamız hakkında sorularınız varsa, lütfen bizimle iletişime geçin:
              </p>
              <p className="mb-6 text-gray-700">
                <strong>Dr. Esra Çavuşoğlu, PhD</strong><br />
                E-posta: hello@esracavusoglu.com<br />
                Adres: İstanbul, Türkiye<br />
                Web: www.esracavusoglu.com
              </p>

              <h2 className="font-josefin text-black mt-12 mb-6"
                  style={{ fontSize: '2rem', fontWeight: 300 }}>
                11. Kişisel Verileriniz
              </h2>
              <p className="mb-6 text-gray-700">
                Çerezler aracılığıyla toplanan kişisel verilerinizin işlenmesi hakkında detaylı bilgi için
                <Link href="/gizlilik-politikasi" className="text-blue-600 hover:underline ml-1">
                  Kişisel Veri Politikamızı
                </Link> inceleyebilirsiniz.
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