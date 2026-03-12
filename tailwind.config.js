/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Pastel Neumorphic Colors
        'neo-light': '#f5f7fa',
        'neo-light-secondary': '#e8eef5',
        'neo-cream': '#e8e4d0',
        'neo-blue-light': '#a8c7f5',
        'neo-blue-lighter': '#d0dff8',
        
        // Dark Mode Neumomorphic
        'neo-dark': '#1a1a2e',
        'neo-dark-secondary': '#16213e',
        'neo-dark-accent': '#0f3460',
        
        // Accent Colors
        'neo-blue': '#3b82f6',
        'neo-blue-dark': '#1e3a8a',
        'neo-green': '#10b981',
        'neo-red': '#ef4444',
      },
      fontSize: {
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      },
      boxShadow: {
        // Neumorphic Shadows - Light Mode
        'neumorphic': '8px 8px 16px rgba(0, 0, 0, 0.08), -8px -8px 16px rgba(255, 255, 255, 0.6)',
        'neumorphic-soft': '4px 4px 12px rgba(0, 0, 0, 0.06), -4px -4px 12px rgba(255, 255, 255, 0.5)',
        'neumorphic-focus': '0 0 0 3px rgba(59, 130, 246, 0.2), 4px 4px 12px rgba(0, 0, 0, 0.06), -4px -4px 12px rgba(255, 255, 255, 0.5)',
        'neumorphic-active': 'inset 2px 2px 6px rgba(0, 0, 0, 0.1), inset -2px -2px 6px rgba(255, 255, 255, 0.8)',
        'neumorphic-pressed': 'inset 4px 4px 8px rgba(0, 0, 0, 0.1), inset -2px -2px 6px rgba(255, 255, 255, 0.7)',
        
        // Neumorphic Shadows - Dark Mode
        'neumorphic-dark': '8px 8px 16px rgba(0, 0, 0, 0.3), -8px -8px 16px rgba(255, 255, 255, 0.02)',
        'neumorphic-dark-soft': '4px 4px 12px rgba(0, 0, 0, 0.3), -4px -4px 12px rgba(255, 255, 255, 0.02)',
        'neumorphic-dark-active': 'inset 2px 2px 6px rgba(0, 0, 0, 0.3), inset -2px -2px 6px rgba(255, 255, 255, 0.05)',
        'inner-dark': 'inset 2px 2px 6px rgba(0, 0, 0, 0.3), inset -2px -2px 6px rgba(255, 255, 255, 0.05)',
      },
      borderRadius: {
        '3xl': '1.5rem',
        '2xl': '1.25rem',
      },
      animation: {
        'pulse-soft': 'pulse-soft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      opacity: {
        '05': '0.05',
        '08': '0.08',
        '15': '0.15',
      },
    },
  },
  plugins: [],
}
