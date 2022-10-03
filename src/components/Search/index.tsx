import { SearchIcon } from 'assets'

const Search = () => {
  return (
    <div className="flex justify-center rounded-2xl bg-secondary-50">
      <input
        placeholder="Search"
        className="mx-4 w-64 bg-transparent p-2 font-nunito text-base text-primary-50 placeholder-search outline-none"
      />
      <button className="mx-2">
        <SearchIcon />
      </button>
    </div>
  )
}

export default Search
