import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('system'); // 'light', 'dark', or 'system'
  const [resolvedTheme, setResolvedTheme] = useState('light'); // actual applied theme

  // Function to get system preference
  const getSystemTheme = () => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  };

  // Function to apply theme to document
  const applyTheme = (themeToApply) => {
    const root = document.documentElement;
    
    if (themeToApply === 'dark') {
      root.classList.add('dark');
      setResolvedTheme('dark');
    } else {
      root.classList.remove('dark');
      setResolvedTheme('light');
    }
  };

  // Initialize theme on mount
  useEffect(() => {
    // Get saved theme from localStorage or default to 'system'
    const savedTheme = localStorage.getItem('theme') || 'system';
    setTheme(savedTheme);

    // Apply initial theme
    if (savedTheme === 'system') {
      const systemTheme = getSystemTheme();
      applyTheme(systemTheme);
    } else {
      applyTheme(savedTheme);
    }

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleSystemThemeChange = (e) => {
      // Only apply system theme if user is using system preference
      if (savedTheme === 'system') {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, []); // Empty dependency array for initial setup

  // Update theme when it changes
  useEffect(() => {
    if (theme === 'system') {
      const systemTheme = getSystemTheme();
      applyTheme(systemTheme);
    } else {
      applyTheme(theme);
    }
  }, [theme]);

  // Toggle theme function - cycles through light -> dark -> system
  const toggleTheme = () => {
    let newTheme;
    
    if (theme === 'light') {
      newTheme = 'dark';
    } else if (theme === 'dark') {
      newTheme = 'system';
    } else {
      newTheme = 'light';
    }

    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Set specific theme
  const setSpecificTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const contextValue = {
    theme,
    resolvedTheme,
    toggleTheme,
    setTheme: setSpecificTheme,
    isSystemTheme: theme === 'system',
    isDark: resolvedTheme === 'dark',
    isSystem: theme === 'system'
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};