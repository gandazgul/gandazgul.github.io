type BadgeListProps = {
  items: string[];
  featured?: boolean;
};

export function BadgeList({ items, featured = false }: BadgeListProps) {
  return (
    <ul className="badge-list" aria-label="Technologies">
      {items.map((item) => (
        <li key={item} {...{ "is-": "badge", "variant-": featured ? "foreground0" : "background1" }}>
          {item}
        </li>
      ))}
    </ul>
  );
}
