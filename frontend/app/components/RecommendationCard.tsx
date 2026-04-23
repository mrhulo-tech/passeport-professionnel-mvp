type RecommendationCardProps = {
  recommendations: string[];
};

export default function RecommendationCard({
  recommendations,
}: RecommendationCardProps) {
  return (
    <ul className="recommendation-list">
      {recommendations.map((recommendation) => (
        <li key={recommendation}>{recommendation}</li>
      ))}
    </ul>
  );
}
