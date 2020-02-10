const { uniqueForms } = require('./verb-unique-forms')

describe('uniqueForms', () => {
  it('removes duplicate spaces for "faço  faz"', () => {
    const expected = {
      string: 'faço, faz',
      numberOfUniqueForms: 2,
    }
    expect(uniqueForms('faço  faz')).toEqual(expected)
  })

  it('removes tabs with single spaces for "faço  faz"', () => {
    const expected = {
      string: 'faço, faz',
      numberOfUniqueForms: 2,
    }
    expect(uniqueForms('faço  faz')).toEqual(expected)
  })

  it('removes tabs input with \t for "faço\tfaz"', () => {
    const expected = {
      string: 'faço, faz',
      numberOfUniqueForms: 2,
    }
    expect(uniqueForms('faço\tfaz')).toEqual(expected)
  })

  it('disregard duplicates "faço faz faço"', () => {
    const expected = {
      string: 'faço, faz',
      numberOfUniqueForms: 2,
    }
    expect(uniqueForms('faço faz faço')).toEqual(expected)
  })

  it('works for Portuguese fazer', () => {
    const expected = {
      string:
        'ser, seres, sermos, serdes, serem, sendo, sido, sidos, sida, sidas, sou, és, é, somos, sois, são, era, eras, éramos, éreis, eram, fui, foste, foi, fomos, fostes, foram, fora, foras, fôramos, fôreis, serei, serás, será, seremos, sereis, serão, seria, serias, seríamos, seríeis, seriam, seja, sejas, sejamos, sejais, sejam, fosse, fosses, fôssemos, fôsseis, fossem, for, fores, formos, fordes, forem, sê, sede',
      numberOfUniqueForms: 59,
    }
    expect(
      uniqueForms(
        'ser\n' +
          'Personal\tser\tseres\tser\tsermos\tserdes\tserem\n' +
          'Gerund\n' +
          'sendo\n' +
          'Past participle\n' +
          'Masculine\tsido\tsidos\n' +
          'Feminine\tsida\tsidas\n' +
          'Indicative\n' +
          'Present\tsou\tés\té\tsomos\tsois\tsão\n' +
          'Imperfect\tera\teras\tera\téramos\téreis\teram\n' +
          'Preterite\tfui\tfoste\tfoi\tfomos\tfostes\tforam\n' +
          'Pluperfect\tfora\tforas\tfora\tfôramos\tfôreis\tforam\n' +
          'Future\tserei\tserás\tserá\tseremos\tsereis\tserão\n' +
          'Conditional\n' +
          'seria\tserias\tseria\tseríamos\tseríeis\tseriam\n' +
          'Subjunctive\n' +
          'Present\tseja\tsejas\tseja\tsejamos\tsejais\tsejam\n' +
          'Imperfect\tfosse\tfosses\tfosse\tfôssemos\tfôsseis\tfossem\n' +
          'Future\tfor\tfores\tfor\tformos\tfordes\tforem\n' +
          'Imperative\n' +
          'Affirmative\t-\tsê\tseja\tsejamos\tsede\tsejam\n' +
          'Negative (não)\t-\tsejas\tseja\tsejamos\tsejais\tsejam'
      )
    ).toEqual(expected)
  })
})
