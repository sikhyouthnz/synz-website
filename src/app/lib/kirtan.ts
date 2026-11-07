/**
 * Kirtan Learning Directory — all the content an admin edits lives here.
 *
 * A joint initiative by NZ Sikh Youth & Sikh Youth NZ. The page that renders
 * this is /kirtandirectory.
 *
 * To add a listing, copy an entry in LISTINGS, change the values and save.
 * Leave out any field you don't have; the page only shows what is filled in.
 *
 *   city      One of the names in CITIES (exactly as spelled there)
 *   kind      'gurdwara', 'professional' or 'online'
 *   name      Place, school or resource name
 *   sub       Short line under the name (online resources)
 *   area      Suburb, shown when there is no full address
 *   address   Street address; adds a Directions button
 *   contact   Person to ask for
 *   phone     Main number, written as people dial it ('09 444 4443')
 *   phone2    Second number
 *   when      Days and times
 *   format    Who it's for, group or one-on-one, instruments
 *   level     'Beginner', 'Beginner–Intermediate'...
 *   cost      Price in words; ignored when free is true
 *   free      true if there is no charge
 *   desc      A sentence or two (online resources)
 *   note      Extra detail shown in italics
 *   link      Website or enrolment form
 *   linkLabel Button text for the link ('Enrol', 'Visit site')
 *
 * Lines marked CHECK need an admin to confirm them.
 */

export type KirtanKind = 'gurdwara' | 'professional' | 'online'

export type KirtanListing = {
  city: string
  kind: KirtanKind
  name: string
  sub?: string
  area?: string
  address?: string
  contact?: string
  phone?: string
  phone2?: string
  when?: string
  format?: string
  level?: string
  cost?: string
  free?: boolean
  desc?: string
  note?: string
  link?: string
  linkLabel?: string
}

export const WHATSAPP = 'https://chat.whatsapp.com/CmJjdNiiYOXGI6Cxd8WpLI'

/** North to south, then online. Listings appear in this order. */
export const CITIES = [
  'Auckland',
  'Hamilton',
  'Tauranga',
  'Wellington',
  'Christchurch',
  'Dunedin',
  'Online',
] as const

