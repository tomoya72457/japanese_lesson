import LayoutWrapper from "@/app/components/shared/LayoutWrapper";
import ReviewsPageContent from "@/app/components/reviews/ReviewsPageContent";

export const metadata = {
  title: "Student Reviews | Kind Japanese",
  description: "What our students say",
};

export default function Page() {
  return (
    <LayoutWrapper>
      <ReviewsPageContent locale="en" />
    </LayoutWrapper>
  );
}
