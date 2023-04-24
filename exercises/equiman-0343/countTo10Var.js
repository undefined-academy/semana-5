const counter = () => {
    const SEC_IN_MS = 1000

    const timer = (number) => {
        const print = () => console.log(number)

        setTimeout(() => {
            return print
        }, number * SEC_IN_MS);

        return () => console.log(number)
    }

    for (var i = 1; i <= 10; i++) {
        timer(i)()
    }
}

counter()