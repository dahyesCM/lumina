"""Spanish reminiscence text processing utilities."""
import re

STOPWORDS = {"de", "la", "el", "en", "y", "a", "con", "que", "su", "los", "las"}

def normalize_memory(text: str) -> str:
    clean = re.sub(r"[^\w\sáéíóúüñÁÉÍÓÚÜÑ]", " ", text.lower())
    return " ".join(word for word in clean.split() if word not in STOPWORDS)

def extract_topics(text: str) -> list[str]:
    return list(dict.fromkeys(normalize_memory(text).split()))[:12]
