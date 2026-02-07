import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import './CareTimeline.css';

import {
    ACTION_CHECKLIST_ITEMS,
    MILESTONES,
    MOOD_OPTIONS,
    PREECLAMPSIA_WARNING,
    SUGGESTED_READING,
} from '../data/timeline';

const STORAGE_KEYS = {
    checklist: 'careTimeline_checkedMap',
    mood: 'careTimeline_mood',
    summary: 'careTimeline_summary',
};

function initChecklistMap(items) {
    return items.reduce((acc, item) => {
        acc[item.id] = false;
        return acc;
    }, {});
}

export default function CareTimeline() {
    const [selectedId, setSelectedId] = useState('week4');
    const [checkedMap, setCheckedMap] = useState(() => initChecklistMap(ACTION_CHECKLIST_ITEMS));
    const [mood, setMood] = useState(null);

    // Hydrate from localStorage on first mount
    useEffect(() => {
        try {
            const storedChecklist = window.localStorage.getItem(STORAGE_KEYS.checklist);
            if (storedChecklist) {
                const parsed = JSON.parse(storedChecklist);
                if (parsed && typeof parsed === 'object') {
                    setCheckedMap((prev) => ({ ...prev, ...parsed }));
                }
            }

            const storedMood = window.localStorage.getItem(STORAGE_KEYS.mood);
            if (storedMood) {
                setMood(storedMood);
            }
        } catch {
            // ignore
        }
    }, []);

    const current = useMemo(
        () => MILESTONES.find((m) => m.id === selectedId) ?? MILESTONES[0],
        [selectedId],
    );

    const completedCount = useMemo(
        () => ACTION_CHECKLIST_ITEMS.filter((item) => checkedMap[item.id]).length,
        [checkedMap],
    );

    // Persist checklist and mood changes
    useEffect(() => {
        try {
            window.localStorage.setItem(STORAGE_KEYS.checklist, JSON.stringify(checkedMap));
        } catch {
            // ignore
        }
    }, [checkedMap]);

    useEffect(() => {
        try {
            if (mood) {
                window.localStorage.setItem(STORAGE_KEYS.mood, mood);
            }
        } catch {
            // ignore
        }
    }, [mood]);

    // Optional summary for other views
    useEffect(() => {
        const summary = {
            selectedMilestoneId: selectedId,
            selectedMilestoneLabel: current?.label,
            completedActions: completedCount,
            totalActions: ACTION_CHECKLIST_ITEMS.length,
            mood,
            updatedAt: new Date().toISOString(),
        };

        try {
            window.localStorage.setItem(STORAGE_KEYS.summary, JSON.stringify(summary));
        } catch {
            // ignore
        }

        // eslint-disable-next-line no-console
        console.log('[CareTimeline] Progress summary', summary);
    }, [selectedId, current, completedCount, mood]);

    const handleToggleChecklist = (id) => {
        setCheckedMap((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    const isAllChecked = completedCount === ACTION_CHECKLIST_ITEMS.length;

    return (
        <div className="pt-page">
            <div className="pt-container">
                <header className="pt-header">
                    <h1>Postpartum Care Timeline</h1>
                    <p>Your personalized recovery journey, week by week</p>
                    <div className="pt-progressIndicator">
                        <span>
                            You&apos;re in <strong>{current?.label}</strong> of{' '}
                            <strong>{MILESTONES.length} key checkpoints</strong>
                        </span>
                    </div>
                </header>

                <div className="pt-layout">
                    {/* Top milestones row */}
                    <section className="pt-milestonesBar">
                        <div className="pt-milestonesHeader">
                            <h2>Milestones</h2>
                        </div>
                        <div className="pt-milestonesRow">
                            {MILESTONES.map((m) => {
                                const active = m.id === selectedId;
                                return (
                                    <button
                                        key={m.id}
                                        type="button"
                                        className={`pt-milestoneItem ${active ? 'is-active' : ''}`}
                                        onClick={() => setSelectedId(m.id)}
                                    >
                                        {m.label}
                                    </button>
                                );
                            })}
                        </div>
                    </section>

                    <section className="pt-moodCard" style={{ marginBottom: '2rem' }}>
                    <div className="pt-moodHeader">
                        <h2>Mood Check-in</h2>
                        <span className="pt-moodSubtitle">How are you feeling?</span>
                    </div>
                    <div className="pt-moodRow" role="radiogroup" aria-label="Mood selection">
                        {MOOD_OPTIONS.map((option) => {
                            const selected = option.id === mood;
                            return (
                                <button
                                    key={option.id}
                                    type="button"
                                    className={`pt-moodEmoji ${selected ? 'is-selected' : ''}`}
                                    onClick={() => setMood(option.id)}
                                    aria-pressed={selected}
                                    title={option.label}
                                >
                                    {option.emoji}
                                </button>
                            );
                        })}
                    </div>
                </section>


                    {/* Current stage card */}
                    <main className="pt-content">
                        <div className="pt-contentHeader">
                            <span className="pt-contentBadge">CURRENT STAGE</span>
                            <h2>{current?.title}</h2>
                        </div>

                        <p className="pt-contentDescription">{current?.description}</p>

                        {current?.showPreeclampsiaWarning ? (
                            <div className="pt-warningBox" aria-label="Warning signs: postpartum preeclampsia">
                                <div className="pt-warningHeader">
                                    <span className="pt-warningIcon">⚠️</span>
                                    <h3>{PREECLAMPSIA_WARNING.title}</h3>
                                </div>
                                <p className="pt-warningSubtitle">{PREECLAMPSIA_WARNING.description}</p>
                                <ul className="pt-warningList">
                                    {PREECLAMPSIA_WARNING.items.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                                <p className="pt-warningFooter">
                                    If you feel unsafe or symptoms are severe, seek emergency care.
                                </p>
                            </div>
                        ) : null}
                    </main>

                    {/* Action steps */}
                    <section className="pt-card">
                        <h3>📋 Action Steps</h3>
                        <p className="pt-cardSubtitle">Quick checklist for this stage only</p>
                        <div className="pt-actionList">
                            {ACTION_CHECKLIST_ITEMS.map((item) => {
                                const checked = Boolean(checkedMap[item.id]);
                                return (
                                    <button
                                        key={item.id}
                                        type="button"
                                        className={`pt-actionItem ${checked ? 'is-checked' : ''}`}
                                        onClick={() => handleToggleChecklist(item.id)}
                                    >
                                        <div className="pt-actionCheckbox" aria-hidden="true" />
                                        <span>{item.label}</span>
                                    </button>
                                );
                            })}
                        </div>
                        {isAllChecked ? (
                            <div className="pt-completeChip" aria-live="polite">
                                <span className="pt-completeIcon">✔</span>
                                Nice work — you’ve checked off today’s action steps.
                            </div>
                        ) : null}
                    </section>

                    {/* Suggested reading */}
                    <section className="pt-card">
                        <h3>📚 Suggested Reading</h3>
                        <p className="pt-cardSubtitle">Quick resources you can scan today</p>
                        {SUGGESTED_READING.map((r) => (
                            <Link key={r.id} to="/education" className="pt-readingCard">
                                <div className="pt-readingTitle">{r.title}</div>
                                <div className="pt-readingTime">
                                    <span>{r.readTime}</span>
                                </div>
                            </Link>
                        ))}
                    </section>
                </div>
            </div>
        </div>
    );
}

