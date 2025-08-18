import {
  Cpu,
  Fingerprint,
  Pencil,
  Settings2,
  Sparkles,
  Zap,
} from "lucide-react";

export default function Features() {
  return (
    <section id="features" className="py-12 md:py-20">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <h2 className="text-balance text-4xl font-medium lg:text-5xl">
            Features to help you stay organized
          </h2>
          <p>
            From quick notes to detailed outlines, our app provides the tools
            you need to capture, organize, and access your thoughts seamlessly
            across all your devices.
          </p>
        </div>

        <div className="relative mx-auto grid max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Zap className="size-4" />
              <h3 className="text-sm font-medium">Quick Capture</h3>
            </div>
            <p className="text-sm">
              Jot down ideas and thoughts in seconds. Never let a great idea
              slip away.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Cpu className="size-4" />
              <h3 className="text-sm font-medium">Powerful Search</h3>
            </div>
            <p className="text-sm">
              Find any note instantly with our blazing-fast, intelligent search
              function.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Fingerprint className="size-4" />
              <h3 className="text-sm font-medium">Secure & Private</h3>
            </div>
            <p className="text-sm">
              Your notes are your business. We ensure your data is always safe
              and secure.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Pencil className="size-4" />
              <h3 className="text-sm font-medium">Customizable</h3>
            </div>
            <p className="text-sm">
              Personalize your notes with colors, fonts, and layouts to fit your
              style.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Settings2 className="size-4" />
              <h3 className="text-sm font-medium">Cross-Platform Sync</h3>
            </div>
            <p className="text-sm">
              Access your notes from any device, anywhere. Your data is always
              in sync.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Sparkles className="size-4" />
              <h3 className="text-sm font-medium">Smart Organization</h3>
            </div>
            <p className="text-sm">
              Use tags and notebooks to keep your notes perfectly categorized.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
