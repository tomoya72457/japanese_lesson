import LayoutWrapper from "@/app/components/shared/LayoutWrapper";
import LegalPageContent from "@/app/components/legal/LegalPageContent";

export const metadata = {
  title: "Legal Notice | Kind Japanese",
  description: "Legal Notice (Specified Commercial Transaction Act)",
};

export default function Page() {
  return (
    <LayoutWrapper>
      <LegalPageContent locale="en" />
    </LayoutWrapper>
  );
}
