const NavBar = () => {
  return (
    <div className="bg-color1 m-0 p-5 w-screen h-20 flex flex-row" id="NavBar">
      <div className="navBarLeft w-60">
        <h3 
          className="ml-3 text-color4 text-3xl 
            font-customFont font-bold cursor-default" 
          id="NB_Page-Directory">
          Financial Buddy
        </h3>
      </div>
      <div className="navBarRight ml-auto mr-5">
      <nav className="font-customFont font-bold text-xl my-1">
          <a
            className={`ml-8 text-color2 font-regular ${
              location.pathname === '/dashboard' ? ' text-color4' : ''
            }`}
            href="/dashboard"
          >
            Dashboard
          </a>
          <a
            className={`ml-8 text-color2 font-regular ${
              location.pathname === '/savings' ? 'text-color4' : ''
            }`}
            href="/savings"
          >
            Savings
          </a>
          <a
            className={`ml-8 text-color2 font-regular ${
              location.pathname === '/expenses' ? 'text-color4' : ''
            }`}
            href="/expenses"
          >
            Expenses
          </a>
          <a
            className={`ml-8 text-color2 font-regular ${
              location.pathname === '/insights' ? 'text-color4' : ''
            }`}
            href="/insights"
          >
            Analytics
          </a>
        </nav>
      </div>
    </div>
  )
}

export default NavBar