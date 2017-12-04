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
				type: 'input',
				message: 'Service Name',
				when: !this.options.name
			}
		];

		return this.prompt(prompts)
			.then(props => Object.assign(this.props, props));
	}

	writing() {
		this.fs.copyTpl(
			this.templatePath('.eslintignore'),
			this.destinationPath(this.contextRoot + '/' + this.props.name, '.eslintignore')
		);

		this.fs.copyTpl(
			this.templatePath('.eslintrc.json'),
			this.destinationPath(this.contextRoot + '/' + this.props.name, '.eslintrc.json')
		);
	}
};
