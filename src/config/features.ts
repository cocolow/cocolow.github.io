/**
 * Feature flags for toggling parts of the site.
 * Flip a value to hide/show a feature publicly without deleting code.
 */
export const features = {
  /** When false: hides Services nav links and redirects /services to home. */
  showServices: false,
} as const;
