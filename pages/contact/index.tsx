import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Components from "../../components";

export const Offer = () => {
    const { t } = useTranslation('common');

    return (
        <Components.Container.Content>
            {t('contact')}
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

export default Offer