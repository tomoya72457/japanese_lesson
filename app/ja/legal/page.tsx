import LayoutWrapper from "@/app/components/shared/LayoutWrapper";
import LegalPageContent from "@/app/components/legal/LegalPageContent";

export const metadata = {
  title: "特定商取引法に基づく表記 | Kind Japanese",
  description: "特定商取引法に基づく表記",
};

export default function Page() {
  return (
    <LayoutWrapper>
      <LegalPageContent locale="ja" />
    </LayoutWrapper>
  );
}
