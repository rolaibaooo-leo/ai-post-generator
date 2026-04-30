export interface PostTemplate {
  id: string;
  platform: string;
  type: string;
  category: string;
  keyTechnique: string;
  postFormula: string;
  imageTips: string;
  sourceUrl: string;
  likes: number;
}

export interface GeneratedPost {
  platform: string;
  type: string;
  content: string;
  imagePrompt: string;
  tips: string[];
}

export const postTemplates: PostTemplate[] = [
  {
    id: "1",
    platform: "Twitter/X",
    type: "知識乾貨",
    category: "Hook技巧",
    keyTechnique: "首則決定90%成敗、創造好奇心缺口",
    postFormula: "Bold claim+numbers 或 Surprising stat 或 Curiosity gap",
    imageTips: "Hook單獨要有價值",
    sourceUrl: "https://www.wordcountertool.net/blog/how-to-write-twitter-thread",
    likes: 20000
  },
  {
    id: "2",
    platform: "Twitter/X",
    type: "互動技巧",
    category: "早期互動",
    keyTechnique: "首30分鐘回覆每則留言、演算法信號",
    postFormula: "發布後Stay 60-90 min | 立即回覆",
    imageTips: "N/A",
    sourceUrl: "https://xengageai.com/blog/how-to-go-viral-on-x",
    likes: 12000
  },
  {
    id: "3",
    platform: "Dcard",
    type: "知識乾貨",
    category: "時事結合",
    keyTechnique: "跟上當下熱門議題",
    postFormula: "情人節/畢業季/聖誕節 | 關注熱門看板",
    imageTips: "熱門話題圖",
    sourceUrl: "https://www.anywhere.today/dcard-tw/",
    likes: 10000
  },
  {
    id: "4",
    platform: "Reddit",
    type: "故事敘事",
    category: "反常結論",
    keyTechnique: "Start with counterintuitive claim then prove it",
    postFormula: "Everyone says X but I did Y | Why belief is wrong",
    imageTips: "場景圖",
    sourceUrl: "https://www.conbersa.ai/learn/how-to-go-viral-on-reddit",
    likes: 8000
  },
  {
    id: "5",
    platform: "Twitter/X",
    type: "知識乾貨",
    category: "Thread結構",
    keyTechnique: "Hook -> Promise -> Value -> Bridge -> Close -> CTA",
    postFormula: "1/ Hook | 2/ Confirm value | 3-N/ Deliver | Close: Summary+CTA",
    imageTips: "圖片放1/3/5位置",
    sourceUrl: "https://xpromotion.co/knowledge-base/how-to-write-a-x-thread/",
    likes: 10000
  },
  {
    id: "6",
    platform: "Dcard",
    type: "知識乾貨",
    category: "發文時間",
    keyTechnique: "36小時內上熱門、配合大學作息",
    postFormula: "早上發布覆蓋兩次晚間高峰 | 晚上10-12點最高",
    imageTips: "N/A",
    sourceUrl: "https://www.anywhere.today/dcard-tw/",
    likes: 8000
  },
  {
    id: "7",
    platform: "Facebook",
    type: "知識乾貨",
    category: "懶人包型",
    keyTechnique: "每篇專注一主題、複雜資訊圖文化",
    postFormula: "補助懶人包 | 年度整理 | AI工具推薦",
    imageTips: "圖文簡報",
    sourceUrl: "https://browninsight.com/fb-post-strategy/",
    likes: 8000
  },
  {
    id: "8",
    platform: "Dcard",
    type: "故事敘事",
    category: "標題技巧",
    keyTechnique: "簡潔有力+引人好奇+懸念",
    postFormula: "誰說[群體]不能[結果]? | 驚嘆號製造懸念",
    imageTips: "生活場景圖",
    sourceUrl: "https://www.rzudcard.tw/articles/019ca504-41f9-6cd0-5433-27ce6ec9b0a9",
    likes: 5000
  },
  {
    id: "9",
    platform: "Reddit",
    type: "知識乾貨",
    category: "AIDA結構",
    keyTechnique: "Lead with problem -> Describe value -> Drive action -> Ask question",
    postFormula: "Hook: 具體結果 | Body: 1000+ words | CTA: 提問",
    imageTips: "截圖或數據圖",
    sourceUrl: "https://www.redleads.app/blog/reddit-content-marketing-guide",
    likes: 10000
  },
  {
    id: "10",
    platform: "Reddit",
    type: "知識乾貨",
    category: "Case Study",
    keyTechnique: "I spent X time/money. Here is what I learned",
    postFormula: "Title: How I result in timeframe | Body: 問題→嘗試→失敗→成功→教訓",
    imageTips: "Before/After圖",
    sourceUrl: "https://indexthread.com/newsletter/how-to-go-viral-on-reddit",
    likes: 5000
  },
  {
    id: "11",
    platform: "Reddit",
    type: "知識乾貨",
    category: "資源彙整",
    keyTechnique: "Curated list with personal experience",
    postFormula: "I tested 30+ tools. Here are 5 I kept and why",
    imageTips: "工具截圖、排名表",
    sourceUrl: "https://indexthread.com/newsletter/how-to-go-viral-on-reddit",
    likes: 6000
  },
  {
    id: "12",
    platform: "Facebook",
    type: "故事敘事",
    category: "情感共鳴",
    keyTechnique: "從TA日常切入、測試不同語氣",
    postFormula: "怒氣/溫柔/搞笑 | 從職場文化切入",
    imageTips: "生活化圖",
    sourceUrl: "https://browninsight.com/fb-post-strategy/",
    likes: 5000
  },
  {
    id: "13",
    platform: "Facebook",
    type: "知識乾貨",
    category: "時事結合",
    keyTechnique: "快速跟上圈內時事+品牌角度",
    postFormula: "結合粉專語氣 | 了解TA關注",
    imageTips: "時事相關圖",
    sourceUrl: "https://browninsight.com/fb-post-strategy/",
    likes: 6000
  },
  {
    id: "14",
    platform: "PTT",
    type: "知識乾貨",
    category: "標題技巧",
    keyTechnique: "數字+疑問句+爭議性+表情",
    postFormula: "超推!我用這款...改善80%!",
    imageTips: "表情增加親和力",
    sourceUrl: "https://www.jhyptt.tw/articles/0197d707-0217-857e-6909-e36c307b4fa6",
    likes: 3000
  },
  {
    id: "15",
    platform: "Dcard",
    type: "知識乾貨",
    category: "AI率降低",
    keyTechnique: "真實故事+口語化+個人觀點",
    postFormula: "加入個人經歷 | 用比喻 | 避免模板句型",
    imageTips: "個人照片更自然",
    sourceUrl: "https://www.rzudcard.com.tw/articles/019ad0f4-e0b2-2c26-9019-8e8b10d182e5",
    likes: 2000
  },
  {
    id: "16",
    platform: "Facebook",
    type: "互動技巧",
    category: "互動橋樑",
    keyTechnique: "投票/問答/挑戰激發參與",
    postFormula: "每週一問成員分享 | 主題分享會",
    imageTips: "投票截圖",
    sourceUrl: "https://welly.tw/blog/facebook-group",
    likes: 3000
  },
  {
    id: "17",
    platform: "Twitter/X",
    type: "知識乾貨",
    category: "配圖優化",
    keyTechnique: "每則推文<220字、使用編號、加入媒體",
    postFormula: "1 line最佳 | Numbered (1/, 2/) | Media in posts 1,3,5",
    imageTips: "圖表、GIF",
    sourceUrl: "https://www.teract.ai/resources/twitter-thread-writing-2026",
    likes: 15000
  },
  {
    id: "18",
    platform: "Twitter/X",
    type: "知識乾貨",
    category: "橋接技巧",
    keyTechnique: "Mid-thread re-engagement、使用open loop",
    postFormula: "The most important insight coming in tweet 12 | 覆蓋基礎後提出多數人錯誤",
    imageTips: "視覺元素：中間放圖表/清單",
    sourceUrl: "https://social-0.com/blog/twitter-thread-guide/",
    likes: 8000
  },
  {
    id: "19",
    platform: "Facebook",
    type: "知識乾貨",
    category: "長文框架",
    keyTechnique: "Hook+情境+結論+CTA",
    postFormula: "5W破題 | 親身經歷 | 明確CTA",
    imageTips: "場景/對比圖",
    sourceUrl: "https://blog.chatisfy.com/fb-post-content-strategy/",
    likes: 4000
  },
  {
    id: "20",
    platform: "PTT",
    type: "知識乾貨",
    category: "發文時間",
    keyTechnique: "黃金時段12-13點、18-22點",
    postFormula: "避開大型活動 | 觀察各板活躍時間",
    imageTips: "N/A",
    sourceUrl: "https://www.jhyptt.tw/articles/0197d707-0217-857e-6909-e36c307b4fa6",
    likes: 2000
  },
  {
    id: "21",
    platform: "PTT",
    type: "知識乾貨",
    category: "內容價值",
    keyTechnique: "提供有價值資訊+個人經驗",
    postFormula: "段落清晰 | 項目符號 | 簡潔回應",
    imageTips: "相關主題圖",
    sourceUrl: "https://www.jhyptt.tw/articles/0197d707-0217-857e-6909-e36c307b4fa6",
    likes: 1500
  },
  {
    id: "22",
    platform: "Dcard",
    type: "故事敘事",
    category: "內容編排",
    keyTechnique: "分段+項目符號+粗體、口語化",
    postFormula: "一句話20字內 | 適量表情符號",
    imageTips: "相關主題圖",
    sourceUrl: "https://www.rzudcard.tw/articles/019ca504-41f9-6cd0-5433-27ce6ec9b0a9",
    likes: 3000
  },
  {
    id: "23",
    platform: "Reddit",
    type: "娛樂投票",
    category: "Question Format",
    keyTechnique: "Ask specific question inviting debate",
    postFormula: "X vs Y for use case | What is best X for Y",
    imageTips: "對比圖、選項圖",
    sourceUrl: "https://discoveredlabs.com/blog/7-tips-to-write-reddit-comments-that-llms-reuse",
    likes: 3000
  },
  {
    id: "24",
    platform: "通用",
    type: "互動技巧",
    category: "早期黃金60分鐘",
    keyTechnique: "首小時決定早期velocity信號",
    postFormula: "10-20 upvotes in 60 min | 回覆每則留言",
    imageTips: "N/A",
    sourceUrl: "https://mediafa.st/how-to-write-a-reddit-post-that-goes-viral",
    likes: 0
  }
];

