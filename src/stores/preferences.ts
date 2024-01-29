import { ColorTheme } from '$styles/color-theme';
import { defaultColorTheme } from '$styles/theme';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Peferences {
  color: ColorTheme;
}

export interface PreferencesStore {
  preferences: Peferences;
  updatePreferences: (preferences: Peferences) => void;
}

export const usePreferencesStore = create<PreferencesStore>()(
  persist(
    (set) => ({
      preferences: {
        color: defaultColorTheme,
      },

      updatePreferences: (preferences: Peferences) => {
        set((state) => ({
          ...state,
          preferences: { ...state.preferences, ...preferences },
        }));
      },
    }),
    {
      name: 'PREFERENCES',
    },
  ),
);
