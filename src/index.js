module.exports = function(Handlebars)
{
	let usedKinds = [];
	const pluralizations = {
		'Enumeration': 'Enumerations',
		'Class': 'Classes',
		'Interface': 'Interfaces',
		'Type alias': 'Type aliases',
		'Function': 'Functions',
		'Variable': 'Variables'
	};

	Handlebars.registerHelper('useKind', value =>
	{
		if (usedKinds.includes(value))
			return;

		usedKinds.push(value);
		return pluralizations[value];
	});

	Handlebars.registerHelper('resetUsedKinds', () =>
	{
		usedKinds = [];
	});

	Handlebars.registerHelper('wasKindUsed', value => usedKinds.includes(value));
};
