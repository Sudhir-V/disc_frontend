module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/src/services/api.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "api",
    ()=>api,
    "checkAssessmentStatus",
    ()=>checkAssessmentStatus,
    "exportToPDF",
    ()=>exportToPDF,
    "exportToXLSX",
    ()=>exportToXLSX,
    "getAllUsersReport",
    ()=>getAllUsersReport,
    "getProgress",
    ()=>getProgress,
    "getResult",
    ()=>getResult,
    "getUserProfile",
    ()=>getUserProfile,
    "retryOtp",
    ()=>retryOtp,
    "saveProgress",
    ()=>saveProgress,
    "sendOtp",
    ()=>sendOtp,
    "startAssessment",
    ()=>startAssessment,
    "submitAssessment",
    ()=>submitAssessment,
    "verifyOtp",
    ()=>verifyOtp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
;
const API_URL = 'http://localhost:5000';
const api = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});
const startAssessment = async (userId)=>{
    const response = await api.get(`/assessment/start/${userId}`);
    return response.data;
};
const submitAssessment = async (userId, setId, answers, timeTaken)=>{
    const response = await api.post(`/assessment/submit/${userId}`, {
        setId,
        answers,
        timeTaken
    });
    return response.data;
};
const saveProgress = async (userId, setId, answers)=>{
    const response = await api.post(`/assessment/save-progress/${userId}`, {
        setId,
        answers
    });
    return response.data;
};
const getProgress = async (userId, setId)=>{
    const response = await api.get(`/assessment/progress/${userId}/${setId}`);
    return response.data;
};
const getResult = async (userId)=>{
    const response = await api.get(`/assessment/result/${userId}`);
    return response.data;
};
const checkAssessmentStatus = async (userId)=>{
    const response = await api.get(`/assessment/status/${userId}`);
    return response.data;
};
const sendOtp = async (phone)=>{
    const response = await api.post('/auth/send-otp', {
        phone
    });
    return response.data;
};
const verifyOtp = async (phone, otp)=>{
    const response = await api.post('/auth/verify-otp', {
        phone,
        otp
    });
    return response.data;
};
const retryOtp = async (phone)=>{
    const response = await api.post('/auth/retry-otp', {
        phone
    });
    return response.data;
};
const getUserProfile = async (userId)=>{
    const response = await api.get(`/user/profile/${userId}`);
    return response.data;
};
const getAllUsersReport = async (userId)=>{
    const response = await api.get(`/admin/users/report?userId=${userId}`);
    return response.data;
};
const exportToPDF = async (userId)=>{
    const response = await api.get(`/admin/users/export/pdf?userId=${userId}`, {
        responseType: 'blob'
    });
    return response.data;
};
const exportToXLSX = async (userId)=>{
    const response = await api.get(`/admin/users/export/xlsx?userId=${userId}`, {
        responseType: 'blob'
    });
    return response.data;
};
}),
"[project]/src/components/Assessment/QuestionCard.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QuestionCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
;
;
function QuestionCard({ question, onAnswer }) {
    // variants for card animation
    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 20,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        },
        exit: {
            opacity: 0,
            x: -50,
            transition: {
                duration: 0.3
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        variants: cardVariants,
        initial: "hidden",
        animate: "visible",
        exit: "exit",
        className: "glass-panel p-8 rounded-2xl max-w-2xl w-full mx-auto text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl md:text-3xl font-light mb-12 text-white",
                children: question.question
            }, void 0, false, {
                fileName: "[project]/src/components/Assessment/QuestionCard.js",
                lineNumber: 29,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                children: [
                    'Strongly Disagree',
                    'Disagree',
                    'Neutral',
                    'Agree',
                    'Strongly Agree'
                ].map((option, index)=>{
                    // We need to map these to DISC types if the backend expects "D", "I", "S", "C" directly 
                    // OR if we are just collecting agreement levels.
                    // However, looking at the backend model `Assessment.model.js`:
                    // `answer: { type: String, required: true }, // D, I, S, C`
                    // The backend expects the ANSWER to be one of "D", "I", "S", "C".
                    // But normally a DISC test asks you to pick which word/phrase describes you best from a set of 4.
                    // BUT `seed.js` shows: `questions: [{ qId: 1, question: "I am assertive...", type: "D" }, ...]`
                    // This implies a Likert scale (Agree/Disagree) where "Agree" adds to the `D` score?
                    // OR it implies selecting the statement that matches?
                    // Checking the seed data again:
                    // { qId: 1, question: "I am assertive and demanding.", type: "D" }
                    // If the user answers "Agree" to this, they get points for D?
                    // Let's assume a Likert scale logic implicitly for this specific seed data structure.
                    // IF the user selects "Agree" on a "D" type question, it adds to "D".
                    // The backend `submitAssessment` logic counts `scores[ans.answer]++`. 
                    // WAIT. The backend logic: `if (scores[ans.answer] !== undefined) scores[ans.answer]++;`
                    // This means `ans.answer` MUST be "D", "I", "S", or "C".
                    // So the User is NOT selecting "Agree/Disagree". The User is presumably selecting WHICH option?
                    // BUT the seed data has linear questions.
                    // Usually DISC is forced choice (Pick Most/Least from 4).
                    // The current seed data looks like single statements. 
                    // Maybe the Frontend logic is: If User Agrees, sends the Question's TYPE as the "answer"?
                    // If User Disagrees, it sends nothing?
                    // Let's look at the backend logic again.
                    // `answers` is array of `{ qId, answer }`. 
                    // `scores[ans.answer]++`. 
                    // So `ans.answer` must be "D".
                    // PROPOSED LOGIC:
                    // This looks like a simple "Select all that apply" or "Yes/No" flow.
                    // But the prompt said "one-question-at-a-time assessment flow".
                    // If I give a Likert scale, how do I map "Strongly Agree" to "D"? 
                    // If I Strong Agree D question, D+2?
                    // The backend only does increment `++`.
                    // So likely: "Does this describe you?" -> Yes/No.
                    // If YES -> answer = question.type.
                    // If NO -> answer = "" (or ignored).
                    // Let's implement a nicer UI: "Me" vs "Not Me". 
                    // Or just 2 buttons.
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            // For now, let's assume we are sending the TYPE if it's a positive response.
                            // This might need backend validatio check.
                            // Actually, if the backend just counts frequencies of "D", "I", "S", "C",
                            // then for each question "I am assertive (Type D)", if I click "Yes", I send "D".
                            // If I click "No", I send nothing or skip?
                            // Let's simplified to a Binary Choice for now to fit the backend 1:1 map.
                            // "Describes Me" vs "Does Not Describe Me".
                            // Wait, I can't loop map buttons if I change logic.
                            null;
                        }
                    }, option, false, {
                        fileName: "[project]/src/components/Assessment/QuestionCard.js",
                        lineNumber: 81,
                        columnNumber: 25
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/Assessment/QuestionCard.js",
                lineNumber: 33,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row gap-4 justify-center mt-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onAnswer(question.type),
                        className: "px-8 py-4 rounded-xl bo-glass bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-400 transition-all duration-300 text-lg hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]",
                        children: "Describes Me"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Assessment/QuestionCard.js",
                        lineNumber: 102,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onAnswer(null),
                        className: "px-8 py-4 rounded-xl bg-transparent hover:bg-white/5 border border-transparent hover:border-white/10 text-zinc-400 hover:text-white transition-all duration-300",
                        children: "Not Me"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Assessment/QuestionCard.js",
                        lineNumber: 108,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Assessment/QuestionCard.js",
                lineNumber: 101,
                columnNumber: 13
            }, this)
        ]
    }, question.qId, true, {
        fileName: "[project]/src/components/Assessment/QuestionCard.js",
        lineNumber: 21,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/Assessment/ProgressBar.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProgressBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
;
;
function ProgressBar({ current, total, label }) {
    const percentage = Math.min(current / total * 100, 100);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-xl mx-auto mb-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between text-zinc-400 text-sm mb-2 font-mono",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: label || `Question ${current}`
                    }, void 0, false, {
                        fileName: "[project]/src/components/Assessment/ProgressBar.js",
                        lineNumber: 9,
                        columnNumber: 17
                    }, this),
                    !label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            total,
                            " Total"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Assessment/ProgressBar.js",
                        lineNumber: 10,
                        columnNumber: 28
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Assessment/ProgressBar.js",
                lineNumber: 8,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-2 bg-zinc-800 rounded-full overflow-hidden border border-white/10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "h-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]",
                    initial: {
                        width: 0
                    },
                    animate: {
                        width: `${percentage}%`
                    },
                    transition: {
                        duration: 0.5
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/Assessment/ProgressBar.js",
                    lineNumber: 13,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Assessment/ProgressBar.js",
                lineNumber: 12,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Assessment/ProgressBar.js",
        lineNumber: 7,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/ui/Modal.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Modal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
;
;
;
function Modal({ isOpen, onClose, title, message }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-50 flex items-center justify-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    onClick: onClose,
                    className: "absolute inset-0 bg-black/60 backdrop-blur-sm"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Modal.js",
                    lineNumber: 10,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        scale: 0.9,
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        scale: 1,
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        scale: 0.9,
                        opacity: 0,
                        y: 20
                    },
                    className: "relative z-10 w-full max-w-md p-6 overflow-hidden rounded-2xl glass-panel border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-zinc-900/90",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Modal.js",
                            lineNumber: 26,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-0 left-0 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Modal.js",
                            lineNumber: 27,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-medium text-black",
                                            children: title || 'Attention'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/Modal.js",
                                            lineNumber: 31,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: onClose,
                                            className: "p-1 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/Modal.js",
                                                lineNumber: 36,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/Modal.js",
                                            lineNumber: 32,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ui/Modal.js",
                                    lineNumber: 30,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-black mb-8 leading-relaxed",
                                    children: message
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/Modal.js",
                                    lineNumber: 40,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-end",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onClose,
                                        className: "px-6 py-2 rounded-lg bg-white text-black font-medium hover:scale-105 transition-transform",
                                        children: "Okay, I understand"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/Modal.js",
                                        lineNumber: 45,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/Modal.js",
                                    lineNumber: 44,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/Modal.js",
                            lineNumber: 29,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/Modal.js",
                    lineNumber: 19,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/Modal.js",
            lineNumber: 8,
            columnNumber: 17
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Modal.js",
        lineNumber: 6,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/ui/Toast.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Toast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
function Toast({ message, isVisible, onClose, duration = 3000 }) {
    const onCloseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(onClose);
    // Keep the ref updated
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        onCloseRef.current = onClose;
    }, [
        onClose
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isVisible && duration > 0) {
            const timer = setTimeout(()=>{
                onCloseRef.current();
            }, duration);
            return ()=>clearTimeout(timer);
        }
    }, [
        isVisible,
        duration
    ]); // Removed onClose from dependencies
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                y: -50
            },
            animate: {
                opacity: 1,
                y: 0
            },
            exit: {
                opacity: 0,
                y: -50
            },
            transition: {
                duration: 0.3
            },
            className: "fixed top-8 left-1/2 transform -translate-x-1/2 z-50 px-6 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-[0_0_30px_rgba(249,115,22,0.5)] border border-orange-400/30 backdrop-blur-sm",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-shrink-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-6 h-6",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Toast.js",
                                lineNumber: 37,
                                columnNumber: 33
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Toast.js",
                            lineNumber: 36,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Toast.js",
                        lineNumber: 35,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-medium text-lg",
                        children: message
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Toast.js",
                        lineNumber: 40,
                        columnNumber: 25
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/Toast.js",
                lineNumber: 34,
                columnNumber: 21
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Toast.js",
            lineNumber: 27,
            columnNumber: 17
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Toast.js",
        lineNumber: 25,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/app/assessment/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AssessmentPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Assessment$2f$QuestionCard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Assessment/QuestionCard.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Assessment$2f$ProgressBar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Assessment/ProgressBar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Modal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Modal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Toast$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Toast.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/thumbs-up.js [app-ssr] (ecmascript) <export default as ThumbsUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/thumbs-down.js [app-ssr] (ecmascript) <export default as ThumbsDown>");
