import DefaultLayout from "@/layouts/default";
import { Honor } from "@/components/honor";

export default function HonorPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-2xl w-full justify-center">
          <Honor noScrollShadow />
        </div>
      </section>
    </DefaultLayout>
  );
}

