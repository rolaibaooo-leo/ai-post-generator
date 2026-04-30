"use client";

import { useState, useEffect } from "react";
import {
  postTemplates,
  platforms,
  postTypes,
  generatePost,
  generateMidjourneyPrompt,
  PostTemplate,
} from "@/lib/data";

export default function Home() {
  const [platform, setPlatform] = useState("Twitter/X");
  const [postType, setPostType] = useState("知識乾貨");
  const [topic, setTopic] = useState("");
  const [targetAudience, setTargetAudience] = useState("年輕上班族");
  const [selectedTemplates, setSelectedTemplates] = useState<PostTemplate[]>([]);
  const [platformFilter, setPlatformFilter] = useState("全部");
  const [typeFilter, setTypeFilter] = useState("全部");
  const [generatedPost, setGeneratedPost] = useState<{
    content: string;
    imagePrompt: string;
    tips: string[];
  } | null>(null);
  const [activeTab, setActiveTab] = useState<"content" | "image" | "tips">("content");
  const [showCopied, setShowCopied] = useState(false);

  const filteredTemplates = postTemplates
    .filter((t) => platformFilter === "全部" || t.platform === platformFilter)
    .filter((t) => typeFilter === "全部" || t.type === typeFilter)
    .sort((a, b) => b.likes - a.likes);

  const handleTemplateSelect = (template: PostTemplate) => {
    setSelectedTemplates((prev) => {
      const isSelected = prev.some((t) => t.id === template.id);
      if (isSelected) {
        return prev.filter((t) => t.id !== template.id);
      }
      return [...prev, template];
    });
  };

  const handleGenerate = () => {
    if (!topic.trim()) {
      alert("請輸入主題");
      return;
    }
    const result = generatePost(platform, postType, topic, targetAudience, selectedTemplates);
    setGeneratedPost(result);
    setActiveTab("content");
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy");
    }
  };

  const copyGeneratedContent = () => {
    if (generatedPost) {
      copyToClipboard(generatedPost.content);
    }
  };

  const copyImagePrompt = () => {
    if (generatedPost) {
      copyToClipboard(generatedPost.imagePrompt);
    }
  };

  return (
    <div className="container">
      <header>
        <h1>AI 貼文生成器</h1>
        <p>從 Reddit、Twitter/X、Dcard、PTT、Facebook 提取高讚公式 | 一鍵生成病毒式內容</p>
      </header>

      <div className="main-grid">
        <div className="left-column">
          <div className="panel">
            <div className="panel-header">
              <span className="icon">⚙️</span>
              <h2>生成設定</h2>
            </div>

            <div className="form-group">
              <label>目標平台</label>
              <select value={platform} onChange={(e) => setPlatform(e.target.value)}>
                {platforms.filter((p) => p !== "全部").map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>貼文類型</label>
              <select value={postType} onChange={(e) => setPostType(e.target.value)}>
                {postTypes.filter((t) => t !== "全部").map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>貼文主題</label>
              <input
                type="text"
                placeholder="例如：如何在30天內提升生產力"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>目標受眾</label>
              <input
                type="text"
                placeholder="例如：遠距工作者、程式設計師、大學生"
                value={targetAudience}
                onChange={(e) => setTargetAudience(e.target.value)}
              />
            </div>

            <button className="btn-primary" onClick={handleGenerate}>
              🚀 一鍵生成貼文
            </button>
          </div>

          <div className="panel" style={{ marginTop: "1.5rem" }}>
            <div className="panel-header">
              <span className="icon">📋</span>
              <h2>技巧範本庫 ({filteredTemplates.length})</h2>
            </div>

            <div className="filter-bar">
              <span style={{ color: "#888", fontSize: "0.8rem", marginRight: "0.5rem" }}>平台:</span>
              {["全部", ...platforms.filter((p) => p !== "全部")].map((p) => (
                <button
                  key={p}
                  className={`filter-btn ${platformFilter === p ? "active" : ""}`}
                  onClick={() => setPlatformFilter(p)}
                >
                  {p}
                </button>
              ))}
            </div>

            <div className="filter-bar" style={{ marginBottom: "1rem" }}>
              <span style={{ color: "#888", fontSize: "0.8rem", marginRight: "0.5rem" }}>類型:</span>
              {["全部", ...postTypes.filter((t) => t !== "全部")].map((t) => (
                <button
                  key={t}
                  className={`filter-btn ${typeFilter === t ? "active" : ""}`}
                  onClick={() => setTypeFilter(t)}
                >
                  {t}
                </button>
              ))}
            </div>

            <div className="template-list">
              {filteredTemplates.map((template) => (
                <div
                  key={template.id}
                  className={`template-item ${selectedTemplates.some((t) => t.id === template.id) ? "selected" : ""}`}
                  onClick={() => handleTemplateSelect(template)}
                >
                  <div className="template-item-header">
                    <span className="platform">{template.platform}</span>
                    <span className="likes">❤️ {template.likes.toLocaleString()}</span>
                  </div>
                  <h4>{template.category}</h4>
                  <p>{template.keyTechnique}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="right-column">
          <div className="panel">
            <div className="panel-header">
              <span className="icon">🎨</span>
              <h2>Midjourney 配圖提示詞</h2>
            </div>

            <div className="form-group">
              <label>貼文類型（影響配圖風格）</label>
              <select
                value={postType}
                onChange={(e) => {
                  setPostType(e.target.value);
                  if (topic) {
                    const prompt = generateMidjourneyPrompt(e.target.value, topic);
                    setGeneratedPost((prev) => prev ? { ...prev, imagePrompt: prompt } : null);
                  }
                }}
              >
                {postTypes.filter((t) => t !== "全部").map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>預覽提示詞</label>
              <textarea
                readOnly
                value={
                  generatedPost?.imagePrompt ||
                  generateMidjourneyPrompt(postType, topic || "your topic here")
                }
                placeholder="輸入主題後點擊生成..."
                style={{ minHeight: "150px", fontFamily: "monospace" }}
              />
            </div>

            <button
              className="btn-primary"
              style={{ background: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)" }}
              onClick={() => {
                const prompt = generateMidjourneyPrompt(postType, topic || "your topic here");
                copyToClipboard(prompt);
              }}
            >
              📋 複製 Midjourney 提示詞
            </button>

            <div style={{ marginTop: "1.5rem" }}>
              <h4 style={{ color: "#b0b0b0", marginBottom: "0.75rem", fontSize: "0.9rem" }}>配圖風格參考</h4>
              <div style={{ fontSize: "0.8rem", color: "#888", lineHeight: "1.8" }}>
                <p><strong style={{ color: "#a0b0ff" }}>故事敘事：</strong>電影感、真實場景、生活化</p>
                <p><strong style={{ color: "#a0b0ff" }}>知識乾貨：</strong>數據視覺化、資訊圖表、專業</p>
                <p><strong style={{ color: "#a0b0ff" }}>娛樂投票：</strong>對比圖、選項圖、視覺化</p>
                <p><strong style={{ color: "#a0b0ff" }}>互動技巧：</strong>社群元素、引導圖、年輕化</p>
              </div>
            </div>
          </div>
        </div>

        {generatedPost && (
          <div className="output-section">
            <div className="output-panel">
              <div className="panel-header">
                <span className="icon">✨</span>
                <h2>生成的內容</h2>
              </div>

              <div className="output-tabs">
                <button
                  className={`tab-btn ${activeTab === "content" ? "active" : ""}`}
                  onClick={() => setActiveTab("content")}
                >
                  📝 貼文內容
                </button>
                <button
                  className={`tab-btn ${activeTab === "image" ? "active" : ""}`}
                  onClick={() => setActiveTab("image")}
                >
                  🎨 配圖提示詞
                </button>
                <button
                  className={`tab-btn ${activeTab === "tips" ? "active" : ""}`}
                  onClick={() => setActiveTab("tips")}
                >
                  💡 互動技巧
                </button>
              </div>

              <div className="output-content">
                <button className="copy-btn" onClick={activeTab === "content" ? copyGeneratedContent : copyImagePrompt}>
                  📋 複製
                </button>

                {activeTab === "content" && (
                  <pre style={{ whiteSpace: "pre-wrap", fontFamily: "inherit", lineHeight: "1.8" }}>
                    {generatedPost.content}
                  </pre>
                )}

                {activeTab === "image" && (
                  <div>
                    <p style={{ color: "#a0a0a0", marginBottom: "1rem" }}>
                      複製以下提示詞到 Midjourney 生成配圖：
                    </p>
                    <code
                      style={{
                        display: "block",
                        background: "rgba(102, 126, 234, 0.2)",
                        padding: "1rem",
                        borderRadius: "8px",
                        fontFamily: "monospace",
                        color: "#fff",
                        wordBreak: "break-all",
                      }}
                    >
                      {generatedPost.imagePrompt}
                    </code>
                  </div>
                )}

                {activeTab === "tips" && (
                  <ul className="tips-list">
                    {generatedPost.tips.map((tip, index) => (
                      <li key={index}>{tip}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {showCopied && <div className="copy-success show">已複製到剪貼簿！</div>}
    </div>
  );
}