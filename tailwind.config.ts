import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
    './hooks/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      // ── Fonts ──────────────────────────────────────────────────────
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"DM Mono"', 'ui-monospace', 'monospace'],
        display: ['Syne', '"DM Sans"', 'system-ui', 'sans-serif'],
      },

      // ── Design tokens ──────────────────────────────────────────────
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        charcoal: {
          1: '#0a0a0b',
          2: '#111113',
          3: '#18181b',
          4: '#1f1f23',
          5: '#27272a',
        },
      },

      // ── Spacing ────────────────────────────────────────────────────
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },

      // ── Border radius ──────────────────────────────────────────────
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },

      // ── Background images ──────────────────────────────────────────
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-purple':
          'linear-gradient(135deg, #a78bfa 0%, #7c3aed 50%, #c4b5fd 100%)',
        'gradient-mixed':
          'linear-gradient(135deg, #fff 0%, #a78bfa 50%, #fff 100%)',
      },

      // ── Custom animations ──────────────────────────────────────────
      animation: {
        'spin-slow':     'spin 10s linear infinite',
        'spin-reverse':  'spin 10s linear infinite reverse',
        'float':         'float 6s ease-in-out infinite',
        'float-slow':    'float 10s ease-in-out infinite',
        'glow':          'glow 2.5s ease-in-out infinite alternate',
        'shimmer':       'shimmer 2.5s linear infinite',
        'pulse-slow':    'pulse 3s cubic-bezier(0.4,0,0.6,1) infinite',
        'ping-slow':     'ping 2s cubic-bezier(0,0,0.2,1) infinite',
        'gradient-shift': 'gradientShift 4s ease infinite',
      },

      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-18px)' },
        },
        glow: {
          '0%':   { boxShadow: '0 0 5px rgba(139,92,246,0.3)' },
          '100%': { boxShadow: '0 0 25px rgba(139,92,246,0.8)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        gradientShift: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%':     { backgroundPosition: '100% 50%' },
        },
      },

      // ── Box shadows ────────────────────────────────────────────────
      boxShadow: {
        'glow-sm':    '0 0 15px rgba(139,92,246,0.2)',
        'glow-md':    '0 0 30px rgba(139,92,246,0.3)',
        'glow-lg':    '0 0 60px rgba(139,92,246,0.4)',
        'glow-xl':    '0 0 100px rgba(139,92,246,0.5)',
        'card':       '0 8px 32px rgba(0,0,0,0.4)',
        'card-hover': '0 20px 60px rgba(0,0,0,0.6)',
        'glass':      '0 8px 32px rgba(0,0,0,0.37), inset 0 1px 0 rgba(255,255,255,0.05)',
        'inner-glow': 'inset 0 1px 0 rgba(255,255,255,0.08)',
        'purple':     '0 8px 30px rgba(139,92,246,0.25)',
        'purple-lg':  '0 16px 60px rgba(139,92,246,0.35)',
      },

      // ── Backdrop blur ──────────────────────────────────────────────
      backdropBlur: {
        xs:  '2px',
        sm:  '4px',
        md:  '12px',
        lg:  '20px',
        xl:  '40px',
        '2xl': '60px',
      },

      // ── Typography ─────────────────────────────────────────────────
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem' }],
      },

      // ── Z-index scale ──────────────────────────────────────────────
      zIndex: {
        '60':   '60',
        '70':   '70',
        '80':   '80',
        '90':   '90',
        '100':  '100',
        '200':  '200',
        '9999': '9999',
      },
    },
  },
  plugins: [],
}

export default config
