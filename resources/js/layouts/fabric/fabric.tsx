import PersianaForm from '@/components/Fabric/calculator-fabric';
import { Calculator, Feather } from 'lucide-react';
import { useState } from 'react';

export default function SimpleTabs() {
    const [activeTab, setActiveTab] = useState<'home' | 'contact'>('home');

    return (
        <div className="mx-auto w-full">
            {/* Tabs */}
            <div className="flex w-full border-b pb-2">
                <button
                    onClick={() => setActiveTab('home')}
                    className={`flex flex-1 cursor-pointer items-center justify-center text-base ${
                        activeTab === 'home'
                            ? 'font-bold text-purple-600'
                            : 'text-gray-400'
                    } `}
                >
                    Pedido de tela <Feather size={18} className="ml-2" />
                </button>

                <button
                    onClick={() => setActiveTab('contact')}
                    className={`flex flex-1 cursor-pointer items-center justify-center text-base ${
                        activeTab === 'contact'
                            ? 'font-bold text-purple-600'
                            : 'text-gray-400'
                    } `}
                >
                    Calcular tela para pedido{' '}
                    <Calculator className="ml-2" size={18} />
                </button>
            </div>

            {/* Content */}
            <div className="mt-4 w-full">
                {activeTab === 'home' && <PersianaForm />}

                {activeTab === 'contact' && <PersianaForm />}
            </div>
        </div>
    );
}
