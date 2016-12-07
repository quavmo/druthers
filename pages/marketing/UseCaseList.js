import React, { DOM } from 'react';
const {
  h2, h3, style, div, img, p,
} = DOM;
import { caseBase } from '../../core/services/DataService';
import { useCase, caseIcon } from './style.css';

export default class UseCaseList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cases: [] };
  }

  componentDidMount() {
    caseBase.on('value', snapshot => this.setState({ cases: snapshot.val() }), this);
  }

  hydrateCase({ key, title, body }) {
    return div({ className: useCase, key },
      img({ className: caseIcon, src: `icons/${key}.svg` }),
      h3({}, title),
      p({}, body)
    );
  }

  render() {
    const header = h2({ }, 'Get your druthers.');
    const responsiveStyleBox = style(
      { },
      `
        @media (max-width: 1000px) {
          #caseBox { display: block; }
          #useCaseList { padding: 20px; }
        }
        @media (min-width: 1000px) {
          #caseBox { display: flex; }
          #useCaseList { padding: 100px; }
        }
      `
    );
    const caseBox = div({ id: 'caseBox' }, ...this.state.cases.map(this.hydrateCase));
    return div({ id: 'useCaseList' }, responsiveStyleBox, header, caseBox);
  }
}
