import Section from "@/components/Section";

export default function ContactSection() {
  return (
    <Section id="contact" title="Contact">
      <div className="mx-auto w-full max-w-xl">
        <p className="mb-6 text-center">
          Please contact me directly at alex.islas.v2@gmail.com or through this
          form.
        </p>
        <form
          className="grid gap-4"
          action="https://formsubmit.co/alex.islas.v2@gmail.com"
          method="post"
        >
          <input type="hidden" name="_subject" value="New portfolio contact" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <label className="grid gap-2">
            <span className="text-sm font-medium">Name</span>
            <input
              className="w-full rounded-md border bg-brand-red-subtle text-white border-black/10 px-3 py-2"
              type="text"
              name="name"
              autoComplete="name"
              placeholder="Your name"
              required
            />
          </label>
          <label className="grid gap-2">
            <span className="text-sm font-medium">Email</span>
            <input
              className="w-full rounded-md border bg-brand-red-subtle text-white border-black/10 px-3 py-2"
              type="email"
              name="email"
              autoComplete="email"
              placeholder="you@email.com"
              required
            />
          </label>
          <label className="grid gap-2">
            <span className="text-sm font-medium">Message</span>
            <textarea
              className="min-h-32 w-full rounded-md border bg-brand-red-subtle text-white border-black/10 px-3 py-2"
              name="message"
              placeholder="How can I help?"
              required
            />
          </label>
          <button
            className="relative cursor-pointer inline-flex items-center justify-center rounded-md bg-brand-red px-4 py-2 text-white focus:bg-red-950 active:translate-y-1 transition duration-100 "
            type="submit"
          >
            Send message
          </button>
        </form>
      </div>
    </Section>
  );
}
