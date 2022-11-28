//
// Swiss QR Bill Generator
// Copyright (c) 2022 Manuel Bleichenbacher
// Licensed under MIT License
// https://opensource.org/licenses/MIT
//

import { Button, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import React from 'react';
import { useTranslation } from 'react-i18next';

/**
 * UI language
 */
interface Language {
  // ISO language code
  code: string;
  // Native language name (will not be translated)
  nativeName: string;
}

const languages: Language[] = [
  {
    code: 'en',
    nativeName: 'English',
  },
  {
    code: 'de',
    nativeName: 'Deutsch',
  },
];

/**
 * Settings page (for selecting the language)
 */
const Settings: React.FC<{}> = _props => {

  const { t, i18n } = useTranslation();

  return (
    <Grid container spacing={2}>
      <Grid xs={12}><Typography variant='h6'>{t('settingsLanguage')}</Typography></Grid>
      {
        languages.map((lang: Language) => (
          <Grid key={lang.code}>
            <Button variant='contained' disabled={lang.code === i18n.language} onClick={() => i18n.changeLanguage(lang.code)}>{lang.nativeName}</Button>
          </Grid>
        ))
      }
    </Grid>
  );
}

export default Settings;
