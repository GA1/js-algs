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
  '-',
  'Conditional',
  'Subjunctive',
  'Imperative',
  'Affirmative',
  'Negative',
  '(não)',
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
  const forms = __removeNonVerbForms(s.split(/\s+|\\n|\t/))
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

const result = uniqueForms(`Impersonal\tfazer
Personal\tfazer\tfazeres\tfazer\tfazermos\tfazerdes\tfazerem
Gerund
fazendo
Past participle
Masculine\tfeito\tfeitos
Feminine\tfeita\tfeitas
Indicative
Present\tfaço\tfazes\tfaz\tfazemos\tfazeis\tfazem
Imperfect\tfazia\tfazias\tfazia\tfazíamos\tfazíeis\tfaziam
Preterite\tfiz\tfizeste\tfez\tfizemos\tfizestes\tfizeram
Pluperfect\tfizera\tfizeras\tfizera\tfizéramos\tfizéreis\tfizeram
Future\tfarei\tfarás\tfará\tfaremos\tfareis\tfarão
Conditional
faria\tfarias\tfaria\tfaríamos\tfaríeis\tfariam
Subjunctive
Present\tfaça\tfaças\tfaça\tfaçamos\tfaçais\tfaçam
Imperfect\tfizesse\tfizesses\tfizesse\tfizéssemos\tfizésseis\tfizessem
Future\tfizer\tfizeres\tfizer\tfizermos\tfizerdes\tfizerem
Imperative
Affirmative\t-\tfaz
faze\tfaça\tfaçamos\tfazei\tfaçam
Negative (não)\t-\tfaças\tfaça\tfaçamos\tfaçais\tfaçam`)
console.log(`All unique forms are: \n\n${result.string}`)
console.log(`\n\nNumber of unique forms is:\n${result.numberOfUniqueForms}`)

module.exports.uniqueForms = uniqueForms
