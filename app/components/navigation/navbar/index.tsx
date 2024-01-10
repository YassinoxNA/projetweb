import React from "react";
import Link from "next/link";

import Button from "./Button";
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = ({ toggle }: { toggle: () => void }) => {
  return (
    <>
      <div className="w-full h-20 bg-emerald-800 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <button
              type="button"
              className="inline-flex items-center md:hidden"
              onClick={toggle}
            >
           
            </button>
            <ul className="flex gap-x-6 text-white items-center">
              <li>
               
                <div className="flex items-center justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="40"
                 height="30" fill="currentColor" 
                 className="bi bi-house" viewBox="0 0 16 16"
                 style={{ marginRight: "20px" }}>
  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
</svg>
                </div>
              </li>
              <li>
                <Link href="/pages">
                  <p>Liste des questions</p>
                </Link>
              </li>
              <li>
                <Link href="/Users">
                  <p>Liste des utulisateurs</p>
                </Link>
              </li>
              <li>
               
              </li>
            </ul>
            <div className="hidden md:block">
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
