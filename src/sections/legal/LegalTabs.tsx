import { useState } from "react";
import Terms from "./Terms";
import Privacity from "./Privacity";
import Reclamations from "./Reclamations";

type TabType = 'terms' | 'privacity' | 'reclamations';

const validTabs: TabType[] = ['terms', 'privacity', 'reclamations'];

function getInitialTab(): TabType {
    if (typeof window !== 'undefined') {
        const hash = window.location.hash.replace('#', '') as TabType;
        if (validTabs.includes(hash)) return hash;
    }
    return 'terms';
}

export default function LegalTabs() {
    const [activeTab, setActiveTab] = useState<TabType>(getInitialTab);

    return (
        <section className="flex flex-col gap-10">

            {/* Tabs */}
            <div className="flex gap-3 flex-wrap">
                <button
                    onClick={() => setActiveTab('terms')}
                    className={`
                        px-3 py-2 rounded-lg text-sm font-medium 
                        ${activeTab === 'terms'
                            ? 'bg-primary text-white'
                            : 'bg-white/10 hover:bg-white/15'}
                    `}
                >
                    Términos y Condiciones
                </button>
                <button
                    onClick={() => setActiveTab('privacity')}
                    className={`
                        px-3 py-2 rounded-lg text-sm font-medium 
                        ${activeTab === 'privacity'
                            ? 'bg-primary text-white'
                            : 'bg-white/10 hover:bg-white/15'}
                    `}
                >
                    Privacidad
                </button>
                <button
                    onClick={() => setActiveTab('reclamations')}
                    className={`
                        px-3 py-2 rounded-lg text-sm font-medium 
                        ${activeTab === 'reclamations'
                            ? 'bg-primary text-white'
                            : 'bg-white/10 hover:bg-white/15'}
                    `}
                >
                    Reclamaciones
                </button>
            </div>

            {/* Content */}
            {activeTab === 'terms' && <Terms />}
            {activeTab === 'privacity' && <Privacity />}
            {activeTab === 'reclamations' && <Reclamations />}

        </section>
    );
}