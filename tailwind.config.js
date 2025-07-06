/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  
  // Safelist expandida para garantir que as classes sejam incluídas
  safelist: [
    // Cores primárias
    'bg-primary', 'bg-primary-50', 'bg-primary-100', 'bg-primary-200', 'bg-primary-300',
    'bg-primary-400', 'bg-primary-500', 'bg-primary-600', 'bg-primary-700', 'bg-primary-800', 'bg-primary-900',
    
    // Backgrounds
    'bg-background', 'bg-background-50', 'bg-background-100', 'bg-background-200', 'bg-background-300',
    'bg-card', 'bg-surface', 'bg-surface-elevated',
    
    // Textos
    'text-primary', 'text-secondary', 'text-tertiary', 'text-muted', 'text-inverse', 'text-on-primary',
    'text-color-primary', 'text-color-secondary', 'text-color-accent', 'text-success', 'text-warning', 'text-error', 'text-info',
    
    // Bordas
    'border-subtle', 'border-light', 'border-medium', 'border-strong', 'border-focus',
    'border-color-primary', 'border-color-secondary',
    
    // Estados semânticos
    'bg-success', 'bg-success-light', 'bg-warning', 'bg-warning-light', 
    'bg-error', 'bg-error-light', 'bg-info', 'bg-info-light',
    'text-success', 'text-warning', 'text-error', 'text-info',
    'border-success', 'border-warning', 'border-error', 'border-info',
    
    // Hover states
    'hover:bg-primary-500', 'hover:bg-primary-600', 'hover:bg-primary-700',
    'hover:border-medium', 'hover:border-strong', 'hover:shadow-md', 'hover:shadow-lg',
    
    // Focus states
    'focus:border-focus', 'focus:ring',
    
    // Sombras
    'shadow-xs', 'shadow-sm', 'shadow-md', 'shadow-lg', 'shadow-xl', 'shadow-2xl', 'shadow-colored',
    
    // Opacidades
    'bg-primary/90', 'bg-primary/80', 'bg-primary/70', 'bg-primary/50', 'bg-primary/20', 'bg-primary/10',
    
    // Transições
    'transition-colors', 'transition-shadow', 'transition-all', 'theme-transition',
    
    // Utilitários especiais
    'glass-effect', 'bg-gradient-primary', 'bg-gradient-warm',
  ],
  
  theme: {
    extend: {
      // === SISTEMA DE CORES COMPLETO ===
      colors: {
        // Cores primárias com escala completa
        primary: {
          DEFAULT: 'var(--color-primary)',
          50: 'var(--color-primary-50)',
          100: 'var(--color-primary-100)',
          200: 'var(--color-primary-200)',
          300: 'var(--color-primary-300)',
          400: 'var(--color-primary-400)',
          500: 'var(--color-primary-500)',
          600: 'var(--color-primary-600)',
          700: 'var(--color-primary-700)',
          800: 'var(--color-primary-800)',
          900: 'var(--color-primary-900)',
        },
        
        // Cores secundárias e de destaque
        secondary: 'var(--color-secondary)',
        accent: {
          DEFAULT: 'var(--color-accent)',
          warm: 'var(--color-accent-warm)',
        },
        
        // Sistema de backgrounds
        background: {
          DEFAULT: 'var(--color-background)',
          50: 'var(--color-background-50)',
          100: 'var(--color-background-100)',
          200: 'var(--color-background-200)',
          300: 'var(--color-background-300)',
        },
        
        // Superfícies e cards
        card: 'var(--color-card)',
        surface: {
          DEFAULT: 'var(--color-surface)',
          elevated: 'var(--color-surface-elevated)',
        },
        
        // Sistema de textos
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          tertiary: 'var(--color-text-tertiary)',
          muted: 'var(--color-text-muted)',
          inverse: 'var(--color-text-inverse)',
          'on-primary': 'var(--color-text-on-primary)',
        },
        
        // Sistema de bordas
        border: {
          subtle: 'var(--color-border-subtle)',
          light: 'var(--color-border-light)',
          medium: 'var(--color-border-medium)',
          strong: 'var(--color-border-strong)',
          focus: 'var(--color-border-focus)',
        },
        
        // Estados semânticos
        success: {
          DEFAULT: 'var(--color-success)',
          bg: 'var(--color-success-bg)',
        },
        warning: {
          DEFAULT: 'var(--color-warning)',
          bg: 'var(--color-warning-bg)',
        },
        error: {
          DEFAULT: 'var(--color-error)',
          bg: 'var(--color-error-bg)',
        },
        info: {
          DEFAULT: 'var(--color-info)',
          bg: 'var(--color-info-bg)',
        },
      },
      
      // === SISTEMA DE SOMBRAS ===
      boxShadow: {
        'xs': 'var(--shadow-xs)',
        'sm': 'var(--shadow-sm)',
        'md': 'var(--shadow-md)',
        'lg': 'var(--shadow-lg)',
        'xl': 'var(--shadow-xl)',
        '2xl': 'var(--shadow-2xl)',
        'colored': 'var(--shadow-colored)',
      },
      
      // === BORDER RADIUS ===
      borderRadius: {
        'sm': 'var(--border-radius-sm)',
        'md': 'var(--border-radius-md)',
        'lg': 'var(--border-radius-lg)',
        'xl': 'var(--border-radius-xl)',
        '2xl': 'var(--border-radius-2xl)',
      },
      
      // === TRANSIÇÕES OTIMIZADAS ===
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      
      transitionDuration: {
        '150': '150ms',
        '200': '200ms',
        '250': '250ms',
        '300': '300ms',
      },
      
      // === BACKGROUNDS GRADIENTES ===
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, var(--color-primary-500), var(--color-primary-700))',
        'gradient-warm': 'linear-gradient(135deg, var(--color-accent), var(--color-accent-warm))',
        'gradient-radial': 'radial-gradient(ellipse at center, var(--color-primary-500), var(--color-primary-800))',
      },
      
      // === BACKDROP FILTERS ===
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
      },
      
      // === ANIMAÇÕES ===
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'bounce-gentle': 'bounceGentle 0.6s ease-out',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 20%, 53%, 80%, 100%': { transform: 'translate3d(0,0,0)' },
          '40%, 43%': { transform: 'translate3d(0, -5px, 0)' },
          '70%': { transform: 'translate3d(0, -3px, 0)' },
          '90%': { transform: 'translate3d(0, -1px, 0)' },
        },
      },
      
      // === TYPOGRAPHY ===
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
    },
  },
  
  plugins: [
    // Plugin personalizado para utilitários extras
    function({ addUtilities, theme }) {
      const newUtilities = {
        // Glass effect utility
        '.glass-effect': {
          background: `rgb(from var(--color-background) r g b / 0.8)`,
          backdropFilter: 'blur(12px)',
          border: `1px solid rgb(from var(--color-border-light) r g b / 0.2)`,
        },
        
        // Focus ring utility
        '.focus-ring': {
          '&:focus': {
            outline: 'none',
            boxShadow: `0 0 0 3px rgb(from var(--color-primary-500) r g b / 0.1)`,
          },
        },
        
        // Hover lift effect
        '.hover-lift': {
          transition: 'transform 0.15s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-1px)',
            boxShadow: 'var(--shadow-lg)',
          },
        },
        
        // Button base styles
        '.btn-base': {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 'var(--border-radius-md)',
          fontSize: '0.875rem',
          fontWeight: '500',
          transition: 'all 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
          cursor: 'pointer',
          '&:disabled': {
            opacity: '0.5',
            cursor: 'not-allowed',
          },
        },
        
        // Input base styles
        '.input-base': {
          width: '100%',
          borderRadius: 'var(--border-radius-md)',
          border: '1px solid var(--color-border-light)',
          backgroundColor: 'var(--color-background)',
          color: 'var(--color-text-primary)',
          fontSize: '0.875rem',
          transition: 'all 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:focus': {
            outline: 'none',
            borderColor: 'var(--color-border-focus)',
            boxShadow: `0 0 0 3px rgb(from var(--color-primary-500) r g b / 0.1)`,
          },
          '&::placeholder': {
            color: 'var(--color-text-muted)',
          },
        },
      }
      
      addUtilities(newUtilities)
    },
  ],
  
  // Configurações de variáveis escuras
  darkMode: ['class', '[data-theme="dark"]'],
}