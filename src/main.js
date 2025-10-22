import "./style.scss";

// I denna övning skall du skapa ett spel. Detta spel skall vara ett textbaserat rollspel (tänk 80-tal).
// För att skapa detta spel behövs en värld. Denna värld bör bestå av ett rutnät eller matris. Varje ruta i
// matrisen bör beskriva en miljö som kan innehålla en eller flera saker, t.ex. träd, gräs, stenar et.c. I
// världen finns det även saker, såsom nycklar, vapen, blommor m.m. som bör kunna plockas upp och
// användas. T.ex. kan en nyckel användas för att låsa upp en dörr, en blomma kan ges till en person
// o.s.v.

class Person {
  constructor(name, hp, strength) {
    this.name = name;
    this.hp = hp;
    this.strength = strength;
  }
}

const hero = new Person("Luca", 100, 70);
const villain = new Person("Bo", 100, 80);

const characters = [hero, villain];

// För att spelet skall få en handling behövs det en hjälte och en skurk. Dessa skall kunna röra sig
// mellan miljöerna i världen. En person bör ha egenskaper som namn, liv och styrka. Personer kan
// plocka upp saker som finns i världen. En person bör inte kunna bära alltför mycket, ett exempel kan
// vara att en person kan bära lika mycket som personen är stark.
// Grundläggande koncept
// Världen – en matris av miljöobjekt. Världen bör vara en klass som har en matris som miljöobjekt.
// Miljö är också det en klass. Denna klass har några listor, en för att hantera de saker som finns i
// miljön och en lista som hanterar de organiska växter (träd, gräs, stenar) som finns i miljön.
// Inmatning av kommandon skall ske precis som tidigare via godtycklig metod. För varje kommando
// behöver ni ta reda på vilket kommandot är och vad som behöver hända vid varje kommando.
