const nonVerbTokens = new Set([
  'Personal',
  'Gerund',
  'Past Participle',
  'Masculine',
  'Impersonal',
  'Feminine',
  'Past',
  'participle',
  'Indicative',
  'Present',
  'Imperfect',
  'Preterite',
  'Pluperfect',
  'Future',
  'Conditional',
  'Subjunctive',
  'Imperative',
  'Affirmative',
  'Negative',
  '-',
  '(não)',
  'não',
  '—', // start for Spanish specific
  'yo',
  'tú',
  'vos',
  'usted',
  'él/ella/ello',
  'ellos/ellas',
  'nosotros',
  'nosotras',
  'future1',
  'vosotros',
  'vosotras',
  'future',
  'imperfect',
  'subjunctive',
  'present',
  'conditional',
  'preterite',
  'imperative',
  'affirmative',
  'negative',
  'no',
  'io', // start for Italian specific
  'tu',
  'lui/lei,',
  'esso/essa',
  'noi',
  'voi',
  'lui/che',
  'che',
  'lei',
  'esso/che',
  'esse',
  'essa',
  'essi/che',
  'loro,',
  'essi/esse',
  'Lei',
  'Loro',
  'non',
  'lei,',
  'past',
  'historic',
  'imperfect2', // start for French specific
  'historic2',
])

function __removeNonVerbForms(split) {
  const result = []
  for (let i = 0; i < split.length; i++) {
    const e = split[i]
    if (!nonVerbTokens.has(e)) result.push(e)
  }
  return result
}

function uniqueForms(s) {
  const stringWithParenthesesAndBackslashesExpressionsRemoved = s.replace(
    / *\([^)]*\) */g,
    ''
  )
  const forms = __removeNonVerbForms(
    stringWithParenthesesAndBackslashesExpressionsRemoved
      .trim()
      .split(/\s+|\\n|\t/)
  )
  const uniqueForms = new Set()
  const result = []
  for (let i = 0; i < forms.length; i++) {
    const form = forms[i]
    if (!uniqueForms.has(form)) {
      result.push(form)
    }
    uniqueForms.add(form)
  }
  return {
    string: result.join(', '),
    numberOfUniqueForms: result.length,
  }
}

const faireString = `\tfais
\tfais
\tfait
\tfaisons
\tfaites
\tfont
imperfect\tfaisais
\tfaisais
\tfaisait
\tfaisions
\tfaisiez
\tfaisaient
past historic2\tfis
\tfis
\tfit
\tfîmes
\tfîtes
\tfirent
future\tferai
\tferas
\tfera
\tferons
\tferez
\tferont
conditional\tferais
\tferais
\tferait
\tferions
\tferiez
\tferaient
\tfasse
\tfasses
\tfasse
\tfassions
\tfassiez
\tfassent
imperfect2\tfisse
\tfisses
\tfît
\tfissions
\tfissiez
\tfissent`

const fareString = `faccio fo\tfai\tfa\tfacciamo\tfate\tfanno
imperfect\tfacevo\tfacevi\tfaceva\tfacevamo\tfacevate\tfacevano
past historic\tfeci\tfacesti\tfece\tfacemmo\tfaceste\tfecero
future\tfarò\tfarai\tfarà\tfaremo\tfarete\tfaranno
conditional\tio\ttu\tlui/lei, esso/essa\tnoi\tvoi\tloro, essi/esse
present\tfarei\tfaresti\tfarebbe\tfaremmo\tfareste\tfarebbero
subjunctive\tche io\tche tu\tche lui/che lei, che esso/che essa\tche noi\tche voi\tche loro, che essi/che esse
present\tfaccia\tfaccia\tfaccia\tfacciamo\tfacciate\tfacciano
imperfect\tfacessi\tfacessi\tfacesse\tfacessimo\tfaceste\tfacessero
imperative\t—\ttu\tLei\tnoi\tvoi\tLoro
fa fai non fare\tfaccia\tfacciamo\tfate\tfacciano`

const hacerString = `present\thago\thaces
hacés\thace\thacemos\thacéis\thacen
imperfect\thacía\thacías\thacía\thacíamos\thacíais\thacían
preterite\thice\thiciste\thizo\thicimos\thicisteis\thicieron
future\tharé\tharás\thará\tharemos\tharéis\tharán
conditional\tharía\tharías\tharía\tharíamos\tharíais\tharían
subjunctive\t\tyo\ttú
vos\tél/ella/ello
usted\tnosotros
nosotras\tvosotros
vosotras\tellos/ellas
ustedes
present\thaga\thagas\thaga\thagamos\thagáis\thagan
imperfect
(ra)\thiciera\thicieras\thiciera\thiciéramos\thicierais\thicieran
imperfect
(se)\thiciese\thicieses\thiciese\thiciésemos\thicieseis\thiciesen
future1\thiciere\thicieres\thiciere\thiciéremos\thiciereis\thicieren
imperative\t\t—\ttú
vos\tusted\tnosotros
nosotras\tvosotros
vosotras\tustedes
affirmative\t\thace haz
hacé\thaga\thagamos\thaced\thagan
negative\t\tno hagas\tno haga\tno hagamos\tno hagáis\tno hagan`
const result = uniqueForms(faireString)
console.log(`All unique forms are: \n\n${result.string}`)
console.log(`\n\nNumber of unique forms is:\n${result.numberOfUniqueForms}`)

module.exports.uniqueForms = uniqueForms
