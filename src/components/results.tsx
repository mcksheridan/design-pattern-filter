import { ReactElement } from 'react';
import type { PATTERN_PROPS } from '../patterns';

interface RESULTS_PROPS {
  results: PATTERN_PROPS[],
}

export const Results = ({results}: RESULTS_PROPS): ReactElement => {
  return (
    <div className="results">
      {results.length > 0 ?
        results.map((result) => <a href={result.url} key={result.name}>{result.name}</a>)
        : 'No patterns match the selected criteria.'}
    </div>
  )
}
