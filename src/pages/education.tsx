import DefaultLayout from "@/layouts/default";
import { Education } from "@/components/education";

export default function EducationPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-2xl w-full justify-center">
          <div className="text-xl font-bold mb-4">Education Experiences</div>
          <Education />
        </div>
      </section>
    </DefaultLayout>
  );
}

