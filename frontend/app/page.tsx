import "./dashboard.css";
import IndicatorList from "./components/IndicatorList";
import MetricCard from "./components/MetricCard";
import RecommendationCard from "./components/RecommendationCard";
import UserSwitch from "./components/UserSwitch";

type DashboardData = {
  user_id: number;
  name: string;
  profile_type: string;
  target_path: string;
  progression_score: number;
  readiness_score: number;
  adaptability_score: number;
  indicators: string[];
  recommendations: string[];
};

const BACKEND_URL =
  process.env.BACKEND_URL ?? "https://passeport-professionnel-mvp.onrender.com";

async function getDashboardData(userId: string): Promise<DashboardData> {
  const response = await fetch(`${BACKEND_URL}/dashboard/${userId}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch dashboard data");
  }

  return response.json();
}

export default async function Home({
  searchParams,
}: {
  searchParams?: Promise<{ user?: string }>;
}) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const userId = resolvedSearchParams?.user === "2" ? "2" : "1";
  const data = await getDashboardData(userId);

  return (
    <main className="dashboard-page">
      <section className="hero-card">
        <div>
          <p className="hero-card__eyebrow">Passeport Professionnel MVP</p>
          <h1>Profil de préparation professionnelle</h1>
          <p className="hero-card__description">
            Démonstrateur MVP centré sur des données observables, des
            compétences transversales interprétables et des recommandations
            personnalisées pour la requalification, l’employabilité et la
            littératie IA.
          </p>
        </div>

        <div className="hero-card__actions">
          <UserSwitch currentUser={userId} />
        </div>
      </section>

      <section className="workflow-card">
        <p className="section-label">Logique du produit</p>
        <h2>Données → indicateurs → actions recommandées</h2>
        <p>
          Ce profil ne mesure pas l’intelligence. Il rend visibles des signaux
          d’apprentissage et de progression professionnelle à partir de tâches,
          d’activités et de compétences observables.
        </p>
      </section>

      <section className="profile-summary-card">
        <div className="profile-summary-card__header">
          <div>
            <p className="section-label">Profil affiché</p>
            <h2>{data.name}</h2>
          </div>
          <span className="profile-badge">{data.profile_type}</span>
        </div>

        <div className="profile-summary-card__meta">
          <div>
            <span className="meta-label">Parcours cible</span>
            <strong>{data.target_path}</strong>
          </div>
          <div>
            <span className="meta-label">Utilisateur</span>
            <strong>{data.user_id}</strong>
          </div>
        </div>
      </section>

      <section className="metrics-grid">
        <MetricCard
          label="Progression"
          value={data.progression_score}
          helper="Avancement observable dans le parcours"
        />
        <MetricCard
          label="Préparation"
          value={data.readiness_score}
          helper="Niveau actuel de préparation à la cible visée"
        />
        <MetricCard
          label="Adaptabilité"
          value={data.adaptability_score}
          helper="Capacité à évoluer dans un contexte de transformation"
        />
      </section>

      <section className="content-grid">
        <div className="content-card">
          <p className="section-label">Indicateurs clés</p>
          <h2>Lecture interprétable du profil</h2>
          <IndicatorList indicators={data.indicators} />
        </div>

        <div className="content-card">
          <p className="section-label">Recommandations</p>
          <h2>Actions proposées</h2>
          <RecommendationCard recommendations={data.recommendations} />
        </div>
      </section>

      <section className="content-grid deployment-grid">
        <div className="content-card">
          <p className="section-label">Cas d’usage MVP</p>
          <h2>Ce que cette première version démontre</h2>
          <ul className="indicator-list">
            <li>Requalification face à la transformation numérique</li>
            <li>Préparation à l’employabilité et aux compétences transversales</li>
            <li>Littératie IA et adaptation aux nouveaux environnements de travail</li>
          </ul>
        </div>

        <div className="content-card">
          <p className="section-label">Checklist déploiement</p>
          <h2>Points à valider avant mise en ligne</h2>
          <ul className="recommendation-list">
            <li>Le backend répond bien sur /dashboard/1 et /dashboard/2</li>
            <li>Le frontend affiche des profils différents selon ?user=1 et ?user=2</li>
            <li>Le wording reste aligné sur les compétences observables</li>
            <li>Aucun texte ne suggère un score d’intelligence ou une psychométrie</li>
          </ul>
        </div>
      </section>

      <section className="ethics-card">
        <p>
          <strong>Cadre d’interprétation :</strong> ce MVP produit un profil
          d’apprentissage et de préparation professionnelle à partir de données
          observables. Il ne constitue ni une mesure objective de l’intelligence,
          ni un score psychométrique.
        </p>
      </section>
    </main>
  );
}
