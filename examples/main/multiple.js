import { loadMicroApp } from "qiankun";

let app;

function mount() {
  app = loadMicroApp(
    { name: "vite-vue3", entry: "//localhost:7106", container: "#vite-vue3" },
    // { name: 'vite-vue3', entry: '//localhost:7101', container: '#vite-vue3' },
    {
      sandbox: {
        strictStyleIsolation: true,
        // experimentalStyleIsolation: true,
      },
      singular: false,
    }
  );
}

function unmount() {
  app.unmount();
}

document.querySelector("#mount").addEventListener("click", mount);
document.querySelector("#unmount").addEventListener("click", unmount);

loadMicroApp(
  { name: "vue", entry: "//localhost:7101", container: "#vue" },
  {
    sandbox: {
      strictStyleIsolation: true,
      // experimentalStyleIsolation: true,
    },
    singular: false,
  }
);
// mount();
setTimeout(() => {
  mount();
}, 200);

setTimeout(() => {
  loadMicroApp(
    {
      name: "vue3",
      entry: "//localhost:7105",
      container: "#vue3",
    },
    {
      sandbox: {
        strictStyleIsolation: true,
        // experimentalStyleIsolation: true,
      },
      singular: false,
    }
  );
}, 400);

setTimeout(() => {
  loadMicroApp(
    {
      name: "vue-another",
      entry: "//localhost:7107",
      container: "#vue-another",
    },
    {
      sandbox: {
        strictStyleIsolation: true,
        // experimentalStyleIsolation: true,
      },
      singular: false,
    }
  );
}, 1000);
