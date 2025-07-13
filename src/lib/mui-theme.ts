import { createTheme } from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';

// Function to get css variables for the current theme
const getCSSVariable = (variable: string): string => {
  if (typeof window !== 'undefined') {
    return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
  }
  return '';
};

// Mapping custom theme colors for Material UI
export const createMuiThemeFromCustom = (): Theme => {
  const primaryColor = getCSSVariable('--color-primary') || '#3b82f6';
  const secondaryColor = getCSSVariable('--color-secondary') || '#6366f1';
  const backgroundColor = getCSSVariable('--color-background') || '#ffffff';
  const cardColor = getCSSVariable('--color-card') || '#ffffff';

  const textPrimary = getCSSVariable('--color-text-primary') || '#1a202c';
  const textSecondary = getCSSVariable('--color-text-secondary') || '#4a5568';
  const textMuted = getCSSVariable('--color-text-muted') || '#a0aec0';
  const borderColor = getCSSVariable('--color-border-medium') || '#cbd5e1';
  const successColor = getCSSVariable('--color-success') || '#22c55e';
  const warningColor = getCSSVariable('--color-warning') || '#f59e0b';
  const errorColor = getCSSVariable('--color-error') || '#ef4444';
  const infoColor = getCSSVariable('--color-info') || '#3b82f6';

  return createTheme({
    palette: {
      mode: document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light',
      primary: {
        main: primaryColor,
        light: getCSSVariable('--color-primary-300') || '#93c5fd',
        dark: getCSSVariable('--color-primary-700') || '#1d4ed8',
        contrastText: getCSSVariable('--color-text-on-primary') || '#ffffff',
      },
      secondary: {
        main: secondaryColor,
        light: getCSSVariable('--color-primary-200') || '#bfdbfe',
        dark: getCSSVariable('--color-primary-800') || '#1e40af',
        contrastText: getCSSVariable('--color-text-on-primary') || '#ffffff',
      },
      background: {
        default: backgroundColor,
        paper: cardColor,
      },
      text: {
        primary: textPrimary,
        secondary: textSecondary,
      },
      success: {
        main: successColor,
        light: getCSSVariable('--color-success-bg') || '#f0fdf4',
      },
      warning: {
        main: warningColor,
        light: getCSSVariable('--color-warning-bg') || '#fffbeb',
      },
      error: {
        main: errorColor,
        light: getCSSVariable('--color-error-bg') || '#fef2f2',
      },
      info: {
        main: infoColor,
        light: getCSSVariable('--color-info-bg') || '#eff6ff',
      },
      divider: borderColor,
    },
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
      ].join(','),
      h1: {
        fontSize: '2.5rem',
        fontWeight: 700,
        color: textPrimary,
      },
      h2: {
        fontSize: '2rem',
        fontWeight: 600,
        color: textPrimary,
      },
      h3: {
        fontSize: '1.75rem',
        fontWeight: 600,
        color: textPrimary,
      },
      h4: {
        fontSize: '1.5rem',
        fontWeight: 600,
        color: textPrimary,
      },
      h5: {
        fontSize: '1.25rem',
        fontWeight: 600,
        color: textPrimary,
      },
      h6: {
        fontSize: '1rem',
        fontWeight: 600,
        color: textPrimary,
      },
      body1: {
        fontSize: '1rem',
        color: textPrimary,
      },
      body2: {
        fontSize: '0.875rem',
        color: textSecondary,
      },
      caption: {
        fontSize: '0.75rem',
        color: textMuted,
      },
    },
    shape: {
      borderRadius: parseInt(getCSSVariable('--border-radius-md') || '8'),
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: backgroundColor,
            color: textPrimary,
            transition: 'background-color 0.3s ease, color 0.3s ease',
          },
          '*': {
            boxSizing: 'border-box',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: cardColor,
            border: `1px solid ${borderColor}`,
            transition: 'all 0.3s ease',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontWeight: 600,
            borderRadius: parseInt(getCSSVariable('--border-radius-md') || '8'),
            transition: 'all 0.2s ease',
            '&:hover': {
              transform: 'translateY(-1px)',
            },
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              borderRadius: parseInt(getCSSVariable('--border-radius-md') || '8'),
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: parseInt(getCSSVariable('--border-radius-lg') || '12'),
          },
        },
      },
    },
  });
}; 