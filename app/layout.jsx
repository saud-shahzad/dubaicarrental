// app/layout.js
import '@/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'تأجير سيارات في دبي - احجز الآن واستمتع بالراحة والمرونة | Company',
  description: 'استأجر سيارة في دبي من أفضل شركات التأجير واستمتع براحة ومرونة لا مثيل لها. اكتشف معالم دبي الشهيرة واستمتع بتجربة قيادة فاخرة وآمنة. احجز الآن واحصل على أفضل العروض!',
  openGraph: {
    title: 'تأجير سيارات في دبي - احجز الآن واستمتع بالراحة والمرونة | Company',
    description: 'استأجر سيارة في دبي من أفضل شركات التأجير واستمتع براحة ومرونة لا مثيل لها.',
    url: 'https://yourdomain.com',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'تأجير سيارات في دبي - احجز الآن واستمتع بالراحة والمرونة | Company',
    description: 'استأجر سيارة في دبي من أفضل شركات التأجير واستمتع براحة ومرونة لا مثيل لها.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="font-sans antialiased bg-white text-gray-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
