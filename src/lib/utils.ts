export function formatPageTitle(pageName: string) {
    if (!pageName) return "JDBros";
    return `JDBros — ${pageName.charAt(0).toUpperCase()}${pageName.slice(1).toLowerCase()}`;
}
