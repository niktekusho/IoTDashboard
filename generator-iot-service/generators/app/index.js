const Generator = require('yeoman-generator');

module.exports = class extends Generator {
	constructor(args, options) {
		super(args, options);

		this.option('name', {
			type: String,
			required: true,
			desc: 'Service name'
		});

		this.option('githubAccount', {
			type: String,
			required: false,
			desc: 'GitHub username or organization',
			default: 'niktekusho'
		});

		this.option('authorName', {
			type: String,
			required: false,
			desc: 'Author name',
			default: 'Nicola Dal Maso'
		});

		this.option('authorMail', {
			type: String,
			required: false,
			desc: 'Author email',
			default: 'nicola.dalmaso@outlook.com'
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
      .then(props => this.props = props);
	}

	default() {
		this.composeWith(require.resolve('../docker'), {
			name: this.props.name
		});

		this.composeWith(require.resolve('../linting'), {
			name: this.props.name
		});

		this.composeWith(require.resolve('../module'), {
			name: this.props.name,
			version: this.props.version,
			description: this.props.description,
			repositoryUrl: this.props.repositoryUrl,
			authorName: this.props.authorName,
			license: this.props.license,
			private: this.props.private
		});

		this.composeWith(require.resolve('../readme'), {
			name: this.props.name,
			authorName: this.props.authorName,
			githubUsername: this.props.githubUsername,
			authorUrl: this.props.authorUrl,
			license: this.props.license
		});
	}
};
