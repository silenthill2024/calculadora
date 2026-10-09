
def sumar(a, b):
    return a + b


def restar(a, b):
    return a - b


def multiplicar(a, b):
    return a * b


def dividir(a, b):
    if b == 0:
        raise ValueError("No se puede dividir entre cero")
    return a / b


def calculadora():
    while True:
        print("\n=== CALCULADORA ===")
        print("1. Sumar")
        print("2. Restar")
        print("3. Multiplicar")
        print("4. Dividir")
        print("5. Salir")

        opcion = input("Selecciona una opción: ")

        if opcion == "5":
            print("Saliendo de la calculadora...")
            break

        if opcion not in ["1", "2", "3", "4"]:
            print("Opción no válida")
            continue

        try:
            a = float(input("Primer número: "))
            b = float(input("Segundo número: "))

            if opcion == "1":
                resultado = sumar(a, b)
            elif opcion == "2":
                resultado = restar(a, b)
            elif opcion == "3":
                resultado = multiplicar(a, b)
            else:
                resultado = dividir(a, b)

            print(f"Resultado: {resultado:g}")

        except ValueError as error:
            print(f"Error: {error}")


if __name__ == "__main__":
    calculadora()