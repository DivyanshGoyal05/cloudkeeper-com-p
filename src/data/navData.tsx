import React from "react";

interface DropdownItem {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

export const solutionsItems: DropdownItem[] = [
  {
    icon: (
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-600 text-2xl">
        ☁️
      </span>
    ),
    title: "CloudKeeper AZ",
    desc: "End-to-end AWS cost optimization with savings up to 25%",
  },
  {
    icon: (
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-600 text-2xl">
        💎
      </span>
    ),
    title: "CloudKeeper EDP+",
    desc: "EDP negotiation and management for maximum AWS savings",
  },
  {
    icon: (
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-600 text-2xl">
        🔍
      </span>
    ),
    title: "CloudKeeper Lens",
    desc: "Cloud cost visibility and analytics platform",
  },
  {
    icon: (
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-600 text-2xl">
        ⚡
      </span>
    ),
    title: "CloudKeeper Tune",
    desc: "FinOps automation and plug-ins for AWS",
  },
];

export const platformsItems: DropdownItem[] = [
  {
    icon: (
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-600 text-2xl">
        📊
      </span>
    ),
    title: "CloudKeeper Axis",
    desc: "Automated SaaS platform for AWS cost optimization",
  },
  {
    icon: (
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-600 text-2xl">
        👁️
      </span>
    ),
    title: "CloudKeeper Lens",
    desc: "Cloud cost visibility and analytics platform",
  },
  {
    icon: (
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-600 text-2xl">
        🎯
      </span>
    ),
    title: "CloudKeeper Tune",
    desc: "FinOps automation and plug-ins for AWS",
  },
];

export const capabilitiesItems: DropdownItem[] = [
  {
    icon: (
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-600 text-2xl">
        💰
      </span>
    ),
    title: "Rate Optimization",
    desc: "Maximize savings with reserved instances, savings plans, and spot instances",
  },
  {
    icon: (
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-600 text-2xl">
        ⚡
      </span>
    ),
    title: "Usage Optimization",
    desc: "Identify and eliminate unused resources, right-size workloads",
  },
  {
    icon: (
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-600 text-2xl">
        🛠️
      </span>
    ),
    title: "Cloud Consulting",
    desc: "Expert guidance and 24x7 support for your cloud journey",
  },
  {
    icon: (
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-600 text-2xl">
        📊
      </span>
    ),
    title: "Cost Visibility",
    desc: "Unified dashboard for spend analysis, budgeting, and forecasting",
  },
];

export const insightsItems: DropdownItem[] = [
  {
    icon: (
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-600 text-2xl">
        📚
      </span>
    ),
    title: "Blog",
    desc: "Latest insights and updates from our cloud experts",
  },
  {
    icon: (
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-600 text-2xl">
        📊
      </span>
    ),
    title: "Case Studies",
    desc: "Real-world success stories from our customers",
  },
  {
    icon: (
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-600 text-2xl">
        🎥
      </span>
    ),
    title: "Webinars",
    desc: "Live and recorded sessions on cloud cost optimization",
  },
  {
    icon: (
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-600 text-2xl">
        📰
      </span>
    ),
    title: "News & Press",
    desc: "Latest news and press releases about CloudKeeper",
  },
];
