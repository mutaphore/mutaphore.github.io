import $ from "./js/jquery.terminal-0.8.7.min.js"

var Terminal = function() {
    this.term = null;
};

Terminal.greetingsMsg = '==Welcome to my terminal emulator==\n' + 
                        'Type "help" to get a list of commands\n' + 
                        'Type "clear" to clear the screen\n' +
                        'Type "exit" to exit any nested interpreters';

Terminal.prototype.init = function() {

    this.term = $('#term').terminal({
        help: function() {
            this.echo("echo <arg>           =>      echoes the argument");
            this.echo("add <arg1> <arg2>    =>      adds two objects");
            this.echo("js                   =>      runs the javascript interpreter");
            // this.echo("lr                   =>      runs linear regression");
        },
        echo: function(arg1) {
            this.echo(arg1);
        },
        add: function(a, b) {
            this.echo(a+b);
        },
        js: function() {
            this.push(function(cmd, term) {
                new JSInterpreter(cmd, term);
            },
            {
                prompt: 'js> ',
                name: 'Javascript interpreter',
                greetings: 'JS interpreter'
            });
        },
        lr: function() {
            this.push(function(cmd, term) {                
                new LinearRegression(cmd, term);
            },
            {
                prompt: '> '
            });
        },
        history: function() {
            var data = this.history().data();
            for (var i in data)
                this.echo(data[i]);
        },
        exit: function() {
            this.pop();
        }
    },
    {
        prompt: '> ',
        name: 'Command line',
        greetings: Terminal.greetingsMsg,
        onClear: function(term) {
            term.echo(Terminal.greetingsMsg);
        }
    });
}

module.exports = Terminal;