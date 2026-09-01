import DefaultLayout from "@/layouts/default";
import { News } from "@/components/news";

export default function NewsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-2xl w-full justify-center">
          <News noScrollShadow />
        </div>
      </section>
    </DefaultLayout>
  );
}

