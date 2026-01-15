import { Eye, Pencil } from 'lucide-react';

export default function SaledQuoted() {
    return (
        <div className="w-full overflow-x-auto">
            <table className="w-full border-collapse overflow-hidden rounded-lg shadow-md">
                <thead>
                    <tr className="bg-purple-600 text-left text-sm tracking-wide text-white uppercase">
                        <th className="px-4 py-3">No. Pedido</th>
                        <th className="px-4 py-3">Tienda</th>
                        <th className="px-4 py-3">Encargado</th>
                        <th className="px-4 py-3">Status</th>
                        <th className="px-4 py-3 text-center">Acciones</th>
                    </tr>
                </thead>

                <tbody className="text-sm text-gray-700">
                    <tr className="border-b transition hover:bg-gray-50">
                        <td className="px-4 py-3">1</td>
                        <td className="px-4 py-3">Moda Spacio</td>
                        <td className="px-4 py-3">Otto</td>
                        <td className="px-4 py-3">Entregado</td>
                        <td className="flex justify-center gap-3 px-4 py-3">
                            <button className="text-purple-600 hover:text-purple-800">
                                <Pencil size={16} />
                            </button>
                            <button className="text-purple-600 hover:text-purple-800">
                                <Eye size={16} />
                            </button>
                        </td>
                    </tr>

                    <tr className="border-b transition hover:bg-gray-50">
                        <td className="px-4 py-3">2</td>
                        <td className="px-4 py-3">Casanka</td>
                        <td className="px-4 py-3">Doe</td>
                        <td className="px-4 py-3">Pendiente</td>
                        <td className="flex justify-center gap-3 px-4 py-3">
                            <button className="text-purple-600 hover:text-purple-800">
                                <Pencil size={16} />
                            </button>
                            <button className="text-purple-600 hover:text-purple-800">
                                <Eye size={16} />
                            </button>
                        </td>
                    </tr>

                    <tr className="transition hover:bg-gray-50">
                        <td className="px-4 py-3">3</td>
                        <td className="px-4 py-3">Teko</td>
                        <td className="px-4 py-3">Renato</td>
                        <td className="px-4 py-3">Fábrica</td>
                        <td className="flex justify-center gap-3 px-4 py-3">
                            <button className="text-purple-600 hover:text-purple-800">
                                <Pencil size={16} />
                            </button>
                            <button className="text-purple-600 hover:text-purple-800">
                                <Eye size={16} />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
