import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/layout/Header';
import { Map } from './components/Map/Map';
import { SearchContext } from './components/contexts/search.context';


export const App = () => {
    const [search, setSearch] = useState<string>('');

  return <>
    <div className="wrapper_">
        <SearchContext.Provider value={{
            search,
            setSearch,
        }}>
            <Header />
            <Map />
        </SearchContext.Provider>
    </div>
  </>;
};
