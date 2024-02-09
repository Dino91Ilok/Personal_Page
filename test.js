function switchLanguage(language) {
    const translations = {
        'en': {
            'pageTitle': 'welcome to my personal page',
            'aboutLink': 'about me',
            'experienceLink': 'my professional experience',
            'educationLink': 'education',
            'portfolioLink': 'portfolio',
            'introText': 'This is my personal page, where you can find some information about me. I made this page in order to show potential employers my commitment and willingness to learn new stuff.',
            'aboutText': 'I\'m also an enthusiastic self-taught web developer, specializing in crafting modern, fully responsive websites using HTML, CSS, and a hint of JavaScript. If you\'re seeking a dynamic online presence for your business, allow me to assist you in expanding your reach by creating a customized web page or online shop. If you\'re interested in reaching out, please don\'t hesitate to send me an email.',
            'aboutMeText': 'My name is Dino, and I come from a small but beautiful town in Croatia called Ilok. At the moment, I live in Germany in the city of Mönchengladbach. In my free time (as you can probably see in the picture), I play the guitar. I started playing when I was 13. Mostly, I play and listen to rock and hair metal music from the \'80s and admire amazing bands like Whitesnake, Poison, Ratt, Europe, Iron Maiden, and many more. I\'m also in love with aviation. Simply put, aircraft fascinate me, and maybe one day I will eventually become the captain of my favorite aircraft, the Airbus A320. I also enjoy playing games like Microsoft Flight Simulator (of course) and Red Dead Redemption 2',
            'professionalText': 'After graduating from college and obtaining my bachelor\'s degree, I started my internship at the City Council in my hometown. I worked as an Accounting Intern for a year. In this role, I was responsible for various administrative tasks, such as collecting information about people in need of social assistance and organizing it in Excel. Additionally, I handled accounting duties, including posting, maintaining vendor and customer data, and executing payments. Following my internship, I moved to Slovakia to pursue my master\'s degree and took on a position as a junior accounts payable accountant at Deutsche Telekom Services Europe. There, I managed postings, executed payments, and sent payment reminders. After a year with DTSE, I decided to relocate to Germany to gain more valuable experience. I joined Arlanxeo G.m.b.H, where I learned a great deal under the guidance of my exceptional supervisor, who practically mentored me professionally. Unfortunately, we parted ways after two years, and I secured another job where I worked for almost six months. Realizing that accountancy no longer inspired me, I decided to make a career change.',
            'educationText': 'I graduated from high school in a city called Vukovar, just 30 km away from my hometown. I also graduated from Polytechnics Lavoslav Ružička in Vukovar, with a study program in Commerce. With the exceptional help of my dear mentor Sandra Mrvica Madjarac, PhD, I managed to defend my bachelor thesis with a grade of 5, which is the maximum grade in Croatia. After that, I discovered that the Slovakian government offers scholarships to study in their country. I applied and was accepted. I decided to pursue my master\'s degree in Bratislava at the Economic University, with a study program in International Commerce. Fortunately, I also had an amazing mentor there, L\'ubos Pavelka, Assoc. Prof. Dipl. Ing., PhD, who helped me a lot to defend my master thesis with the maximum grade, labeled with the letter A in Slovakia.'
        },
        'hr': {
            'pageTitle': 'dobrodošli na moju osobnu stranicu',
            'aboutLink': 'o meni',
            'experienceLink': 'moje profesionalno iskustvo',
            'educationLink': 'obrazovanje',
            'portfolioLink': 'portfelj',
            'introText': 'Ovo je moja osobna stranica, na kojoj možete pronaći neke informacije o meni. Napravio sam ovu stranicu kako bih potencijalnim poslodavcima pokazao svoju predanost i spremnost za učenjem novih stvari.',
            'aboutText': 'Također sam entuzijastični samouki web developer, specijaliziran za izradu modernih, potpuno responsivnih web stranica koristeći HTML, CSS i malo JavaScripta. Ako tražite dinamičnu online prisutnost za svoj posao, dopustite mi da vam pomognem proširiti svoj doseg stvaranjem prilagođene web stranice ili internetske trgovine. Ako ste zainteresirani za kontaktiranje, slobodno mi pošaljite e-mail.',
            'aboutMeText': 'Zovem se Dino i dolazim iz malog ali prekrasnog grada u Hrvatskoj zvanog Ilok. Trenutno živim u Njemačkoj, u gradu Mönchengladbachu. U slobodno vrijeme (kako možete vidjeti na slici), sviram gitaru. Počeo sam svirati kad mi je bilo 13 godina. Većinom sviram i slušam rock i hair metal glazbu iz \'80-ih godina i divim se sjajnim bendovima poput Whitesnakea, Poisona, Ratta, Europe, Iron Maidena i mnogih drugih. Također sam zaljubljen u avijaciju. Jednostavno rečeno, zrakoplovi me fasciniraju i možda ću jednog dana postati kapetan mog omiljenog zrakoplova, Airbusa A320. Također uživam u igranju igara poput Microsoft Flight Simulatora (naravno) i Red Dead Redemptiona 2.',
            'professionalText': 'Nakon što sam završio fakultet i stekao diplomu, počeo sam svoj staž u Gradskom vijeću u svom rodnom gradu. Radio sam kao stažist za računovodstvo godinu dana. U ovom sam se poslu bavio raznim administrativnim zadacima, poput prikupljanja informacija o ljudima kojima je potrebna socijalna pomoć i organizacije u Excelu. Osim toga, obavljao sam računovodstvene poslove, uključujući knjiženje, održavanje podataka o dobavljačima i kupcima te izvršavanje plaćanja. Nakon stažiranja, preselio sam se u Slovačku kako bih nastavio svoje magistarske studije i preuzeo poziciju juniorskog računovodstvenog referenta za plaćanja u Deutsche Telekom Services Europe. Ondje sam upravljao knjiženjima, izvršavao plaćanja i slao podsjetnike za plaćanje. Nakon godinu dana provedenih u DTSE-u, odlučio sam se preseliti u Njemačku kako bih stekao vrijednije iskustvo. Pridružio sam se tvrtki Arlanxeo G.m.b.H., gdje sam puno naučio pod vodstvom izvanrednog nadređenog koji me praktično mentorirao profesionalno. Nažalost, razišli smo se nakon dvije godine, a ja sam osigurao drugi posao na kojem sam radio gotovo šest mjeseci. Shvativši da računovodstvo više nije moj poziv, odlučio sam promijeniti karijeru.',
            'educationText': 'Maturirao sam u gradu zvanom Vukovar, samo 30 km udaljenom od mog rodnog grada. Također sam diplomirao na Politehnici Lavoslav Ružička u Vukovaru, na studijskom programu Komercijalista. Uz iznimnu pomoć moje drage mentorice Sandre Mrvice Madjarac, PhD, uspio sam obraniti svoj završni rad s ocjenom 5, što je maksimalna ocjena u Hrvatskoj. Nakon toga, otkrio sam da slovačka vlada nudi stipendije za studij u njihovoj zemlji. Prijavio sam se i bio prihvaćen. Odlučio sam nastaviti svoje magistarske studije u Bratislavi na Ekonomskom fakultetu, na studijskom programu Međunarodna trgovina. Srećom, imao sam i izvanrednog mentora tamo, L\'ubosa Pavelka, doc. Dipl. Ing., PhD, koji mi je puno pomogao u obrani mog magistarskog rada s maksimalnom ocjenom, označenom slovom A u Slovačkoj.'
        }
    };

    // Iterate over translations and replace text content of elements
    for (let key in translations[language]) {
        const element = document.getElementById(key);
        if (element) {
            element.textContent = translations[language][key];
        }
    }
}