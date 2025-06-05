"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

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
              src="/starup.svg"
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
                A
              </a>
            </li>
            <li>
              <a href="#why" className="nav-link">
                B
              </a>
            </li>
            <li>
              <a href="#pillars" className="nav-link">
                C
              </a>
            </li>
            <li>
              <a href="#projects" className="nav-link">
                D
              </a>
            </li>
            <li>
              <a href="#partners" className="nav-link">
                パートナー
              </a>
            </li>
            <li>
              <a href="#universities" className="nav-link">
                参画大学
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
        <div className="hero-image-container">
          <Image
            src="/hero.png"
            alt="AI Indonesia - インドネシアでの人材育成プロジェクト"
            fill
            className="hero-image"
            priority
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about">
        <div className="container">
          <div className="about-image-gallery">
            <div className="gallery-item animate-on-scroll">
              <Image
                src="/about.png"
                alt="インドネシアでの人材育成プロジェクト"
                width={800}
                height={500}
                className="gallery-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* B Section */}
      <section id="why" className="section why-choose">
        <div className="container">
          <div className="about-image-gallery">
            <div className="gallery-item animate-on-scroll">
              <Image
                src="/B.png"
                alt="B"
                width={800}
                height={500}
                className="gallery-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* C Section */}
      <section id="pillars" className="section pillars">
        <div className="container">
          <div className="about-image-gallery">
            <div className="gallery-item animate-on-scroll">
              <Image
                src="/C.png"
                alt="C"
                width={800}
                height={500}
                className="gallery-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* D Section */}
      <section id="projects" className="section projects">
        <div className="container">
          <div className="about-image-gallery">
            <div className="gallery-item animate-on-scroll">
              <Image
                src="/D.png"
                alt="D"
                width={800}
                height={500}
                className="gallery-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="section partners">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">プロジェクト推進パートナー</h2>
            <p className="section-subtitle">
              NEXTMAKE Indonesiaを支える主要パートナー
            </p>
          </div>

          <div className="partners-grid">
            <div className="partner-item animate-on-scroll">
              <div className="partner-logo">
                <Image
                  src="/starup.png"
                  alt="STARUP"
                  width={120}
                  height={80}
                  className="partner-logo-image"
                />
              </div>
              <div className="partner-info">
                <h4 className="partner-name">STARUP</h4>
                <p className="partner-type">技術革新パートナー</p>
              </div>
            </div>

            <div className="partner-item animate-on-scroll">
              <div className="partner-logo">
                <Image
                  src="/sakuranesia.png"
                  alt="サクラネシア財団"
                  width={120}
                  height={80}
                  className="partner-logo-image"
                />
              </div>
              <div className="partner-info">
                <h4 className="partner-name">サクラネシア財団</h4>
                <p className="partner-type">教育支援パートナー</p>
              </div>
            </div>

            <div className="partner-item animate-on-scroll">
              <div className="partner-logo">
                <Image
                  src="/gyousei.png"
                  alt="行政機関"
                  width={120}
                  height={80}
                  className="partner-logo-image"
                />
              </div>
              <div className="partner-info">
                <h4 className="partner-name">行政機関</h4>
                <p className="partner-type">政策支援パートナー</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Universities Section */}
      <section id="universities" className="section universities">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">参画大学</h2>
            <p className="section-subtitle">
              プログラムに参加するインドネシアの主要大学
            </p>
          </div>

          <div className="universities-grid">
            <div className="university-item animate-on-scroll">
              <Image
                src="/university1.webp"
                alt="インドネシア大学理学部"
                width={120}
                height={80}
                className="university-logo"
              />
            </div>
            <div className="university-item animate-on-scroll">
              <Image
                src="/university2.webp"
                alt="ジェンベル大学"
                width={120}
                height={80}
                className="university-logo"
              />
            </div>
            <div className="university-item animate-on-scroll">
              <Image
                src="/university3.png"
                alt="インドネシア教育大学"
                width={120}
                height={80}
                className="university-logo"
              />
            </div>
            <div className="university-item animate-on-scroll">
              <Image
                src="/university4.png"
                alt="ランランブアナ大学バンドン"
                width={120}
                height={80}
                className="university-logo"
              />
            </div>
            <div className="university-item animate-on-scroll">
              <Image
                src="/university5.png"
                alt="スラバヤ工科大学"
                width={120}
                height={80}
                className="university-logo"
              />
            </div>
            <div className="university-item animate-on-scroll">
              <Image
                src="/university6.png"
                alt="シャリフ・ヒダヤトゥラー国立イスラム大学ジャカルタ"
                width={120}
                height={80}
                className="university-logo"
              />
            </div>
            <div className="university-item animate-on-scroll">
              <Image
                src="/university7.jpg"
                alt="参画大学7"
                width={120}
                height={80}
                className="university-logo"
              />
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
            <p className="section-subtitle">
              AI Indonesiaプロジェクトの最新情報をお届けします
            </p>
          </div>

          <div className="news-grid">
            <article className="news-card featured animate-on-scroll">
              <div className="news-image">
                <Image
                  src="/university1.webp"
                  alt="メインニュース"
                  width={600}
                  height={350}
                  className="news-img"
                />
                <div className="news-category featured">重要</div>
              </div>
              <div className="news-content">
                <div className="news-meta">
                  <span className="news-date">2024年1月15日</span>
                  <span className="news-author">AI Indonesia事務局</span>
                </div>
                <h3 className="news-title">
                  新たな大学パートナーシップ締結のお知らせ
                </h3>
                <p className="news-excerpt">
                  インドネシアの主要3大学と新たに連携協定を締結し、AI分野における人材育成プログラムを大幅に拡充することが決定いたしました。
                </p>
                <a href="#" className="news-link">
                  続きを読む →
                </a>
              </div>
            </article>

            <article className="news-card animate-on-scroll">
              <div className="news-image">
                <Image
                  src="/university2.webp"
                  alt="技術研修プログラム"
                  width={400}
                  height={250}
                  className="news-img"
                />
                <div className="news-category">プログラム</div>
              </div>
              <div className="news-content">
                <div className="news-meta">
                  <span className="news-date">2024年1月10日</span>
                </div>
                <h3 className="news-title">第2期技術研修プログラム開始</h3>
                <p className="news-excerpt">
                  日本の最新AI技術を学ぶ集中研修プログラムがスタートしました。
                </p>
                <a href="#" className="news-link">
                  続きを読む →
                </a>
              </div>
            </article>

            <article className="news-card animate-on-scroll">
              <div className="news-image">
                <Image
                  src="/university3.png"
                  alt="企業連携イベント"
                  width={400}
                  height={250}
                  className="news-img"
                />
                <div className="news-category">イベント</div>
              </div>
              <div className="news-content">
                <div className="news-meta">
                  <span className="news-date">2024年1月8日</span>
                </div>
                <h3 className="news-title">企業連携フォーラム開催報告</h3>
                <p className="news-excerpt">
                  産学連携を深める企業フォーラムを開催し、多くの成果を上げました。
                </p>
                <a href="#" className="news-link">
                  続きを読む →
                </a>
              </div>
            </article>

            <article className="news-card animate-on-scroll">
              <div className="news-image">
                <Image
                  src="/university4.png"
                  alt="学生成果発表"
                  width={400}
                  height={250}
                  className="news-img"
                />
                <div className="news-category">成果</div>
              </div>
              <div className="news-content">
                <div className="news-meta">
                  <span className="news-date">2024年1月5日</span>
                </div>
                <h3 className="news-title">学生プロジェクト成果発表会</h3>
                <p className="news-excerpt">
                  参加学生による革新的なAIプロジェクトの成果発表会を実施しました。
                </p>
                <a href="#" className="news-link">
                  続きを読む →
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <div className="section-badge">CONTACT</div>
            <h2 className="section-title">お問い合わせ</h2>
            <p className="section-subtitle">
              AI Indonesiaに関するご質問・取材・パートナー連携のご相談は
              <br />
              以下よりお気軽にご連絡ください
            </p>
          </div>

          <div className="contact-wrapper">
            <div className="contact-content">
              <div className="contact-info animate-on-scroll">
                <div className="contact-info-card">
                  <div className="contact-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <h3>メールでのお問い合わせ</h3>
                  <p>担当より1〜3営業日以内にご返信いたします</p>
                  <a
                    href="mailto:info@nextmake-indonesia.com"
                    className="contact-email"
                  >
                    info@nextmake-indonesia.com
                  </a>
                </div>

                <div className="contact-info-card">
                  <div className="contact-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <h3>お電話でのお問い合わせ</h3>
                  <p>平日 10:00 - 18:00 (土日祝日除く)</p>
                  <span className="contact-phone">03-XXXX-XXXX</span>
                </div>

                <div className="contact-social">
                  <h4>SNSでも情報発信中</h4>
                  <div className="social-links">
                    <a href="#" className="social-link twitter">
                      <i className="fab fa-twitter"></i>
                      <span>Twitter</span>
                    </a>
                    <a href="#" className="social-link linkedin">
                      <i className="fab fa-linkedin"></i>
                      <span>LinkedIn</span>
                    </a>
                    <a href="#" className="social-link facebook">
                      <i className="fab fa-facebook"></i>
                      <span>Facebook</span>
                    </a>
                  </div>
                </div>
              </div>

              <form className="contact-form animate-on-scroll">
                <div className="form-header">
                  <h3>お問い合わせフォーム</h3>
                  <p>下記フォームより詳細をお聞かせください</p>
                </div>

                <div className="form-group">
                  <label htmlFor="inquiry-type">
                    お問い合わせ種別 <span className="required">*</span>
                  </label>
                  <select id="inquiry-type" name="inquiry-type" required>
                    <option value="">選択してください</option>
                    <option value="general">一般的なお問い合わせ</option>
                    <option value="partnership">
                      パートナーシップについて
                    </option>
                    <option value="education">教育プログラムについて</option>
                    <option value="media">メディア・取材について</option>
                  </select>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">
                      お名前 <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="山田 太郎"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">会社名・団体名</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="株式会社〇〇"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    メールアドレス <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your-email@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    お問い合わせ内容 <span className="required">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="お問い合わせ内容をできるだけ詳しくご記入ください"
                    required
                  ></textarea>
                </div>

                <div className="form-privacy">
                  <label className="checkbox-label">
                    <input type="checkbox" required />
                    <span className="checkmark"></span>
                    <a href="#" className="privacy-link">
                      プライバシーポリシー
                    </a>
                    に同意します
                  </label>
                </div>

                <button type="submit" className="btn btn-primary btn-submit">
                  <i className="fas fa-paper-plane"></i>
                  <span>送信する</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-main">
            <div className="footer-brand">
              <div className="footer-logo">
                <Image
                  src="/starup.svg"
                  alt="AI Indonesia"
                  width={180}
                  height={60}
                />
              </div>
              <p className="footer-tagline">
                &ldquo;つくる&rdquo;を未来につなぐ、
                <br />
                インドネシアの人づくり
              </p>
              <p className="footer-description">
                日本とインドネシアの架け橋となるAI人材育成プロジェクト。
                <br />
                産学官連携により、次世代のデジタル人材を育成し、
                <br />
                両国の持続的な発展に貢献します。
              </p>
              <div className="footer-social">
                <span className="social-title">Follow Us</span>
                <div className="social-icons">
                  <a href="#" className="social-link twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="social-link linkedin">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" className="social-link facebook">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="#" className="social-link instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="footer-nav">
              <div className="footer-section">
                <h4>プロジェクト</h4>
                <ul>
                  <li>
                    <a href="#about">プロジェクト概要</a>
                  </li>
                  <li>
                    <a href="#why">なぜインドネシアなのか</a>
                  </li>
                  <li>
                    <a href="#projects">進行中プロジェクト</a>
                  </li>
                  <li>
                    <a href="#partners">パートナー企業</a>
                  </li>
                  <li>
                    <a href="#universities">参画大学</a>
                  </li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>情報・サポート</h4>
                <ul>
                  <li>
                    <a href="#news">最新ニュース</a>
                  </li>
                  <li>
                    <a href="#contact">お問い合わせ</a>
                  </li>
                  <li>
                    <a href="#">資料ダウンロード</a>
                  </li>
                  <li>
                    <a href="#">よくある質問</a>
                  </li>
                  <li>
                    <a href="#">メディアキット</a>
                  </li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>お問い合わせ</h4>
                <div className="footer-contact">
                  <div className="contact-detail">
                    <i className="fas fa-envelope"></i>
                    <span>info@nextmake-indonesia.com</span>
                  </div>
                  <div className="contact-detail">
                    <i className="fas fa-phone"></i>
                    <span>03-XXXX-XXXX</span>
                  </div>
                  <div className="contact-detail">
                    <i className="fas fa-clock"></i>
                    <span>平日 10:00 - 18:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p className="copyright">
                &copy; 2025 AI Indonesia Project. All rights reserved.
              </p>
              <div className="footer-bottom-links">
                <a href="#">プライバシーポリシー</a>
                <span className="separator">|</span>
                <a href="#">利用規約</a>
                <span className="separator">|</span>
                <a href="#">サイトマップ</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
