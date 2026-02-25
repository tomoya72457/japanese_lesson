import LayoutWrapper from "@/app/components/shared/LayoutWrapper";
import ContactPageContent from "@/app/components/contact/ContactPageContent";

export const metadata = {
  title: "お問い合わせ | Kind Japanese",
  description: "ご質問・ご相談は公式インスタグラムのDMからお気軽にどうぞ。",
};

export default function Page() {
  return (
    <LayoutWrapper>
      <ContactPageContent locale="ja" />
    </LayoutWrapper>
  );
}
