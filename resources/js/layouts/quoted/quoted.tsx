import AllQuoted from '@/components/Quoted/all-quoteds';
import SaledQuoted from '@/components/Quoted/saled';
import SavedQuoted from '@/components/Quoted/saved';
import { BookMarked, Folder, Plus, Tag } from 'lucide-react';
import { useState } from 'react';

export default function Quoted() {
    const [activeTab, setActiveTab] = useState<'all' | 'saved' | 'saled'>(
        'all',
    );

    return (
        <div className="mx-auto w-full">
            {/* Tabs */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
                {/* Columna izquierda */}
                <div className="p-4 md:col-span-3">
                    <h2>Mis cotizaciones</h2>
                </div>

                {/* Espacio en blanco */}
                <div className="hidden md:col-span-1 md:block"></div>

                {/* Columna derecha */}
                <div className="p-4 md:col-span-2">
                    <div className="justify-around pb-10">
                        <button className="ml-auto flex w-[200px] flex-1 cursor-pointer items-center justify-center rounded-lg bg-purple-600 px-4 py-2 font-semibold text-white shadow transition hover:bg-purple-700">
                            Nueva Cotización <Plus className="ml-2" size={18} />
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex w-full border-b pb-2">
                <button
                    onClick={() => setActiveTab('all')}
                    className={`flex flex-1 cursor-pointer items-center justify-center text-base ${
                        activeTab === 'all'
                            ? 'font-bold text-purple-600'
                            : 'text-gray-400'
                    } `}
                >
                    Todas <Folder size={18} className="ml-2" />
                </button>

                <button
                    onClick={() => setActiveTab('saved')}
                    className={`flex flex-1 cursor-pointer items-center justify-center text-base ${
                        activeTab === 'saved'
                            ? 'font-bold text-purple-600'
                            : 'text-gray-400'
                    } `}
                >
                    Guardadas <BookMarked className="ml-2" size={18} />
                </button>
                <button
                    onClick={() => setActiveTab('saled')}
                    className={`flex flex-1 cursor-pointer items-center justify-center text-base ${
                        activeTab === 'saled'
                            ? 'font-bold text-purple-600'
                            : 'text-gray-400'
                    } `}
                >
                    Vendidas <Tag className="ml-2" size={18} />
                </button>
            </div>

            {/* Content */}
            <div className="mt-4 w-full">
                {activeTab === 'all' && <AllQuoted />}

                {activeTab === 'saved' && <SavedQuoted />}
                {activeTab === 'saled' && <SaledQuoted />}
            </div>
        </div>
    );
}
