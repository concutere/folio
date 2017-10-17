import React, { Component } from 'react';
import './App.css';
import data from './data.json';
class App extends Component {
  render() {
    let cats = data.cats.map((cv,ci,ca) => {
      let items = data.data.filter((v) => v.cat===cv)
        .map((v,i,a) => {
        return <div className={"item"} key={`item${i}`}>
          <a href={data.base_url+v.url}><img className="thumb" src={v.thumb} title={v.name} alt={v.name}/></a>
          <div>
            <h4>{v.name}</h4>
          <p style={{ fontSize:"1.2em"}}>{v.desc}</p>
          {((detail) => {
            if (detail !== undefined && detail.length > 0) {
              if (detail.includes('href=') || (detail.includes('<') && detail.includes('>'))) {
                return <p style={{marginLeft:"15px"}} dangerouslySetInnerHTML={{__html: detail}} />
              }
              else {
                return <p style={{marginLeft:"15px"}}>{detail}</p>
              }
            }
          })(v.detail) //this feels so es5 hackish ... TODO refactor into tiny component bits
            

          }
          </div>
        </div>
      });

      return <section key={cv} id={cv}><h4>{cv}</h4>{items}</section>
    });

    return (<div>{cats}</div>);
  }
}

export default App;
