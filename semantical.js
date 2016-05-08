/*!
 * Semanticals. Test your HTML markup if it is semantic or not.
 *
 * Copyright (c) 2016 Barış Güler
 * http://hwclass.in
 *
 * Licensed under MIT
 * http://www.opensource.org/licenses/mit-license.php
 *
 *
 * Launch  : May 2016
 * Version : 1.0.0
 * Released: May 8th, 2016
 *
 *
 * Calculates the current markup if it has really semantic tags
 */

'use strict';

/**
 * 
 * Semantical : Builder as a wrapper IIFE for the main method
 *
 * @memberOf file
 * @param {object} The cheerio library
 * @returns {calculate} The method that returns the text with calculated markup percent value 
 */
const Semantical = ((cheerio) => {

  const body = 'body',
        semanticals = {
          article: {value : 'article'},
          aside: {value : 'aside'},
          details : {value : 'details'},
          figcaption : {value : 'figcaption'},
          figure : {value : 'figure'},
          footer : {value : 'footer'},
          header : {value : 'header'},
          main : {value : 'main'},
          mark : {value : 'mark'},
          nav : {value : 'nav'},
          section : {value : 'section'},
          summary : {value : 'summary'},
          time : {value : 'time'}
        };

  let semanticalPercent = 0;

  /**
   * 
   * calculate() : returns the text with calculated markup percent value 
   *
   * @memberOf file
   * @param {string} Markup of the HTML code to be parsed
   * @returns {string} Returns the calculation message
   */
  const calculate = (markup) => {
    $ = cheerio.load(markup);
    for (let semanticalIndex = 0, len = Object.keys(semanticals).length; semanticalIndex < len; semanticalIndex++) {
      let elementExistance = $(body).find(semanticals[Object.keys(semanticals)[semanticalIndex]].value);
      if (!!elementExistance && elementExistance.length > 0) {
        semanticalPercent += (!!semanticals[Object.keys(semanticals)[semanticalIndex]]? 1 : 0);
      }
    };
    return getPercentMessage($(body).length, semanticalPercent);
  }

  /**
   * 
   * getPercentMessage() : generates and returns the calculated text for HTML markup
   *
   * @memberOf file
   * @param {number} bodyLen Markup of the HTML code to be parsed
   * @param {number} semanticalPercent Number value of current semantical elements
   * @returns {string} Returns the calculation message
   */
  const getPercentMessage = (bodyLen, semanticalPercent) => {
    return 'Semantical as ' + ((bodyLen * semanticalPercent) / 100) + '%'
  }

  return {
    calculate : calculate
  }

})(require('cheerio'));

module.exports = Semantical;
