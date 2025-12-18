/**
 * Iseehear Wrapped 2025 - Interactive Landing Page
 *
 * To edit slides:
 * - Modify src/data/wrappedData.ts
 * - Add/remove/edit slides in the slides array
 * - Each slide supports: title, subtitle, statLabel, statValue, theme, and details
 *
 * To update the CTA link:
 * - Edit the CTA_LINK constant in src/data/wrappedData.ts
 */

import StorySlider from "./components/StorySlider";
import { wrappedData, CTA_LINK } from "./data/wrappedData";

function App() {
  // Handle CTA button click on the last slide
  const handleCTAClick = () => {
    window.open(CTA_LINK, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="w-full h-screen bg-black">
      <StorySlider
        slides={wrappedData.slides}
        ctaLink={CTA_LINK}
        onCTAClick={handleCTAClick}
      />
    </div>
  );
}

export default App;
