import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@soma/navbar",
  app: () => System.import("@soma/navbar"),
  activeWhen: () => true,
  customProps: { domElement: document.getElementById('mf-navbar') }
});

registerApplication({
  name: "@soma/exams",
  app: () => System.import("@soma/exams"),
  activeWhen: ['/exams'],
  customProps: { domElement: document.getElementById('mf-exams') }
});

registerApplication({
  name: "@soma/vaccines",
  app: () => System.import("@soma/vaccines"),
  activeWhen: ['/vaccines'],
  customProps: { domElement: document.getElementById('mf-vaccines') }
});

registerApplication({
  name: "@soma/utility",
  app: () => System.import("@soma/utility"),
  activeWhen: () => true,
  customProps: { domElement: document.getElementById('mf-vaccines') }
});

start({
  urlRerouteOnly: true,
});
