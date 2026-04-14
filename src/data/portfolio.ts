export interface AppLink {
  platform: string
  url: string
}

export interface PortfolioItem {
  titleEn: string
  titleJa: string
  descEn: string
  descJa: string
  tech: string[]
  links: AppLink[]
}

export const portfolioItems: PortfolioItem[] = [
  {
    titleEn: 'Agriculture SNS App',
    titleJa: '農業向けSNSアプリ',
    descEn: 'Social networking app connecting farmers and agriculture professionals. Built real-time messaging, Stripe payment integration, and community features serving active users.',
    descJa: '農家と農業関係者をつなぐSNSアプリ。リアルタイムメッセージング、Stripe決済連携、コミュニティ機能を搭載。',
    tech: ['Vue', 'Ionic', 'Firebase', 'Stripe'],
    links: [
      { platform: 'iOS', url: 'https://x.gd/IisSK' },
      { platform: 'Android', url: 'https://play.google.com/store/apps/details?id=io.ionic.starter.village' }
    ]
  },
  {
    titleEn: 'Yield Daily',
    titleJa: 'Yield Daily',
    descEn: 'Daily yield calculation tool for financial analysis. Automates yield computations to streamline investment evaluation workflows.',
    descJa: '日次利回り計算ツール。利回り計算を自動化し、投資評価ワークフローを効率化。',
    tech: ['Python', 'GitHub Actions'],
    links: [
      { platform: 'GitHub', url: 'https://github.com/Mac709/yield_daily' }
    ]
  },
  {
    titleEn: 'HRDev Scout AI',
    titleJa: 'HRDev Scout AI',
    descEn: 'AI-powered scouting tool that analyzes developer profiles to assist HR teams in technical recruiting and talent assessment.',
    descJa: 'AI搭載の人材スカウトツール。開発者プロフィールを分析し、HR部門の技術採用を支援。',
    tech: ['Python', 'OpenAI API', 'LangChain'],
    links: [
      { platform: 'GitHub', url: 'https://github.com/Mac709/hrdev-scout-ai' }
    ]
  },
  {
    titleEn: 'Subsidy Match RAG',
    titleJa: 'Subsidy Match RAG',
    descEn: 'RAG-based matching tool that helps businesses find relevant government subsidies by semantically searching and ranking subsidy programs against company profiles.',
    descJa: 'RAGベースの補助金マッチングツール。企業プロフィールに基づき、関連する政府補助金を意味検索・ランキング。',
    tech: ['Python', 'LangChain', 'OpenAI API', 'Vector DB'],
    links: [
      { platform: 'GitHub', url: 'https://github.com/Mac709/subsidy-match-rag/' }
    ]
  }
]
