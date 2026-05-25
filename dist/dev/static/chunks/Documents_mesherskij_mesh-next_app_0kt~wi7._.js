(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/mesherskij/mesh-next/app/context/ThemeContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider,
    "useTheme",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/mesherskij/mesh-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/mesherskij/mesh-next/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    theme: "light",
    toggle: ()=>{}
});
function ThemeProvider({ children }) {
    _s();
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("light");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeProvider.useEffect": ()=>{
            const saved = localStorage.getItem("mesh-theme");
            if (saved) setTheme(saved);
        }
    }["ThemeProvider.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeProvider.useEffect": ()=>{
            document.documentElement.setAttribute("data-theme", theme);
            localStorage.setItem("mesh-theme", theme);
        }
    }["ThemeProvider.useEffect"], [
        theme
    ]);
    const toggle = ()=>setTheme((t)=>t === "light" ? "dark" : "light");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeContext.Provider, {
        value: {
            theme,
            toggle
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/mesherskij/mesh-next/app/context/ThemeContext.tsx",
        lineNumber: 27,
        columnNumber: 10
    }, this);
}
_s(ThemeProvider, "+6C7zX0KFXKdtXxqQH7LMHLz9vo=");
_c = ThemeProvider;
function useTheme() {
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
}
_s1(useTheme, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
var _c;
__turbopack_context__.k.register(_c, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/mesherskij/mesh-next/app/components/Logo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LogoMonogram",
    ()=>LogoMonogram,
    "LogoText",
    ()=>LogoText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/mesherskij/mesh-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function LogoMonogram({ size = 32 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "40",
        height: "40",
        viewBox: "0 0 648 605",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                clipPath: "url(#clip0_2010_2)",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M296.928 393.178C225.144 340.06 150.912 290.976 81.0721 234.87C132.48 297.818 171.18 335.739 186.048 434.988C197.496 511.477 156.456 604.784 72.4681 605C18.1081 605 -5.18389 557.428 0.972115 513.134C12.1681 433.547 87.8041 392.53 73.9441 306.209C64.4401 247.042 37.5121 173.757 32.5441 118.983C28.1881 70.2952 44.8201 18.6541 97.9561 3.31307C135.648 -7.45449 178.488 8.67884 201.276 46.8515C208.08 58.2672 206.748 70.4032 225.936 69.1428C251.568 67.4503 251.388 83.9077 273.312 87.3288C285.192 89.2015 292.428 97.7003 287.64 108.828C280.08 126.33 273.42 145.992 259.848 158.848C230.328 186.65 201.06 274.159 241.02 302.536C268.416 324.935 296.928 346.002 324.036 368.726C351.144 346.002 379.62 324.935 407.052 302.536L447.048 274.123C500.76 230.044 545.112 199.506 574.308 130.651C586.8 101.265 593.064 50.7047 558.792 34.6794C523.764 21.5351 498.636 66.1898 485.892 93.3068C453.06 163.242 437.688 244.269 369.432 289.284C315.072 325.223 260.964 289.428 247.428 243.548C239.868 217.908 250.236 196.445 266.868 186.29C296.388 168.284 309.996 206.348 297.216 227.127C267.336 275.527 336.24 325.223 371.304 238.327C388.08 196.733 402.66 154.239 418.212 112.141C440.46 51.8571 475.164 -16.3494 550.224 3.38509C603.36 18.6901 620.1 70.3672 615.6 119.019C610.668 173.793 583.776 247.042 574.2 306.245C560.376 392.422 636.012 433.439 647.064 513.026C653.292 557.32 630.036 604.856 575.568 604.784C491.58 604.784 450.504 511.369 461.988 434.844C476.856 335.559 515.556 297.674 567 234.726C497.124 290.76 422.928 339.916 351.108 393.034C374.184 416.478 391.5 444.495 398.772 478.958C409.608 530.347 374.868 577.343 324 576.983C273.132 577.343 238.428 530.383 249.228 478.958C256.464 444.495 273.816 416.478 296.892 393.034H296.964L296.928 393.178ZM550.836 297.818C514.368 364.26 495.828 467.254 532.872 537.478C544.176 558.977 580.068 593.188 602.892 567.223C620.676 547.021 596.088 519.184 583.308 502.402C528.372 430.018 540.72 379.097 550.8 297.782L550.836 297.818ZM324.18 536.181C347.148 536.181 356.436 515.438 356.832 494.695C357.336 465.742 338.724 441.578 324.18 416.982C309.672 441.578 291.06 465.742 291.564 494.695C291.924 515.402 301.212 536.145 324.18 536.145V536.181ZM201.096 274.195C199.116 244.881 189.9 238.147 174.204 228.171C153.648 215.027 138.132 197.021 132.984 172.353C126.792 142.535 118.404 151.286 106.092 125.213C131.976 120.604 152.388 128.779 169.272 149.846C188.82 174.046 191.232 191.439 200.7 219.781C200.7 174.802 188.28 127.302 168.336 87.761C155.412 62.1925 122.292 19.4104 89.4961 34.5354C54.9721 50.5247 61.2721 101.193 73.7641 130.651C102.996 199.542 147.312 230.044 201.06 274.195H201.096ZM97.2361 297.782C107.352 379.097 119.664 430.018 64.6921 502.366C51.9481 519.148 27.3601 546.985 45.1441 567.187C67.9681 593.152 103.86 558.833 115.164 537.442C152.244 467.182 133.668 364.26 97.2001 297.782",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/Documents/mesherskij/mesh-next/app/components/Logo.tsx",
                    lineNumber: 7,
                    columnNumber: 1
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/mesherskij/mesh-next/app/components/Logo.tsx",
                lineNumber: 6,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                    id: "clip0_2010_2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        width: "648",
                        height: "605",
                        fill: "white"
                    }, void 0, false, {
                        fileName: "[project]/Documents/mesherskij/mesh-next/app/components/Logo.tsx",
                        lineNumber: 11,
                        columnNumber: 1
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/mesherskij/mesh-next/app/components/Logo.tsx",
                    lineNumber: 10,
                    columnNumber: 1
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/mesherskij/mesh-next/app/components/Logo.tsx",
                lineNumber: 9,
                columnNumber: 1
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/mesherskij/mesh-next/app/components/Logo.tsx",
        lineNumber: 5,
        columnNumber: 1
    }, this);
}
_c = LogoMonogram;
function LogoText({ className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex flex-col items-center ${className}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "200",
            height: "37",
            viewBox: "0 0 2249 351",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    clipPath: "url(#clip0_2010_5)",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M725.949 295.078C725.949 311.984 724.403 324.249 721.255 331.872H748.074V295.078H725.921H725.949ZM756.086 331.872H763.648V351H756.395V338.735H713.636V351H706.411V331.872H712.793C716.475 326.471 718.359 311.928 718.331 288.215H756.086V331.872Z",
                            fill: "white"
                        }, void 0, false, {
                            fileName: "[project]/Documents/mesherskij/mesh-next/app/components/Logo.tsx",
                            lineNumber: 23,
                            columnNumber: 1
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M992.793 331.872H1021.83V288.215H1029.87V331.872H1037.44V351H1030.15V338.735H984.809V288.215H992.793V331.872Z",
                            fill: "white"
                        }, void 0, false, {
                            fileName: "[project]/Documents/mesherskij/mesh-next/app/components/Logo.tsx",
                            lineNumber: 24,
                            columnNumber: 1
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M550.021 287.511C555.84 287.511 560.535 288.805 564.161 291.449C567.76 294.094 569.559 297.554 569.559 301.773C569.559 306.639 567.282 310.268 562.7 312.687C565.258 313.756 567.282 315.331 568.8 317.441C570.29 319.551 571.021 321.886 571.021 324.417C571.021 328.834 568.94 332.462 564.836 335.247C560.675 338.032 555.362 339.438 548.896 339.438C542.515 339.438 537.314 338.088 533.35 335.416C529.386 332.772 527.362 329.284 527.362 324.952C527.362 323.658 527.643 322.308 528.205 320.901H535.571C535.177 322.195 535.009 323.32 535.009 324.277C535.009 326.555 536.274 328.44 538.832 329.874C541.362 331.309 544.707 332.012 548.84 332.012C553.057 332.012 556.487 331.225 559.073 329.677C561.631 328.13 562.953 326.133 562.953 323.63C562.953 321.548 562.137 319.832 560.479 318.369C558.82 316.963 556.655 316.26 553.928 316.26H543.92V309.79H552.467C555.222 309.79 557.386 309.115 559.045 307.736C560.675 306.386 561.463 304.698 561.463 302.617C561.463 300.338 560.366 298.454 558.201 297.019C556.009 295.613 553.141 294.909 549.515 294.909C545.41 294.909 541.981 295.866 539.338 297.75C536.667 299.663 535.234 302.167 534.981 305.289H527.334C527.784 299.888 530.117 295.613 534.222 292.321C538.326 289.087 543.611 287.455 550.021 287.455V287.511Z",
                            fill: "white"
                        }, void 0, false, {
                            fileName: "[project]/Documents/mesherskij/mesh-next/app/components/Logo.tsx",
                            lineNumber: 25,
                            columnNumber: 1
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M1779.24 294.938H1778.31C1776.49 294.938 1775.11 295.641 1774.21 297.02L1762.65 312.631L1775.78 329.931C1776.79 331.309 1778.17 332.013 1779.92 332.041H1780.62V338.933H1777.44C1774.24 338.933 1771.73 337.639 1769.94 334.994L1757.4 318.286C1756.33 316.907 1755.01 316.204 1753.35 316.204H1747.02V338.708H1739.01V288.187H1747.02V309.312H1753.29C1754.98 309.312 1756.33 308.609 1757.34 307.231L1768.22 292.013C1770.02 289.312 1772.47 287.962 1775.64 287.962H1779.24V294.91V294.938Z",
                            fill: "white"
                        }, void 0, false, {
                            fileName: "[project]/Documents/mesherskij/mesh-next/app/components/Logo.tsx",
                            lineNumber: 26,
                            columnNumber: 1
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M367.318 312.012H383.117C385.9 312.012 388.15 311.197 389.808 309.621C391.467 308.046 392.282 306.021 392.282 303.602C392.282 301.098 391.439 299.045 389.78 297.469C388.121 295.894 385.9 295.078 383.117 295.078H367.318V312.012ZM383.202 288.215C388.318 288.215 392.423 289.649 395.599 292.519C398.776 295.36 400.35 299.073 400.35 303.574C400.35 308.074 398.776 311.787 395.571 314.628C392.366 317.47 388.262 318.904 383.23 318.904H367.346V338.735H359.362V288.215H383.23H383.202Z",
                            fill: "white"
                        }, void 0, false, {
                            fileName: "[project]/Documents/mesherskij/mesh-next/app/components/Logo.tsx",
                            lineNumber: 27,
                            columnNumber: 1
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M483.479 295.078H452.865V309.875H480.443V316.569H452.865V331.872H484.21V338.735H444.853V288.215H483.479V295.078Z",
                            fill: "white"
                        }, void 0, false, {
                            fileName: "[project]/Documents/mesherskij/mesh-next/app/components/Logo.tsx",
                            lineNumber: 28,
                            columnNumber: 1
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M623.648 326.105L655.64 288.215H662.837V338.735H654.853V300.789L622.861 338.735H615.636V288.215H623.648V326.105Z",
                            fill: "white"
                        }, void 0, false, {
                            fileName: "[project]/Documents/mesherskij/mesh-next/app/components/Logo.tsx",
                            lineNumber: 29,
                            columnNumber: 1
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M845.821 295.078H815.178V309.875H842.785V316.569H815.178V331.872H846.552V338.735H807.194V288.215H845.821V295.078Z",
                            fill: "white"
                        }, void 0, false, {
                            fileName: "[project]/Documents/mesherskij/mesh-next/app/components/Logo.tsx",
                            lineNumber: 30,
                            columnNumber: 1
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M899.375 309.79H929.511V288.215H937.495V338.735H929.511V316.71H899.375V338.735H891.391V288.215H899.375V309.79Z",
                            fill: "white"
                        }, void 0, false, {
                            fileName: "[project]/Documents/mesherskij/mesh-next/app/components/Logo.tsx",
                            lineNumber: 31,
                            columnNumber: 1
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M1089.16 326.105L1121.18 288.215H1128.38V338.735H1120.4V300.789L1088.4 338.735H1081.18V288.215H1089.16V326.105Z",
                            fill: "white"
                        }, void 0, false, {
                            fileName: "[project]/Documents/mesherskij/mesh-next/app/components/Logo.tsx",
                            lineNumber: 32,
                            columnNumber: 1
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M1183.65 326.105L1215.64 288.215H1222.87V338.735H1214.88V300.789L1182.89 338.735H1175.67V288.215H1183.65V326.105Z",
                            fill: "white"
                        }, void 0, false, {
                            fileName: "[project]/Documents/mesherskij/mesh-next/app/components/Logo.tsx",
                            lineNumber: 33,
                            columnNumber: 1
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M1333.88 309.874H1350.33C1353.03 309.874 1355.22 309.171 1356.88 307.765C1358.54 306.386 1359.35 304.586 1359.35 302.448C1359.35 300.31 1358.54 298.566 1356.88 297.16C1355.22 295.781 1353.06 295.078 1350.33 295.078H1333.88V309.874ZM1333.88 331.872H1351.76C1354.55 331.872 1356.79 331.14 1358.45 329.678C1360.11 328.243 1360.93 326.358 1360.93 324.08C1360.93 321.801 1360.11 319.945 1358.45 318.51C1356.79 317.076 1354.55 316.372 1351.76 316.372H1333.88V331.872ZM1350.38 288.215C1355.42 288.215 1359.49 289.48 1362.64 292.012C1365.76 294.572 1367.34 297.863 1367.34 301.829C1367.34 306.808 1365.09 310.437 1360.59 312.744C1365.9 314.741 1368.99 319.129 1368.99 324.727C1368.99 328.806 1367.42 332.153 1364.24 334.769C1361.07 337.413 1356.96 338.707 1351.85 338.707H1325.9V288.187H1350.38V288.215Z",
                            fill: "white"
                        }, void 0, false, {
                            fileName: "[project]/Documents/mesherskij/mesh-next/app/components/Logo.tsx",
                            lineNumber: 34,
                            columnNumber: 1
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M1514.9 338.735H1506.91V295.078H1477.34V338.735H1469.36V288.215H1514.9V338.735Z",
                            fill: "white"
                        }, void 0, false, {
                            fileName: "[project]/Documents/mesherskij/mesh-next/app/components/Logo.tsx",
                            lineNumber: 35,
                            columnNumber: 1
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M1574.89 320.395H1594.15L1584.56 298.651L1574.89 320.395ZM1610.99 338.735H1602.19L1597.16 327.259H1571.85L1566.74 338.735H1557.94L1580.85 288.215H1588.13L1610.99 338.735Z",
                            fill: "white"
                        }, void 0, false, {
                            fileName: "[project]/Documents/mesherskij/mesh-next/app/components/Logo.tsx",
                            lineNumber: 36,
                            columnNumber: 1
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M1662.07 312.012H1677.87C1680.65 312.012 1682.9 311.197 1684.56 309.621C1686.22 308.046 1687.03 306.021 1687.03 303.602C1687.03 301.183 1686.19 299.045 1684.53 297.469C1682.87 295.894 1680.65 295.078 1677.87 295.078H1662.07V312.012ZM1677.95 288.215C1683.07 288.215 1687.17 289.649 1690.35 292.519C1693.53 295.36 1695.1 299.073 1695.1 303.574C1695.1 308.074 1693.53 311.787 1690.32 314.628C1687.12 317.47 1683.01 318.904 1677.98 318.904H1662.1V338.735H1654.11V288.215H1677.98H1677.95Z",
                            fill: "white"
                        }, void 0, false, {
                            fileName: "[project]/Documents/mesherskij/mesh-next/app/components/Logo.tsx",
                            lineNumber: 37,
                            columnNumber: 1
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M1864.2 295.078H1833.55V309.875H1861.16V316.569H1833.55V331.872H1864.93V338.735H1825.57V288.215H1864.2V295.078Z",
                            fill: "white"
                        }, void 0, false, {
                            fileName: "[project]/Documents/mesherskij/mesh-next/app/components/Logo.tsx",
                            lineNumber: 38,
                            columnNumber: 1
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M488.426 8.88867C492.306 8.88867 495.426 12.0392 495.426 15.921V136.147C495.426 140.028 498.575 143.179 502.426 143.179H553.957C557.836 143.179 560.957 140.028 560.957 136.147V15.921C560.957 12.0392 564.105 8.88867 567.957 8.88867H579.398C583.278 8.88867 586.398 12.0392 586.398 15.921V136.147C586.398 140.028 589.547 143.179 593.398 143.179H645.154C649.033 143.179 652.154 140.028 652.154 136.147V15.921C652.154 12.0392 655.302 8.88867 659.154 8.88867H670.595C674.475 8.88867 677.595 12.0392 677.595 15.921V136.147C677.595 140.028 680.744 143.179 684.595 143.179H688.728C692.607 143.179 695.728 146.329 695.728 150.211V181.435C695.728 185.317 692.579 188.467 688.728 188.467H681.7C677.82 188.467 674.7 185.317 674.7 181.435V171.28C674.7 167.398 671.551 164.248 667.7 164.248H476.619C472.74 164.248 469.619 161.097 469.619 157.216V15.921C469.619 12.0392 472.768 8.88867 476.619 8.88867H488.286H488.426Z",
                            fill: "white"
                        }, void 0, false, {
                            fileName: "[project]/Documents/mesherskij/mesh-next/app/components/Logo.tsx",
                            lineNumber: 39,
                            columnNumber: 1
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M1247.38 6.66699C1273.95 6.66699 1296.27 12.743 1314.26 24.8668C1330.26 35.6404 1340.69 49.5082 1345.49 66.4985C1346.53 70.1272 1344.17 73.7277 1340.52 74.5998L1327.36 77.7503C1323.09 78.7629 1318.98 75.6124 1318.08 71.3086C1315.64 59.4942 1309.11 49.7895 1298.52 42.1946C1285.67 32.7149 1268.6 27.9892 1247.35 27.9892C1223.74 27.9892 1205.27 33.3056 1191.97 43.9667C1178.67 54.459 1172.04 69.0582 1172.04 87.68C1172.04 106.302 1178.67 119.86 1191.97 130.071C1205.27 140.142 1223.71 145.177 1247.35 145.177C1268.32 145.177 1285.3 140.732 1298.29 131.871C1308.89 124.53 1315.41 115.247 1317.86 104.051C1318.76 99.9163 1322.58 96.7939 1326.74 97.5534L1340.07 99.9726C1343.89 100.676 1346.48 104.361 1345.38 108.13C1340.63 124.502 1330.31 137.976 1314.46 148.524C1296.44 160.507 1274.06 166.499 1247.35 166.499C1216.62 166.499 1192.14 159.41 1173.81 145.205C1155.79 131.084 1146.71 112.293 1146.57 88.8333V86.5548C1146.71 62.3916 1155.7 43.0947 1173.58 28.6643C1191.89 14.0088 1216.48 6.69512 1247.35 6.69512L1247.38 6.66699Z",
                            fill: "white"
                        }, void 0, false, {
                            fileName: "[project]/Documents/mesherskij/mesh-next/app/components/Logo.tsx",
                            lineNumber: 40,
                            columnNumber: 1
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M35.984 8.88867C38.739 8.88867 41.241 10.5202 42.3937 13.0518L96.5946 134.403C99.0685 139.944 106.912 139.944 109.386 134.403L163.587 13.0518C164.711 10.5202 167.213 8.88867 169.996 8.88867H198.559C202.438 8.88867 205.559 12.0392 205.559 15.8929L205.755 157.216C205.755 161.097 202.635 164.248 198.755 164.248H187.398C183.49 164.248 180.342 161.041 180.398 157.159L181.494 61.2096C181.579 53.5865 171.205 51.308 168.085 58.256L122.374 160.113C121.249 162.645 118.747 164.248 115.992 164.248H90.0725C87.3174 164.248 84.8154 162.616 83.6909 160.113L37.9238 58.256C34.8033 51.308 24.4298 53.6146 24.5141 61.2096L25.6105 157.159C25.6667 161.069 22.49 164.276 18.6105 164.276H7.00001C3.12049 164.248 0 161.097 0 157.216L0.196788 15.8929C0.196788 12.011 3.34539 8.88867 7.1968 8.88867H35.9559H35.984Z",
                            fill: "white"
                        }, void 0, false, {
                            fileName: "[project]/Documents/mesherskij/mesh-next/app/components/Logo.tsx",
                            lineNumber: 41,
                            columnNumber: 1
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M401.419 8.88867C405.298 8.88867 408.419 12.0392 408.419 15.921V23.1785C408.419 27.0603 405.27 30.2108 401.419 30.2108H304.459C300.579 30.2108 297.458 33.3613 297.458 37.2432V68.467C297.458 72.3488 300.607 75.4993 304.459 75.4993H392.535C396.415 75.4993 399.535 78.6499 399.535 82.5317V90.0142C399.535 93.896 396.386 97.0466 392.535 97.0466H304.459C300.579 97.0466 297.458 100.197 297.458 104.079V135.978C297.458 139.86 300.607 143.01 304.459 143.01H402.965C406.844 143.01 409.965 146.161 409.965 150.043V157.3C409.965 161.182 406.816 164.332 402.965 164.332H278.764C274.884 164.332 271.764 161.182 271.764 157.3V15.921C271.764 12.0392 274.912 8.88867 278.764 8.88867H401.419Z",
                            fill: "white"
                        }, void 0, false, {
                            fileName: "[project]/Documents/mesherskij/mesh-next/app/components/Logo.tsx",
                            lineNumber: 42,
                            columnNumber: 1
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M883.492 8.88867C887.371 8.88867 890.492 12.0392 890.492 15.921V23.1785C890.492 27.0603 887.343 30.2108 883.492 30.2108H786.532C782.652 30.2108 779.532 33.3613 779.532 37.2432V68.467C779.532 72.3488 782.68 75.4993 786.532 75.4993H874.608C878.488 75.4993 881.608 78.6499 881.608 82.5317V90.0142C881.608 93.896 878.46 97.0466 874.608 97.0466H786.532C782.652 97.0466 779.532 100.197 779.532 104.079V135.978C779.532 139.86 782.68 143.01 786.532 143.01H885.038C888.918 143.01 892.038 146.161 892.038 150.043V157.3C892.038 161.182 888.889 164.332 885.038 164.332H760.837C756.957 164.332 753.837 161.182 753.837 157.3V15.921C753.837 12.0392 756.986 8.88867 760.837 8.88867H883.492Z",
                            fill: "white"
                        }, void 0, false, {
                            fileName: "[project]/Documents/mesherskij/mesh-next/app/components/Logo.tsx",
                            lineNumber: 43,
                            columnNumber: 1
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M984.556 30.2108C980.677 30.2108 977.556 33.3613 977.556 37.2432V80.9002C977.556 84.7821 980.705 87.9326 984.556 87.9326H1048.65C1058.69 87.9326 1066.53 85.4291 1072.13 80.3939C1077.75 75.2181 1080.53 68.1013 1080.53 59.0998C1080.53 50.0984 1077.72 43.0379 1072.13 38.0027C1066.5 32.8269 1058.69 30.239 1048.65 30.239H984.556V30.2108ZM1046.43 8.88867C1065.18 8.88867 1079.8 13.3331 1090.29 22.1939C1100.77 30.9141 1106 43.2067 1106 59.0436C1106 74.8805 1100.77 87.2293 1090.29 96.1183C1079.8 104.838 1065.18 109.198 1046.43 109.198H984.556C980.677 109.198 977.556 112.349 977.556 116.231V157.216C977.556 161.097 974.408 164.248 970.556 164.248H958.89C955.01 164.248 951.89 161.097 951.89 157.216V15.921C951.89 12.0392 955.038 8.88867 958.89 8.88867H1046.46H1046.43Z",
                            fill: "white"
                        }, void 0, false, {
                            fileName: "[project]/Documents/mesherskij/mesh-next/app/components/Logo.tsx",
                            lineNumber: 44,
                            columnNumber: 1
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M1517.09 9.33854C1522.83 8.52279 1529.38 8.26962 1536.71 8.52279C1540.4 8.66343 1543.21 11.7296 1543.21 15.4145V22.3062C1543.21 26.4132 1539.69 29.6199 1535.59 29.5918C1530.36 29.5637 1525.81 30.0419 1521.95 31.0827C1516.5 32.4047 1512.42 34.5707 1509.78 37.5243C1507.28 40.3373 1505.2 43.6565 1503.57 47.5103C1502.08 51.1952 1500.62 55.1334 1499.13 59.2684C1497.64 63.4035 1495.81 67.2572 1493.59 70.8015C1491.37 74.3458 1487.77 77.5245 1482.74 80.3374C1480.91 81.3501 1481.25 87.9886 1483.27 88.5231C1486.93 89.4514 1490.36 90.5766 1493.59 91.8986C1502.16 95.3023 1508.8 99.2967 1513.52 103.882C1518.24 108.326 1522.38 113.502 1525.92 119.409C1529.6 125.176 1532.33 130.661 1534.13 135.837C1536.04 140.872 1538.26 146.132 1540.76 151.589C1543.26 156.737 1539.55 164.248 1533.85 164.248H1523.05C1521.2 164.248 1519.37 163.516 1518.36 161.969C1516.95 159.803 1515.49 156.737 1513.94 152.715C1511.72 146.807 1509.22 140.872 1506.41 134.965C1503.74 128.889 1500.14 122.897 1495.56 116.99C1491.12 110.914 1484.62 105.963 1476.08 102.11C1467.5 98.2559 1457.32 96.3431 1445.52 96.3431H1435.03C1431.15 96.3431 1428.03 99.4936 1428.03 103.375V157.244C1428.03 161.125 1424.88 164.276 1421.03 164.276H1409.36C1405.48 164.276 1402.36 161.125 1402.36 157.244V15.9208C1402.36 12.039 1405.51 8.88847 1409.36 8.88847H1421.03C1424.91 8.88847 1428.03 12.039 1428.03 15.9208V68.2417C1428.03 72.1236 1431.18 75.2741 1435.03 75.2741H1438.88C1446.11 75.2741 1452.24 74.4584 1457.27 72.8268C1462.3 71.0547 1466.07 68.8325 1468.57 66.1602C1471.24 63.3472 1473.38 60.1686 1474.98 56.6242C1476.75 52.9393 1478.24 49.1418 1479.42 45.3162C1480.6 41.4624 1481.87 37.6087 1483.19 33.7831C1484.68 29.9293 1486.73 26.385 1489.4 23.122C1492.21 19.7183 1495.67 16.821 1499.8 14.4581C1504.08 12.0952 1509.84 10.3793 1517.09 9.36667V9.33854Z",
                            fill: "white"
                        }, void 0, false, {
                            fileName: "[project]/Documents/mesherskij/mesh-next/app/components/Logo.tsx",
                            lineNumber: 45,
                            columnNumber: 1
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M1616.02 8.88867C1619.9 8.88867 1623.02 12.0392 1623.02 15.921V124.135C1623.02 130.914 1631.62 133.756 1635.67 128.327L1721.92 11.7579C1723.24 9.95759 1725.32 8.9168 1727.54 8.9168H1755.54C1759.42 8.9168 1762.54 12.0673 1762.54 15.9492V157.272C1762.54 161.154 1759.39 164.304 1755.54 164.304H1744.1C1740.22 164.304 1737.1 161.154 1737.1 157.272V51.308C1737.1 44.5288 1728.47 41.6877 1724.45 47.1448L1640.2 161.407C1638.87 163.207 1636.79 164.248 1634.55 164.248H1604.32C1600.44 164.248 1597.32 161.097 1597.32 157.216V15.921C1597.32 12.0392 1600.47 8.88867 1604.32 8.88867H1615.99H1616.02Z",
                            fill: "white"
                        }, void 0, false, {
                            fileName: "[project]/Documents/mesherskij/mesh-next/app/components/Logo.tsx",
                            lineNumber: 46,
                            columnNumber: 1
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M1847.33 8.88867C1851.21 8.88867 1854.33 12.0392 1854.33 15.921V124.135C1854.33 130.914 1862.93 133.756 1866.98 128.327L1953.23 11.7579C1954.55 9.95759 1956.63 8.9168 1958.85 8.9168H1986.85C1990.73 8.9168 1993.85 12.0673 1993.85 15.9492V157.272C1993.85 161.154 1990.7 164.304 1986.85 164.304H1975.41C1971.53 164.304 1968.41 161.154 1968.41 157.272V51.308C1968.41 44.5288 1959.78 41.6877 1955.76 47.1448L1871.51 161.407C1870.18 163.207 1868.1 164.248 1865.85 164.248H1835.63C1831.75 164.248 1828.63 161.097 1828.63 157.216V15.921C1828.63 12.0392 1831.78 8.88867 1835.63 8.88867H1847.3H1847.33Z",
                            fill: "white"
                        }, void 0, false, {
                            fileName: "[project]/Documents/mesherskij/mesh-next/app/components/Logo.tsx",
                            lineNumber: 47,
                            columnNumber: 1
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M2242.34 8.74805C2246.02 8.74805 2249 11.7298 2249 15.4147V157.497C2249 161.182 2246.02 164.164 2242.34 164.164H2229.91C2226.23 164.164 2223.25 161.182 2223.25 157.497V59.0436C2223.25 52.5738 2214.96 49.9015 2211.19 55.1617L2178.94 100.281C2176.5 103.685 2171.55 104.023 2168.68 100.985L2160.67 92.4615C2158.31 89.9579 2158.25 86.0479 2160.56 83.46L2225.27 10.9703C2226.54 9.5638 2228.34 8.74805 2230.25 8.74805H2242.37H2242.34Z",
                            fill: "white"
                        }, void 0, false, {
                            fileName: "[project]/Documents/mesherskij/mesh-next/app/components/Logo.tsx",
                            lineNumber: 48,
                            columnNumber: 1
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M1923.26 0C1926.61 0 1929.36 2.75669 1928.63 6.01972C1925.9 18.1717 1915.05 27.2575 1902.09 27.2575C1889.13 27.2575 1878.31 18.1717 1875.55 6.01972C1874.82 2.75669 1877.61 0 1880.92 0C1884.24 0 1886.85 2.81295 1888.15 5.9072C1890.45 11.3362 1895.82 15.1337 1902.06 15.1337C1908.3 15.1337 1913.67 11.3362 1915.98 5.9072C1917.27 2.84108 1919.89 0 1923.2 0L1923.26 0Z",
                            fill: "white"
                        }, void 0, false, {
                            fileName: "[project]/Documents/mesherskij/mesh-next/app/components/Logo.tsx",
                            lineNumber: 49,
                            columnNumber: 1
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/mesherskij/mesh-next/app/components/Logo.tsx",
                    lineNumber: 22,
                    columnNumber: 1
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                        id: "clip0_2010_5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            width: "2249",
                            height: "351",
                            fill: "white"
                        }, void 0, false, {
                            fileName: "[project]/Documents/mesherskij/mesh-next/app/components/Logo.tsx",
                            lineNumber: 53,
                            columnNumber: 1
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/mesherskij/mesh-next/app/components/Logo.tsx",
                        lineNumber: 52,
                        columnNumber: 1
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/mesherskij/mesh-next/app/components/Logo.tsx",
                    lineNumber: 51,
                    columnNumber: 1
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/mesherskij/mesh-next/app/components/Logo.tsx",
            lineNumber: 21,
            columnNumber: 1
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/mesherskij/mesh-next/app/components/Logo.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = LogoText;
var _c, _c1;
__turbopack_context__.k.register(_c, "LogoMonogram");
__turbopack_context__.k.register(_c1, "LogoText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/mesherskij/mesh-next/app/components/ThemeToggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeToggle",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/mesherskij/mesh-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/mesherskij/mesh-next/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/Documents/mesherskij/mesh-next/node_modules/lucide-react/dist/esm/icons/sun.mjs [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/Documents/mesherskij/mesh-next/node_modules/lucide-react/dist/esm/icons/moon.mjs [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$app$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/mesherskij/mesh-next/app/context/ThemeContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ThemeToggle() {
    _s();
    const { theme, toggle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$app$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeToggle.useEffect": ()=>{
            setMounted(true);
        }
    }["ThemeToggle.useEffect"], []);
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "icon-glass",
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/Documents/mesherskij/mesh-next/app/components/ThemeToggle.tsx",
            lineNumber: 16,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: toggle,
        className: "icon-glass cursor-pointer",
        title: theme === "light" ? "Тёмная тема" : "Светлая тема",
        children: theme === "light" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
            size: 14,
            strokeWidth: 1.5
        }, void 0, false, {
            fileName: "[project]/Documents/mesherskij/mesh-next/app/components/ThemeToggle.tsx",
            lineNumber: 21,
            columnNumber: 28
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
            size: 14,
            strokeWidth: 1.5
        }, void 0, false, {
            fileName: "[project]/Documents/mesherskij/mesh-next/app/components/ThemeToggle.tsx",
            lineNumber: 21,
            columnNumber: 67
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/mesherskij/mesh-next/app/components/ThemeToggle.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(ThemeToggle, "tlOpWJr1cRy6T49JrCNyH5zAA+0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$app$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/mesherskij/mesh-next/app/components/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/mesherskij/mesh-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/mesherskij/mesh-next/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/Documents/mesherskij/mesh-next/node_modules/lucide-react/dist/esm/icons/search.mjs [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Documents/mesherskij/mesh-next/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$app$2f$components$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/mesherskij/mesh-next/app/components/Logo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$app$2f$components$2f$ThemeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/mesherskij/mesh-next/app/components/ThemeToggle.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Header({ searchQuery, onSearchChange }) {
    _s();
    const [searchOpen, setSearchOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative max-w-5xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$app$2f$components$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LogoMonogram"], {
                            size: 32
                        }, void 0, false, {
                            fileName: "[project]/Documents/mesherskij/mesh-next/app/components/Header.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden sm:block",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$app$2f$components$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LogoText"], {}, void 0, false, {
                                fileName: "[project]/Documents/mesherskij/mesh-next/app/components/Header.tsx",
                                lineNumber: 16,
                                columnNumber: 44
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/mesherskij/mesh-next/app/components/Header.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/mesherskij/mesh-next/app/components/Header.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "hidden md:flex items-center gap-10",
                    children: [
                        {
                            label: "Главная",
                            href: "#hero"
                        },
                        {
                            label: "Сценарии",
                            href: "#categories"
                        },
                        {
                            label: "Видео",
                            href: "#player"
                        }
                    ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: item.href,
                            className: "text-[13px] font-medium tracking-wide transition-colors duration-300 relative group nav-link",
                            children: [
                                item.label,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute -bottom-1 left-0 w-0 h-px bg-[#968766] group-hover:w-full transition-all duration-300"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/mesherskij/mesh-next/app/components/Header.tsx",
                                    lineNumber: 26,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, item.label, true, {
                            fileName: "[project]/Documents/mesherskij/mesh-next/app/components/Header.tsx",
                            lineNumber: 24,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/mesherskij/mesh-next/app/components/Header.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        searchOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "liquid-glass rounded-full px-4 py-2 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                    size: 14,
                                    style: {
                                        color: "var(--jumbo)"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/Documents/mesherskij/mesh-next/app/components/Header.tsx",
                                    lineNumber: 33,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    autoFocus: true,
                                    type: "text",
                                    placeholder: "Поиск...",
                                    value: searchQuery,
                                    onChange: (e)=>onSearchChange(e.target.value),
                                    className: "bg-transparent text-[13px] w-28 md:w-40 outline-none",
                                    style: {
                                        color: "var(--fg)"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/Documents/mesherskij/mesh-next/app/components/Header.tsx",
                                    lineNumber: 34,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setSearchOpen(false);
                                        onSearchChange("");
                                    },
                                    style: {
                                        color: "var(--cloudy)"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/mesherskij/mesh-next/app/components/Header.tsx",
                                        lineNumber: 39,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/mesherskij/mesh-next/app/components/Header.tsx",
                                    lineNumber: 38,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/mesherskij/mesh-next/app/components/Header.tsx",
                            lineNumber: 32,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setSearchOpen(true),
                            className: "icon-glass cursor-pointer",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                size: 14,
                                strokeWidth: 1.5
                            }, void 0, false, {
                                fileName: "[project]/Documents/mesherskij/mesh-next/app/components/Header.tsx",
                                lineNumber: 43,
                                columnNumber: 95
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/mesherskij/mesh-next/app/components/Header.tsx",
                            lineNumber: 43,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$app$2f$components$2f$ThemeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeToggle"], {}, void 0, false, {
                            fileName: "[project]/Documents/mesherskij/mesh-next/app/components/Header.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/mesherskij/mesh-next/app/components/Header.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/mesherskij/mesh-next/app/components/Header.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/mesherskij/mesh-next/app/components/Header.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_s(Header, "eQ7qHD2X96dXsWCI1wwK/7Mpqfk=");
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/mesherskij/mesh-next/app/data/videos.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CATEGORIES",
    ()=>CATEGORIES,
    "REAL_VIDEO",
    ()=>REAL_VIDEO,
    "VIDEOS",
    ()=>VIDEOS
]);
const REAL_VIDEO = "/forest.mp4";
const CATEGORIES = [
    {
        id: "family",
        title: "Семья с детьми",
        description: "Школа, площадки, безопасная среда",
        image: "/cat-family.jpg",
        iconName: "users",
        count: 2
    },
    {
        id: "wellness",
        title: "SPA и Wellness",
        description: "Спа, лесные ванны, wellness-программы",
        image: "/cat-wellness.jpg",
        iconName: "heart",
        count: 1
    },
    {
        id: "guests",
        title: "Гости и отель",
        description: "Гостиница, ресторан, конференц-зал",
        image: "/cat-guests.jpg",
        iconName: "building2",
        count: 1
    },
    {
        id: "investor",
        title: "Для инвестора",
        description: "Ликвидность, уникальная локация",
        image: "/cat-investor.jpg",
        iconName: "trendingUp",
        count: 1
    },
    {
        id: "architecture",
        title: "Архитектура",
        description: "Материалы, свет, остекление",
        image: "/cat-architecture.jpg",
        iconName: "treePine",
        count: 1
    }
];
const VIDEOS = [
    {
        id: "v1",
        title: "Мещерский 1 — дом в соснах",
        description: "Обзорный ролик о жизни в окружении природы. Комплекс частных домов с гостиничным сервисом.",
        category: "family",
        duration: "3:24",
        thumbnail: "/cat-family.jpg",
        views: "12.4K"
    },
    {
        id: "v2",
        title: "SPA-комплекс и wellness",
        description: "Погружение в атмосферу умной роскоши. Природные процедуры и забота о здоровье.",
        category: "wellness",
        duration: "2:18",
        thumbnail: "/cat-wellness.jpg",
        views: "8.7K"
    },
    {
        id: "v3",
        title: "Гостиничный сервис",
        description: "Уровень обслуживания в Мещерском. Гостиница, ресторан, конференц-зал.",
        category: "guests",
        duration: "4:05",
        thumbnail: "/cat-guests.jpg",
        views: "6.2K"
    },
    {
        id: "v4",
        title: "Инвестиционная привлекательность",
        description: "Почему Мещерский — это выгодная инвестиция. Ликвидность и уникальная локация.",
        category: "investor",
        duration: "5:12",
        thumbnail: "/cat-investor.jpg",
        views: "4.9K"
    },
    {
        id: "v5",
        title: "Архитектурная концепция",
        description: "Как природа вдохновляет архитектуру. Материалы, свет, панорамное остекление.",
        category: "architecture",
        duration: "3:45",
        thumbnail: "/cat-architecture.jpg",
        views: "9.1K"
    },
    {
        id: "v6",
        title: "Семейные маршруты",
        description: "Прогулки и активности для всей семьи. Безопасная среда для роста детей.",
        category: "family",
        duration: "2:56",
        thumbnail: "/cat-family.jpg",
        views: "5.3K"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hero",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/mesherskij/mesh-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/Documents/mesherskij/mesh-next/node_modules/lucide-react/dist/esm/icons/play.mjs [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$play$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlayCircle$3e$__ = __turbopack_context__.i("[project]/Documents/mesherskij/mesh-next/node_modules/lucide-react/dist/esm/icons/circle-play.mjs [app-client] (ecmascript) <export default as PlayCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/Documents/mesherskij/mesh-next/node_modules/lucide-react/dist/esm/icons/heart.mjs [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tree$2d$pine$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TreePine$3e$__ = __turbopack_context__.i("[project]/Documents/mesherskij/mesh-next/node_modules/lucide-react/dist/esm/icons/tree-pine.mjs [app-client] (ecmascript) <export default as TreePine>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$app$2f$components$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/mesherskij/mesh-next/app/components/Logo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$app$2f$data$2f$videos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/mesherskij/mesh-next/app/data/videos.ts [app-client] (ecmascript)");
;
;
;
;
function Hero() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "hero",
        className: "relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10 px-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                        autoPlay: true,
                        muted: true,
                        loop: true,
                        playsInline: true,
                        className: "w-full h-full object-cover",
                        preload: "auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                            src: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$app$2f$data$2f$videos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REAL_VIDEO"],
                            type: "video/mp4"
                        }, void 0, false, {
                            fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                            lineNumber: 10,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                        lineNumber: 9,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/30"
                    }, void 0, false, {
                        fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-b from-[var(--bg)]/40 via-transparent to-[var(--bg)]"
                    }, void 0, false, {
                        fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full max-w-5xl mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[120px] md:auto-rows-[140px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-span-2 row-span-2 liquid-glass-strong liquid-glass-strong-hover flex flex-col justify-between p-6 md:p-8 cursor-default",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-5 h-px bg-[#968766]"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                                                    lineNumber: 20,
                                                    columnNumber: 61
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-caption",
                                                    children: "Видеогид"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                                                    lineNumber: 20,
                                                    columnNumber: 102
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                                            lineNumber: 20,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "400",
                                            height: "auto",
                                            viewBox: "0 0 2249 351",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                    clipPath: "url(#clip0_2010_5)",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            fillRule: "evenodd",
                                                            clipRule: "evenodd",
                                                            d: "M725.949 295.078C725.949 311.984 724.403 324.249 721.255 331.872H748.074V295.078H725.921H725.949ZM756.086 331.872H763.648V351H756.395V338.735H713.636V351H706.411V331.872H712.793C716.475 326.471 718.359 311.928 718.331 288.215H756.086V331.872Z",
                                                            fill: "white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                                                            lineNumber: 24,
                                                            columnNumber: 1
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M992.793 331.872H1021.83V288.215H1029.87V331.872H1037.44V351H1030.15V338.735H984.809V288.215H992.793V331.872Z",
                                                            fill: "white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                                                            lineNumber: 25,
                                                            columnNumber: 1
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M550.021 287.511C555.84 287.511 560.535 288.805 564.161 291.449C567.76 294.094 569.559 297.554 569.559 301.773C569.559 306.639 567.282 310.268 562.7 312.687C565.258 313.756 567.282 315.331 568.8 317.441C570.29 319.551 571.021 321.886 571.021 324.417C571.021 328.834 568.94 332.462 564.836 335.247C560.675 338.032 555.362 339.438 548.896 339.438C542.515 339.438 537.314 338.088 533.35 335.416C529.386 332.772 527.362 329.284 527.362 324.952C527.362 323.658 527.643 322.308 528.205 320.901H535.571C535.177 322.195 535.009 323.32 535.009 324.277C535.009 326.555 536.274 328.44 538.832 329.874C541.362 331.309 544.707 332.012 548.84 332.012C553.057 332.012 556.487 331.225 559.073 329.677C561.631 328.13 562.953 326.133 562.953 323.63C562.953 321.548 562.137 319.832 560.479 318.369C558.82 316.963 556.655 316.26 553.928 316.26H543.92V309.79H552.467C555.222 309.79 557.386 309.115 559.045 307.736C560.675 306.386 561.463 304.698 561.463 302.617C561.463 300.338 560.366 298.454 558.201 297.019C556.009 295.613 553.141 294.909 549.515 294.909C545.41 294.909 541.981 295.866 539.338 297.75C536.667 299.663 535.234 302.167 534.981 305.289H527.334C527.784 299.888 530.117 295.613 534.222 292.321C538.326 289.087 543.611 287.455 550.021 287.455V287.511Z",
                                                            fill: "white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                                                            lineNumber: 26,
                                                            columnNumber: 1
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M1779.24 294.938H1778.31C1776.49 294.938 1775.11 295.641 1774.21 297.02L1762.65 312.631L1775.78 329.931C1776.79 331.309 1778.17 332.013 1779.92 332.041H1780.62V338.933H1777.44C1774.24 338.933 1771.73 337.639 1769.94 334.994L1757.4 318.286C1756.33 316.907 1755.01 316.204 1753.35 316.204H1747.02V338.708H1739.01V288.187H1747.02V309.312H1753.29C1754.98 309.312 1756.33 308.609 1757.34 307.231L1768.22 292.013C1770.02 289.312 1772.47 287.962 1775.64 287.962H1779.24V294.91V294.938Z",
                                                            fill: "white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                                                            lineNumber: 27,
                                                            columnNumber: 1
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            fillRule: "evenodd",
                                                            clipRule: "evenodd",
                                                            d: "M367.318 312.012H383.117C385.9 312.012 388.15 311.197 389.808 309.621C391.467 308.046 392.282 306.021 392.282 303.602C392.282 301.098 391.439 299.045 389.78 297.469C388.121 295.894 385.9 295.078 383.117 295.078H367.318V312.012ZM383.202 288.215C388.318 288.215 392.423 289.649 395.599 292.519C398.776 295.36 400.35 299.073 400.35 303.574C400.35 308.074 398.776 311.787 395.571 314.628C392.366 317.47 388.262 318.904 383.23 318.904H367.346V338.735H359.362V288.215H383.23H383.202Z",
                                                            fill: "white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                                                            lineNumber: 28,
                                                            columnNumber: 1
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M483.479 295.078H452.865V309.875H480.443V316.569H452.865V331.872H484.21V338.735H444.853V288.215H483.479V295.078Z",
                                                            fill: "white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                                                            lineNumber: 29,
                                                            columnNumber: 1
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M623.648 326.105L655.64 288.215H662.837V338.735H654.853V300.789L622.861 338.735H615.636V288.215H623.648V326.105Z",
                                                            fill: "white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                                                            lineNumber: 30,
                                                            columnNumber: 1
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M845.821 295.078H815.178V309.875H842.785V316.569H815.178V331.872H846.552V338.735H807.194V288.215H845.821V295.078Z",
                                                            fill: "white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                                                            lineNumber: 31,
                                                            columnNumber: 1
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M899.375 309.79H929.511V288.215H937.495V338.735H929.511V316.71H899.375V338.735H891.391V288.215H899.375V309.79Z",
                                                            fill: "white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                                                            lineNumber: 32,
                                                            columnNumber: 1
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M1089.16 326.105L1121.18 288.215H1128.38V338.735H1120.4V300.789L1088.4 338.735H1081.18V288.215H1089.16V326.105Z",
                                                            fill: "white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                                                            lineNumber: 33,
                                                            columnNumber: 1
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M1183.65 326.105L1215.64 288.215H1222.87V338.735H1214.88V300.789L1182.89 338.735H1175.67V288.215H1183.65V326.105Z",
                                                            fill: "white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                                                            lineNumber: 34,
                                                            columnNumber: 1
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            fillRule: "evenodd",
                                                            clipRule: "evenodd",
                                                            d: "M1333.88 309.874H1350.33C1353.03 309.874 1355.22 309.171 1356.88 307.765C1358.54 306.386 1359.35 304.586 1359.35 302.448C1359.35 300.31 1358.54 298.566 1356.88 297.16C1355.22 295.781 1353.06 295.078 1350.33 295.078H1333.88V309.874ZM1333.88 331.872H1351.76C1354.55 331.872 1356.79 331.14 1358.45 329.678C1360.11 328.243 1360.93 326.358 1360.93 324.08C1360.93 321.801 1360.11 319.945 1358.45 318.51C1356.79 317.076 1354.55 316.372 1351.76 316.372H1333.88V331.872ZM1350.38 288.215C1355.42 288.215 1359.49 289.48 1362.64 292.012C1365.76 294.572 1367.34 297.863 1367.34 301.829C1367.34 306.808 1365.09 310.437 1360.59 312.744C1365.9 314.741 1368.99 319.129 1368.99 324.727C1368.99 328.806 1367.42 332.153 1364.24 334.769C1361.07 337.413 1356.96 338.707 1351.85 338.707H1325.9V288.187H1350.38V288.215Z",
                                                            fill: "white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                                                            lineNumber: 35,
                                                            columnNumber: 1
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M1514.9 338.735H1506.91V295.078H1477.34V338.735H1469.36V288.215H1514.9V338.735Z",
                                                            fill: "white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                                                            lineNumber: 36,
                                                            columnNumber: 1
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            fillRule: "evenodd",
                                                            clipRule: "evenodd",
                                                            d: "M1574.89 320.395H1594.15L1584.56 298.651L1574.89 320.395ZM1610.99 338.735H1602.19L1597.16 327.259H1571.85L1566.74 338.735H1557.94L1580.85 288.215H1588.13L1610.99 338.735Z",
                                                            fill: "white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                                                            lineNumber: 37,
                                                            columnNumber: 1
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            fillRule: "evenodd",
                                                            clipRule: "evenodd",
                                                            d: "M1662.07 312.012H1677.87C1680.65 312.012 1682.9 311.197 1684.56 309.621C1686.22 308.046 1687.03 306.021 1687.03 303.602C1687.03 301.183 1686.19 299.045 1684.53 297.469C1682.87 295.894 1680.65 295.078 1677.87 295.078H1662.07V312.012ZM1677.95 288.215C1683.07 288.215 1687.17 289.649 1690.35 292.519C1693.53 295.36 1695.1 299.073 1695.1 303.574C1695.1 308.074 1693.53 311.787 1690.32 314.628C1687.12 317.47 1683.01 318.904 1677.98 318.904H1662.1V338.735H1654.11V288.215H1677.98H1677.95Z",
                                                            fill: "white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                                                            lineNumber: 38,
                                                            columnNumber: 1
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M1864.2 295.078H1833.55V309.875H1861.16V316.569H1833.55V331.872H1864.93V338.735H1825.57V288.215H1864.2V295.078Z",
                                                            fill: "white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                                                            lineNumber: 39,
                                                            columnNumber: 1
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M488.426 8.88867C492.306 8.88867 495.426 12.0392 495.426 15.921V136.147C495.426 140.028 498.575 143.179 502.426 143.179H553.957C557.836 143.179 560.957 140.028 560.957 136.147V15.921C560.957 12.0392 564.105 8.88867 567.957 8.88867H579.398C583.278 8.88867 586.398 12.0392 586.398 15.921V136.147C586.398 140.028 589.547 143.179 593.398 143.179H645.154C649.033 143.179 652.154 140.028 652.154 136.147V15.921C652.154 12.0392 655.302 8.88867 659.154 8.88867H670.595C674.475 8.88867 677.595 12.0392 677.595 15.921V136.147C677.595 140.028 680.744 143.179 684.595 143.179H688.728C692.607 143.179 695.728 146.329 695.728 150.211V181.435C695.728 185.317 692.579 188.467 688.728 188.467H681.7C677.82 188.467 674.7 185.317 674.7 181.435V171.28C674.7 167.398 671.551 164.248 667.7 164.248H476.619C472.74 164.248 469.619 161.097 469.619 157.216V15.921C469.619 12.0392 472.768 8.88867 476.619 8.88867H488.286H488.426Z",
                                                            fill: "white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                                                            lineNumber: 40,
                                                            columnNumber: 1
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M1247.38 6.66699C1273.95 6.66699 1296.27 12.743 1314.26 24.8668C1330.26 35.6404 1340.69 49.5082 1345.49 66.4985C1346.53 70.1272 1344.17 73.7277 1340.52 74.5998L1327.36 77.7503C1323.09 78.7629 1318.98 75.6124 1318.08 71.3086C1315.64 59.4942 1309.11 49.7895 1298.52 42.1946C1285.67 32.7149 1268.6 27.9892 1247.35 27.9892C1223.74 27.9892 1205.27 33.3056 1191.97 43.9667C1178.67 54.459 1172.04 69.0582 1172.04 87.68C1172.04 106.302 1178.67 119.86 1191.97 130.071C1205.27 140.142 1223.71 145.177 1247.35 145.177C1268.32 145.177 1285.3 140.732 1298.29 131.871C1308.89 124.53 1315.41 115.247 1317.86 104.051C1318.76 99.9163 1322.58 96.7939 1326.74 97.5534L1340.07 99.9726C1343.89 100.676 1346.48 104.361 1345.38 108.13C1340.63 124.502 1330.31 137.976 1314.46 148.524C1296.44 160.507 1274.06 166.499 1247.35 166.499C1216.62 166.499 1192.14 159.41 1173.81 145.205C1155.79 131.084 1146.71 112.293 1146.57 88.8333V86.5548C1146.71 62.3916 1155.7 43.0947 1173.58 28.6643C1191.89 14.0088 1216.48 6.69512 1247.35 6.69512L1247.38 6.66699Z",
                                                            fill: "white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                                                            lineNumber: 41,
                                                            columnNumber: 1
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M35.984 8.88867C38.739 8.88867 41.241 10.5202 42.3937 13.0518L96.5946 134.403C99.0685 139.944 106.912 139.944 109.386 134.403L163.587 13.0518C164.711 10.5202 167.213 8.88867 169.996 8.88867H198.559C202.438 8.88867 205.559 12.0392 205.559 15.8929L205.755 157.216C205.755 161.097 202.635 164.248 198.755 164.248H187.398C183.49 164.248 180.342 161.041 180.398 157.159L181.494 61.2096C181.579 53.5865 171.205 51.308 168.085 58.256L122.374 160.113C121.249 162.645 118.747 164.248 115.992 164.248H90.0725C87.3174 164.248 84.8154 162.616 83.6909 160.113L37.9238 58.256C34.8033 51.308 24.4298 53.6146 24.5141 61.2096L25.6105 157.159C25.6667 161.069 22.49 164.276 18.6105 164.276H7.00001C3.12049 164.248 0 161.097 0 157.216L0.196788 15.8929C0.196788 12.011 3.34539 8.88867 7.1968 8.88867H35.9559H35.984Z",
                                                            fill: "white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                                                            lineNumber: 42,
                                                            columnNumber: 1
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M401.419 8.88867C405.298 8.88867 408.419 12.0392 408.419 15.921V23.1785C408.419 27.0603 405.27 30.2108 401.419 30.2108H304.459C300.579 30.2108 297.458 33.3613 297.458 37.2432V68.467C297.458 72.3488 300.607 75.4993 304.459 75.4993H392.535C396.415 75.4993 399.535 78.6499 399.535 82.5317V90.0142C399.535 93.896 396.386 97.0466 392.535 97.0466H304.459C300.579 97.0466 297.458 100.197 297.458 104.079V135.978C297.458 139.86 300.607 143.01 304.459 143.01H402.965C406.844 143.01 409.965 146.161 409.965 150.043V157.3C409.965 161.182 406.816 164.332 402.965 164.332H278.764C274.884 164.332 271.764 161.182 271.764 157.3V15.921C271.764 12.0392 274.912 8.88867 278.764 8.88867H401.419Z",
                                                            fill: "white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                                                            lineNumber: 43,
                                                            columnNumber: 1
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M883.492 8.88867C887.371 8.88867 890.492 12.0392 890.492 15.921V23.1785C890.492 27.0603 887.343 30.2108 883.492 30.2108H786.532C782.652 30.2108 779.532 33.3613 779.532 37.2432V68.467C779.532 72.3488 782.68 75.4993 786.532 75.4993H874.608C878.488 75.4993 881.608 78.6499 881.608 82.5317V90.0142C881.608 93.896 878.46 97.0466 874.608 97.0466H786.532C782.652 97.0466 779.532 100.197 779.532 104.079V135.978C779.532 139.86 782.68 143.01 786.532 143.01H885.038C888.918 143.01 892.038 146.161 892.038 150.043V157.3C892.038 161.182 888.889 164.332 885.038 164.332H760.837C756.957 164.332 753.837 161.182 753.837 157.3V15.921C753.837 12.0392 756.986 8.88867 760.837 8.88867H883.492Z",
                                                            fill: "white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                                                            lineNumber: 44,
                                                            columnNumber: 1
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            fillRule: "evenodd",
                                                            clipRule: "evenodd",
                                                            d: "M984.556 30.2108C980.677 30.2108 977.556 33.3613 977.556 37.2432V80.9002C977.556 84.7821 980.705 87.9326 984.556 87.9326H1048.65C1058.69 87.9326 1066.53 85.4291 1072.13 80.3939C1077.75 75.2181 1080.53 68.1013 1080.53 59.0998C1080.53 50.0984 1077.72 43.0379 1072.13 38.0027C1066.5 32.8269 1058.69 30.239 1048.65 30.239H984.556V30.2108ZM1046.43 8.88867C1065.18 8.88867 1079.8 13.3331 1090.29 22.1939C1100.77 30.9141 1106 43.2067 1106 59.0436C1106 74.8805 1100.77 87.2293 1090.29 96.1183C1079.8 104.838 1065.18 109.198 1046.43 109.198H984.556C980.677 109.198 977.556 112.349 977.556 116.231V157.216C977.556 161.097 974.408 164.248 970.556 164.248H958.89C955.01 164.248 951.89 161.097 951.89 157.216V15.921C951.89 12.0392 955.038 8.88867 958.89 8.88867H1046.46H1046.43Z",
                                                            fill: "white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                                                            lineNumber: 45,
                                                            columnNumber: 1
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M1517.09 9.33854C1522.83 8.52279 1529.38 8.26962 1536.71 8.52279C1540.4 8.66343 1543.21 11.7296 1543.21 15.4145V22.3062C1543.21 26.4132 1539.69 29.6199 1535.59 29.5918C1530.36 29.5637 1525.81 30.0419 1521.95 31.0827C1516.5 32.4047 1512.42 34.5707 1509.78 37.5243C1507.28 40.3373 1505.2 43.6565 1503.57 47.5103C1502.08 51.1952 1500.62 55.1334 1499.13 59.2684C1497.64 63.4035 1495.81 67.2572 1493.59 70.8015C1491.37 74.3458 1487.77 77.5245 1482.74 80.3374C1480.91 81.3501 1481.25 87.9886 1483.27 88.5231C1486.93 89.4514 1490.36 90.5766 1493.59 91.8986C1502.16 95.3023 1508.8 99.2967 1513.52 103.882C1518.24 108.326 1522.38 113.502 1525.92 119.409C1529.6 125.176 1532.33 130.661 1534.13 135.837C1536.04 140.872 1538.26 146.132 1540.76 151.589C1543.26 156.737 1539.55 164.248 1533.85 164.248H1523.05C1521.2 164.248 1519.37 163.516 1518.36 161.969C1516.95 159.803 1515.49 156.737 1513.94 152.715C1511.72 146.807 1509.22 140.872 1506.41 134.965C1503.74 128.889 1500.14 122.897 1495.56 116.99C1491.12 110.914 1484.62 105.963 1476.08 102.11C1467.5 98.2559 1457.32 96.3431 1445.52 96.3431H1435.03C1431.15 96.3431 1428.03 99.4936 1428.03 103.375V157.244C1428.03 161.125 1424.88 164.276 1421.03 164.276H1409.36C1405.48 164.276 1402.36 161.125 1402.36 157.244V15.9208C1402.36 12.039 1405.51 8.88847 1409.36 8.88847H1421.03C1424.91 8.88847 1428.03 12.039 1428.03 15.9208V68.2417C1428.03 72.1236 1431.18 75.2741 1435.03 75.2741H1438.88C1446.11 75.2741 1452.24 74.4584 1457.27 72.8268C1462.3 71.0547 1466.07 68.8325 1468.57 66.1602C1471.24 63.3472 1473.38 60.1686 1474.98 56.6242C1476.75 52.9393 1478.24 49.1418 1479.42 45.3162C1480.6 41.4624 1481.87 37.6087 1483.19 33.7831C1484.68 29.9293 1486.73 26.385 1489.4 23.122C1492.21 19.7183 1495.67 16.821 1499.8 14.4581C1504.08 12.0952 1509.84 10.3793 1517.09 9.36667V9.33854Z",
                                                            fill: "white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                                                            lineNumber: 46,
                                                            columnNumber: 1
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M1616.02 8.88867C1619.9 8.88867 1623.02 12.0392 1623.02 15.921V124.135C1623.02 130.914 1631.62 133.756 1635.67 128.327L1721.92 11.7579C1723.24 9.95759 1725.32 8.9168 1727.54 8.9168H1755.54C1759.42 8.9168 1762.54 12.0673 1762.54 15.9492V157.272C1762.54 161.154 1759.39 164.304 1755.54 164.304H1744.1C1740.22 164.304 1737.1 161.154 1737.1 157.272V51.308C1737.1 44.5288 1728.47 41.6877 1724.45 47.1448L1640.2 161.407C1638.87 163.207 1636.79 164.248 1634.55 164.248H1604.32C1600.44 164.248 1597.32 161.097 1597.32 157.216V15.921C1597.32 12.0392 1600.47 8.88867 1604.32 8.88867H1615.99H1616.02Z",
                                                            fill: "white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                                                            lineNumber: 47,
                                                            columnNumber: 1
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M1847.33 8.88867C1851.21 8.88867 1854.33 12.0392 1854.33 15.921V124.135C1854.33 130.914 1862.93 133.756 1866.98 128.327L1953.23 11.7579C1954.55 9.95759 1956.63 8.9168 1958.85 8.9168H1986.85C1990.73 8.9168 1993.85 12.0673 1993.85 15.9492V157.272C1993.85 161.154 1990.7 164.304 1986.85 164.304H1975.41C1971.53 164.304 1968.41 161.154 1968.41 157.272V51.308C1968.41 44.5288 1959.78 41.6877 1955.76 47.1448L1871.51 161.407C1870.18 163.207 1868.1 164.248 1865.85 164.248H1835.63C1831.75 164.248 1828.63 161.097 1828.63 157.216V15.921C1828.63 12.0392 1831.78 8.88867 1835.63 8.88867H1847.3H1847.33Z",
                                                            fill: "white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                                                            lineNumber: 48,
                                                            columnNumber: 1
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M2242.34 8.74805C2246.02 8.74805 2249 11.7298 2249 15.4147V157.497C2249 161.182 2246.02 164.164 2242.34 164.164H2229.91C2226.23 164.164 2223.25 161.182 2223.25 157.497V59.0436C2223.25 52.5738 2214.96 49.9015 2211.19 55.1617L2178.94 100.281C2176.5 103.685 2171.55 104.023 2168.68 100.985L2160.67 92.4615C2158.31 89.9579 2158.25 86.0479 2160.56 83.46L2225.27 10.9703C2226.54 9.5638 2228.34 8.74805 2230.25 8.74805H2242.37H2242.34Z",
                                                            fill: "white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                                                            lineNumber: 49,
                                                            columnNumber: 1
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M1923.26 0C1926.61 0 1929.36 2.75669 1928.63 6.01972C1925.9 18.1717 1915.05 27.2575 1902.09 27.2575C1889.13 27.2575 1878.31 18.1717 1875.55 6.01972C1874.82 2.75669 1877.61 0 1880.92 0C1884.24 0 1886.85 2.81295 1888.15 5.9072C1890.45 11.3362 1895.82 15.1337 1902.06 15.1337C1908.3 15.1337 1913.67 11.3362 1915.98 5.9072C1917.27 2.84108 1919.89 0 1923.2 0L1923.26 0Z",
                                                            fill: "white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                                                            lineNumber: 50,
                                                            columnNumber: 1
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                                                    lineNumber: 23,
                                                    columnNumber: 1
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                                                        id: "clip0_2010_5",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                            width: "2249",
                                                            height: "351",
                                                            fill: "white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                                                            lineNumber: 54,
                                                            columnNumber: 1
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                                                        lineNumber: 53,
                                                        columnNumber: 1
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                                                    lineNumber: 52,
                                                    columnNumber: 1
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                                            lineNumber: 22,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-body text-sm max-w-xs",
                                            children: "Дом в соснах с гостиничным сервисом. Природа без дистанции."
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                                            lineNumber: 60,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                                    lineNumber: 19,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 mt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#player",
                                            className: "btn-liquid btn-liquid-filled text-xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$play$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlayCircle$3e$__["PlayCircle"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                                                    lineNumber: 63,
                                                    columnNumber: 82
                                                }, this),
                                                "Смотреть"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                                            lineNumber: 63,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#categories",
                                            className: "btn-liquid text-xs",
                                            children: "Сценарии"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                                            lineNumber: 64,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#player",
                            className: "col-span-1 row-span-2 liquid-glass liquid-glass-hover relative overflow-hidden cursor-pointer group block",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/cat-family.jpg",
                                    alt: "",
                                    className: "absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 to-transparent"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative h-full flex flex-col justify-end p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-10 h-10 rounded-full liquid-glass-strong flex items-center justify-center mb-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                size: 16,
                                                fill: "white",
                                                className: "text-white ml-0.5"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                                                lineNumber: 72,
                                                columnNumber: 113
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                                            lineNumber: 72,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] font-medium text-white/90 tracking-wide",
                                            children: "Обзор комплекса"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                                            lineNumber: 73,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] text-white/50 mt-0.5",
                                            children: "Лесная съёмка"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                                            lineNumber: 74,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-span-1 row-span-1 liquid-glass flex flex-col justify-center items-center p-4 cursor-default",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-2xl md:text-3xl font-light tracking-tight",
                                    style: {
                                        color: "var(--fg)"
                                    },
                                    children: "6"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-micro mt-1",
                                    children: "видео"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-span-1 row-span-1 liquid-glass flex flex-col justify-center items-center p-4 cursor-default",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-2xl md:text-3xl font-light tracking-tight",
                                    style: {
                                        color: "var(--fg)"
                                    },
                                    children: "46K"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-micro mt-1",
                                    children: "просмотров"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#player",
                            className: "col-span-1 row-span-1 liquid-glass liquid-glass-hover flex flex-col justify-center p-4 cursor-pointer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "icon-glass w-7 h-7 mb-2 text-[#968766]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                        size: 13,
                                        strokeWidth: 1.5
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                                        lineNumber: 88,
                                        columnNumber: 69
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] font-medium",
                                    style: {
                                        color: "var(--fg)"
                                    },
                                    children: "SPA и Wellness"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#player",
                            className: "col-span-1 row-span-1 liquid-glass liquid-glass-hover flex flex-col justify-center p-4 cursor-pointer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "icon-glass w-7 h-7 mb-2 text-[#968766]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tree$2d$pine$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TreePine$3e$__["TreePine"], {
                                        size: 13,
                                        strokeWidth: 1.5
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                                        lineNumber: 92,
                                        columnNumber: 69
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] font-medium",
                                    style: {
                                        color: "var(--fg)"
                                    },
                                    children: "Архитектура"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-span-2 md:col-span-1 row-span-1 liquid-glass flex items-center gap-3 p-4 cursor-default",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$app$2f$components$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LogoMonogram"], {
                                    size: 28
                                }, void 0, false, {
                                    fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] font-medium",
                                            style: {
                                                color: "var(--fg)"
                                            },
                                            children: "Мещерский парк"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                                            lineNumber: 99,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px]",
                                            style: {
                                                color: "var(--jumbo)"
                                            },
                                            children: "Эстетика тишины"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                                            lineNumber: 100,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#player",
                            className: "col-span-1 row-span-1 liquid-glass liquid-glass-hover relative overflow-hidden cursor-pointer block",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/cat-architecture.jpg",
                                    alt: "",
                                    className: "absolute inset-0 w-full h-full object-cover opacity-40 hover:scale-105 transition-transform duration-700"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/50 to-transparent"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative h-full flex items-end p-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] font-medium text-white/90",
                                        children: "Семья"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                                        lineNumber: 107,
                                        columnNumber: 65
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/mesherskij/mesh-next/app/components/CategoryCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CategoryCard",
    ()=>CategoryCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/mesherskij/mesh-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Documents/mesherskij/mesh-next/node_modules/lucide-react/dist/esm/icons/users.mjs [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/Documents/mesherskij/mesh-next/node_modules/lucide-react/dist/esm/icons/heart.mjs [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/Documents/mesherskij/mesh-next/node_modules/lucide-react/dist/esm/icons/building-2.mjs [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/Documents/mesherskij/mesh-next/node_modules/lucide-react/dist/esm/icons/trending-up.mjs [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tree$2d$pine$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TreePine$3e$__ = __turbopack_context__.i("[project]/Documents/mesherskij/mesh-next/node_modules/lucide-react/dist/esm/icons/tree-pine.mjs [app-client] (ecmascript) <export default as TreePine>");
"use client";
;
;
const ICONS = {
    users: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
    heart: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"],
    building2: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"],
    trendingUp: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
    treePine: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tree$2d$pine$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TreePine$3e$__["TreePine"]
};
function CategoryCard({ cat, isActive, onClick }) {
    const Icon = ICONS[cat.iconName];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: "liquid-glass liquid-glass-hover text-left p-4 flex flex-col gap-3 cursor-pointer",
        style: isActive ? {
            boxShadow: "0 0 0 1px rgba(150,135,102,0.35)"
        } : {},
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "icon-glass w-8 h-8 text-[#968766]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                    size: 14,
                    strokeWidth: 1.5
                }, void 0, false, {
                    fileName: "[project]/Documents/mesherskij/mesh-next/app/components/CategoryCard.tsx",
                    lineNumber: 12,
                    columnNumber: 58
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/mesherskij/mesh-next/app/components/CategoryCard.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[13px] font-medium leading-tight",
                        style: {
                            color: "var(--fg)"
                        },
                        children: cat.title
                    }, void 0, false, {
                        fileName: "[project]/Documents/mesherskij/mesh-next/app/components/CategoryCard.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[11px] mt-1 leading-relaxed",
                        style: {
                            color: "var(--jumbo)"
                        },
                        children: cat.description
                    }, void 0, false, {
                        fileName: "[project]/Documents/mesherskij/mesh-next/app/components/CategoryCard.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/mesherskij/mesh-next/app/components/CategoryCard.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1.5 mt-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-3 h-px bg-[#968766]/40"
                    }, void 0, false, {
                        fileName: "[project]/Documents/mesherskij/mesh-next/app/components/CategoryCard.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px]",
                        style: {
                            color: "var(--cloudy)"
                        },
                        children: [
                            cat.count,
                            " видео"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/mesherskij/mesh-next/app/components/CategoryCard.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/mesherskij/mesh-next/app/components/CategoryCard.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/mesherskij/mesh-next/app/components/CategoryCard.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = CategoryCard;
var _c;
__turbopack_context__.k.register(_c, "CategoryCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/mesherskij/mesh-next/app/sections/Categories.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Categories",
    ()=>Categories
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/mesherskij/mesh-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$app$2f$components$2f$CategoryCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/mesherskij/mesh-next/app/components/CategoryCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$app$2f$data$2f$videos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/mesherskij/mesh-next/app/data/videos.ts [app-client] (ecmascript)");
;
;
;
function Categories({ activeCategory, onCategoryChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "categories",
        className: "py-20 md:py-28",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-5xl mx-auto px-6 md:px-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-end justify-between mb-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 mb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-5 h-px bg-[#968766]"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Categories.tsx",
                                            lineNumber: 10,
                                            columnNumber: 59
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-caption",
                                            children: "Категории"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Categories.tsx",
                                            lineNumber: 10,
                                            columnNumber: 100
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Categories.tsx",
                                    lineNumber: 10,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-headline",
                                    children: "Сценарии жизни"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Categories.tsx",
                                    lineNumber: 11,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Categories.tsx",
                            lineNumber: 9,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>onCategoryChange("all"),
                            className: "text-[13px] font-medium transition-colors",
                            style: {
                                color: activeCategory === "all" ? "var(--granite)" : "var(--jumbo)"
                            },
                            children: "Все"
                        }, void 0, false, {
                            fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Categories.tsx",
                            lineNumber: 13,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Categories.tsx",
                    lineNumber: 8,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$app$2f$data$2f$videos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORIES"].map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$app$2f$components$2f$CategoryCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CategoryCard"], {
                            cat: cat,
                            isActive: activeCategory === cat.id,
                            onClick: ()=>onCategoryChange(activeCategory === cat.id ? "all" : cat.id)
                        }, cat.id, false, {
                            fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Categories.tsx",
                            lineNumber: 17,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Categories.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Categories.tsx",
            lineNumber: 7,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Categories.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = Categories;
var _c;
__turbopack_context__.k.register(_c, "Categories");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/mesherskij/mesh-next/app/components/VideoPlayer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VideoPlayer",
    ()=>VideoPlayer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/mesherskij/mesh-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/mesherskij/mesh-next/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/Documents/mesherskij/mesh-next/node_modules/lucide-react/dist/esm/icons/play.mjs [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/Documents/mesherskij/mesh-next/node_modules/lucide-react/dist/esm/icons/pause.mjs [app-client] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/Documents/mesherskij/mesh-next/node_modules/lucide-react/dist/esm/icons/volume-2.mjs [app-client] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__ = __turbopack_context__.i("[project]/Documents/mesherskij/mesh-next/node_modules/lucide-react/dist/esm/icons/volume-x.mjs [app-client] (ecmascript) <export default as VolumeX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__ = __turbopack_context__.i("[project]/Documents/mesherskij/mesh-next/node_modules/lucide-react/dist/esm/icons/maximize-2.mjs [app-client] (ecmascript) <export default as Maximize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$forward$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipForward$3e$__ = __turbopack_context__.i("[project]/Documents/mesherskij/mesh-next/node_modules/lucide-react/dist/esm/icons/skip-forward.mjs [app-client] (ecmascript) <export default as SkipForward>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings2$3e$__ = __turbopack_context__.i("[project]/Documents/mesherskij/mesh-next/node_modules/lucide-react/dist/esm/icons/settings-2.mjs [app-client] (ecmascript) <export default as Settings2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$app$2f$data$2f$videos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/mesherskij/mesh-next/app/data/videos.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function fmt(s) {
    if (!isFinite(s)) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
}
function VideoPlayer({ video }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [playing, setPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [duration, setDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [volume, setVolume] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0.7);
    const [muted, setMuted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [show, setShow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const timer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const [buf, setBuf] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const reset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VideoPlayer.useCallback[reset]": ()=>{
            setShow(true);
            if (timer.current) clearTimeout(timer.current);
            timer.current = setTimeout({
                "VideoPlayer.useCallback[reset]": ()=>{
                    if (playing) setShow(false);
                }
            }["VideoPlayer.useCallback[reset]"], 4000);
        }
    }["VideoPlayer.useCallback[reset]"], [
        playing
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VideoPlayer.useEffect": ()=>{
            reset();
            return ({
                "VideoPlayer.useEffect": ()=>{
                    if (timer.current) clearTimeout(timer.current);
                }
            })["VideoPlayer.useEffect"];
        }
    }["VideoPlayer.useEffect"], [
        playing,
        reset
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VideoPlayer.useEffect": ()=>{
            if (ref.current) {
                ref.current.currentTime = 0;
                setProgress(0);
                setPlaying(false);
            }
        }
    }["VideoPlayer.useEffect"], [
        video.id
    ]);
    const toggle = ()=>{
        if (!ref.current) return;
        playing ? ref.current.pause() : ref.current.play();
        setPlaying(!playing);
        reset();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full aspect-video rounded-[1rem] overflow-hidden bg-black/80 group",
        onMouseMove: reset,
        onMouseLeave: ()=>playing && setShow(false),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                ref: ref,
                src: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$app$2f$data$2f$videos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REAL_VIDEO"],
                className: "w-full h-full object-cover",
                onTimeUpdate: ()=>{
                    if (!ref.current) return;
                    setProgress(ref.current.currentTime);
                    if (ref.current.buffered.length) setBuf(ref.current.buffered.end(0));
                },
                onLoadedMetadata: ()=>setDuration(ref.current?.duration || 0),
                onClick: toggle,
                playsInline: true,
                preload: "metadata"
            }, void 0, false, {
                fileName: "[project]/Documents/mesherskij/mesh-next/app/components/VideoPlayer.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            !playing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: toggle,
                className: "absolute inset-0 flex items-center justify-center z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "liquid-glass-strong w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                        size: 28,
                        fill: "white",
                        className: "text-white ml-1"
                    }, void 0, false, {
                        fileName: "[project]/Documents/mesherskij/mesh-next/app/components/VideoPlayer.tsx",
                        lineNumber: 54,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/mesherskij/mesh-next/app/components/VideoPlayer.tsx",
                    lineNumber: 53,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/mesherskij/mesh-next/app/components/VideoPlayer.tsx",
                lineNumber: 52,
                columnNumber: 9
            }, this),
            playing && progress === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center z-10 pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-8 h-8 border-2 border-white/20 border-t-[#968766] rounded-full animate-spin"
                }, void 0, false, {
                    fileName: "[project]/Documents/mesherskij/mesh-next/app/components/VideoPlayer.tsx",
                    lineNumber: 61,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/mesherskij/mesh-next/app/components/VideoPlayer.tsx",
                lineNumber: 60,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute inset-x-0 bottom-0 transition-all duration-500 ${show ? "opacity-100" : "opacity-0 pointer-events-none"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "liquid-glass-dark mx-3 mb-3 px-5 pt-4 pb-3 rounded-[1rem]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4 relative progress-glass-track",
                            onClick: (e)=>{
                                const r = e.currentTarget.getBoundingClientRect();
                                const p = (e.clientX - r.left) / r.width;
                                const t = p * duration;
                                if (ref.current) {
                                    ref.current.currentTime = t;
                                    setProgress(t);
                                }
                                reset();
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-y-0 left-0 rounded-full bg-white/10",
                                    style: {
                                        width: `${buf / (duration || 1) * 100}%`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/Documents/mesherskij/mesh-next/app/components/VideoPlayer.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "progress-glass-fill",
                                    style: {
                                        width: `${progress / (duration || 1) * 100}%`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/Documents/mesherskij/mesh-next/app/components/VideoPlayer.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/mesherskij/mesh-next/app/components/VideoPlayer.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: toggle,
                                            className: "w-8 h-8 flex items-center justify-center text-white/90 hover:text-white transition-colors",
                                            children: playing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                                                size: 18,
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/mesherskij/mesh-next/app/components/VideoPlayer.tsx",
                                                lineNumber: 75,
                                                columnNumber: 28
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                size: 18,
                                                fill: "white",
                                                className: "ml-0.5"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/mesherskij/mesh-next/app/components/VideoPlayer.tsx",
                                                lineNumber: 75,
                                                columnNumber: 63
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/mesherskij/mesh-next/app/components/VideoPlayer.tsx",
                                            lineNumber: 74,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "w-7 h-7 flex items-center justify-center text-white/40 hover:text-white/80 transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$forward$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipForward$3e$__["SkipForward"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/mesherskij/mesh-next/app/components/VideoPlayer.tsx",
                                                lineNumber: 77,
                                                columnNumber: 128
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/mesherskij/mesh-next/app/components/VideoPlayer.tsx",
                                            lineNumber: 77,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white/50 text-xs font-mono ml-2 tracking-wide",
                                            children: [
                                                fmt(progress),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white/25",
                                                    children: [
                                                        " / ",
                                                        fmt(duration)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/mesherskij/mesh-next/app/components/VideoPlayer.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 99
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/mesherskij/mesh-next/app/components/VideoPlayer.tsx",
                                            lineNumber: 78,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/mesherskij/mesh-next/app/components/VideoPlayer.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1 group/vol",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        if (!ref.current) return;
                                                        ref.current.muted = !muted;
                                                        setMuted(!muted);
                                                        reset();
                                                    },
                                                    className: "w-8 h-8 flex items-center justify-center text-white/50 hover:text-white transition-colors",
                                                    children: muted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__["VolumeX"], {
                                                        size: 15
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/mesherskij/mesh-next/app/components/VideoPlayer.tsx",
                                                        lineNumber: 83,
                                                        columnNumber: 28
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                                        size: 15
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/mesherskij/mesh-next/app/components/VideoPlayer.tsx",
                                                        lineNumber: 83,
                                                        columnNumber: 52
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/mesherskij/mesh-next/app/components/VideoPlayer.tsx",
                                                    lineNumber: 82,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-0 group-hover/vol:w-16 overflow-hidden transition-all duration-300",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-14 mx-1 h-1 rounded-full bg-white/10 relative cursor-pointer",
                                                        onClick: (e)=>{
                                                            const r = e.currentTarget.getBoundingClientRect();
                                                            const v = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
                                                            setVolume(v);
                                                            if (ref.current) {
                                                                ref.current.volume = v;
                                                                ref.current.muted = false;
                                                            }
                                                            setMuted(false);
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute inset-y-0 left-0 rounded-full bg-[#968766]",
                                                            style: {
                                                                width: `${(muted ? 0 : volume) * 100}%`
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/mesherskij/mesh-next/app/components/VideoPlayer.tsx",
                                                            lineNumber: 88,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/mesherskij/mesh-next/app/components/VideoPlayer.tsx",
                                                        lineNumber: 86,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/mesherskij/mesh-next/app/components/VideoPlayer.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/mesherskij/mesh-next/app/components/VideoPlayer.tsx",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "w-8 h-8 flex items-center justify-center text-white/40 hover:text-white/80 transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings2$3e$__["Settings2"], {
                                                size: 15
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/mesherskij/mesh-next/app/components/VideoPlayer.tsx",
                                                lineNumber: 92,
                                                columnNumber: 128
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/mesherskij/mesh-next/app/components/VideoPlayer.tsx",
                                            lineNumber: 92,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>ref.current?.parentElement?.requestFullscreen(),
                                            className: "w-8 h-8 flex items-center justify-center text-white/40 hover:text-white/80 transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__["Maximize2"], {
                                                size: 15
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/mesherskij/mesh-next/app/components/VideoPlayer.tsx",
                                                lineNumber: 93,
                                                columnNumber: 192
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/mesherskij/mesh-next/app/components/VideoPlayer.tsx",
                                            lineNumber: 93,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/mesherskij/mesh-next/app/components/VideoPlayer.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/mesherskij/mesh-next/app/components/VideoPlayer.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/mesherskij/mesh-next/app/components/VideoPlayer.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/mesherskij/mesh-next/app/components/VideoPlayer.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 left-4 z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "liquid-glass px-3 py-1.5 rounded-full flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "w-1.5 h-1.5 rounded-full bg-[#968766]"
                        }, void 0, false, {
                            fileName: "[project]/Documents/mesherskij/mesh-next/app/components/VideoPlayer.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[11px] font-medium tracking-wide",
                            style: {
                                color: "var(--fg)"
                            },
                            children: video.title
                        }, void 0, false, {
                            fileName: "[project]/Documents/mesherskij/mesh-next/app/components/VideoPlayer.tsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/mesherskij/mesh-next/app/components/VideoPlayer.tsx",
                    lineNumber: 100,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/mesherskij/mesh-next/app/components/VideoPlayer.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/mesherskij/mesh-next/app/components/VideoPlayer.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_s(VideoPlayer, "up1cS3MZPU+bmAxA3PIHwIpKoT0=");
_c = VideoPlayer;
var _c;
__turbopack_context__.k.register(_c, "VideoPlayer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/mesherskij/mesh-next/app/components/VideoList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VideoList",
    ()=>VideoList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/mesherskij/mesh-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/Documents/mesherskij/mesh-next/node_modules/lucide-react/dist/esm/icons/play.mjs [app-client] (ecmascript) <export default as Play>");
"use client";
;
;
function VideoList({ videos, activeId, onSelect }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-1 max-h-[440px] overflow-y-auto pr-1",
        children: [
            videos.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>onSelect(v),
                    className: "w-full text-left flex items-center gap-3.5 p-2.5 rounded-[0.625rem] transition-all duration-200",
                    style: {
                        background: activeId === v.id ? "rgba(150,135,102,0.08)" : "transparent"
                    },
                    onMouseEnter: (e)=>{
                        if (activeId !== v.id) e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                    },
                    onMouseLeave: (e)=>{
                        if (activeId !== v.id) e.currentTarget.style.background = "transparent";
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-20 h-12 rounded-[0.625rem] overflow-hidden flex-shrink-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: v.thumbnail,
                                    alt: "",
                                    className: "w-full h-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/mesherskij/mesh-next/app/components/VideoList.tsx",
                                    lineNumber: 16,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 flex items-center justify-center bg-black/25",
                                    children: activeId === v.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-4 h-4 rounded-full bg-[#968766] flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-1 h-1 bg-white rounded-sm"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/mesherskij/mesh-next/app/components/VideoList.tsx",
                                            lineNumber: 19,
                                            columnNumber: 101
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/mesherskij/mesh-next/app/components/VideoList.tsx",
                                        lineNumber: 19,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                        size: 10,
                                        fill: "white",
                                        className: "text-white ml-0.5"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/mesherskij/mesh-next/app/components/VideoList.tsx",
                                        lineNumber: 20,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/mesherskij/mesh-next/app/components/VideoList.tsx",
                                    lineNumber: 17,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-0.5 right-0.5 px-1 py-px rounded bg-black/60 text-[9px] text-white/90 font-mono",
                                    children: v.duration
                                }, void 0, false, {
                                    fileName: "[project]/Documents/mesherskij/mesh-next/app/components/VideoList.tsx",
                                    lineNumber: 22,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/mesherskij/mesh-next/app/components/VideoList.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-[12px] font-medium leading-tight mb-0.5 truncate",
                                    style: {
                                        color: activeId === v.id ? "var(--granite)" : "var(--fg)"
                                    },
                                    children: v.title
                                }, void 0, false, {
                                    fileName: "[project]/Documents/mesherskij/mesh-next/app/components/VideoList.tsx",
                                    lineNumber: 25,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] truncate",
                                    style: {
                                        color: "var(--cloudy)"
                                    },
                                    children: v.description
                                }, void 0, false, {
                                    fileName: "[project]/Documents/mesherskij/mesh-next/app/components/VideoList.tsx",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/mesherskij/mesh-next/app/components/VideoList.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this)
                    ]
                }, v.id, true, {
                    fileName: "[project]/Documents/mesherskij/mesh-next/app/components/VideoList.tsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, this)),
            videos.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-10 text-[13px]",
                style: {
                    color: "var(--cloudy)"
                },
                children: "Ничего не найдено"
            }, void 0, false, {
                fileName: "[project]/Documents/mesherskij/mesh-next/app/components/VideoList.tsx",
                lineNumber: 30,
                columnNumber: 31
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/mesherskij/mesh-next/app/components/VideoList.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = VideoList;
var _c;
__turbopack_context__.k.register(_c, "VideoList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/mesherskij/mesh-next/app/sections/Player.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Player",
    ()=>Player
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/mesherskij/mesh-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/mesherskij/mesh-next/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Documents/mesherskij/mesh-next/node_modules/lucide-react/dist/esm/icons/clock.mjs [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/Documents/mesherskij/mesh-next/node_modules/lucide-react/dist/esm/icons/eye.mjs [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$app$2f$components$2f$VideoPlayer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/mesherskij/mesh-next/app/components/VideoPlayer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$app$2f$components$2f$VideoList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/mesherskij/mesh-next/app/components/VideoList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$app$2f$data$2f$videos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/mesherskij/mesh-next/app/data/videos.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Player({ activeCategory, searchQuery }) {
    _s();
    const [activeVideo, setActiveVideo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$app$2f$data$2f$videos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VIDEOS"][0]);
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Player.useMemo[filtered]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$app$2f$data$2f$videos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VIDEOS"].filter({
                "Player.useMemo[filtered]": (v)=>{
                    const mc = activeCategory === "all" || v.category === activeCategory;
                    const ms = !searchQuery || v.title.toLowerCase().includes(searchQuery.toLowerCase());
                    return mc && ms;
                }
            }["Player.useMemo[filtered]"])
    }["Player.useMemo[filtered]"], [
        activeCategory,
        searchQuery
    ]);
    const catTitle = activeCategory === "all" ? "Все сценарии" : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$app$2f$data$2f$videos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORIES"].find((c)=>c.id === activeCategory)?.title || "";
    const categoryLabel = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$app$2f$data$2f$videos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORIES"].find((c)=>c.id === activeVideo.category)?.title;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "player",
        className: "py-20 md:py-28",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-5xl mx-auto px-6 md:px-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-end justify-between mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 mb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-5 h-px bg-[#968766]"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Player.tsx",
                                            lineNumber: 26,
                                            columnNumber: 59
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-caption",
                                            children: "Видео"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Player.tsx",
                                            lineNumber: 26,
                                            columnNumber: 100
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Player.tsx",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-headline",
                                    children: catTitle
                                }, void 0, false, {
                                    fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Player.tsx",
                                    lineNumber: 27,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Player.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-micro",
                            children: [
                                filtered.length,
                                " видео"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Player.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Player.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid lg:grid-cols-[1fr_340px] gap-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$app$2f$components$2f$VideoPlayer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VideoPlayer"], {
                                    video: activeVideo
                                }, void 0, false, {
                                    fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Player.tsx",
                                    lineNumber: 33,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-title mb-1",
                                            children: activeVideo.title
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Player.tsx",
                                            lineNumber: 35,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-body",
                                            children: activeVideo.description
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Player.tsx",
                                            lineNumber: 36,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-4 mt-3 text-[12px]",
                                            style: {
                                                color: "var(--jumbo)"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex items-center gap-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                            size: 13,
                                                            strokeWidth: 1.5
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Player.tsx",
                                                            lineNumber: 38,
                                                            columnNumber: 61
                                                        }, this),
                                                        " ",
                                                        activeVideo.views
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Player.tsx",
                                                    lineNumber: 38,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex items-center gap-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                            size: 13,
                                                            strokeWidth: 1.5
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Player.tsx",
                                                            lineNumber: 39,
                                                            columnNumber: 61
                                                        }, this),
                                                        " ",
                                                        activeVideo.duration
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Player.tsx",
                                                    lineNumber: 39,
                                                    columnNumber: 17
                                                }, this),
                                                categoryLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "liquid-glass px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-[#968766]",
                                                    style: {
                                                        backdropFilter: "blur(20px)",
                                                        WebkitBackdropFilter: "blur(20px)",
                                                        background: "rgba(150,135,102,0.06)"
                                                    },
                                                    children: categoryLabel
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Player.tsx",
                                                    lineNumber: 40,
                                                    columnNumber: 35
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Player.tsx",
                                            lineNumber: 37,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Player.tsx",
                                    lineNumber: 34,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Player.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "liquid-glass p-4 lg:p-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[13px] font-medium",
                                            style: {
                                                color: "var(--fg)"
                                            },
                                            children: "Плейлист"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Player.tsx",
                                            lineNumber: 46,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[11px]",
                                            style: {
                                                color: "var(--cloudy)"
                                            },
                                            children: filtered.length
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Player.tsx",
                                            lineNumber: 47,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Player.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$app$2f$components$2f$VideoList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VideoList"], {
                                    videos: filtered,
                                    activeId: activeVideo.id,
                                    onSelect: setActiveVideo
                                }, void 0, false, {
                                    fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Player.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Player.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Player.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Player.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Player.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_s(Player, "vcUrWeB1lG+xlkx0htWNW8HimMI=");
_c = Player;
var _c;
__turbopack_context__.k.register(_c, "Player");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/mesherskij/mesh-next/app/sections/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/mesherskij/mesh-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$app$2f$components$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/mesherskij/mesh-next/app/components/Logo.tsx [app-client] (ecmascript)");
;
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-5xl mx-auto px-6 md:px-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "liquid-glass h-px mb-10",
                    style: {
                        background: "transparent"
                    }
                }, void 0, false, {
                    fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Footer.tsx",
                    lineNumber: 7,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Footer.tsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-5xl mx-auto px-6 md:px-10 pb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row items-start md:items-center justify-between gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$app$2f$components$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LogoMonogram"], {
                                        size: 36
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Footer.tsx",
                                        lineNumber: 12,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[13px] font-medium tracking-wide",
                                                style: {
                                                    color: "var(--fg)"
                                                },
                                                children: "Мещерский 1"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Footer.tsx",
                                                lineNumber: 14,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[12px] mt-0.5",
                                                style: {
                                                    color: "var(--jumbo)"
                                                },
                                                children: "Дом в соснах с гостиничным сервисом"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Footer.tsx",
                                                lineNumber: 15,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Footer.tsx",
                                        lineNumber: 13,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Footer.tsx",
                                lineNumber: 11,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-8 text-[12px]",
                                style: {
                                    color: "var(--jumbo)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hover:text-[var(--fg)] transition-colors cursor-pointer",
                                        children: "О проекте"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Footer.tsx",
                                        lineNumber: 19,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hover:text-[var(--fg)] transition-colors cursor-pointer",
                                        children: "Контакты"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Footer.tsx",
                                        lineNumber: 20,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hover:text-[var(--fg)] transition-colors cursor-pointer",
                                        children: "Конфиденциальность"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Footer.tsx",
                                        lineNumber: 21,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Footer.tsx",
                                lineNumber: 18,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Footer.tsx",
                        lineNumber: 10,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px]",
                                style: {
                                    color: "var(--cloudy)"
                                },
                                children: "© 2026 Мещерский 1"
                            }, void 0, false, {
                                fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Footer.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px]",
                                style: {
                                    color: "var(--cloudy)"
                                },
                                children: "Все права защищены"
                            }, void 0, false, {
                                fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Footer.tsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Footer.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Footer.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/mesherskij/mesh-next/app/sections/Footer.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/mesherskij/mesh-next/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/mesherskij/mesh-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/mesherskij/mesh-next/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$app$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/mesherskij/mesh-next/app/context/ThemeContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$app$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/mesherskij/mesh-next/app/components/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$app$2f$sections$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/mesherskij/mesh-next/app/sections/Hero.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$app$2f$sections$2f$Categories$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/mesherskij/mesh-next/app/sections/Categories.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$app$2f$sections$2f$Player$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/mesherskij/mesh-next/app/sections/Player.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$app$2f$sections$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/mesherskij/mesh-next/app/sections/Footer.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function PageContent() {
    _s();
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: "var(--bg)",
            color: "var(--fg)",
            minHeight: "100vh"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$app$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {
                searchQuery: searchQuery,
                onSearchChange: setSearchQuery
            }, void 0, false, {
                fileName: "[project]/Documents/mesherskij/mesh-next/app/page.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$app$2f$sections$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hero"], {}, void 0, false, {
                fileName: "[project]/Documents/mesherskij/mesh-next/app/page.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$app$2f$sections$2f$Categories$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Categories"], {
                activeCategory: activeCategory,
                onCategoryChange: setActiveCategory
            }, void 0, false, {
                fileName: "[project]/Documents/mesherskij/mesh-next/app/page.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-5xl mx-auto px-6 md:px-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "liquid-glass h-px",
                    style: {
                        background: "transparent"
                    }
                }, void 0, false, {
                    fileName: "[project]/Documents/mesherskij/mesh-next/app/page.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/mesherskij/mesh-next/app/page.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$app$2f$sections$2f$Player$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Player"], {
                activeCategory: activeCategory,
                searchQuery: searchQuery
            }, void 0, false, {
                fileName: "[project]/Documents/mesherskij/mesh-next/app/page.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$app$2f$sections$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                fileName: "[project]/Documents/mesherskij/mesh-next/app/page.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/mesherskij/mesh-next/app/page.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(PageContent, "WnKC/Hi3dMf5aTmU7ym3dllRnqg=");
_c = PageContent;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$app$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$mesherskij$2f$mesh$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageContent, {}, void 0, false, {
            fileName: "[project]/Documents/mesherskij/mesh-next/app/page.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/mesherskij/mesh-next/app/page.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_c1 = Home;
var _c, _c1;
__turbopack_context__.k.register(_c, "PageContent");
__turbopack_context__.k.register(_c1, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_mesherskij_mesh-next_app_0kt~wi7._.js.map