export default function MilestoneList({ milestones, selectedId, onSelect }) {
    return (
        <section className="ct-card">
            <div className="ct-cardHeader">
                <h3 className="ct-cardTitle">Milestones</h3>
                <p className="ct-cardSubtle">Select a week/month to view details.</p>
            </div>

            <div className="ct-milestoneList" role="list">
                {milestones.map((m) => {
                    const isActive = m.id === selectedId;
                    return (
                        <button
                            key={m.id}
                            type="button"
                            className={`ct-milestoneBtn ${isActive ? 'is-active' : ''}`}
                            onClick={() => onSelect(m.id)}
                            aria-current={isActive ? 'step' : undefined}
                        >
                            <span className="ct-milestoneDot" aria-hidden="true" />
                            <span className="ct-milestoneLabel">{m.label}</span>
                            <span className="ct-milestoneChevron" aria-hidden="true">
                                →
                            </span>
                        </button>
                    );
                })}
            </div>
        </section>
    );
}

