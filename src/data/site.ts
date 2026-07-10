export const site = {
  name: 'Doktor Bulić',
  businessType: 'Stomatološka ordinacija',
  city: 'Novi Pazar',
  phoneDisplay: '064 0 222 292',
  phoneHref: 'tel:+381640222292',
  phoneInternational: '+381640222292',
  instagramUrl: 'https://www.instagram.com/doktorbulic',
  instagramLabel: '@doktorbulic',
  defaultTitle: 'Doktor Bulić | Stomatološka ordinacija Novi Pazar',
  defaultDescription:
    'Stomatološka ordinacija Doktor Bulić u Novom Pazaru. Pregledajte usluge i pozovite ordinaciju za termin i dodatne informacije.',
} as const

export const navigation = [
  { label: 'Početna', href: '/' },
  { label: 'Usluge', href: '/usluge/' },
  { label: 'Pristup', href: '/#pristup' },
  { label: 'Kontakt', href: '/kontakt/' },
] as const

export const visitSteps = [
  {
    title: 'Zakazivanje termina',
    text: 'Pozovite ordinaciju i dogovorite vreme pregleda.',
  },
  {
    title: 'Pregled i razgovor',
    text: 'Opišite razlog dolaska i pitanja koja želite da razjasnite.',
  },
  {
    title: 'Predlog narednih koraka',
    text: 'Nakon pregleda razgovara se o nalazu i mogućim narednim koracima.',
  },
  {
    title: 'Dogovor o tretmanu',
    text: 'Konkretan plan se usklađuje sa utvrđenim stanjem i potrebama pacijenta.',
  },
] as const
