import {useSearchParams} from "react-router-dom";

export const PaginationComponent = () => {
    const [searchParams, setSearchParams] = useSearchParams({page: '1'});
    let currentPage = Number(searchParams.get('page') || '1');

    return (
        <div>
            <button className='border-2' onClick={() =>{
                if(currentPage > 0){
                    setSearchParams({page: (--currentPage).toString()})
                }
            }}> prev
            </button>
            <button className='border-2' onClick={() =>{
                if(currentPage > 0){
                    setSearchParams({page: (++currentPage).toString()})
                }
            }}> next
            </button>
        </div>
    )
}