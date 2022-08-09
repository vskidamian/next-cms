import type { NextPage } from "next";
import Components from '../components';
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Index: NextPage = () => {
  const { t } = useTranslation('common');

  return (
    <Components.Container.Content>
      {t('home-page')}
    </Components.Container.Content>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default Index;
