import type { Metadata } from 'next';
import '@/styles/reset.css';

export const metadata: Metadata = {
  title: 'Next Movie App',
  description: 'nomadcoder next movie app clone coding',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang='ko'>
      <head>
        <link
          rel='stylesheet'
          as='style'
          crossOrigin=''
          href='https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/variable/pretendardvariable-dynamic-subset.css'
        />
      </head>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
