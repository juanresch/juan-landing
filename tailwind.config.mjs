/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        'bg-alt': 'var(--bg-alt)',
        ink: 'var(--ink)',
        'ink-soft': 'var(--ink-soft)',
        'ink-muted': 'var(--ink-muted)',
        accent: 'var(--accent)',
        'accent-soft': 'var(--accent-soft)',
        'accent-warm': 'var(--accent-warm)',
        line: 'var(--line)',
      },
      fontFamily: {
        display: ['Inter Tight', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1240px',
        prose: '680px',
      },
      spacing: {
        section: 'var(--space-section)',
        group: 'var(--space-group)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        image: 'var(--radius-image)',
        pill: 'var(--radius-pill)',
      },
    },
  },
  plugins: [],
};
