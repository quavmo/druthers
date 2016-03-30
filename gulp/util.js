export default {
  meticulouslyParseError: function(error) {
      console.error(error.toString());
      error.codeFrame && console.error(error.codeFrame);
      let file      = error.filename && path.basename(error.filename);
      let position  = error.loc && [error.loc.line, error.loc.column].join(':')
      let type      = error.name;

      return (file || position) ? `${type}: ${file} (${position})` : error.toString();
  }
}
