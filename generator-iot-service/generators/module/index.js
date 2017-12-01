const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, options) {
    super(args, options);

    this.option('name', {
      type: String,
      required: true,
      desc: 'Service Name'
    });

    this.option('version', {
      type: String,
      required: true,
      desc: 'Version',
      default: '1.0.0'
    });

    this.option('description', {
      type: String,
      required: true,
      desc: 'Description'
    });

    this.option('repositoryUrl', {
      type: String,
      required: true,
      desc: 'Repository Url',
      default: 'https://github.com/niktekusho/IoTDashboard'
    });

    this.option('authorName', {
      type: String,
      required: true,
      desc: 'Author name',
      default: 'Nicola Dal Maso'
    });

    this.option('license', {
      type: String,
      required: false,
      desc: 'License',
      default: 'MIT'
    });

    this.option('private', {
      type: Boolean,
      required: true,
      desc: 'Private'
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
        name: 'version',
        message: 'Version',
        when: !this.options.version
      },
      {
        name: 'description',
        message: 'Description',
        when: !this.options.description
      },
      {
        name: 'repositoryUrl',
        message: 'Repository URL',
        when: !this.options.repositoryUrl
      },
      {
        name: 'authorName',
        message: 'Author name',
        when: !this.options.authorName
      },
      {
        name: 'license',
        message: 'License',
        when: !this.options.license
      },
      {
        name: 'private',
        message: 'Private',
        when: !this.options.private
      }
    ];

    return this.prompt(prompts)
      .then(props => Object.assign(this.props, props));
  }

  writing() {
    this.contextRoot += '/' + this.props.name;

    const pkg = {
      name: this.props.name,
      version: this.props.version,
      description: this.props.description,
      repository: this.props.repositoryUrl,
      author: this.props.authorName,
      license: this.props.license,
      private: this.props.private ? 'true' : 'false',
      scripts: {
        eslint: 'eslint',
        jest: 'jest',
        lint: 'eslint src/ test/',
        start: 'node src/index.js',
        test: 'jest'
      },
      devDependencies: {
        eslint: '^4.12.1',
        jest: '^21.2.1'
      }
    };

    this.fs.writeJSON(
      this.destinationPath(this.contextRoot + '/' + 'package.json'),
      pkg
    );
  }
}
