export default function ActionChecklist({ items, checkedMap, onToggle }) {
    return (
        <section className="ct-card">
            <div className="ct-cardHeader">
                <h3 className="ct-cardTitle">Action steps</h3>
                <p className="ct-cardSubtle">Quick checklist for this stage (state only).</p>
            </div>

            <div className="ct-checklist">
                {items.map((item) => {
                    const checked = Boolean(checkedMap?.[item.id]);
                    return (
                        <label key={item.id} className="ct-checkItem">
                            <input
                                type="checkbox"
                                checked={checked}
                                onChange={() => onToggle(item.id)}
                            />
                            <span className="ct-checkLabel">{item.label}</span>
                        </label>
                    );
                })}
            </div>
        </section>
    );
}

