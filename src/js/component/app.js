import React from 'react';
import { Card } from './Card';
import { Jumbotron } from './Jumbotron';
import { Navbar } from './Nav_Bar';
import {data} from './data';
import './style.css';



function App(){
    return(
        <>
        <Navbar/>
        <div className="container">
            <Jumbotron/>
        <div className="row">
            <div className="col-md-3">
                <Card url={data[0].url} title={data[0].title} alt={data[0].alt} textBody={data[0].textBody} btnUrl={data[0].btnUrl} btnLabel={data[0].btnLabel}/>
            </div>
            <div className="col-md-3">
            <Card url={data[1].url} title={data[1].title} alt={data[1].alt} textBody={data[1].textBody} btnUrl={data[1].btnUrl} btnLabel={data[1].btnLabel}/>
            </div>
            <div className="col-md-3">
            <Card url={data[2].url} title={data[2].title} alt={data[2].alt} textBody={data[2].textBody} btnUrl={data[2].btnUrl} btnLabel={data[2].btnLabel}/>
            </div>
            <div className="col-md-3">
            <Card url={data[3].url} title={data[3].title} alt={data[3].alt} textBody={data[3].textBody} btnUrl={data[3].btnUrl} btnLabel={data[3].btnLabel}/>
            </div>
        </div> 
        </div> 
        <div className="footer text-center mt-5 pt-3">
          <p>Copyrigth &copy; Your Website 2021 </p>
        </div>
        </>
    )
}

export default App;