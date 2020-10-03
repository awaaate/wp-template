export function createStaticPaths(params: Record<string, string>[]) {
    return params.map((a) => ({ params: a }));
}
