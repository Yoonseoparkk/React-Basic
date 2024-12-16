import { useRecoilState } from 'recoil'
import { searchState } from '@/recoil/atoms/searchState'
import { pageState } from '@/recoil/atoms/pageState'
import React, { useState  } from 'react'
import styles from './CommontSearchBar.module.scss'

function CommonSearchBar() {
  const [search, setSearch] = useRecoilState(searchState)
  const [page, setPage] = useRecoilState(pageState)
  const [text, setText] = useState('')
  const onChange = (event) => {
    setText(event.target.value)
  }
  const onSearch = () => {
    if (text === '') setSearch('Korea') // input 태그 안에 빈 값으로 검색했을 때 => searching default value
    else setSearch(text) // 작성한 input value 값 할당
    setPage(1)
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      if (text === '') setSearch('Korea') // input 태그 안에 빈 값으로 검색했을 때 => searching default value
      else setSearch(text) // 작성한 input value 값 할당
      setPage(1)
    }
  }
  
  return (
    <div className={styles.searchBar}>
        <div className={styles.searchBar__search}>
            <input type="text" placeholder='찾으실 이미지를 검색하세요.' className={styles.searchBar__search__input} value={text} onChange={onChange} onKeyDown={handleKeyDown} />
            <img src="src/assets/icons/icon-search.svg" alt="" onClick={onSearch}/>
        </div>
    </div>


  )
}

export default CommonSearchBar