'use client';
;
;
;
;
;
;
;
;
;
;
function AssessmentPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [questions, setQuestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0); // Now represents current question index (0-39)
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]); // Array of { qId, answer }
    const [setId, setSetId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isCompleted, setIsCompleted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Timer State (45 minutes in seconds)
    const [timeLeft, setTimeLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(45 * 60);
    const [timerStartTime, setTimerStartTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Modal State
    const [modalConfig, setModalConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        isOpen: false,
        title: '',
        message: ''
    });
    // Toast State
    const [toastConfig, setToastConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        show: false,
        message: ''
    });
    const isSubmitting = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const ITEMS_PER_PAGE = 1; // Explicitly set to 1 for one question per page
    // Check for authentication & Fetch Questions OR Restore State
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const userId = localStorage.getItem('disc_user_id');
        if (!userId) {
            router.push('/login');
            return;
        }
        const restoreOrFetch = async ()=>{
            try {
                // Try to restore from localStorage
                const savedStateIdx = localStorage.getItem('disc_assessment_state');
                // Check if stored state supports new format (checking if answers have 'most'/'least' pattern or version flag)
                // For simplicity due to breaking change, we will FORCE clear old state if it doesn't match new schema or just once for upgrade.
                // Let's check if the first answer has 'most' property
                if (savedStateIdx) {
                    const savedState = JSON.parse(savedStateIdx);
                    // VALIDATION FOR NEW FORMAT
                    const isNewFormat = savedState.answers && savedState.answers.length > 0 ? savedState.answers[0].most !== undefined : true; // empty is fine
                    // Verify it belongs to current user AND is new format
                    if (savedState.userId === userId && !savedState.isCompleted && isNewFormat) {
                        console.log('Restoring assessment state...');
                        setQuestions(savedState.questions);
                        setSetId(savedState.setId);
                        setAnswers(savedState.answers || []);
                        setCurrentPage(savedState.currentPage || 0);
                        setTimerStartTime(savedState.startTime);
                        // Calculate remaining time
                        const now = Date.now();
                        const elapsedSeconds = Math.floor((now - savedState.startTime) / 1000);
                        const remaining = Math.max(0, 45 * 60 - elapsedSeconds);
                        setTimeLeft(remaining);
                        setLoading(false);
                        return; // Done restoring
                    } else {
                        console.log('Detected old or invalid assessment state. Clearing...');
                        localStorage.removeItem('disc_assessment_state');
                    }
                }
                // If no valid state, fetch new
                console.log('Starting new assessment...');
                const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startAssessment"])(userId);
                if (data && data.questions) {
                    setQuestions(data.questions);
                    setSetId(data.setId);
                    setCurrentPage(0);
                    const now = Date.now();
                    setTimerStartTime(now);
                    setTimeLeft(45 * 60);
                    // Initialize storage
                    const initialState = {
                        userId,
                        setId: data.setId,
                        questions: data.questions,
                        answers: [],
                        currentPage: 0,
                        startTime: now,
                        isCompleted: false
                    };
                    localStorage.setItem('disc_assessment_state', JSON.stringify(initialState));
                }
            } catch (error) {
                console.error("Failed to load questions", error);
            } finally{
                setLoading(false);
            }
        };
        restoreOrFetch();
    }, [
        router
    ]);
    // Save progress whenever answers or page changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (loading || isCompleted || !setId) return;
        const userId = localStorage.getItem('disc_user_id');
        if (!userId) return;
        const stateToSave = {
            userId,
            setId,
            questions,
            answers,
            currentPage,
            startTime: timerStartTime,
            isCompleted: false
        };
        localStorage.setItem('disc_assessment_state', JSON.stringify(stateToSave));
    }, [
        answers,
        setId,
        questions,
        currentPage,
        timerStartTime,
        loading,
        isCompleted
    ]);
    // Prevent back button navigation - COMPLETELY BLOCK IT
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (loading || isCompleted) return;
        // Push a dummy state to prevent back navigation
        window.history.pushState(null, '', window.location.href);
        const handlePopState = (e)=>{
            // Block navigation and show toast
            window.history.pushState(null, '', window.location.href);
            // Force close any existing toast first, then show new one
            // This ensures the toast re-triggers even if clicked rapidly
            setToastConfig({
                show: false,
                message: ""
            });
            // Use setTimeout to ensure state update completes before showing new toast
            setTimeout(()=>{
                setToastConfig({
                    show: true,
                    message: "You cannot go back during the assessment. Please complete all questions to proceed."
                });
            }, 10);
        };
        window.addEventListener('popstate', handlePopState);
        return ()=>{
            window.removeEventListener('popstate', handlePopState);
        };
    }, [
        loading,
        isCompleted
    ]);
    // Timer Logic - Update every second based on start time
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (loading || isCompleted || !timerStartTime) return;
        // Immediate check logic separate from interval to handle load
        const now = Date.now();
        const elapsed = Math.floor((now - timerStartTime) / 1000);
        const rem = Math.max(0, 45 * 60 - elapsed);
        if (rem <= 0) {
            setTimeLeft(0);
            handleSubmit(true); // Force submit
            return;
        }
        const timerId = setInterval(()=>{
            const now = Date.now();
            const elapsedSeconds = Math.floor((now - timerStartTime) / 1000);
            const remaining = Math.max(0, 45 * 60 - elapsedSeconds);
            setTimeLeft(remaining);
            if (remaining <= 0) {
                clearInterval(timerId);
                handleSubmit(true);
            }
        }, 1000);
        return ()=>clearInterval(timerId);
    }, [
        timerStartTime,
        loading,
        isCompleted
    ]);
    // Format Time
    const formatTime = (seconds)=>{
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };
    // Redirect on completion
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isCompleted) {
            console.log('Assessment completed, redirecting to results...');
            const timer = setTimeout(()=>{
                window.location.href = '/results';
            }, 500);
            return ()=>clearTimeout(timer);
        }
    }, [
        isCompleted
    ]);
    const handleAnswer = (qId, type, selectionType)=>{
        setAnswers((prev)=>{
            const existingIndex = prev.findIndex((a)=>a.qId === qId);
            let newAnswers = [
                ...prev
            ];
            let currentAnswer = existingIndex >= 0 ? {
                ...newAnswers[existingIndex]
            } : {
                qId
            };
            // Check if this type is already selected for the OTHER category
            if (selectionType === 'most' && currentAnswer.least === type) {
                // Shake animation trigger could go here via state, but handling logic first
                // For now, we simply clear the 'least' if it's the same
                currentAnswer.least = null;
            }
            if (selectionType === 'least' && currentAnswer.most === type) {
                currentAnswer.most = null;
            }
            if (selectionType === 'most') {
                // Toggle off if same, or set new
                currentAnswer.most = currentAnswer.most === type ? null : type;
            } else if (selectionType === 'least') {
                currentAnswer.least = currentAnswer.least === type ? null : type;
            }
            if (existingIndex >= 0) {
                newAnswers[existingIndex] = currentAnswer;
            } else {
                newAnswers.push(currentAnswer);
            }
            return newAnswers;
        });
    };
    const closeModal = ()=>{
        setModalConfig((prev)=>({
                ...prev,
                isOpen: false
            }));
    };
    const handlePrevPage = ()=>{
        if (currentPage > 0) {
            // window.scrollTo({ top: 0, behavior: 'smooth' });
            setCurrentPage((prev)=>prev - 1);
        }
    };
    const handleNextPage = ()=>{
        if (currentPage < questions.length - 1) {
            // window.scrollTo({ top: 0, behavior: 'smooth' });
            setCurrentPage((prev)=>prev + 1);
        }
    };
    const jumpToQuestion = (index)=>{
        setCurrentPage(index);
    };
    const handleSubmit = async (force = false)=>{
        // Validation needed unless forced by timer
        if (!force) {
            // Check if every question has both MOST and LEAST answered
            const unanswered = questions.filter((q)=>{
                const ans = answers.find((a)=>a.qId === q.qId);
                return !ans || !ans.most || !ans.least;
            });
            if (unanswered.length > 0) {
                setToastConfig({
                    show: true,
                    message: `⚠️ Please complete ${unanswered.length} pending question${unanswered.length > 1 ? 's' : ''}! Select both 'Most' and 'Least' for each question.`
                });
                return;
            }
        }
        if (isSubmitting.current || isCompleted) return;
        isSubmitting.current = true;
        setLoading(true);
        try {
            const userId = localStorage.getItem('disc_user_id');
            const duration = Math.floor((Date.now() - timerStartTime) / 1000);
            console.log('Assessment Duration (seconds):', duration);
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["submitAssessment"])(userId, setId, answers, duration);
            console.log('Assessment submitted successfully:', result);
            // CLEAR STATE ON SUCCESS
            localStorage.removeItem('disc_assessment_state');
            setIsCompleted(true);
        } catch (error) {
            console.error("Failed to submit", error);
            setModalConfig({
                isOpen: true,
                title: 'Submission Error',
                message: 'There was a problem submitting your assessment. Please try again.'
            });
            setLoading(false);
            isSubmitting.current = false;
        }
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center bg-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-pulse flex flex-col items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-12 w-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin mb-4"
                    }, void 0, false, {
                        fileName: "[project]/src/app/assessment/page.js",
                        lineNumber: 326,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-green-600 font-mono",
                        children: isCompleted ? 'Calculating Results...' : 'Loading Assessment...'
                    }, void 0, false, {
                        fileName: "[project]/src/app/assessment/page.js",
                        lineNumber: 327,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/assessment/page.js",
                lineNumber: 325,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/assessment/page.js",
            lineNumber: 324,
            columnNumber: 13
        }, this);
    }
    const currentQuestion = questions[currentPage];
    // Use questions length or fallback to 40 if loading (though logic prevents loading state here)
    // The user requirement says "split into 40". If we fetch dynamic questions, we iterate them.
    // Assuming questions array is fully populated.
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen flex flex-col items-center justify-start p-4 md:p-8 bg-gradient-to-b from-white via-green-50 to-green-100 relative text-zinc-900 transition-colors duration-500",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Modal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: modalConfig.isOpen,
                onClose: closeModal,
                title: modalConfig.title,
                message: modalConfig.message
            }, void 0, false, {
                fileName: "[project]/src/app/assessment/page.js",
                lineNumber: 342,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Toast$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                message: toastConfig.message,
                isVisible: toastConfig.show,
                onClose: ()=>setToastConfig({
                        ...toastConfig,
                        show: false
                    }),
                duration: 3000
            }, void 0, false, {
                fileName: "[project]/src/app/assessment/page.js",
                lineNumber: 349,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-green-200/30 rounded-full blur-[120px]"
                    }, void 0, false, {
                        fileName: "[project]/src/app/assessment/page.js",
                        lineNumber: 358,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-cyan-200/20 rounded-full blur-[120px]"
                    }, void 0, false, {
                        fileName: "[project]/src/app/assessment/page.js",
                        lineNumber: 359,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/assessment/page.js",
                lineNumber: 357,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "z-20 w-full max-w-5xl flex justify-between items-center mb-6 sticky top-4 glass-panel p-4 rounded-2xl border border-green-100 bg-white/80 backdrop-blur-md shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: "/logo-new.png",
                                alt: "Inqisity Logo",
                                width: 120,
                                height: 36,
                                className: "object-contain"
                            }, void 0, false, {
                                fileName: "[project]/src/app/assessment/page.js",
                                lineNumber: 365,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col border-l border-zinc-200 pl-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg font-bold text-green-800",
                                        children: "Assessment"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/assessment/page.js",
                                        lineNumber: 373,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-zinc-500 font-medium",
                                        children: [
                                            "Question ",
                                            currentPage + 1,
                                            " of ",
                                            questions.length
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/assessment/page.js",
                                        lineNumber: 376,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/assessment/page.js",
                                lineNumber: 372,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/assessment/page.js",
                        lineNumber: 364,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `font-mono text-xl font-bold px-4 py-2 rounded-lg border flex items-center gap-2 ${timeLeft < 300 ? 'text-red-600 border-red-200 bg-red-50' : 'text-green-700 border-green-200 bg-green-50'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "⏱"
                            }, void 0, false, {
                                fileName: "[project]/src/app/assessment/page.js",
                                lineNumber: 382,
                                columnNumber: 21
                            }, this),
                            " ",
                            formatTime(timeLeft)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/assessment/page.js",
                        lineNumber: 381,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] uppercase tracking-wider text-zinc-400 font-medium",
                                children: "Powered by"
                            }, void 0, false, {
                                fileName: "[project]/src/app/assessment/page.js",
                                lineNumber: 387,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/wele-logo.png",
                                        alt: "WeLe Logo",
                                        className: "w-5 h-5 object-contain"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/assessment/page.js",
                                        lineNumber: 389,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg font-black italic text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-emerald-400 to-green-500 animate-pulse tracking-tight neon-text",
                                        style: {
                                            fontFamily: "'Metropolis Extra Bold', 'Metropolis', sans-serif",
                                            fontWeight: 800
                                        },
                                        children: "WeLe"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/assessment/page.js",
                                        lineNumber: 390,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/assessment/page.js",
                                lineNumber: 388,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/assessment/page.js",
                        lineNumber: 386,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/assessment/page.js",
                lineNumber: 363,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "z-20 w-full max-w-4xl mb-8 flex flex-col gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-end mb-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-medium text-zinc-500",
                                children: "Progress"
                            }, void 0, false, {
                                fileName: "[project]/src/app/assessment/page.js",
                                lineNumber: 398,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    (()=>{
                                        const skippedCount = questions.filter((q, idx)=>{
                                            const ans = answers.find((a)=>a.qId === q.qId);
                                            const isComplete = ans && ans.most && ans.least;
                                            const isVisited = idx < currentPage; // Only count questions BEFORE current
                                            return isVisited && !isComplete; // Only count visited incomplete questions
                                        }).length;
                                        const completedCount = questions.filter((q)=>{
                                            const ans = answers.find((a)=>a.qId === q.qId);
                                            return ans && ans.most && ans.least;
                                        }).length;
                                        // Only show badge if user has visited at least one question
                                        if (currentPage > 0) {
                                            if (skippedCount > 0) {
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-bold border border-red-200",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "⚠️"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/assessment/page.js",
                                                            lineNumber: 419,
                                                            columnNumber: 45
                                                        }, this),
                                                        " ",
                                                        skippedCount,
                                                        " Skipped"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/assessment/page.js",
                                                    lineNumber: 418,
                                                    columnNumber: 41
                                                }, this);
                                            } else if (completedCount > 0) {
                                                // Only show "All Complete" if there are actually completed questions
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-bold border border-green-200",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "✓"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/assessment/page.js",
                                                            lineNumber: 426,
                                                            columnNumber: 45
                                                        }, this),
                                                        " All Complete"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/assessment/page.js",
                                                    lineNumber: 425,
                                                    columnNumber: 41
                                                }, this);
                                            }
                                        }
                                        return null;
                                    })(),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-bold text-green-700",
                                        children: [
                                            questions.filter((q)=>{
                                                const ans = answers.find((a)=>a.qId === q.qId);
                                                return ans && ans.most && ans.least;
                                            }).length,
                                            "/",
                                            questions.length
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/assessment/page.js",
                                        lineNumber: 433,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/assessment/page.js",
                                lineNumber: 399,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/assessment/page.js",
                        lineNumber: 397,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full flex gap-1",
                        children: questions.map((q, idx)=>{
                            const ans = answers.find((a)=>a.qId === q.qId);
                            const isComplete = ans && ans.most && ans.least;
                            const isVisited = idx < currentPage; // Only questions BEFORE current are considered visited
                            const isIncomplete = isVisited && !isComplete;
                            const isCurrent = idx === currentPage;
                            // Determine color: Gray (unvisited or current), Red (visited but incomplete), Green (complete)
                            let colorClass = 'bg-zinc-200'; // Default: unvisited or current (gray)
                            let statusText = idx === currentPage ? 'Current' : 'Not visited';
                            if (isComplete) {
                                colorClass = 'bg-gradient-to-r from-green-500 to-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.3)]';
                                statusText = 'Complete';
                            } else if (isIncomplete) {
                                colorClass = 'bg-red-400';
                                statusText = 'Skipped';
                            }
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>jumpToQuestion(idx),
                                className: `
                                    flex-1 h-3 rounded-sm transition-all duration-300 cursor-pointer
                                    ${colorClass}
                                    ${isCurrent ? 'ring-2 ring-blue-500 ring-offset-1 scale-110' : 'hover:scale-105'}
                                `,
                                title: `Question ${idx + 1} - ${statusText}`
                            }, q.qId, false, {
                                fileName: "[project]/src/app/assessment/page.js",
                                lineNumber: 464,
                                columnNumber: 29
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/app/assessment/page.js",
                        lineNumber: 443,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/assessment/page.js",
                lineNumber: 396,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "z-10 w-full max-w-4xl flex flex-col flex-1 pb-20 justify-center min-h-[400px]",
                children: currentQuestion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "animate-in fade-in slide-in-from-right duration-500",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-block px-3 py-1 rounded-full bg-white text-zinc-500 text-sm font-bold mb-4 shadow-sm",
                                    children: [
                                        "Question ",
                                        currentPage + 1,
                                        " of ",
                                        questions.length
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/assessment/page.js",
                                    lineNumber: 484,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl md:text-2xl font-semibold text-zinc-800 leading-tight",
                                    children: currentQuestion.question
                                }, void 0, false, {
                                    fileName: "[project]/src/app/assessment/page.js",
                                    lineNumber: 487,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/assessment/page.js",
                            lineNumber: 483,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-3",
                                    children: currentQuestion.options && currentQuestion.options.slice(0, 2).map((opt, idx)=>{
                                        const ans = answers.find((a)=>a.qId === currentQuestion.qId) || {};
                                        const isMost = ans.most === opt.type;
                                        const isLeast = ans.least === opt.type;
                                        const bothSelected = ans.most && ans.least;
                                        const isGrayedOut = bothSelected && !isMost && !isLeast;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `
                                                relative grid grid-cols-[1fr_auto_auto] gap-3 items-center p-3 rounded-xl border transition-all duration-300
                                                ${isGrayedOut ? 'bg-gray-100 border-gray-300 opacity-50' : 'bg-white border-zinc-200 hover:border-green-300 hover:shadow-sm hover:scale-[1.005]'}
                                            `,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `
                                                font-medium text-base leading-snug transition-colors
                                                ${isGrayedOut ? 'text-gray-400' : 'text-zinc-700'}
                                            `,
                                                    children: opt.text
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/assessment/page.js",
                                                    lineNumber: 512,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleAnswer(currentQuestion.qId, opt.type, 'most'),
                                                            className: `
                                                        w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300 group
                                                        ${isMost ? 'bg-white border-green-400 shadow-lg scale-110' : 'border-zinc-200 hover:border-green-400 hover:bg-green-50'}
                                                    `,
                                                            title: "Most Like Me (+1)",
                                                            children: isMost ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xl",
                                                                children: "👍"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/assessment/page.js",
                                                                lineNumber: 534,
                                                                columnNumber: 57
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsUp$3e$__["ThumbsUp"], {
                                                                size: 20,
                                                                className: "text-zinc-300 group-hover:text-green-500 transition-colors duration-300"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/assessment/page.js",
                                                                lineNumber: 536,
                                                                columnNumber: 57
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/assessment/page.js",
                                                            lineNumber: 522,
                                                            columnNumber: 49
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleAnswer(currentQuestion.qId, opt.type, 'least'),
                                                            className: `
                                                        w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300 group
                                                        ${isLeast ? 'bg-white border-red-400 shadow-lg scale-110' : 'border-zinc-200 hover:border-red-400 hover:bg-red-50'}
                                                    `,
                                                            title: "Least Like Me (-1)",
                                                            children: isLeast ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xl",
                                                                children: "👎"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/assessment/page.js",
                                                                lineNumber: 556,
                                                                columnNumber: 57
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsDown$3e$__["ThumbsDown"], {
                                                                size: 20,
                                                                className: "text-zinc-300 group-hover:text-red-500 transition-colors duration-300"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/assessment/page.js",
                                                                lineNumber: 558,
                                                                columnNumber: 57
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/assessment/page.js",
                                                            lineNumber: 544,
                                                            columnNumber: 49
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/assessment/page.js",
                                                    lineNumber: 520,
                                                    columnNumber: 45
                                                }, this)
                                            ]
                                        }, idx, true, {
                                            fileName: "[project]/src/app/assessment/page.js",
                                            lineNumber: 504,
                                            columnNumber: 41
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/app/assessment/page.js",
                                    lineNumber: 495,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-3",
                                    children: currentQuestion.options && currentQuestion.options.slice(2, 4).map((opt, idx)=>{
                                        const ans = answers.find((a)=>a.qId === currentQuestion.qId) || {};
                                        const isMost = ans.most === opt.type;
                                        const isLeast = ans.least === opt.type;
                                        const bothSelected = ans.most && ans.least;
                                        const isGrayedOut = bothSelected && !isMost && !isLeast;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `
                                                relative grid grid-cols-[1fr_auto_auto] gap-3 items-center p-3 rounded-xl border transition-all duration-300
                                                ${isGrayedOut ? 'bg-gray-100 border-gray-300 opacity-50' : 'bg-white border-zinc-200 hover:border-green-300 hover:shadow-sm hover:scale-[1.005]'}
                                            `,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `
                                                font-medium text-base leading-snug transition-colors
                                                ${isGrayedOut ? 'text-gray-400' : 'text-zinc-700'}
                                            `,
                                                    children: opt.text
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/assessment/page.js",
                                                    lineNumber: 588,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleAnswer(currentQuestion.qId, opt.type, 'most'),
                                                            className: `
                                                        w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300 group
                                                        ${isMost ? 'bg-white border-green-400 shadow-lg scale-110' : 'border-zinc-200 hover:border-green-400 hover:bg-green-50'}
                                                    `,
                                                            title: "Most Like Me (+1)",
                                                            children: isMost ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xl",
                                                                children: "👍"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/assessment/page.js",
                                                                lineNumber: 610,
                                                                columnNumber: 57
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsUp$3e$__["ThumbsUp"], {
                                                                size: 20,
                                                                className: "text-zinc-300 group-hover:text-green-500 transition-colors duration-300"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/assessment/page.js",
                                                                lineNumber: 612,
                                                                columnNumber: 57
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/assessment/page.js",
                                                            lineNumber: 598,
                                                            columnNumber: 49
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleAnswer(currentQuestion.qId, opt.type, 'least'),
                                                            className: `
                                                        w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300 group
                                                        ${isLeast ? 'bg-white border-red-400 shadow-lg scale-110' : 'border-zinc-200 hover:border-red-400 hover:bg-red-50'}
                                                    `,
                                                            title: "Least Like Me (-1)",
                                                            children: isLeast ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xl",
                                                                children: "👎"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/assessment/page.js",
                                                                lineNumber: 632,
                                                                columnNumber: 57
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsDown$3e$__["ThumbsDown"], {
                                                                size: 20,
                                                                className: "text-zinc-300 group-hover:text-red-500 transition-colors duration-300"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/assessment/page.js",
                                                                lineNumber: 634,
                                                                columnNumber: 57
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/assessment/page.js",
                                                            lineNumber: 620,
                                                            columnNumber: 49
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/assessment/page.js",
                                                    lineNumber: 596,
                                                    columnNumber: 45
                                                }, this)
                                            ]
                                        }, idx + 2, true, {
                                            fileName: "[project]/src/app/assessment/page.js",
                                            lineNumber: 580,
                                            columnNumber: 41
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/app/assessment/page.js",
                                    lineNumber: 571,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/assessment/page.js",
                            lineNumber: 493,
                            columnNumber: 25
                        }, this)
                    ]
                }, currentQuestion.qId, true, {
                    fileName: "[project]/src/app/assessment/page.js",
                    lineNumber: 482,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/assessment/page.js",
                lineNumber: 480,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-0 left-0 w-full z-30 p-4 bg-white/80 backdrop-blur-lg border-t border-green-100",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handlePrevPage,
                            disabled: currentPage === 0,
                            className: `
                            px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all
                            ${currentPage === 0 ? 'text-zinc-400 cursor-not-allowed' : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900'}
                        `,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    strokeWidth: 2,
                                    stroke: "currentColor",
                                    className: "w-5 h-5",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/assessment/page.js",
                                        lineNumber: 665,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/assessment/page.js",
                                    lineNumber: 664,
                                    columnNumber: 25
                                }, this),
                                "Previous"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/assessment/page.js",
                            lineNumber: 653,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm text-zinc-400 font-medium hidden md:block",
                            children: [
                                answers.filter((a)=>a.most && a.least).length,
                                " answered / ",
                                questions.length,
                                " total"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/assessment/page.js",
                            lineNumber: 670,
                            columnNumber: 21
                        }, this),
                        currentPage === questions.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>handleSubmit(false),
                            className: "px-10 py-3 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold text-lg hover:shadow-lg hover:shadow-green-200 hover:-translate-y-0.5 transition-all flex items-center gap-2",
                            children: [
                                "Complete Assessment",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    strokeWidth: 2.5,
                                    stroke: "currentColor",
                                    className: "w-5 h-5",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M4.5 12.75l6 6 9-13.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/assessment/page.js",
                                        lineNumber: 681,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/assessment/page.js",
                                    lineNumber: 680,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/assessment/page.js",
                            lineNumber: 675,
                            columnNumber: 25
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleNextPage,
                            className: "px-8 py-3 rounded-xl bg-zinc-900 text-white font-bold hover:bg-zinc-800 hover:scale-105 transition-all flex items-center gap-2 shadow-lg",
                            children: [
                                "Next Question",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    strokeWidth: 2,
                                    stroke: "currentColor",
                                    className: "w-5 h-5",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/assessment/page.js",
                                        lineNumber: 691,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/assessment/page.js",
                                    lineNumber: 690,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/assessment/page.js",
                            lineNumber: 685,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/assessment/page.js",
                    lineNumber: 652,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/assessment/page.js",
                lineNumber: 651,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/assessment/page.js",
        lineNumber: 341,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a37dc5a8._.js.map