export const platforms = ["全部", "Reddit", "Twitter/X", "Dcard", "PTT", "Facebook", "通用"];
export const postTypes = ["全部", "故事敘事", "知識乾貨", "娛樂投票", "互動技巧"];

export const midjourneyPresets = {
  story: [
    " cinematic lighting, emotional moment, authentic scene, natural colors, smartphone photo style",
    " documentary style, real-life capture, warm tones, shallow depth of field, candid moment",
    " Hyperrealistic, everyday scene, warm golden hour lighting, emotional depth, 85mm lens"
  ],
  knowledge: [
    " clean minimalist design, data visualization, chart aesthetic, professional lighting, UI mockup style",
    " infographic layout, flat design, modern typography, blue and white color scheme, clean background",
    " 3D rendered chart, floating elements, soft shadows, contemporary office aesthetic, 4K quality"
  ],
  vote: [
    " comparison chart, balanced composition, contrasting colors, poll aesthetic, modern graphic design",
    " split screen design, two options shown equally, clean typography, vote indicator icons, minimalist",
    " voting interface mockup, modern UI design, ballot paper aesthetic, professional photography lighting"
  ],
  interaction: [
    " engagement icons floating, social media aesthetic, warm inviting colors, community illustration",
    " discussion bubble composition, conversation elements, friendly illustration style, soft gradients",
    " interactive UI concept, touch gestures, modern app interface, blue accent lighting"
  ]
};

