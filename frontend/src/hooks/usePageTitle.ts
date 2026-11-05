import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';

import { PANEL_TITLE_KEYS } from '@/routes/panelRoutes';

export function usePageTitle() {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    const key = PANEL_TITLE_KEYS[pathname];
    const title = key ? t(key) : '3X-UI';
    document.title = title;
  }, [pathname, t]);
}
