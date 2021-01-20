import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

export const Header = () => {
    let [show, setShow] = useState(false);
    const showNav = 'd-flex';
    const collapse = 'd-none';
    const toggle = () => {
        setShow(!show);
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold fs-3" to="/">WatchLister</Link>
          <button className="navbar-toggler" onClick={toggle} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`${ show ? showNav : collapse} navbar-collapse`} id="navbarNavAltMarkup">
            <div className="navbar-nav w-100 justify-content-end mx-5 fw-bold">
                <Link to="/watched" className="text-decoration-none mx-5 text-dark li_item">Watched</Link>
                <Link to="/watchlist" className="text-decoration-none mx-5 text-dark li_item">WatchList</Link>
                <Link to="/add"  className="text-decoration-none text-dark mx-5 li_item">Search</Link>
            </div>
          </div>
        </div>
      </nav>
    )
}

