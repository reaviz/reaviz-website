"use client";

import { Navbar, useTheme } from "reablocks-docs-theme";

export const Nav = () => {
  const { resolvedTheme } = useTheme();

  return <Navbar
    className="font-inter"
    logo={
      <div className='flex items-center gap-2'>
        <img src={resolvedTheme === 'light' ? '/logo-light.png' : '/logo.svg'} alt='Reaviz' width={112} height={24} />
      </div>
    }
    projectLink='https://github.com/reaviz/reaviz'
  />;

}