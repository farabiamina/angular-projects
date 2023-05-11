type cardTypes = "prepaid" | "credit"
type paymentSystems = "visa" | "mastercard"

type myCards = `${cardTypes}_${paymentSystems}`


function message(text: string, amount: number, card: myCards): string {
    let mes = text+amount+" "+card;
    return mes;
}

enum Category {
  clothes = 1,
  pharmacy,
  children,
}
