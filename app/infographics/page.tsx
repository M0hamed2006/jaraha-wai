'use client';

import Link from 'next/link';
import { styles } from '../styles';

export default function Infographics() {
  return (
    <div style={styles.body as any}>
      <nav style={styles.nav as any}>
        <h1 style={styles.navTitle as any}>🌟 جرعة وعي</h1>
        <ul style={{ display: 'flex', gap: '30px', listStyle: 'none', margin: 0, padding: 0 }}>
          <li><Link href="/" style={styles.navLink as any}>الرئيسية</Link></li>
          <li><Link href="/articles" style={styles.navLink as any}>مقالات</Link></li>
          <li><Link href="/infographics" style={styles.navLink as any}>إنفوجرافيك</Link></li>
          <li><Link href="/about" style={styles.navLink as any}>عن الموقع</Link></li>
        </ul>
      </nav>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>
        <h1 style={{ fontSize: '40px', fontWeight: 'bold', color: '#333', textAlign: 'center', marginBottom: '40px' }}>🎨 الإنفوجرافيك</h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} style={{ background: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`, borderRadius: '16px', padding: '40px', color: 'white', textAlign: 'center', minHeight: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h3 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '15px' }}>إنفوجرافيك #{i}</h3>
              <p style={{ margin: 0 }}>محتوى توضيحي بصري</p>
            </div>
          ))}
        </div>
      </main>

      <footer style={styles.footer as any}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#666' }}>© 2024 جرعة وعي 💚</p>
        </div>
      </footer>
    </div>
  );
}
