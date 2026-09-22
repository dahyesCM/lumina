"""Content-based recommendations for reminiscence sessions.
This module is intentionally independent from the web interface.
"""
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

def recommend_content(contents, previous_response="Receptivo", hour=10, limit=3):
    if not contents:
        return []
    mood = "calma" if previous_response in {"Agitado", "Indiferente"} else "conexión"
    query = f"{mood} hora {hour}"
    documents = [f"{item.get('type', '')} {item.get('text', '')}" for item in contents]
    matrix = TfidfVectorizer().fit_transform(documents + [query])
    scores = cosine_similarity(matrix[-1], matrix[:-1]).flatten()
    ranked = sorted(zip(scores, contents), key=lambda pair: pair[0], reverse=True)
    return [item for _, item in ranked[:limit]]

if __name__ == "__main__":
    print(recommend_content([{"type": "música", "text": "Los Panchos"}]))
