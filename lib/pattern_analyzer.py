"""Non-clinical activity pattern analysis.
Never produces a diagnosis or clinical assessment.
"""

def summarize_responses(responses: list[str]) -> dict:
    positive = {"Receptivo", "Emocionado"}
    consecutive_negative = 0
    for response in reversed(responses):
        if response in {"Indiferente", "Agitado"}:
            consecutive_negative += 1
        else:
            break
    return {
        "positive_rate": round(sum(item in positive for item in responses) / len(responses), 2) if responses else 0,
        "consecutive_negative": consecutive_negative,
        "needs_pause_recommendation": consecutive_negative >= 3,
        "scope": "registro familiar no clínico",
    }
