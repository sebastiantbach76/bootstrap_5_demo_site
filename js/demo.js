const backgr = document.querySelector("body");
const heading1 = document.querySelector(".heading1");
const heading1Txt = document.querySelector(".heading1txt");
const heading1ClassProps = ["container-sm", "text-white", "rounded-pill", "px-3", "py-2", "m-5", "align-middle", "w-50", "text-wrap"];
const heading1TxtClassProps = ["text-center"];
const widots = document.querySelector(".widots");
const widotsClassProps = ["m-5"];
const widotsHeader = document.querySelector(".widots-header");
const widotsHeaderClassProps = ["text-info", "fs-3", "py-0", "m-0"];
const widotsButton = document.querySelector(".widots-button");
const widotsButtonClassProps = ["btn", "align-middle", "bi-brightness-high-fill", "fs-4", "text-warning"];
const widotsTxt = document.querySelector(".widots-txt");
const widotsTxtClassProps = ["collapse", "text-warning", "fs-4", "text-wrap", "text-align-right", "row", "gx-0"];
const widotsCell1 = document.querySelector(".widots-cell-1");
const widotsCell1ClassProps = ["w-50", "lh-2", "col"];
const widotsCell2 = document.querySelector(".widots-cell-2");
const widotsCell2ClassProps = ["col", "w-50", "lh-2"];
const footer = document.querySelector("footer");
const footerClassProps = ["text-white", "fs-5", "bg-primary", "px-2", "position-sticky", "w-100"];
const inProgress = Array.from(document.querySelectorAll(".inProgress"));
const inProgressAttribs = [["data-bs-toggle", "tooltip"], ["data-bs-placement", "left"], ["title", "In Progress"]];
const spinner = Array.from(document.querySelectorAll(".spinner"));
const spinnerAttribs = [["class", "spinner-border text-success"], ["title", "In Progress"]];
const wihta = document.querySelector(".wihta");
const wihtaClassProps = ["m-5"];
const wihtaHeader = document.querySelector(".wihta-header");
const wihtaHeaderClassProps = ["text-info", "fs-3", "py-0", "m-0"];
const wihtaButton = document.querySelector(".wihta-button");
const wihtaButtonClassProps = ["btn", "align-middle", "bi-wind", "fs-4", "filter-orange"];
const wihtaTxt = document.querySelector(".wihta-txt");
const wihtaTxtClassProps = ["collapse", "text-warning", "fs-4", "text-wrap", "text-align-right", "row", "gx-0"];
const wihtaCell1 = document.querySelector(".wihta-cell-1");
const wihtaCell1ClassProps = ["w-50", "lh-2", "col", "d-inline"];
const wihtaCell2 = document.querySelector(".wihta-cell-2");
const wihtaCell2ClassProps = ["col", "w-50", "lh-2", "d-inline"];
const ats = document.querySelector(".ats");
const atsClassProps = ["m-5"];
const atsHeader = document.querySelector(".ats-header");
const atsHeaderClassProps = ["text-info", "fs-3", "py-0", "m-0"];
const atsButton = document.querySelector(".ats-button");
const atsButtonClassProps = ["btn", "align-middle", "bi-filetype-html", "fs-4", "text-primary"];
const atsTxt = document.querySelector(".ats-txt");
const atsTxtClassProps = ["collapse", "text-warning", "fs-5", "text-wrap", "row", "gx-0"];
const trashExample = document.querySelector(".trashExample");
const trashExampleClassProps = ["d-inline-block", "btn", "bi-trash", "fs-1", "text-warning", "px-5", "py-5", "m-1"]

function classPropApplier(target, attrList) {
    for(let i = 0; i < attrList.length; i++) {
        target.classList.add(attrList[i]);
    }
}

function elemAttribApplier(target, attrList) {
    for(let i = 0; i < target.length; i++) {
        for(let j = 0; j < attrList.length; j++) {
            target[i].setAttribute(attrList[j][0], attrList[j][1]);
        }
    }
}

backgr.classList.add("bg-dark");
classPropApplier(heading1, heading1ClassProps);
classPropApplier(heading1Txt, heading1TxtClassProps);
classPropApplier(widots, widotsClassProps);
classPropApplier(widotsHeader, widotsHeaderClassProps);
classPropApplier(widotsButton, widotsButtonClassProps);
classPropApplier(widotsTxt, widotsTxtClassProps);
classPropApplier(widotsCell1, widotsCell1ClassProps);
classPropApplier(widotsCell2, widotsCell2ClassProps);
classPropApplier(wihta, wihtaClassProps);
classPropApplier(wihtaHeader, wihtaHeaderClassProps);
classPropApplier(wihtaButton, wihtaButtonClassProps);
classPropApplier(wihtaTxt, wihtaTxtClassProps);
classPropApplier(wihtaCell1, wihtaCell1ClassProps);
classPropApplier(wihtaCell2, wihtaCell2ClassProps);
classPropApplier(ats, atsClassProps);
classPropApplier(atsHeader, atsHeaderClassProps);
classPropApplier(atsButton, atsButtonClassProps);
classPropApplier(atsTxt, atsTxtClassProps);
classPropApplier(trashExample, trashExampleClassProps);
classPropApplier(footer, footerClassProps);
elemAttribApplier(inProgress, inProgressAttribs);
elemAttribApplier(spinner, spinnerAttribs);
