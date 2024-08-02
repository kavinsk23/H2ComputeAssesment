import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import billing from "./assets/icons/credit-card-1.png";
import settings from "./assets/icons/settings.png";
import keyboard from "./assets/icons/keyboard.png";
import team from "./assets/icons/user.svg";
import card2 from "./assets/icons/credit-card-2.png";
import plus from "./assets/icons/plus.png";
import cloud from "./assets/icons/cloud.png";
import logout from "./assets/icons/log-out.png";
import arrow from "./assets/icons/secondary icon.png";
import bgImg from "./assets/icons/108382-light-blue-curve 1.jpg";
import menu from "./assets/icons/icon.png";

const App = () => {
  return (
    <div className="block bg-red-300">
      <div className="flex m-10 p-20">
        <aside className="w-64 p-4 bg-white h-max rounded-lg">
          <nav aria-label="Main Navigation">
            <h2 className="text-lg font-semibold pb-2">My Account</h2>
          </nav>
          <hr></hr>
          <ul>
            <li className="mb-2 pt-2">
              <div className="flex items-center p-1">
              <svg 
                className="mr-2" 
                width="16" 
                height="16" 
                viewBox="0 0 16 16" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg">
                <path d="M12.6666 14.0003V12.6669C12.6666 11.9597 12.3857 11.2814 11.8856 10.7813C11.3855 10.2812 10.7072 10.0003 9.99998 10.0003H5.99998C5.29274 10.0003 4.61446 10.2812 4.11436 10.7813C3.61426 11.2814 3.33331 11.9597 3.33331 12.6669V14.0003" stroke="#334155" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.99998 7.33361C9.47274 7.33361 10.6666 6.1397 10.6666 4.66694C10.6666 3.19418 9.47274 2.00027 7.99998 2.00027C6.52722 2.00027 5.33331 3.19418 5.33331 4.66694C5.33331 6.1397 6.52722 7.33361 7.99998 7.33361Z" stroke="#334155" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
                <span>Profile Item</span>
                <kbd className="ml-auto">⌘⇧B</kbd>
              </div>
            </li>
            <li className="mb-2">
              <div className="flex items-center p-1">
                <img 
                  src={billing} 
                  alt="billing" 
                  className="mr-2" 
                  width="16" 
                  height="16"></img>
                <span>Billing</span>
                <kbd className="ml-auto">⌘⇧B</kbd>
              </div>
            </li>
            <li className="mb-2">
              <div className="flex items-center p-1">
              <img 
                src={settings} 
                alt="billing" 
                className="mr-2" 
                width="16" 
                height="16">
              </img>
                <span>Settings</span>
                <kbd className="ml-auto">⌘⇧B</kbd>
              </div>
            </li>
            <li className="mb-2">
              <div className="flex items-center p-1">
              <img 
                src={keyboard} 
                alt="billing" 
                className="mr-2" 
                width="16" 
                height="16">
              </img>
                <span>Keyboard Shortcuts</span>
                <kbd className="ml-auto">⌘⇧B</kbd>
              </div>
            </li>
            <hr></hr>

            <li className="mb-2 mt-2">
              <div className="flex items-center p-1">
                <img 
                  src={team} 
                  alt="billing" 
                  className="mr-2" 
                  width="16" 
                  height="16">
                </img>
                <span>Team</span>
                <kbd className="ml-auto"></kbd>
              </div>
            </li>
            <li className="mb-2">
              <div className="flex items-center p-1">
                <img 
                  src={card2} 
                  alt="billing" 
                  className="mr-2" 
                  width="16" 
                  height="16">
                </img>
                <span>Invite users</span>
                <kbd 
                  className="ml-auto">
                    <img 
                      src={arrow} 
                      alt="billing" 
                      className="" 
                      width="16" 
                      height="16">
                    </img>
                  </kbd>
              </div>
            </li>
            <li className="mb-2">
              <div className="flex items-center p-1">
                <img 
                  src={plus} 
                  alt="billing" 
                  className="mr-2" 
                  width="16" 
                  height="16"></img>
                <span>New team</span>
                <kbd className="ml-auto">⌘⇧B</kbd>
              </div>
            </li>
            <li className="mb-2 mt-3">
              <div className="flex items-center p-1">
                <img 
                  src={team} 
                  alt="billing" 
                  className="mr-2" 
                  width="16" 
                  height="16"></img>
                <span>Github</span>
                <kbd className="ml-auto"></kbd>
              </div>
            </li>
            <li className="mb-2">
              <div className="flex items-center p-1">
                <img 
                  src={card2} 
                  alt="billing" 
                  className="mr-2" 
                  width="16" 
                  height="16"></img>
                <span>Suppor</span>
                <kbd 
                  className="ml-auto">
                    <img 
                      src={arrow} 
                      alt="billing" 
                      className="" 
                      width="16" 
                      height="16">
                    </img>
                    </kbd>
              </div>
            </li>
            <li className="mb-2">
              <div className="flex items-center p-1">
                <img 
                  src={cloud} 
                  alt="billing" 
                  className="mr-2" 
                  width="16" 
                  height="16">
                </img>
                <span className="opacity-50">API</span>
                <kbd className="ml-auto"></kbd>
              </div>
            </li>
            <hr></hr>
            <li className="mb-2 mt-2">
              <div className="flex items-center p-1">
                <img 
                  src={logout} 
                  alt="billing" 
                  className="mr-2" 
                  width="16" 
                  height="16">
                </img>
                <span>Log out</span>
                <kbd className="ml-auto">⌘⇧B</kbd>
              </div>
            </li>
          </ul>
        </aside>
      </div>
      
      {/* End of aside */}
      <div className="p-20">
        <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <header className="flex items-center p-4 bg-purple-50">
            <div className="bg-purple-900 text-white rounded-full h-10 w-10 flex items-center justify-center">
              <span>A</span>
            </div>
            <div className="ml-3">
              <h1 className="text-lg font-semibold">Header</h1>
              <p className="text-gray-500">Subhead</p>
            </div>
            
          </header>
            <img className="w-full object-cover h-48" src={bgImg} alt="card"></img>
            <section className="p-4">
              <h2 className="text-xl">Title</h2>
              <p className="text-gray-500">Subhead</p>
              <p className="text-gray-700 mt-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            </section>
            <footer className="p-4 flex justify-center">
              <button className="px-4 py-2 border-2 border-gray-400 text-purple-600 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-300">
                Enabled
              </button>
            </footer>
        </div>
      </div>
    </div>
  )
}

export default App;
