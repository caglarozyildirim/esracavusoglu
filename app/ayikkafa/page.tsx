'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function AyikKafaPage() {
  const episodes = [
    {
      id: 1,
      title: 'Nitrik Oksit Seksi Artırır Mı?',
      guest: 'Dr. Nathan Bryan',
      category: 'longevity',
      duration: '45:30',
      views: '2.1K',
      thumbnail: 'https://www.longevilab.com/wp-content/uploads/2025/09/spoti-tr-1-768x768.jpg',
      date: '1 hafta önce',
      youtubeUrl: 'https://www.youtube.com/@ayikkafa',
      episodeNumber: '#078',
      spotifyUrl: 'https://open.spotify.com/show/0ohFTLbuDEdh5biVKAxQQJ',
      appleUrl: 'https://podcasts.apple.com/us/podcast/ayik-kafa/id1735687719',
      longevilabUrl: 'https://www.longevilab.com/nitrik-oksit-seksi-artirir-mi'
    },
    {
      id: 2,
      title: 'Menopozda Kadınlar Testosteron Kullanmalı Mı?',
      guest: 'Dr. Rebecca Glaser',
      category: 'tip',
      duration: '52:15',
      views: '1.8K',
      thumbnail: 'https://www.longevilab.com/wp-content/uploads/2025/09/spoti-kapak-768x768.jpg',
      date: '2 hafta önce',
      youtubeUrl: 'https://www.youtube.com/@ayikkafa',
      episodeNumber: '#077',
      spotifyUrl: 'https://open.spotify.com/show/0ohFTLbuDEdh5biVKAxQQJ',
      appleUrl: 'https://podcasts.apple.com/us/podcast/ayik-kafa/id1735687719',
      longevilabUrl: 'https://www.longevilab.com/menopozda-kadinlar-testosteron-kullanmali-mi'
    },
    {
      id: 3,
      title: 'Yaşlanma Durduruldu',
      guest: 'Dr. David Sinclair',
      category: 'longevity',
      duration: '1:05:42',
      views: '3.8K',
      thumbnail: 'https://www.longevilab.com/wp-content/uploads/2025/09/spoti-tr-768x768.jpg',
      date: '3 hafta önce',
      youtubeUrl: 'https://www.youtube.com/@ayikkafa',
      episodeNumber: '#076',
      spotifyUrl: 'https://open.spotify.com/show/0ohFTLbuDEdh5biVKAxQQJ',
      appleUrl: 'https://podcasts.apple.com/us/podcast/ayik-kafa/id1735687719',
      longevilabUrl: 'https://www.longevilab.com/yaslanma-durduruldu'
    },
    {
      id: 4,
      title: 'Yaşlanmanın Anahtarı Telomerler',
      guest: 'Dr. Elizabeth Blackburn',
      category: 'longevity',
      duration: '48:20',
      views: '2.5K',
      thumbnail: 'https://www.longevilab.com/wp-content/uploads/2025/08/spoti-tr-768x768.jpg',
      date: '1 ay önce',
      youtubeUrl: 'https://www.youtube.com/@ayikkafa',
      episodeNumber: '#075',
      spotifyUrl: 'https://open.spotify.com/show/0ohFTLbuDEdh5biVKAxQQJ',
      appleUrl: 'https://podcasts.apple.com/us/podcast/ayik-kafa/id1735687719',
      longevilabUrl: 'https://www.longevilab.com/yaslanmanin-anahtari-telomerler'
    },
    {
      id: 5,
      title: 'Kolesterol Hakkındaki Gerçekler',
      guest: 'Dr. Peter Attia',
      category: 'tip',
      duration: '55:10',
      views: '4.2K',
      thumbnail: 'https://www.longevilab.com/wp-content/uploads/2025/07/spoti-tr-1-768x768.jpg',
      date: '1.5 ay önce',
      youtubeUrl: 'https://www.youtube.com/@ayikkafa',
      episodeNumber: '#074',
      spotifyUrl: 'https://open.spotify.com/show/0ohFTLbuDEdh5biVKAxQQJ',
      appleUrl: 'https://podcasts.apple.com/us/podcast/ayik-kafa/id1735687719',
      longevilabUrl: 'https://www.longevilab.com/kolesterol-hakkindaki-gercekler'
    },
    {
      id: 6,
      title: 'Kolesterol Hakkındaki Gerçekler',
      guest: 'Dr. Thomas Dayspring',
      category: 'tip',
      duration: '49:35',
      views: '3.1K',
      thumbnail: 'https://www.longevilab.com/wp-content/uploads/2025/07/spoti-tr-768x768.jpg',
      date: '2 ay önce',
      youtubeUrl: 'https://www.youtube.com/@ayikkafa',
      episodeNumber: '#073',
      spotifyUrl: 'https://open.spotify.com/show/0ohFTLbuDEdh5biVKAxQQJ',
      appleUrl: 'https://podcasts.apple.com/us/podcast/ayik-kafa/id1735687719',
      longevilabUrl: 'https://www.longevilab.com/kolesterol-hakkindaki-gercekler'
    },
    {
      id: 7,
      title: 'Tiroidini Nasıl İyileştirirsin',
      guest: 'Dr. Amy Myers',
      category: 'tip',
      duration: '42:18',
      views: '2.8K',
      thumbnail: 'https://www.longevilab.com/wp-content/uploads/2025/07/spoti-tr-kapak-768x768.jpg',
      date: '2 ay önce',
      youtubeUrl: 'https://www.youtube.com/@ayikkafa',
      episodeNumber: '#072',
      spotifyUrl: 'https://open.spotify.com/show/0ohFTLbuDEdh5biVKAxQQJ',
      appleUrl: 'https://podcasts.apple.com/us/podcast/ayik-kafa/id1735687719',
      longevilabUrl: 'https://www.longevilab.com/tiroidini-nasil-iyilestirirsin'
    },
    {
      id: 8,
      title: 'Yaşlanmayı Tersine Çeviren Antrenmanlar',
      guest: 'Dr. Stuart McGill',
      category: 'biohacking',
      duration: '1:01:45',
      views: '5.3K',
      thumbnail: 'https://www.longevilab.com/wp-content/uploads/2025/07/spoti-tr-1200x1200.jpg',
      date: '2.5 ay önce',
      youtubeUrl: 'https://www.youtube.com/@ayikkafa',
      episodeNumber: '#071',
      spotifyUrl: 'https://open.spotify.com/show/0ohFTLbuDEdh5biVKAxQQJ',
      appleUrl: 'https://podcasts.apple.com/us/podcast/ayik-kafa/id1735687719',
      longevilabUrl: 'https://www.longevilab.com/yaslanmayi-tersine-ceviren-antrenmanlar'
    },
    {
      id: 9,
      title: 'Gen Terapisi Sağlığın Geleceği',
      guest: 'Dr. George Church',
      category: 'longevity',
      duration: '57:22',
      views: '4.7K',
      thumbnail: 'https://www.longevilab.com/wp-content/uploads/2025/06/spoti-tr-2-768x768.jpg',
      date: '3 ay önce',
      youtubeUrl: 'https://www.youtube.com/@ayikkafa',
      episodeNumber: '#070',
      spotifyUrl: 'https://open.spotify.com/show/0ohFTLbuDEdh5biVKAxQQJ',
      appleUrl: 'https://podcasts.apple.com/us/podcast/ayik-kafa/id1735687719',
      longevilabUrl: 'https://www.longevilab.com/gen-terapisi-sagligin-gelecegi'
    }
  ];


  return (
    <>
      <Header />

      {/* Hero Section with Marquee Effect */}
      <section className="relative bg-black text-white overflow-hidden" style={{ paddingTop: '72px' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent" />
        </div>

        {/* Marquee Text Effect */}
        <div className="relative py-16">
          <div className="overflow-hidden whitespace-nowrap">
            <div className="inline-block animate-marquee">
              <span className="font-josefin text-white/10"
                    style={{ fontSize: 'clamp(4rem, 8vw, 8rem)', fontWeight: 100 }}>
                AYIK KAFA • PODCAST • AYIK KAFA • PODCAST •
              </span>
              <span className="font-josefin text-white/10"
                    style={{ fontSize: 'clamp(4rem, 8vw, 8rem)', fontWeight: 100 }}>
                AYIK KAFA • PODCAST • AYIK KAFA • PODCAST •
              </span>
            </div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="font-josefin text-white mb-4"
                  style={{
                    fontSize: 'clamp(3rem, 6vw, 5rem)',
                    fontWeight: 200,
                    letterSpacing: '-0.02em'
                  }}>
                Ayık Kafa
              </h1>
              <p className="font-josefin text-white/80 max-w-2xl mx-auto"
                 style={{ fontSize: '1.25rem', lineHeight: 1.6, fontWeight: 200 }}>
                Bağımlılıktan longevity'e, bilimden yaşama dair derin sohbetler
              </p>
            </div>
          </div>
        </div>

        {/* Platform Links */}
        <div className="relative py-8 border-t border-white/10">
          <div className="flex justify-center items-center gap-8 px-4">
            <a href="https://www.youtube.com/@ayikkafa" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span className="font-josefin text-sm uppercase tracking-wider">YouTube</span>
            </a>

            <a href="https://www.longevilab.com/k/izle" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
              <span className="font-josefin text-sm uppercase tracking-wider">Longevilab</span>
            </a>

            <a href="https://open.spotify.com/show/0ohFTLbuDEdh5biVKAxQQJ" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
              <span className="font-josefin text-sm uppercase tracking-wider">Spotify</span>
            </a>
          </div>
        </div>
      </section>

      {/* Episodes Grid */}
      <section className="bg-gray-50" style={{ padding: '4vmax 0' }}>
        <div className="w-full px-[4vw]">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {episodes.map((episode) => (
                <div key={episode.id} className="group">
                  <div className="relative">
                    <a href={episode.longevilabUrl} target="_blank" rel="noopener noreferrer" className="block">
                      <div className="relative aspect-square mb-4 overflow-hidden rounded-lg bg-gray-100">
                        <Image
                          src={episode.thumbnail}
                          alt={episode.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          unoptimized
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="flex justify-between items-center">
                              <div className="text-white">
                                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M10 8.64L15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z"/>
                                </svg>
                              </div>
                              <div className="bg-black/80 backdrop-blur px-2 py-1 rounded">
                                <span className="font-josefin text-xs text-white">{episode.duration}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Episode Number Badge */}
                        {episode.episodeNumber && (
                          <div className="absolute top-4 left-4">
                            <span className="bg-red-600 text-white px-3 py-1 rounded-full font-josefin text-xs font-medium">
                              {episode.episodeNumber}
                            </span>
                          </div>
                        )}
                      </div>
                    </a>

                    {/* Platform Links */}
                    <div className="flex gap-3 mb-3">
                      <a href={episode.spotifyUrl} target="_blank" rel="noopener noreferrer"
                         className="flex items-center gap-1 text-gray-500 hover:text-green-600 transition-colors">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                        </svg>
                        <span className="font-josefin text-xs">Spotify</span>
                      </a>
                      <a href={episode.youtubeUrl} target="_blank" rel="noopener noreferrer"
                         className="flex items-center gap-1 text-gray-500 hover:text-red-600 transition-colors">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                        <span className="font-josefin text-xs">YouTube</span>
                      </a>
                      <a href={episode.appleUrl} target="_blank" rel="noopener noreferrer"
                         className="flex items-center gap-1 text-gray-500 hover:text-gray-700 transition-colors">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8.813 19.813a10.363 10.363 0 0 0 6.375 0l-3.188-9.384-3.187 9.384zm-1.332-.48a10.363 10.363 0 0 0 4.5-4.5l-6.293-1.016 1.793 5.516zm8.038-4.5a10.363 10.363 0 0 0 4.5 4.5l1.793-5.516-6.293 1.016zm4.5-6.02a10.363 10.363 0 0 0-4.5-4.5l1.016 6.293 5.516-1.793-2.032 0zm-4.5-4.5a10.363 10.363 0 0 0-6.375 0l3.188 9.384 3.187-9.384zm-8.038 0a10.363 10.363 0 0 0-4.5 4.5l6.293 1.016-1.793-5.516zm-4.5 6.02a10.363 10.363 0 0 0 0 6.375l9.384-3.188-9.384-3.187zm0 8.038a10.363 10.363 0 0 0 4.5 4.5l-1.016-6.293-5.516 1.793h2.032zM12 2.25A9.75 9.75 0 1 0 21.75 12 9.76 9.76 0 0 0 12 2.25z"/>
                        </svg>
                        <span className="font-josefin text-xs">Apple</span>
                      </a>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-3 text-gray-500">
                        <span className="font-josefin text-xs">{episode.date}</span>
                        <span className="text-xs">•</span>
                        <span className="font-josefin text-xs">{episode.views} izlenme</span>
                      </div>

                      <h3 className="font-josefin text-black group-hover:text-gray-600 transition-colors"
                          style={{ fontSize: '1.25rem', fontWeight: 300, lineHeight: 1.3 }}>
                        {episode.title}
                      </h3>

                      <p className="font-josefin text-gray-600" style={{ fontSize: '0.95rem' }}>
                        Konuk: {episode.guest}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black" style={{ padding: '4vmax 0' }}>
        <div className="w-full px-[4vw]">
          <div className="max-w-[1400px] mx-auto text-center">
            <h2 className="font-josefin text-white mb-6"
                style={{ fontSize: 'clamp(2.2rem, 4.4vw, 3.3rem)', fontWeight: 200, letterSpacing: '-0.02em' }}>
              Gelin Konuşalım
            </h2>
            <p className="font-josefin text-white/80 mb-8 max-w-[700px] mx-auto"
               style={{ fontSize: '1.25rem', lineHeight: 1.7, fontWeight: 200 }}>
              Projeleriniz, iş birlikleriniz ve danışmanlık talepleriniz için benimle iletişime geçin.
            </p>
            <Link href="/iletisim"
                  className="inline-block font-josefin text-white hover:opacity-90 transition-opacity"
                  style={{
                    fontSize: '0.95rem',
                    fontWeight: 400,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    backgroundColor: '#E63946',
                    padding: '16px 40px',
                    borderRadius: '4px'
                  }}>
              İLETİŞİME GEÇ
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </>
  );
}