export const uniqueId = () =>
    (performance.now() + Math.random()).toString(36).replace(".", "");