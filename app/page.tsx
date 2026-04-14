'use client';

import { useState } from 'react';
import Link from 'next/link';
import { styles } from './styles';

const quotes = [
  "الحياة تحتاج إلى توازن، لا إلى كمال",
  "تقبل نفسك أولاً، والباقي سيأتي",
  "القلق لن يغير المستقبل، لكنه سيفسد الحاضر",
  "كل خطأ هو درس، وليس فشل",
  "أنت أقوى مما تعتقد",
  "الصبر ليس الانتظار، بل ما تفعله أثناء الانتظار",
  "لا تقارن نفسك بالآخرين، بل قارن نفسك بمن كنت أمس",
  "الفشل هو بداية النجاح",
];

export default function Home() {
  const [currentQuote, setCurrentQuote] = useState(0);

  return (
    <div style={styles.body as any}>
      {/* Navigation */}
      <nav style={styles.nav as any}>
        <h1 style={styles.navTitle as any}>🌟 جرعة وعي</h1>
        <ul style={{ display: 'flex', gap: '30px', listStyle: 'none', margin: 0, padding: 0 }}>
          <li><Link href="/" style={styles.navLink as any}>الرئيسية</Link></li>
          <li><Link href="/articles" style={styles.navLink as any}>مقالات</Link></li>
          <li><Link href="/infographics" style={styles.navLink as any}>إنفوجرافيك</Link></li>
          <li><Link href="/about" style={styles.navLink as any}>عن الموقع</Link></li>
        </ul>
      </nav>

      {/* Main Content */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>
        {/* Quote Section */}
        <section style={styles.quoteSection as any}>
          <h2 style={styles.quoteTitle as any}>💡 اقتباس اليوم</h2>
          <p style={styles.quoteText as any}>"{quotes[currentQuote]}"</p>
          <button 
            style={styles.button as any}
            onClick={() => setCurrentQuote(Math.floor(Math.random() * quotes.length))}
            onMouseOver={(e) => { e.currentTarget.style.background = '#5568d3'; e.currentTarget.style.transform = 'scale(1.05)'; }}
            onMouseOut={(e) => { e.currentTarget.style.background = '#667eea'; e.currentTarget.style.transform = 'scale(1)'; }}
          >
            اقتباس جديد ✨
          </button>
        </section>

        {/* Features Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          <Link href="/articles" style={{ textDecoration: 'none' }}>
            <div style={styles.card as any}
              onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.15)'; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.1)'; }}
            >
              <h3 style={styles.cardTitle as any}>📖 مقالات</h3>
              <p style={{ color: '#666', lineHeight: '1.6', margin: 0 }}>اقرأ مقالات قصيرة في علم النفس</p>
            </div>
          </Link>

          <Link href="/infographics" style={{ textDecoration: 'none' }}>
            <div style={styles.card as any}
              onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.15)'; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.1)'; }}
            >
              <h3 style={styles.cardTitle as any}>🎨 إنفوجرافيك</h3>
              <p style={{ color: '#666', lineHeight: '1.6', margin: 0 }}>صور وتخطيطات توضيحية</p>
            </div>
          </Link>

          <Link href="/about" style={{ textDecoration: 'none' }}>
            <div style={styles.card as any}
              onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.15)'; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.1)'; }}
            >
              <h3 style={styles.cardTitle as any}>✨ محفزات يومية</h3>
              <p style={{ color: '#666', lineHeight: '1.6', margin: 0 }}>تحفيز مستمر يومي</p>
            </div>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer style={styles.footer as any}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px', marginBottom: '40px' }}>
          <div>
            <h3 style={{ fontWeight: 'bold', fontSize: '18px', color: '#333', marginBottom: '15px' }}>عن الموقع</h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>موقع التوعية النفسية وتطوير الذات</p>
          </div>
          <div>
            <h3 style={{ fontWeight: 'bold', fontSize: '18px', color: '#333', marginBottom: '15px' }}>الروابط</h3>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              <li style={{ marginBottom: '10px' }}><Link href="/" style={{ color: '#666', textDecoration: 'none' }}>الرئيسية</Link></li>
              <li style={{ marginBottom: '10px' }}><Link href="/articles" style={{ color: '#666', textDecoration: 'none' }}>المقالات</Link></li>
              <li><Link href="/about" style={{ color: '#666', textDecoration: 'none' }}>عن الموقع</Link></li>
            </ul>
          </div>
          <div>
            <h3 style={{ fontWeight: 'bold', fontSize: '18px', color: '#333', marginBottom: '15px' }}>تابعنا</h3>
            <div style={{ display: 'flex', gap: '20px' }}>
              <a href="#" style={{ fontSize: '28px' }}>📘</a>
              <a href="#" style={{ fontSize: '28px' }}>🐦</a>
              <a href="#" style={{ fontSize: '28px' }}>📷</a>
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #eee', paddingTop: '30px', textAlign: 'center', color: '#666' }}>
          <p>© 2024 جرعة وعي 💚</p>
        </div>
      </footer>
    </div>
  );
}
