<template>
    <footer class="text-[#324d67] text-center font-bold flex flex-col items-center gap-2.5 justify-center mt-5 px-2.5 py-[30px]">
        <p class="mb-8 text-gray-200">
            <v-icon name="fa-copyright" /> 2023 crspy.cc . All Rights Reserved.</p>
        <ul class="footer-wrapper">
            <a href='https://discord.crspy.cc'>
                <li class="icon discord">
                    <span class="tooltip">Discord</span>
                    <span><i class="fab fa-discord-f"></i></span>
                    <v-icon name="fa-discord" />
                </li>
            </a>
            <a href='https://youtube.com/@crspytm'>
                <li class="icon youtube">
                    <span class="tooltip">Youtube</span>
                    <span><i class="fab fa-youtube"></i></span>
                    <v-icon name="fa-youtube" />
                </li>
            </a>
        </ul>
    </footer>
</template>

<style>
.footer-wrapper {
    display: inline-flex;
    list-style: none;
}

.footer-wrapper .icon {
    position: relative;
    background: #ffffff;
    border-radius: 50%;
    padding: 15px;
    margin: 10px;
    width: 50px;
    height: 50px;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.footer-wrapper .tooltip {
    position: absolute;
    top: 0;
    font-size: 14px;
    background: #ffffff;
    color: #ffffff;
    padding: 5px 8px;
    border-radius: 5px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.footer-wrapper .tooltip::before {
    position: absolute;
    content: "";
    height: 8px;
    width: 8px;
    background: #ffffff;
    bottom: -3px;
    left: 50%;
    transform: translate(-50%) rotate(45deg);
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.footer-wrapper .icon:hover .tooltip {
    top: -45px;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
}

.footer-wrapper .icon:hover .tooltip {
    text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
}

.footer-wrapper .discord:hover,
.footer-wrapper .discord:hover .tooltip,
.footer-wrapper .discord:hover .tooltip::before {
    background: #5865F2;
    color: #ffffff;
}
.footer-wrapper .youtube:hover,
.footer-wrapper .youtube:hover .tooltip,
.footer-wrapper .youtube:hover .tooltip::before {
    background: #CD201F;
    color: #ffffff;
}
</style>