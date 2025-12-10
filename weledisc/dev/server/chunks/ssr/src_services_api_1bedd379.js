module.exports = [
"[project]/src/services/api.js [app-ssr] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/node_modules_ccd77795._.js",
  "server/chunks/ssr/[root-of-the-server]__65ab750b._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/src/services/api.js [app-ssr] (ecmascript)");
    });
});
}),
];