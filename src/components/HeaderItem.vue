<template>
    <header class="relative z-0 overflow-hidden flex flex-col">
        <div class="relative flex flex-col overflow-hidden min-h-screen">
            <div class="relative pt-24 flex flex-auto items-center">
                <div class="absolute left-0 top-0 w-full h-full">
                    <video class="w-full object-cover h-full pointer-events-none absolute left-0 top-0 z-[-1]" muted preload="true" autoPlay playsInline loop>
                        <source src="/main-bg.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div class="w-full relative max-w-[1250px] my-0 mx-auto py-0 px-[30px] ">
                    <div class="flex">
                        <div class="flex relative grow-0 shrink-0 basis-[550px] flex-col justify-center z-[1]">
                            <div class="flex flex-col">
                                <h1 class="lg:text-7xl md:text-6xl text-5xl text-white mb-[27px] font-bold select-none">
                                    Avoid the grind, dominate all
                                </h1>
                                <p class="md:text-xl md:w-auto w-screen break-words text-gray-200 mb-[30px] center font-semibold">
                                    Gain the upper hand by purchasing one of our many products to increase your in-game potential!
                                </p>
                                <a href="#products">
                                    <button class="purchase-btn group inline-flex items-center mt-8 tracking-widest text-white outline-none border-transparent">
                                        <span class="relative pr-4 pb-1 text-white after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-blue-500 after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100">
                                            View Products
                                        </span>
                                        <svg viewBox="0 0 46 16" height="10" width="30" id="arrow-horizontal" class="-translate-x-2 fill-slate-700 opacity-10 transition-all duration-300 ease-in-out group-hover:translate-x-1 group-hover:scale-x-105 group-hover:opacity-100 group-hover:fill-white">
                                        <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                                        </svg>
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div class="relative -ml-40 z-0 flex-auto hidden lg:flex">
                            <div came="absolute left-0 top-0 w-full h-full">
                                <iframe title='vouches' class="w-[700px] h-[450px] float-right mr-[140px] shadow-[0_5px_36px_0px_rgba(0,0,0,0.25)] rounded-sm -top-[80.5px] left-[222px] relative" src="https://e.widgetbot.io/channels/1072333645685207160/1072336125705867266" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style>
.purchase-btn {
    width: 100%;
    max-width: 400px;
    padding: 10px 12px;
    border-radius: 15px;
    border: transparent;
    font-size: 16px;
    font-weight: 500;
    margin-top: 10px;
    margin-top: 40px;
    text-transform: uppercase;
    color: #fff;
    cursor: pointer;
    transform: scale(1, 1);
    transition: transform 0.5s ease;
}
.purchase-btn:hover{
    transform: scale(1.1,1.1);
}
</style>