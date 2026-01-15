import { Plus, Save, Search, Trash, Trash2 } from 'lucide-react';
import { useState } from 'react';

export default function PersianaForm() {
    const [alto, setAlto] = useState<number | ''>('');
    const [ancho, setAncho] = useState<number | ''>('');
    const [persiana, setPersiana] = useState('');
    const [tela, setTela] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ alto, ancho, persiana, tela });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="mx-auto w-full rounded-xl bg-white p-6 shadow-md"
        >
            {' '}
            <div className="pb-10">
                <h2>Persianas</h2>
            </div>
            <div className="pb-10">
                <button className="ml-auto flex w-[150px] flex-1 cursor-pointer items-center justify-center rounded-lg bg-purple-600 px-4 py-2 font-semibold text-white shadow transition hover:bg-purple-700">
                    Agregar <Plus className="ml-2" size={18} />
                </button>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
                {/* Alto */}
                <div className="flex flex-col">
                    <label className="mb-1 text-sm font-medium text-gray-700">
                        Alto (cm)
                    </label>
                    <input
                        type="number"
                        value={alto}
                        onChange={(e) => setAlto(Number(e.target.value))}
                        placeholder="Ej. 120"
                        className="rounded-lg border border-gray-300 px-3 py-2 text-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                {/* Ancho */}
                <div className="flex flex-col">
                    <label className="mb-1 text-sm font-medium text-gray-700">
                        Ancho (cm)
                    </label>
                    <input
                        type="number"
                        value={ancho}
                        onChange={(e) => setAncho(Number(e.target.value))}
                        placeholder="Ej. 200"
                        className="rounded-lg border border-gray-300 px-3 py-2 text-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                {/* Select tipo de persiana */}
                <div className="flex flex-col">
                    <label className="mb-1 text-sm font-medium text-gray-700">
                        Tipo de persiana
                    </label>
                    <select
                        value={persiana}
                        onChange={(e) => setPersiana(e.target.value)}
                        className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500"
                    >
                        <option value="">Selecciona</option>
                        <option value="enrollable">Enrollable</option>
                        <option value="sheer">Sheer</option>
                        <option value="vertical">Vertical</option>
                    </select>
                </div>

                {/* Select tipo de tela */}
                <div className="flex flex-col">
                    <label className="mb-1 text-sm font-medium text-gray-700">
                        Tela
                    </label>
                    <select
                        value={tela}
                        onChange={(e) => setTela(e.target.value)}
                        className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500"
                    >
                        <option value="">Selecciona</option>
                        <option value="blackout">Blackout</option>
                        <option value="screen">Screen</option>
                        <option value="traslúcida">Traslúcida</option>
                    </select>
                </div>
                <div className="flex items-end">
                    <button
                        type="submit"
                        className="rounded-lg bg-purple-600 px-4 py-2 font-semibold text-white shadow transition hover:bg-purple-700"
                    >
                        <Trash />
                    </button>
                </div>
                {/* Botón */}
            </div>
            <div className="mt-6 flex justify-end gap-4">
                <div>
                    <button
                        type="button"
                        className="flex w-[200px] cursor-pointer items-center justify-center rounded-lg bg-purple-600 px-4 py-2 font-semibold text-white shadow transition hover:bg-purple-700"
                    >
                        Limpiar <Trash2 className="ml-2" size={18} />
                    </button>
                </div>

                <div>
                    <button
                        type="button"
                        className="flex w-[200px] cursor-pointer items-center justify-center rounded-lg bg-purple-600 px-4 py-2 font-semibold text-white shadow transition hover:bg-purple-700"
                    >
                        Calcular <Search className="ml-2" size={18} />
                    </button>
                </div>

                <div>
                    <button
                        type="button"
                        className="flex w-[200px] cursor-pointer items-center justify-center rounded-lg bg-purple-600 px-4 py-2 font-semibold text-white shadow transition hover:bg-purple-700"
                    >
                        Guardar <Save className="ml-2" size={18} />
                    </button>
                </div>
            </div>
        </form>
    );
}
