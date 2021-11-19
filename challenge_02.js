/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

--> "Max trinkt Cola."

/* Getränke-Challenge */

let name = prompt("Whats ur Name? ");
let age  = prompt("Whats ur Age?");

if(age <= 5)
{
console.log(name + " trinkt Milch");
}else if(age >=5 && age <= 12)
{
console.log(name + " trinkt Saft");    
}else if(age >= 12 && age <= 17)
{
console.log(name + " trinkt Cola");
}