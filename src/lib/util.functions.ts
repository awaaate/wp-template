export function createStaticPaths(params: Record<string, string>[]) {
    return params.map((a) => ({ params: a }));
}

export function createExcerpt(text: string, maxWords: number = 60) {
    return {
        __html: text.split(" ").slice(0, maxWords).join(" ") + "...",
    };
}
export function parseToLink(text: string) {
    return encodeURI(text.toLowerCase().replace(/ /g, "-"));
}
