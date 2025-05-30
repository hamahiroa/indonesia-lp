"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Mobile navigation
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    const handleHamburgerClick = () => {
      hamburger?.classList.toggle("active");
      navMenu?.classList.toggle("active");
    };

    hamburger?.addEventListener("click", handleHamburgerClick);

    // Close mobile menu when clicking on a link
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger?.classList.remove("active");
        navMenu?.classList.remove("active");
      });
    });

    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    // Add animation classes to elements
    const elementsToAnimate = document.querySelectorAll(".animate-on-scroll");
    elementsToAnimate.forEach((el) => {
      observer.observe(el);
    });

    // Parallax effect
    const parallaxElements = document.querySelectorAll(".parallax");
    const handleParallax = () => {
      parallaxElements.forEach((el) => {
        const speed = el.getAttribute("data-speed") || 0.5;
        const yPos = -(window.pageYOffset * parseFloat(speed.toString()));
        (el as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener("scroll", handleParallax);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleParallax);
      hamburger?.removeEventListener("click", handleHamburgerClick);
    };
  }, []);

  return (
    <>
      {/* Loading Screen */}
      <div className={`loading-screen ${isLoaded ? "loaded" : ""}`}>
        <div className="loading-content">
          <div className="loading-logo">
            <div className="logo-animation">NEXTMAKE</div>
            <div className="logo-subtitle">Indonesia</div>
          </div>
          <div className="loading-progress">
            <div className="progress-bar"></div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <Image
              src="/next.svg"
              alt="NEXTMAKE Indonesia"
              width={120}
              height={40}
              className="logo"
            />
          </div>
          <ul className="nav-menu">
            <li>
              <a href="#home" className="nav-link">
                TOP
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link">
                概要
              </a>
            </li>
            <li>
              <a href="#why" className="nav-link">
                選ばれる理由
              </a>
            </li>
            <li>
              <a href="#pillars" className="nav-link">
                3つの柱
              </a>
            </li>
            <li>
              <a href="#projects" className="nav-link">
                プロジェクト
              </a>
            </li>
            <li>
              <a href="#partners" className="nav-link">
                パートナー
              </a>
            </li>
            <li>
              <a href="#news" className="nav-link">
                ニュース
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link contact-btn">
                お問い合わせ
              </a>
            </li>
          </ul>
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-background">
          <div className="hero-video-overlay"></div>
          <div className="floating-elements">
            <div
              className="floating-element"
              style={{ top: "20%", left: "10%", animationDelay: "0s" }}
            ></div>
            <div
              className="floating-element"
              style={{ top: "60%", right: "15%", animationDelay: "2s" }}
            ></div>
            <div
              className="floating-element"
              style={{ top: "80%", left: "20%", animationDelay: "4s" }}
            ></div>
          </div>
        </div>
        <div
          className="hero-content"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          <div className="container">
            <h1 className="hero-title">
              <span className="title-line">未来をつくる、</span>
              <span className="title-line">インドネシアの</span>
              <span className="title-line">
                ものづくり<span className="highlight">人材</span>へ。
              </span>
            </h1>
            <p className="hero-subtitle">
              未来の製造・技術・ITを支える若者たちの育成と、
              <br />
              地域産業の成長を支援するプロジェクト
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                <span>プロジェクトを見る</span>
                <i className="fas fa-arrow-right"></i>
              </a>
              <a href="#contact" className="btn btn-secondary">
                <span>お問い合わせ</span>
                <i className="fas fa-envelope"></i>
              </a>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">参加学生数</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">パートナー企業</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">95%</span>
                <span className="stat-label">就職成功率</span>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
          <span>Scroll Down</span>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">
              プロジェクト<span className="highlight">概要</span>
            </h2>
            <p className="section-subtitle">
              インドネシアの優秀な学生と日本企業をつなぎ、
              <br />
              次世代のものづくり人材を育成するプラットフォーム
            </p>
          </div>

          <div className="about-content">
            <div className="about-text animate-on-scroll">
              <h3>未来への投資</h3>
              <p>
                NEXTMAKE
                Indonesiaは、インドネシアの大学生が日本の最先端技術と製造業のノウハウを学び、
                実践的なスキルを身につけることができるプログラムです。
              </p>
              <p>
                私たちは、両国の架け橋となり、持続可能な産業発展と人材育成を通じて、
                より良い未来を創造することを目指しています。
              </p>

              <div className="about-features">
                <div className="feature-item">
                  <i className="fas fa-graduation-cap"></i>
                  <span>実践的な教育プログラム</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-handshake"></i>
                  <span>日本企業との直接連携</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-globe-asia"></i>
                  <span>国際的なキャリア支援</span>
                </div>
              </div>
            </div>

            <div className="about-image animate-on-scroll">
              <div className="image-placeholder">
                <i className="fas fa-users"></i>
                <p>
                  学生と企業をつなぐ
                  <br />
                  プラットフォーム
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why" className="section why-choose">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">
              選ばれる<span className="highlight">理由</span>
            </h2>
            <p className="section-subtitle">
              なぜNEXTMAKE Indonesiaが選ばれるのか
            </p>
          </div>

          <div className="why-grid">
            <div className="why-item animate-on-scroll">
              <div className="why-icon">
                <i className="fas fa-star"></i>
              </div>
              <h3>高品質な教育</h3>
              <p>
                日本の製造業で培われた高度な技術と品質管理のノウハウを、実践的なカリキュラムで学習できます。
              </p>
            </div>

            <div className="why-item animate-on-scroll">
              <div className="why-icon">
                <i className="fas fa-network-wired"></i>
              </div>
              <h3>強力なネットワーク</h3>
              <p>
                日本の主要企業との直接的なパートナーシップにより、学生に豊富なキャリア機会を提供します。
              </p>
            </div>

            <div className="why-item animate-on-scroll">
              <div className="why-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>実績ある成果</h3>
              <p>
                95%の就職成功率と、卒業生の高い満足度が示す、確実な成果をお約束します。
              </p>
            </div>

            <div className="why-item animate-on-scroll">
              <div className="why-icon">
                <i className="fas fa-globe"></i>
              </div>
              <h3>国際的視野</h3>
              <p>
                グローバルな視点でのものづくりを学び、国際的に活躍できる人材を育成します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section id="pillars" className="section pillars">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">
              3つの<span className="highlight">柱</span>
            </h2>
            <p className="section-subtitle">
              NEXTMAKE Indonesiaを支える3つの重要な要素
            </p>
          </div>

          <div className="pillars-grid">
            <div className="pillar animate-on-scroll">
              <div className="pillar-number">01</div>
              <h3>教育プログラム</h3>
              <p>
                最新の製造技術、品質管理、プロジェクト管理などの実践的スキルを習得できる包括的な教育プログラム。
              </p>
              <ul>
                <li>製造技術の基礎から応用まで</li>
                <li>品質管理システムの理解</li>
                <li>プロジェクト管理手法</li>
                <li>日本語・ビジネスマナー研修</li>
              </ul>
            </div>

            <div className="pillar animate-on-scroll">
              <div className="pillar-number">02</div>
              <h3>企業連携</h3>
              <p>
                日本の優良企業との直接的なパートナーシップにより、実際の業務体験とキャリア機会を提供。
              </p>
              <ul>
                <li>インターンシップ機会</li>
                <li>メンターシップ制度</li>
                <li>就職支援プログラム</li>
                <li>継続的なキャリアサポート</li>
              </ul>
            </div>

            <div className="pillar animate-on-scroll">
              <div className="pillar-number">03</div>
              <h3>地域貢献</h3>
              <p>
                学んだ知識とスキルを活用して、インドネシアの地域産業の発展に貢献する仕組みを構築。
              </p>
              <ul>
                <li>地域企業への技術移転</li>
                <li>起業支援プログラム</li>
                <li>コミュニティ開発プロジェクト</li>
                <li>持続可能な産業発展</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">
              進行中<span className="highlight">プロジェクト</span>
            </h2>
            <p className="section-subtitle">
              現在実施中の主要プロジェクトをご紹介
            </p>
          </div>

          <div className="projects-grid">
            <div className="project-card animate-on-scroll">
              <div className="project-image">
                <div className="image-placeholder">
                  <i className="fas fa-cogs"></i>
                </div>
              </div>
              <div className="project-content">
                <h3>製造技術研修プログラム</h3>
                <p>
                  日本の最先端製造技術を学ぶ6ヶ月間の集中研修プログラム。理論と実践を組み合わせた包括的なカリキュラム。
                </p>
                <div className="project-meta">
                  <span className="project-status">進行中</span>
                  <span className="project-participants">参加者: 150名</span>
                </div>
              </div>
            </div>

            <div className="project-card animate-on-scroll">
              <div className="project-image">
                <div className="image-placeholder">
                  <i className="fas fa-laptop-code"></i>
                </div>
              </div>
              <div className="project-content">
                <h3>ITスキル向上プログラム</h3>
                <p>
                  Industry
                  4.0に対応したITスキルとデジタル技術を習得するプログラム。AI、IoT、データ分析などを学習。
                </p>
                <div className="project-meta">
                  <span className="project-status">募集中</span>
                  <span className="project-participants">定員: 100名</span>
                </div>
              </div>
            </div>

            <div className="project-card animate-on-scroll">
              <div className="project-image">
                <div className="image-placeholder">
                  <i className="fas fa-handshake"></i>
                </div>
              </div>
              <div className="project-content">
                <h3>企業インターンシップ</h3>
                <p>
                  日本企業での実際の業務体験を通じて、実践的なスキルとビジネスマナーを身につけるプログラム。
                </p>
                <div className="project-meta">
                  <span className="project-status">通年実施</span>
                  <span className="project-participants">企業数: 25社</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="section partners">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">
              信頼できる<span className="highlight">パートナー</span>
            </h2>
            <p className="section-subtitle">
              私たちと共に未来を創造するパートナー企業・団体
            </p>
          </div>

          <div className="partners-grid">
            <div className="partner-item animate-on-scroll">
              <div className="partner-logo">STARTUP</div>
              <div className="partner-info">
                <h4 className="partner-name">スタートアップ企業</h4>
                <p className="partner-type">技術革新パートナー</p>
              </div>
            </div>

            <div className="partner-item animate-on-scroll">
              <div className="partner-logo">サクラネシア財団</div>
              <div className="partner-info">
                <h4 className="partner-name">サクラネシア財団</h4>
                <p className="partner-type">教育支援パートナー</p>
              </div>
            </div>

            <div className="partner-item animate-on-scroll">
              <div className="partner-logo">インドネシア大学</div>
              <div className="partner-info">
                <h4 className="partner-name">インドネシア大学</h4>
                <p className="partner-type">学術パートナー</p>
              </div>
            </div>

            <div className="partner-item animate-on-scroll">
              <div className="partner-logo">省庁TBD</div>
              <div className="partner-info">
                <h4 className="partner-name">政府機関</h4>
                <p className="partner-type">政策支援パートナー</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="section news">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">
              最新<span className="highlight">ニュース</span>
            </h2>
            <p className="section-subtitle">プロジェクトの最新情報をお届け</p>
          </div>

          <div className="news-grid">
            <article className="news-item animate-on-scroll">
              <div className="news-image">
                <div className="image-placeholder">
                  <i className="fas fa-newspaper"></i>
                </div>
              </div>
              <div className="news-content">
                <div className="news-meta">
                  <span className="news-date">2025.01.15</span>
                  <span className="news-category">プログラム</span>
                </div>
                <h3>第3期製造技術研修プログラム開始</h3>
                <p>
                  新たに150名の学生が参加し、6ヶ月間の集中研修プログラムがスタートしました。
                </p>
              </div>
            </article>

            <article className="news-item animate-on-scroll">
              <div className="news-image">
                <div className="image-placeholder">
                  <i className="fas fa-award"></i>
                </div>
              </div>
              <div className="news-content">
                <div className="news-meta">
                  <span className="news-date">2025.01.10</span>
                  <span className="news-category">成果</span>
                </div>
                <h3>卒業生の就職率95%を達成</h3>
                <p>
                  第2期卒業生の95%が希望する企業への就職を果たし、高い成果を上げています。
                </p>
              </div>
            </article>

            <article className="news-item animate-on-scroll">
              <div className="news-image">
                <div className="image-placeholder">
                  <i className="fas fa-handshake"></i>
                </div>
              </div>
              <div className="news-content">
                <div className="news-meta">
                  <span className="news-date">2025.01.05</span>
                  <span className="news-category">パートナーシップ</span>
                </div>
                <h3>新たな企業パートナー5社が参加</h3>
                <p>
                  製造業界のリーディングカンパニー5社が新たにプログラムに参加することが決定しました。
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">
              お<span className="highlight">問い合わせ</span>
            </h2>
            <p className="section-subtitle">
              ご質問や協業のご相談など、お気軽に以下フォームよりお問い合わせください。
              <br />
              担当より1〜3営業日以内にご返信いたします。
            </p>
          </div>

          <div className="contact-content">
            <div className="contact-info animate-on-scroll">
              <h3>お問い合わせ先</h3>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>info@nextmake-indonesia.com</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-clock"></i>
                <span>担当より1〜3営業日以内にご返信いたします</span>
              </div>

              <div className="social-links">
                <a href="#" className="social-link">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-facebook"></i>
                </a>
              </div>
            </div>

            <form className="contact-form animate-on-scroll">
              <div className="form-group">
                <label htmlFor="inquiry-type">お問い合わせ種別</label>
                <select id="inquiry-type" name="inquiry-type" required>
                  <option value="">選択してください</option>
                  <option value="general">一般的なお問い合わせ</option>
                  <option value="partnership">パートナーシップについて</option>
                  <option value="education">教育プログラムについて</option>
                  <option value="media">メディア・取材について</option>
                </select>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">お名前</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="company">会社名・団体名</label>
                  <input type="text" id="company" name="company" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">メールアドレス</label>
                <input type="email" id="email" name="email" required />
              </div>

              <div className="form-group">
                <label htmlFor="message">お問い合わせ内容</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-full">
                <span>送信する</span>
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <Image
                src="/next.svg"
                alt="NEXTMAKE Indonesia"
                width={150}
                height={50}
              />
              <p>未来をつくる、インドネシアのものづくり人材へ。</p>
              <div className="footer-social">
                <a href="#" className="social-link">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            <div className="footer-links">
              <div className="footer-section">
                <h4>プロジェクト</h4>
                <ul>
                  <li>
                    <a href="#about">概要</a>
                  </li>
                  <li>
                    <a href="#projects">進行中プロジェクト</a>
                  </li>
                  <li>
                    <a href="#partners">パートナー</a>
                  </li>
                  <li>
                    <a href="#why">選ばれる理由</a>
                  </li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>情報</h4>
                <ul>
                  <li>
                    <a href="#news">ニュース</a>
                  </li>
                  <li>
                    <a href="#contact">お問い合わせ</a>
                  </li>
                  <li>
                    <a href="#">プライバシーポリシー</a>
                  </li>
                  <li>
                    <a href="#">利用規約</a>
                  </li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>サポート</h4>
                <ul>
                  <li>
                    <a href="#">よくある質問</a>
                  </li>
                  <li>
                    <a href="#">技術サポート</a>
                  </li>
                  <li>
                    <a href="#">資料ダウンロード</a>
                  </li>
                  <li>
                    <a href="#">メディアキット</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 NEXTMAKE Indonesia. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">プライバシーポリシー</a>
              <a href="#">利用規約</a>
              <a href="#">サイトマップ</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
