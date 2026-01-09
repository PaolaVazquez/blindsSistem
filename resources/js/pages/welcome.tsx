import { dashboard, login, register } from '@/routes';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome({
    canRegister = true,
}: {
    canRegister?: boolean;
}) {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Bienvenido">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>
            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
                <header className="mb-6 w-full max-w-[335px] text-sm not-has-[nav]:hidden lg:max-w-4xl">
                    <nav className="flex items-center justify-end gap-4">
                        {auth.user ? (
                            <Link
                                href={dashboard()}
                                className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                            >
                                Inicio
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={login()}
                                    className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                                >
                                    Iniciar sesión
                                </Link>
                                {canRegister && (
                                    <Link
                                        href={register()}
                                        className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                    >
                                        Registro
                                    </Link>
                                )}
                            </>
                        )}
                    </nav>
                </header>
                <div className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                    <main className="flex w-full max-w-[335px] flex-col-reverse lg:max-w-4xl lg:flex-row">
                        <div className="flex-1 rounded-br-lg rounded-bl-lg bg-white p-6 pb-12 text-[13px] leading-[20px] shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] lg:rounded-tl-lg lg:rounded-br-none lg:p-20 dark:bg-[#161615] dark:text-[#EDEDEC] dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]">
                            <h1 className="mb-1 font-medium">
                                ¡Comencemos a automatizar tu trabajo!
                            </h1>
                            <p className="mb-2 text-[#706f6c] dark:text-[#A1A09A]">
                                PersiTrack está diseñado para automatizar tus
                                procesos.
                                <br />
                                Si quieres pertecer a la familia puedes
                                contactarnos o leer un poco acerca de
                                PersiTrack.
                            </p>
                            <ul className="mb-4 flex flex-col lg:mb-6">
                                <li className="relative flex items-center gap-4 py-2 before:absolute before:top-1/2 before:bottom-0 before:left-[0.4rem] before:border-l before:border-[#e3e3e0] dark:before:border-[#3E3E3A]">
                                    <span className="relative bg-white py-1 dark:bg-[#161615]">
                                        <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full border border-[#e3e3e0] bg-[#FDFDFC] shadow-[0px_0px_1px_0px_rgba(0,0,0,0.03),0px_1px_2px_0px_rgba(0,0,0,0.06)] dark:border-[#3E3E3A] dark:bg-[#161615]">
                                            <span className="h-1.5 w-1.5 rounded-full bg-[#dbdbd7] dark:bg-[#3E3E3A]" />
                                        </span>
                                    </span>
                                    <span>
                                        ¿Qué es
                                        <a
                                            href="https://laravel.com/docs"
                                            target="_blank"
                                            className="ml-1 inline-flex items-center space-x-1 font-medium text-[#707556] underline underline-offset-4 dark:text-[#F6E9CF]"
                                        >
                                            <span>PersiTrack?</span>
                                            <svg
                                                width={10}
                                                height={11}
                                                viewBox="0 0 10 11"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-2.5 w-2.5"
                                            >
                                                <path
                                                    d="M7.70833 6.95834V2.79167H3.54167M2.5 8L7.5 3.00001"
                                                    stroke="currentColor"
                                                    strokeLinecap="square"
                                                />
                                            </svg>
                                        </a>
                                    </span>
                                </li>
                                <li className="relative flex items-center gap-4 py-2 before:absolute before:top-0 before:bottom-1/2 before:left-[0.4rem] before:border-l before:border-[#e3e3e0] dark:before:border-[#3E3E3A]">
                                    <span className="relative bg-white py-1 dark:bg-[#161615]">
                                        <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full border border-[#e3e3e0] bg-[#FDFDFC] shadow-[0px_0px_1px_0px_rgba(0,0,0,0.03),0px_1px_2px_0px_rgba(0,0,0,0.06)] dark:border-[#3E3E3A] dark:bg-[#161615]">
                                            <span className="h-1.5 w-1.5 rounded-full bg-[#dbdbd7] dark:bg-[#3E3E3A]" />
                                        </span>
                                    </span>
                                    <span>
                                        Demo
                                        <a
                                            href="https://laracasts.com"
                                            target="_blank"
                                            className="ml-1 inline-flex items-center space-x-1 font-medium text-[#707556] underline underline-offset-4 dark:text-[#F6E9CF]"
                                        >
                                            <span>PersiTrack</span>
                                            <svg
                                                width={10}
                                                height={11}
                                                viewBox="0 0 10 11"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-2.5 w-2.5"
                                            >
                                                <path
                                                    d="M7.70833 6.95834V2.79167H3.54167M2.5 8L7.5 3.00001"
                                                    stroke="currentColor"
                                                    strokeLinecap="square"
                                                />
                                            </svg>
                                        </a>
                                    </span>
                                </li>
                            </ul>
                            <ul className="flex gap-3 text-sm leading-normal">
                                <li>
                                    <a
                                        href="https://cloud.laravel.com"
                                        target="_blank"
                                        className="inline-block rounded-sm border border-black bg-[#1b1b18] px-5 py-1.5 text-sm leading-normal text-white hover:border-black hover:bg-black dark:border-[#F6E9CF] dark:bg-[#F6E9CF] dark:text-[#1C1C1A] dark:hover:border-white dark:hover:bg-white"
                                    >
                                        ¡Quiero informes!
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="relative -mb-px aspect-[335/376] w-full shrink-0 overflow-hidden rounded-t-lg bg-[#fff2f2] lg:mb-0 lg:-ml-px lg:aspect-auto lg:w-[438px] lg:rounded-t-none lg:rounded-r-lg dark:bg-[#A6A195]">
                            <svg
                                viewBox="0 0 277.779 283.932"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-[#707556 ] w-full max-w-none translate-y-0 opacity-100 transition-all duration-750 dark:text-[#F6E9CF] starting:translate-y-6 starting:opacity-0"
                            >
                                <path
                                    fill="currentColor"
                                    d="M240.179 190.9q0-13.2-4-20.8a29.108 29.108 0 0 0-10-11.4 35.441 35.441 0 0 0-13.6-5 97.316 97.316 0 0 0-15.2-1.2h-25.6v-3.6h106v3.6q-3.2 0-4.6 3.6a36.161 36.161 0 0 0-2 9q-.6 5.4-1 11.4a61.594 61.594 0 0 1-1.6 10.8q-7.2 32.4-27 54a128.033 128.033 0 0 1-46 32.4A137.509 137.509 0 0 1 139.779 275.9a148.19 148.19 0 0 1-56.4-12.2q-26.8-11.6-48-34.8t-30.4-58A139.684 139.684 0 0 1 1.379 115.9a142.752 142.752 0 0 1 17.6-51.6 141.639 141.639 0 0 1 35.8-41 139.53 139.53 0 0 1 50.6-25 133.542 133.542 0 0 1 40.8-4.8 147.309 147.309 0 0 1 39.2 6.8 141.915 141.915 0 0 1 35.4 17 137.613 137.613 0 0 1 29.4 26.2l-9.6 35.2h-3.6a187.406 187.406 0 0 0-22.8-35A138.827 138.827 0 0 0 183.779 22.5a107.562 107.562 0 0 0-36.4-15.6q-19.6-4.4-41.2 1.2-26 6.8-42.8 24.4a120.6 120.6 0 0 0-25.6 40.6 152.577 152.577 0 0 0-9.8 49 169.562 169.562 0 0 0 5 49.2q8 29.6 23.8 50.4a136.288 136.288 0 0 0 35.8 33.4 120.67 120.67 0 0 0 42.6 16.8 120.2 120.2 0 0 0 44.2.2q20.4-4.4 32.4-13.4a63.717 63.717 0 0 0 18.2-20.4 74.273 74.273 0 0 0 8.2-23.8 148.4 148.4 0 0 0 2-23.6Z"
                                />
                            </svg>

                            <div className="absolute inset-0 rounded-t-lg shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] lg:rounded-t-none lg:rounded-r-lg dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]" />
                        </div>
                    </main>
                </div>
                <div className="hidden h-14.5 lg:block"></div>
            </div>
        </>
    );
}
