'use client';

import Link from 'next/link';

export default function GizlilikPolitikasi() {
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
                1. GİRİŞ
              </h2>

              <h3 className="font-josefin text-black mt-8 mb-4"
                  style={{ fontSize: '1.5rem', fontWeight: 300 }}>
                1.1. Amaç
              </h3>
              <p className="mb-6 text-gray-700">
                Bu Kişisel Veri Saklama ve İmha Politikası ("Politika"), Dr. Esra Çavuşoğlu, PhD tarafından 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK"), 30224 sayılı Resmi Gazete\'de yayımlanan Kişisel Verilerin Silinmesi, Yok Edilmesi veya Anonim Hale Getirilmesi Hakkında Yönetmelik ("Yönetmelik") ve diğer ilgili mevzuat uyarınca yürürlüğe alınmıştır.
              </p>

              <h3 className="font-josefin text-black mt-8 mb-4"
                  style={{ fontSize: '1.5rem', fontWeight: 300 }}>
                1.2. Kapsam
              </h3>
              <p className="mb-6 text-gray-700">
                Bu Politika, Dr. Esra Çavuşoğlu, PhD tarafından otomatik olan ya da olmayan yöntemlerle işlenen kişisel veriler ile ilgili olarak; çalışanlar, çalışan adayları, hizmet sağlayıcılar, ziyaretçiler ve üçüncü kişilerin kişisel verilerinin işlenmesine ilişkindir.
              </p>

              <h3 className="font-josefin text-black mt-8 mb-4"
                  style={{ fontSize: '1.5rem', fontWeight: 300 }}>
                1.3. Kısaltmalar ve Tanımlar
              </h3>
              <div className="mb-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="text-left py-3 px-4 font-josefin" style={{ fontWeight: 300 }}>Terim</th>
                      <th className="text-left py-3 px-4 font-josefin" style={{ fontWeight: 300 }}>Tanım</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4">KVKK</td>
                      <td className="py-3 px-4">6698 Sayılı Kişisel Verilerin Korunması Kanunu</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4">Kişisel Veri</td>
                      <td className="py-3 px-4">Kimliği belirli veya belirlenebilir gerçek kişiye ilişkin her türlü bilgi</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4">Veri Sorumlusu</td>
                      <td className="py-3 px-4">Kişisel verilerin işleme amaçlarını ve vasıtalarını belirleyen, veri kayıt sisteminin kurulmasından ve yönetilmesinden sorumlu olan gerçek veya tüzel kişi</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4">Veri İşleyen</td>
                      <td className="py-3 px-4">Veri sorumlusunun verdiği yetkiye dayanarak onun adına kişisel verileri işleyen gerçek veya tüzel kişi</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4">Açık Rıza</td>
                      <td className="py-3 px-4">Belirli bir konuya ilişkin, bilgilendirilmeye dayanan ve özgür iradeyle açıklanan rıza</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4">İlgili Kişi</td>
                      <td className="py-3 px-4">Kişisel verisi işlenen gerçek kişi</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4">Özel Nitelikli Kişisel Veri</td>
                      <td className="py-3 px-4">Kişilerin ırkı, etnik kökeni, siyasi düşüncesi, felsefi inancı, dini, mezhebi veya diğer inançları, kılık ve kıyafeti, dernek, vakıf ya da sendika üyeliği, sağlığı, cinsel hayatı, ceza mahkûmiyeti ve güvenlik tedbirleriyle ilgili verileri ile biyometrik ve genetik verileri</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="font-josefin text-black mt-12 mb-6"
                  style={{ fontSize: '2rem', fontWeight: 300 }}>
                2. KİŞİSEL VERİLERİN İŞLENMESİ VE KORUNMASI İLKELERİ
              </h2>

              <h3 className="font-josefin text-black mt-8 mb-4"
                  style={{ fontSize: '1.5rem', fontWeight: 300 }}>
                2.1. Kişisel Verilerin İşlenmesinde Genel İlkeler
              </h3>
              <p className="mb-6 text-gray-700">
                Dr. Esra Çavuşoğlu, PhD olarak kişisel verilerin işlenmesinde aşağıdaki ilkelere uygun hareket etmekteyiz:
              </p>
              <ul className="mb-6 text-gray-700 list-disc pl-6">
                <li>Hukuka ve dürüstlük kurallarına uygun olma</li>
                <li>Doğru ve gerektiğinde güncel olma</li>
                <li>Belirli, açık ve meşru amaçlar için işlenme</li>
                <li>İşlendikleri amaçla bağlantılı, sınırlı ve ölçülü olma</li>
                <li>İlgili mevzuatta öngörülen veya işlendikleri amaç için gerekli olan süre kadar muhafaza edilme</li>
              </ul>

              <h3 className="font-josefin text-black mt-8 mb-4"
                  style={{ fontSize: '1.5rem', fontWeight: 300 }}>
                2.2. Kişisel Verilerin İşlenme Şartları
              </h3>
              <p className="mb-6 text-gray-700">
                Kişisel verileriniz aşağıdaki şartlardan bir veya birkaçının varlığı halinde işlenmektedir:
              </p>
              <ul className="mb-6 text-gray-700 list-disc pl-6">
                <li>İlgili kişinin açık rızasının bulunması</li>
                <li>Kanunlarda açıkça öngörülmesi</li>
                <li>Fiili imkânsızlık nedeniyle rızasını açıklayamayacak durumda bulunan veya rızasına hukuki geçerlilik tanınmayan kişinin kendisinin ya da bir başkasının hayatı veya beden bütünlüğünün korunması için zorunlu olması</li>
                <li>Bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması kaydıyla, sözleşmenin taraflarına ait kişisel verilerin işlenmesinin gerekli olması</li>
                <li>Veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi için zorunlu olması</li>
                <li>İlgili kişinin kendisi tarafından alenileştirilmiş olması</li>
                <li>Bir hakkın tesisi, kullanılması veya korunması için veri işlemenin zorunlu olması</li>
                <li>İlgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla, veri sorumlusunun meşru menfaatleri için veri işlenmesinin zorunlu olması</li>
              </ul>

              <h3 className="font-josefin text-black mt-8 mb-4"
                  style={{ fontSize: '1.5rem', fontWeight: 300 }}>
                2.3. Özel Nitelikli Kişisel Verilerin İşlenme Şartları
              </h3>
              <p className="mb-6 text-gray-700">
                Özel nitelikli kişisel veriler, ilgilinin açık rızası olmaksızın işlenemez. Ancak, sağlık ve cinsel hayat dışındaki özel nitelikli kişisel veriler, kanunlarda öngörülen hallerde ilgili kişinin açık rızası aranmaksızın işlenebilir.
              </p>

              <h2 className="font-josefin text-black mt-12 mb-6"
                  style={{ fontSize: '2rem', fontWeight: 300 }}>
                3. SORUMLULUKLAR VE GÖREV DAĞILIMLARI
              </h2>
              <p className="mb-6 text-gray-700">
                Dr. Esra Çavuşoğlu, PhD bünyesinde kişisel verilerin korunması ve işlenmesi ile ilgili görev ve sorumluluklar aşağıdaki gibidir:
              </p>
              <ul className="mb-6 text-gray-700 list-disc pl-6">
                <li><strong>Yönetim:</strong> Politikanın uygulanmasından ve güncellenmesinden sorumludur</li>
                <li><strong>Hukuk Danışmanı:</strong> KVKK uyumluluk süreçlerinin takibi ve hukuki destek sağlanması</li>
                <li><strong>Bilgi İşlem:</strong> Teknik güvenlik tedbirlerinin alınması ve uygulanması</li>
                <li><strong>İnsan Kaynakları:</strong> Çalışan verilerinin yönetimi ve korunması</li>
              </ul>

              <h2 className="font-josefin text-black mt-12 mb-6"
                  style={{ fontSize: '2rem', fontWeight: 300 }}>
                4. KAYIT ORTAMLARI
              </h2>
              <p className="mb-6 text-gray-700">
                Kişisel veriler, aşağıdaki ortamlarda başta KVKK hükümleri olmak üzere ilgili mevzuata uygun olarak güvenli bir şekilde saklanmaktadır:
              </p>

              <h3 className="font-josefin text-black mt-8 mb-4"
                  style={{ fontSize: '1.5rem', fontWeight: 300 }}>
                Elektronik Ortamlar
              </h3>
              <ul className="mb-6 text-gray-700 list-disc pl-6">
                <li>Bilgisayarlar</li>
                <li>Sunucular</li>
                <li>Mobil cihazlar</li>
                <li>Bulut sistemleri</li>
                <li>E-posta sistemleri</li>
                <li>Veri tabanları</li>
              </ul>

              <h3 className="font-josefin text-black mt-8 mb-4"
                  style={{ fontSize: '1.5rem', fontWeight: 300 }}>
                Fiziksel Ortamlar
              </h3>
              <ul className="mb-6 text-gray-700 list-disc pl-6">
                <li>Dosya dolapları</li>
                <li>Arşivler</li>
                <li>Kilitli kasalar</li>
              </ul>

              <h2 className="font-josefin text-black mt-12 mb-6"
                  style={{ fontSize: '2rem', fontWeight: 300 }}>
                5. KİŞİSEL VERİLERİN AKTARILMASI
              </h2>

              <h3 className="font-josefin text-black mt-8 mb-4"
                  style={{ fontSize: '1.5rem', fontWeight: 300 }}>
                5.1. Yurt İçine Aktarım
              </h3>
              <p className="mb-6 text-gray-700">
                Kişisel veriler, KVKK\'nın 8. maddesinde belirtilen şartlar çerçevesinde yurt içinde üçüncü kişilere aktarılabilmektedir. Bu aktarımlar:
              </p>
              <ul className="mb-6 text-gray-700 list-disc pl-6">
                <li>İlgili kişinin açık rızasının bulunması</li>
                <li>KVKK\'nın 5. ve 6. maddelerinde belirtilen şartların bulunması halinde gerçekleştirilir</li>
              </ul>

              <h3 className="font-josefin text-black mt-8 mb-4"
                  style={{ fontSize: '1.5rem', fontWeight: 300 }}>
                5.2. Yurt Dışına Aktarım
              </h3>
              <p className="mb-6 text-gray-700">
                Kişisel veriler, KVKK\'nın 9. maddesinde belirtilen şartlar çerçevesinde yurt dışına aktarılabilmektedir:
              </p>
              <ul className="mb-6 text-gray-700 list-disc pl-6">
                <li>İlgili kişinin açık rızasının bulunması</li>
                <li>Yeterli korumanın bulunduğu ülkelere KVK Kurulu\'nun izniyle</li>
                <li>Yeterli korumanın bulunmadığı ülkelere veri sorumlusunun taahhüt vermesi ve KVK Kurulu\'nun izninin alınması</li>
              </ul>

              <h2 className="font-josefin text-black mt-12 mb-6"
                  style={{ fontSize: '2rem', fontWeight: 300 }}>
                6. KİŞİSEL VERİLERİN İMHA TEKNİKLERİ
              </h2>
              <p className="mb-6 text-gray-700">
                Kişisel veriler, işleme amaçlarının ortadan kalkması halinde aşağıdaki yöntemlerle imha edilir:
              </p>

              <h3 className="font-josefin text-black mt-8 mb-4"
                  style={{ fontSize: '1.5rem', fontWeight: 300 }}>
                6.1. Silme
              </h3>
              <p className="mb-6 text-gray-700">
                Kişisel verilerin silinmesi, verilerin artık erişilemez ve tekrar kullanılamaz hale getirilmesi işlemidir.
              </p>

              <h3 className="font-josefin text-black mt-8 mb-4"
                  style={{ fontSize: '1.5rem', fontWeight: 300 }}>
                6.2. Yok Etme
              </h3>
              <p className="mb-6 text-gray-700">
                Kişisel verilerin yok edilmesi, verilerin hiç kimse tarafından erişilemez ve tekrar kullanılamaz hale getirilmesi işlemidir.
              </p>

              <h3 className="font-josefin text-black mt-8 mb-4"
                  style={{ fontSize: '1.5rem', fontWeight: 300 }}>
                6.3. Anonim Hale Getirme
              </h3>
              <p className="mb-6 text-gray-700">
                Kişisel verilerin anonim hale getirilmesi, verilerin başka verilerle eşleştirilse dahi kimliği belirli veya belirlenebilir bir gerçek kişiyle ilişkilendirilemez hale getirilmesidir.
              </p>

              <h2 className="font-josefin text-black mt-12 mb-6"
                  style={{ fontSize: '2rem', fontWeight: 300 }}>
                7. VERİ SAHİBİNİN HAKLARI
              </h2>
              <p className="mb-6 text-gray-700">
                KVKK\'nın 11. maddesi uyarınca herkes, veri sorumlusuna başvurarak kendisiyle ilgili:
              </p>
              <ul className="mb-6 text-gray-700 list-disc pl-6">
                <li>Kişisel veri işlenip işlenmediğini öğrenme</li>
                <li>Kişisel verileri işlenmişse buna ilişkin bilgi talep etme</li>
                <li>Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                <li>Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme</li>
                <li>Kişisel verilerin eksik veya yanlış işlenmiş olması halinde bunların düzeltilmesini isteme</li>
                <li>Kişisel verilerin silinmesini veya yok edilmesini isteme</li>
                <li>Düzeltme, silme ve yok etme işlemlerinin, kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme</li>
                <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme</li>
                <li>Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması halinde zararın giderilmesini talep etme</li>
              </ul>
              <p className="mb-6 text-gray-700">
                haklarına sahiptir.
              </p>

              <h2 className="font-josefin text-black mt-12 mb-6"
                  style={{ fontSize: '2rem', fontWeight: 300 }}>
                8. TEKNİK VE İDARİ TEDBİRLER
              </h2>

              <h3 className="font-josefin text-black mt-8 mb-4"
                  style={{ fontSize: '1.5rem', fontWeight: 300 }}>
                8.1. Teknik Tedbirler
              </h3>
              <ul className="mb-6 text-gray-700 list-disc pl-6">
                <li>Güvenlik duvarları ve antivirüs sistemleri kullanılması</li>
                <li>Verilere erişim yetkilerinin sınırlandırılması</li>
                <li>Şifreleme yöntemlerinin kullanılması</li>
                <li>SSL sertifikaları ile güvenli bağlantı sağlanması</li>
                <li>Düzenli güvenlik güncellemeleri yapılması</li>
                <li>Log kayıtlarının tutulması</li>
                <li>Yedekleme sistemlerinin kurulması</li>
              </ul>

              <h3 className="font-josefin text-black mt-8 mb-4"
                  style={{ fontSize: '1.5rem', fontWeight: 300 }}>
                8.2. İdari Tedbirler
              </h3>
              <ul className="mb-6 text-gray-700 list-disc pl-6">
                <li>Çalışanların KVKK konusunda eğitilmesi</li>
                <li>Gizlilik taahhütnameleri alınması</li>
                <li>Erişim politikalarının oluşturulması</li>
                <li>Veri işleme envanteri tutulması</li>
                <li>Düzenli denetimler yapılması</li>
                <li>Veri ihlali prosedürlerinin oluşturulması</li>
                <li>İş ortakları ve tedarikçilerle gizlilik sözleşmeleri yapılması</li>
              </ul>

              <h2 className="font-josefin text-black mt-12 mb-6"
                  style={{ fontSize: '2rem', fontWeight: 300 }}>
                9. SAKLAMA VE İMHA SÜRELERİ
              </h2>
              <p className="mb-6 text-gray-700">
                Kişisel veriler, işleme amaçlarının gerektirdiği süre boyunca saklanmaktadır. Saklama süreleri belirlenirken:
              </p>
              <ul className="mb-6 text-gray-700 list-disc pl-6">
                <li>İlgili mevzuatta öngörülen süreler</li>
                <li>Veri işleme amacının gerekli kıldığı süreler</li>
                <li>Zamanaşımı süreleri</li>
                <li>İlgili kişinin menfaatleri</li>
              </ul>
              <p className="mb-6 text-gray-700">
                dikkate alınmaktadır. Bu sürelerin sona ermesinden sonra kişisel veriler, 6 ay içinde silinir, yok edilir veya anonim hale getirilir.
              </p>

              <h2 className="font-josefin text-black mt-12 mb-6"
                  style={{ fontSize: '2rem', fontWeight: 300 }}>
                10. PERİYODİK İMHA SÜRESİ
              </h2>
              <p className="mb-6 text-gray-700">
                Dr. Esra Çavuşoğlu, PhD tarafından periyodik imha süresi 6 ay olarak belirlenmiştir. Her yılın Haziran ve Aralık aylarında periyodik imha işlemi gerçekleştirilir.
              </p>

              <h2 className="font-josefin text-black mt-12 mb-6"
                  style={{ fontSize: '2rem', fontWeight: 300 }}>
                11. POLİTİKA\'NIN YAYINLANMASI VE SAKLANMASI
              </h2>
              <p className="mb-6 text-gray-700">
                Bu Politika, www.esracavusoglu.com web sitesinde yayımlanır ve ilgili kişilerin talebi üzerine elektronik veya fiziki ortamda iletilir.
              </p>

              <h2 className="font-josefin text-black mt-12 mb-6"
                  style={{ fontSize: '2rem', fontWeight: 300 }}>
                12. POLİTİKA\'NIN GÜNCELLEME PERİYODU
              </h2>
              <p className="mb-6 text-gray-700">
                Bu Politika, ihtiyaç duyuldukça ve en az yılda bir kez gözden geçirilerek güncellenir. Politika üzerinde yapılan değişiklikler web sitesinde yayımlanır.
              </p>

              <h2 className="font-josefin text-black mt-12 mb-6"
                  style={{ fontSize: '2rem', fontWeight: 300 }}>
                13. POLİTİKA\'NIN YÜRÜRLÜĞÜ VE YÜRÜRLÜKTEN KALDIRILMASI
              </h2>
              <p className="mb-6 text-gray-700">
                Bu Politika, Dr. Esra Çavuşoğlu, PhD tarafından onaylandığı tarihte yürürlüğe girer. Yürürlükteki Politika\'nın yürürlükten kaldırılmasına karar verilmesi halinde, Politika\'nın ıslak imzalı eski nüshaları imha edilir.
              </p>

              <h2 className="font-josefin text-black mt-12 mb-6"
                  style={{ fontSize: '2rem', fontWeight: 300 }}>
                14. İLETİŞİM
              </h2>
              <p className="mb-6 text-gray-700">
                Kişisel verilerinizin işlenmesi ile ilgili sorularınız için bizimle iletişime geçebilirsiniz:
              </p>
              <p className="mb-6 text-gray-700">
                <strong>Dr. Esra Çavuşoğlu, PhD</strong><br />
                E-posta: hello@esracavusoglu.com<br />
                Adres: İstanbul, Türkiye<br />
                Web: www.esracavusoglu.com
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