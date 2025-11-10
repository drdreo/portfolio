/**
 * Simple classname utility function
 * Filters out falsy values and joins class names with spaces
 */
export function cn(...classes: (string | undefined | null | boolean)[]): string {
    return classes
        .filter((c) => typeof c === 'string')
        .join(' ');
}

