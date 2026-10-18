type SectionIntroProps = {
  eyebrow: string;
  title: string;
  body?: string;
  inverse?: boolean;
};

export function SectionIntro({ eyebrow, title, body, inverse = false }: SectionIntroProps) {
  return (
    <div className={`section-intro ${inverse ? "section-intro--inverse" : ""}`}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {body ? <p className="section-intro__body">{body}</p> : null}
    </div>
  );
}
