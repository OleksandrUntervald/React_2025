import {useSearchParams} from "react-router-dom";

export const PaginationComponent = () => {
    const [query, setQuery] = useSearchParams({pg: '1'})
    return (
        <div>
            <button className='border-2' onClick={() => {
                const pg = query.get('pg');
                if (pg) {
                    let curentPage = +pg;
                    setQuery({pg: (--curentPage).toString()})
                }
            }}> prev
            </button>
          <button className='border-2' onClick={() => {
              const pg = query.get('pg');
              if (pg) {
                  let curentPage = +pg;
                  setQuery({pg: (++curentPage).toString()})
              }
          }}> next
          </button>

        </div>
    )
}