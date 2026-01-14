import { Pencil } from 'lucide-react';

export const pendingOrder = () => {
    return (
        <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
            <h2 className="text-center text-7xl">Bienvenido</h2>
            <h3 className="text-5xl">Pedidos pendientes</h3>
            <table className="table-auto md:table-fixed">
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
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
