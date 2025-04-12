export default function Navbar() {
    return (
      <header id="home" className="py-4 px-8 absolute top-0 left-0 w-full">
        <nav className="nav flex justify-between items-center" id="nav">
          <div className="">
            <a href="#menu-item-1">KAO BUI</a>
          </div>
  
          <div className="flex gap-6">
            <a href="#menu-item-3">contacts</a>
            <a href="#menu-item-2">about</a>
            <a href="#menu-item-3">projects</a>
          </div>
        </nav>
      </header>
    );
  }
  