export const LISTINGS: KirtanListing[] = [
  { city: 'Auckland', kind: 'gurdwara', name: 'North Shore Gurdwara Sahib', phone: '09 444 4443', when: 'Sundays from 1:00 PM', format: 'All ages · Ragi Singhs', free: true },
  { city: 'Auckland', kind: 'gurdwara', name: 'Dasmesh Darbar Gurdwara Sahib', area: 'Papatoetoe', phone: '09 279 9888', when: 'Mondays & Thursdays, 5–6 PM', format: 'All ages · Ragi Singhs', free: true },
  { city: 'Auckland', kind: 'gurdwara', name: 'Takanini Gurdwara Sahib', contact: 'Manjit Singh', phone: '021 595 941', format: 'Group or one-on-one', level: 'Beginner friendly', cost: 'Contact for pricing' },
  // CHECK: phone has an unusual number of digits
  { city: 'Auckland', kind: 'gurdwara', name: 'Gurudwara Nanaksar New Zealand', contact: 'Narinder Singh', phone: '022 5442 5855', free: true },
  { city: 'Auckland', kind: 'professional', name: 'Sargam School of Music & Dance', address: '419 Blockhouse Bay Road, Auckland', contact: 'Basant Madhur', phone: '021 595 941', format: 'One-on-one: tabla, sitar, harmonium, violin, vocal', note: 'Classical Indian music training that applies directly to Shabad Kirtan.', link: 'https://sargamschoolofmusic.co.nz/enrol-2/', linkLabel: 'Enrol' },
  { city: 'Auckland', kind: 'professional', name: 'Rhythm School of Indian Music', contact: 'Prof. Manjit Singh', phone: '021 595 941', cost: '$120 per 4-week block (30 min/week) + $50 registration', link: 'https://pci.jotform.com/form/251961037739868', linkLabel: 'Enrol' },
  // CHECK: phone has an unusual number of digits
  { city: 'Auckland', kind: 'professional', name: 'Raag Naad Sangeet Academy', area: 'Flat Bush', phone: '020 4155 5382', cost: 'Varies by student needs', note: 'Flexible timings. Also works with ISSNZ.' },
  { city: 'Auckland', kind: 'professional', name: 'Private Teaching', contact: 'Deep Singh', phone: '027 210 5928', format: 'Private tuition', cost: 'Varies by student needs' },

  { city: 'Hamilton', kind: 'gurdwara', name: 'Gurdwara Mata Sahib Kaur Ji', phone: '021 223 3940', when: 'Sundays 2:00–3:00 PM', note: 'Except when there is an external Kirtan programme. Please respect the Ragis’ time.', free: true },
  { city: 'Hamilton', kind: 'gurdwara', name: 'NZ Sikh Society Hamilton', contact: 'Harsharn Singh', phone: '07 543 4317', phone2: '022 371 9597', when: 'Saturdays', cost: '$25 per class (Ragi-led)' },
  // CHECK: phone has an unusual number of digits
  { city: 'Hamilton', kind: 'professional', name: 'Raag Naad Sangeet Academy', phone: '020 4155 5382', when: 'Sundays 9:30–11:00 AM', cost: 'Varies by student needs', note: 'Professional Gurmat Sangeet. Also works with ISSNZ.' },

  { city: 'Tauranga', kind: 'gurdwara', name: 'Gurdwara Sikh Sangat Tauranga', address: '43 Burrows Street, Tauranga', contact: 'Puran Singh', phone: '07 578 4613', phone2: '027 478 7262', format: 'Children and youth', free: true },
  { city: 'Tauranga', kind: 'gurdwara', name: 'Gobind Sarvar Gurmat School', address: '61 Te Okuroa Drive, Papamoa', contact: 'Pavitar Singh', phone: '021 292 2664', free: true },

  { city: 'Wellington', kind: 'gurdwara', name: 'Naenae Gurdwara', contact: 'Harjot Singh', phone: '04 577 2446', when: 'Saturdays 3:00–4:00 PM', note: 'Punjabi class follows from 4:00 PM.', free: true },

  { city: 'Christchurch', kind: 'gurdwara', name: 'Gurdwara Singh Sabha Christchurch', address: '537 Ferry Road, Woolston, Christchurch', contact: 'Jagpreet Singh', phone: '029 123 5487', when: 'Sundays', format: 'All ages', free: true },
  { city: 'Christchurch', kind: 'gurdwara', name: 'Degh Tegh Fateh Sikh Society', address: '6 Branston Street, Hornby, Christchurch', phone: '027 661 1000', when: 'Afternoons after 5–6 PM, 30–60 min', format: 'Ages 5 and up · informal, with local Ragis', free: true },
  { city: 'Christchurch', kind: 'professional', name: 'Gurmat School of Music', address: '3/13 Elizabeth Street, Riccarton, Christchurch', contact: 'Jasveer Singh', phone: '022 685 1101', format: 'Individual or group · all ages · several Canterbury locations', cost: '$29 individual · $19 group per session' },

  { city: 'Dunedin', kind: 'gurdwara', name: 'Gurdwara Singh Sabha Dunedin', contact: 'Amrik Singh', phone: '021 188 0657', when: 'Saturdays · informal classes', free: true },

  { city: 'Online', kind: 'online', name: 'Introduction to Sabad Kirtan', sub: 'Sikh Research Institute · course', level: 'Beginner', desc: 'Self-paced chapters on Gurbani and raag, vocal fundamentals, tal, notation and Simran, with audio, video and quizzes.', free: true, link: 'https://courses.sikhri.org/courses/introduction-to-sabad-kirtan', linkLabel: 'Start course' },
  { city: 'Online', kind: 'online', name: 'Gurbani Sangeet Vidyala', sub: 'Online platform', level: 'Beginner–Intermediate', desc: 'Compositions, lessons and videos on instruments and the vocal style of Gurmat Sangeet. Some content is free.', link: 'https://www.gurbanisangeetvidyala.com/', linkLabel: 'Visit site' },
  // CHECK: link opens the Latvian App Store (/lv/); /nz/ is probably wanted
  { city: 'Online', kind: 'online', name: 'Gur Shabad Keertan', sub: 'Mobile app', level: 'Beginner–Intermediate', desc: 'Notation, raag basics, tal and pitch practice to improve Sur and rhythm on your own. Free, with in-app purchases.', free: true, link: 'https://apps.apple.com/lv/app/gur-shabad-keertan/id1516235284', linkLabel: 'Get the app' },
  { city: 'Online', kind: 'online', name: 'Bhai Manbir Singh', sub: 'YouTube channel', level: 'Beginner–Intermediate', desc: 'Demonstrations of raag-based Kirtan on rabab and harmonium. Good for ear training and singing along.', free: true, link: 'https://www.youtube.com/c/UstadManbirSingh/videos', linkLabel: 'Watch' },
]

export const TIPS: [title: string, body: string][] = [
  ['Start with a teacher if you can', 'Regular lessons with a professional teacher build correct Sur, Tal and Raag from the start. Gurdwara classes with Ragi Singhs are a wonderful alternative; please respect their time and seva.'],
  ['Little and often', '10–15 minutes every day beats an occasional long session.'],
  ['Listen regularly', 'Immerse yourself in Raag Kirtan to build your ear and intuition.'],
  ['Start with simple Shabads', 'Choose familiar Shabads with simple melodies before moving to Raag compositions.'],
  ['Understand what you sing', 'Read the meaning of each Shabad so your Kirtan comes from the heart.'],
  ['Learn basic theory', 'Harmonium scales (Sargam) and vocal practice reinforce each other.'],
  ['Practise with Sangat', 'Singing with others builds confidence and deepens the experience.'],
  ['Record yourself', 'Listening back is one of the quickest ways to improve.'],
  ['Be patient', 'Kirtan is a lifelong journey. Trust the process.'],
]

/** 021 595 941 -> tel:+6421595941 */
export function telHref(phone: string): string {
  return 'tel:+64' + phone.replace(/\D/g, '').replace(/^0/, '')
}

export function mapsHref(address: string): string {
  return (
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent(address + ', New Zealand')
  )
}
