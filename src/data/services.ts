export type FaqItem = {
  question: string
  answer: string
}

export type Service = {
  number: string
  slug: string
  name: string
  shortDescription: string
  metaDescription: string
  intro: string
  purposeTitle: string
  purpose: string[]
  whenTitle: string
  when: string[]
  expectation: string[]
  faqs: FaqItem[]
  related: string[]
}

export const services: Service[] = [
  {
    number: '01',
    slug: 'lecenje-zuba',
    name: 'Lečenje zuba',
    shortDescription:
      'Pregled i procena promena na zubu, uz razgovor o planu terapije prema utvrđenom stanju.',
    metaDescription:
      'Informacije o lečenju zuba u ordinaciji Doktor Bulić u Novom Pazaru: kada se javiti stomatologu i šta očekivati od pregleda.',
    intro:
      'Promene na zubu ne moraju uvek odmah izazvati jak bol. Pregled pomaže da se utvrdi stanje zuba i odredi odgovarajući naredni korak.',
    purposeTitle: 'Procena i očuvanje zdravlja zuba',
    purpose: [
      'Lečenje zuba počinje pregledom kojim stomatolog procenjuje problem i stanje okolnih struktura.',
      'Cilj konsultacije je da pacijent razume nalaz, moguće opcije i razlog za predloženi tretman. Konkretan postupak može se odrediti tek nakon pregleda.',
    ],
    whenTitle: 'Kada zakazati pregled',
    when: [
      'kada osećate bol ili osetljivost zuba',
      'kada primetite promenu boje, naprsnuće ili oštećenje',
      'kada se nelagodnost ponavlja pri jelu ili piću',
      'kada želite procenu ranije uočene promene',
    ],
    expectation: [
      'Tokom posete opišite kada se tegoba javila i šta je pojačava ili smanjuje.',
      'Stomatolog nakon pregleda objašnjava nalaz i predlaže naredne korake. Obim i tok lečenja zavise od konkretnog stanja zuba.',
    ],
    faqs: [
      {
        question: 'Da li treba čekati da zub zaboli?',
        answer:
          'Ne. Promena može postojati i bez izraženog bola, pa je pregled koristan čim primetite oštećenje, osetljivost ili drugu neuobičajenu promenu.',
      },
      {
        question: 'Da li se plan lečenja zna pre pregleda?',
        answer:
          'Ne može se pouzdano odrediti unapred. Plan zavisi od nalaza i razgovora sa pacijentom tokom pregleda.',
      },
    ],
    related: ['protetika', 'poliranje-zuba'],
  },
  {
    number: '02',
    slug: 'vadjenje-zuba',
    name: 'Vađenje zuba',
    shortDescription:
      'Pregled zuba i razgovor o intervenciji kada očuvanje zuba nije moguće ili nije preporučeno.',
    metaDescription:
      'Vađenje zuba u Novom Pazaru: saznajte kada je potreban pregled i kako se odluka o intervenciji donosi u ordinaciji Doktor Bulić.',
    intro:
      'Odluka o vađenju zuba ne donosi se samo na osnovu simptoma. Stomatološki pregled je prvi korak za procenu da li je intervencija potrebna.',
    purposeTitle: 'Intervencija zasnovana na pregledu',
    purpose: [
      'Vađenje može biti razmatrano kada je zub ozbiljno oštećen ili kada njegovo zadržavanje nije odgovarajući izbor prema nalazu.',
      'Pre intervencije stomatolog procenjuje stanje i razgovara sa pacijentom o razlogu, toku i smernicama koje su važne za konkretan slučaj.',
    ],
    whenTitle: 'Razlozi za obraćanje stomatologu',
    when: [
      'izražen ili dugotrajan bol u predelu zuba',
      'otok ili nelagodnost oko oštećenog zuba',
      'polomljen ili znatno oštećen zub',
      'preporuka za procenu zuba koji pravi ponavljane tegobe',
    ],
    expectation: [
      'Na pregledu se procenjuje zub i okolno tkivo, kao i informacije važne za bezbedno planiranje intervencije.',
      'Pacijent dobija objašnjenje predloženog koraka i individualne smernice. Ne treba unapred pretpostavljati tok ili oporavak bez pregleda.',
    ],
    faqs: [
      {
        question: 'Da li svaki zub koji boli mora da se izvadi?',
        answer:
          'Ne. Bol može imati različite uzroke. Tek nakon pregleda stomatolog može proceniti da li se zub može lečiti ili je vađenje opravdano.',
      },
      {
        question: 'Šta treba reći stomatologu pre intervencije?',
        answer:
          'Važno je podeliti relevantne podatke o zdravstvenom stanju, terapiji koju koristite i prethodnim reakcijama ili iskustvima.',
      },
      {
        question: 'Kada se dobijaju smernice nakon vađenja?',
        answer:
          'Stomatolog daje smernice u vezi sa konkretnom intervencijom i stanjem pacijenta. Ako nešto nije jasno, tražite dodatno objašnjenje pre odlaska.',
      },
    ],
    related: ['lecenje-zuba', 'protetika'],
  },
  {
    number: '03',
    slug: 'protetika',
    name: 'Protetika',
    shortDescription:
      'Procena mogućnosti za nadoknadu funkcije i izgleda zuba, u skladu sa stanjem u ustima.',
    metaDescription:
      'Protetika u ordinaciji Doktor Bulić u Novom Pazaru: konsultacija, procena stanja i individualno planiranje protetskog rešenja.',
    intro:
      'Protetsko planiranje polazi od funkcije, stanja preostalih zuba i potreba pacijenta. Odgovarajuće rešenje bira se tek posle pregleda.',
    purposeTitle: 'Nadoknada funkcije i izgleda zuba',
    purpose: [
      'Protetika se bavi nadoknadom izgubljene zubne strukture ili zuba, sa ciljem da se razmotre funkcionalne i estetske potrebe.',
      'Pošto izbor zavisi od nalaza, na sajtu se ne pretpostavlja vrsta rada ili materijala. Konsultacija služi da se realne mogućnosti jasno objasne.',
    ],
    whenTitle: 'Kada zatražiti konsultaciju',
    when: [
      'kada nedostaje jedan ili više zuba',
      'kada je zub znatno oštećen',
      'kada postojeći protetski rad zahteva procenu',
      'kada želite da razgovarate o funkciji i izgledu zuba',
    ],
    expectation: [
      'Pregled obuhvata procenu postojećeg stanja i razgovor o očekivanjima i prioritetima pacijenta.',
      'Stomatolog objašnjava koje su opcije relevantne za nalaz. Vrsta rada, koraci i vremenski okvir ne mogu se odrediti bez individualnog plana.',
    ],
    faqs: [
      {
        question: 'Može li se protetsko rešenje izabrati telefonom?',
        answer:
          'Ne. Telefonom možete zakazati konsultaciju, ali izbor rešenja zahteva pregled i procenu stanja u ustima.',
      },
      {
        question: 'Da li estetika ima ulogu u planiranju?',
        answer:
          'Izgled je jedan od mogućih aspekata planiranja, uz funkciju i stanje zuba. Prioriteti se razmatraju tokom konsultacije.',
      },
    ],
    related: ['lecenje-zuba', 'beljenje-zuba'],
  },
  {
    number: '04',
    slug: 'ispravljanje-zuba',
    name: 'Ispravljanje zuba',
    shortDescription:
      'Pregled položaja zuba i savetovanje o mogućnostima korekcije prema individualnim potrebama.',
    metaDescription:
      'Ispravljanje zuba u Novom Pazaru: pregled položaja zuba i konsultacija o mogućnostima korekcije u ordinaciji Doktor Bulić.',
    intro:
      'Položaj zuba utiče na izgled osmeha, ali planiranje korekcije zahteva širu procenu zuba i odnosa u ustima.',
    purposeTitle: 'Procena položaja zuba',
    purpose: [
      'Konsultacija omogućava da se sagleda raspored zuba i razlog zbog kog pacijent razmatra ispravljanje.',
      'Metod se ne bira unapred. Mogućnosti zavise od nalaza i stručne procene, zbog čega je pregled neophodan pre konkretnog plana.',
    ],
    whenTitle: 'Kada razgovarati sa stomatologom',
    when: [
      'kada primećujete nepravilnost u položaju zuba',
      'kada vam raspored zuba otežava održavanje higijene',
      'kada želite stručnu procenu izgleda osmeha',
      'kada imate raniju preporuku za korekciju položaja zuba',
    ],
    expectation: [
      'Na konsultaciji se razgovara o razlogu dolaska i očekivanjima, a zatim se procenjuje postojeće stanje.',
      'Dalji koraci i odgovarajuća vrsta terapije određuju se individualno; pre pregleda nije odgovorno navoditi metod ili trajanje.',
    ],
    faqs: [
      {
        question: 'Da li je isti način ispravljanja pogodan za svakoga?',
        answer:
          'Ne mora biti. Izbor zavisi od položaja zuba, nalaza i drugih individualnih faktora koje stomatolog procenjuje.',
      },
      {
        question: 'Može li se unapred znati koliko tretman traje?',
        answer:
          'Trajanje se ne može odgovorno navesti bez pregleda i plana. Stomatolog nakon procene može dati informacije relevantne za konkretan slučaj.',
      },
    ],
    related: ['poliranje-zuba', 'beljenje-zuba'],
  },
  {
    number: '05',
    slug: 'beljenje-zuba',
    name: 'Beljenje zuba',
    shortDescription:
      'Konsultacija o posvetljivanju zuba uz prethodnu procenu oralnog zdravlja i očekivanja pacijenta.',
    metaDescription:
      'Beljenje zuba u Novom Pazaru: zašto je važna prethodna procena i šta očekivati od konsultacije u ordinaciji Doktor Bulić.',
    intro:
      'Boja zuba je individualna i na nju utiču različiti faktori. Pre estetskog tretmana važno je proceniti stanje zuba i razgovarati o očekivanjima.',
    purposeTitle: 'Kontrolisano posvetljivanje zuba',
    purpose: [
      'Beljenje je estetski tretman usmeren na posvetljivanje prirodne boje zuba.',
      'Pre odluke je važna stomatološka procena, jer postojeće stanje zuba i raniji radovi mogu uticati na plan i očekivani pristup.',
    ],
    whenTitle: 'Kada zakazati konsultaciju',
    when: [
      'kada želite da razgovarate o promeni nijanse zuba',
      'kada primećujete površinske ili dugotrajnije promene boje',
      'kada niste sigurni da li je beljenje primereno vašem stanju',
      'kada želite informacije pre donošenja odluke o tretmanu',
    ],
    expectation: [
      'Stomatolog procenjuje stanje zuba i razgovara sa pacijentom o razlogu za tretman i realnim mogućnostima.',
      'Plan se određuje nakon pregleda. Sajt ne navodi cenu, trajanje ili stepen promene boje jer ti podaci nisu isti za svaki slučaj.',
    ],
    faqs: [
      {
        question: 'Da li je pregled potreban pre beljenja?',
        answer:
          'Pregled omogućava stomatologu da proceni stanje zuba i da razgovara sa vama o tome da li i kako tretman treba planirati.',
      },
      {
        question: 'Da li rezultat može da se odredi unapred?',
        answer:
          'Ne može se garantovati određena nijansa bez procene početnog stanja i individualnih faktora.',
      },
      {
        question: 'Da li je na sajtu objavljena cena?',
        answer:
          'Cena nije objavljena jer aktuelna ponuda nije potvrđena. Za važeće informacije pozovite ordinaciju.',
      },
    ],
    related: ['poliranje-zuba', 'protetika'],
  },
  {
    number: '06',
    slug: 'poliranje-zuba',
    name: 'Poliranje zuba',
    shortDescription:
      'Uklanjanje površinskih naslaga i završna obrada površine zuba prema proceni stomatologa.',
    metaDescription:
      'Poliranje zuba u ordinaciji Doktor Bulić u Novom Pazaru: kada se raspitati o tretmanu i šta očekivati od pregleda.',
    intro:
      'Površinske naslage mogu menjati osećaj i izgled površine zuba. Stomatolog procenjuje stanje i da li je poliranje odgovarajući korak.',
    purposeTitle: 'Urednija površina zuba',
    purpose: [
      'Poliranje se koristi za obradu površine zuba i uklanjanje određenih površinskih naslaga.',
      'Tretman nije zamena za pregled. Procena pomaže da se uoči da li postoji još nešto što zahteva pažnju i kako poliranje uklopiti u brigu o oralnom zdravlju.',
    ],
    whenTitle: 'Kada se raspitati o poliranju',
    when: [
      'kada primećujete površinske naslage ili promene boje',
      'kada želite savet o održavanju površine zuba',
      'kada stomatolog preporuči poliranje kao deo posete',
      'kada želite da razlikujete površinsku naslagu od druge promene',
    ],
    expectation: [
      'Pre tretmana stomatolog pregleda zube i procenjuje vrstu promene koju pacijent primećuje.',
      'Dobijate objašnjenje šta poliranje može da obuhvati u vašem slučaju i savet o narednim koracima ako je potreban dodatni tretman.',
    ],
    faqs: [
      {
        question: 'Da li su poliranje i beljenje isto?',
        answer:
          'Ne. Poliranje je usmereno na površinu zuba i određene naslage, dok je beljenje poseban estetski tretman posvetljivanja. Pregled pomaže da razumete razliku.',
      },
      {
        question: 'Može li se svaka promena boje ukloniti poliranjem?',
        answer:
          'Ne mora da znači. Promene boje imaju različite uzroke, pa je potrebna procena stomatologa.',
      },
    ],
    related: ['beljenje-zuba', 'lecenje-zuba'],
  },
]

export const serviceBySlug = new Map(services.map((service) => [service.slug, service]))

export function serviceHref(service: Service): string {
  return `/usluge/${service.slug}/`
}
