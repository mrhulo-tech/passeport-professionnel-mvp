type IndicatorListProps = {
  indicators: string[];
};

export default function IndicatorList({
  indicators,
}: IndicatorListProps) {
  return (
    <ul className="indicator-list">
      {indicators.map((indicator) => (
        <li key={indicator}>{indicator}</li>
      ))}
    </ul>
  );
}
