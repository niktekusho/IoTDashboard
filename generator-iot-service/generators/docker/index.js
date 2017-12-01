const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, options) {
    super(args, options);

    this.option('name', {
      type: String,
      required: true,
      desc: 'Service Name'
    });

    this.props = Object.assign({}, this.options);
  }

  prompting() {
    const prompts = [
      {
        name: 'name',
        message: 'Service Name',
        when: !this.options.name
      }
    ];

    return this.prompt(prompts)
      .then(props => Object.assign(this.props, props));
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('Dockerfile'),
      this.destinationPath(this.contextRoot + '/' + this.props.name, 'Dockerfile')
    );
    this.fs.copyTpl(
      this.templatePath('.dockerignore'),
      this.destinationPath(this.contextRoot + '/' + this.props.name, '.dockerignore')
    );
  }
}
