import {
  MouseEvent,
  ReactElement,
  useEffect,
  useState
} from 'react';

import { patterns } from './../patterns';
import { Results } from './results';
import { sortCaseInsensitive } from '../utilities';

export const Filter = (): ReactElement => {
  const [results, setResults] = useState(patterns);
  const [pros, setPros] = useState(results.flatMap((result) => result.pros ?? ''));
  const [cons, setCons] = useState(results.flatMap((result) => result.cons ?? ''));

  useEffect(() => {
    setPros((p) => results.flatMap((result) => result.pros ?? ''));
    setCons((c) => results.flatMap((result) => result.cons ?? ''));
  }, [results])

  const filterResults = (e: MouseEvent, type: 'pros' | 'cons', trait: string) => {
    return type === 'pros' ?
      setResults(results.filter((result) => result.pros?.includes(trait)))
      : setResults(results.filter((result) => !result.cons?.includes(trait)));
  }

  const mapTraits = (type: 'pros' | 'cons') => {
    const traitList: string[] = type === 'pros' ? pros : cons;
    const filteredTraits = traitList.filter((trait, i, arr) => {
      return arr.findIndex((item) => item === trait) === i
    })
    const sortedTraits = sortCaseInsensitive(filteredTraits);
    return sortedTraits.length > 0 ?
      sortedTraits.map((trait) => <button type="button" key={trait} onClick={(e) => filterResults(e, type, trait)}>{trait}</button>)
      : 'No filters to display.';
  }

  return (
    <section>
      <h2>Preferences</h2>
      <h3>Show patterns known for...</h3>
      <div>{mapTraits('pros')}</div>
      <h3>Hide patterns not known for...</h3>
      <div>{mapTraits('cons')}</div>
      <h2>Results</h2>
      <Results results={results} />
      <button type="button" onClick={() => setResults(patterns)}>Reset filters</button>
    </section>
  )
}
