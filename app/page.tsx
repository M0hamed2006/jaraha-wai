'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { styles } from './styles';

const quotes = [
  "الحياة تحتاج إلى توازن، لا إلى كمال 🌟",
  "تقبل نفسك أولاً، والباقي سيأتي 💚",
  "القلق لن يغير المستقبل، لكنه سيفسد الحاضر ✨",
  "كل خطأ هو درس، وليس فشل 📚",
  "أنت أقوى مما تعتقد 💪",
  "الصبر ليس الانتظار، بل ما تفعله أثناء الانتظار ⏳",
  "لا تقارن نفسك بالآخرين، بل قارن نفسك بمن كنت أمس 🎯",
  "الفشل هو بداية النجاح 🚀",
];

export default function Home() {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const getNewQuote = () => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentQuote(Math.floor(Math.random() * quotes.length));
      setIsLoading(false);
    }, 300);
  };

  return (
    <div style={styles.body as any}>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        nav { animation: slideInDown 0.6s ease; }
        .quote-section { animation: fadeInUp 0.8s ease; }
        .card { animation: fadeInUp 0.8s ease; }
        .card:hover { 
          transform: translateY(-20px) scale(1.05);
          box-shadow: 0 30px 80px rgba(102, 126, 234, 0.3) !important;
        }
        button:hover { 
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 20px 50px rgba(102, 126, 234, 0.5) !important;
        }
        button:active { transform: scale(0.95); }
        a { transition: all 0.3s ease; }
        a:hover { color: #667eea !important; }
        h1:hover { animation: float 2s ease-in-out infinite; }
      `}</style>

      {/* Navigation */}
      <nav style={styles.nav as any}>
        <h1 style={styles.navTitle as any}>🌟 جرعة وعي</h1>
        <ul style={{ display: 'flex', gap: '30px', listStyle: 'none', margin: 0, padding: 0 }}>
          <li><Link href="/" style={{ ...styles.navLink as any, color: '#667eea', fontWeight: '800' }}>الرئيسية</Link></li>
          <li><Link href="/articles" style={styles.navLink as any} onMouseOver={(e) => e.currentTarget.style.background = 'rgba(102, 126, 234, 0.1)'} onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}>مقالات</Link></li>
          <li><Link href="/infographics" style={styles.navLink as any} onMouseOver={(e) => e.currentTarget.style.background = 'rgba(102, 126, 234, 0.1)'} onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}>إنفوجرافيك</Link></li>
          <li><Link href="/about" style={styles.navLink as any} onMouseOver={(e) => e.currentTarget.style.background = 'rgba(102, 126, 234, 0.1)'} onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}>عن الموقع</Link></li>
        </ul>
      </nav>

      {/* Main Content */}
      <main style={{ maxWidth: '1400px', margin: '0 auto', padding: '80px 20px' }}>
        {/* Quote Section */}
        <section className="quote-section" style={styles.quoteSection as any}>
          <h2 style={styles.quoteTitle as any}>💡 اقتباس اليوم</h2>
          <p style={styles.quoteText as any} key={currentQuote}>{quotes[currentQuote]}</p>
          <button 
            style={styles.button as any}
            onClick={getNewQuote}
            disabled={isLoading}
            onMouseOver={(e) => !isLoading && (e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'translateY(0) scale(1)')}
          >
            {isLoading ? 'جاري التحميل...' : 'اقتباس جديد ✨'}
          </button>
          <p style={{ marginTop: '30px', fontSize: '14px', color: '#999', fontWeight: '600' }}>
            ({currentQuote + 1} من {quotes.length})
          </p>
        </section>

        {/* Features Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px', marginBottom: '80px' }}>
          <Link href="/articles" style={{ textDecoration: 'none' }}>
            <div className="card" style={styles.card as any}>
              <div style={{ fontSize: '60px', marginBottom: '20px' }}>📖</div>
              <h3 style={styles.cardTitle as any}>مقالات</h3>
              <p style={{ color: '#666', lineHeight: '1.8', margin: 0, fontSize: '16px' }}>مقالات متخصصة في علم النفس والتطوير الذاتي</p>
            </div>
          </Link>

          <Link href="/infographics" style={{ textDecoration: 'none' }}>
            <div className="card" style={styles.card as any}>
              <div style={{ fontSize: '60px', marginBottom: '20px' }}>🎨</div>
              <h3 style={styles.cardTitle as any}>إنفوجرافيك</h3>
              <p style={{ color: '#666', lineHeight: '1.8', margin: 0, fontSize: '16px' }}>صور توضيحية بصرية جذابة</p>
            </div>
          </Link>

          <Link href="/about" style={{ textDecoration: 'none' }}>
            <div className="card" style={styles.card as any}>
              <div style={{ fontSize: '60px', marginBottom: '20px' }}>✨</div>
              <h3 style={styles.cardTitle as any}>محفزات يومية</h3>
              <p style={{ color: '#666', lineHeight: '1.8', margin: 0, fontSize: '16px' }}>تحفيز مستمر لتحسين حياتك</p>
            </div>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer style={styles.footer as any}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '50px', marginBottom: '50px' }}>
          <div>
            <h3 style={{ fontWeight: '800', fontSize: '20px', color: '#333', marginBottom: '20px' }}>عن الموقع</h3>
            <p style={{ color: '#666', lineHeight: '1.8', fontSize: '16px' }}>موقع متخصص في التوعية النفسية وتطوير الذات بطريقة مبسطة</p>
          </div>
          <div>
            <h3 style={{ fontWeight: '800', fontSize: '20px', color: '#333', marginBottom: '20px' }}>الروابط</h3>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              <li style={{ marginBottom: '12px' }}><Link href="/" style={{ color: '#666', textDecoration: 'none', fontWeight: '600', fontSize: '16px' }}>الرئيسية</Link></li>
              <li style={{ marginBottom: '12px' }}><Link href="/articles" style={{ color: '#666', textDecoration: 'none', fontWeight: '600', fontSize: '16px' }}>المقالات</Link></li>
              <li><Link href="/about" style={{ color: '#666', textDecoration: 'none', fontWeight: '600', fontSize: '16px' }}>عن الموقع</Link></li>
            </ul>
          </div>
          <div>
            <h3 style={{ fontWeight: '800', fontSize: '20px', color: '#333', marginBottom: '20px' }}>تابعنا</h3>
            <div style={{ display: 'flex', gap: '20px' }}>
              <a href="#" style={{ fontSize: '32px', transition: 'transform 0.3s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.3) rotate(10deg)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>📘</a>
              <a href="#" style={{ fontSize: '32px', transition: 'transform 0.3s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.3) rotate(-10deg)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>🐦</a>
              <a href="#" style={{ fontSize: '32px', transition: 'transform 0.3s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.3) rotate(10deg)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>📷</a>
            </div>
          </div>
        </div>
        <div style={{ borderTop: '2px solid rgba(102, 126, 234, 0.1)', paddingTop: '30px', textAlign: 'center', color: '#666', fontWeight: '700' }}>
          <p>© 2024 جرعة وعي 💚 | صحتك النفسية أولويتنا</p>
        </div>
      </footer>
    </div>
  );
}
