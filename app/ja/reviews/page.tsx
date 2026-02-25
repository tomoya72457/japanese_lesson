import LayoutWrapper from "@/app/components/shared/LayoutWrapper";
import ReviewsPageContent from "@/app/components/reviews/ReviewsPageContent";

export const metadata = {
  title: "Student Reviews | Kind Japanese",
  description: "受講生の声",
};

export default function Page() {
  return (
    <LayoutWrapper>
      <ReviewsPageContent locale="ja" />
    </LayoutWrapper>
  );
}
