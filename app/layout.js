import MainHeader from '@/components/main-header/MainHeader';
import './globals.css';

export const metadata = {
  title: 'FoodStore',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader/>
        {children}
      </body>
    </html>
  );
}