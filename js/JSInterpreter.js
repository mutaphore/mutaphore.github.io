module.exports = function(cmd, term) {
    if (cmd !== '') {
        try {
            var result = window.eval(cmd);
            if (result !== undefined) {
                term.echo(new String(result));
            }
        } catch(e) {
            term.error(new String(e));
        }
    } else {
       term.echo('');
    }
}