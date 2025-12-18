export type SlideTheme = "a" | "b" | "c" | "d";

export interface Slide {
  id: string;
  title: string;
  subtitle: string;
  statLabel?: string;
  statValue?: string | number;
  theme: SlideTheme;
  details?: string[];
}

export interface WrappedData {
  year: number;
  companyName: string;
  slides: Slide[];
}

export const wrappedData: WrappedData = {
  year: 2025,
  companyName: "Iseehear",
  slides: [
    {
      id: "intro",
      title: "Iseehear Wrapped 2025",
      subtitle: "Reflecting on a year of growth and learning",
      theme: "a",
    },
    {
      id: "pride-individual",
      title: "What I'm Most Proud Of",
      subtitle: "Individually - My personal achievements",
      theme: "a",
      details: [
        "What are you most proud of accomplishing this year?",
        "And why are you most proud of this?",
      ],
    },
    {
      id: "pride-team",
      title: "What I'm Most Proud Of",
      subtitle: "As a Team - Our collective successes",
      theme: "a",
      details: [
        "What do you think we collectively did well this year?",
        "And why are you most proud of this?",
      ],
    },
    {
      id: "pride-company",
      title: "What I'm Most Proud Of",
      subtitle: "As a Company - Organization-wide accomplishments",
      theme: "a",
      details: [
        "What company-wide accomplishments made you proud in 2025?",
        "And why are you most proud of this?",
      ],
    },
    {
      id: "disappointments-individual",
      title: "Where We Didn't Live Up to Expectations",
      subtitle: "Individually - Areas for personal growth",
      theme: "b",
      details: [
        "Where do you feel you didn't meet your own expectations this year?",
        "What contributed to that?",
      ],
    },
    {
      id: "disappointments-team",
      title: "Where We Didn't Live Up to Expectations",
      subtitle: "As a Team - Improving collaboration",
      theme: "b",
      details: [
        "Where could our collaboration, communication, or execution have been better?",
        "How can we improve?",
      ],
    },
    {
      id: "disappointments-company",
      title: "Where We Didn't Live Up to Expectations",
      subtitle: "As a Company - Organizational challenges",
      theme: "b",
      details: [
        "Where do you feel we didn't live up to expectations at the company level?",
        "What do you think the root causes were?",
      ],
    },
    {
      id: "excitement-individual",
      title: "What I'm Most Excited About for 2026",
      subtitle: "Individually - Personal growth and opportunities",
      theme: "c",
      details: [
        "What are you personally excited about going into 2026?",
        "Why?",
      ],
    },
    {
      id: "excitement-team",
      title: "What I'm Most Excited About for 2026",
      subtitle: "As a Team - Future momentum and changes",
      theme: "c",
      details: [
        "What future momentum or changes excite you about our team in 2026?",
        "Why?",
      ],
    },
    {
      id: "excitement-company",
      title: "What I'm Most Excited About for 2026",
      subtitle: "As a Company - Direction and evolution",
      theme: "c",
      details: [
        "What part of our direction or evolution excites you the most for 2026?",
        "Why?",
      ],
    },
    {
      id: "bonus",
      title: "Bonus Reflections",
      subtitle: "Additional insights and ideas",
      theme: "d",
      details: [
        "Anything else you want to share?",
        "Any additional reflections, ideas, or insights to help us get better?",
      ],
    },
  ],
};

// CTA link constant - update this with your actual link
export const CTA_LINK = "https://example.com/wrapped-answers";