export function generateMidjourneyPrompt(type: string, topic: string, style: string = "默認"): string {
  const presets = midjourneyPresets[type as keyof typeof midjourneyPresets] || midjourneyPresets.story;
  const selectedStyle = presets[0] || "";
  return `/imagine prompt: ${topic}, ${style} style${selectedStyle} --ar 16:9 --v 6`;
}

export function generatePost(
  platform: string,
  type: string,
  topic: string,
  targetAudience: string,
  selectedTemplates: PostTemplate[]
): { content: string; imagePrompt: string; tips: string[] } {
  const templates = selectedTemplates.length > 0 ? selectedTemplates : postTemplates.filter(t => t.platform === platform || t.platform === "通用");
  const template = templates[0];

  let content = "";
  const tips: string[] = [];
  let imagePrompt = "";

  if (platform === "Twitter/X") {
    content = `🧵 ${topic} (Thread)

1/ ${topic}的關鍵是什麼？
${targetAudience}最常見的問題是...

2/ 首先，你需要了解基本原則
不要急著開始，先評估你的現狀

3/ 這裡有3個我親測有效的方法：
→ 從最小可行選項開始
→ 記錄你的進度
→ 持續優化調整

4/ 常見錯誤：
❌ 過度複雜化
❌ 忽視反饋
❌ 缺乏一致性

5/ 付諸行動的秘密：
專注在每天進步1%
堅持比強度更重要

6/ 總結：
${topic}不是終點，而是持續迭代的過程

——
如果你觉得有帮助，转发第一条推文让更多需要的人看到！

#${topic.replace(/\s+/g, "")}`;
    imagePrompt = generateMidjourneyPrompt(type, topic, "modern");
    tips.push("黃金60分鐘：發布後前30分鐘回覆所有留言");
    tips.push("配圖放第1、3、5則貼文位置");
  } else if (platform === "Dcard") {
    content = `【標題】誰說${targetAudience}不能${topic}？

大家好，我是XX
今天要分享一個讓我人生轉變的經歷

---

▋ 故事背景
原本我也是一般上班族，每天重複同樣的生活
直到我決定開始嘗試${topic}...

▋ 我的改變過程
第1步：先從最小的事開始
第2步：每週紀錄進步
第3步：持續調整優化

▋ 實際成果
堅持3個月後，我的改變连自己都驚訝

▋ 給你們的建議
不要想太多，先行動再說
每個人都可以做到，重點是願不願意開始

---
你也有類似的經歷嗎？
留言分享你的故事交換一下吧 👇

#${topic} #${targetAudience}`;
    imagePrompt = generateMidjourneyPrompt(type, topic, "authentic");
    tips.push("36小時黃金窗口：早上發布覆蓋兩次晚間高峰");
    tips.push("時事結合：關注Dcard熱門看板");
  } else if (platform === "Reddit") {
    content = `## I spent 3 months ${topic}. Here's what I learned

**TL;DR:** Key insight in bullet points at the end

### Background
I was in your position 3 months ago. Decided to take action on ${topic}.

### What worked:
1. Start with the basics (don't skip this!)
2. Track everything with metrics
3. Compound effects are real

### What didn't work:
- Trying to do everything at once
- Ignoring feedback from community
- Over-optimizing early

### Key takeaways:

► ${targetAudience} should focus on consistency over intensity
► Document your journey (it helps others AND yourself)
► The "perfect" is the enemy of "good enough"

### Real numbers:
- Week 1-4: Foundation building
- Week 5-8: First visible results  
- Week 9-12: Scaling up

**Would I do it again?** 100% yes.

---

💬 Questions? Drop them below. I'll reply to every single one.

🔗 Full breakdown with more data: [link in comments]`;
    imagePrompt = generateMidjourneyPrompt(type, topic, "professional");
    tips.push("Case Study格式：數字+時間軸+具體教訓");
    tips.push("開頭用TL;DR讓讀者快速抓到重點");
  } else if (platform === "PTT") {
    content = `[分享] ${topic}心得 - 給${targetAudience}的建議

作者: XXX (Gossip板)
標題: [分享] ${topic}心得 - 實際執行3個月結果

時間: ${new Date().toLocaleDateString('zh-TW')}

大家好
最近版上討論${topic}的文好像變多了
來分享一下我的實際經驗

---

▌前情提要
我不是什麼厲害的人
只是把方法認真執行3個月的普通上班族

▌執行步驟
1. 先了解自己的現狀
2. 設定可衡量的小目標
3. 每週檢視進度
4. 適時調整策略

▌實際成果
第一個月：感覺沒有太大變化差點放棄
第二個月：開始看到一些正向回饋
第三個月：成效超乎預期

▌個人建議
- 不要一開始就追求完美
- 找到适合自己的節奏
- 身邊支持的人很重要

---

推文請用力
有問題可以留言我會盡量回

※ 發文前有先爬過文，如有冒犯請見諒`;
    imagePrompt = generateMidjourneyPrompt(type, topic, "casual");
    tips.push("黃金時段：12-13點或18-22點");
    tips.push("標題加入數字和情緒字眼");
  } else if (platform === "Facebook") {
    content = `${topic}

身為${targetAudience}，你一定也有過這樣的困擾...

我曾經也是這樣，每天忙到不行卻覺得沒什麼進展。後來我找到了方法──

▋ 為什麼這個方法有效？
✓ 符合演算法喜好（深度互動）
✓ 符合受眾需求（真實故事）
✓ 容易引發共鳴（情緒連結）

▋ 我的改變歷程
以前：早上起床先滑手機
現在：先做最重要的1件事

以前：晚上加班到深夜
現在：提升效率準時下班

▋ 你也可以做到
只要掌握3個關鍵：
1. 從小目標開始
2. 每天進步一點點
3. 找到同行夥伴

圖中是具體的執行步驟，截圖保存起來慢慢看

——

你也有類似經歷嗎？留言分享 👇
覺得有幫助的話按個讚，標記需要這個資訊的朋友

#${topic} #${targetAudience} #自我成長`;
    imagePrompt = generateMidjourneyPrompt(type, topic, "emotional");
    tips.push("情感共鳴：從TA日常切入");
    tips.push("懶人包型：複雜資訊圖文化");
    tips.push("時事結合：快速跟上熱門話題");
  } else {
    content = `${topic} - 給${targetAudience}的完整指南

▋ 為什麼這個議題重要？
${targetAudience}最常見的問題是...

▋ 核心方法論
step1: 評估現狀
step2: 設定目標
step3: 採取行動
step4: 檢視優化

▋ 常見錯誤
❌ 過度計劃不行動
❌ 忽視回饋
❌ 缺乏耐心

▋ 付諸行動
從今天就開始，不需要等到完美
1% 的進步 = 持續前進

---
你有其他想法？留言分享

#${topic}`;
    imagePrompt = generateMidjourneyPrompt(type, topic, "clean");
  }

  tips.push(`平台：${platform}`);
  tips.push(`類型：${type}`);
  if (template) {
    tips.push(`參考模板：${template.category}`);
    tips.push(`技巧：${template.keyTechnique}`);
  }

  return { content, imagePrompt, tips };
}