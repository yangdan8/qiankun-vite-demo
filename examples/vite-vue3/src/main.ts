import { createApp, CreateAppFunction } from 'vue'
import App from './App.vue'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper';

// createApp(App).mount('#app')

let instance: ReturnType<CreateAppFunction<Element>> | null = null;

function render(props: {
    container?: HTMLElement
} = {}) {
    const { container } = props
    instance = createApp(App)
    instance.mount(container ? container.querySelector("#app")! : "#app")
}

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
    render();
}

export async function bootstrap() {
    console.log("%c ", "color: green;", "vue3.0 app bootstraped");
}


export async function mount(props: any) {
    render(props);
    // instance!.config.globalProperties.$onGlobalStateChange = props.onGlobalStateChange;
    // instance!.config.globalProperties.$setGlobalState = props.setGlobalState;
}


export async function unmount() {
    instance!.unmount();
    // instance._container.innerHTML = "";
    instance = null;
}

renderWithQiankun({
    mount(props) {
        console.log("viteapp mount");
        render(props);
        // console.log(instance.config.globalProperties.$route,"444444444");
    },
    bootstrap() {
        console.log("bootstrap");
    },
    unmount(props) {
        console.log("vite被卸载了");
        instance!.unmount();
        // instance._container.innerHTML = "";
        instance = null;
    },
});