import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare, faLaptop } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <footer className="page-footer font-small  bg-dark darken-1 pt-4 CCfooter">
      <div className="row justify-content-start">
        <div className="col-12 col-md-6">
          <a href="mailto:xyz">
            <FontAwesomeIcon icon={faEnvelopeSquare} />
            <span />
            mail to us
          </a>
        </div>
        <div className="col-12 col-md-6">
          <a
            target="blank"
            href="https://discordapp.com/channels/515951809752465408/515952580103372810"
          >
            <FontAwesomeIcon icon={faLaptop} /> 
            <span>discordapp.com</span>
          </a>
        </div>
      </div>
      <div className="footer-copyright text-center py-3 white">
        © { new Date().getFullYear() } Copyright:
        <a target="blank" href="http://sdyyc.ca/">
          {' '}
          Developers Learn React{' '}
          <i class="fas fa-info-circle"></i>
        </a>
      </div>
    </footer>
  );
}
