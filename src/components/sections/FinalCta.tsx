import { ButtonLink } from "@/components/ui/ButtonLink";

export function FinalCta() {
  return (
    <section className="final-cta">
      <div className="final-cta__image" aria-hidden="true" />
      <div className="final-cta__overlay" aria-hidden="true" />
      <div className="container final-cta__content">
        <div>
          <p className="eyebrow eyebrow--orange">LET&apos;S TALK</p>
          <h2>Have a technology problem worth solving?</h2>
          <p>
            Whether you&apos;re looking to build, automate, secure or scale, we&apos;d
            like to understand the problem and explore how we can help.
          </p>
        </div>
        <ButtonLink href="/contact" variant="primary" showArrow={false}>Start a conversation</ButtonLink>
      </div>
    </section>
  );
}
