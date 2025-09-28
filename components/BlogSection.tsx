import Link from 'next/link';
import Image from 'next/image';

export default function BlogSection() {
  const episodes = [
    {
      title: 'Bağımlılık Tedavisinde Yeni Yaklaşımlar',
      guest: 'Prof. Dr. Mehmet Öz',
      date: '15 Eylül 2025',
      duration: '45 dk',
      category: 'Bağımlılık',
      thumbnail: '/images/_ELD3728ddd.jpg',
      href: '/ayikkafa'
    },
    {
      title: 'NAD+ ve Hücresel Yaşlanma',
      guest: 'Dr. David Sinclair',
      date: '8 Eylül 2025',
      duration: '52 dk',
      category: 'Longevity',
      thumbnail: '/images/_ELD3728ddd.jpg',
      href: '/ayikkafa'
    },
    {
      title: 'Peptid Terapileri ve Performans',
      guest: 'Dr. Peter Attia',
      date: '1 Eylül 2025',
      duration: '38 dk',
      category: 'Biohacking',
      thumbnail: '/images/_ELD3728ddd.jpg',
      href: '/ayikkafa'
    }
  ];

  return (
    <section className="bg-black text-white" style={{ padding: '3.3vmax 0' }}>
      <div className="w-full px-[4vw]">
        <div className="max-w-[1400px] mx-auto">

          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-josefin text-white mb-2"
                style={{
                  fontSize: 'clamp(2.2rem, 3.85vw, 3.3rem)',
                  fontWeight: 200,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2
                }}>
              Ayık Kafa <span style={{ color: '#E63946' }}>Podcast</span>
            </h2>
            <p className="font-josefin text-white/80 max-w-3xl mx-auto mb-8"
               style={{
                 fontSize: '1.375rem',
                 lineHeight: 1.7,
                 fontWeight: 200
               }}>
              Bağımlılıktan longevity'e, bilimden yaşama dair derin sohbetler
            </p>

            {/* Platform Links */}
            <div className="flex justify-center items-center gap-6">
              <a href="https://open.spotify.com/show/ayikkafa" target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
                <span className="font-josefin text-xs uppercase tracking-wider">Spotify</span>
              </a>

              <a href="https://www.youtube.com/@ayikkafa" target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span className="font-josefin text-xs uppercase tracking-wider">YouTube</span>
              </a>

              <a href="#" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.813 19.813a10.363 10.363 0 0 0 6.375 0l-3.188-9.384-3.187 9.384zm-1.332-.48a10.363 10.363 0 0 0 4.5-4.5l-6.293-1.016 1.793 5.516zm8.038-4.5a10.363 10.363 0 0 0 4.5 4.5l1.793-5.516-6.293 1.016zm4.5-6.02a10.363 10.363 0 0 0-4.5-4.5l1.016 6.293 5.516-1.793-2.032 0zm-4.5-4.5a10.363 10.363 0 0 0-6.375 0l3.188 9.384 3.187-9.384zm-8.038 0a10.363 10.363 0 0 0-4.5 4.5l6.293 1.016-1.793-5.516zm-4.5 6.02a10.363 10.363 0 0 0 0 6.375l9.384-3.188-9.384-3.187zm0 8.038a10.363 10.363 0 0 0 4.5 4.5l-1.016-6.293-5.516 1.793h2.032zM12 2.25A9.75 9.75 0 1 0 21.75 12 9.76 9.76 0 0 0 12 2.25z"/>
                </svg>
                <span className="font-josefin text-xs uppercase tracking-wider">Apple</span>
              </a>
            </div>
          </div>

          {/* Episodes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {episodes.map((episode, index) => (
              <article key={index} className="group cursor-pointer">

                {/* Thumbnail */}
                <div className="relative aspect-square mb-4 overflow-hidden rounded-lg bg-gray-900">
                  <Image
                    src={episode.thumbnail}
                    alt={episode.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-red-600/80 text-white px-2 py-1 rounded text-xs font-josefin uppercase tracking-wider">
                          {episode.category}
                        </span>
                        <span className="bg-white/20 backdrop-blur text-white px-2 py-1 rounded text-xs font-josefin">
                          {episode.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  {/* Date */}
                  <div className="flex items-center gap-2 text-white/60">
                    <span className="font-josefin text-xs">{episode.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-josefin text-white group-hover:text-white/80 transition-colors">
                    <Link href={episode.href}
                          style={{
                            fontSize: '1.375rem',
                            fontWeight: 300,
                            lineHeight: 1.3,
                            letterSpacing: '-0.01em'
                          }}>
                      {episode.title}
                    </Link>
                  </h3>

                  {/* Guest */}
                  <p className="font-josefin text-white/70"
                     style={{
                       fontSize: '0.95rem',
                       fontWeight: 200
                     }}>
                    Konuk: {episode.guest}
                  </p>

                  {/* Play Button */}
                  <div className="pt-2">
                    <Link
                      href={episode.href}
                      className="font-josefin text-white/80 hover:text-white transition-colors inline-flex items-center group/play"
                      style={{
                        fontSize: '0.825rem',
                        fontWeight: 300,
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase'
                      }}
                    >
                      <div className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center mr-3 group-hover/play:border-white transition-colors">
                        <svg className="w-3 h-3 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                      Dinle
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <Link
              href="/ayikkafa"
              className="inline-block font-josefin text-white hover:text-white/60 transition-all"
              style={{
                fontSize: '0.825rem',
                fontWeight: 300,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                borderBottom: '1px solid #fff',
                paddingBottom: '4px'
              }}
            >
              TÜM BÖLÜMLER
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}