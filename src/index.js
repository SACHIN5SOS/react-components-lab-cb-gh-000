// Make sure to import React and ReactDOM

const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
];

// Define these exported classes
export class OlderCoaster extends React.Component {
  render(){
    return React.createElement('div',{ className: 'oldercoaster'},[
        React.createElement('p',{},'Two grannies having the time of their life!'),
        React.createElement('p',{},'Passengers:'),
        React.createElement('ul',{},['Agnes','Muriel'].map((e)=>{
          return React.createElement('li',{},e);
        })
    ]);
  }
};
export class InFrontOfYou extends React.Component {};
export class ButcherShop extends React.Component {};

ReactDOM.render(
  React.createElement('div', {}, [
    React.createElement(OlderCoaster),
    React.createElement(InFrontOfYou),
    React.createElement(ButcherShop)
  ]),
  document.getElementById('global')
);
