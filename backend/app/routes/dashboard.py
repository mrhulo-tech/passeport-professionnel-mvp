from fastapi import APIRouter, HTTPException

router = APIRouter()

mock_profiles = {
    1: {
        "user_id": 1,
        "name": "Employé en requalification numérique",
        "profile_type": "Requalification",
        "target_path": "Collaboration avec outils IA et adaptation numérique",
        "progression_score": 72,
        "readiness_score": 64,
        "adaptability_score": 78,
        "indicators": [
            "Progression régulière dans les activités liées aux usages numériques au travail.",
            "Bonne constance dans la réalisation des tâches de mise en situation.",
            "Capacité croissante à mobiliser des outils d’assistance dans un cadre professionnel.",
            "Besoin de consolidation sur la prise de décision critique et la validation des résultats produits par l’IA.",
        ],
        "recommendations": [
            "Compléter le module sur l’usage responsable des outils IA en contexte professionnel.",
            "Renforcer les activités de résolution de problèmes et de validation de contenus générés.",
            "Poursuivre un micro-parcours sur l’adaptation aux nouveaux processus de travail numériques.",
        ],
    },
    2: {
        "user_id": 2,
        "name": "Étudiant en préparation à l’employabilité",
        "profile_type": "Employabilité",
        "target_path": "Compétences transversales, IA literacy et préparation au marché du travail",
        "progression_score": 68,
        "readiness_score": 70,
        "adaptability_score": 74,
        "indicators": [
            "Engagement soutenu dans les activités orientées communication, autonomie et collaboration.",
            "Bonne compréhension initiale des usages de l’IA, mais application encore inégale dans des tâches complexes.",
            "Capacité de transfert en développement entre apprentissage académique et situations proches du travail.",
            "Besoin de renforcer l’organisation du travail et la priorisation dans un environnement numérique changeant.",
        ],
        "recommendations": [
            "Poursuivre le parcours sur les compétences transversales appliquées à des situations professionnelles.",
            "Ajouter une séquence de tâches sur l’interaction humain-machine et la validation d’information.",
            "Renforcer les activités de planification, priorisation et communication professionnelle.",
        ],
    },
}


@router.get("/dashboard/{user_id}")
async def get_dashboard(user_id: int):
    profile = mock_profiles.get(user_id)

    if not profile:
        raise HTTPException(status_code=404, detail="User not found")

    return profile
