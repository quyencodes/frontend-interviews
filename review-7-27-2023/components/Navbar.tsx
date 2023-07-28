interface Props {
}

const navItems = [
  {item: 'Counter',
  link: '#counter'},
  {item: 'Dropdown Menu',
  link: '#basicDrop'},
  {item: 'Advanced Dropdown Menu',
  link: '#advancedDrop'},
  {item: 'Search Bar', link: '#searchbar'},
  {item: 'API Request', link: '#apirequest'},
  {item: 'Form', link: '#form'}
]

export default function Navbar({}: Props) {
  return (
    <div className="w-full h-[100px] bg-slate-700 fixed flex items-center justify-end">
      <ul className="flex flex-row gap-4 mr-4 text-gray-200">
        {navItems.map((navItem, index) => (
          <a className="hover:text-sky-600 hover:-translate-y-1 duration-100 border-b-gray-200 border-b-2 hover:border-b-sky-600" href={navItem.link} key={index}>
            <li>{navItem.item}</li>
          </a>
        ))}
      </ul>
    </div>
  )
}