import React, { useState } from "react";
import articlesDataFile from "../Data/Articles.json";
import "./Articles.css";
import { FiClock, FiSearch } from "react-icons/fi";

export default function Articles() {
  const { articlesData, categories } = articlesDataFile;

  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(4); // For "All Articles" section

  // Filter articles by search & category
  const filteredArticles = articlesData.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      activeCategory === "all" || article.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  // Separate featured for the top section (max 5)
  const featuredArticles = filteredArticles
    .filter((a) => a.featured)
    .slice(0, 5);

  // Load more handler
  const handleLoadMore = () => {
    setVisibleCount(filteredArticles.length);
  };

  return (
    <div className="articles-container">
      {/* Hero */}
      <section className="articles-heros">
        <div className="articles-heros-content">
          <h1>Explore Insights & Articles</h1>
          <p className="articles-heros-subtitle">
            Stay updated with the latest trends in technology, logistics,
            sustainability, and strategy.
          </p>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="articles-filter-section">
        <div className="container filter-content">
          <div className="search-box">
            <FiSearch className="search-icon" size={20} />
            <input
              type="text"
              placeholder="Search articles..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="category-filters">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`filter-btn ${
                  activeCategory === cat.id ? "active" : ""
                }`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="featured-section">
        <div className="container">
          <div className="section-header">
            <h2>Featured Articles</h2>
            <p className="section-subtitle">
              Handpicked articles covering innovation, sustainability, and
              business strategy.
            </p>
          </div>

          <div className="featured-grid">
            {featuredArticles.map((article) => (
              <div key={article.id} className="featured-card">
                <img
                  src={article.image}
                  alt={article.title}
                  className="featured-image"
                />
                <div className="featured-content">
                  <span className="featured-badge">Featured</span>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <div className="featured-meta">
                    <span>{article.author}</span>
                    <span className="read-time">
                      <FiClock /> {article.readTime}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="articles-grid-section">
        <div className="container">
          <div className="section-header">
            <h2>All Articles</h2>
            <p className="section-subtitle">
              Browse all articles across categories and topics.
            </p>
          </div>

          <div className="articles-grid">
            {filteredArticles.slice(0, visibleCount).map((article) => (
              <div key={article.id} className="article-card">
                <img
                  src={article.image}
                  alt={article.title}
                  className="article-image"
                />
                <div className="article-content">
                  <span className="article-category">{article.category}</span>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <div className="article-meta">
                    <div className="article-author">
                      <img
                        src={article.authorAvatar}
                        alt={article.author}
                        className="author-avatar"
                      />
                      <span>{article.author}</span>
                    </div>
                    <span className="read-time">
                      <FiClock /> {article.readTime}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleCount < filteredArticles.length && (
            <div className="load-more-wrapper">
              <button className="load-more-btn" onClick={handleLoadMore}>
                Load More
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-section">
        <div className="container newsletter-content">
          <h2>Subscribe to Our Newsletter</h2>
          <p>
            Get the latest insights, trends, and articles delivered directly to
            your inbox.
          </p>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
            />
            <button className="newsletter-btn" type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
