import { notFound } from "next/navigation";
import LayoutWrapper from "@/app/components/shared/LayoutWrapper";
import InstructorDetailContent, {
  INSTRUCTOR_SLUGS,
  type InstructorSlug,
} from "@/app/components/instructors/InstructorDetailContent";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return INSTRUCTOR_SLUGS.map((slug) => ({ slug }));
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  if (!INSTRUCTOR_SLUGS.includes(slug as InstructorSlug)) {
    notFound();
  }
  return (
    <LayoutWrapper>
      <InstructorDetailContent slug={slug as InstructorSlug} locale="ja" />
    </LayoutWrapper>
  );
}
