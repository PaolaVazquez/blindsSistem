import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Pencil } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Inicio',
        href: dashboard().url,
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Inicio" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <h3 className="text-5xl">Pedidos pendientes</h3>
                <table className="table-auto md:table-fixed">
                    <thead>
                        <tr className="text-center text-white odd:bg-black even:bg-gray-50 dark:odd:bg-gray-900/50 dark:even:bg-gray-950">
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

                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                </div>
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                </div>
            </div>
        </AppLayout>
    );
}
