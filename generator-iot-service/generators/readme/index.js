const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, options) {
    super(args, options);

    this.option('name', {
      type: String,
      required: true,
      desc: 'Service Name'
    });

    this.option('authorName', {
      type: String,
      required: true,
      desc: 'Author name'
    });

    this.option('githubUsername', {
      type: String,
      required: true,
      desc: 'GitHub Username'
    });

    this.option('authorUrl', {
      type: String,
      required: true,
      desc: 'Author url'
    });

    this.option('license', {
      type: String,
      required: false,
      desc: 'License',
      default: 'MIT'
    });

    this.props = Object.assign({}, this.options);
  }

  prompting() {
    const prompts = [
      {
        name: 'name',
        message: 'Service Name',
        when: !this.options.name
      },
      {
        name: 'authorName',
        message: 'Author name',
        when: !this.options.authorName
      },
      {
        name: 'githubUsername',
        message: 'GitHub Username',
        when: !this.options.githubUsername
      },
      {
        name: 'authorUrl',
        message: 'Author url',
        when: !this.options.authorUrl
      },
      {
        name: 'license',
        message: 'License',
        when: !this.options.license
      }
    ];

    return this.prompt(prompts)
      .then(props => Object.assign(this.props, props));
  }

  writing() {
    this.log(this.options.authorName);

    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath(this.contextRoot + '/' + this.props.name, 'README.md'),
      {
        serviceName: this.props.name,
        author: {
          name: this.props.authorName,
          url: this.props.authorUrl
        },
        githubAccount: this.props.githubUsername,
        license: this.props.license
      }
    );
  }
}
