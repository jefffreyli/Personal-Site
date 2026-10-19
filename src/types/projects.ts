export interface Project {
  title: string;
  /** Path to a screenshot in /public, or undefined to show a placeholder. */
  imageURL: string | undefined;
  body: string;
  tools: string[];
  demo: string | undefined;
  source: string | undefined;
}
