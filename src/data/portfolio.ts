export interface AppLink {
  platform: string
  url: string
}

export interface PortfolioItem {
  title: string
  desc: string
  tech: string[]
  links: AppLink[]
}

export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Agriculture SNS App',
    desc: 'Social networking app connecting farmers and agriculture professionals. Built real-time messaging, Stripe payment integration, and community features serving active users.',
    tech: ['Vue', 'Ionic', 'Firebase', 'Stripe'],
    links: [
      { platform: 'iOS', url: 'https://x.gd/IisSK' },
      { platform: 'Android', url: 'https://play.google.com/store/apps/details?id=io.ionic.starter.village' }
    ]
  },
  {
    title: 'Yield Daily',
    desc: 'Daily yield calculation tool for financial analysis. Automates yield computations to streamline investment evaluation workflows.',
    tech: ['Python', 'GitHub Actions'],
    links: [
      { platform: 'GitHub', url: 'https://github.com/Mac709/yield_daily' }
    ]
  },
  {
    title: 'HRDev Scout AI',
    desc: 'AI-powered scouting tool that analyzes developer profiles to assist HR teams in technical recruiting and talent assessment.',
    tech: ['Python', 'OpenAI API', 'LangChain'],
    links: [
      { platform: 'GitHub', url: 'https://github.com/Mac709/hrdev-scout-ai' }
    ]
  },
  {
    title: 'Subsidy Match RAG',
    desc: 'RAG-based matching tool that helps businesses find relevant government subsidies by semantically searching and ranking subsidy programs against company profiles.',
    tech: ['Python', 'LangChain', 'OpenAI API', 'Vector DB'],
    links: [
      { platform: 'GitHub', url: 'https://github.com/Mac709/subsidy-match-rag/' }
    ]
  }
]
