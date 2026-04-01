import { Bell, BookOpenText, Settings, Menu, X } from 'lucide-react'
import React, { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='relative shadow-xl bg-gray-50'>
      <div className='flex justify-between p-4 items-center max-w-7xl mx-auto'>
        {/* Logo */}
        <div className='flex items-center cursor-pointer gap-2 shrink-0'>
            <div className='bg-blue-900 h-8 w-8 flex items-center justify-center rounded-md text-amber-50'>
              <BookOpenText size={20} />
            </div>
            <h1 className='font-bold text-lg whitespace-nowrap'>Kalyan.io</h1>
        </div>

        {/* Desktop Links */}
        <div className='hidden md:block'>
            <ul className='flex gap-6 items-center cursor-pointer font-medium text-gray-600'>
                <li className='hover:text-blue-900 transition-colors'>Study.io</li>
                <li className='hover:text-blue-900 transition-colors'>Overview</li>
                <li className='hover:text-blue-900 transition-colors'>Team</li>
            </ul>
        </div>

        {/* User Actions & Hamburger */}
        <div className='flex items-center gap-2 sm:gap-4'>
            <ul className='flex gap-3 items-center cursor-pointer'>
                <li className='p-2 hover:bg-gray-200 rounded-full transition-colors'><Bell size={20}/></li>
                <li className='hidden sm:block p-2 hover:bg-gray-200 rounded-full transition-colors'><Settings size={20}/></li>
                <li className='w-8 h-8 sm:w-10 sm:h-10'>
                <img className='rounded-full w-full h-full object-cover' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAARVBMVEX6+vqPj4/////l5eWMjIyIiIj19fWCgoKVlZXGxsaYmJiSkpKxsbG3t7fp6eny8vKkpKS+vr7Nzc2qqqrf39/X19eenp7INw94AAAC6UlEQVR4nO2b27KrIAxAMXLxBqJo//9TD9o9s7trVawYPDNZD20f14RbSChjBEEQBEEQBEEQBEEQxE2BiecnpHZ5AtAOpbZVXVdW94O8gRdA3hSZEJxnGedCZJU2ibUARqu8zitc2TGlFRjL35RmLe7aZFrQiw9KT61UwQItPitNiC6JFbgNJ2+lU1g1m05JrKDbcfJWPbIVDGrPKctUjmslq32njD9QnQIGbx7AEjNUMmDw5lghSoFe2TRThqoNmVFzpPBmFYxBM2q2GrBCtXm+pBo/CFWaxg9tUgWuvTlUSFKQH5BSLZJU+DzHO2p8bndg+JCWH5RHpJBS0EORUlhSd5xTzNxw9d1yn2JQBzvh7ej3PPvGwHTKRypHcrpnPhWaoiPfsoJzdDyl8NsM7nVUPgLmOreYSqE3ZIN9b99PFbAShFerZidWKkWFCrZrQYmqZkxvxEqhlhFegLFeWYOiQLuELq3MomA9wVWTrjo8aeWOv00twR1ysWxpxQYtlOA/CMW7nKVvhDAA02tnPU737Q1aMz9MJlI+vwnifwegNfkXmAvbpTC6IvzK90JdNBcdOytnShhcXdKXhCH7WmnWKi7IQ9tzTt6qil7rAHfSyZ/UTeRQwXDaycfKRJbqYkjFzkZtDKkmrpOsYkhFvpwGdUJJapIq7jh8IQWNXSkXV4qd3zvjr77grvGmVOSbPJQxpCLX0CCPIRX9RP4qu/tLFTt3OdRP+8wFFVBzevzq+L2j03lC9BxhQp6T4ll8pYO9xyUXNZMPNK8+OF1VAgX7tVX0/PwXuf1gccvpKiW2+4xy1enih4zl2iPYdXjsM28BDI8Dbe0JZa+vywIri/BocV70KHVZkGURVurgqiolWmebjbbeCxcXtR1Rq9cAee+m+vnKoAnFXZ/gCT8wmXeuKnxIxG9x3//MiocrDUtV4p/+/GGGsS+1bpyn0V3Zj3nLkv8rBN5Jq0MQBEEQBEEQBEEQBEGs8Q9UMiC2Cz0iwAAAAABJRU5ErkJggg==" alt="user profile" />
                </li>
            </ul>
            
            {/* Hamburger Button */}
            <button 
              className='md:hidden p-2 hover:bg-gray-200 rounded-md transition-colors'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50 py-4 px-6 border-t animate-in fade-in slide-in-from-top-4 duration-200'>
          <ul className='flex flex-col gap-4 font-medium text-gray-700'>
            <li className='hover:text-blue-900 transition-colors py-2 border-b border-gray-100 flex items-center justify-between'>
              <span>Study.io</span>
            </li>
            <li className='hover:text-blue-900 transition-colors py-2 border-b border-gray-100'>Overview</li>
            <li className='hover:text-blue-900 transition-colors py-2 border-b border-gray-100'>Team</li>
            <li className='hover:text-blue-900 transition-colors py-2 flex items-center gap-2'>
              <Settings size={18} /> Settings
            </li>
          </ul>
        </div>
      )}
    </div>  
  )
}

export default Navbar
