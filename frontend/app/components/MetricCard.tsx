type MetricCardProps = {
  label: string;
  value: number;
  helper: string;
};

export default function MetricCard({
  label,
  value,
  helper,
}: MetricCardProps) {
  return (
    <article className="metric-card">
      <p className="metric-card__label">{label}</p>
      <p className="metric-card__value">{value}%</p>
      <p className="metric-card__helper">{helper}</p>
    </article>
  );
}
