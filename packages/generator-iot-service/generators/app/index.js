const Generator = require('yeoman-generator');

module.exports = class extends Generator {
	constructor(args, options) {
		super(args, options);

		this.option('name', {
			type: String,
			required: true,
			desc: 'Service name'
		});

		this.option('githubUsername', {
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

		this.option('authorUrl', {
			type: String,
			required: false,
			desc: 'Author URL',
			default: 'https://github.com/niktekusho'
		});

		this.option('authorMail', {
			type: String,
			required: false,
			desc: 'Author email',
			default: 'nicola.dalmaso@outlook.com'
		});

		this.option('description', {
			type: String,
			required: false,
			desc: 'Description'
		});

		this.option('license', {
			type: String,
			required: false,
			desc: 'License',
			default: 'MIT'
		});

		this.option('repositoryUrl', {
			type: String,
			required: false,
			desc: 'Repository URL',
			default: 'https://github.com/niktekusho/IoTDashboard'
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
				type: 'input',
				message: 'Service Name',
				when: !this.options.name
			},
			{
				name: 'version',
				type: 'input',
				message: 'Version',
				when: !this.options.version
			},
			{
				name: 'description',
				type: 'input',
				message: 'Description',
				when: !this.options.description
			},
			{
				name: 'repositoryUrl',
				type: 'input',
				message: 'Repository URL',
				when: !this.options.repositoryUrl
			},
			{
				name: 'authorName',
				type: 'input',
				message: 'Author name',
				when: !this.options.authorName
			},
			{
				name: 'license',
				type: 'input',
				message: 'License',
				when: !this.options.license
			},
			{
				name: 'private',
				type: 'confirm',
				message: 'Private',
				when: !this.options.private
			}
		];

		return this.prompt(prompts)
			.then(props => Object.assign(this.props, props));
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
