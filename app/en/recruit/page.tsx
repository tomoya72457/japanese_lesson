import LayoutWrapper from "@/app/components/shared/LayoutWrapper";
import RecruitPageContent from "@/app/components/recruit/RecruitPageContent";

export const metadata = {
  title: "Instructor Recruitment | Kind Japanese",
  description: "We are looking for instructors with Japanese language qualifications.",
};

export default function Page() {
  return (
    <LayoutWrapper>
      <RecruitPageContent locale="en" />
    </LayoutWrapper>
  );
}
