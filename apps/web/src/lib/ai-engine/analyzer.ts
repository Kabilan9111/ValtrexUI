export interface AIAnalysisResult {
  industry: string;
  userType: string;
  features: string[];
  uxStyle: string;
}

export function analyzePrompt(prompt: string): AIAnalysisResult {
  const p = prompt.toLowerCase();
  
  // Heuristic matching
  let industry = 'SaaS';
  if (p.includes('ai') || p.includes('machine learning') || p.includes('neural')) industry = 'AI & Futuristic';
  else if (p.includes('finance') || p.includes('bank') || p.includes('trading')) industry = 'Finance';
  else if (p.includes('game') || p.includes('esports')) industry = 'Gaming';
  else if (p.includes('shop') || p.includes('commerce') || p.includes('store')) industry = 'Ecommerce';
  else if (p.includes('health') || p.includes('medical') || p.includes('doctor')) industry = 'Healthcare';
  else if (p.includes('school') || p.includes('education') || p.includes('learn')) industry = 'Education';
  else if (p.includes('luxury') || p.includes('premium')) industry = 'Luxury';
  else if (p.includes('enterprise') || p.includes('corporate') || p.includes('b2b')) industry = 'Enterprise';

  let userType = 'General Users';
  if (p.includes('founder') || p.includes('startup')) userType = 'Founders';
  else if (p.includes('developer') || p.includes('engineer')) userType = 'Developers';
  else if (p.includes('executive') || p.includes('manager')) userType = 'Executives';
  else if (p.includes('student') || p.includes('teacher')) userType = 'Students/Educators';

  const features: string[] = [];
  if (p.includes('dashboard')) features.push('Dashboard');
  if (p.includes('analytics') || p.includes('chart')) features.push('Analytics');
  if (p.includes('billing') || p.includes('payment')) features.push('Billing');
  if (p.includes('setting') || p.includes('profile')) features.push('Settings');
  if (p.includes('agent') || p.includes('bot')) features.push('AI Agents');
  
  if (features.length === 0) {
    features.push('Dashboard', 'Settings'); // Defaults
  }

  let uxStyle = 'Modern & Clean';
  if (industry === 'AI & Futuristic') uxStyle = 'Dark & Neon';
  if (industry === 'Luxury') uxStyle = 'Premium & Minimal';
  if (industry === 'Gaming') uxStyle = 'High Contrast & Edgy';
  if (industry === 'Enterprise') uxStyle = 'Dense & Professional';

  return { industry, userType, features, uxStyle };
}
