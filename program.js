process.stdin.setEncoding('utf-8');

function program() {
  process.stdout.write('Type command (lang, node-ver, exit): ');
  process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if (input !== null) {
      var instruction = input.toString().trim();
      switch (instruction) {
  
      case 'lang' :
        var lang = process.env.LANG || process.env.LANGUAGE || process.env.LC_ALL || process.env.LC_MESSAGES;
        process.stdout.write('\nYour system language is: ' + lang + '\n');
        break;
  
      case 'node-ver':
        var nodeVersion = process.versions.node;
        var v8Version = process.versions.v8;
        process.stdout.write('\nYour node version is: ' + nodeVersion + ' (v8 version: ' + v8Version + ')\n');
        break;
  
      case 'exit' :
        process.stdout.write('\nExiting from app!\n');
        process.exit();
        break;
  
      default:
        process.stderr.write('\nWrong instruction!\n');
      }
    }
  });
}

program();
