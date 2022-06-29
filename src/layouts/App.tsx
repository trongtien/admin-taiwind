import { useState } from 'react';
import { MdAccountBox } from 'react-icons/md';

function App() {
  const sidebar = [
    [
      { name: 'Overview', icon: <MdAccountBox /> },
      { name: 'Products', icon: <MdAccountBox /> },
      { name: 'Analytics', icon: <MdAccountBox /> },
      { name: 'Schedule', icon: <MdAccountBox /> },
      { name: 'Payout', icon: <MdAccountBox /> },
      { name: 'Statements', icon: <MdAccountBox /> },
    ],
    [
      { name: 'Help', icon: <MdAccountBox /> },
      { name: 'Community', icon: <MdAccountBox /> },
      { name: 'Settings', icon: <MdAccountBox /> },
      { name: 'Logout', icon: <MdAccountBox /> },
    ],
  ];

  return (
    <div className="w-full min-h-screen font-sans text-gray-900 bg-gray-50 flex">
      <aside className="py-6 px-10 w-64 border-r border-gray-200">
        <img
          src="https://thuvienlogo.com/data/03/logo-chu-nhat-dep-01.jpg"
          alt=""
          className="w-28"
        />
        {sidebar.map((sb) => {
          return (
            <ul className="flex flex-col gap-y-6 pt-20">
              {sb.map((item) => {
                return (
                  <a
                    href="#"
                    className="flex gap-x-4 items-center py-2 text-gray-500 hover:text-indigo-600 group"
                  >
                    <span className="absolute w-1.5 h-8 bg-indigo-600 rounded-r-full left-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition-transform ease-in-out" />
                    <span className="w-6 h-6 fill-current">{item.icon}</span>
                    <span>{item.name}</span>
                  </a>
                );
              })}
            </ul>
          );
        })}
      </aside>

      <main className="flex-1 pb-8">
        <div className="flex items-center justify-between py-7 px-10">
          <div>
            <h1 className="text-2xl font-semibold leading-relaxed text-gray-800">
              Products
            </h1>
            <p className="text-sm font-medium text-gray-500">
              Let's grow to your business! Create your product and upload here
            </p>
          </div>
          <button className="inline-flex gap-x-2 items-center py-2.5 px-6 text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1">
            <MdAccountBox className="w-6 h-6 fill-current" />
            <span className="text-sm font-semibold tracking-wide">
              Create Item
            </span>
          </button>
        </div>

        <ul className="flex gap-x-24 items-center px-4 border-y border-gray-200">
          {/*  */}
        </ul>

        <table className="w-full border-b border-gray-200">
          <thead>
            <tr className="text-sm font-medium text-gray-700 border-b border-gray-200">
              <td className="pl-10">
                <div className="flex items-center gap-x-4">
                  <input
                    type="checkbox"
                    className="w-6 h-6 text-indigo-600 rounded-md border-gray-300"
                    // indeterminate="indeterminate"
                  />
                  <span>Product Name</span>
                </div>
              </td>
              <td className="py-4 px-4 text-center">Pricing</td>
              <td className="py-4 px-4 text-center">Downloaded</td>
              <td className="py-4 px-4 text-center">Rating</td>
              <td className="py-4 px-4 text-center">Platforms</td>
              <td className="py-4 pr-10 pl-4 text-center">
                <MdAccountBox className="w-6 h-6 fill-current" />
              </td>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="product in products"
              className="hover:bg-gray-100 transition-colors group"
            >
              <td className="flex gap-x-4 items-center py-4 pl-10"></td>
            </tr>
          </tbody>
        </table>

        <div className="flex gap-x-2 justify-center pt-8">
          <button className="flex justify-center items-center w-8 h-8">
            <MdAccountBox className="w-6 h-6 to-gray-800 stroke-current hover:text-indigo-600" />
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
