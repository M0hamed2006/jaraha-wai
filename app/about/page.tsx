'use client';

import Link from 'next/link';
import { styles } from '../styles';

export default function About() {
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
        <div style={{ background: '#fff', borderRadius: '16px', padding: '60px', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}>
          <h1 style={{ fontSize: '40px', fontWeight: 'bold', color: '#333', marginBottom: '30px' }}>ℹ️ عن الموقع</h1>
          <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.8', marginBottom: '20px' }}>
            مرحباً بك في جرعة وعي، موقع متخصص في نشر الوعي النفسي وتطوير الذات بطريقة مبسطة وسهلة الفهم.
          </p>
          <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.8' }}>
            نؤمن أن الصحة النفسية مهمة مثل الصحة الجسدية، وأن فهم أنفسنا هو أول خطوة نحو حياة أفضل.
          </p>
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
