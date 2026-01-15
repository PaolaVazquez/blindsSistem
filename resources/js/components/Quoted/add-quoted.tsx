import { Calculator, Save, Trash2 } from 'lucide-react';
import { useState } from 'react';

export default function AddQuoted() {
    const [nombreCliente, setNombreCliente] = useState('');
    const [persiana, setPersiana] = useState('');
    const [tela, setTela] = useState('');
    const [color, setColor] = useState('');
    const [alto, setAlto] = useState<number | ''>('');
    const [ancho, setAncho] = useState<number | ''>('');
    const [costoInstalacion, setCostoInstalacion] = useState<number | ''>('');

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
            <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                {/* Fecha de la cotización */}
                <div className="flex flex-col">
                    <label className="mb-1 text-sm font-medium text-gray-700">
                        Fecha de la cotización
                    </label>
                    <input
                        type="date"
                        className="rounded-lg border border-gray-300 px-3 py-2 text-gray-700 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400"
                    />
                </div>
                {/* Nombre del cliente */}
                <div className="flex flex-col">
                    <label className="mb-1 text-sm font-medium text-gray-700">
                        Nombre del cliente
                    </label>
                    <input
                        type="text"
                        value={nombreCliente}
                        onChange={(e) => setNombreCliente(e.target.value)}
                        placeholder="Juanito Perez"
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
                {/* Tela */}
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
                        <option value="enrollable">Enrollable</option>
                        <option value="sheer">Sheer</option>
                        <option value="vertical">Vertical</option>
                    </select>
                </div>
                {/* Color */}
                <div className="flex flex-col">
                    <label className="mb-1 text-sm font-medium text-gray-700">
                        Color
                    </label>
                    <select
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500"
                    >
                        <option value="">Selecciona</option>
                        <option value="enrollable">Enrollable</option>
                        <option value="sheer">Sheer</option>
                        <option value="vertical">Vertical</option>
                    </select>
                </div>
                {/* Alto */}
                <div className="flex flex-col">
                    <label className="mb-1 text-sm font-medium text-gray-700">
                        Alto (cm)
                    </label>
                    <input
                        type="number"
                        value={alto}
                        onChange={(e) => setAlto(Number(e.target.value))}
                        placeholder="Ej. 200"
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
                {/* Costo instalación */}
                <div className="flex flex-col">
                    <label className="mb-1 text-sm font-medium text-gray-700">
                        Costo de instalación
                    </label>
                    <input
                        type="number"
                        value={costoInstalacion}
                        onChange={(e) =>
                            setCostoInstalacion(Number(e.target.value))
                        }
                        placeholder="Ej. 200 pesos"
                        className="rounded-lg border border-gray-300 px-3 py-2 text-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500"
                    />
                </div>
                {/* No incluye instalación */}
                <div className="flex items-center space-x-2">
                    <label className="relative inline-flex cursor-pointer items-center">
                        <input type="checkbox" className="peer sr-only" />
                        <div className="peer h-6 w-11 rounded-full bg-gray-300 transition-all peer-checked:bg-purple-600 peer-focus:ring-2 peer-focus:ring-purple-400"></div>
                        <span className="absolute top-0.5 left-1 h-5 w-5 rounded-full bg-white transition-all peer-checked:translate-x-5"></span>
                    </label>
                    <label
                        htmlFor="incluirInstalacion"
                        className="text-sm font-medium text-gray-700"
                    >
                        No incluye instalación
                    </label>
                </div>

                {/* Botón */}
            </div>
            <div className="mt-6 flex justify-center gap-4">
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
                        Calcular <Calculator className="ml-2" size={18} />
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
