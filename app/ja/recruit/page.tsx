import LayoutWrapper from "@/app/components/shared/LayoutWrapper";
import RecruitPageContent from "@/app/components/recruit/RecruitPageContent";

export const metadata = {
  title: "講師募集 | Kind Japanese",
  description: "日本語の資格を持っている方を募集しています。",
};

export default function Page() {
  return (
    <LayoutWrapper>
      <RecruitPageContent locale="ja" />
    </LayoutWrapper>
  );
}
