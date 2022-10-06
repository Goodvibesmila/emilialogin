# emilialogin
This is my loginpage.


Användarnamn och lösen att testa:

        userName: Fredrik
        passWord: 12345
    
        userName: Björn
        passWord: 222333
   
        userName: Maria
        passWord: 112233


Det här är ett projekt för att visa Proof of concept. Du skall alltså kunna genom javascriptfunktioner logga in med olika användare,
men också skapa nya användare. Sidan kommer att ändra sig beroende på om du är inloggad, utloggad, är besökare på startsidan, eller har skrivit fel lösenord.

Jag har använt en html-fil med mitt huvudinnehåll. Det du ser när du besöker startsidan. 
Jag har stylat hela sidan med CSS, oberoende på om du är inloggad eller utloggad. 
Jag har skapat ändringarna och funktioner med Javascript för att kunna ändra sidan dynamiskt beroende på om du är in- respektive utloggad.
Javascript innehåller också localstorage för att du skall kunna skapa nya användare, samt vara inloggad även om du uppdaterar sidan.

Jag har hållt min kod enkel med bland annat klasser, enkla element i html-dokumentet, enkel css-styling utan responsiv kod, samt variabler/funktioner i javascriptkoden.

Min html:

Koden är indelad i head, header, main och footer som finns inuti Html/body.

Head innehåller nödvändig kod för att webbläsare skall kunna läsa koden korrekt, samt sammankoppling av script/css till html-dokumentet.

Header innehåller en H1:a, två olika formulär (Ett för inlogg, samt ett för skapa användare/inlogg), jag har också delat upp innehållet i div:ar/Klasser för att enskilt kunna påverka elementen genom javascript.

Main innehåller väldigt simpel kod med en H2:a, samt en P-tagg.

Footer är också väldigt simpel. Där finns bara en H2a och två p-taggar.


Min CSS:

Jag har skrivit min kod i samma ordning som html-koden.
Först kommer generell information, som min importerade font från google font.
Därefter kommer den kod som skall påverka hela dokumentet. Exempelvis box-sizing.

Jag har sedan enkelt stylat resterande del med font-färg, bakgrundsfärg, placering och storlek.

Min JAVASCRIPT:
