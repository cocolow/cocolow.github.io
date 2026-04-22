/**
 * Feature flags for toggling parts of the site.
 * Flip a value to hide/show a feature publicly without deleting code.
 */
export const features = {
  /** When false: hides Services nav links and redirects /services to home. */
  showServices: false,
  /** When false: hides Art-category projects and the Art filter button. */
  showArtProjects: false,
  /** When false: hides the "Download Resume" button on the About page. */
  showResumeDownload: false,
  /** When false: hides the Featured Projects section on the home page. */
  showFeaturedProjects: false,
  /** When false: hides the TikTok Trust & Safety project (sensitive content). */
  showTiktokTrustSafety: false,
  /** When false: hides the mindline.sg project (work in progress, not yet rolled out). */
  showMindline: false,
  /** When false: hides the GitHub social icon in the navbar and footer. */
  showGithub: false,
} as const;
