import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Ready to Start Taking Notes?
          </h2>
          <p className="mt-4">
            Join the others users who have found a smarter way to capture and
            organize their thoughts.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/get-started">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Join</span>
                  <ArrowRight className="size-4" />
                </div>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
