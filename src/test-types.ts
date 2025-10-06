export function testFunction() {
    const obj: any = {};  // ← используем any
    return obj.some.unknown.property; // ← доступ к неизвестным свойствам
}