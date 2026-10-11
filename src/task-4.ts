function printUserInfo(
    name: string,
    age: number,
    email?: string,
): void {
    console.log(`Name: ${name}, Age: ${age}`);

    if (email) {
        console.log(`Email: ${email}`);
    }
}

printUserInfo("Alex", 20);
printUserInfo("Maria", 25, "maria@example.com");