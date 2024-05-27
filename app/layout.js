import '@styles/globals.css'
import Provider from '@components/Provider';
import Navbar from '@components/Navbar';



export const metadata = {
  title: "Automate Blogs",
  description: "Automate Blog Posts with the power of AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <main className='app'>
            <Navbar/>
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
