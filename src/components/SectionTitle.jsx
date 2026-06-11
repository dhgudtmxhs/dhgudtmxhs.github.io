export default function SectionTitle({ children, id }) {
  return (
    <h2 className="doc-section-title" id={id}>
      {children}
    </h2>
  );
}
