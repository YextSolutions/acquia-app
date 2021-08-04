export function convertDate(s: string) {
    if (s.length > 5) {
        return s.substr(0, s.length - 6);
    }
    return s;
}