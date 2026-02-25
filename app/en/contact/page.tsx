import LayoutWrapper from "@/app/components/shared/LayoutWrapper";
import ContactPageContent from "@/app/components/contact/ContactPageContent";

export const metadata = {
  title: "Contact | Kind Japanese",
  description: "Feel free to reach out via DM on our official Instagram.",
};

export default function Page() {
  return (
    <LayoutWrapper>
      <ContactPageContent locale="en" />
    </LayoutWrapper>
  );
}
