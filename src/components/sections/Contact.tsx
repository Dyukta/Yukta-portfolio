import { useState } from "react";
import { PaperCard } from "@/components/ui/PaperCard";
import { PillButton } from "@/components/ui/PillButton";
import { motion } from "framer-motion";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;

  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit() {
    setError("");

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      setError("Please fill all fields.");
      return;
    }

    if (!FORMSPREE_ENDPOINT) {
      setStatus("error");
      setError("Form is not configured properly.");
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
      });

      if (!res.ok) throw new Error("Failed to send message.");

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
      setError("Something went wrong. Try again.");
    }
  }

  return (
    <section id="contact" className="bg-page py-24 px-6">
      <div className="max-w-3xl mx-auto">

        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="font-shadows text-base text-olive mb-2">don't be a stranger</p>
          <h2 className="font-fraunces text-5xl font-bold text-ink scribble-underline">
            say hello
          </h2>
        </motion.div>

        <PaperCard>
          <div className="space-y-8">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="font-shadows text-base text-ink/70 block mb-2">
                  Enter your name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="input-dashed"
                />
              </div>
              <div>
                <label className="font-shadows text-base text-ink/70 block mb-2">
                  Enter your email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="input-dashed"
                />
              </div>
            </div>

            <div>
              <label className="font-shadows text-base text-ink/70 block mb-2">
                Send me a message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className="input-dashed resize-none w-full"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
              <p className="font-shadows text-base text-ink/80 leading-relaxed">
                {status === "sent"
                  ? "✓ message sent! ✿"
                  : status === "error"
                  ? `⚠ ${error}`
                  : "Let's get in touch 🌸"}
              </p>
              <PillButton
                variant="primary"
                onClick={handleSubmit}
                className={status === "sending" ? "opacity-60 pointer-events-none" : ""}
              >
                {status === "sending" ? "sending..." : status === "sent" ? "sent!" : "send it →"}
              </PillButton>
            </div>

          </div>
        </PaperCard>
      </div>
    </section>
  );
}