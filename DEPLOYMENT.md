# 🚀 Deployment Talimatları

## GitHub'a Yükleme

### Adım 1: GitHub'da Repository Oluştur
1. [github.com](https://github.com) adresine gidin
2. Sağ üstteki "+" butonuna tıklayın → "New repository"
3. Repository name: `esracavusoglu`
4. Public seçin
5. **ÖNEMLİ:** "Initialize this repository with:" kısmındaki hiçbir şeyi işaretlemeyin
6. "Create repository" butonuna tıklayın

### Adım 2: Kodu GitHub'a Push Et
Terminal'de aşağıdaki komutları sırayla çalıştırın:

```bash
# GitHub repository'yi ekle (YOUR_USERNAME'i kendi GitHub kullanıcı adınızla değiştirin)
git remote add origin https://github.com/YOUR_USERNAME/esracavusoglu.git

# Kodu push et
git push -u origin main
```

Eğer authentication hatası alırsanız:
1. GitHub Personal Access Token oluşturun: https://github.com/settings/tokens
2. Password sorduğunda token'ı girin

## Vercel'e Deploy Etme

### Opsiyon 1: GitHub Üzerinden (Önerilen)
1. [vercel.com](https://vercel.com) adresine gidin
2. "Import Project" veya "Add New..." → "Project" tıklayın
3. "Import Git Repository" seçin
4. GitHub hesabınızı bağlayın
5. `esracavusoglu` repository'sini seçin
6. Ayarları olduğu gibi bırakın (Next.js otomatik algılanacak)
7. "Deploy" butonuna tıklayın

### Opsiyon 2: Vercel CLI ile
Terminal'de:

```bash
# Vercel CLI'yi yükle
npm i -g vercel

# Deploy et
vercel

# Sorulan sorulara cevaplar:
# ? Set up and deploy "~/WebstormProjects/esracavusoglu"? [Y/n] → Y
# ? Which scope do you want to deploy to? → Kendi hesabınızı seçin
# ? Link to existing project? [y/N] → N
# ? What's your project's name? → esracavusoglu
# ? In which directory is your code located? → ./
# ? Want to modify these settings? [y/N] → N
```

## Netlify'e Deploy Etme (Alternatif)

1. [app.netlify.com](https://app.netlify.com) adresine gidin
2. "Add new site" → "Import an existing project"
3. GitHub'ı bağlayın
4. `esracavusoglu` repository'sini seçin
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. "Deploy site" tıklayın

## 🎉 Tamamlandı!

Deploy işlemi tamamlandıktan sonra sitenize şu adresten erişebilirsiniz:
- Vercel: `https://esracavusoglu.vercel.app`
- Netlify: `https://esracavusoglu.netlify.app`

## Özel Domain Bağlama

Vercel veya Netlify dashboard'undan:
1. Settings → Domains
2. Add domain
3. `esracavusoglu.com` girin
4. DNS ayarlarını yapın

---

**Not:** Proje tamamen hazır ve production-ready durumda. Sadece yukarıdaki adımları takip edin.