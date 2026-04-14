'use client';

import Link from 'next/link';
import { styles } from '../styles';

export default function Articles() {
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
        <h1 style={{ fontSize: '40px', fontWeight: 'bold', color: '#333', textAlign: 'center', marginBottom: '40px' }}>📖 المقالات</h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} style={styles.card as any}>
              <h3 style={styles.cardTitle as any}>مقالة #{i}</h3>
              <p style={{ color: '#666', lineHeight: '1.6', margin: 0 }}>محتوى مقالة توعوية في مجال الصحة النفسية</p>
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
