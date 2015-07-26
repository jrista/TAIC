// Showdown fix for AngularMarkdownText
if (!Showdown && showdown) {
	window.Showdown = showdown;
	Showdown.converter = showdown.Converter;
}