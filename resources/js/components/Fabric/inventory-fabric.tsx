import { Calculator, Eye, Feather, Pencil, Plus } from 'lucide-react';
import { useState } from 'react';

export default function SimpleTabs() {
    const [activeTab, setActiveTab] = useState<'home' | 'contact'>('home');

    return (
        <div className="mx-auto w-full">
            {/* Tabs */}
            <div className="flex w-full border-b pb-2">
                <button
                    onClick={() => setActiveTab('home')}
                    className={`flex flex-1 items-center justify-center text-base ${
                        activeTab === 'home'
                            ? 'font-bold text-purple-600'
                            : 'text-gray-400'
                    } `}
                >
                    Pedido de tela <Feather size={18} className="ml-2" />
                </button>

                <button
                    onClick={() => setActiveTab('contact')}
                    className={`flex flex-1 items-center justify-center text-base ${
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
            <div className="mt-4 flex w-full">
                {activeTab === 'home' && (
                    <div className="">
                        <div className="">
                            <h2 className="pb-10 text-4xl font-bold">
                                Inventario de Telas / Componentes
                            </h2>
                            <table className="w-full table-auto md:table-fixed">
                                <thead>
                                    <tr className="text-whitebg-white p-6 pb-12 text-center text-[13px] leading-[20px] shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] lg:rounded-tl-lg lg:rounded-tr-lg lg:p-20 dark:bg-[#161615] dark:text-[#EDEDEC] dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]">
                                        <th>No. Pedido</th>
                                        <th>Tienda</th>
                                        <th>Encargado</th>
                                        <th>Status</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="text-center">
                                        <td>1</td>
                                        <td>Moda Spacio</td>
                                        <td>Otto</td>
                                        <td>Entregado</td>
                                        <td></td>
                                    </tr>
                                    <tr className="text-center">
                                        <td> 2</td>
                                        <td>Casanka</td>
                                        <td>Doe</td>
                                        <td>Pendiente</td>
                                        <td>
                                            <button>
                                                <Pencil size={16} />
                                            </button>
                                            <button>
                                                <Eye size={16} />
                                            </button>
                                        </td>
                                    </tr>
                                    <tr className="text-center">
                                        <td>3</td>
                                        <td>Teko</td>
                                        <td>Renato</td>
                                        <td>Fabrica</td>
                                        <td>
                                            <button>
                                                <Pencil size={16} />
                                            </button>
                                            <button>
                                                <Eye size={16} />
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="pt-20">
                            <h2 className="pb-10 text-4xl font-bold">
                                Pedidos de Telas / Componentes
                            </h2>
                            <div className="pb-10">
                                <button className="ml-auto flex w-[250px] flex-1 items-center justify-center rounded-[5px] border-2 border-rose-300 p-[3px] text-base">
                                    Pedir tela/componente{' '}
                                    <Plus className="ml-2" size={18} />
                                </button>
                            </div>
                            <table className="w-full table-auto md:table-fixed">
                                <thead>
                                    <tr className="text-whitebg-white p-6 pb-12 text-center text-[13px] leading-[20px] shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] lg:rounded-tl-lg lg:rounded-tr-lg lg:p-20 dark:bg-[#161615] dark:text-[#EDEDEC] dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]">
                                        <th>No. Pedido</th>
                                        <th>Tienda</th>
                                        <th>Encargado</th>
                                        <th>Status</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="text-center">
                                        <td>1</td>
                                        <td>Moda Spacio</td>
                                        <td>Otto</td>
                                        <td>Entregado</td>
                                        <td></td>
                                    </tr>
                                    <tr className="text-center">
                                        <td> 2</td>
                                        <td>Casanka</td>
                                        <td>Doe</td>
                                        <td>Pendiente</td>
                                        <td>
                                            <button>
                                                <Pencil size={16} />
                                            </button>
                                            <button>
                                                <Eye size={16} />
                                            </button>
                                        </td>
                                    </tr>
                                    <tr className="text-center">
                                        <td>3</td>
                                        <td>Teko</td>
                                        <td>Renato</td>
                                        <td>Fabrica</td>
                                        <td>
                                            <button>
                                                <Pencil size={16} />
                                            </button>
                                            <button>
                                                <Eye size={16} />
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {activeTab === 'contact' && <div className=""></div>}
            </div>
        </div>
    );
}
