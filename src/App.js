import logo from './logo.svg';
import argentina from './images/argentina.svg';
import bolivia from './images/bolivia.svg';
import brasil from './images/brazil.svg';
import colombia from './images/colombia.svg';
import equador from './images/ecuador.svg';
import paraguai from './images/paraguay.svg';
import peru from './images/peru.svg';
import venezuela from './images/venezuela.svg';
import './App.css';
import React from 'react';

export default class App extends React.Component{
  state = {
    loading: true,
    global: null,
    country1: null,
    country2: null,
    country3: null,
    country4: null,
    country5: null,
    country6: null,
    country7: null,
    country8: null,
  };

  async componentDidMount(){
    const url = "https://api.covid19api.com/summary";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({country1: data.Countries[6], country2: data.Countries[20],
    country3: data.Countries[23], country4: data.Countries[36],
    country5: data.Countries[50], country6: data.Countries[134],
    country7: data.Countries[135], country8: data.Countries[188],
    global: data.Global, loading: false});
    console.log(data);
  }

  render(){
    return (
      <div>
        {this.state.loading || !this.state.country1 ? (
          <div>Carregando, aguarde um momento.</div>
        ) : (
          <div>
            <div class="global">              
              <h1>Estatísticas Globais sobre a Covid-19</h1>
              <div class="cases"><p><strong>Novos casos confirmados: </strong>{this.state.global.NewConfirmed}</p></div>
              <div class="cases"><p><strong>Total de casos: </strong>{this.state.global.TotalConfirmed}</p></div>
              <div class="deaths"><p><strong>Mortes recentes: </strong>{this.state.global.NewDeaths}</p></div>
              <div class="deaths"><p><strong>Total de mortes: </strong>{this.state.global.TotalDeaths}</p></div>
              <div class="recovered"><p><strong>Novos recuperados: </strong>{this.state.global.NewRecovered}</p></div>
              <div class="recovered"><p><strong>Total de recuperados: </strong>{this.state.global.TotalRecovered}</p></div>
            </div>
            <h1>Covid-19 nos principais países da América Latina</h1>
            <div class="cards">
              <div class="card">
                <img src={argentina} alt="bandeira da argentina"/>
                <div class="container">
                  <div class="country"><strong>País: </strong>{this.state.country1.Country}</div>
                  <div class="cases"><strong>Novos casos confirmados: </strong>{this.state.country1.NewConfirmed}</div>
                  <div class="cases"><strong>Total de casos: </strong>{this.state.country1.TotalConfirmed}</div>
                  <div class="deaths"><strong>Mortes recentes: </strong>{this.state.country1.NewDeaths}</div>
                  <div class="deaths"><strong>Total de mortes: </strong>{this.state.country1.TotalDeaths}</div>
                  <div class="recovered"><strong>Novos recuperados: </strong>{this.state.country1.NewRecovered}</div>
                  <div class="recovered"><strong>Total de recuperados: </strong>{this.state.country1.TotalRecovered}</div>
                </div>
              </div>
              <br/>
              <div class="card">
                <img src={bolivia} alt="bandeira da bolivia"/>
                <div class="container">
                  <div class="country"><strong>País: </strong>{this.state.country2.Country}</div>
                  <div class="cases"><strong>Novos casos confirmados: </strong>{this.state.country2.NewConfirmed}</div>
                  <div class="cases"><strong>Total de casos: </strong>{this.state.country2.TotalConfirmed}</div>
                  <div class="deaths"><strong>Mortes recentes: </strong>{this.state.country2.NewDeaths}</div>
                  <div class="deaths"><strong>Total de mortes: </strong>{this.state.country2.TotalDeaths}</div>
                  <div class="recovered"><strong>Novos recuperados: </strong>{this.state.country2.NewRecovered}</div>
                  <div class="recovered"><strong>Total de recuperados: </strong>{this.state.country2.TotalRecovered}</div>
                </div>
              </div>
              <br/>
              <div class="card">
                <img src={brasil} alt="bandeira do brasil"/>
                <div class="container">
                  <div class="country"><strong>País: </strong>{this.state.country3.Country}</div>
                  <div class="cases"><strong>Novos casos confirmados: </strong>{this.state.country3.NewConfirmed}</div>
                  <div class="cases"><strong>Total de casos: </strong>{this.state.country3.TotalConfirmed}</div>
                  <div class="deaths"><strong>Mortes recentes: </strong>{this.state.country3.NewDeaths}</div>
                  <div class="deaths"><strong>Total de mortes: </strong>{this.state.country3.TotalDeaths}</div>
                  <div class="recovered"><strong>Novos recuperados: </strong>{this.state.country3.NewRecovered}</div>
                  <div class="recovered"><strong>Total de recuperados: </strong>{this.state.country3.TotalRecovered}</div>
                </div>
              </div>
              <br/>
              <div class="card">
                <img src={colombia} alt="bandeira da colombia"/>
                <div class="container">
                  <div class="country"><strong>País: </strong>{this.state.country4.Country}</div>
                  <div class="cases"><strong>Novos casos confirmados: </strong>{this.state.country4.NewConfirmed}</div>
                  <div class="cases"><strong>Total de casos: </strong>{this.state.country4.TotalConfirmed}</div>
                  <div class="deaths"><strong>Mortes recentes: </strong>{this.state.country4.NewDeaths}</div>
                  <div class="deaths"><strong>Total de mortes: </strong>{this.state.country4.TotalDeaths}</div>
                  <div class="recovered"><strong>Novos recuperados: </strong>{this.state.country4.NewRecovered}</div>
                  <div class="recovered"><strong>Total de recuperados: </strong>{this.state.country4.TotalRecovered}</div>
                </div>
              </div>
              <br/>
              <div class="card">
                <img src={equador} alt="bandeira do equador"/>
                <div class="container">
                  <div class="country"><strong>País: </strong>{this.state.country5.Country}</div>
                  <div class="cases"><strong>Novos casos confirmados: </strong>{this.state.country5.NewConfirmed}</div>
                  <div class="cases"><strong>Total de casos: </strong>{this.state.country5.TotalConfirmed}</div>
                  <div class="deaths"><strong>Mortes recentes: </strong>{this.state.country5.NewDeaths}</div>
                  <div class="deaths"><strong>Total de mortes: </strong>{this.state.country5.TotalDeaths}</div>
                  <div class="recovered"><strong>Novos recuperados: </strong>{this.state.country5.NewRecovered}</div>
                  <div class="recovered"><strong>Total de recuperados: </strong>{this.state.country5.TotalRecovered}</div>
                </div>
              </div>
              <br/>
              <div class="card">
                <img src={paraguai} alt="bandeira do paraguai"/>
                <div class="container">
                  <div class="country"><strong>País: </strong>{this.state.country6.Country}</div>
                  <div class="cases"><strong>Novos casos confirmados: </strong>{this.state.country6.NewConfirmed}</div>
                  <div class="cases"><strong>Total de casos: </strong>{this.state.country6.TotalConfirmed}</div>
                  <div class="deaths"><strong>Mortes recentes: </strong>{this.state.country6.NewDeaths}</div>
                  <div class="deaths"><strong>Total de mortes: </strong>{this.state.country6.TotalDeaths}</div>
                  <div class="recovered"><strong>Novos recuperados: </strong>{this.state.country6.NewRecovered}</div>
                  <div class="recovered"><strong>Total de recuperados: </strong>{this.state.country6.TotalRecovered}</div>
                </div>
              </div>
              <br/>
              <div class="card">
                <img src={peru} alt="bandeira do peru"/>
                <div class="container">
                  <div class="country"><strong>País: </strong>{this.state.country7.Country}</div>
                  <div class="cases"><strong>Novos casos confirmados: </strong>{this.state.country7.NewConfirmed}</div>
                  <div class="cases"><strong>Total de casos: </strong>{this.state.country7.TotalConfirmed}</div>
                  <div class="deaths"><strong>Mortes recentes: </strong>{this.state.country7.NewDeaths}</div>
                  <div class="deaths"><strong>Total de mortes: </strong>{this.state.country7.TotalDeaths}</div>
                  <div class="recovered"><strong>Novos recuperados: </strong>{this.state.country7.NewRecovered}</div>
                  <div class="recovered"><strong>Total de recuperados: </strong>{this.state.country7.TotalRecovered}</div>
                </div>
              </div>
              <div class="card">
                <img src={venezuela} alt="bandeira da venezuela"/>
                <div class="container">
                  <div class="country"><strong>País: </strong>{this.state.country8.Country}</div>
                  <div class="cases"><strong>Novos casos confirmados: </strong>{this.state.country8.NewConfirmed}</div>
                  <div class="cases"><strong>Total de casos: </strong>{this.state.country8.TotalConfirmed}</div>
                  <div class="deaths"><strong>Mortes recentes: </strong>{this.state.country8.NewDeaths}</div>
                  <div class="deaths"><strong>Total de mortes: </strong>{this.state.country8.TotalDeaths}</div>
                  <div class="recovered"><strong>Novos recuperados: </strong>{this.state.country8.NewRecovered}</div>
                  <div class="recovered"><strong>Total de recuperados: </strong>{this.state.country8.TotalRecovered}</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
