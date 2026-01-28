import { Hero } from "@/components/sections/Hero";
import { Listings } from "@/components/sections/Listings";
import { LeadForm } from "@/components/sections/LeadForm";

export default function Page() {
  return (
    <main className="text-slate-900">
      <Hero />
      <Listings />
      <LeadForm />

      <footer className="mx-auto max-w-6xl px-4 py-10 text-sm text-slate-600">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Luxury Realty</div>
          <div className="flex gap-4">
            <a className="hover:text-slate-900" href="#listings">Listings</a>
            <a className="hover:text-slate-900" href="#lead">Lead Form</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
