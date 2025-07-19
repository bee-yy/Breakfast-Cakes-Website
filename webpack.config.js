// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
	mode: "development",
	entry: "./src/index.js",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},
	devtool: "eval-source-map",
	devServer: {
		watchFiles: ["./src/template.html"],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/template.html",
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, "src/assets"), // adjust path as needed
					to: "assets", // copied into dist/assets/
				},
			],
		}),
	],
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				type: "asset/resource",
			},
			{
				test: /\.html$/i,
				loader: "html-loader",
			},

			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				type: "asset/resource",
				generator: {
					filename: "fonts/[name][ext]", // where to output fonts
				},
			},
		],
	},
};
