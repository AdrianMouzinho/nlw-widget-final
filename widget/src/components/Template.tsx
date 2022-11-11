export function Template() {
    return (
        <div className="w-full h-full">
            <header className="fixed top-0 right-0 w-full h-[72px] flex items-center justify-center bg-zinc-800">
                <nav className="md:w-[1120px] flex items-center justify-between">
                    <div className="w-40 h-10 bg-zinc-700 rounded-lg"></div>
                    <div className="flex items-center gap-6 md:hidden">
                        <div className="w-[99px] h-4 rounded-lg bg-zinc-700"></div>
                        <div className="w-[99px] h-4 rounded-lg bg-zinc-700"></div>
                        <div className="w-[99px] h-4 rounded-lg bg-zinc-700"></div>
                        <div className="w-[99px] h-4 rounded-lg bg-zinc-700"></div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-lg bg-zinc-700"></div>
                        <div className="w-8 h-8 rounded-lg bg-zinc-700"></div>
                        <div className="w-12 h-12 rounded-full bg-zinc-700"></div>
                    </div>
                </nav>
                
            </header>

            <section className="hidden md:visible w-[1120px] md:flex flex-col items-center gap-8 mx-auto my-[120px] md:flex-1">
                <div className="w-full h-[124px] py-[49px] px-14 bg-zinc-800 rounded-lg text-zinc-400">
                    Experimente enviar um feedback de um bug na aplicação 🐛 
                </div>
                <div className="w-full grid grid-cols-3 gap-8">
                    <div className="w-full h-[310px] bg-zinc-800 rounded-lg"></div>
                    <div className="w-full h-[310px] bg-zinc-800 rounded-lg"></div>
                    <div className="w-full h-[310px] bg-zinc-800 rounded-lg"></div>
                    <div className="w-full h-[310px] bg-zinc-800 rounded-lg"></div>
                    <div className="w-full h-[310px] bg-zinc-800 rounded-lg"></div>
                    <div className="w-full h-[310px] bg-zinc-800 rounded-lg"></div>
                </div>
            </section>
        </div>
    );
}