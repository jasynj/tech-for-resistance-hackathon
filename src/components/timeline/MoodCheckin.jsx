export default function MoodCheckin({ options, value, onChange }) {
    const selected = options.find((o) => o.id === value);

    const extraNote =
        selected && (selected.id === 'low' || selected.id === 'overwhelmed')
            ? 'Consider reaching out if you’re feeling low or overwhelmed for several days in a row.'
            : null;

    return (
        <section className="ct-card">
            <div className="ct-cardHeader">
                <h3 className="ct-cardTitle">Mood check-in</h3>
                <p className="ct-cardSubtle">How are you feeling?</p>
            </div>

            <div className="ct-moodRow" role="radiogroup" aria-label="Mood selection">
                {options.map((o) => {
                    const isSelected = o.id === value;
                    return (
                        <button
                            key={o.id}
                            type="button"
                            className={`ct-moodBtn ${isSelected ? 'is-selected' : ''}`}
                            onClick={() => onChange(o.id)}
                            aria-pressed={isSelected}
                            title={o.label}
                        >
                            <span className="ct-moodEmoji" aria-hidden="true">
                                {o.emoji}
                            </span>
                            <span className="ct-srOnly">{o.label}</span>
                        </button>
                    );
                })}
            </div>

            <div className="ct-moodLabel" aria-live="polite">
                {selected ? selected.label : 'Select a mood to record how you’re feeling.'}
            </div>

            {extraNote ? <p className="ct-moodNote">{extraNote}</p> : null}
        </section>
    );
}

